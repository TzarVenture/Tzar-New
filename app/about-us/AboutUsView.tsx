"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  HeartHandshake,
  Headphones,
} from "lucide-react";
import { TrafficGrowthSection } from "@/legacy-src/components/home/tech/TrafficGrowthSection";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";

// Key Performance Statistics
const STATS = [
  { value: "100+", label: "Happy Clients", highlight: "In India & Globally" },
  { value: "95%", label: "Client Retention Rate", highlight: "Long-Term Partners" },
  { value: "5+", label: "Years of Experience", highlight: "Based in Mumbai" },
  { value: "100+", label: "Projects Completed", highlight: "Websites & Marketing" },
];

// ─────────────────────────────────────────────────────────────────────────────
// EDITABLE CONTENT: Company Core Values (Simple, Clear English)
// (Easy to edit when your boss provides the final text)
// ─────────────────────────────────────────────────────────────────────────────
const COMPANY_VALUES = [
  {
    id: "transparency",
    title: "Honest & Clear Communication",
    subtitle: "No hidden fees, no confusing tech words",
    description:
      "We keep everything straightforward. You always know what we are building, when it will be ready, and where your money goes. We share regular updates so you are never left guessing.",
    icon: ShieldCheck,
    highlight: "100% Honest",
  },
  {
    id: "quality",
    title: "Fast & Clean Work",
    subtitle: "Websites that load quickly on every screen",
    description:
      "We build modern websites that look great and load super fast on all devices — iPhones, Androids, laptops, and tablets. Clean work means your website runs smoothly without crashing.",
    icon: CheckCircle2,
    highlight: "Top Quality",
  },
  {
    id: "results",
    title: "Focused on Real Results",
    subtitle: "Built to bring you calls, leads, and sales",
    description:
      "A pretty website is nice, but getting real customers is what matters. Every page we design is made to help visitors easily understand what you do and contact your business.",
    icon: TrendingUp,
    highlight: "More Sales",
  },
  {
    id: "support",
    title: "Help Whenever You Need Us",
    subtitle: "Friendly support even after launch",
    description:
      "We do not disappear once your website goes live. We stay right beside you to update content, fix anything quickly, and help your online presence grow over time.",
    icon: Headphones,
    highlight: "Always Here",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EDITABLE CONTENT: How We Work (Simple 4-Step Process)
// (Easy to edit when your boss provides the final text)
// ─────────────────────────────────────────────────────────────────────────────
const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Listen & Plan",
    description:
      "We start by listening to your goals, learning about your customers, and creating a simple plan for your project.",
  },
  {
    step: "02",
    title: "Design & Preview",
    description:
      "We design the look and feel of your website so you can see and approve everything before we build it.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "We turn the design into a working website. We test it thoroughly on phones and computers so it works without bugs.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We help you launch your website to the public, connect it to Google, and keep helping you whenever you need changes.",
  },
];

