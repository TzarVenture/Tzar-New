"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  CarFront,
  Landmark,
  BriefcaseBusiness,
  ShoppingBag,
  GraduationCap,
  Zap,
  Ticket,
  UtensilsCrossed,
  Cpu,
  HeartPulse,
  Hotel,
  Factory,
} from "lucide-react";
import "./SectorCircuitExpertise.css";

interface DomainItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  colIndex: number; // 0 to 5 for PC
  isUpper: boolean; // true for PC top row, false for bottom
}

// 12 Domains with premium, industry-specific icons
const DOMAINS: DomainItem[] = [
  // ── UPPER ROW (PC: Cols 0-5) ──
  { id: "auto", name: "Automobiles", icon: CarFront, colIndex: 0, isUpper: true },
  { id: "capital", name: "Capital", icon: Landmark, colIndex: 1, isUpper: true },
  { id: "consulting", name: "Consulting", icon: BriefcaseBusiness, colIndex: 2, isUpper: true },
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingBag, colIndex: 3, isUpper: true },
  { id: "education", name: "Education", icon: GraduationCap, colIndex: 4, isUpper: true },
  { id: "energy", name: "Energy", icon: Zap, colIndex: 5, isUpper: true },

  // ── LOWER ROW (PC: Cols 0-5) ──
  { id: "events", name: "Events", icon: Ticket, colIndex: 0, isUpper: false },
  { id: "food", name: "Food & Beverage", icon: UtensilsCrossed, colIndex: 1, isUpper: false },
  { id: "hardware", name: "Hardware", icon: Cpu, colIndex: 2, isUpper: false },
  { id: "healthcare", name: "Healthcare", icon: HeartPulse, colIndex: 3, isUpper: false },
  { id: "hospitality", name: "Hospitality", icon: Hotel, colIndex: 4, isUpper: false },
  { id: "industries", name: "Industries", icon: Factory, colIndex: 5, isUpper: false },
];

