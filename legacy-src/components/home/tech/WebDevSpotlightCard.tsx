'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   AUTHENTIC TECHNOLOGY SVG ICONS (TRUE BRAND COLORS)
   ────────────────────────────────────────────────────────────────────────── */

const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none">
    <path
      d="M19.345 5.258c-.035-.262-.224-.469-.481-.532-.256-.062-4.14-.997-4.14-.997s-2.738-2.695-3.036-2.99C11.39.444 10.98.502 10.74.654c-.041.026-1.57 1.488-2.628 2.502l-4.17.994c-.382.091-.563.535-.417.896l3.523 15.688 11.536 2.054 3.738-16.14c.038-.168-.002-.345-.107-.478-.105-.133-.265-.212-.43-.212h-.44z"
      fill="#95BF47"
    />
    <path
      d="M12.983 4.227l-1.306-1.285c-.298-.295-.708-.237-.948-.085-.041.026-1.57 1.488-2.628 2.502l4.882-1.132z"
      fill="#5E8E3E"
    />
    <path
      d="M14.724 5.372l-3.045.707c0 0-1.022-1.89-1.83-2.008-.431-.063-.82.167-.93.593-.19.742.618 2.055.618 2.055l-2.705.628c-.382.091-.563.535-.417.896l2.368 10.548 7.94-1.842-2-11.579z"
      fill="#95BF47"
    />
    <path
      d="M12.288 8.78c-.053-.024-.131-.036-.231-.036-.217 0-.46.079-.724.237-.225.132-.525.377-.733.69-.153.23-.23.473-.23.729 0 .394.137.712.411.954.274.242.724.488 1.35.738.835.334 1.392.684 1.671 1.05.279.366.418.847.418 1.443 0 .847-.282 1.543-.846 2.088-.564.545-1.34.818-2.328.818-.846 0-1.63-.2-2.352-.6-.188-.106-.328-.275-.386-.492a.66.66 0 0 1 .135-.589c.14-.176.353-.255.57-.255.105 0 .21.023.315.07.575.317 1.15.476 1.725.476.541 0 .962-.125 1.263-.375.301-.25.452-.58.452-.99 0-.328-.125-.623-.375-.885-.25-.262-.752-.544-1.506-.846-.867-.348-1.449-.719-1.746-1.113-.297-.394-.446-.897-.446-1.51 0-.799.274-1.464.822-1.995.548-.531 1.272-.797 2.172-.797.7 0 1.38.163 2.04.49.201.099.345.281.392.5a.673.673 0 0 1-.149.605.672.672 0 0 1-.504.249z"
      fill="#FFFFFF"
    />
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="#21759B">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.077 18.423L7.14 8.797c.563-.03 1.096-.089 1.096-.089.475-.059.416-.772-.06-.743 0 0-1.424.119-2.344.119-.119 0-.267 0-.416-.03A10.33 10.33 0 0 1 12 1.688c2.43 0 4.658.832 6.435 2.228-.089.03-.178.059-.267.059-1.008 0-1.72.861-1.72 1.81 0 .743.416 1.396.861 2.167.356.624.772 1.396.772 2.523 0 1.128-.416 2.463-.861 4.156l-3.324 9.943c-.03.059-.06.119-.089.178A10.276 10.276 0 0 1 12 22.312c-.386 0-.772-.03-1.146-.089l.069-.214zm9.35-6.423c0-2.435-.861-4.127-1.602-5.404-.593-1.008-1.157-1.84-1.157-2.82 0-1.097.832-2.108 2.019-2.108.06 0 .119 0 .178.03A10.264 10.264 0 0 1 22.312 12c0 2.998-1.277 5.702-3.324 7.603l1.246-3.71c.624-1.78.793-3.235.793-4.293zM1.688 12c0 1.93.535 3.737 1.455 5.285l4.335-12.556C4.417 5.674 1.688 8.524 1.688 12zm7.662 9.588l-3.77-10.953 3.65 10.656c.03.09.06.208.12.297z" />
  </svg>
);

