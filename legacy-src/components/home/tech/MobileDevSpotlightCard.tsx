'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useStagedMockups } from './useStagedMockups';
import { ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   AUTHENTIC MOBILE PLATFORM SVG ICONS (TRUE BRAND COLORS)
   ────────────────────────────────────────────────────────────────────────── */

const ReactNativeIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="none">
    <path d="M14.314 0L2.3 12.014l3.714 3.714L21.743 0h-7.429z" fill="#02569B" />
    <path d="M14.286 11.429l-6.857 6.857 3.714 3.714 6.857-6.857-3.714-3.714z" fill="#0175C2" />
    <path d="M17.971 15.114L14.286 18.8l3.714 3.714 3.714-3.714-3.743-3.686z" fill="#29B6F6" />
    <path d="M11.143 18.286l3.143 3.143h7.429l-6.857-6.857-3.715 3.714z" fill="#01579B" />
  </svg>
);

const SwiftAppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="#000000">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-1.98.6-2.63 1.35-.57.66-1.07 1.72-1.01 2.76.99.08 2.01-.51 2.63-1.26z" />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" fill="#3DDC84">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0004 0-.5517.4482-1.0003.9993-1.0003.5517 0 .9998.4486.9998 1.0003 0 .5518-.4481 1.0004-.9998 1.0004m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0004 0-.5517.4482-1.0003.9993-1.0003.5518 0 .9999.4486.9999 1.0003 0 .5518-.4481 1.0004-.9999 1.0004m11.4045-6.02l1.996-3.4566a.4158.4158 0 00-.1519-.5674.417.417 0 00-.568.1517l-2.0254 3.5074c-1.4284-.652-3.0242-1.0189-4.7322-1.0189-1.708 0-3.3038.3669-4.7322 1.0189L5.666 5.4491a.4175.4175 0 00-.568-.1517.416.416 0 00-.1519.5674l1.996 3.4566C3.0617 11.2392 1 14.8878 1 19h22c0-4.1122-2.0617-7.7608-5.1185-9.6786" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   MOBILE APPLICATION SHOWCASE DATA
   ────────────────────────────────────────────────────────────────────────── */

