"use client";

import React from "react";
import {
  Lightning,
  DeviceMobile,
  Globe,
  ShieldCheck,
} from "@phosphor-icons/react";
import "./WebAppHeroSlide.css";

// ── TECH STACK SATELLITES AROUND DUAL PHONES ──────────────────────────────
const STACK_SATELLITES = [
  { name: "Next.js", src: "/tech-icons/nextjs.svg", posClass: "sat-top-left" },
  { name: "React", src: "/tech-icons/react.svg", posClass: "sat-mid-left" },
  { name: "TypeScript", src: "/tech-icons/typescript.svg", posClass: "sat-bottom-left" },
  { name: "Tailwind CSS", src: "/tech-icons/tailwindcss.svg", posClass: "sat-top-right" },
  { name: "Node.js", src: "/tech-icons/nodejs.svg", posClass: "sat-mid-right" },
  { name: "PostgreSQL", src: "/tech-icons/postgresql.svg", posClass: "sat-bottom-right" },
];

// Mobile grape stack icons
const MOBILE_STACK_1 = [
  { name: "Next.js", src: "/tech-icons/nextjs.svg" },
  { name: "React", src: "/tech-icons/react.svg" },
  { name: "TypeScript", src: "/tech-icons/typescript.svg" },
  { name: "Tailwind CSS", src: "/tech-icons/tailwindcss.svg" },
  { name: "Node.js", src: "/tech-icons/nodejs.svg" },
];

const MOBILE_STACK_2 = [
  { name: "PostgreSQL", src: "/tech-icons/postgresql.svg" },
  { name: "MongoDB", src: "/tech-icons/mongodb.svg" },
  { name: "Python", src: "/tech-icons/python.svg" },
  { name: "Docker", src: "/tech-icons/docker.svg" },
];

export const WebAppHeroSlide: React.FC = () => {
  return (
    <div className="webapp-slide-container">
      {/* ── 1. COMPACT 3-WORD HEADLINE ───────────────────────────────── */}
      <h1 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-2 sm:mb-3">
        HIGH-PERFORMANCE <span className="text-[#1D4224]">WEB APPS</span>
      </h1>

      {/* ── MOBILE-ONLY GRAPE STACK CLUSTER (< 768px) ────────────────── */}
      <div className="flex md:hidden flex-col items-center gap-1.5 mb-3 z-10">
        <div className="flex items-center justify-center gap-1.5">
          {MOBILE_STACK_1.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-[#0E2015]/10 flex items-center justify-center p-1.5 shadow-sm"
            >
              <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1.5 -mt-1">
          {MOBILE_STACK_2.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-[#0E2015]/10 flex items-center justify-center p-1.5 shadow-sm"
            >
              <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. MAIN STAGE: CENTER DUAL PHONES & COMPACT CARDS ────────── */}
      <div className="relative w-full max-w-5xl lg:max-w-[1040px] xl:max-w-[1120px] mx-auto px-4 sm:px-6 lg:mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xl:gap-5 items-center">
          
          {/* ── LEFT FEATURE CARDS (Desktop: Inset towards center) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-end gap-6 text-left z-20">
            {/* Feature 1: Sub-Second Edge Performance */}
            <div className="webapp-feature-card webapp-card-1">
              <div className="webapp-icon-box box-teal">
                <Lightning size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Sub-Second Edge Performance
              </h3>
            </div>

            {/* Feature 2: Mobile-First Responsive PWA */}
            <div className="webapp-feature-card webapp-card-2">
              <div className="webapp-icon-box box-emerald">
                <DeviceMobile size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Mobile-First Responsive PWA
              </h3>
            </div>
          </div>

          {/* ── CENTER: BOTH IMAGES (MACBOOK + ANDROID) WITH ORBITING TECH STACK ICONS ───── */}
          <div className="lg:col-span-6 flex items-center justify-center relative z-10 px-2 sm:px-3 py-1">
            
            {/* Responsive Device Showcase (MacBook + Android Mockup Duo) */}
            <div className="webapp-devices-showcase">
              {/* Orbiting Tech Stack Badges around the devices (Desktop) */}
              <div className="hidden lg:block">
                {STACK_SATELLITES.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className={`orbit-stack-badge ${tech.posClass}`}
                  >
                    <img src={tech.src} alt={tech.name} />
                  </div>
                ))}
              </div>

              {/* Multi-Device Composition */}
              <div className="webapp-device-pair">
                {/* Device 1: MacBook Air (Desktop Web Application) */}
                <div className="webapp-macbook-wrapper">
                  <img
                    src="/assets/images/web-app-macbook.png"
                    alt="High Performance Responsive Web Application on MacBook"
                    className="webapp-macbook-img select-none pointer-events-none"
                  />
                </div>

                {/* Device 2: Android Phone (Mobile Web App Experience) */}
                <div className="webapp-android-wrapper">
                  <img
                    src="/assets/images/web-app-mobile-2.png"
                    alt="Cross-Platform Mobile Web Application on Android"
                    className="webapp-android-img select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT FEATURE CARDS (Desktop: Inset towards center) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-start gap-6 text-left z-20">
            {/* Feature 3: SEO & Search Indexing Mastery */}
            <div className="webapp-feature-card webapp-card-3">
              <div className="webapp-icon-box box-indigo">
                <Globe size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                SEO &amp; Search Indexing Mastery
              </h3>
            </div>

            {/* Feature 4: Zero-Downtime Cloud Scaling */}
            <div className="webapp-feature-card webapp-card-4">
              <div className="webapp-icon-box box-orange">
                <ShieldCheck size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Zero-Downtime Cloud Scaling
              </h3>
            </div>
          </div>

        </div>

        {/* ── 2x2 GRID FOR MOBILE (< 1024px) ─────────────────────────── */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:hidden mt-3 sm:mt-4 z-20 px-1">
          <div className="webapp-feature-card webapp-mobile-card">
            <div className="webapp-icon-box box-teal">
              <Lightning size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Sub-Second Edge Performance
            </h3>
          </div>

          <div className="webapp-feature-card webapp-mobile-card">
            <div className="webapp-icon-box box-emerald">
              <DeviceMobile size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Mobile-First Responsive PWA
            </h3>
          </div>

          <div className="webapp-feature-card webapp-mobile-card">
            <div className="webapp-icon-box box-indigo">
              <Globe size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              SEO &amp; Search Indexing
            </h3>
          </div>

          <div className="webapp-feature-card webapp-mobile-card">
            <div className="webapp-icon-box box-orange">
              <ShieldCheck size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Zero-Downtime Cloud Scaling
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebAppHeroSlide;
