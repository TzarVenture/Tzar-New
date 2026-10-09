'use client';

import React from 'react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';
import { Code2, Gauge, Cpu } from 'lucide-react';

export interface TrafficGrowthSectionProps {
  /** Optional custom form background color override */
  formBgColor?: string;
  /** Optional custom form text color override */
  formTextColor?: string;
}

export const TrafficGrowthSection: React.FC<TrafficGrowthSectionProps> = ({
  formBgColor = '#0E2015',
  formTextColor = '#FFFFFF',
}) => {
  return (
    <section id="contact-form" className="relative py-16 sm:py-20 bg-transparent overflow-hidden scroll-mt-8">
      {/* Subtle diagonal micro-pattern backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 12px)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#FFAE00] font-black block">
            DIGITAL ARCHITECTURE &amp; GROWTH SYSTEMS
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mt-2 leading-tight">
            Engineer High-Impact Digital Platforms &amp; Scalable Traffic
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-white/60 mt-1.5">
            TZAR VENTURE — TECHNOLOGY ARCHITECTURE &amp; PERFORMANCE SYSTEMS
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Form with original compact max-width restored */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <LeadCaptureForm
              bgColor={formBgColor}
              textColor={formTextColor}
              title="Let's Build Together"
              titleColor="#FFAE00"
              buttonBgColor="#1D4224"
              buttonTextColor="#FFFFFF"
            />
          </div>

          {/* Right Column: Standard Readable Text Size & Structured Feature Cards */}
          <div className="w-full space-y-4">
            {/* Pillar Feature Items with Standard Body & Heading Sizes */}
            <div className="space-y-4">
              
              {/* Item 1: Full-Stack & Next.js Architecture */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 bg-white/3 hover:bg-white/[0.07] backdrop-blur-md border border-white/10 hover:border-[#FFAE00]/40 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-[#FFAE00] shrink-0 group-hover:scale-105 group-hover:bg-[#FFAE00] group-hover:text-[#061309] transition-all duration-300">
                  <Code2 className="w-6 h-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFAE00] transition-colors tracking-tight">
                    Full-Stack &amp; Next.js Architecture
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    Custom web platforms and enterprise web applications engineered for sub-second Core Web Vitals, headless flexibility, and high availability.
                  </p>
                </div>
              </div>

              {/* Item 2: Technical SEO & Traffic Architecture */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 bg-white/3 hover:bg-white/[0.07] backdrop-blur-md border border-white/10 hover:border-[#FFAE00]/40 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-[#FFAE00] shrink-0 group-hover:scale-105 group-hover:bg-[#FFAE00] group-hover:text-[#061309] transition-all duration-300">
                  <Gauge className="w-6 h-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFAE00] transition-colors tracking-tight">
                    Technical SEO &amp; Traffic Architecture
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    Data-driven organic search strategies, semantic schema graphs, and programmatic page generators built to capture massive qualified search demand.
                  </p>
                </div>
              </div>

              {/* Item 3: Cloud Infrastructure & AI Automations */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 bg-white/3 hover:bg-white/[0.07] backdrop-blur-md border border-white/10 hover:border-[#FFAE00]/40 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-[#FFAE00] shrink-0 group-hover:scale-105 group-hover:bg-[#FFAE00] group-hover:text-[#061309] transition-all duration-300">
                  <Cpu className="w-6 h-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFAE00] transition-colors tracking-tight">
                    Cloud Infrastructure &amp; AI Automations
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    Automated conversion funnels, custom API middleware, and paid media acquisition algorithms delivering predictable, scalable ROI.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