const NextJsIcon = () => (
  <svg viewBox="0 0 180 180" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none">
    <circle cx="90" cy="90" r="90" fill="#000000" />
    <path
      d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
      fill="url(#webdev_card_next_g1)"
    />
    <rect x="115" y="54" width="12" height="72" fill="url(#webdev_card_next_g2)" />
    <defs>
      <linearGradient id="webdev_card_next_g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="webdev_card_next_g2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   TECHNOLOGY SHOWCASE DATA
   ────────────────────────────────────────────────────────────────────────── */

interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: React.FC;
  brandColor: string;
  mockupImage: string;
  caseStudyLink: string;
}

const TECHNOLOGIES: TechItem[] = [
  {
    id: 'shopify',
    name: 'Shopify Development',
    category: 'Headless Shopify Plus & Liquid Storefronts',
    icon: ShopifyIcon,
    brandColor: '#95BF47',
    mockupImage: '/mockups/web-showcase-phone-3d.png',
    caseStudyLink: '#lead-form'
  },
  {
    id: 'wordpress',
    name: 'Enterprise WordPress',
    category: 'Bespoke Themes & Headless Content Systems',
    icon: WordPressIcon,
    brandColor: '#21759B',
    mockupImage: '/mockups/web-showcase-phone-3d.png',
    caseStudyLink: '#lead-form'
  },
  {
    id: 'nextjs',
    name: 'Scalable Next.js 15',
    category: 'Full-Stack App Router & Global Edge SSR',
    icon: NextJsIcon,
    brandColor: '#000000',
    mockupImage: '/mockups/adshalaa-nextjs-phone-3d.png',
    caseStudyLink: '#lead-form'
  },
  {
    id: 'react',
    name: 'Modern React Web Apps',
    category: 'High-Concurrency Client Dashboards & Portals',
    icon: ReactIcon,
    brandColor: '#61DAFB',
    mockupImage: '/mockups/web-showcase-phone-3d.png',
    caseStudyLink: '#lead-form'
  }
];

// 2-second interval requested by user
const AUTO_SCROLL_INTERVAL_MS = 2000;

