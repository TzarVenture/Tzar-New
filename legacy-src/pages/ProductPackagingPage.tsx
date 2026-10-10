"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Search,
  Layers,
  Palette,
  Package,
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. AUTHENTIC 3 PACKAGING DESIGN SERVICES (from PackagingDesignServ.js) ── */
const PACKAGING_SERVICES = [
  {
    id: 1,
    title: "ANALYSIS",
    description: "First we analyze your competitors, customers’ expectations for the product and determine the aspects of product being user friendly.",
    icon: Search,
  },
  {
    id: 2,
    title: "MATERIAL FRIENDLY DESIGN",
    description: "We design your packaging in such a manner that it can go with any material depending upon the product features.",
    icon: Layers,
  },
  {
    id: 3,
    title: "DESIGN CREATION",
    description: "With all the analyzed information, best packaging design is created keeping in mind usability, branding, attention catching and customer friendliness.",
    icon: Palette,
  },
];

export const ProductPackagingPage: React.FC = () => {
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

            {/* Left Column: Headline & Pitch */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Breadcrumb */}
              <div className="flex flex-col gap-2.5">
                <nav className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <Link href="/" className="hover:text-[#FFAE00] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-[#FFAE00] transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-[#FFAE00] font-bold">Product Design Packaging</span>
                </nav>
              </div>

              {/* Main Headline */}
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-[1.15] uppercase">
                PRODUCT DESIGN{' '}
                <span className="text-[#FFAE00]">
                  PACKAGING SERVICE.
                </span>
              </h1>

              {/* Action Buttons */}
              {/* <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs transition-all"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div> */}
            </div>

            {/* Right Column: Lead Capture Form Component */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full mt-4 lg:mt-0">
              <div className="w-full max-w-md">
                <LeadCaptureForm
                  title="Claim Your Free Packaging Concept"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Product Design & 3D Packaging"
                  serviceOptions={[
                    'Product Design & 3D Packaging',
                    'Logo & Brand Identity',
                    'Websites Design & Development',
                    'Search Engine Optimization (SEO)',
                    'Social Media (SMO | SMM)',
                    'Content Marketing',
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
          02. HERO SECTION: PRODUCT PACKAGING THAT SELLS YOUR BRAND (from HeroSec.js)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8E0] border border-[#1D4224]/10">
                <Package className="w-3.5 h-3.5 text-[#1D4224]" />
                <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#1D4224]">
                  Functional &amp; Market-Ready
                </span>
              </div>

              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#1D4224] tracking-tight leading-tight">
                Product Packaging that Sells Your Brand
              </h2>

              <p className="font-inter text-base sm:text-lg text-[#5C6860] leading-relaxed">
                First impressions matter — and your product&apos;s packaging is the first thing customers notice. Our Product Design &amp; Packaging Service helps brands stand out with creative, functional, and market-ready packaging that tells your story, attracts buyers, and builds trust. From concept to final design, we deliver solutions tailored to your brand.
              </p>

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

            {/* Right Image Column (Authentic image from HeroSec.js) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rounded-3xl overflow-hidden border border-[#1D4224]/15 shadow-2xl bg-[#FAF9F5] aspect-4/3 max-w-md w-full flex items-center justify-center">
                <img
                  src="/assets/images/resources/product_packaging_hero.jpg"
                  alt="Product Packaging that Sells Your Brand"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = "/assets/images/Mockup/product3.jpg";
                  }}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. PACKAGING DESIGN SERVICES (from PackagingDesignServ.js)
      ────────────────────────────────────────────────────────────────── */}
      <section id="services" className="pt-10 sm:pt-14 pb-0 bg-[#EFE8E0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#1D4224] tracking-tight uppercase">
              Packaging Design Services
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2.5" />
          </div>

          {/* 3 Authentic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PACKAGING_SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#EFE8E0] flex items-center justify-center text-[#1D4224] group-hover:bg-[#1D4224] group-hover:text-white transition-colors duration-200 mb-5">
                      <IconComp className="w-8 h-8" />
                    </div>

                    <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015] mb-3 uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
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

        {/* ── Smooth Organic Wave Transition: Muted Sand to Dark Spruce ── */}
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
            Ready to Launch Market-Ready Packaging?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Elevate shelf appeal, captivate retail buyers, and enhance brand loyalty with custom 3D packaging designs engineered for production and compliance.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Get Free Packaging Consultation</span>
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
