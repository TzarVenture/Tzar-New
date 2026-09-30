'use client';

import React from 'react';
import Image from 'next/image';

interface GraphicArtboardStudioProps {
  className?: string;
}

export const GraphicArtboardStudio: React.FC<GraphicArtboardStudioProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      {/* Ambient Backlight Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1D4224]/50 via-[#FFAE00]/20 to-[#1D4224]/40 rounded-3xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Art Showcase Container */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#1D4224]/50 shadow-2xl shadow-black/80 bg-black group">
        <img
          src="/assets/images/graphic-design-hero.png"
          alt="Tzar Venture Graphic Design & Brand Aesthetics Artboard"
          className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default GraphicArtboardStudio;
