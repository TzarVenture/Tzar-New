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
    <section className="relative py-16 sm:py-20 bg-[#FAF7F2] overflow-hidden border-t border-b border-[rgba(29,66,36,0.1)]">
      {/* Subtle diagonal micro-pattern backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #1D4224 0, #1D4224 1px, transparent 0, transparent 12px)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#1D4224] font-black block">
            DIGITAL ARCHITECTURE &amp; GROWTH SYSTEMS
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight mt-2 leading-tight">
            Engineer High-Impact Digital Platforms &amp; Scalable Traffic
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#5C6860] mt-1.5">
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
              title="From Architecture to Execution: Let's Build Together"
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
              <div className="group flex items-start gap-4 p-3.5 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-[rgba(29,66,36,0.1)]">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#1D4224]/20 shadow-sm flex items-center justify-center text-[#1D4224] shrink-0 group-hover:scale-105 group-hover:bg-[#1D4224] group-hover:text-white transition-all duration-200">
                  <Code2 className="w-6 h-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#1D4224] tracking-tight">
                    Full-Stack &amp; Next.js Architecture
                  </h3>
                  <p className="text-sm sm:text-base text-[#2B3A30] leading-relaxed">
                    Custom web platforms and enterprise web applications engineered for sub-second Core Web Vitals, headless flexibility, and high availability.
                  </p>
                </div>
              </div>

              {/* Item 2: Technical SEO & Traffic Architecture */}
              <div className="group flex items-start gap-4 p-3.5 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-[rgba(29,66,36,0.1)]">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#1D4224]/20 shadow-sm flex items-center justify-center text-[#1D4224] shrink-0 group-hover:scale-105 group-hover:bg-[#1D4224] group-hover:text-white transition-all duration-200">
                  <Gauge className="w-6 h-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#1D4224] tracking-tight">
                    Technical SEO &amp; Traffic Architecture
                  </h3>
                  <p className="text-sm sm:text-base text-[#2B3A30] leading-relaxed">
                    Data-driven organic search strategies, semantic schema graphs, and programmatic page generators built to capture massive qualified search demand.
                  </p>
                </div>
              </div>

              {/* Item 3: Cloud Infrastructure & AI Automations */}
              <div className="group flex items-start gap-4 p-3.5 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-[rgba(29,66,36,0.1)]">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#1D4224]/20 shadow-sm flex items-center justify-center text-[#1D4224] shrink-0 group-hover:scale-105 group-hover:bg-[#1D4224] group-hover:text-white transition-all duration-200">
                  <Cpu className="w-6 h-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#1D4224] tracking-tight">
                    Cloud Infrastructure &amp; AI Automations
                  </h3>
                  <p className="text-sm sm:text-base text-[#2B3A30] leading-relaxed">
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
