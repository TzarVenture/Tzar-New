"use client";

import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

/**
 * The actual three.js / WebGL water-plane gradient. Only ever loaded through
 * HeroShaderBackground, which decides whether and when this chunk is fetched.
 */
export default function HeroShaderCanvas() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fade in gracefully once client mounts and WebGL context is established
    const timer = setTimeout(() => setIsReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const shaderProps = {
    animate: "on" as const,
    axesHelper: "off",
    bgColor1: "#061309",
    bgColor2: "#061309",
    brightness: 0.45,
    cAzimuthAngle: 180,
    cDistance: 3.9,
    cPolarAngle: 115,
    cameraZoom: 1,
    color1: "#1B4D25",
    color2: "#143D1D",
    color3: "#07170B",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city" as const,
    fov: 45,
    gizmoHelper: "hide",
    grain: "off" as const,
    lightType: "3d" as const,
    pixelDensity: 1,
    positionX: -0.5,
    positionY: 0.1,
    positionZ: 0,
    range: "disabled" as const,
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 235,
    shader: "defaults",
    type: "waterPlane" as const,
    uAmplitude: 0,
    uDensity: 1.1,
    uFrequency: 5.5,
    uSpeed: 0.12,
    uStrength: 2.4,
    uTime: 0.2,
    wireframe: false,
  };

  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000 ease-out ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
    >
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        // Unmounts the WebGL canvas while the hero is scrolled out of view,
        // so the GPU stops rendering frames nobody can see.
        lazyLoad={true}
        threshold={0}
        rootMargin="0px"
        // "default" lets the browser pick the GPU; "high-performance" forced
        // the discrete GPU on dual-GPU laptops and drained battery.
        powerPreference="default"
        pixelDensity={1}
        fov={45}
        pointerEvents="none"
      >
        <ShaderGradient {...(shaderProps as any)} />
      </ShaderGradientCanvas>
    </div>
  );
}
