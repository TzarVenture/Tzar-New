"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Globe,
  Sparkles,
  Play,
  Layers,
  Code2,
  Package,
  Film,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import { TypewriterHeadline } from "@/legacy-src/components/ui/TypewriterHeadline";

/* --------------------------------------------------------------------------
   01. WEB DESIGN PROJECTS DATA (20 Real Client Websites from tzar)
-------------------------------------------------------------------------- */
interface WebProject {
  id: number;
  title: string;
  link: string;
  img: string;
  logo: string;
  services: string[];
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: 1,
    title: "Apollo India",
    link: "https://apolloindia.com",
    img: "/optimized/assets/images/projects/r1.webp",
    logo: "/assets/images/projects/Artboard 9.png",
    services: ["Shopify Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 2,
    title: "Mahaarajaa",
    link: "https://mahaarajaa.life/",
    img: "/optimized/assets/images/projects/r2.webp",
    logo: "/assets/images/projects/Artboard 3.png",
    services: ["Shopify Development", "Social Media", "SMM"],
  },
  {
    id: 3,
    title: "Blue7Vets",
    link: "https://blue7vets.com",
    img: "/optimized/assets/images/projects/r3.webp",
    logo: "/assets/images/projects/Artboard 8.png",
    services: ["WordPress Website Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 4,
    title: "Cabelo Chave",
    link: "https://cabelochave.com/",
    img: "/optimized/assets/images/projects/r4.webp",
    logo: "/assets/images/projects/Artboard 1.png",
    services: ["Shopify Development", "UI/UX Strategy"],
  },
  {
    id: 5,
    title: "Doordash",
    link: "https://www.doordash.com/",
    img: "/optimized/assets/images/projects/r5.webp",
    logo: "/assets/images/projects/Artboard 20 (1).png",
    services: ["Custom Web Development", "UI/UX Strategy"],
  },
  {
    id: 7,
    title: "Orcollective",
    link: "https://orcollective.co.uk/",
    img: "/optimized/assets/images/projects/r7.webp",
    logo: "/assets/images/projects/Artboard 19 (1).png",
    services: ["Shopify Development", "UI/UX Strategy"],
  },
  {
    id: 8,
    title: "Staples",
    link: "https://www.staples.com/",
    img: "/optimized/assets/images/projects/r8.webp",
    logo: "/assets/images/projects/Artboard 17 (1).png",
    services: ["Custom Web Development", "Social Media"],
  },
  {
    id: 9,
    title: "Target",
    link: "https://www.target.com/",
    img: "/optimized/assets/images/projects/r9.webp",
    logo: "/assets/images/projects/Artboard 18 (1).png",
    services: ["Custom Web Development", "UI/UX Strategy"],
  },
  {
    id: 10,
    title: "DIY Mumbai",
    link: "https://diyguru-mumbai.org/",
    img: "/optimized/assets/images/projects/r10.webp",
    logo: "/assets/images/projects/Artboard 7.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 11,
    title: "Little Flower Children School, Mau",
    link: "http://www.lfcsmau.co/",
    img: "/optimized/assets/images/projects/r11.webp",
    logo: "/assets/images/projects/Artboard 4.png",
    services: ["WordPress Website Development", "Social Media"],
  },
  {
    id: 12,
    title: "Urbanladder",
    link: "https://www.urbanladder.com/",
    img: "/optimized/assets/images/projects/r12.webp",
    logo: "/assets/images/projects/Artboard 2.png",
    services: ["Custom Website Work", "SEO Optimization"],
  },
  {
    id: 13,
    title: "Femmella",
    link: "https://www.femmella.com/",
    img: "/optimized/assets/images/projects/r13.webp",
    logo: "/assets/images/projects/Artboard 6.png",
    services: ["Shopify Development", "SEO Optimization"],
  },
  {
    id: 14,
    title: "Printshop",
    link: "https://www.printshop.com/",
    img: "/optimized/assets/images/projects/r14.webp",
    logo: "/assets/images/projects/Artboard 12.png",
    services: ["Custom Web Development", "UI/UX Strategy"],
  },
  {
    id: 15,
    title: "Cadd Centre Thane",
    link: "https://caddcentrethane.com/",
    img: "/optimized/assets/images/projects/r15.webp",
    logo: "/assets/images/projects/Artboard 11.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 16,
    title: "Happy Brews",
    link: "https://happybrews.co.in/",
    img: "/optimized/assets/images/projects/r16.webp",
    logo: "/assets/images/projects/Artboard 1.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 18,
    title: "The Clothing Factory",
    link: "https://theclothingfactory.in/",
    img: "/optimized/assets/images/projects/Website 5.webp",
    logo: "/assets/images/projects/Artboard 20 (1).png",
    services: ["Shopify Development", "UI/UX Strategy"],
  },
  {
    id: 19,
    title: "Gurukul Vatika",
    link: "https://gurukulvatika.com/",
    img: "/optimized/assets/images/projects/r21.webp",
    logo: "/assets/images/projects/Artboard 16.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 20,
    title: "softdots",
    link: "https://softdots.deepakwp.in/",
    img: "/optimized/assets/images/projects/r19.webp",
    logo: "/assets/images/projects/Artboard 14.png",
    services: ["WordPress Website Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 21,
    title: "Chadar Mahotsav",
    link: "https://chadarmahotsav.com/",
    img: "/optimized/assets/images/projects/r20.webp",
    logo: "/assets/images/projects/Artboard 13.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 22,
    title: "Kp",
    link: "https://kpmumbai.com/",
    img: "/optimized/assets/images/projects/Website 4.webp",
    logo: "/assets/images/projects/Artboard 5.png",
    services: ["Shopify Development", "Social Media", "SEO Optimization"],
  },
];

/* Harmonious soft card backdrops matching site branding */
const CARD_BG_COLORS = [
  "#D0E4DA",
  "#F3D2C4",
  "#E5DCC2",
  "#E6F0D1",
  "#F1D3DD",
  "#E1D9C9",
  "#D3EEE4",
  "#F3E0CF",
];

/* --------------------------------------------------------------------------
   02. CREATIVE BANNERS DATA (from tzar)
-------------------------------------------------------------------------- */
interface BannerItem {
  id: number;
  url: string;
}

const CREATIVE_BANNERS: BannerItem[] = [
  { id: 1, url: "https://ik.imagekit.io/ihxz8q7gr/1.jpg?updatedAt=1682423152315" },
  { id: 2, url: "https://ik.imagekit.io/ihxz8q7gr/3.jpg?updatedAt=1682423152314" },
  { id: 3, url: "https://ik.imagekit.io/ihxz8q7gr/2.jpg?updatedAt=1682423151909" },
  { id: 4, url: "https://ik.imagekit.io/ihxz8q7gr/8__1_.jpg?updatedAt=1682601106978" },
  { id: 9, url: "https://ik.imagekit.io/ihxz8q7gr/10.jpg?updatedAt=1682601106985" },
  { id: 28, url: "https://ik.imagekit.io/ihxz8q7gr/2__6_.jpg?updatedAt=1682602425931" },
  { id: 29, url: "https://ik.imagekit.io/ihxz8q7gr/1__3_.jpg?updatedAt=1682601964160" },
  { id: 30, url: "https://ik.imagekit.io/ihxz8q7gr/1__4_.jpg?updatedAt=1682601964160" },
  { id: 31, url: "https://ik.imagekit.io/ihxz8q7gr/3__2_.jpg?updatedAt=1682601964180" },
  { id: 32, url: "https://ik.imagekit.io/ihxz8q7gr/1__2___1_.jpg?updatedAt=1682601964157" },
  { id: 33, url: "https://ik.imagekit.io/ihxz8q7gr/1__5_.jpg?updatedAt=1682601964185" },
  { id: 34, url: "https://ik.imagekit.io/ihxz8q7gr/5__1_.jpg?updatedAt=1682602425847" },
  { id: 35, url: "https://ik.imagekit.io/ihxz8q7gr/3__1_.jpg?updatedAt=1682602425880" },
  { id: 36, url: "https://ik.imagekit.io/ihxz8q7gr/3__5_.jpg?updatedAt=1682602425890" },
];

/* --------------------------------------------------------------------------
   03. REELS DATA (YouTube vertical embeds from tzar)
-------------------------------------------------------------------------- */
interface VideoItem {
  id: number;
  url: string;
  title: string;
}

const REELS: VideoItem[] = [
  { id: 5, url: "https://www.youtube.com/embed/7MPOVdcTT2E", title: "Brand Reel 1" },
  { id: 6, url: "https://www.youtube.com/embed/IUS0ux2MhWI", title: "Brand Reel 2" },
  { id: 7, url: "https://www.youtube.com/embed/OTh5RHPFs-I", title: "Brand Reel 3" },
  { id: 8, url: "https://www.youtube.com/embed/YBhpoYvxlKw", title: "Brand Reel 4" },
  { id: 22, url: "https://www.youtube.com/embed/OZ9SDm3lPn8", title: "Brand Reel 5" },
  { id: 23, url: "https://www.youtube.com/embed/A4M1nWVAOQQ", title: "Brand Reel 6" },
  { id: 24, url: "https://www.youtube.com/embed/6hmb37ircHo", title: "Brand Reel 7" },
  { id: 25, url: "https://www.youtube.com/embed/hLxltxtLGsw", title: "Brand Reel 8" },
  { id: 26, url: "https://www.youtube.com/embed/Sc6UNBemC3c", title: "Brand Reel 9" },
  { id: 27, url: "https://www.youtube.com/embed/fVNR25FvE_Q", title: "Brand Reel 10" },
];

/* --------------------------------------------------------------------------
   04. PRINT & PACKAGING DATA (from tzar)
-------------------------------------------------------------------------- */
interface PrintItem {
  id: number;
  img: string;
  title: string;
}

const PRINT_PACKAGING: PrintItem[] = [
  { id: 18, img: "/assets/images/projects/printPackaging1.png", title: "Luxury Retail Packaging Edition 1" },
  { id: 19, img: "/assets/images/projects/printPackaging2.png", title: "Premium Box & Label Design 2" },
  { id: 20, img: "/assets/images/projects/printPackaging3.png", title: "Custom Merchandise Packaging 3" },
  { id: 21, img: "/assets/images/projects/printPackaging4.png", title: "Eco-Friendly Product Box Edition 4" },
];

/* --------------------------------------------------------------------------
   05. NIGHT CLUB SHOOT DATA (Commercial event videos from tzar)
-------------------------------------------------------------------------- */
const NIGHT_CLUB_VIDEOS: VideoItem[] = [
  { id: 37, url: "https://www.youtube.com/embed/_wPXOrzwERk?si=sh6AektxhWprfBwT", title: "Commercial Event Reel 1" },
  { id: 38, url: "https://www.youtube.com/embed/KO6RTpW6wOY?si=MOEFiGvxXn6k9WgD", title: "Nightlife Production 2" },
  { id: 39, url: "https://www.youtube.com/embed/meZyRF6aJ9U?si=34Q53My64-f_Aj78", title: "Visual Experience 3" },
  { id: 34, url: "https://www.youtube.com/embed/ACSxYu_r1Bk?si=lbSZerL00vVqA7PR", title: "Nightlife Showcase 4" },
  { id: 35, url: "https://www.youtube.com/embed/RLSUarhKFRA?si=L8CPr4Ne1m8WKhF0", title: "Production Reel 5" },
  { id: 36, url: "https://www.youtube.com/embed/y4CoBtyTIVc?si=0onb519Y7ck2IngW", title: "Event Capture 6" },
  { id: 41, url: "https://www.youtube.com/embed/nzth16Cq2q0?si=x7YorVp3pp3kx0nP", title: "Aftermovie Highlight 7" },
  { id: 42, url: "https://www.youtube.com/embed/N0DAp3JHTIY?si=4L19FJprhqhjNoQM", title: "Atmosphere Video 8" },
  { id: 43, url: "https://www.youtube.com/embed/UcXh2ZlJlNg?si=bEsidHsxWlycxj_d", title: "Music & Visual Experience 9" },
  { id: 44, url: "https://www.youtube.com/embed/_wPXOrzwERk?si=eDCgwtN4-FyUUb8R", title: "Club Video 10" },
];

/* --------------------------------------------------------------------------
   PORTFOLIO TABS LIST
-------------------------------------------------------------------------- */
const PORTFOLIO_TABS = [
  { id: "web", label: "Web Design", count: 20 },
  { id: "banners", label: "Creative Banners", count: 14 },
  { id: "reels", label: "Reels", count: 10 },
  { id: "packaging", label: "Print & Packaging", count: 4 },
  { id: "nightclub", label: "Night Club Shoot", count: 10 },
  { id: "behance", label: "Behance Gallery", count: null },
];

// Proof Metrics Bar (matching /our-client stats strip)
const PROOF_METRICS = [
  { value: "50+", label: "Live Websites Deployed" },
  { value: "100+", label: "Brand Campaigns Run" },
  { value: "10M+", label: "Video Impressions" },
  { value: "95%", label: "Client Retention Rate" },
];

export default function PortfolioView() {
  const [activeTab, setActiveTab] = useState<string>("web");

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">
      {/* ──────────────────────────────────────────────────────────────────
          01. EDITORIAL HERO BANNER (MATCHING /our-client & SERVICES THEME)
          Widescreen Background Art + 3D Visual on Right + Organic Wave
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-[85vh] lg:min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-6 sm:pb-8 lg:pb-10">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR PORTFOLIO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Description, Focus Pillars, CTAs */}
            <div className="lg:col-span-6 space-y-6 relative z-20 text-left">
              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                  Our Proven Work &amp;{" "}
                  <span className="text-[#FFAE00] block mt-1 sm:mt-2">
                    <TypewriterHeadline text="Case Studies" delay={250} />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                Explore our cutting-edge web platforms, viral video reels, luxury packaging editions, and high-impact digital systems engineered for ambitious brands.
              </p>

              {/* Focus Pillars (matching /our-client layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10 text-left">
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Brands Scaled
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    100+ Pan-India &amp; Global
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Digital Systems
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    50+ Web &amp; Apps Shipped
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Campaign Reach
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    10M+ Video &amp; Media Views
                  </span>
                </div>
              </div>

              {/* Action Buttons (Left-aligned on mobile, matching identical width and height) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#portfolio-showcase"
                  className="w-[210px] sm:w-auto h-12 bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-6 sm:px-7 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base group font-sans cursor-pointer"
                >
                  <span>Explore Showcase</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 shrink-0" />
                </a>

                <Link
                  href="/contact"
                  className="w-[210px] sm:w-auto h-12 border border-white/25 text-white hover:bg-white/10 px-6 sm:px-7 rounded-xl font-bold transition-all text-sm sm:text-base inline-flex items-center justify-center gap-2 font-sans"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual (User Provided 3D Render) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-lg lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/portfolio-hero.webp"
                  alt="Tzar Digital Agency Portfolio Showcase"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-125 object-contain drop-shadow-2xl"
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

      {/* ── 02. PROOF METRICS STRIP (MATCHING /our-client) ── */}
      <section className="relative z-20 -mt-7 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-xl p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROOF_METRICS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-2 rounded-xl transition-colors hover:bg-[#F3EFEA]"
            >
              <div className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
                <span className="text-[#FFAE00]">{stat.value}</span>
              </div>
              <div className="font-sans font-semibold text-xs sm:text-sm text-[#1D4224] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03. CATEGORY FILTER TABS BAR & SHOWCASE ── */}
      <section id="portfolio-showcase" className="py-12 sm:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#1D4224] font-black block mb-2">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight leading-tight">
              Engineered for High Conversion &amp; Brand Authority
            </h2>
          </div>

          {/* Filter Tabs Container: Native Touch Swipe on Mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto px-2 sm:px-0 pb-3 mb-10 no-scrollbar scroll-smooth">
            {PORTFOLIO_TABS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`portfolio-tab-${tab.id}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-5 sm:px-6 py-2.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer select-none active:scale-95 inline-flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0E2015] text-[#FFAE00] shadow-md border-2 border-[#FFAE00]"
                      : "bg-white text-[#5C6860] hover:text-[#0E2015] border border-neutral-300 hover:border-[#1D4224]/50 shadow-xs"
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== null && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        isActive
                          ? "bg-[#FFAE00] text-[#0E2015]"
                          : "bg-neutral-100 text-[#5C6860]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── TAB 1: WEB DESIGN GRID (20 Verified Client Builds) ── */}
          {activeTab === "web" && (
            <div
              key="web-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-300"
            >
              {WEB_PROJECTS.map((item, index) => {
                const bgColor = CARD_BG_COLORS[index % CARD_BG_COLORS.length];

                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden border border-[#1D4224]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer text-inherit no-underline"
                    style={{ backgroundColor: bgColor }}
                  >
                    <div className="p-6 h-full flex flex-col justify-between min-h-105">
                      {/* Top Service Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4 h-14 overflow-hidden content-start">
                        {item.services.map((srv, i) => (
                          <span
                            key={i}
                            className="bg-white/95 text-[#0E2015] text-[11px] font-montserrat font-semibold px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>

                      {/* Brand Logo Stage */}
                      <div className="h-14 flex items-center justify-center mb-4">
                        <img
                          src={item.logo}
                          alt={`${item.title} Logo`}
                          className="max-h-12 max-w-35 object-contain drop-shadow-xs"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = "none";
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Website Mockup Image Stage */}
                      <div className="h-36 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="max-h-32 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = "none";
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Title & Outbound Indicator */}
                      <div className="pt-2 border-t border-[#0E2015]/10 flex items-center justify-between">
                        <div className="text-left">
                          <span className="text-[11px] text-[#0E2015]/70 uppercase tracking-wider block font-medium">
                            Web Development
                          </span>
                          <h3 className="font-montserrat font-bold text-sm text-[#0E2015] leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/80 group-hover:bg-[#1D4224] group-hover:text-white flex items-center justify-center transition-colors shrink-0 shadow-xs">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* ── TAB 2: CREATIVE BANNERS (14 High-Impact Creatives) ── */}
          {activeTab === "banners" && (
            <div
              key="banners-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300"
            >
              {CREATIVE_BANNERS.map((banner) => (
                <div
                  key={banner.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#1D4224]/10 shadow-xs hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="overflow-hidden bg-neutral-100 aspect-4/3 flex items-center justify-center">
                    <img
                      src={banner.url}
                      alt="Creative Brand Banner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 3: VIDEO REELS (10 Vertical YouTube Shorts) ── */}
          {activeTab === "reels" && (
            <div
              key="reels-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-300"
            >
              {REELS.map((reel) => (
                <div
                  key={reel.id}
                  className="bg-black rounded-2xl overflow-hidden border border-[#1D4224]/20 shadow-md aspect-9/16 relative"
                >
                  <iframe
                    src={reel.url}
                    title={reel.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 4: PRINT & PACKAGING (4 Luxury Editions) ── */}
          {activeTab === "packaging" && (
            <div
              key="packaging-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in duration-300"
            >
              {PRINT_PACKAGING.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#1D4224]/10 shadow-xs hover:shadow-xl transition-all duration-300 group p-6 flex flex-col justify-between"
                >
                  <div className="overflow-hidden rounded-2xl bg-neutral-100 flex items-center justify-center h-72 mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="text-center pt-2">
                    <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 5: NIGHT CLUB SHOOT (10 Commercial Productions) ── */}
          {activeTab === "nightclub" && (
            <div
              key="nightclub-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 animate-in fade-in duration-300"
            >
              {NIGHT_CLUB_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-video"
                >
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 6: BEHANCE GALLERY (Official Embed) ── */}
          {activeTab === "behance" && (
            <div
              key="behance-grid"
              className="bg-white rounded-3xl p-4 sm:p-8 border border-[#1D4224]/10 shadow-sm animate-in fade-in duration-300"
            >
              <div className="mb-4 text-center">
                <span className="font-serif italic text-lg text-[#1D4224]">
                  Official Design Showcase
                </span>
                <h3 className="font-montserrat font-black text-2xl text-[#0E2015] uppercase mt-1">
                  Behance Curated Portfolio
                </h3>
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xs">
                <iframe
                  src="https://www.behance.net/embed/project/192005763?ilo0=1"
                  height="650"
                  width="100%"
                  allowFullScreen
                  className="w-full border-0"
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 04. CONSISTENT REUSABLE CTA CARD (MATCHING SERVICES & CLIENT PAGES) ── */}
      <ConsistentCTA
        title="Let's Build Something Iconic Together"
        description="From high-conversion websites and custom digital systems to national outdoor campaigns, our team brings exceptional digital craftsmanship to every project."
        primaryText="Start a Project"
        primaryHref="/contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </div>
  );
}
