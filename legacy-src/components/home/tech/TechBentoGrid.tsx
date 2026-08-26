"use client";

import React, { useState } from 'react';
import { LayoutGrid, Gauge, BarChart3, Users, Globe, Layers3, Sparkles } from 'lucide-react';

const FOUNDER_WORKFLOWS = {
  web: {
    title: 'Custom Web & Mobile App Architecture',
    metrics: [
      { label: 'Page Load Speed', val: '0.4s (Sub-Second)' },
      { label: 'Mobile Conversion Rate', val: '4.8% (+120% vs avg)' },
      { label: 'Platform Security', val: 'Bank-Grade SSL Firewall' },
    ],
    summary: 'Custom engineered web portals and mobile applications built for zero downtime, lightning speed, and maximum customer bookings.',
  },
  leads: {
    title: 'Automated Lead & Sales Router',
    metrics: [
      { label: 'Lead Dispatch Time', val: '< 1 Second (Instant)' },
      { label: 'CRM & WhatsApp Integration', val: '100% Automated' },
      { label: 'Sales Follow-up Rate', val: '99.2% Conversion Rate' },
    ],
    summary: 'Every website lead is instantly captured and routed directly to your sales team via WhatsApp, SMS, and CRM systems in real-time.',
  },
  seo: {
    title: 'Organic Search & Market Domination',
    metrics: [
      { label: 'Google Search Rank', val: '#1 Page Positions' },
      { label: 'Organic Traffic Growth', val: '+340% YoY Increase' },
      { label: 'Qualified Customer Acquisition', val: 'Cost reduced by 45%' },
    ],
    summary: 'Data-driven SEO strategies that place your business at the very top of Google when potential clients search for your services.',
  },
};