export const WebDevSpotlightCard: React.FC = () => {
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
        return (current + 1) % TECHNOLOGIES.length;
      });
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const current = TECHNOLOGIES[activeIdx];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 h-full w-full">

      {/* ══════════════════════════════════════════════════════════════════════
          LEFT HALF: 50% WIDTH PURE WHITE EDITORIAL CANVAS (#FFFFFF)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white text-[#0E2015] p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between shrink-0 md:shrink md:h-full border-b md:border-b-0 md:border-r border-[#1D4224]/10">
        <div>
          {/* Primary Headlines */}
          <h3 className="font-montserrat font-extrabold text-[22px] sm:text-2xl lg:text-[28px] text-[#0E2015] tracking-tight leading-snug">
            Web Application Development
          </h3>
          <p className="text-xs sm:text-sm text-[#5C6860] font-inter mt-1.5 leading-relaxed">
            High-performance web platforms, headless commerce, and digital infrastructure engineered for commercial scale.
          </p>

          {/* ══════════════════════════════════════════════════════════════════════
              2×2 CAPABILITY GRID (CLOCKWISE SEQUENCE: SHOPIFY -> WP -> NEXT -> REACT)
              ══════════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 mt-2.5 sm:mt-5">
            {TECHNOLOGIES.map((tech, idx) => {
              const isActive = activeIdx === idx;
              const IconComponent = tech.icon;
              // Clockwise layout: [0: Top-Left, 1: Top-Right, 3: Bottom-Left, 2: Bottom-Right]
              const gridOrderClass = idx === 0 ? 'order-1' : idx === 1 ? 'order-2' : idx === 2 ? 'order-4' : 'order-3';

              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between gap-2 p-1.5 md:p-3 rounded-xl border-0 md:border md:border-[#1D4224]/8 text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative ${gridOrderClass} ${
                    isActive
                      ? 'bg-transparent md:bg-white shadow-none md:shadow-xs'
                      : 'bg-transparent md:bg-[#F9F7F5] md:hover:bg-[#F3EFE9]'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    {/* Icon badge - raw icon on mobile, framed on desktop */}
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded-lg bg-transparent md:bg-white border-0 md:border flex items-center justify-center shrink-0 shadow-none md:shadow-xs transition-transform duration-500 ease-out"
                      style={{ borderColor: `${tech.brandColor}30` }}
                    >
                      <IconComponent />
                    </div>

                    {/* Title - highlighted on mobile when active */}
                    <span
                      className={`font-montserrat text-xs sm:text-[13px] leading-snug truncate transition-all duration-500 ${
                        isActive
                          ? 'text-[#1D4224] font-extrabold md:text-[#0E2015] md:font-bold'
                          : 'text-[#8C9890] font-medium md:text-[#4A574E] md:font-bold'
                      }`}
                    >
                      {tech.name}
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

        {/* Active Tech Footer Snippet + Primary CTA Button */}
        <div className="pt-2 sm:pt-4 border-t border-[#1D4224]/10 mt-2 sm:mt-4 flex items-center justify-between gap-2.5 sm:gap-3">
          {/* Smooth Cross-Fade Footer Text (Old Fading Up, New Coming Up) */}
          <div className="min-w-0 relative h-8 sm:h-9 flex-1 overflow-hidden">
            {TECHNOLOGIES.map((tech, idx) => {
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
                  <div className="font-montserrat font-bold text-xs sm:text-sm text-[#0E2015] truncate">
                    {tech.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#1D4224] font-medium truncate">
                    {tech.category}
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={current.caseStudyLink}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1D4224] hover:bg-[#FFAE00] text-white hover:text-[#0E2015] text-[11px] sm:text-xs font-semibold font-montserrat transition-all duration-300 shrink-0 shadow-sm group"
          >
            <span>Explore Platform</span>
            <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          RIGHT HALF: 50% WIDTH DEEP FOREST GREEN (#13301B) CANVAS
          FADING UP (EXIT) & COMING UP (ENTER) 3D PHONE MOCKUP STACK
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#13301B] relative flex-1 flex items-center justify-center p-0 sm:p-3 lg:p-4 overflow-hidden min-h-[340px] sm:min-h-[380px] md:min-h-0 md:h-full">
        {/* Layered Stack: Old phone glides up & fades out, new phone rises up from below */}
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {TECHNOLOGIES.map((tech, idx) => {
            const isActive = activeIdx === idx;
            const isPrev = prevIdx === idx;

            let motionClass = '';
            if (isActive) {
              // Active: glides up into center from below, scaled up on mobile to boldly fill the canvas
              motionClass = 'opacity-100 translate-y-0 scale-[1.32] sm:scale-100 z-10 pointer-events-auto';
            } else if (isPrev) {
              // Outgoing: fades up towards the top
              motionClass = 'opacity-0 -translate-y-12 scale-[1.25] sm:scale-[0.96] z-0 pointer-events-none';
            } else {
              // Standby: positioned below waiting to rise
              motionClass = 'opacity-0 translate-y-12 scale-[1.25] sm:scale-[0.96] z-0 pointer-events-none';
            }

            return (
              <div
                key={`mockup-layer-${tech.id}`}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${motionClass}`}
              >
                <Image
                  src={tech.mockupImage}
                  alt={tech.name}
                  width={750}
                  height={1100}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-[84%] sm:h-auto max-h-[460px] sm:max-h-[440px] md:max-h-[460px] lg:max-h-[485px] w-auto max-w-[96%] sm:max-w-[94%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WebDevSpotlightCard;
