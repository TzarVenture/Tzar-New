'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   PRODUCT DESIGN & PACKAGING SVG ICONS
   ────────────────────────────────────────────────────────────────────────── */

const BoxPackageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5 shrink-0" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const BottleDispenserIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5 shrink-0" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v4H9z" />
    <path d="M7 7h10l2 4v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l2-4z" />
    <line x1="12" y1="12" x2="12" y2="17" />
  </svg>
);

const LuxuryDielineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5 shrink-0" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="6 2 18 2 22 8 12 22 2 8 6 2" />
    <line x1="2" y1="8" x2="22" y2="8" />
  </svg>
);

const PrepressPrintIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5 shrink-0" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   PRODUCT DESIGN & PACKAGING SHOWCASE DATA
   ────────────────────────────────────────────────────────────────────────── */

interface PackagingItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  icon: React.FC;
  brandColor: string;
  mockupImage: string;
  caseStudyLink: string;
}

const PACKAGING_SERVICES: PackagingItem[] = [
  {
    id: '3d-modeling',
    name: '3D Structural Modeling',
    shortName: '3D Packaging',
    tagline: '3D Structural Packaging',
    category: 'Photorealistic Canister, Bottle & Precision 3D Rendering',
    icon: BoxPackageIcon,
    brandColor: '#E11D48',
    mockupImage: '/assets/images/projects/printPackaging1.png',
    caseStudyLink: '/product-design-packaging-services#lead-form',
  },
  {
    id: 'dispenser-bottle',
    name: 'Dispenser & Bottle Design',
    shortName: 'Bottles & Jars',
    tagline: 'Ergonomic Bottle Systems',
    category: 'Clinical Dermatology & Luxury Cosmetic Containers',
    icon: BottleDispenserIcon,
    brandColor: '#06B6D4',
    mockupImage: '/assets/images/projects/printPackaging2.png',
    caseStudyLink: '/product-design-packaging-services#lead-form',
  },
  {
    id: 'luxury-dielines',
    name: 'Luxury Dieline Layouts',
    shortName: 'Dielines',
    tagline: 'Luxury Foil Dielines',
    category: 'Pantone Spot Foiling & Rigid Magnetic Boxes',
    icon: LuxuryDielineIcon,
    brandColor: '#F59E0B',
    mockupImage: '/assets/images/projects/printPackaging3.png',
    caseStudyLink: '/product-design-packaging-services#lead-form',
  },
  {
    id: 'prepress-print',
    name: 'Prepress Print Production',
    shortName: 'Print Production',
    tagline: 'Prepress Print Finishes',
    category: 'Press-Ready Color Calibration & Velvet Drawer Finishes',
    icon: PrepressPrintIcon,
    brandColor: '#8B5CF6',
    mockupImage: '/assets/images/projects/printPackaging4.png',
    caseStudyLink: '/product-design-packaging-services#lead-form',
  },
];

// 2-second continuous auto-cycle interval matching all spotlight cards
const AUTO_SCROLL_INTERVAL_MS = 2000;

