import React from 'react';
import { Check, X, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const COMPARISON = [
  {
    feature: 'Core Web Platform',
    oldWay: 'Slow Monolithic Templates & Broken Plugins',
    tzarWay: 'Custom High-Performance Web & Mobile Architecture',
    badge: 'SUB-SECOND SPEED',
  },
  {
    feature: 'Page Speed & User Retention',
    oldWay: 'Slow 3-6s Load, High Bounce Rate (>60%)',
    tzarWay: 'Sub-Second Load (100/100 Lighthouse Performance)',
    badge: '100% PASS',
  },
  {
    feature: 'Lead Routing & CRM Automation',
    oldWay: 'Manual Spreadsheets & Unanswered Inquiries',
    tzarWay: 'Automated Real-Time WhatsApp & Sales Router',
    badge: 'AUTOMATED',
  },
  {
    feature: 'SEO & Search Engine Indexing',
    oldWay: 'Basic Meta Tags & Hidden on Page 3 of Google',
    tzarWay: 'Page #1 Google Organic Ranking Blueprint',
    badge: '#1 RANKINGS',
  },
  {
    feature: 'Brand Design & Product Packaging',
    oldWay: 'Generic Stock Renders & Flat Visuals',
    tzarWay: 'Custom 3D Product Renders & Luxury Packaging',
    badge: '3D STUDIO',
  },
];

export const TechArchitectureMatrix: React.FC = () => {
  return (
    <section className="py-24 framer-canvas-bg text-white relative linear-hairline-b">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#D4AF37]">
            <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase font-bold tracking-widest">FOUNDER DECISION MATRIX</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-[-0.04em]">
            Why Business Founders Partner with <br />
            <span className="text-[#D4AF37]">Tzar Venture Systems</span>
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#999999]">
            Compare outdated agency templates against our high-performance digital systems.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="framer-card-surface overflow-hidden">
          <div className="grid grid-cols-12 bg-[#1C1C1C] border-b border-[#262626] p-4 font-mono text-xs text-[#999999] uppercase tracking-widest font-bold">
            <div className="col-span-4 sm:col-span-3">Business Solution</div>
            <div className="col-span-4 sm:col-span-4 text-[#999999]">Traditional Agency</div>
            <div className="col-span-4 sm:col-span-5 text-[#D4AF37] font-bold">Tzar Venture Platform</div>
          </div>

          <div className="divide-y divide-[#262626] font-inter text-sm">
            {COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#1C1C1C]/50 transition-colors"
              >
                {/* Feature Column */}
                <div className="col-span-4 sm:col-span-3 pr-2">
                  <span className="font-montserrat font-bold text-white block text-sm sm:text-base">
                    {row.feature}
                  </span>
                </div>

                {/* Old Way Column */}
                <div className="col-span-4 sm:col-span-4 pr-2 flex items-center gap-2 text-[#999999] text-xs sm:text-sm">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{row.oldWay}</span>
                </div>

                {/* Tzar Way Column */}
                <div className="col-span-4 sm:col-span-5 flex items-center justify-between gap-2 text-white font-medium text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#1C1C1C] border border-[#262626] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <span className="text-white font-semibold">{row.tzarWay}</span>
                  </div>
                  <span className="hidden lg:inline-block font-mono text-[10px] font-bold text-[#D4AF37] bg-[#1C1C1C] px-2.5 py-1 rounded-full border border-[#262626] uppercase">
                    {row.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 framer-btn-primary"
          >
            <span>Upgrade Your Business System</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
