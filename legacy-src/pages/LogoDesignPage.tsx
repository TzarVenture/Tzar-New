"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Palette,
  CheckCircle2,
} from 'lucide-react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. AUTHENTIC MOCKUP DATA (from logodesignmu.js) ─────────────────────── */
const MOCKUP_ITEMS = [
  { id: 9, title: "Celebrix Brand Identity", image: "/assets/images/Mockup/celebrix.jpg" },
  { id: 10, title: "IACF Corporate Insignia", image: "/assets/images/Mockup/iacf.jpg" },
  { id: 1, title: "Luxury Minimalist Identity", image: "/assets/images/Mockup/1-1.png" },
  { id: 2, title: "Embossed Paper Stationery", image: "/assets/images/Mockup/2-3.png" },
  { id: 3, title: "Retail Packaging Identity", image: "/assets/images/Mockup/3-1.png" },
  { id: 4, title: "Modern Tech Brandmark", image: "/assets/images/Mockup/4-1.png" },
  { id: 5, title: "Gold Foil Monogram", image: "/assets/images/Mockup/5-2.png" },
  { id: 6, title: "Architectural 3D Signage", image: "/assets/images/Mockup/6-2.png" },
  { id: 7, title: "Corporate Brand Collateral", image: "/assets/images/Mockup/7-1.png" },
  { id: 8, title: "Creative Agency Seal", image: "/assets/images/Mockup/8.png" },
];

/* ── 02. WHY CHOOSE US CARDS (from whychooseUSlogo.js) ──────────────────── */
const WHY_CHOOSE_CARDS = [
  {
    title: "Professional Logo Designers",
    description: "Our team consists of talented and experienced creative designers who share a passion for creating something unique.",
    iconImage: "/assets/images/resources/prf-design.png",
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "We creatively present your idea on paper. We take pride in delivering results that were promised to our clients.",
    iconImage: "/assets/images/resources/100grnty.png",
  },
  {
    title: "Unique Designs",
    description: "Our designs are 100% new and original. We protect your design and brand by completely adhering to the trademark law.",
    iconImage: "/assets/images/resources/uni-logo.png",
  },
  {
    title: "24*7 Customer Support",
    description: "We are available at all times to solve your concerns and issues. We value our clients and make sure to address their concerns in the best possible way.",
    iconImage: "/assets/images/resources/247.png",
  },
];

export const LogoDesignPage: React.FC = () => {
  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER WITH EMBEDDED FORM & BACKGROUND ART
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden border-b border-[#1D4224]/10">
        {/* Subtle Ambient Background */}
        <div
          className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bgLogo-Design.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-[#EFE8E0]/70 via-[#EFE8E0]/90 to-[#EFE8E0] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Headline & Pitch */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Breadcrumb & Guarantee Badge */}
              <div className="flex flex-col gap-2.5">
                <nav className="flex items-center gap-2 text-xs font-mono text-[#5C6860]">
                  <Link href="/" className="hover:text-[#1D4224] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-[#1D4224] transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-[#1D4224] font-bold">Logo Designing</span>
                </nav>

                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1D4224]/10 border border-[#1D4224]/20 w-fit">
                  <span className="font-montserrat font-black text-xs uppercase tracking-wider text-[#1D4224]">
                    Custom Logo &amp; Corporate Identity
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.15]">
                Custom Logo Design &amp;{' '}
                <span className="bg-[#FFAE00] text-[#0E2015] px-2 py-0.5 rounded-md inline-block mt-1">
                  Brand Architecture.
                </span>
              </h1>

              {/* Supporting Hook from Authentic Data */}
              <p className="font-inter text-base sm:text-lg text-[#5C6860] max-w-xl leading-relaxed">
                Welcome to our logo design services! At TZAR, we understand that your logo is the face of your brand — it&apos;s the first thing people see and the foundation of your entire visual identity.
              </p>

              {/* Action Buttons (2-3 words) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-sm hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-lg shadow-[#1D4224]/10 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#mockups"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1D4224]/20 bg-white/70 hover:bg-white text-[#1D4224] font-montserrat font-bold text-sm transition-all duration-200"
                >
                  <span>Explore Portfolio</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Lead Capture Form Component */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="w-full max-w-md rounded-3xl bg-[#0E2015] p-2 border border-[#1D4224]/50 shadow-2xl shadow-black/20">
                <LeadCaptureForm
                  title="Claim Your Free Logo Concept"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Logo & Brand Identity"
                  serviceOptions={[
                    'Logo & Brand Identity',
                    'Websites Design & Development',
                    'Product Design & 3D Packaging',
                    'Performance Marketing (PPC)',
                    'Social Media (SMO | SMM)',
                    'Search Engine Optimization (SEO)',
                  ]}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. EDITORIAL SERVICE INTRO: THE LOGO DESIGN FOUNDATION
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8E0] border border-[#1D4224]/10">
                <Palette className="w-3.5 h-3.5 text-[#1D4224]" />
                <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#1D4224]">
                  Original &amp; Strategic Craft
                </span>
              </div>

              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight leading-tight">
                Crafting Logos That Speak Directly To Your Audience
              </h2>

              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed">
                A well-designed logo is more than just a piece of art; it is the cornerstone of your brand&apos;s story. It communicates who you are, builds trust with your audience, and creates an instant connection that sets you apart from competitors in crowded marketplaces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% Trademark-Ready & Original Artwork",
                  "Multiple Design Concepts with Unlimited Iterations",
                  "Full Vector File Package (AI, EPS, SVG, PNG, PDF)",
                  "Comprehensive Brand Color & Typography Guidelines",
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4224] shrink-0 mt-0.5" />
                    <span className="font-inter text-xs sm:text-sm font-semibold text-[#0E2015]">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Feature Showcase Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1D4224]/15 bg-[#0E2015] aspect-4/3 flex items-center justify-center group">
                <img
                  src="/assets/images/resources/luxury_brand_identity_mockup.jpg"
                  alt="Luxury Brand Identity & Logo Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E2015]/90 via-[#0E2015]/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFAE00] text-[#0E2015] font-montserrat font-black text-[10px] uppercase tracking-wider inline-block mb-1 shadow-xs">
                    Signature Design
                  </span>
                  <p className="font-montserrat font-bold text-sm sm:text-base text-white leading-snug drop-shadow-sm">
                    Icons Built for Global Brand Recognition
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. LOGO DESIGN MOCKUP SERVICES (Images Rendered As-Is)
      ────────────────────────────────────────────────────────────────── */}
      <section id="mockups" className="py-10 sm:py-14 bg-[#EFE8E0] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              About Logo Design MockUp
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight mt-1.5">
              Logo Design MockUp Services
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2.5" />
          </div>

          {/* 10-Item Mockup Grid - Images As-Is Without Card Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {MOCKUP_ITEMS.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl sm:rounded-[18px] shadow-[0_6px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.20)] hover:-translate-y-1.5 transition-all duration-300 w-full"
              >
                <img
                  src={item.image}
                  alt={item.title || `Mockup ${item.id}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Section Bottom CTA (2 words) */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. WHY CHOOSE US FOR LOGO DESIGN (4 Cards from whychooseUSlogo.js)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              The Tzar Advantage
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight mt-1.5 uppercase">
              Why Choose Us for Logo Design
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2.5" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {WHY_CHOOSE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#EFE8E0]/60 p-3 flex items-center justify-center border border-[#1D4224]/10 mb-4">
                  <img
                    src={card.iconImage}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <h3 className="font-montserrat font-black text-sm sm:text-base text-[#0E2015] mb-2 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Bottom CTA (2 words) */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