export const PackagingSpotlightCard: React.FC = () => {
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
        return (current + 1) % PACKAGING_SERVICES.length;
      });
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const current = PACKAGING_SERVICES[activeIdx];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 h-full w-full">
      {/* ══════════════════════════════════════════════════════════════════════
          LEFT HALF: 50% WIDTH PURE WHITE EDITORIAL CANVAS (#FFFFFF)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white text-[#0E2015] p-4 sm:p-6 lg:p-9 flex flex-col justify-between shrink-0 md:shrink md:h-full border-b md:border-b-0 md:border-r border-[#1D4224]/10">
        <div>
          {/* Primary Headlines */}
          <h3 className="font-montserrat font-extrabold text-[26px] sm:text-2xl lg:text-[28px] text-[#0E2015] tracking-tight leading-tight">
            Product Designing &amp; Packaging
          </h3>
          <p className="hidden md:block text-xs sm:text-sm text-[#5C6860] font-inter mt-1.5 leading-relaxed">
            Physical industrial design, structural 3D packaging, and production-ready print finishes for premium consumer brands.
          </p>

          {/* ══════════════════════════════════════════════════════════════════════
              2×2 CAPABILITY GRID (CLOCKWISE SEQUENCE: 3D -> BOTTLES -> PRINT -> DIELINES)
              ══════════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3.5 mt-3 sm:mt-6">
            {PACKAGING_SERVICES.map((item, idx) => {
              const isActive = activeIdx === idx;
              const IconComponent = item.icon;
              // Clockwise layout: [0: Top-Left, 1: Top-Right, 3: Bottom-Left, 2: Bottom-Right]
              const gridOrderClass = idx === 0 ? 'order-1' : idx === 1 ? 'order-2' : idx === 2 ? 'order-4' : 'order-3';

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between gap-2 p-1.5 md:py-3.5 md:px-4 rounded-xl border-0 md:border md:border-[#1D4224]/8 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative ${gridOrderClass} ${
                    isActive
                      ? 'bg-transparent md:bg-white shadow-none md:shadow-xs'
                      : 'bg-transparent md:bg-[#F9F7F5] md:hover:bg-[#F3EFE9]'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    {/* Icon badge - raw icon on mobile, framed on desktop */}
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-transparent md:bg-white border-0 md:border flex items-center justify-center shrink-0 shadow-none md:shadow-xs transition-transform duration-500 ease-out"
                      style={{ borderColor: `${item.brandColor}30` }}
                    >
                      <IconComponent />
                    </div>

                    {/* Title - highlighted on mobile when active */}
                    <span
                      className={`font-montserrat text-[15px] sm:text-base md:text-[13px] leading-snug truncate transition-all duration-500 ${
                        isActive
                          ? 'text-[#1D4224] font-extrabold md:text-[#0E2015] md:font-bold'
                          : 'text-[#6C7870] font-bold md:text-[#4A574E] md:font-bold'
                      }`}
                    >
                      <span className="md:hidden">{item.shortName || item.name}</span>
                      <span className="hidden md:inline">{item.name}</span>
                    </span>
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
        <div className="pt-3 sm:pt-5 border-t border-[#1D4224]/10 mt-3 sm:mt-5">
          {/* Smooth Cross-Fade Footer Text (Old Fading Up, New Coming Up) */}
          <div className="min-w-0 relative h-10 sm:h-11 w-full overflow-hidden">
            {PACKAGING_SERVICES.map((item, idx) => {
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
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          RIGHT HALF: 50% WIDTH DEEP OBSIDIAN MULBERRY CANVAS (#1C1019 – #080407)
          FADING UP (EXIT) & COMING UP (ENTER) 3D PACKAGING SHOWCASE STACK
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden h-[310px] sm:h-[350px] md:h-full min-h-[300px] bg-gradient-to-br from-[#1C1019] via-[#120A10] to-[#080407]">
        {/* Ambient Subtle Rose Gold / Copper Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.12) 0%, rgba(217, 119, 6, 0.05) 45%, transparent 75%)',
          }}
        />

        {/* Layered Stack: Old packaging glides up & fades out, new packaging rises up from below */}
        <div className="relative w-full h-full flex items-center justify-center select-none z-10 p-2 sm:p-4">
          {PACKAGING_SERVICES.map((item, idx) => {
            const isActive = activeIdx === idx;
            const isPrev = prevIdx === idx;

            let motionClass = '';
            if (isActive) {
              // Active: glides up into center from below, scaled up on mobile to boldly fill the canvas
              motionClass = 'opacity-100 translate-y-0 scale-[1.15] sm:scale-100 z-10 pointer-events-auto';
            } else if (isPrev) {
              // Outgoing: fades up towards the top
              motionClass = 'opacity-0 -translate-y-12 scale-[1.05] sm:scale-[0.96] z-0 pointer-events-none';
            } else {
              // Standby: positioned below waiting to rise
              motionClass = 'opacity-0 translate-y-12 scale-[1.05] sm:scale-[0.96] z-0 pointer-events-none';
            }

            return (
              <div
                key={`mockup-layer-${item.id}`}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${motionClass}`}
              >
                <Image
                  src={item.mockupImage}
                  alt={item.name}
                  width={800}
                  height={800}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-[250px] sm:h-[290px] md:h-[420px] max-h-[440px] sm:max-h-[420px] md:max-h-[440px] lg:max-h-[465px] w-auto max-w-[94%] sm:max-w-[92%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PackagingSpotlightCard;
