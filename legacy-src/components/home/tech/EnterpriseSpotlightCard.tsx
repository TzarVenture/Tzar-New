'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   ENTERPRISE PLATFORM SVG ICONS (AUTHENTIC ENTERPRISE BRAND / CAPABILITY)
   ────────────────────────────────────────────────────────────────────────── */

const CrmPipelineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M7 10l3 3 7-7" stroke="#D4AF37" strokeWidth="2.2" />
  </svg>
);

const ErpGridIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const PortalNetworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SaasCloudIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    <polyline points="13 14 16 11 19 14" stroke="#8B5CF6" strokeWidth="2" />
    <line x1="16" y1="11" x2="16" y2="17" stroke="#8B5CF6" strokeWidth="2" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   ENTERPRISE SOFTWARE SHOWCASE DATA
   ────────────────────────────────────────────────────────────────────────── */

interface EnterpriseItem {
  id: string;
  name: string;
  shortName: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  category: string;
  icon: React.FC;
  brandColor: string;
  mockupImage: string;
  caseStudyLink: string;
}

const ENTERPRISE_SOLUTIONS: EnterpriseItem[] = [
  {
    id: 'custom-crm',
    name: 'Custom CRM Platforms',
    shortName: 'Custom CRM',
    titleLine1: 'Custom CRM',
    titleLine2: 'Platforms',
    tagline: 'Bespoke CRM Systems',
    category: 'Lead Scoring, Sales Pipelines & SLA Automation',
    icon: CrmPipelineIcon,
    brandColor: '#D4AF37',
    mockupImage: '/mockups/duo-tzar-crm.webp',
    caseStudyLink: '/website-development-services#lead-form',
  },
  {
    id: 'enterprise-erp',
    name: 'Enterprise ERP Portals',
    shortName: 'Enterprise ERP',
    titleLine1: 'Enterprise',
    titleLine2: 'ERP Portals',
    tagline: 'Enterprise ERP Portals',
    category: 'Resource Planning, Compliance & Multi-Entity Auditing',
    icon: ErpGridIcon,
    brandColor: '#3B82F6',
    mockupImage: '/mockups/duo-ay-astute-crm.webp',
    caseStudyLink: '/website-development-services#lead-form',
  },
  {
    id: 'internal-portals',
    name: 'Internal Tools & Portals',
    shortName: 'Internal Portals',
    titleLine1: 'Internal Tools',
    titleLine2: '& Portals',
    tagline: 'Internal Workflow Portals',
    category: 'Workforce Orchestration & Role-Based Workspaces',
    icon: PortalNetworkIcon,
    brandColor: '#10B981',
    mockupImage: '/mockups/duo-kaammilega-portal.webp',
    caseStudyLink: '/website-development-services#lead-form',
  },
  {
    id: 'b2b-saas',
    name: 'B2B SaaS Ecosystems',
    shortName: 'B2B SaaS',
    titleLine1: 'B2B SaaS',
    titleLine2: 'Ecosystems',
    tagline: 'Multi-Tenant SaaS Platforms',
    category: 'Multi-Tenant Cloud, Subscription Billing & Telemetry',
    icon: SaasCloudIcon,
    brandColor: '#8B5CF6',
    mockupImage: '/mockups/duo-adshalaa-platform.webp',
    caseStudyLink: '/website-development-services#lead-form',
  },
];

// 2-second continuous auto-cycle interval matching Card 01 & Card 02
const AUTO_SCROLL_INTERVAL_MS = 2000;

