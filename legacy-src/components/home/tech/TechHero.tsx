"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  TrendingUp,
  Palette,
  Share2,
  Box,
  Package,
  Zap,
  Gift,
  ArrowRight
} from 'lucide-react';

interface ServiceNode {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  // Canvas coordinate for connecting tracing line
  xRatio: number; // % relative offset
  yRatio: number;
}

const HERO_SERVICES: ServiceNode[] = [
  {
    id: 'web',
    title: 'Website Development',
    icon: Globe,
    href: '/website-development-services',
    xRatio: 15,
    yRatio: 15,
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    icon: TrendingUp,
    href: '/search-engine-optimization-services',
    xRatio: 85,
    yRatio: 15,
  },
  {
    id: 'graphic',
    title: 'Graphic & Video Design',
    icon: Palette,
    href: '/graphic-designing',
    xRatio: 12,
    yRatio: 50,
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    icon: Share2,
    href: '/social-media-marketing-services',
    xRatio: 88,
    yRatio: 50,
  },
  {
    id: 'studio',
    title: '3D & 2D Animation',
    icon: Box,
    href: '/tzar-studio',
    xRatio: 15,
    yRatio: 85,
  },
  {
    id: 'gifting',
    title: 'Corporate Gifting',
    icon: Gift,
    href: '/corporate-gifting',
    xRatio: 85,
    yRatio: 85,
  },
];

