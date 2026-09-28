import React from "react";
import { TechHero } from "@/legacy-src/components/home/tech/TechHero";
import { ClientMarquee } from "@/legacy-src/components/home/tech/ClientMarquee";
import ScrollStack, { ScrollStackItem } from "@/legacy-src/components/home/tech/ScrollStack";
import { TechMarquee } from "@/legacy-src/components/home/tech/TechMarquee";
import { TechBentoGrid } from "@/legacy-src/components/home/tech/TechBentoGrid";
import { TechArchitectureMatrix } from "@/legacy-src/components/home/tech/TechArchitectureMatrix";
import { TechServicesGrid } from "@/legacy-src/components/home/tech/TechServicesGrid";
import { TechProofShowcase } from "@/legacy-src/components/home/tech/TechProofShowcase";
import { TechContactSection } from "@/legacy-src/components/home/tech/TechContactSection";
import AccordionGallery from "@/legacy-src/components/home/tech/AccordionGallery";
import { SectorCircuitExpertise } from "@/legacy-src/components/home/tech/SectorCircuitExpertise";
import SeoArticle from "@/legacy-src/components/home/tech/SeoArticle";
import TechInsights from "@/legacy-src/components/home/tech/TechInsights";
import { TrafficGrowthSection } from "@/legacy-src/components/home/tech/TrafficGrowthSection";

const PHOTOSHOOT_ITEMS = [
  {
    image: '/assets/images/MobileShowcase/show1-3.webp',
    label: 'Kashmiri Kahwa Tea',
    tag: 'Happy Brews • Artisanal Food Styling',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show4.webp',
    label: 'Cherry Blossom Serum',
    tag: 'Ellixee • Botanical Daily Glow',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show1-2.webp',
    label: 'Rose Cardamom Brew',
    tag: 'Happy Brews • Floral Infusion',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show2.webp',
    label: 'Grapevine Face Wash',
    tag: 'Ellixee • Cryo Mist Studio',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show1-1.webp',
    label: 'Sunscreen SPF 50',
    tag: 'Ellixee • Botanical Sun Care',
    link: '#'
  }
];

