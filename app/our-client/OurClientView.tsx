"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { TrafficGrowthSection } from "@/legacy-src/components/home/tech/TrafficGrowthSection";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";

// Key Proof Metrics
const STATS = [
  { value: "100+", label: "Brands Scaled" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "500+", label: "Campaigns & Builds" },
  { value: "4.8★", label: "Average Client Rating" },
];

const CATEGORIES = [
  "All Brands",
  "E-Commerce & D2C",
  "Healthcare & Wellness",
  "Fashion & Lifestyle",
  "Enterprise & B2B",
] as const;

type ClientCategory = (typeof CATEGORIES)[number];

// Client Logos (all 40 verified client logo PNGs with realistic sector distribution)
const CLIENT_LOGOS = Array.from({ length: 40 }, (_, i) => {
  const id = i + 1;
  const categoriesList: ("E-Commerce & D2C" | "Healthcare & Wellness" | "Fashion & Lifestyle" | "Enterprise & B2B")[] = [
    "Healthcare & Wellness", // 1 (Apollo)
    "Healthcare & Wellness", // 2 (Rexmed)
    "Fashion & Lifestyle",   // 3 (Escarl Jewels)
    "E-Commerce & D2C",      // 4
    "Enterprise & B2B",      // 5
    "E-Commerce & D2C",      // 6
    "Fashion & Lifestyle",   // 7
    "Enterprise & B2B",      // 8
    "Healthcare & Wellness", // 9
    "E-Commerce & D2C",      // 10
    "Fashion & Lifestyle",   // 11
    "Enterprise & B2B",      // 12
    "Healthcare & Wellness", // 13
    "E-Commerce & D2C",      // 14
    "Fashion & Lifestyle",   // 15
    "Enterprise & B2B",      // 16
  ];
  const category = categoriesList[(id - 1) % categoriesList.length];
  return {
    id,
    image: `/assets/images/client/${id}.png`,
    name: `Partner Brand ${id}`,
    category,
  };
});

export default function OurClientView() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("All Brands");

  const filteredClients = useMemo(() => {
    if (activeCategory === "All Brands") return CLIENT_LOGOS;
    return CLIENT_LOGOS.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative min-h-screen text-white bg-transparent overflow-x-clip">
      {/* ── FIXED PARALLAX BACKGROUND (PERSISTENT BEHIND SCROLLING SECTIONS) ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/our-client-page-bg.webp"
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

      {/* ── 01. EDITORIAL AGENCY HERO BANNER (IDENTICAL MOBILE RESPONSIVENESS TO FAQS PAGE) ── */}
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
        {/* Check Box Grid Texture into Hero Background */}
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

        {/* Foreground Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-8 sm:pb-12 lg:pb-16">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 sm:mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR CLIENTS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Short Headline, Simple Description, Focus Pillars, Action Buttons */}
            <div className="space-y-4 sm:space-y-6 relative z-20">
              {/* Short Headline (No Badge, No Sparkle Icon) */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]">
                  Our Valued <span className="text-[#FFAE00]">Clients</span>
                </h1>
              </div>

              {/* Reduced, Simple Description */}
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                The brands, fast-scaling startups, and global enterprises that trust Tzar Digital Agency to architect high-performance digital ecosystems.
              </p>

              {/* Focus Pillars (Identical Mobile Responsive 3-Column Pattern as FAQs Page) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Brands Scaled
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    100+ Pan-India & Global
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Retention
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    95% Long-Term Partners
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Delivered
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    500+ Web, SEO & Media
                  </span>
                </div>
              </div>

              {/* Action Buttons (Responsive Sizing Matching FAQs Page) */}
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                <a
                  href="#client-directory"
                  className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 text-xs sm:text-sm group font-sans cursor-pointer"
                >
                  <span>Explore Brands</span>
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  href="/contact"
                  className="border border-white/25 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold transition-all text-xs sm:text-sm inline-flex items-center gap-2 font-sans cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image with Responsive Mobile Wrapper */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/our-client-page.webp"
                  alt="Tzar Digital Agency Clients"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-56 sm:max-h-72 lg:max-h-115 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Delicate Gold Accent Tracing Bottom Edge of the Hero Wave ── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none leading-none overflow-hidden h-10 sm:h-12 md:h-16">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,38 C320,80 540,12 800,45 C1060,78 1260,22 1440,38"
              stroke="#FFAE00"
              strokeWidth="2"
              strokeOpacity="0.45"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* ── 02. PROOF METRICS STRIP (WITH GENEROUS BREATHING SPACE BELOW HERO WAVE) ── */}
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
                <span className="font-bold text-xs sm:text-sm text-white/90 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. CLIENT LOGOS DIRECTORY ── */}
      <section id="client-directory" className="relative z-10 py-10 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Directory Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-3 py-1 rounded-full inline-block">
              PARTNERSHIP ECOSYSTEM
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-3">
              Brands We Have <span className="text-[#FFAE00]">Empowered</span>
            </h2>
            <p className="text-[#B6F8DD]/85 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              From fast-scaling startups to established enterprise corporations across India and internationally.
            </p>
          </div>

          {/* Category Filter Pills (Clean, Flat, Zero Glow, Swipable on Mobile) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FFAE00] text-[#061309] font-bold"
                      : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Responsive Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="group relative bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/20 shadow-md hover:shadow-xl hover:border-[#FFAE00]/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-24 sm:h-28 overflow-hidden backdrop-blur-sm"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 p-1.5"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. HIGH-CONVERTING LEAD ENQUIRY FORM SECTION (NO BLURRY GLOW, SEAMLESS INTEGRATION) ── */}
      <section className="relative z-10 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-3 py-1 rounded-full inline-block">
              GET IN TOUCH
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight mt-3">
              Ready to Scale Your <span className="text-[#FFAE00]">Brand?</span>
            </h2>
            <p className="text-[#B6F8DD]/85 text-xs sm:text-sm mt-1.5">
              Share your project goals with our technical architects and receive a tailored growth roadmap.
            </p>
          </div>

          {/* Lead Capture Form without blurry glow */}
          <TrafficGrowthSection noBorder={true} />
        </div>
      </section>

      {/* ── 05. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
        className="relative z-10"
        title="Ready to Become Our Next Success Story?"
        description="Schedule a consultation with our team to discover how our engineering, search, and design systems can unlock measurable growth for your business."
        primaryText="Talk with Our Team"
        primaryHref="/contact"
        secondaryText="View Portfolio"
        secondaryHref="/portfolio"
      />
    </div>
  );
}
