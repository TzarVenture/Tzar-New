"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Camera,
  Film,
  Sparkles,
  Video,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  CheckCircle2,
  X,
  Maximize2,
  UtensilsCrossed,
  Clapperboard,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { ConsistentCTA } from '@/app/components/ui/ConsistentCTA';
import { TypewriterHeadline } from '@/legacy-src/components/ui/TypewriterHeadline';

/* --------------------------------------------------------------------------
   01. AUTHENTIC MEDIA ASSETS & DATA FROM LIVE SITE (tzar-studio)
-------------------------------------------------------------------------- */

// Mobile Showcase Frames (from /assets/images/MobileShowcase/)
const SHOWCASE_ITEMS = [
  { id: 's4', title: 'High-Fashion Editorial', img: '/optimized/assets/images/MobileShowcase/show4.webp', tag: 'Editorial Shoot' },
  { id: 's1', title: 'Studio Portrait Frame #1', img: '/optimized/assets/images/MobileShowcase/show1.webp', tag: 'Studio Portrait' },
  { id: 's2', title: 'Studio Portrait Frame #2', img: '/optimized/assets/images/MobileShowcase/show2.webp', tag: 'Fashion Shoot' },
  { id: 's3', title: 'Commercial Lifestyle Frame', img: '/assets/images/MobileShowcase/show3.jpg', tag: 'Commercial Frame' },
  { id: 's1-1', title: 'Cinematic Frame #1', img: '/optimized/assets/images/MobileShowcase/show1-1.webp', tag: 'Cinematic Reel' },
  { id: 's1-2', title: 'Cinematic Frame #2', img: '/assets/images/MobileShowcase/show1-2.webp', tag: 'Fashion Editorial' },
  { id: 's1-3', title: 'Cinematic Frame #3', img: '/assets/images/MobileShowcase/show1-3.webp', tag: 'Model Shoot' },
];

// Restaurant Food Photography Showcase (from /assets/images/MobileShowcase/)
const FOOD_ITEMS = [
  { id: 'f15', title: 'Artisanal Plated Entrée', img: '/optimized/assets/images/MobileShowcase/food15.webp', tag: 'Fine Dining' },
  { id: 'f11', title: 'Gourmet Culinary Special', img: '/optimized/assets/images/MobileShowcase/food11.webp', tag: 'Chef Special' },
  { id: 'f2', title: 'Signature Appetiser Styling', img: '/assets/images/MobileShowcase/food2.jpg', tag: 'Appetiser' },
  { id: 'f13', title: 'Cloud Kitchen Hero Dish', img: '/optimized/assets/images/MobileShowcase/food13.webp', tag: 'Zomato / Swiggy' },
  { id: 'f1', title: 'Authentic Indian Curry & Bread', img: '/optimized/assets/images/MobileShowcase/food1.webp', tag: 'Traditional' },
  { id: 'f12', title: 'Craft Beverage & Cocktail', img: '/optimized/assets/images/MobileShowcase/food12.webp', tag: 'Beverage Bar' },
  { id: 'f3', title: 'Crispy Gourmet Snack Platter', img: '/assets/images/MobileShowcase/food3.jpg', tag: 'Snacks & Sides' },
  { id: 'f14', title: 'Dessert & Pastry Feature', img: '/optimized/assets/images/MobileShowcase/food14.webp', tag: 'Bakery & Dessert' },
];

// Studio Client Brand Logos (from /assets/images/Brandslogo/)
const CLIENT_LOGOS = [
  { id: 1, name: 'Brand Client 1', img: '/optimized/assets/images/Brandslogo/client1.webp' },
  { id: 2, name: 'Brand Client 2', img: '/optimized/assets/images/Brandslogo/client2.webp' },
  { id: 3, name: 'Brand Client 3', img: '/optimized/assets/images/Brandslogo/client3.webp' },
  { id: 4, name: 'Brand Client 4', img: '/optimized/assets/images/Brandslogo/client4.webp' },
  { id: 5, name: 'Brand Client 5', img: '/optimized/assets/images/Brandslogo/client5.webp' },
  { id: 6, name: 'Brand Client 6', img: '/assets/images/Brandslogo/client6.jpg' },
  { id: 7, name: 'Brand Client 7', img: '/assets/images/Brandslogo/client7.jpg' },
  { id: 8, name: 'Brand Client 8', img: '/assets/images/Brandslogo/client8.jpg' },
];



