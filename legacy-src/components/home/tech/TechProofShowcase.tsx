"use client";

import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const CASE_STUDIES = [
  {
    client: 'HyperScale E-Commerce Brand',
    metric: '+340% Revenue Growth',
    details: 'Re-engineered online store to custom high-speed web architecture, reducing load time from 4.2s to 0.4s.',
    tag: 'E-COMMERCE ENGINE',
  },
  {
    client: 'B2B Enterprise Services',
    metric: '#1 Google Organic Ranking',
    details: 'Executed semantic technical SEO audit and ranking strategy, securing Page #1 results for core target keywords.',
    tag: 'ORGANIC SEO DOMINATION',
  },
  {
    client: 'FMCG Consumer Product',
    metric: '1.2M+ Views & Packaging Scale',
    details: 'Designed luxury 3D product box packaging and launched a multi-city billboard advertising campaign.',
    tag: '3D PACKAGING & MEDIA',
  },
];

export const TechProofShowcase: React.FC = () => {
  return (
    <section className="py-24 framer-canvas-bg text-white relative linear-hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#D4AF37]">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase font-bold tracking-widest">VERIFIED CLIENT PROOF & OUTCOMES</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-[-0.04em]">
            Trusted by Enterprise <br />
            <span className="text-[#D4AF37]">Business Founders</span>
          </h2>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c, idx) => (
            <div key={idx} className="framer-card-surface p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#D4AF37] bg-[#1C1C1C] px-3 py-1 rounded-full border border-[#262626] font-bold inline-block">
                  {c.tag}
                </span>

                <h3 className="font-montserrat font-bold text-2xl text-white">
                  {c.metric}
                </h3>

                <span className="font-mono text-xs text-[#999999] block font-semibold">
                  {c.client}
                </span>

                <p className="font-inter text-sm text-[#999999] leading-relaxed">
                  {c.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Verified Outcome</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
