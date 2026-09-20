"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

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
      {/* ── 01. EDITORIAL HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#1D4224] text-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        {/* Background Image with Rich Tint */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/page-header-bgOurClients.jpg')",
          }}
        />

        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4224]/90 via-[#1D4224]/95 to-[#0E2015]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR CLIENTS</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFAE00]/15 border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SUCCESS STORIES & CLIENTS</span>
            </div>

            <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Our Valued <span className="text-[#FFAE00]">Clients</span>
            </h1>

            <p className="font-sans text-sm sm:text-lg text-[#B6F8DD]/90 max-w-2xl leading-relaxed">
              Tzar Venture has generated high-intent leads and revenue for B2B & B2C clients through bespoke website development, search engine optimization, and high-impact digital marketing channels.
            </p>
          </div>
        </div>

        {/* Subtle Bottom Border */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
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
      <section className="py-10 sm:py-16">
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

      {/* ── 04. CALL TO ACTION STRIP ── */}
      <section className="py-10 sm:py-16 bg-[#1D4224] text-white relative overflow-hidden">
        {/* Background Texture Pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/assets/images/resources/counter-one-pattern.png')",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#FFAE00]">
                ACCELERATE YOUR GROWTH
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                Schedule a consultation to discover how our web systems, SEO, and performance media can unlock new revenue for your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-montserrat font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg inline-flex items-center gap-2 group"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="border border-white/20 text-white hover:bg-white/10 font-montserrat font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-200"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
