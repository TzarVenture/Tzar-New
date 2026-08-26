"use client";

import React, { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../../data/company';

export const AboutStage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="about" className="bg-[#FAF9F5] py-32 text-[#1A1C19] border-b border-[#E2E3DE]">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="font-rubik text-xs font-bold uppercase tracking-widest text-[#052C10]">
            About Tzar Venture
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-[#1A1C19]">
            Architecting High-Yield Digital Infrastructure
          </h2>
          <p className="font-inter text-base sm:text-lg text-[#424941] leading-relaxed">
            {COMPANY.description}
          </p>

          <div className="pt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 font-inter text-sm font-semibold text-[#052C10]">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span>100+ Enterprise & D2C Clients</span>
            </div>
            <div className="flex items-center gap-2 font-inter text-sm font-semibold text-[#052C10]">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span>Sub-Second Web Apps</span>
            </div>
            <div className="flex items-center gap-2 font-inter text-sm font-semibold text-[#052C10]">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span>Mumbai Headquarters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