export const EnterpriseSpotlightCard: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setPrevIdx(activeIdx);
    setActiveIdx(idx);
  };

  // Auto-scroll / cycling continuously every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((current) => {
        setPrevIdx(current);
        return (current + 1) % ENTERPRISE_SOLUTIONS.length;
      });
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const handleEnquireScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact-form') || document.getElementById('lead-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const current = ENTERPRISE_SOLUTIONS[activeIdx];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 h-full w-full">
      {/* ══════════════════════════════════════════════════════════════════════
          LEFT HALF: 50% WIDTH PURE WHITE EDITORIAL CANVAS (#FFFFFF)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white text-[#0E2015] p-4 sm:p-6 lg:p-9 flex flex-col justify-between shrink-0 md:shrink md:h-full border-b md:border-b-0 md:border-r border-[#B8860B]/12">
        <div className="flex flex-col md:flex-1 md:min-h-0">
          {/* Primary Headlines */}
          <div className="shrink-0">
            <h3 className="font-montserrat font-extrabold text-[26px] sm:text-2xl lg:text-[28px] text-[#0E2015] tracking-tight leading-tight">
              Enterprise Business Software &amp; CRM
            </h3>
            <p className="hidden md:block text-xs sm:text-sm text-[#5C6860] font-inter mt-1.5 leading-relaxed">
              Bespoke enterprise portals, automated onboarding workflows, and centralized revenue pipelines engineered for operational scale and data governance.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              2×2 CAPABILITY GRID (CLOCKWISE SEQUENCE: CRM -> ERP -> SAAS -> PORTALS)
              ══════════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3.5 mt-3 sm:mt-6 md:mt-4 md:mb-2 md:flex-1 md:grid-rows-2 md:min-h-0">
            {ENTERPRISE_SOLUTIONS.map((item, idx) => {
              const isActive = activeIdx === idx;
              const IconComponent = item.icon;
              // Clockwise layout: [0: Top-Left, 1: Top-Right, 3: Bottom-Left, 2: Bottom-Right]
              const gridOrderClass = idx === 0 ? 'order-1' : idx === 1 ? 'order-2' : idx === 2 ? 'order-4' : 'order-3';

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between gap-2.5 p-1.5 md:h-full md:py-4 md:px-4 lg:md:px-5 rounded-xl md:rounded-2xl border-0 md:border md:border-[#B8860B]/10 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative ${gridOrderClass} ${
                    isActive
                      ? 'bg-transparent md:bg-white shadow-none md:shadow-xs'
                      : 'bg-transparent md:bg-[#F9F7F5] md:hover:bg-[#F3EFE9]'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4 min-w-0">
                    {/* Icon badge - raw icon on mobile, framed on desktop */}
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-transparent md:bg-white border-0 md:border flex items-center justify-center shrink-0 shadow-none md:shadow-xs transition-transform duration-500 ease-out"
                      style={{ borderColor: `${item.brandColor}30` }}
                    >
                      <IconComponent />
                    </div>

                    {/* Title - mobile single line, desktop 2 bold lines */}
                    <div className="min-w-0">
                      {/* Mobile single-line title */}
                      <span
                        className={`md:hidden font-montserrat text-[15px] sm:text-base leading-snug truncate transition-all duration-500 ${
                          isActive
                            ? 'text-[#8B6914] font-extrabold'
                            : 'text-[#6C7870] font-bold'
                        }`}
                      >
                        {item.shortName || item.name}
                      </span>

                      {/* Desktop 2-line title */}
                      <div
                        className={`hidden md:flex flex-col leading-[1.18] font-montserrat font-extrabold text-[16px] lg:text-[18px] tracking-tight transition-colors duration-500 ${
                          isActive
                            ? 'text-[#0E2015]'
                            : 'text-[#2D3C30]'
                        }`}
                      >
                        <span className="block truncate">{item.titleLine1}</span>
                        <span className="block truncate">{item.titleLine2}</span>
                      </div>
                    </div>
                  </div>

                  {/* Directional Arrow Reveal (→) - hidden on mobile, shown on desktop */}
                  <div
                    className={`hidden md:flex shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-2 pointer-events-none'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 text-[#8B6914]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tech Footer Snippet */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-5 border-t border-[#B8860B]/12 mt-3 sm:mt-5 shrink-0">
          {/* Smooth Cross-Fade Footer Text (Old Fading Up, New Coming Up) */}
          <div className="min-w-0 flex-1 relative h-10 sm:h-11 overflow-hidden">
            {ENTERPRISE_SOLUTIONS.map((item, idx) => {
              const isSelected = activeIdx === idx;
              const isPrevText = prevIdx === idx;

              let textMotionClass = '';
              if (isSelected) {
                // Incoming: rises up from below into center
                textMotionClass = 'opacity-100 translate-y-0 pointer-events-auto';
              } else if (isPrevText) {
                // Outgoing: floats up into top and fades away
                textMotionClass = 'opacity-0 -translate-y-5 pointer-events-none';
              } else {
                // Standby: waiting below
                textMotionClass = 'opacity-0 translate-y-5 pointer-events-none';
              }

              return (
                <div
                  key={`footer-text-${item.id}`}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${textMotionClass}`}
                >
                  <div className="font-montserrat font-bold text-[14px] sm:text-sm text-[#0E2015] truncate">
                    <span className="md:hidden">{item.tagline}</span>
                    <span className="hidden md:inline">{item.name}</span>
                  </div>
                  <div className="hidden md:block text-[10px] sm:text-[11px] font-mono text-[#8B6914] font-medium truncate">
                    {item.category}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enquire Now Button (pinned to right-most edge) */}
          <button
            type="button"
            onClick={handleEnquireScroll}
            className="group shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#1D4224] hover:bg-[#14301A] text-white rounded-full font-montserrat font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          RIGHT HALF: 50% WIDTH DEEP OBSIDIAN BRONZE CANVAS (#1C150A – #080602)
          FADING UP (EXIT) & COMING UP (ENTER) 3D ENTERPRISE DUO MOCKUP STACK
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative flex-1 flex items-center justify-center p-0 sm:p-3 lg:p-4 overflow-hidden h-[310px] sm:h-[350px] md:h-full min-h-[300px] bg-gradient-to-br from-[#1C150A] via-[#120E06] to-[#080602]">
        {/* Ambient Subtle Warm Gold Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.14) 0%, rgba(184, 134, 11, 0.05) 45%, transparent 75%)',
          }}
        />

        {/* Layered Stack: Old mockup glides up & fades out, new mockup rises up from below */}
        <div className="relative w-full h-full flex items-center justify-center select-none z-10">
          {ENTERPRISE_SOLUTIONS.map((item, idx) => {
            const isActive = activeIdx === idx;
            const isPrev = prevIdx === idx;

            let motionClass = '';
            if (isActive) {
              // Active: glides up into center from below, scaled up on mobile to boldly fill the canvas
              motionClass = 'opacity-100 translate-y-0 scale-[1.18] sm:scale-100 z-10 pointer-events-auto';
            } else if (isPrev) {
              // Outgoing: fades up towards the top
              motionClass = 'opacity-0 -translate-y-12 scale-[1.12] sm:scale-[0.96] z-0 pointer-events-none';
            } else {
              // Standby: positioned below waiting to rise
              motionClass = 'opacity-0 translate-y-12 scale-[1.12] sm:scale-[0.96] z-0 pointer-events-none';
            }

            return (
              <div
                key={`mockup-layer-${item.id}`}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${motionClass}`}
              >
                <Image
                  src={item.mockupImage}
                  alt={item.name}
                  width={1080}
                  height={1350}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-[250px] sm:h-[290px] md:h-[84%] max-h-[460px] sm:max-h-[440px] md:max-h-[460px] lg:max-h-[485px] w-auto max-w-[96%] sm:max-w-[94%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSpotlightCard;
