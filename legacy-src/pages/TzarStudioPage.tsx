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
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';
import { COMPANY } from '@/data/company';

/* --------------------------------------------------------------------------
   01. AUTHENTIC MEDIA ASSETS & DATA FROM LIVE SITE (tzar-studio)
-------------------------------------------------------------------------- */

// Mobile Showcase Frames (from /assets/images/MobileShowcase/)
const SHOWCASE_ITEMS = [
  { id: 's4', title: 'High-Fashion Editorial', img: '/assets/images/MobileShowcase/show4.jpg', tag: 'Editorial Shoot' },
  { id: 's1', title: 'Studio Portrait Frame #1', img: '/assets/images/MobileShowcase/show1.jpg', tag: 'Studio Portrait' },
  { id: 's2', title: 'Studio Portrait Frame #2', img: '/assets/images/MobileShowcase/show2.jpg', tag: 'Fashion Shoot' },
  { id: 's3', title: 'Commercial Lifestyle Frame', img: '/assets/images/MobileShowcase/show3.jpg', tag: 'Commercial Frame' },
  { id: 's1-1', title: 'Cinematic Frame #1', img: '/assets/images/MobileShowcase/show1-1.jpg', tag: 'Cinematic Reel' },
  { id: 's1-2', title: 'Cinematic Frame #2', img: '/assets/images/MobileShowcase/show1-2.jpg', tag: 'Fashion Editorial' },
  { id: 's1-3', title: 'Cinematic Frame #3', img: '/assets/images/MobileShowcase/show1-3.jpg', tag: 'Model Shoot' },
];

// Restaurant Food Photography Showcase (from /assets/images/MobileShowcase/)
const FOOD_ITEMS = [
  { id: 'f15', title: 'Artisanal Plated Entrée', img: '/assets/images/MobileShowcase/food15.jpg', tag: 'Fine Dining' },
  { id: 'f11', title: 'Gourmet Culinary Special', img: '/assets/images/MobileShowcase/food11.jpg', tag: 'Chef Special' },
  { id: 'f2', title: 'Signature Appetiser Styling', img: '/assets/images/MobileShowcase/food2.jpg', tag: 'Appetiser' },
  { id: 'f13', title: 'Cloud Kitchen Hero Dish', img: '/assets/images/MobileShowcase/food13.jpg', tag: 'Zomato / Swiggy' },
  { id: 'f1', title: 'Authentic Indian Curry & Bread', img: '/assets/images/MobileShowcase/food1.jpg', tag: 'Traditional' },
  { id: 'f12', title: 'Craft Beverage & Cocktail', img: '/assets/images/MobileShowcase/food12.jpg', tag: 'Beverage Bar' },
  { id: 'f3', title: 'Crispy Gourmet Snack Platter', img: '/assets/images/MobileShowcase/food3.jpg', tag: 'Snacks & Sides' },
  { id: 'f14', title: 'Dessert & Pastry Feature', img: '/assets/images/MobileShowcase/food14.jpg', tag: 'Bakery & Dessert' },
];

// Studio Client Brand Logos (from /assets/images/Brandslogo/)
const CLIENT_LOGOS = [
  { id: 1, name: 'Brand Client 1', img: '/assets/images/Brandslogo/client1.jpg' },
  { id: 2, name: 'Brand Client 2', img: '/assets/images/Brandslogo/client2.jpg' },
  { id: 3, name: 'Brand Client 3', img: '/assets/images/Brandslogo/client3.jpg' },
  { id: 4, name: 'Brand Client 4', img: '/assets/images/Brandslogo/client4.jpg' },
  { id: 5, name: 'Brand Client 5', img: '/assets/images/Brandslogo/client5.jpg' },
  { id: 6, name: 'Brand Client 6', img: '/assets/images/Brandslogo/client6.jpg' },
  { id: 7, name: 'Brand Client 7', img: '/assets/images/Brandslogo/client7.jpg' },
  { id: 8, name: 'Brand Client 8', img: '/assets/images/Brandslogo/client8.jpg' },
];

