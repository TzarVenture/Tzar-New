"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import "./DeckCardsScrollSection.css";

interface ServiceItem {
  id: string;
  category: string;
  suitLetter: string;
  href: string;
  disciplines: string[];
}

const CARDS_DATA: ServiceItem[] = [
  {
    id: "card-website",
    category: "WEBSITE",
    suitLetter: "W",
    href: "/website-development-services",
    disciplines: [
      "Scalable Next.js 15",
      "Modern React Web Apps",
      "Headless Shopify Plus",
      "Enterprise WordPress",
      "Custom Web Engineering",
      "High-Performance UI/UX",
    ],
  },
  {
    id: "card-app",
    category: "APPLICATION",
    suitLetter: "A",
    href: "/website-development-services",
    disciplines: [
      "React Native Engineering",
      "Flutter Architecture",
      "Native iOS & Swift",
      "Native Android & Kotlin",
      "Cross-Platform Mobile Apps",
      "Real-Time App Infrastructure",
    ],
  },
  {
    id: "card-software",
    category: "SOFTWARE",
    suitLetter: "S",
    href: "/services",
    disciplines: [
      "Custom CRM Platforms",
      "Enterprise ERP Portals",
      "B2B Marketplace Systems",
      "Internal Tools & SaaS",
      "Cloud APIs & Microservices",
      "Sales & SLA Automation",
    ],
  },
  {
    id: "card-marketing",
    category: "MARKETING",
    suitLetter: "M",
    href: "/search-engine-optimization-services",
    disciplines: [
      "Programmatic Organic SEO",
      "Performance Paid Ads",
      "Conversion Rate Funnels",
      "Authority Content Marketing",
      "Technical SEO & Schema",
      "High-ROAS Media Buying",
    ],
  },
];

