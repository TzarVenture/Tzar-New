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
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. AUTHENTIC MOCKUP DATA (from logodesignmu.js) ─────────────────────── */
const MOCKUP_ITEMS = [
  { id: 9, title: "Celebrix Brand Identity", image: "/optimized/assets/images/Mockup/celebrix.webp" },
  { id: 10, title: "IACF Corporate Insignia", image: "/assets/images/Mockup/iacf.jpg" },
  { id: 1, title: "Luxury Minimalist Identity", image: "/optimized/assets/images/Mockup/1-1.webp" },
  { id: 2, title: "Embossed Paper Stationery", image: "/optimized/assets/images/Mockup/2-3.webp" },
  { id: 3, title: "Retail Packaging Identity", image: "/optimized/assets/images/Mockup/3-1.webp" },
  { id: 4, title: "Modern Tech Brandmark", image: "/optimized/assets/images/Mockup/4-1.webp" },
  { id: 5, title: "Gold Foil Monogram", image: "/optimized/assets/images/Mockup/5-2.webp" },
  { id: 6, title: "Architectural 3D Signage", image: "/optimized/assets/images/Mockup/6-2.webp" },
  { id: 7, title: "Corporate Brand Collateral", image: "/optimized/assets/images/Mockup/7-1.webp" },
  { id: 8, title: "Creative Agency Seal", image: "/optimized/assets/images/Mockup/8.webp" },
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
    <div className="bg-[#EAF1EB] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER WITH EMBEDDED FORM & BACKGROUND ART
          Flush bottom with organic wave transition into Section 02.
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
        }}
      >
        {/* Check Box Grid Texture */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* ── Left Column: Hero Heading + Logo Designing Art ── */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start w-full">
              {/* Hero Heading and Breadcrumb */}
              <div className="w-full text-center lg:text-left mb-6 sm:mb-8">
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-white/60 mb-3">
                  <Link href="/" className="hover:text-[#FFAE00] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-[#FFAE00] transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-[#FFAE00] font-bold">Logo Designing</span>
                </nav>

                <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  Custom Logo Design &amp;{' '}
                  <span className="text-[#FFA200]">Brand Architecture.</span>
                </h1>
              </div>

              {/* Logo Designing Graphic Art – matching SocialMediaMarketingPage layout */}
              <div className="w-full max-w-115 sm:max-w-135 lg:max-w-150 pt-2 sm:pt-4 flex items-center justify-center overflow-visible">
                <img
                  src="/assets/images/logo_designing.png"
                  alt="Custom Logo Design and Brand Architecture"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Lead Capture Form Component */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full mt-4 lg:mt-0">
              <div className="w-full max-w-md">
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
                  noBorder={true}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Smooth Organic Wave Transition: Dark Spruce to Section 02 (#FFFFFF) ── */}
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
              fill="#FFFFFF"
            />
          </svg>
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
                  src="/optimized/assets/images/resources/luxury_brand_identity_mockup.webp"
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
      <section className="pt-10 sm:pt-14 pb-0 bg-[#FAF9F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">

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

        {/* ── Smooth Organic Wave Transition: Soft Neutral to Dark Spruce ── */}
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
              fill="#0E2015"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          CLOSING BANNER (CTAS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready to Build an Iconic Brand Identity?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Stand out with custom insignia, memorable logos, and comprehensive typography guidelines designed by world-class branding specialists.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Claim Free Logo Concept</span>
              <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
            </button>

            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-all border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#FFAE00]" />
              <span>Call: {COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
