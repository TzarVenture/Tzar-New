"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowUpRight, Globe, Play, Sparkles } from 'lucide-react';

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
    img: "/assets/images/projects/r1.jpg",
    logo: "/assets/images/projects/Artboard 9.png",
    services: ["Shopify Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 2,
    title: "Mahaarajaa",
    link: "https://mahaarajaa.life/",
    img: "/assets/images/projects/r2.jpg",
    logo: "/assets/images/projects/Artboard 3.png",
    services: ["Shopify Development", "Social Media", "SMM"],
  },
  {
    id: 3,
    title: "Blue7Vets",
    link: "https://blue7vets.com",
    img: "/assets/images/projects/r3.jpg",
    logo: "/assets/images/projects/Artboard 8.png",
    services: ["WordPress Website Development", "Social Media", "SEO Optimization", "SMM"],
  },
  {
    id: 4,
    title: "Cabelo Chave",
    link: "https://cabelochave.com/",
    img: "/assets/images/projects/r4.jpg",
    logo: "/assets/images/projects/Artboard 1.png",
    services: ["Shopify Development", "Ui/Ux Strategy"],
  },
  {
    id: 5,
    title: "Doordash",
    link: "https://www.doordash.com/",
    img: "/assets/images/projects/r5.jpg",
    logo: "/assets/images/projects/Artboard 20 (1).png",
    services: ["Custom Web Development", "Ui/Ux Strategy"],
  },
  {
    id: 7,
    title: "Orcollective",
    link: "https://orcollective.co.uk/",
    img: "/assets/images/projects/r7.jpg",
    logo: "/assets/images/projects/Artboard 19 (1).png",
    services: ["Shopify Development", "Ui/Ux Strategy"],
  },
  {
    id: 8,
    title: "Staples",
    link: "https://www.staples.com/",
    img: "/assets/images/projects/r8.jpg",
    logo: "/assets/images/projects/Artboard 17 (1).png",
    services: ["Custom Web Development", "Social Media"],
  },
  {
    id: 9,
    title: "Target",
    link: "https://www.target.com/",
    img: "/assets/images/projects/r9.jpg",
    logo: "/assets/images/projects/Artboard 18 (1).png",
    services: ["Custom Web Development", "Ui/Ux Strategy"],
  },
  {
    id: 10,
    title: "DIY Mumbai",
    link: "https://diyguru-mumbai.org/",
    img: "/assets/images/projects/r10.jpg",
    logo: "/assets/images/projects/Artboard 7.png",
    services: ["WordPress Website Development", "Ui/Ux Strategy"],
  },
  {
    id: 11,
    title: "Little Flower Children School, Mau",
    link: "http://www.lfcsmau.co/",
    img: "/assets/images/projects/r11.jpg",
    logo: "/assets/images/projects/Artboard 4.png",
    services: ["WordPress Website Development", "Social Media"],
  },
  {
    id: 12,
    title: "Urbanladder",
    link: "https://www.urbanladder.com/",
    img: "/assets/images/projects/r12.jpg",
    logo: "/assets/images/projects/Artboard 2.png",
    services: ["Custom Website Work", "SEO Optimization"],
  },
  {
    id: 13,
    title: "Femmella",
    link: "https://www.femmella.com/",
    img: "/assets/images/projects/r13.jpg",
    logo: "/assets/images/projects/Artboard 6.png",
    services: ["Shopify Development", "SEO Optimization"],
  },
  {
    id: 14,
    title: "Printshop",
    link: "https://www.printshop.com/",
    img: "/assets/images/projects/r14.jpg",
    logo: "/assets/images/projects/Artboard 12.png",
    services: ["Custom Web Development", "Ui/Ux Strategy"],
  },
  {
    id: 15,
    title: "Cadd Centre Thane",
    link: "https://caddcentrethane.com/",
    img: "/assets/images/projects/r15.jpg",
    logo: "/assets/images/projects/Artboard 11.png",
    services: ["WordPress Website Development", "Ui/Ux Strategy"],
  },
  {
    id: 16,
    title: "Happy Brews",
    link: "https://happybrews.co.in/",
    img: "/assets/images/projects/r16.jpg",
    logo: "/assets/images/projects/Artboard 1.png",
    services: ["WordPress Website Development", "Ui/Ux Strategy"],
  },
  {
    id: 18,
    title: "The Clothing Factory",
    link: "https://theclothingfactory.in/",
    img: "/assets/images/projects/Website 5.png",
    logo: "/assets/images/projects/Artboard 20 (1).png",
    services: ["Shopify Development", "Ui/Ux Strategy"],
  },
  {
    id: 19,
    title: "Gurukul Vatika",
    link: "https://gurukulvatika.com/",
    img: "/assets/images/projects/r21.png",
    logo: "/assets/images/projects/Artboard 16.png",
    services: ["WordPress Website Development", "Ui/Ux Strategy"],
  },
  {
    id: 20,
    title: "softdots",
    link: "https://softdots.deepakwp.in/",
    img: "/assets/images/projects/r19.png",
    logo: "/assets/images/projects/Artboard 14.png",
    services: ["WordPress Website Development", "Social Media", "SEO Optimization", "SMM"],
  },
  {
    id: 21,
    title: "Chadar Mahotsav",
    link: "https://chadarmahotsav.com/",
    img: "/assets/images/projects/r20.png",
    logo: "/assets/images/projects/Artboard 13.png",
    services: ["WordPress Website Development", "Ui/Ux Strategy"],
  },
  {
    id: 22,
    title: "Kp",
    link: "https://kpmumbai.com/",
    img: "/assets/images/projects/Website 4.png",
    logo: "/assets/images/projects/Artboard 5.png",
    services: ["Shopify Development", "Social Media", "SEO Optimization", "SMM"],
  },
];

