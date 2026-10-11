"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";

// Client Logos (all 40+ verified client logo PNGs)
const CLIENT_LOGOS = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  image: `/assets/images/client/${i + 1}.png`,
  name: `Partner Brand ${i + 1}`,
}));

// Key Proof Metrics
const STATS = [
  { value: "100+", label: "Brands Scaled" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "500+", label: "Campaigns & Builds" },
  { value: "4.8★", label: "Average Client Rating" },
];

export default function OurClientView() {
  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* ── 01. EDITORIAL HERO BANNER (MATCHING ABOUT/OUR-TEAM RADIAL BG & ORGANIC WAVE) ── */}
      <section
        className="relative w-full min-h-[85vh] lg:min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
        }}
      >
        {/* Check Box Grid Texture into Hero Background (Zero Yellow Glow, Exclusively Hero Green) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Foreground Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-6 sm:pb-8 lg:pb-10">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR CLIENTS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Short Headline, Simple Description, No Eyebrow */}
            <div className="space-y-6 relative z-20">
              {/* Short Headline */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                  Our Valued <span className="text-[#FFAE00]">Clients</span>
                </h1>
              </div>

              {/* Very Short Simple Description */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                The brands, startups, and enterprises that trust Tzar to build high-performance digital systems.
              </p>

              {/* Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Brands Scaled
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    100+ Pan-India & Global
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Client Retention
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    95% Long-Term Partners
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Projects Delivered
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    500+ Web, SEO & Media
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#client-directory"
                  className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2.5 text-sm sm:text-base group font-sans"
                >
                  <span>Explore Partner Brands</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  href="/contact"
                  className="border border-white/25 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base inline-flex items-center gap-2 font-sans"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image with WebP */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-xl lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/our-client-page.webp"
                  alt="Tzar Digital Agency Clients"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-115 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Smooth Organic Wave Transition: Dark Spruce into #EFE8E0 ── */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-px">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-24 block pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40 L1440,100 L0,100 Z"
              fill="#EFE8E0"
            />
          </svg>
        </div>
      </section>

      {/* ── 02. PROOF METRICS STRIP ── */}
      <section className="relative z-20 -mt-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-lg p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx !== 0 ? "lg:border-l lg:border-[#1D4224]/10 lg:pl-6" : ""
              }`}
            >
              <span className="font-montserrat font-black text-2xl sm:text-4xl text-[#1D4224] tracking-tight">
                {stat.value}
              </span>
              <span className="font-bold text-xs sm:text-sm text-[#0E2015] mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03. CLIENT LOGOS GRID ── */}
      <section id="client-directory" className="py-10 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-black">
              PARTNERSHIP ECOSYSTEM
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight mt-1">
              Brands We Have Empowered
            </h2>
            <p className="text-[#5C6860] text-xs sm:text-sm mt-1.5">
              From fast-scaling startups to established enterprise corporations across India and internationally.
            </p>
          </div>

          {/* Logo Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#1D4224]/10 shadow-sm hover:shadow-md hover:border-[#1D4224]/30 transition-all duration-300 flex items-center justify-center h-24 sm:h-28 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 p-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
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
