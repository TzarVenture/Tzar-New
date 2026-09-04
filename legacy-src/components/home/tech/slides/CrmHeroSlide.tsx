"use client";

import React from "react";
import {
  Lightning,
  ChartLineUp,
  CreditCard,
  Kanban,
} from "@phosphor-icons/react";
import "./CrmHeroSlide.css";

// ── TECH STACK ICONS FROM thesvg.org (via @thesvg/cli) ────────────────────
const TECH_ICONS = [
  { name: "React", src: "/tech-icons/react.svg" },
  { name: "Next.js", src: "/tech-icons/nextjs.svg" },
  { name: "TypeScript", src: "/tech-icons/typescript.svg" },
  { name: "Node.js", src: "/tech-icons/nodejs.svg" },
  { name: "PostgreSQL", src: "/tech-icons/postgresql.svg" },
  { name: "MongoDB", src: "/tech-icons/mongodb.svg" },
  { name: "Tailwind CSS", src: "/tech-icons/tailwindcss.svg" },
  { name: "Python", src: "/tech-icons/python.svg" },
  { name: "Docker", src: "/tech-icons/docker.svg" },
];

// Split for mobile grape cluster: 5 in row 1, 4 in row 2
const GRAPE_ROW_1 = TECH_ICONS.slice(0, 5);
const GRAPE_ROW_2 = TECH_ICONS.slice(5, 9);

export const CrmHeroSlide: React.FC = () => {
  return (
    <div className="crm-slide-container">
      {/* ── 1. COMPACT 3-WORD HEADLINE ───────────────────────────────── */}
      <h1 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-2 sm:mb-3">
        CUSTOM ENTERPRISE <span className="text-[#1D4224]">CRM</span>
      </h1>

      {/* ── 2. TECH STACK ICONS ──────────────────────────────────────── */}
      {/* PC / Desktop Only: Single horizontal row (Hidden on mobile) */}
      <div className="desktop-tech-stack-row">
        {TECH_ICONS.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            className="tech-stack-icon-pill"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile Only: Grape cluster structure (5 in Row 1, 4 in Row 2) */}
      <div className="mobile-grape-cluster">
        {/* Row 1: 5 Icons */}
        <div className="grape-row-1">
          {GRAPE_ROW_1.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="tech-stack-icon-pill"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        {/* Row 2: 4 Icons (Centered beneath Row 1 like grapes) */}
        <div className="grape-row-2">
          {GRAPE_ROW_2.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="tech-stack-icon-pill"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. EXPANDED PC SHOWCASE & CARDS (COMPACTED PROPORTIONS) ──── */}
      <div className="relative w-full max-w-5xl lg:max-w-[1040px] xl:max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xl:gap-5 items-center">
          
          {/* ── LEFT CARDS (Desktop: Inset towards center) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-end gap-6 text-left z-20">
            {/* Pod 1: Instant Lead & WhatsApp Routing */}
            <div className="hero-orbit-card pod-custom-1">
              <div className="orbit-icon-box box-blue">
                <Lightning size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Instant Lead &amp; WhatsApp Routing
              </h3>
            </div>

            {/* Pod 2: Real-Time Revenue Analytics */}
            <div className="hero-orbit-card pod-custom-2">
              <div className="orbit-icon-box box-green">
                <ChartLineUp size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Real-Time Revenue Analytics
              </h3>
            </div>
          </div>

          {/* ── CENTER PROMINENT PC SHOWCASE ── */}
          <div className="lg:col-span-6 flex items-center justify-center relative z-10 px-2 sm:px-3">
            <div className="hero-device-container w-full max-w-[400px] lg:max-w-[440px] xl:max-w-[480px]">
              <img
                src="/assets/images/hero-crm-showcase.png"
                alt="Custom Enterprise CRM Dashboard & Operations System"
                className="hero-device-img w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>
          </div>

          {/* ── RIGHT CARDS (Desktop: Inset towards center) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-start gap-6 text-left z-20">
            {/* Pod 3: Visual Pipeline & Auto Follow-ups */}
            <div className="hero-orbit-card pod-custom-3">
              <div className="orbit-icon-box box-amber">
                <Kanban size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Visual Pipeline &amp; Auto Follow-ups
              </h3>
            </div>

            {/* Pod 4: Automated Invoicing & Payments */}
            <div className="hero-orbit-card pod-custom-4">
              <div className="orbit-icon-box box-purple">
                <CreditCard size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Automated Invoicing &amp; Payments
              </h3>
            </div>
          </div>

        </div>

        {/* ── 2x2 GRID LAYOUT FOR MOBILE (< 1024px) ─────────────────── */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:hidden mt-3 sm:mt-4 z-20 px-1">
          {/* 1. Instant Lead */}
          <div className="hero-orbit-card mobile-orbit-card">
            <div className="orbit-icon-box box-blue">
              <Lightning size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Instant Lead &amp; WhatsApp Routing
            </h3>
          </div>

          {/* 2. Real-Time Revenue */}
          <div className="hero-orbit-card mobile-orbit-card">
            <div className="orbit-icon-box box-green">
              <ChartLineUp size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Real-Time Revenue Analytics
            </h3>
          </div>

          {/* 3. Visual Pipeline */}
          <div className="hero-orbit-card mobile-orbit-card">
            <div className="orbit-icon-box box-amber">
              <Kanban size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Visual Pipeline &amp; Auto Follow-ups
            </h3>
          </div>

          {/* 4. Automated Invoicing */}
          <div className="hero-orbit-card mobile-orbit-card">
            <div className="orbit-icon-box box-purple">
              <CreditCard size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Automated Invoicing &amp; Payments
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CrmHeroSlide;