export const TechBentoGrid: React.FC = () => {
  const [activeModule, setActiveModule] = useState<'web' | 'leads' | 'seo'>('web');

  const current = FOUNDER_WORKFLOWS[activeModule];

  return (
    <section className="py-24 framer-canvas-bg text-white relative linear-hairline-b">
      
      {/* Section Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#262626]" />
      <div className="absolute top-0 left-8 -translate-y-1/2 text-neutral-600 font-mono text-xs select-none">+</div>
      <div className="absolute top-0 right-8 -translate-y-1/2 text-neutral-600 font-mono text-xs select-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#D4AF37]">
              <LayoutGrid className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="uppercase font-bold tracking-widest">ENTERPRISE BENTO CAPABILITIES</span>
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-[-0.04em] leading-tight">
              Empowering business founders with <br />
              <span className="text-[#D4AF37]">
                high-impact digital infrastructure.
              </span>
            </h2>
          </div>

          <p className="font-inter text-sm sm:text-base text-[#999999] max-w-md leading-relaxed">
            Everything your business needs to establish authority online, attract high-paying clients, and automate sales operations.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Interactive Business Executive Dashboard (7 Columns) */}
          <div className="lg:col-span-7 framer-card-surface p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Module Header & Switcher */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#262626] pb-4 gap-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono text-xs text-white font-bold">FOUNDER GROWTH DASHBOARD</span>
                </div>

                {/* Module Selector Tabs */}
                <div className="flex items-center gap-1 bg-[#090909] p-1 rounded-full border border-[#262626] text-xs font-mono">
                  <button
                    onClick={() => setActiveModule('web')}
                    className={`px-3 py-1 rounded-full transition ${activeModule === 'web' ? 'bg-[#1C1C1C] text-white font-bold' : 'text-[#999999] hover:text-white'}`}
                  >
                    Web & Apps
                  </button>
                  <button
                    onClick={() => setActiveModule('leads')}
                    className={`px-3 py-1 rounded-full transition ${activeModule === 'leads' ? 'bg-[#1C1C1C] text-white font-bold' : 'text-[#999999] hover:text-white'}`}
                  >
                    Lead Router
                  </button>
                  <button
                    onClick={() => setActiveModule('seo')}
                    className={`px-3 py-1 rounded-full transition ${activeModule === 'seo' ? 'bg-[#1C1C1C] text-white font-bold' : 'text-[#999999] hover:text-white'}`}
                  >
                    SEO Growth
                  </button>
                </div>
              </div>

              {/* Active Workflow Display */}
              <div className="bg-[#090909] rounded-2xl p-6 border border-[#262626] space-y-4">
                <h4 className="font-montserrat font-bold text-lg text-[#D4AF37]">
                  {current.title}
                </h4>

                <p className="font-inter text-sm text-[#999999] leading-relaxed">
                  {current.summary}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#141414] p-3 rounded-xl border border-[#262626]">
                      <span className="text-[10px] font-mono text-[#999999] uppercase block">{m.label}</span>
                      <span className="font-mono text-xs font-bold text-white mt-1 block">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                  Turn-Key Enterprise Solutions
                </h3>
                <p className="font-inter text-sm text-[#999999] leading-relaxed">
                  We handle design, development, domain setup, hosting, and marketing operations so you can focus entirely on growing your business.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between font-mono text-xs text-[#D4AF37] font-bold">
              <span>STATUS: LIVE & SCALABLE</span>
              <span>100% MANAGEMENT GUARANTEE ✓</span>
            </div>
          </div>

          {/* Card 2: Signature Atmospheric Gradient Spotlight Card (5 Columns) */}
          <div className="lg:col-span-5 framer-spotlight-tzar p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/20 flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="font-mono text-xs text-[#D4AF37] bg-black/40 px-3 py-1 rounded-full border border-white/20 uppercase font-bold">
                  ATMOSPHERIC SPOTLIGHT
                </span>
              </div>

              <div>
                <h3 className="font-montserrat font-extrabold text-2xl text-white mb-2 tracking-tight">
                  Sub-Second Speed Engine
                </h3>
                <p className="font-inter text-sm text-white/80 leading-relaxed">
                  Fast websites keep visitors engaged. We optimize every page for sub-second loading speeds to ensure potential clients stay and convert.
                </p>
              </div>

              {/* Founder Value Meters */}
              <div className="space-y-3 pt-2">
                <div className="bg-black/30 p-3.5 rounded-xl border border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/70">Mobile User Retention</span>
                  <span className="text-white font-bold">98.5% (EXCELLENT)</span>
                </div>
                <div className="bg-black/30 p-3.5 rounded-xl border border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/70">Average Load Time</span>
                  <span className="text-emerald-400 font-bold">&lt; 0.5 Seconds</span>
                </div>
                <div className="bg-black/30 p-3.5 rounded-xl border border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/70">Google Lighthouse Score</span>
                  <span className="text-[#D4AF37] font-bold">100 / 100 PERFECT</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/80">
              <span>BUSINESS GUARANTEE</span>
              <span className="text-[#D4AF37] font-bold">HIGH ROI VERIFIED</span>
            </div>
          </div>

          {/* Card 3: Automated Customer Acquisition (4 Columns) */}
          <div className="lg:col-span-4 framer-card-surface p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white">
                Automated Customer Acquisition
              </h3>
              <p className="font-inter text-sm text-[#999999] leading-relaxed">
                Capture high-intent business inquiries automatically and route them to your sales team on WhatsApp and phone instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#262626] font-mono text-xs text-[#D4AF37]">
              <span>SALES AUTOMATION →</span>
            </div>
          </div>

          {/* Card 4: Organic Search Domination Box (4 Columns) */}
          <div className="lg:col-span-4 framer-card-surface p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white">
                Google #1 Rank Domination
              </h3>
              <p className="font-inter text-sm text-[#999999] leading-relaxed">
                Outrank your competitors on Google for your core commercial keywords with our organic search domination blueprint.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#262626] font-mono text-xs text-[#D4AF37]">
              <span>SEARCH LEADERSHIP →</span>
            </div>
          </div>

          {/* Card 5: 3D Branding & Packaging Box (4 Columns) */}
          <div className="lg:col-span-4 framer-card-surface p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center">
                <Layers3 className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white">
                3D Product & Brand Renders
              </h3>
              <p className="font-inter text-sm text-[#999999] leading-relaxed">
                Premium 3D product renders, luxury packaging design, and pan-India billboard advertising to elevate corporate brand value.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#262626] font-mono text-xs text-[#D4AF37]">
              <span>BRAND ELEVATION →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