export const TechHero: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleScrollToServices = () => {
    const el = document.getElementById('ServicesOne');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#090d0a] text-white overflow-hidden border-b border-white/10">

      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0e3b22]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3ba9a0]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ════════════════════════════════════════════════════════════════════
              LEFT COLUMN: EXACT ACETERNITY-STYLE HERO HEADLINE WITH MARKER HIGHLIGHT
              ════════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-8 text-left">

            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-rubik text-white/80 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="font-bold text-[#D4AF37]">INDIA'S FASTEST GROWING</span>
              <span className="text-white/40">•</span>
              <span>DIGITAL AGENCY</span>
            </div>

            {/* Poster Headline with Aceternity Yellow Marker Highlight */}
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Over{' '}
              <span className="relative inline-block text-[#090d0a] font-black mx-1 z-10 px-2 py-0.5">
                {/* Yellow Marker Highlight Background Animation Box */}
                <span className="absolute inset-0 bg-[#D4AF37] -rotate-1 rounded-md -z-10 shadow-lg transform transition-transform duration-300 hover:scale-105" />
                2500+ Satisfied
              </span>{' '}
              Clients Served in 2025.
            </h1>

            {/* Subtext with Hand-Drawn SVG Animated Underline */}
            <p className="font-inter text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Tzar Venture delivers high-impact web design, organic SEO, 3D studio, and performance marketing with{' '}
              <span className="relative inline-block font-bold text-white whitespace-nowrap">
                guaranteed ROI
                {/* Animated Hand-Drawn SVG Underline */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#D4AF37] overflow-visible"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 12 Q 50 2, 100 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              and 25,000+ corporate gifts delivered Pan-India.
            </p>

            {/* CTA Buttons: Primary Yellow + Secondary Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#090d0a] font-rubik font-black text-sm uppercase tracking-wider shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Our Services
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full font-rubik font-bold text-sm text-white hover:text-[#D4AF37] underline decoration-[#D4AF37] decoration-2 underline-offset-8 transition-all flex items-center gap-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <span className="font-montserrat font-black text-xl sm:text-2xl text-[#D4AF37]">8,000+</span>
                <span className="block font-inter text-xs text-white/60">Projects Completed</span>
              </div>
              <div>
                <span className="font-montserrat font-black text-xl sm:text-2xl text-[#3ba9a0]">150+</span>
                <span className="block font-inter text-xs text-white/60">Active Clients</span>
              </div>
              <div>
                <span className="font-montserrat font-black text-xl sm:text-2xl text-[#74c1c4]">25,000+</span>
                <span className="block font-inter text-xs text-white/60">Pan-India Gifts</span>
              </div>
            </div>

          </div>

          {/* ════════════════════════════════════════════════════════════════════
              RIGHT COLUMN: CENTER TZAR LOGO CARD WITH SURROUNDING SERVICE CARDS & TRACING LINES
              ════════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center p-4">

            {/* SVG TRACING LINES CONNECTING CENTER LOGO CARD TO SERVICE CARDS */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 600 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="laserGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3ba9a0" stopOpacity="1" />
                  </linearGradient>

                  <filter id="glowEffect">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Line 1: Top Left to Center */}
                <path
                  d="M 120 70 Q 200 70, 300 250"
                  fill="none"
                  stroke={activeService === 'web' ? '#D4AF37' : '#ffffff20'}
                  strokeWidth={activeService === 'web' ? '3.5' : '2'}
                  className="transition-colors duration-300"
                />
                <path
                  d="M 120 70 Q 200 70, 300 250"
                  fill="none"
                  stroke="url(#laserGold)"
                  strokeWidth="3"
                  className="electric-flow-line"
                  filter="url(#glowEffect)"
                />

                {/* Line 2: Top Right to Center */}
                <path
                  d="M 480 70 Q 400 70, 300 250"
                  fill="none"
                  stroke={activeService === 'seo' ? '#D4AF37' : '#ffffff20'}
                  strokeWidth={activeService === 'seo' ? '3.5' : '2'}
                  className="transition-colors duration-300"
                />
                <path
                  d="M 480 70 Q 400 70, 300 250"
                  fill="none"
                  stroke="url(#laserGold)"
                  strokeWidth="3"
                  className="electric-flow-reverse"
                  filter="url(#glowEffect)"
                />

                {/* Line 3: Mid Left to Center */}
                <path
                  d="M 100 250 H 300"
                  fill="none"
                  stroke={activeService === 'graphic' ? '#D4AF37' : '#ffffff20'}
                  strokeWidth={activeService === 'graphic' ? '3.5' : '2'}
                  className="transition-colors duration-300"
                />
                <path
                  d="M 100 250 H 300"
                  fill="none"
                  stroke="url(#laserGold)"
                  strokeWidth="3"
                  className="electric-flow-line"
                  filter="url(#glowEffect)"
                />

                {/* Line 4: Mid Right to Center */}
                <path
                  d="M 500 250 H 300"
                  fill="none"
                  stroke={activeService === 'smm' ? '#D4AF37' : '#ffffff20'}
                  strokeWidth={activeService === 'smm' ? '3.5' : '2'}
                  className="transition-colors duration-300"
                />
                <path
                  d="M 500 250 H 300"
                  fill="none"
                  stroke="url(#laserGold)"
                  strokeWidth="3"
                  className="electric-flow-reverse"
                  filter="url(#glowEffect)"
                />

                {/* Line 5: Bottom Left to Center */}
                <path
                  d="M 120 430 Q 200 430, 300 250"
                  fill="none"
                  stroke={activeService === 'studio' ? '#D4AF37' : '#ffffff20'}
                  strokeWidth={activeService === 'studio' ? '3.5' : '2'}
                  className="transition-colors duration-300"
                />
                <path
                  d="M 120 430 Q 200 430, 300 250"
                  fill="none"
                  stroke="url(#laserGold)"
                  strokeWidth="3"
                  className="electric-flow-reverse"
                  filter="url(#glowEffect)"
                />

                {/* Line 6: Bottom Right to Center */}
                <path
                  d="M 480 430 Q 400 430, 300 250"
                  fill="none"
                  stroke={activeService === 'gifting' ? '#D4AF37' : '#ffffff20'}
                  strokeWidth={activeService === 'gifting' ? '3.5' : '2'}
                  className="transition-colors duration-300"
                />
                <path
                  d="M 480 430 Q 400 430, 300 250"
                  fill="none"
                  stroke="url(#laserGold)"
                  strokeWidth="3"
                  className="electric-flow-line"
                  filter="url(#glowEffect)"
                />
              </svg>
            </div>

            {/* CENTER TZAR LOGO CARD */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-[#0e3b22] border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] flex flex-col items-center justify-center p-4 text-center group transition-transform duration-300 hover:scale-110">
                <img
                  src="/assets/images/tzar-logo-main.png"
                  alt="TZAR CENTER"
                  className="w-full h-auto object-contain filter drop-shadow-md"
                />
                <span className="mt-2 text-[9px] font-rubik font-bold tracking-widest text-[#D4AF37] uppercase">
                  CORE HUB
                </span>
              </div>
            </div>

            {/* SURROUNDING SERVICE CARDS (ONLY HEADING AND ONLINE LOGO) */}
            <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-y-28 gap-x-6 sm:gap-x-12 relative z-10">
              {HERO_SERVICES.map((serv) => {
                const IconComp = serv.icon;
                const isActive = activeService === serv.id;

                return (
                  <Link
                    key={serv.id}
                    href={serv.href}
                    onMouseEnter={() => setActiveService(serv.id)}
                    onMouseLeave={() => setActiveService(null)}
                    className={`bg-white/90 backdrop-blur-xl border rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 transition-all duration-300 shadow-xl group hover:bg-white max-w-[210px] w-full mx-auto ${isActive
                        ? 'border-[#D4AF37] scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.3)]'
                        : 'border-white/20'
                      }`}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0e3b22] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-rubik font-bold text-xs sm:text-sm text-[#090d0a] leading-tight group-hover:text-[#0e3b22] transition-colors truncate">
                        {serv.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
