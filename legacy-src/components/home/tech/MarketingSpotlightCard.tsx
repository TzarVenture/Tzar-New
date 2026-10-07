'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   MARKETING & SEO SVG ICONS (AUTHENTIC TECHNICAL DISCIPLINE ICONS)
   ────────────────────────────────────────────────────────────────────────── */

const ProgrammaticSeoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <polyline points="11 8 11 11 14 11" stroke="#10B981" strokeWidth="2.2" />
  </svg>
);

const PerformanceAdsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" fill="#3B82F6" />
  </svg>
);

const ConversionFunnelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ContentAuthorityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   DIGITAL MARKETING & TECHNICAL SEO SHOWCASE DATA
   ────────────────────────────────────────────────────────────────────────── */

interface MarketingItem {
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

const MARKETING_SERVICES: MarketingItem[] = [
  {
    id: 'seo',
    name: 'Programmatic SEO',
    shortName: 'SEO',
    titleLine1: 'Technical',
    titleLine2: 'SEO Growth',
    tagline: 'Programmatic SEO Growth',
    category: 'Keyword Domination & Core Web Vitals Optimization',
    icon: ProgrammaticSeoIcon,
    brandColor: '#10B981',
    mockupImage: '/assets/images/seo-growth-dashboard.webp',
    caseStudyLink: '/search-engine-optimization-services#lead-form',
  },
  {
    id: 'paid-ads',
    name: 'Performance Paid Ads',
    shortName: 'Paid Ads',
    titleLine1: 'Performance',
    titleLine2: 'Paid Ads',
    tagline: 'High-ROAS Paid Ads',
    category: 'Meta & Google Multi-Touch Acquisition Engines',
    icon: PerformanceAdsIcon,
    brandColor: '#3B82F6',
    mockupImage: '/assets/images/paid-performance-dashboard.webp',
    caseStudyLink: '/search-engine-optimization-services#lead-form',
  },
  {
    id: 'funnels',
    name: 'Conversion Funnels',
    shortName: 'Funnels',
    titleLine1: 'Conversion',
    titleLine2: 'Rate Funnels',
    tagline: 'Conversion Rate Funnels',
    category: 'High-Velocity A/B Testing & Revenue Conversion',
    icon: ConversionFunnelIcon,
    brandColor: '#F59E0B',
    mockupImage: '/assets/images/seo-growth-dashboard.webp',
    caseStudyLink: '/search-engine-optimization-services#lead-form',
  },
  {
    id: 'content',
    name: 'Content Marketing',
    shortName: 'Content',
    titleLine1: 'Content',
    titleLine2: 'Marketing',
    tagline: 'Authority Content Engines',
    category: 'High-Intent Technical Articles & Organic Backlinks',
    icon: ContentAuthorityIcon,
    brandColor: '#8B5CF6',
    mockupImage: '/assets/images/paid-performance-dashboard.webp',
    caseStudyLink: '/search-engine-optimization-services#lead-form',
  },
];

// 2-second continuous auto-cycle interval matching Cards 01, 02, 03
const AUTO_SCROLL_INTERVAL_MS = 2000;

export const MarketingSpotlightCard: React.FC = () => {
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
        return (current + 1) % MARKETING_SERVICES.length;
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

  const current = MARKETING_SERVICES[activeIdx];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 h-full w-full">
      {/* ══════════════════════════════════════════════════════════════════════
          LEFT HALF: 50% WIDTH PURE WHITE EDITORIAL CANVAS (#FFFFFF)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white text-[#0E2015] p-4 sm:p-6 lg:p-9 flex flex-col justify-between shrink-0 md:shrink md:h-full border-b md:border-b-0 md:border-r border-[#1D4224]/10">
        <div className="flex flex-col md:flex-1 md:min-h-0">
          {/* Primary Headlines */}
          <div className="shrink-0">
            <h3 className="font-montserrat font-extrabold text-[26px] sm:text-2xl lg:text-[28px] text-[#0E2015] tracking-tight leading-tight">
              Digital Marketing &amp; Technical SEO
            </h3>
            <p className="hidden md:block text-xs sm:text-sm text-[#5C6860] font-inter mt-1.5 leading-relaxed">
              Data-driven organic search domination, programmatic architecture, and full-funnel paid media acquisition engineered for scalable ROAS.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              2×2 CAPABILITY GRID (CLOCKWISE SEQUENCE: SEO -> ADS -> CONTENT -> FUNNELS)
              ══════════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3.5 mt-3 sm:mt-6 md:mt-4 md:mb-2 md:flex-1 md:grid-rows-2 md:min-h-0">
            {MARKETING_SERVICES.map((item, idx) => {
              const isActive = activeIdx === idx;
              const IconComponent = item.icon;
              // Clockwise layout: [0: Top-Left, 1: Top-Right, 3: Bottom-Left, 2: Bottom-Right]
              const gridOrderClass = idx === 0 ? 'order-1' : idx === 1 ? 'order-2' : idx === 2 ? 'order-4' : 'order-3';

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between gap-2.5 p-1.5 md:h-full md:py-4 md:px-4 lg:md:px-5 rounded-xl md:rounded-2xl border-0 md:border md:border-[#1D4224]/8 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative ${gridOrderClass} ${
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
                            ? 'text-[#1D4224] font-extrabold'
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
                    <ArrowRight className="w-4 h-4 text-[#1D4224]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tech Footer Snippet */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-5 border-t border-[#1D4224]/10 mt-3 sm:mt-5 shrink-0">
          {/* Smooth Cross-Fade Footer Text (Old Fading Up, New Coming Up) */}
          <div className="min-w-0 flex-1 relative h-10 sm:h-11 overflow-hidden">
            {MARKETING_SERVICES.map((item, idx) => {
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
                  <div className="hidden md:block text-[10px] sm:text-[11px] font-mono text-[#1D4224] font-medium truncate">
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
          RIGHT HALF: 50% WIDTH DEEP CYBER EMERALD CANVAS (#062013 – #020B06)
          FADING UP (EXIT) & COMING UP (ENTER) DASHBOARD SHOWCASE STACK
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden h-[310px] sm:h-[350px] md:h-full min-h-[300px] bg-gradient-to-br from-[#062013] via-[#04160D] to-[#020B06]">
        {/* Ambient Subtle Cyber Emerald Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.05) 45%, transparent 75%)',
          }}
        />

        {/* Layered Stack: Old dashboard glides up & fades out, new dashboard rises up from below */}
        <div className="relative w-full h-full flex items-center justify-center select-none z-10 p-2 sm:p-4">
          {MARKETING_SERVICES.map((item, idx) => {
            const isActive = activeIdx === idx;
            const isPrev = prevIdx === idx;

            let motionClass = '';
            if (isActive) {
              // Active: glides up into center from below
              motionClass = 'opacity-100 translate-y-0 scale-100 z-10 pointer-events-auto';
            } else if (isPrev) {
              // Outgoing: fades up towards the top
              motionClass = 'opacity-0 -translate-y-12 scale-[0.96] z-0 pointer-events-none';
            } else {
              // Standby: positioned below waiting to rise
              motionClass = 'opacity-0 translate-y-12 scale-[0.96] z-0 pointer-events-none';
            }

            return (
              <div
                key={`mockup-layer-${item.id}`}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${motionClass}`}
              >
                <Image
                  src={item.mockupImage}
                  alt={item.name}
                  width={1000}
                  height={750}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-[230px] sm:h-[270px] md:h-[380px] max-h-[400px] w-auto max-w-[92%] object-contain rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.85)] border border-white/10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketingSpotlightCard;
