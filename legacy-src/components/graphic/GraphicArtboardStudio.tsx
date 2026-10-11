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
      <div className="absolute -inset-1.5 bg-linear-to-r from-[#1D4224]/50 via-[#FFAE00]/20 to-[#1D4224]/40 rounded-3xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Art Showcase Container */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#1D4224]/50 shadow-2xl shadow-black/80 bg-black group">
        <Image
          src="/assets/images/graphic-design-hero.webp"
          alt="Tzar Venture Graphic Design & Brand Aesthetics Artboard"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default GraphicArtboardStudio;