interface MobileTechItem {
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

const MOBILE_TECHNOLOGIES: MobileTechItem[] = [
  {
    id: 'react-native',
    name: 'React Native Apps',
    shortName: 'React Native',
    titleLine1: 'React Native',
    titleLine2: 'Apps',
    tagline: 'Cross-Platform Native Apps',
    category: 'Cross-Platform iOS & Android Systems',
    icon: ReactNativeIcon,
    brandColor: '#61DAFB',
    mockupImage: '/mockups/mobile-showcase-react-native.png',
    caseStudyLink: '#lead-form',
  },
  {
    id: 'flutter',
    name: 'Flutter Architecture',
    shortName: 'Flutter',
    titleLine1: 'Flutter',
    titleLine2: 'Architecture',
    tagline: 'Fluid Flutter Architecture',
    category: 'High-Performance Multi-Platform Native UI',
    icon: FlutterIcon,
    brandColor: '#02569B',
    mockupImage: '/mockups/mobile-showcase-flutter.png',
    caseStudyLink: '#lead-form',
  },
  {
    id: 'android-kotlin',
    name: 'Native Android & Kotlin',
    shortName: 'Android',
    titleLine1: 'Android',
    titleLine2: '& Kotlin',
    tagline: 'Native Android Kotlin',
    category: 'Modern Jetpack Compose & Edge Device Ecosystems',
    icon: AndroidIcon,
    brandColor: '#3DDC84',
    mockupImage: '/mockups/mobile-showcase-android.png',
    caseStudyLink: '#lead-form',
  },
  {
    id: 'ios-swift',
    name: 'Native iOS & Swift',
    shortName: 'iOS',
    titleLine1: 'Apple iOS',
    titleLine2: '& Swift',
    tagline: 'Ultra-Fluid iOS Apps',
    category: 'Apple Silicon Optimized 120Hz Fluid Experiences',
    icon: SwiftAppleIcon,
    brandColor: '#000000',
    mockupImage: '/mockups/mobile-showcase-swift.png',
    caseStudyLink: '#lead-form',
  },
];

// 2-second continuous auto-cycle interval matching Card 01
const AUTO_SCROLL_INTERVAL_MS = 2000;

export const MobileDevSpotlightCard: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setPrevIdx(activeIdx);
    setActiveIdx(idx);
  };

  // Only run auto-cycling when card is actively visible in viewport (prevents scroll hitching)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setActiveIdx((current) => {
        setPrevIdx(current);
        return (current + 1) % MOBILE_TECHNOLOGIES.length;
      });
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isInView]);

  const handleEnquireScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact-form') || document.getElementById('lead-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const current = MOBILE_TECHNOLOGIES[activeIdx];
  const shouldRenderMockup = useStagedMockups(activeIdx, MOBILE_TECHNOLOGIES.length, isInView, containerRef);

  return (
    <div ref={containerRef} className="flex flex-col md:grid md:grid-cols-2 h-full w-full">
      {/* ══════════════════════════════════════════════════════════════════════
          LEFT HALF: 50% WIDTH PURE WHITE EDITORIAL CANVAS (#FFFFFF)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white text-[#0E2015] p-3.5 sm:p-6 lg:p-9 flex flex-col justify-between shrink-0 md:shrink md:h-full border-b md:border-b-0 md:border-r border-[#1D4224]/10">
        <div className="flex flex-col md:flex-1 md:min-h-0">
          {/* Primary Headlines */}
          <div className="shrink-0">
            <h3 className="font-montserrat font-extrabold text-[26px] sm:text-2xl lg:text-[28px] text-[#0E2015] tracking-tight leading-tight">
              Mobile Application Development
            </h3>
            <p className="hidden md:block text-xs sm:text-sm text-[#5C6860] font-inter mt-1.5 leading-relaxed">
              Native iOS &amp; Android platforms, cross-platform frameworks, and edge-synced mobile ecosystems engineered for 120Hz commercial scale.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              2×2 CAPABILITY GRID (CLOCKWISE SEQUENCE: REACT NATIVE -> FLUTTER -> ANDROID -> IOS)
              ══════════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3.5 mt-3 sm:mt-6 md:mt-4 md:mb-2 md:flex-1 md:grid-rows-2 md:min-h-0">
            {MOBILE_TECHNOLOGIES.map((tech, idx) => {
              const isActive = activeIdx === idx;
              const IconComponent = tech.icon;
              // Clockwise layout: [0: Top-Left, 1: Top-Right, 3: Bottom-Left, 2: Bottom-Right]
              const gridOrderClass = idx === 0 ? 'order-1' : idx === 1 ? 'order-2' : idx === 2 ? 'order-4' : 'order-3';

              return (
                <button
                  key={tech.id}
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
                      style={{ borderColor: `${tech.brandColor}30` }}
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
                        {tech.shortName || tech.name}
                      </span>

                      {/* Desktop 2-line title */}
                      <div
                        className={`hidden md:flex flex-col leading-[1.18] font-montserrat font-extrabold text-[16px] lg:text-[18px] tracking-tight transition-colors duration-500 ${
                          isActive
                            ? 'text-[#0E2015]'
                            : 'text-[#2D3C30]'
                        }`}
                      >
                        <span className="block truncate">{tech.titleLine1}</span>
                        <span className="block truncate">{tech.titleLine2}</span>
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
            {MOBILE_TECHNOLOGIES.map((tech, idx) => {
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
                  key={`footer-text-${tech.id}`}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${textMotionClass}`}
                >
                  <div className="font-montserrat font-bold text-[14px] sm:text-sm text-[#0E2015] truncate">
                    <span className="md:hidden">{tech.tagline}</span>
                    <span className="hidden md:inline">{tech.name}</span>
                  </div>
                  <div className="hidden md:block text-[10px] sm:text-[11px] font-mono text-[#1D4224] font-medium truncate">
                    {tech.category}
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
          RIGHT HALF: 50% WIDTH DEEP TECH MIDNIGHT TEAL CANVAS (#071B20 – #0B252C)
          FADING UP (EXIT) & COMING UP (ENTER) 3D PHONE MOCKUP STACK
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden h-[250px] xs:h-[275px] sm:h-[340px] md:h-full min-h-[220px] md:min-h-[300px] bg-gradient-to-br from-[#0B252C] via-[#071B20] to-[#041014]">
        {/* Ambient Subtle Tech Cyan/Teal Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(97, 218, 251, 0.12) 0%, rgba(2, 86, 155, 0.06) 40%, transparent 75%)',
          }}
        />

        {/* Layered Stack: Old phone glides up & fades out, new phone rises up from below */}
        <div className="relative w-full h-full flex items-center justify-center select-none z-10">
          {MOBILE_TECHNOLOGIES.map((tech, idx) => {
            const isActive = activeIdx === idx;
            const isPrev = prevIdx === idx;

            let motionClass = '';
            if (isActive) {
              // Active: glides up into center from below, exactly 100% scale so nothing is cut off
              motionClass = 'opacity-100 translate-y-0 scale-100 z-10 pointer-events-auto';
            } else if (isPrev) {
              // Outgoing: fades up towards the top
              motionClass = 'opacity-0 -translate-y-8 scale-[0.98] z-0 pointer-events-none';
            } else {
              // Standby: positioned below waiting to rise
              motionClass = 'opacity-0 translate-y-8 scale-[0.98] z-0 pointer-events-none';
            }

            return (
              <div
                key={`mockup-layer-${tech.id}`}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${motionClass}`}
              >
                {shouldRenderMockup(idx) && (
                  <Image
                    src={tech.mockupImage}
                    alt={tech.name}
                    width={1385}
                    height={1136}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full max-w-full max-h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileDevSpotlightCard;
