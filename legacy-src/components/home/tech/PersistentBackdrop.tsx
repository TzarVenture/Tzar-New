"use client";

import React from "react";
import "./PersistentBackdrop.css";

export default function PersistentBackdrop() {
  return (
    <div className="persistent-backdrop-container" aria-hidden="true">
      {/* Deep obsidian-emerald base */}
      <div className="persistent-backdrop-base" />

      {/* ── ORB 1: PRIMARY VOLUMETRIC LUMINOUS ORB (Centered / Behind Hero) ──── */}
      <div className="orb-primary" />
      <div className="orb-primary-core" />

      {/* ── ORB 2: SECONDARY AMBIENT EMERALD ORB (Right-Center) ──────────────── */}
      <div className="orb-secondary" />

      {/* ── ORB 3: LOWER ATMOSPHERIC DEPTH ORB (Bottom-Left) ─────────────────── */}
      <div className="orb-tertiary" />

      {/* Subtle deep vignette to keep edges deep black */}
      <div className="persistent-backdrop-vignette" />
    </div>
  );
}