export const SectorCircuitExpertise: React.FC = () => {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [mobileScrollProgress, setMobileScrollProgress] = useState<number>(0);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // ── OPTIMIZED MOBILE SCROLL TRACKER ─────────────────────────────────
  // Throttled RAF listener only when visible in viewport
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024) return;

    let ticking = false;
    let lastProgress = -1;
    let isIntersecting = false;

    const calculateScroll = () => {
      const el = mobileContainerRef.current;
      if (!el || !isIntersecting) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.15;
      const totalDistance = rect.height + (startY - endY);
      const currentProgress = (startY - rect.top) / totalDistance;

      const clamped = Math.max(0, Math.min(1, currentProgress));
      const rounded = Math.round(clamped * 40) / 40; // Step increments to avoid redundant renders

      if (Math.abs(rounded - lastProgress) >= 0.025) {
        lastProgress = rounded;
        setMobileScrollProgress(rounded);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && isIntersecting) {
        ticking = true;
        requestAnimationFrame(calculateScroll);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          handleScroll();
        }
      },
      { rootMargin: "100px 0px" }
    );

    if (mobileContainerRef.current) {
      observer.observe(mobileContainerRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const upperDomains = DOMAINS.filter((d) => d.isUpper);
  const lowerDomains = DOMAINS.filter((d) => !d.isUpper);

  // Mobile row thresholds (6 rows)
  const mobileRowThresholds = [0.12, 0.28, 0.44, 0.60, 0.76, 0.92];

  // Helper to get CSS animation delay class based on distance from center (cols 2,3 = inner, 1,4 = mid, 0,5 = outer)
  const getBeamClass = (colIndex: number) => {
    if (colIndex === 2 || colIndex === 3) return "beam-inner";
    if (colIndex === 1 || colIndex === 4) return "beam-mid";
    return "beam-outer";
  };

  return (
    <section className="sector-circuit-wrapper pt-12 pb-4 sm:pt-14 sm:pb-6 relative z-20 select-none">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-mono text-sm uppercase tracking-widest text-[#FFAE00] font-black block mb-2">
            OUR SECTOR EXPERTISE
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Domains we have worked for
          </h2>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            DESKTOP CIRCUIT MATRIX (>= 1024px)
            Clean Floating Domain Nodes + Big Hero Icons + Light Emerald Tech Conduit
            ══════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block relative py-4">
          
          {/* 1. UPPER ROW: 6 Floating Domain Nodes with Large Hero Icons */}
          <div className="grid grid-cols-6 gap-4 xl:gap-5 mb-0 relative z-10">
            {upperDomains.map((domain) => {
              const Icon = domain.icon;
              const isHovered = hoveredDomain === domain.id;

              return (
                <div
                  key={domain.id}
                  className={`circuit-card group ${isHovered ? "is-active" : ""}`}
                  onMouseEnter={() => setHoveredDomain(domain.id)}
                  onMouseLeave={() => setHoveredDomain(null)}
                >
                  <div className="circuit-card-icon-box">
                    <Icon className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.5} />
                  </div>
                  <h3 className="circuit-card-title">{domain.name}</h3>
                </div>
              );
            })}
          </div>

          {/* 2. CENTRAL CIRCUIT CONDUIT (Light Emerald Green Lines, Zero Glow) */}
          <div className="relative w-full h-25 my-0 pointer-events-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ── 1. PASSIVE LIGHT EMERALD STEM WIRES ── */}
              {/* Central Horizontal Trunk Line */}
              <line x1="100" y1="50" x2="1100" y2="50" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Vertical Stems Connecting to Upper & Lower Cards */}
              {[100, 300, 500, 700, 900, 1100].map((x, idx) => (
                <g key={`base-stem-${idx}`}>
                  {/* Upper branch: from Y=0 (upper card) down to Y=50 */}
                  <line x1={x} y1="0" x2={x} y2="50" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Lower branch: from Y=50 down to Y=100 (lower card) */}
                  <line x1={x} y1="50" x2={x} y2="100" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              ))}

              {/* ── 2. SMOOTH FLOWING LIGHT EMERALD BEAMS ── */}
              <g>
                {DOMAINS.map((domain) => {
                  const x = 100 + domain.colIndex * 200;
                  const isUpper = domain.isUpper;
                  const targetY = isUpper ? 0 : 100;
                  const isHovered = hoveredDomain === domain.id;

                  // Path definition: Starts at center (600, 50) -> moves horizontally to X -> turns vertically to targetY
                  const pathData = `M 600 50 L ${x} 50 L ${x} ${targetY}`;
                  const beamClass = getBeamClass(domain.colIndex);

                  return (
                    <path
                      key={`beam-${domain.id}`}
                      d={pathData}
                      pathLength="100"
                      className={isHovered ? "circuit-flow-beam-hover" : `circuit-flow-beam ${beamClass}`}
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* 3. LOWER ROW: 6 Floating Domain Nodes with Large Hero Icons */}
          <div className="grid grid-cols-6 gap-4 xl:gap-5 mt-0 relative z-10">
            {lowerDomains.map((domain) => {
              const Icon = domain.icon;
              const isHovered = hoveredDomain === domain.id;

              return (
                <div
                  key={domain.id}
                  className={`circuit-card group ${isHovered ? "is-active" : ""}`}
                  onMouseEnter={() => setHoveredDomain(domain.id)}
                  onMouseLeave={() => setHoveredDomain(null)}
                >
                  <div className="circuit-card-icon-box">
                    <Icon className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.5} />
                  </div>
                  <h3 className="circuit-card-title">{domain.name}</h3>
                </div>
              );
            })}
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════════
            MOBILE CIRCUIT TIMELINE (< 1024px)
            Vertical Format: 6 Domains on Left, 6 Domains on Right
            Light Emerald Conduit, Zero Glow
            ══════════════════════════════════════════════════════════════════ */}
        <div ref={mobileContainerRef} className="block lg:hidden relative py-4">
          
          {/* Continuous Central Vertical Line Structure */}
          <div className="relative">
            {/* Background Continuous Light Emerald Spine */}
            <div className="mobile-trunk-line" />

            {/* Flowing Light Emerald Spine (Tracks Scroll Progress Smoothly) */}
            <div
              className="mobile-trunk-glow"
              style={{
                height: `${Math.min(100, Math.max(0, mobileScrollProgress * 105))}%`,
              }}
            />

            {/* The 6 Paired Rows */}
            {mobileRowThresholds.map((threshold, rowIdx) => {
              const leftDomain = DOMAINS[rowIdx * 2];
              const rightDomain = DOMAINS[rowIdx * 2 + 1];

              // Smooth fractional progress through this row (0 to 1)
              const rowProgress = Math.min(1, Math.max(0, (mobileScrollProgress - (threshold - 0.08)) / 0.12));
              const isRowLit = rowProgress >= 0.85;

              const LeftIcon = leftDomain.icon;
              const RightIcon = rightDomain.icon;

              return (
                <div key={`mobile-row-${rowIdx}`} className={`relative flex items-center justify-between ${rowIdx < 5 ? "mb-7 sm:mb-9" : ""}`}>
                  
                  {/* ── LEFT NODE (Floating Hero Icon) ── */}
                  <div className="w-[43%] sm:w-[44%] relative">
                    <div className={`circuit-card group ${isRowLit ? "is-active" : ""}`}>
                      <div className="circuit-card-icon-box">
                        <LeftIcon className="w-9 h-9 sm:w-10 sm:h-10" strokeWidth={1.5} />
                      </div>
                      <h3 className="circuit-card-title">{leftDomain.name}</h3>
                    </div>
                  </div>

                  {/* ── CENTRAL JUNCTION & CONNECTOR BRANCHES (LIGHT EMERALD) ── */}
                  <div className="w-[14%] sm:w-[12%] flex items-center justify-center relative h-full">
                    {/* Base Light Emerald Horizontal Branch Wire */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#34D399]/20" />

                    {/* Smooth Flowing Branch to Left Node */}
                    <div
                      className="absolute right-1/2 top-1/2 -translate-y-1/2 h-[2px] bg-[#34D399] transition-all duration-300"
                      style={{
                        width: `${rowProgress * 50}%`,
                      }}
                    />

                    {/* Smooth Flowing Branch to Right Node */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] bg-[#34D399] transition-all duration-300"
                      style={{
                        width: `${rowProgress * 50}%`,
                      }}
                    />
                  </div>

                  {/* ── RIGHT NODE (Floating Hero Icon) ── */}
                  <div className="w-[43%] sm:w-[44%] relative">
                    <div className={`circuit-card group ${isRowLit ? "is-active" : ""}`}>
                      <div className="circuit-card-icon-box">
                        <RightIcon className="w-9 h-9 sm:w-10 sm:h-10" strokeWidth={1.5} />
                      </div>
                      <h3 className="circuit-card-title">{rightDomain.name}</h3>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default SectorCircuitExpertise;