/* Harmonious pastel card backdrop palette matching live site */
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
   PORTFOLIO TABS LIST (Matches the 6 tabs from tzar)
-------------------------------------------------------------------------- */
const PORTFOLIO_TABS = [
  { id: "web", label: "Web Design" },
  { id: "banners", label: "Creative Banners" },
  { id: "reels", label: "Reels" },
  { id: "packaging", label: "Print & Packaging" },
  { id: "nightclub", label: "Night Club Shoot" },
  { id: "behance", label: "Behance Gallery" },
];

/* --------------------------------------------------------------------------
   MAIN PORTFOLIO PAGE COMPONENT
-------------------------------------------------------------------------- */
export const PortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("web");

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">

      {/* ── 01. LUXURY PAGE HERO HEADER (100% VH / DVH HEIGHT ON ALL DEVICES) ── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] h-screen h-[100dvh] flex flex-col justify-center pt-20 pb-8 sm:pt-20 sm:pb-8 overflow-hidden bg-[#0E2015] border-b border-[#1D4224]/20">
        {/* Background Image Stage */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src="/assets/images/backgrounds/page-header-bgPorfolio.jpg"
            alt="Portfolio Header Background"
            className="w-full h-full object-cover object-center opacity-60"
            onError={(e) => {
              // Graceful fallback if background path differs
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Ambient Spruce & Gold Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2015] via-[#0E2015]/80 to-[#0E2015]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2015] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 my-auto w-full text-center space-y-4">
          <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08]">
            OUR PORTFOLIO
          </h1>

          <p className="font-inter text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore our cutting-edge websites, viral video reels, bespoke packaging editions, and high-impact brand campaigns.
          </p>

          {/* Quick CTA to Explore Projects */}
          <div className="pt-2 flex items-center justify-center">
            <a
              href="#portfolio-showcase"
              className="w-full sm:w-auto max-w-xs sm:max-w-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#FFAE00]/30"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFAE00]" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. CATEGORY FILTER TABS BAR (Exact 6 tabs from tzar) ── */}
      <section id="portfolio-showcase" className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Tabs Container: Native Touch Swipe on Mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto px-4 sm:px-0 pb-3 mb-8 no-scrollbar scroll-smooth">
            {PORTFOLIO_TABS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`portfolio-tab-${tab.id}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-6 py-2.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? "bg-[#0E2015] text-[#FFAE00] shadow-md border-2 border-[#FFAE00]"
                      : "bg-white text-[#5C6860] hover:text-[#0E2015] border border-neutral-300 hover:border-[#1D4224]/50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* ── 03. TAB 1: WEB DESIGN GRID (20 Projects from tzar) ── */}
          {activeTab === "web" && (
            <div
              key="web-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-200"
            >
              {WEB_PROJECTS.map((item, index) => {
                const bgColor = CARD_BG_COLORS[index % CARD_BG_COLORS.length];

                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden border border-[#1D4224]/10 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer text-inherit no-underline"
                    style={{ backgroundColor: bgColor }}
                  >
                    <div className="p-6 h-full flex flex-col justify-between min-h-[420px]">
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
                          className="max-h-12 max-w-[140px] object-contain drop-shadow-xs"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = "none";
                          }}
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

          {/* ── 04. TAB 2: CREATIVE BANNERS (Brand Campaigns from tzar) ── */}
          {activeTab === "banners" && (
            <div
              key="banners-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200"
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

          {/* ── 05. TAB 3: VIDEO REELS (Vertical YouTube Shorts from tzar) ── */}
          {activeTab === "reels" && (
            <div
              key="reels-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-200"
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

          {/* ── 06. TAB 4: PRINT & PACKAGING (from tzar) ── */}
          {activeTab === "packaging" && (
            <div
              key="packaging-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in duration-200"
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

          {/* ── 07. TAB 5: NIGHT CLUB SHOOT (from tzar) ── */}
          {activeTab === "nightclub" && (
            <div
              key="nightclub-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 animate-in fade-in duration-200"
            >
              {NIGHT_CLUB_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-16/9"
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

          {/* ── 08. TAB 6: BEHANCE GALLERY (Official Embed from tzar) ── */}
          {activeTab === "behance" && (
            <div
              key="behance-grid"
              className="bg-white rounded-3xl p-4 sm:p-8 border border-[#1D4224]/10 shadow-sm animate-in fade-in duration-200"
            >
              <div className="mb-4 text-center">
                <span className="font-serif italic text-lg text-[#1D4224]">Official Design Showcase</span>
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

      {/* ── 09. CONSULTATION CALLOUT SECTION ── */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#0E2015] text-white p-8 sm:p-14 overflow-hidden border border-white/10 shadow-xl text-center">
            {/* Ambient Lighting */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#1D4224]/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <p className="font-serif italic text-xl sm:text-2xl text-[#FFAE00]">
                Have a Vision for Your Brand?
              </p>
              <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                Let&apos;s Build Something Iconic Together
              </h2>
              <p className="font-inter text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
                From high-conversion websites to national outdoor campaigns and custom corporate gifts, our team brings exceptional digital craftsmanship to every project.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-[#FFAE00]/40"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFAE00]" />
                </Link>
                <a
                  href="tel:+917304056607"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-montserrat font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all cursor-pointer border border-white/20"
                >
                  <span>+91 730-405-6607</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
