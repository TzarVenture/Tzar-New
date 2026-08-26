"use client";

import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { WaveGridBackground } from '../ui/WaveGridBackground';

export const HeroStage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#FAF9F5] text-[#1A1C19]">
      <WaveGridBackground />
      <div className="container mx-auto flex h-full flex-col justify-between px-6 pt-36 pb-16 sm:px-12 relative z-10">
        <div>
          <span className="inline-block rounded-full bg-[#052C10]/10 border border-[#052C10]/20 px-4 py-1.5 font-rubik text-xs font-bold uppercase tracking-widest text-[#052C10] mb-6">
            Production-Grade Digital Systems
          </span>
          <h1 className="font-montserrat font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1A1C19] leading-none max-w-5xl">
            WE MAKE <span className="text-[#052C10]">BUSINESS</span> MOVE.
          </h1>
          <p className="mt-8 max-w-xl font-inter text-base sm:text-lg text-[#424941] leading-relaxed">
            Tzar designs high-performing websites, business systems, and organic search engines that give ambitious companies room to grow.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[#E2E3DE] pt-8">
          <div className="flex items-center gap-8 font-mono text-xs text-[#727970]">
            <span>MUMBAI, INDIA</span>
            <span>✦</span>
            <span>EST. 2020</span>
          </div>
          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full bg-[#052C10] px-8 py-4 font-montserrat font-extrabold text-xs uppercase tracking-wider text-white hover:bg-[#1D4224] transition shadow-lg"
          >
            Explore Capabilities <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
