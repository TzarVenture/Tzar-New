"use client";

import React from "react";
import dynamic from "next/dynamic";

const HeroShaderBackground = dynamic(
  () => import("./HeroShaderBackground"),
  { ssr: false }
);

export default function PersistentBackdrop() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
      aria-hidden="true"
    >
      {/* Base luxury dark canvas layer */}
      <div className="absolute inset-0 bg-[#061309]" />

      {/* Dynamic 3D WebGL Shader Wave Canvas */}
      <HeroShaderBackground />

      {/* Ambient lighting glows for smooth continuous parallax depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#1B4D25]/25 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#FFAE00]/5 blur-[160px] pointer-events-none" />
    </div>
  );
}