// Studio Service Options for Lead Capture Dropdown
const STUDIO_SERVICES = [
  'Product Photography',
  'Restaurant Food Shoot',
  'Commercial Video & Reels',
  'Model & Fashion Shoot',
  'E-Commerce 3D Packaging',
  'Graphic Editing & Retouching',
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

/* --------------------------------------------------------------------------
   02. COMPONENT: TYPEWRITER TEXT EFFECT
-------------------------------------------------------------------------- */
const TYPEWRITER_PHRASES = [
  'PRODUCT PHOTOGRAPHY SERVICES',
  'COMMERCIAL REELS & VIDEOS',
  'RESTAURANT FOOD STYLING',
  'MODEL & FASHION CAMPAIGNS',
];

const TypewriterHeadline: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPEWRITER_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <div className="min-h-[48px] sm:min-h-[56px] flex items-center justify-center">
      <h3 className="font-montserrat font-bold text-sm sm:text-base md:text-lg lg:text-xl text-[#FFAE00] tracking-wider uppercase text-center">
        {currentText}
        <span className="inline-block w-1.5 h-4 sm:h-5 bg-[#FFAE00] ml-1.5 animate-pulse align-middle" />
      </h3>
    </div>
  );
};

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

  // Smooth scroll to lead form
  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015]">

      {/* ──────────────────────────────────────────────────────────────────
          01. STUDIO HERO BANNER (100% VH / DVH IMMERSIVE LUXURY STAGE)
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-[#0E2015] border-b border-[#1D4224]/30">
        
        {/* Ambient Dark Spruce & Gold Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1D4224]/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* ── COLUMN 1: ROTATING CAMERA LENS (4 COLS) - ORDER-1 ON MOBILE ── */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center order-1 lg:order-1">
              {/* Rotating Lens Graphic with Gold Halo Ring */}
              <div className="relative my-2 sm:my-4 flex items-center justify-center group">
                <div className="absolute inset-0 rounded-full bg-[#FFAE00]/10 blur-xl scale-95 group-hover:scale-105 transition-transform duration-700" />
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-68 md:h-68 lg:w-80 lg:h-80 flex items-center justify-center">
                  <img
                    src="/camlense.png"
                    alt="Tzar Studio Camera Lens"
                    width={350}
                    height={350}
                    className="w-full h-full object-contain pointer-events-none drop-shadow-2xl animate-[spin_25s_linear_infinite]"
                    onError={(e) => {
                      // Fallback icon if image fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Center Lens Accent Dot */}
                  <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1D4224]/80 border border-[#FFAE00]/40 pointer-events-none backdrop-blur-sm" />
                </div>
              </div>
            </div>

            {/* ── COLUMN 2: 2-LINE HEADING, TYPEWRITER & CTA (4 COLS) - ORDER-2 ON MOBILE ── */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5 order-2 lg:order-2 px-2">
              <h1 className="font-montserrat font-black text-lg sm:text-2xl md:text-3xl lg:text-[1.75rem] xl:text-[2.1rem] text-white tracking-tight uppercase leading-[1.15] text-center select-none">
                <span className="block whitespace-nowrap">Commercial Studio</span>
                <span className="block whitespace-nowrap">Production</span>
              </h1>

              {/* Dynamic Typewriter Headline */}
              <div className="w-full max-w-sm py-2 px-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <TypewriterHeadline />
              </div>


              {/* Action Button: Our Services */}
              <div className="pt-2 flex justify-center w-full">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 group cursor-pointer"
                >
                  <span>Our Services</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFAE00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ── COLUMN 3: DIRECT LEAD CAPTURE FORM (4 COLS) ── */}
            <div id="Contactform" className="lg:col-span-4 flex justify-center items-center order-3 w-full">
              <div className="w-full max-w-md rounded-2xl bg-[#07130A]/95 p-1 border border-[#1D4224]/60 shadow-2xl shadow-black/60 backdrop-blur-md">
                <LeadCaptureForm
                  title="Studio Consultation"
                  titleColor="#FFFFFF"
                  bgColor="#07130A"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Product Photography"
                  serviceOptions={STUDIO_SERVICES}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. WORK SHOWCASE (HORIZONTAL CAROUSEL OF AUTHENTIC MOBILE FRAMES)
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#EFE8E0]">
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
                className="flex-none w-[240px] sm:w-[280px] md:w-[310px] snap-center group cursor-pointer"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0E2015] border border-[#0E2015]/10 shadow-lg group-hover:shadow-2xl group-hover:border-[#FFAE00]/60 transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay & Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2015] via-[#0E2015]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

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
                className="group p-4 rounded-xl bg-[#FAF9F5] hover:bg-[#EFE8E0] border border-[#0E2015]/10 hover:border-[#1D4224]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[90px]"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-12 w-auto max-w-[120px] object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    // Graceful fallback display
                    e.currentTarget.style.display = 'none';
                  }}
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
                  src="/assets/images/resources/foodbanner.png"
                  alt="Restaurant Food Shoot Banner"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
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
                <button
                  type="button"
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#FFAE00]/30 group"
                >
                  <span>Enquiry Now</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFAE00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

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
                  className="flex-none w-[230px] sm:w-[270px] md:w-[290px] snap-center group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0E2015] border border-[#0E2015]/10 shadow-md group-hover:shadow-xl group-hover:border-[#FFAE00]/60 transition-all duration-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2015] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

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
                <button
                  type="button"
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
                >
                  <span>Book Studio Shoot</span>
                  <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                </button>

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
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-[#FFAE00]/40 transition-all duration-300 flex flex-col justify-between"
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

      {/* ──────────────────────────────────────────────────────────────────
          06. LIGHTBOX MODAL PREVIEW
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

              <button
                type="button"
                onClick={() => {
                  setLightboxImage(null);
                  scrollToContactForm();
                }}
                className="px-4 py-2 rounded-full bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#25552f] transition-all border border-[#FFAE00]/30 cursor-pointer"
              >
                Inquire Shoot
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