export const DeckCardsScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll tracker for desktop & mobile
  const handleScroll = useCallback(() => {
    const windowH = window.innerHeight;

    // 1. Desktop progress (Sticky stage)
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const totalDist = rect.height - windowH;
      if (totalDist > 0) {
        const currentDist = -rect.top;
        const rawProgress = currentDist / totalDist;
        setScrollProgress(Math.max(0, Math.min(1, rawProgress)));
      }
    }

    // 2. Mobile vertical scroll flip (One by one in scrolling order)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      mobileCardRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Starts flipping as card enters viewport (85% from top), completes at 35%
        const raw = (windowH * 0.85 - rect.top) / (windowH * 0.50);
        const clamped = Math.max(0, Math.min(1, raw));
        const eased = clamped < 0.5 ? 2 * clamped * clamped : 1 - Math.pow(-2 * clamped + 2, 2) / 2;
        const rotX = eased * 180;
        const liftZ = Math.sin(clamped * Math.PI) * 35;
        el.style.setProperty("--rot-x", `${rotX}deg`);
        el.style.setProperty("--lift-z", `${liftZ}px`);
      });
    }
  }, []);

  useEffect(() => {
    let rafId: number;
    const onScrollRaf = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScrollRaf, { passive: true });
    window.addEventListener("resize", onScrollRaf, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollRaf);
      window.removeEventListener("resize", onScrollRaf);
    };
  }, [handleScroll]);

  // Interpolation helper
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  // Desktop stack offsets in center deck
  const deckOffsets = [
    { x: -14, y: -6, rotZ: -3 },
    { x: -4, y: -2, rotZ: -1 },
    { x: 4, y: 2, rotZ: 1 },
    { x: 14, y: 6, rotZ: 3 },
  ];

  const spreadRotations = [-6, -2, 2, 6];

  const desktopFlipWindows = [
    { start: 0.38, end: 0.64 },
    { start: 0.44, end: 0.70 },
    { start: 0.50, end: 0.76 },
    { start: 0.56, end: 0.82 },
  ];

  return (
    <section 
      ref={containerRef} 
      className="deck-scroll-container relative z-20"
      aria-label="What We Build - Interactive 3D Card Deck"
    >
      {/* Sticky Stage on Desktop, Natural Flow on Mobile */}
      <div className="deck-sticky-stage">
        {/* Soft background ambient glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-237.5 h-80 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Section Header with clean gap to cards */}
        <div className="deck-header-wrapper">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-black block mb-2">
            OUR CORE SERVICES
          </span>
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            What We Build
          </h2>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            DESKTOP ARENA (HORIZONTAL SPREAD & CASCADE 3D HORIZONTAL FLIP)
            ════════════════════════════════════════════════════════════════ */}
        <div className="deck-cards-arena deck-desktop-arena">
          <div className="deck-cards-row">
            {CARDS_DATA.map((card, idx) => {
              // Phase 1: Horizontal Spread (0.04 to 0.36)
              const spreadStart = 0.04;
              const spreadEnd = 0.36;
              const spreadRaw = Math.max(
                0,
                Math.min(1, (scrollProgress - spreadStart) / (spreadEnd - spreadStart))
              );
              const spreadEased = easeInOutQuad(spreadRaw);

              const colFactors = [-1.5, -0.5, 0.5, 1.5];
              const spreadFactor = colFactors[idx];

              const initialZ = deckOffsets[idx].rotZ;
              const finalZ = spreadRotations[idx];
              const currentRotZ = initialZ + (finalZ - initialZ) * spreadEased;

              const initialX = deckOffsets[idx].x;
              const initialY = deckOffsets[idx].y;

              // Phase 2: 3D Flip (0.38 to 0.82)
              const { start: fStart, end: fEnd } = desktopFlipWindows[idx];
              const flipRaw = Math.max(0, Math.min(1, (scrollProgress - fStart) / (fEnd - fStart)));
              const flipEased = easeInOutQuad(flipRaw);
              const rotateYDeg = flipEased * 180;
              const liftZ = Math.sin(flipRaw * Math.PI) * 40;

              return (
                <div
                  key={card.id}
                  className="deck-card-outer"
                  style={
                    {
                      "--spread-factor": spreadFactor,
                      "--spread-progress": spreadEased,
                      "--init-x": `${initialX}px`,
                      "--init-y": `${initialY}px`,
                      "--rot-z": `${currentRotZ}deg`,
                      "--rot-y": `${rotateYDeg}deg`,
                      "--lift-z": `${liftZ}px`,
                      zIndex: idx + 1,
                    } as React.CSSProperties
                  }
                >
                  {/* Slow, Smooth Buoyant Floating Levitation Wrapper */}
                  <div 
                    className="deck-card-floating"
                    style={{ animationDelay: `${idx * 1.4}s` }}
                  >
                    <div className="deck-card-inner">
                      {/* CARD BACK (Exact TZAR-CARD.png, zero padding) */}
                      <div className="deck-card-face deck-card-back">
                        <Image
                          src="/TZAR-CARD.png"
                          alt="Tzar Luxury Card Back"
                          fill
                          sizes="(max-width: 1024px) 220px, 310px"
                          className="object-contain select-none pointer-events-none"
                          priority={idx < 2}
                        />
                      </div>

                      {/* CARD FRONT (Clickable Link to Service Page with Diagonal Title) */}
                      <Link 
                        href={card.href}
                        className="deck-card-face deck-card-front deck-card-link-interactive group"
                        title={`Explore ${card.category} Services`}
                      >
                        {/* Top Diagonal Corner: Category (Left) | Suit (Right) */}
                        <div className="deck-front-header">
                          <span className="deck-front-title font-montserrat font-black">
                            {card.category}
                          </span>
                          <span className="deck-front-suit font-montserrat font-black">
                            {card.suitLetter}
                          </span>
                        </div>

                        {/* Services List (Evenly spaced, clean dotted underlines, no bullets) */}
                        <ul className="deck-front-list">
                          {card.disciplines.map((item, dIdx) => (
                            <li key={dIdx} className="deck-front-list-item">
                              <span className="deck-front-text">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Bottom Diagonal Corner: Inverted Suit (Left) | Inverted Category (Right) */}
                        <div className="deck-front-footer">
                          <span className="deck-front-suit-inverted font-montserrat font-black">
                            {card.suitLetter}
                          </span>
                          <span className="deck-front-title-inverted font-montserrat font-black">
                            {card.category}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            MOBILE VIEW (< 768px): 4 CARDS ONE BY ONE IN SCROLLING ORDER
            VERTICAL 3D FLIP AS EACH CARD SCROLLS INTO VIEW
            ════════════════════════════════════════════════════════════════ */}
        <div className="deck-mobile-list">
          {CARDS_DATA.map((card, idx) => (
            <div
              key={`mobile-${card.id}`}
              ref={(el) => {
                mobileCardRefs.current[idx] = el;
              }}
              className="deck-mobile-card-item"
            >
              {/* Floating animation wrapper */}
              <div 
                className="deck-card-floating-mobile"
                style={{ animationDelay: `${idx * 1.2}s` }}
              >
                <div className="deck-card-mobile-inner">
                  {/* CARD BACK (Exact TZAR-CARD.png) */}
                  <div className="deck-card-mobile-face deck-card-mobile-back">
                    <Image
                      src="/TZAR-CARD.png"
                      alt="Tzar Luxury Card Back"
                      fill
                      sizes="(max-width: 768px) 340px, 380px"
                      className="object-contain select-none pointer-events-none"
                      priority={idx === 0}
                    />
                  </div>

                  {/* CARD FRONT (Clickable Link with Diagonal Title) */}
                  <Link 
                    href={card.href}
                    className="deck-card-mobile-face deck-card-mobile-front deck-card-link-interactive"
                    title={`Explore ${card.category} Services`}
                  >
                    {/* Top Diagonal Corner: Category (Left) | Suit (Right) */}
                    <div className="deck-front-header">
                      <span className="deck-front-title font-montserrat font-black">
                        {card.category}
                      </span>
                      <span className="deck-front-suit font-montserrat font-black">
                        {card.suitLetter}
                      </span>
                    </div>

                    {/* Services List */}
                    <ul className="deck-front-list">
                      {card.disciplines.map((item, dIdx) => (
                        <li key={dIdx} className="deck-front-list-item">
                          <span className="deck-front-text">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Diagonal Corner: Inverted Suit (Left) | Inverted Category (Right) */}
                    <div className="deck-front-footer">
                      <span className="deck-front-suit-inverted font-montserrat font-black">
                        {card.suitLetter}
                      </span>
                      <span className="deck-front-title-inverted font-montserrat font-black">
                        {card.category}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeckCardsScrollSection;
