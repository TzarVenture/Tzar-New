"use client";

import React from "react";
import {
  DeviceMobileCamera,
  Devices,
  BellRinging,
  Database,
} from "@phosphor-icons/react";
import "./AppDevHeroSlide.css";

// ── TECH STACK SATELLITES AROUND DUAL PHONES (REACT NATIVE, EXPO, FLUTTER, SWIFT, KOTLIN) ──
const APPDEV_SATELLITES = [
  { name: "React Native", src: "/tech-icons/react.svg", posClass: "appdev-sat-top-left" },
  { name: "Expo", src: "/tech-icons/expo.svg", posClass: "appdev-sat-mid-left" },
  { name: "Swift", src: "/tech-icons/swift.svg", posClass: "appdev-sat-bottom-left" },
  { name: "Flutter", src: "/tech-icons/flutter.svg", posClass: "appdev-sat-top-right" },
  { name: "Kotlin", src: "/tech-icons/kotlin.svg", posClass: "appdev-sat-mid-right" },
  { name: "Firebase", src: "/tech-icons/firebase.svg", posClass: "appdev-sat-bottom-right" },
];

// Mobile stack icons (< 768px)
const MOBILE_STACK_1 = [
  { name: "React Native", src: "/tech-icons/react.svg" },
  { name: "Expo", src: "/tech-icons/expo.svg" },
  { name: "Swift", src: "/tech-icons/swift.svg" },
  { name: "Kotlin", src: "/tech-icons/kotlin.svg" },
  { name: "Flutter", src: "/tech-icons/flutter.svg" },
];

const MOBILE_STACK_2 = [
  { name: "Firebase", src: "/tech-icons/firebase.svg" },
  { name: "Apple", src: "/tech-icons/apple.svg" },
  { name: "Android", src: "/tech-icons/android.svg" },
  { name: "TypeScript", src: "/tech-icons/typescript.svg" },
];

export const AppDevHeroSlide: React.FC = () => {
  return (
    <div className="appdev-slide-container">
      {/* ── 1. COMPACT 3-WORD HEADLINE ───────────────────────────────── */}
      <h1 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-2 sm:mb-3">
        NATIVE MOBILE <span className="text-[#1D4224]">APPS</span>
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

      {/* ── 2. MAIN STAGE: CENTER DUAL PHONES & COMPACT VALUE CARDS ──── */}
      <div className="relative w-full max-w-5xl lg:max-w-[1040px] xl:max-w-[1120px] mx-auto px-4 sm:px-6 lg:mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xl:gap-5 items-center">
          
          {/* ── LEFT FEATURE CARDS (Desktop: Inset towards center) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-end gap-6 text-left z-20">
            {/* Feature 1: 60FPS Native UI */}
            <div className="appdev-feature-card appdev-card-1">
              <div className="appdev-icon-box box-cyan">
                <DeviceMobileCamera size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                60FPS Native UI &amp; Fluid Gestures
              </h3>
            </div>

            {/* Feature 2: Cross-Platform Single Codebase */}
            <div className="appdev-feature-card appdev-card-2">
              <div className="appdev-icon-box box-violet">
                <Devices size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Single Codebase iOS &amp; Android
              </h3>
            </div>
          </div>

          {/* ── CENTER: DUAL MOBILE PHONE SHOWCASE WITH REACT NATIVE TECH SATELLITES ── */}
          <div className="lg:col-span-6 flex items-center justify-center relative z-10 px-2 sm:px-3 py-1">
            
            {/* Orbiting Tech Stack Badges around the phones (Desktop) */}
            <div className="hidden lg:block">
              {APPDEV_SATELLITES.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className={`appdev-stack-badge ${tech.posClass}`}
                >
                  <img src={tech.src} alt={tech.name} />
                </div>
              ))}
            </div>

            {/* Dual Phone Showcase */}
            <div className="appdev-dual-phones-wrapper">
              {/* Phone 1: Left (iPhone Mockup) */}
              <div className="appdev-phone-left w-[130px] sm:w-[155px] md:w-[165px] lg:w-[175px] xl:w-[190px]">
                <img
                  src="/assets/images/app-dev-mobile-1.png"
                  alt="High-Performance Native Mobile Application"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>

              {/* Phone 2: Right (Android Mockup) */}
              <div className="appdev-phone-right w-[130px] sm:w-[155px] md:w-[165px] lg:w-[175px] xl:w-[190px]">
                <img
                  src="/assets/images/app-dev-mobile-2.png"
                  alt="Cross-Platform Android and iOS Engineering"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>

          </div>

          {/* ── RIGHT FEATURE CARDS (Desktop: Inset towards center) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-start gap-6 text-left z-20">
            {/* Feature 3: Instant Push & Notifications */}
            <div className="appdev-feature-card appdev-card-3">
              <div className="appdev-icon-box box-rose">
                <BellRinging size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Instant Push &amp; WhatsApp Triggers
              </h3>
            </div>

            {/* Feature 4: Offline-First SQLite Architecture */}
            <div className="appdev-feature-card appdev-card-4">
              <div className="appdev-icon-box box-amber">
                <Database size={20} weight="duotone" />
              </div>
              <h3 className="font-montserrat font-bold text-xs xl:text-[13px] text-[#0E2015] leading-snug">
                Offline-First SQLite Architecture
              </h3>
            </div>
          </div>

        </div>

        {/* ── 2x2 GRID FOR MOBILE (< 1024px) ─────────────────────────── */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:hidden mt-3 sm:mt-4 z-20 px-1">
          <div className="appdev-feature-card appdev-mobile-card">
            <div className="appdev-icon-box box-cyan">
              <DeviceMobileCamera size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              60FPS Native UI &amp; Gestures
            </h3>
          </div>

          <div className="appdev-feature-card appdev-mobile-card">
            <div className="appdev-icon-box box-violet">
              <Devices size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Single Codebase iOS &amp; Android
            </h3>
          </div>

          <div className="appdev-feature-card appdev-mobile-card">
            <div className="appdev-icon-box box-rose">
              <BellRinging size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Instant Push Notifications
            </h3>
          </div>

          <div className="appdev-feature-card appdev-mobile-card">
            <div className="appdev-icon-box box-amber">
              <Database size={17} weight="duotone" />
            </div>
            <h3 className="font-montserrat font-extrabold text-[11px] sm:text-xs text-[#0E2015] leading-tight">
              Offline-First SQLite Cache
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppDevHeroSlide;
