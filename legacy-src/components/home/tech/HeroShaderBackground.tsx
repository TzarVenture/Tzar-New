"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// The three.js chunk is only requested once this component decides to render it.
const HeroShaderCanvas = dynamic(() => import("./HeroShaderCanvas"), { ssr: false });

type NavigatorWithHints = Navigator & {
  connection?: { saveData?: boolean; effectiveType?: string };
  deviceMemory?: number;
};

/** Returns false when the animated WebGL background should be skipped. */
function shouldRenderShader(): boolean {
  if (typeof window === "undefined") return false;

  // Respect the user's motion preference.
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;

  const nav = navigator as NavigatorWithHints;

  // Respect data-saver mode and very slow connections (Chromium-only hints).
  if (nav.connection?.saveData) return false;
  if (nav.connection?.effectiveType && /2g$/.test(nav.connection.effectiveType)) return false;

  // Skip on clearly low-powered devices.
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return false;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2) return false;

  // Skip when WebGL is unavailable.
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") || canvas.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    return false;
  }
  return true;
}

/** If WebGL fails at runtime, render nothing so the static CSS gradient shows. */
class ShaderErrorBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[HeroShaderBackground] WebGL background disabled:", error);
    }
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * Animated hero background. The hero's static radial gradient (TechHero.css)
 * renders immediately; the WebGL layer is added only after the page has
 * loaded and the browser is idle, and is skipped entirely for reduced motion,
 * data saver, low-end devices, or missing WebGL.
 */
export default function HeroShaderBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!shouldRenderShader()) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const enable = () => {
      if (!cancelled) setEnabled(true);
    };
    const scheduleWhenIdle = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(enable, { timeout: 2000 });
      } else {
        timeoutId = window.setTimeout(enable, 300);
      }
    };

    if (document.readyState === "complete") {
      scheduleWhenIdle();
    } else {
      window.addEventListener("load", scheduleWhenIdle, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleWhenIdle);
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <ShaderErrorBoundary>
      <HeroShaderCanvas />
    </ShaderErrorBoundary>
  );
}