export default function AboutUsView() {
  return (
    <div className="relative min-h-screen text-white bg-transparent overflow-x-clip selection:bg-[#FFAE00] selection:text-[#061309]">
      {/* ── FIXED PARALLAX BACKGROUND (SPECIFIC TO ABOUT TZAR PAGE - PERSISTENT BEHIND SCROLLING SECTIONS) ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/about-tzar-bg.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* ── SVG CLIP PATH: SHAPES THE HERO BOTTOM ITSELF AS AN ORGANIC WAVE ── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-bottom-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.952 C 0.875,0.936 0.736,0.984 0.556,0.956 C 0.375,0.928 0.222,0.984 0,0.948 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ──────────────────────────────────────────────────────────────────
          01. EDITORIAL AGENCY HERO BANNER (IDENTICAL HEIGHT & LAYOUT AS CLIENT & OUR TEAM PAGES)
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative z-10 w-full pt-24 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 lg:pb-20 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          clipPath: "url(#hero-bottom-wave)",
          WebkitClipPath: "url(#hero-bottom-wave)",
        }}
      >
        {/* Subtle Check Box Grid Texture into Hero Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Foreground Content Grid (Identical Padding & Spacing as Client & Team Pages) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-8 sm:pb-12 lg:pb-16">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 sm:mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">ABOUT US</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Short Headline, Simple Description, Focus Pillars, Action Buttons */}
            <div className="space-y-4 sm:space-y-6 relative z-20">
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]">
                  About <span className="text-[#FFAE00]">Tzar Digital</span>
                </h1>
              </div>

              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                We create modern web and mobile applications, powerful e-commerce platforms, and SEO strategies that help businesses grow.
              </p>

              {/* Focus Pillars (Identical Mobile Responsive 3-Column Pattern across all pages) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Web & Apps
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Next.js & React Apps
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Tech Stack
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Node & Cloud APIs
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Growth
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    SEO & High ROAS
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                <Link
                  href="/services"
                  className="bg-[#FFAE00] text-[#061309] hover:bg-white font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 text-xs sm:text-sm group font-sans cursor-pointer"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#about-story"
                  className="border border-white/25 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold transition-all text-xs sm:text-sm inline-flex items-center gap-2 font-sans cursor-pointer"
                >
                  <span>Company Story</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image with Responsive Mobile Wrapper (IDENTICAL TO CLIENT & OUR TEAM PAGES) */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/lottie/teammates_about.png"
                  alt="Tzar Digital Agency"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-56 sm:max-h-72 lg:max-h-115 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delicate golden accent curve tracing the wave bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-10 lg:h-16 block pointer-events-none opacity-60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40"
              stroke="#FFAE00"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* ── 02. CORE METRICS BENCHMARK STRIP (LUXURY DARK CARD WITH BREATHING ROOM) ── */}
      <section className="relative z-20 pt-8 sm:pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-5 sm:p-7 lg:p-8"
          style={{
            backgroundColor: "#061309",
            backgroundImage:
              "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          }}
        >
          {/* Subtle 32px grid texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""
                }`}
              >
                <span className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#FFAE00] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-bold text-xs sm:text-sm text-white/95 mt-1">
                  {stat.label}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#B6F8DD]/70 uppercase tracking-wider mt-0.5">
                  {stat.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. COMPANY STORY & IDENTITY (SIMPLE, HUMAN-FRIENDLY COPYWRITING) ── */}
      <section id="about-story" className="relative z-10 py-10 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-12"
            style={{
              backgroundColor: "#061309",
              backgroundImage:
                "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
            }}
          >
            {/* Subtle 32px grid texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Framed Agency Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-4/5 sm:h-96 rounded-2xl sm:rounded-3xl bg-[#030A05] p-2.5 sm:p-3 border border-white/15 shadow-xl group">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/images/resources/about-page-img-2.png"
                      alt="About Tzar Digital"
                      fill
                      className="object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Mission & Company Identity Narrative in Simple English */}
              <div className="lg:col-span-7 space-y-5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-3 py-1 rounded-full inline-block">
                  ABOUT OUR COMPANY
                </span>

                <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  We Build Websites That <span className="text-[#FFAE00]">Help Businesses Grow</span>
                </h2>

                <p className="font-sans text-xs sm:text-sm lg:text-base text-[#B6F8DD]/85 leading-relaxed">
                  Tzar is a digital team based in Mumbai. We build clean websites, mobile applications, and search marketing that help businesses connect with more customers every single day.
                </p>

                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                  Our mission is simple: to make technology easy and useful for you. We believe in being honest, working hard, and delivering what we promise. Whether you need a fresh new company website, an online store, or help getting found on Google, we make it happen with zero headache.
                </p>

                {/* Core Philosophy Quote Block */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-[#FFAE00]">
                  <p className="font-montserrat font-bold text-sm sm:text-base text-white italic leading-snug">
                    "Providing simple, smart website solutions for your business future."
                  </p>
                  <span className="block mt-1 font-mono text-[11px] uppercase tracking-wider text-[#FFAE00]">
                    — Tzar Digital Agency Core Philosophy
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/services"
                    className="bg-[#FFAE00] text-[#061309] hover:bg-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md inline-flex items-center gap-2 text-xs sm:text-sm group"
                  >
                    <span>What We Do</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#company-values"
                    className="border border-white/20 text-white hover:bg-white/10 px-5 py-3 rounded-xl font-bold transition-all text-xs sm:text-sm inline-flex items-center gap-2"
                  >
                    <span>Our Values</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. OUR CORE VALUES (SIMPLE, HUMAN-FRIENDLY COPYWRITING) ── */}
      <section id="company-values" className="relative z-10 py-10 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-3 py-1 rounded-full inline-block">
              WHAT WE BELIEVE
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-3">
              How We Work <span className="text-[#FFAE00]">With You</span>
            </h2>
            <p className="text-[#B6F8DD]/85 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Simple values that help us build great websites and strong relationships with our clients.
            </p>
          </div>

          {/* 4-Card Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {COMPANY_VALUES.map((val) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.id}
                  className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#FFAE00]/50 transition-all duration-300 shadow-xl p-5 sm:p-7 flex flex-col justify-between group"
                  style={{
                    backgroundColor: "#061309",
                    backgroundImage:
                      "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
                  }}
                >
                  {/* Subtle 32px grid texture */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </div>

                  <div className="relative z-10 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#FFAE00]/15 border border-[#FFAE00]/30 flex items-center justify-center text-[#FFAE00]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold bg-[#FFAE00]/10 px-2.5 py-1 rounded-full border border-[#FFAE00]/20">
                        {val.highlight}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white group-hover:text-[#FFAE00] transition-colors">
                        {val.title}
                      </h3>
                      <p className="font-mono text-xs text-[#FFAE00]/90 mt-0.5">
                        {val.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#B6F8DD]/85 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 05. THE TZAR 4-STEP DELIVERY PROCESS (SIMPLE ENGLISH COPYWRITING) ── */}
      <section className="relative z-10 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-12"
            style={{
              backgroundColor: "#061309",
              backgroundImage:
                "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
            }}
          >
            {/* Subtle 32px grid texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-3 py-1 rounded-full inline-block">
                  HOW IT WORKS
                </span>
                <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight mt-3">
                  Simple <span className="text-[#FFAE00]">4-Step Process</span>
                </h2>
                <p className="text-[#B6F8DD]/85 text-xs sm:text-sm mt-2">
                  We guide you from your first idea to a working website in four clear steps.
                </p>
              </div>

              {/* 4 Simple Process Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {DELIVERY_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#FFAE00]/40 transition-all"
                  >
                    <div>
                      <span className="font-mono font-black text-2xl sm:text-3xl text-[#FFAE00]">
                        {step.step}
                      </span>
                      <h4 className="font-montserrat font-bold text-sm sm:text-base text-white mt-2 mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs text-[#B6F8DD]/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. SEAMLESS BRIDGE CARD TO OUR TEAM PAGE ── */}
      <section className="relative z-10 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 bg-linear-to-r from-[#061309] via-[#0E2914] to-[#061309] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFAE00] font-bold">
                MEET THE PEOPLE
              </span>
              <h3 className="font-montserrat font-black text-xl sm:text-2xl text-white tracking-tight">
                Want to see the specialists working on your projects?
              </h3>
              <p className="text-xs sm:text-sm text-[#B6F8DD]/85 max-w-xl">
                Check out our dedicated team page to see our designers, developers, and marketing experts.
              </p>
            </div>

            <Link
              href="/our-team"
              className="shrink-0 bg-[#FFAE00] text-[#061309] hover:bg-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md inline-flex items-center gap-2 text-xs sm:text-sm font-sans"
            >
              <span>Meet Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 07. HIGH-CONVERTING LEAD ENQUIRY FORM SECTION (SINGLE CLEAN TITLE) ── */}
      <div className="relative z-10 w-full overflow-hidden">
        <TrafficGrowthSection
          noBorder={true}
          badge="GET IN TOUCH"
          title={
            <>
              Let&apos;s Build Something <span className="text-[#FFAE00]">Great Together</span>
            </>
          }
          subtitle="Tell us about your project and our team will get back to you with ideas and next steps."
        />
      </div>

      {/* ── 08. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
        title="Ready to Build What's Next for Your Business?"
        description="Partner with our multidisciplinary team of engineers, designers, and growth strategists to create digital experiences that set industry benchmarks."
        primaryText="Schedule Free Consultation"
        primaryHref="/contact"
        secondaryText="View Client Work"
        secondaryHref="/portfolio"
        className="relative z-10"
      />
    </div>
  );
}