// In-House Studio Capabilities
const STUDIO_FACILITIES = [
  {
    title: 'Food Styling Kitchen',
    desc: 'Fully equipped studio kitchen with props, tableware, induction setups, and specialized culinary styling tools.',
  },
  {
    title: 'Cinema Camera Rigs',
    desc: 'High-end cinema sensors (Sony FX3, RED) paired with cinema primes, macro glass, and high-speed robotic sliders.',
  },
  {
    title: 'High-CRI Lighting Bays',
    desc: 'Aputure, Godox, and Broncolor high-CRI continuous and strobe systems for authentic color fidelity and texture.',
  },
  {
    title: 'Rapid Post Turnaround',
    desc: 'In-house color grading, retouching, sound mastering, and aspect-ratio tailoring ready in 48 to 72 hours.',
  },
];

// Studio Proof Metrics Bar (matching /portfolio stats strip)
const STUDIO_METRICS = [
  { value: "500+", label: "Commercial Frames Shot" },
  { value: "50+", label: "Brand Campaigns Run" },
  { value: "4K / 8K", label: "Cinema Master Quality" },
  { value: "48h", label: "Rapid First-Cut Delivery" },
];

/* --------------------------------------------------------------------------
   03. MAIN TZAR STUDIO PAGE COMPONENT
-------------------------------------------------------------------------- */
export const TzarStudioPage: React.FC = () => {
  const showcaseScrollRef = useRef<HTMLDivElement>(null);
  const foodScrollRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; tag: string } | null>(null);

  // Smooth scroll helper for carousels
  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015]">

      {/* ──────────────────────────────────────────────────────────────────
          01. EDITORIAL HERO BANNER (MATCHING /portfolio DESIGN SYSTEM)
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
            <span className="text-white font-bold">TZAR STUDIO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Description, Focus Pillars, CTAs */}
            <div className="lg:col-span-6 space-y-6 relative z-20 text-left">
              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                  <span className="block">Studio Shoots &amp;</span>
                  <span className="text-[#FFAE00] block mt-1 sm:mt-2">
                    <TypewriterHeadline text="Commercial Films" delay={250} />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                Artisanal product styling, commercial lifestyle photography, and 4K cinematic video production engineered for premium consumer brands.
              </p>

              {/* Focus Pillars (matching /portfolio layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10 text-left">
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Cinema Sensors
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Sony FX3 &amp; RED 4K/8K
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Styling Kitchen
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Dedicated In-House Bay
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Fast Turnaround
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    48–72h Delivery
                  </span>
                </div>
              </div>

              {/* Action Buttons (matching /portfolio layout and styling) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#studio-showcase"
                  className="w-[210px] sm:w-auto h-12 bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-6 sm:px-7 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base group font-sans cursor-pointer"
                >
                  <span>Explore Showcase</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 shrink-0" />
                </a>

                <Link
                  href="/contact"
                  className="w-[210px] sm:w-auto h-12 border border-white/25 text-white hover:bg-white/10 px-6 sm:px-7 rounded-xl font-bold transition-all text-sm sm:text-base inline-flex items-center justify-center gap-2 font-sans"
                >
                  <span>Book Studio Shoot</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual (User Provided 3D Render) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-lg lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/tzar-studio-hero.webp"
                  alt="Tzar Studio Commercial Production Showcase"
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

      {/* ── 02. PROOF METRICS STRIP (MATCHING /portfolio) ── */}
      <section className="relative z-20 -mt-7 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-xl p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STUDIO_METRICS.map((stat, idx) => (
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

      {/* ──────────────────────────────────────────────────────────────────
          03. WORK SHOWCASE (HORIZONTAL CAROUSEL OF AUTHENTIC MOBILE FRAMES)
      ────────────────────────────────────────────────────────────────── */}
      <section id="studio-showcase" className="relative py-16 sm:py-24 overflow-hidden bg-[#EFE8E0] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="space-y-2">
              <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
                Where Every Frame Tells a Story
              </span>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight uppercase">
                WORK SHOWCASE
              </h2>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollContainer(showcaseScrollRef, 'left')}
                aria-label="Previous shoots"
                className="w-11 h-11 rounded-full bg-[#0E2015] hover:bg-[#1D4224] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollContainer(showcaseScrollRef, 'right')}
                aria-label="Next shoots"
                className="w-11 h-11 rounded-full bg-[#0E2015] hover:bg-[#1D4224] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Track */}
          <div
            ref={showcaseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SHOWCASE_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage({ src: item.img, title: item.title, tag: item.tag })}
                className="flex-none w-60 sm:w-70 md:w-77.5 snap-center group cursor-pointer"
              >
                <div className="relative aspect-9/16 rounded-2xl overflow-hidden bg-[#0E2015] border border-[#0E2015]/10 shadow-lg group-hover:shadow-2xl group-hover:border-[#FFAE00]/60 transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay & Details */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0E2015] via-[#0E2015]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-[#0E2015]/80 backdrop-blur-sm border border-white/20 text-[#FFAE00] font-montserrat font-bold text-[10px] tracking-wider uppercase">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#1D4224]/90 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Title & Action */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-montserrat font-bold text-sm sm:text-base leading-snug drop-shadow-md">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-white/70 font-inter mt-1 flex items-center gap-1">
                      <span>Click to view full frame</span>
                      <ArrowUpRight className="w-3 h-3 text-[#FFAE00]" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Hint on Mobile */}
          <div className="mt-4 text-center sm:hidden">
            <span className="font-inter text-xs text-[#0E2015]/60">← Swipe horizontally to explore frames →</span>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. CLIENTS LOGO MARQUEE (AUTHENTIC CLIENTS FROM LIVE SITE)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#0E2015]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
              Where Every Frame Tells a Story
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight uppercase">
              CLIENTS
            </h2>
          </div>

          {/* Responsive Brand Clients Grid / Marquee */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.id}
                className="group p-4 rounded-xl bg-[#FAF9F5] hover:bg-[#EFE8E0] border border-[#0E2015]/10 hover:border-[#1D4224]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-22.5"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-12 w-auto max-w-30 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    // Graceful fallback display
                    e.currentTarget.style.display = 'none';
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. RESTAURANT FOOD SHOOT (FEATURE SECTION & FOOD SLIDER)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EFE8E0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 2-Column Feature Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">

            {/* Left Graphic Banner (foodbanner.png) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden bg-[#0E2015] border-2 border-[#1D4224]/30 shadow-2xl group">
                <img
                  src="/optimized/assets/images/resources/foodbanner.webp"
                  alt="Restaurant Food Shoot Banner"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                {/* Left Food Banner Graphic */}
              </div>
            </div>

            {/* Right Copy & Authentic Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
                  Where Every Frame Tells a Story
                </span>
                <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight uppercase leading-tight">
                  RESTAURANT FOOD SHOOT
                </h2>
              </div>

              <div className="space-y-4 font-inter text-sm sm:text-base text-[#0E2015]/80 leading-relaxed">
                <p>
                  Welcome to our creative studio services! At TZAR, we believe that great visual styling makes all the difference in crafting an appetizing presence that drives table bookings and cloud kitchen orders.
                </p>
                <p>
                  Our team of skilled food stylists, photographers, and lighting specialists has the creativity and expertise to develop visually stunning, mouth-watering imagery that captures the essence of your culinary brand.
                </p>
              </div>


              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#FFAE00]/30 group"
                >
                  <span>Enquiry Now</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFAE00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#0E2015] font-montserrat font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all border border-[#0E2015]/15"
                >
                  <Phone className="w-4 h-4 text-[#1D4224]" />
                  <span>Call: {COMPANY.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* ── Studio Food Photography Slider ── */}
          <div className="mt-12 sm:mt-16 pt-10 border-t border-[#0E2015]/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-montserrat font-black text-xl sm:text-2xl text-[#0E2015] uppercase">
                  Culinary Gallery Showcase
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#0E2015]/70 mt-1">
                  Recent food shoots captured for high-end restaurants and cloud brands.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollContainer(foodScrollRef, 'left')}
                  aria-label="Previous food shoot"
                  className="w-10 h-10 rounded-full bg-[#0E2015] hover:bg-[#1D4224] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollContainer(foodScrollRef, 'right')}
                  aria-label="Next food shoot"
                  className="w-10 h-10 rounded-full bg-[#0E2015] hover:bg-[#1D4224] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Food Carousel Container */}
            <div
              ref={foodScrollRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FOOD_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage({ src: item.img, title: item.title, tag: item.tag })}
                  className="flex-none w-57.5 sm:w-67.5 md:w-72.5 snap-center group cursor-pointer"
                >
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#0E2015] border border-[#0E2015]/10 shadow-md group-hover:shadow-xl group-hover:border-[#FFAE00]/60 transition-all duration-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0E2015] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#0E2015]/80 backdrop-blur-sm border border-white/20 text-[#FFAE00] font-montserrat font-bold text-[9px] tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h5 className="font-montserrat font-bold text-xs sm:text-sm drop-shadow-md">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          05. IN-HOUSE FACILITIES & CONSULTATION BANNER
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0E2015] text-white relative overflow-hidden border-t border-[#1D4224]/40">
        
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Facilities Pitch */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4224] border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-montserrat font-bold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5" />
                <span>Full-Service Production Facility</span>
              </span>

              <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
                End-to-End In-House Studio Kitchen &amp; Cinema Rigs
              </h2>

              <p className="font-inter text-sm sm:text-base text-white/75 leading-relaxed">
                Equipped with cinema-grade high-speed optics, synchronized strobes, food styling bays, and dedicated post-production editing suites to turn your campaigns around in days, not weeks.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
                >
                  <span>Book Studio Shoot</span>
                  <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                </Link>

                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#FFAE00]" />
                  <span>{COMPANY.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Facilities Feature Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {STUDIO_FACILITIES.map((facility, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#FFAE00]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1D4224] flex items-center justify-center text-[#FFAE00] mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-base text-white mb-1.5">
                      {facility.title}
                    </h4>
                    <p className="font-inter text-xs text-white/70 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 06. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
        title="Ready to Book Your Next Shoot at Tzar Studio?"
        description="From 4K multi-cam commercial shoots and 3D product renders to high-conversion reels and food photography, our Mumbai studio is fully equipped for your brand."
        primaryText="Book Studio Session"
        primaryHref="/contact"
        secondaryText="View Portfolio"
        secondaryHref="/portfolio"
      />

      {/* ──────────────────────────────────────────────────────────────────
          07. LIGHTBOX MODAL PREVIEW
      ────────────────────────────────────────────────────────────────── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl overflow-hidden bg-[#0E2015] border border-[#FFAE00]/40 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:text-[#FFAE00] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Full Image */}
            <div className="relative max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Caption Header */}
            <div className="p-4 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] text-[#FFAE00] font-montserrat font-bold uppercase tracking-wider">
                  {lightboxImage.tag}
                </span>
                <h4 className="font-montserrat font-bold text-base text-white">
                  {lightboxImage.title}
                </h4>
              </div>

              <Link
                href="/contact"
                onClick={() => setLightboxImage(null)}
                className="px-4 py-2 rounded-full bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#25552f] transition-all border border-[#FFAE00]/30 cursor-pointer"
              >
                Inquire Shoot
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