export default function Home() {
  return (
    <main className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* 01 • NEXT.JS CONNECTED CENTRAL NODE HERO */}
      <TechHero />

      {/* 01.5 • COMPANY ACHIEVEMENTS INSIGHTS (OUR GLOBAL IMPACT) */}
      <TechInsights />

      {/* 01.6 • DYNAMIC SCROLLING CASE STUDY STACK (SHIPROCKET INSPIRED) */}
      <section className="bg-[#EFE8E0] pt-10 sm:pt-14 pb-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#1D4224] font-black inline-block mb-2.5">
            OUR CORE DISCIPLINES
          </span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0E2015] tracking-tight max-w-3xl mx-auto leading-tight">
            Why High-Growth Brands Partner with Tzar Venture
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#5C6860] max-w-2xl mx-auto mt-3.5 leading-relaxed font-inter">
            From high-converting web and mobile platforms to bespoke enterprise software, performance SEO, and packaging design—we engineer the complete systems that drive modern commercial scale.
          </p>
        </div>

        <ScrollStack useWindowScroll={true} stackPosition="50px" itemDistance={280} itemStackDistance={22} baseScale={0.96}>
          {/* ── CARD 01: WEB APPLICATION DEVELOPMENT ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#16331B] via-[#0F2413] to-[#07130A] text-white border border-white/10 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B6F8DD]/70 font-medium">
                    01 • Engineering Discipline
                  </span>
                  <span className="text-[11px] font-mono text-white/40 md:hidden">
                    Swipe →
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight mt-1">
                  Web Application Development
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1 leading-relaxed max-w-2xl">
                  High-performance web platforms, headless commerce, and digital infrastructure engineered for commercial scale.
                </p>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar md:grid md:grid-cols-3 md:gap-5 md:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Showcase 1: Multi-Platform Ecosystem */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <picture className="contents">
                      <source media="(max-width: 767px)" srcSet="/mockups/duo-adshalaa-platform.webp" />
                      <img
                        src="/mockups/next-website/all-devices-black.webp"
                        alt="Adshalaa Multi-Platform Architecture"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </picture>
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Adshalaa Platform</span>
                    <span className="text-white/50 font-mono text-[11px]">Next.js • Cross-Device Ecosystem</span>
                  </div>
                </div>

                {/* Showcase 2: Ambrior Infrastructure */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <picture className="contents">
                      <source media="(max-width: 767px)" srcSet="/mockups/duo-ambrior-ecosystem.webp" />
                      <img
                        src="/mockups/Macbook-Air-ambrior.vercel.app.webp"
                        alt="Ambrior Infrastructure"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </picture>
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Ambrior Infrastructure</span>
                    <span className="text-white/50 font-mono text-[11px]">React • Cloud Operations Portal</span>
                  </div>
                </div>

                {/* Showcase 3: Leorix Luxury E-Commerce */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <picture className="contents">
                      <source media="(max-width: 767px)" srcSet="/mockups/duo-leorix-luxury.webp" />
                      <img
                        src="/mockups/Macbook-Air-beleorix.com-shopify.webp"
                        alt="Leorix Luxury E-Commerce"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </picture>
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Leorix E-Commerce</span>
                    <span className="text-white/50 font-mono text-[11px]">Headless Shopify • Luxury Drops</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 02: MOBILE APPLICATION DEVELOPMENT ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#0B1724] via-[#0D1C1B] to-[#060D0B] text-white border border-[#B6F8DD]/20 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B6F8DD]/70 font-medium">
                    02 • Mobile Discipline
                  </span>
                  <span className="text-[11px] font-mono text-white/40 md:hidden">
                    Swipe →
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight mt-1">
                  Mobile Application Development
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1 leading-relaxed max-w-2xl">
                  Native iOS and Android platforms built with fluid 120Hz interactions, biometric security, and offline-first data sync.
                </p>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Phone 1: Kaam Milega */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-kaammilega-native.webp"
                      alt="Kaam Milega Android App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Kaam Milega</span>
                    <span className="text-white/50 font-mono text-[11px]">Android • Workforce Engine</span>
                  </div>
                </div>

                {/* Phone 2: Leorix Commerce */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-leorix-native.webp"
                      alt="Leorix Commerce iOS App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Leorix Commerce</span>
                    <span className="text-white/50 font-mono text-[11px]">iOS • Luxury Drops</span>
                  </div>
                </div>

                {/* Phone 3: Adshalaa Learning */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-adshalaa-native.webp"
                      alt="Adshalaa Learning App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Adshalaa Learning</span>
                    <span className="text-white/50 font-mono text-[11px]">Android • Interactive Streaming</span>
                  </div>
                </div>

                {/* Phone 4: Ambrior Operations */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-ambrior-native.webp"
                      alt="Ambrior Operations iOS App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Ambrior Operations</span>
                    <span className="text-white/50 font-mono text-[11px]">iOS • Field Telemetry</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 03: ENTERPRISE BUSINESS SOFTWARE & CRM ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#1C1C18] via-[#1F261D] to-[#0E130F] text-white border border-[#FFAE00]/20 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFAE00]/80 font-medium">
                    03 • Enterprise Discipline
                  </span>
                  <span className="text-[11px] font-mono text-white/40 md:hidden">
                    Swipe →
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight mt-1">
                  Enterprise Business Software &amp; CRM
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1 leading-relaxed max-w-2xl">
                  Bespoke enterprise portals, automated client onboarding workflows, and centralized revenue analytics pipelines.
                </p>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Showcase 1: Tzar CRM Platform */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    {/* Mobile Only (< 768px): High-End Responsive Duo */}
                    <div className="stack-mobile-only w-full h-full">
                      <img
                        src="/mockups/duo-tzar-crm.webp"
                        alt="Tzar CRM Enterprise Suite"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl mx-auto"
                      />
                    </div>
                    {/* Desktop Only (>= 768px): Original MacBook + iPad Corner Overlay */}
                    <div className="stack-desktop-flex flex-1 min-h-0 w-full h-full items-center justify-center relative overflow-hidden">
                      <img
                        src="/mockups/Macbook-Air-tzar-crm.vercel.app.webp"
                        alt="Tzar CRM Enterprise Suite"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="/mockups/iPad-PRO-11-tzar-crm.vercel.app.webp"
                        alt="Tzar CRM Tablet"
                        decoding="async"
                        className="absolute bottom-2 right-2 sm:right-4 w-24 sm:w-32 object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Tzar CRM Suite</span>
                    <span className="text-white/50 font-mono text-[11px]">PostgreSQL • Revenue Pipeline</span>
                  </div>
                </div>

                {/* Showcase 2: AY Astute Group CRM */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    {/* Mobile Only (< 768px): High-End Responsive Duo */}
                    <div className="stack-mobile-only w-full h-full">
                      <img
                        src="/mockups/duo-ay-astute-crm.webp"
                        alt="AY Astute Group CRM"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl mx-auto"
                      />
                    </div>
                    {/* Desktop Only (>= 768px): Original MacBook + iPad Corner Overlay */}
                    <div className="stack-desktop-flex flex-1 min-h-0 w-full h-full items-center justify-center relative overflow-hidden">
                      <img
                        src="/mockups/Macbook-Air-ay-astute-group-crm.vercel.app (1).webp"
                        alt="AY Astute Group CRM"
                        decoding="async"
                        className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="/mockups/iPad-PRO-11-ay-astute-group-crm.vercel.app.webp"
                        alt="AY Astute Tablet"
                        decoding="async"
                        className="absolute bottom-2 right-2 sm:right-4 w-24 sm:w-32 object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">AY Astute Portal</span>
                    <span className="text-white/50 font-mono text-[11px]">Next.js • Governance Workflow</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 04: DIGITAL MARKETING & TECHNICAL SEO ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#0E1A12] via-[#15281B] to-[#08120A] text-white border border-white/10 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B6F8DD]/70 font-medium">
                    04 • Growth Discipline
                  </span>
                  <span className="text-[11px] font-mono text-white/40 md:hidden">
                    Swipe →
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight mt-1">
                  Digital Marketing &amp; Technical SEO
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1 leading-relaxed max-w-2xl">
                  Data-driven organic search domination, programmatic architecture, and full-funnel paid media acquisition.
                </p>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Showcase 1: Organic SEO */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <img
                      src="/assets/images/seo-growth-dashboard.webp"
                      alt="Organic Traffic Growth Dashboard"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Organic Search Authority</span>
                    <span className="text-white/50 font-mono text-[11px]">Programmatic SEO • Core Web Vitals</span>
                  </div>
                </div>

                {/* Showcase 2: Paid ROAS */}
                <div className="shrink-0 w-full md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <img
                      src="/assets/images/paid-performance-dashboard.webp"
                      alt="Paid Acquisition Performance Dashboard"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Paid Acquisition Suite</span>
                    <span className="text-white/50 font-mono text-[11px]">Meta &amp; Google Performance Max</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 05: PRODUCT DESIGNING & PACKAGING ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#1E3B24] via-[#152E1D] to-[#0A1A10] text-white border border-white/10 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B6F8DD]/70 font-medium">
                    05 • Industrial Discipline
                  </span>
                  <span className="text-[11px] font-mono text-white/40 md:hidden">
                    Swipe →
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight mt-1">
                  Product Designing &amp; Packaging
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1 leading-relaxed max-w-2xl">
                  Physical industrial design, structural 3D packaging, and production-ready print finishes for consumer brands.
                </p>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Packaging 1 */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging1.webp"
                      alt="Happy Brews Canister"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Happy Brews</span>
                    <span className="text-white/50 font-mono text-[11px]">Pantone Foil • 3D Tin</span>
                  </div>
                </div>

                {/* Packaging 2 */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging2.webp"
                      alt="Skin Easi Dermatology"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Skin Easi</span>
                    <span className="text-white/50 font-mono text-[11px]">Clinical Dispenser Bottle</span>
                  </div>
                </div>

                {/* Packaging 3 */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging3.webp"
                      alt="Happee Lifestyle Box"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Happee Lifestyle</span>
                    <span className="text-white/50 font-mono text-[11px]">Rigid Magnetic Box</span>
                  </div>
                </div>

                {/* Packaging 4 */}
                <div className="shrink-0 w-full sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging4.webp"
                      alt="Escarl Luxury Box"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/80 font-inter border-t border-white/10 shrink-0">
                    <span className="font-montserrat font-semibold text-white">Escarl Luxury</span>
                    <span className="text-white/50 font-mono text-[11px]">Slide-Out Velvet Drawer</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        {/* 01.7 • CLIENT BRANDS INFINITE MARQUEE (Building Success Stories with...) */}
        <ClientMarquee />

        {/* OUR SECTOR EXPERTISE — Circuit Network & Lighting Animation */}
        <SectorCircuitExpertise />

        {/* Brand Showcase Accordion Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 mb-16 relative z-20">
          <div className="text-center mb-10">
            <span className="font-mono text-sm uppercase tracking-widest text-[#1D4224] font-black">
              BRAND CAMPAIGNS & PRODUCT PHOTOSHOOTS
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#0E2015] tracking-tight mt-2 leading-tight">
              Visual Systems Engineered for High-End Organic Brands
            </h2>
          </div>
          <AccordionGallery
            items={PHOTOSHOOT_ITEMS}
            defaultIndex={2}
            trigger="hover"
            accentColor="#FFAE00"
            overlayColor="#0E2015"
            textColor="#ffffff"
            height={480}
            gap={14}
            radius={20}
            orientation="horizontal"
          />
        </div>
      </section>

      {/* Traffic Growth Lead Generation Section */}
      <div id="lead-form" className="scroll-mt-10">
        <TrafficGrowthSection />
      </div>

      {/* SEO Marketing Article */}
      <SeoArticle />
    </main>
  );
}
