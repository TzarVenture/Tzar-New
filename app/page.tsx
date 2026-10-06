import React from "react";
import { TechHero } from "@/legacy-src/components/home/tech/TechHero";
import { ClientMarquee } from "@/legacy-src/components/home/tech/ClientMarquee";
import ScrollStack, { ScrollStackItem } from "@/legacy-src/components/home/tech/ScrollStack";
import { WebDevSpotlightCard } from "@/legacy-src/components/home/tech/WebDevSpotlightCard";
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


      {/* 01.6 • DYNAMIC SCROLLING CASE STUDY STACK (SHIPROCKET INSPIRED) */}
      <section className="bg-[#EFE8E0] pt-10 sm:pt-14 pb-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-[#1D4224] font-black block mb-2">
            OUR CORE DISCIPLINES
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight leading-tight">
            Services we specialize in
          </h2>
        </div>

        <ScrollStack useWindowScroll={true} stackPosition="50px" itemDistance={480} itemStackDistance={30} baseScale={0.96}>
          <ScrollStackItem itemClassName="!p-0 bg-white border border-[#1D4224]/15 shadow-2xl overflow-hidden">
            <WebDevSpotlightCard />
          </ScrollStackItem>

          {/* ── CARD 02: MOBILE APPLICATION DEVELOPMENT ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#E8F0F2] via-[#DEE9ED] to-[#D2E0E6] border border-[#1D4224]/10">
            {/* Hover Overlay */}
            <div className="stack-card-hover-overlay">
              <div className="stack-card-hover-content">
                <p className="stack-card-hover-tagline">Native iOS &amp; Android apps with fluid 120Hz interactions, biometric security, and offline-first sync.</p>
                <ul className="stack-card-hover-features">
                  <li>Cross-platform React Native</li>
                  <li>Native iOS &amp; Android builds</li>
                  <li>Biometric &amp; secure auth</li>
                </ul>
                <a href="/website-development-services" className="stack-card-hover-cta">
                  Explore Service
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-[#1D4224]/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4224]/60 font-medium">
                    02 • Mobile
                  </span>
                  <div className="flex items-center gap-2 md:hidden">
                    <span className="text-[11px] font-mono text-[#1D4224]/40">
                      Swipe →
                    </span>
                    <a
                      href="/website-development-services"
                      className="inline-flex items-center gap-1 text-[11px] font-montserrat font-bold text-[#0E2015] bg-[#1D4224]/10 hover:bg-[#1D4224]/20 active:scale-95 px-2.5 py-0.5 rounded-full transition-all"
                    >
                      Explore
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4224]/8 flex items-center justify-center shrink-0">
                    <svg width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D4224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-[#0E2015] tracking-tight">
                    Mobile Application Development
                  </h3>
                </div>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Phone 1: Kaam Milega */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-kaammilega-native.webp"
                      alt="Kaam Milega Android App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Kaam Milega</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Android</span>
                  </div>
                </div>

                {/* Phone 2: Leorix Commerce */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-leorix-native.webp"
                      alt="Leorix Commerce iOS App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Leorix Commerce</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">iOS</span>
                  </div>
                </div>

                {/* Phone 3: Adshalaa Learning */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-adshalaa-native.webp"
                      alt="Adshalaa Learning App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Adshalaa Learning</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Android</span>
                  </div>
                </div>

                {/* Phone 4: Ambrior Operations */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/mockups/app-ambrior-native.webp"
                      alt="Ambrior Operations iOS App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Ambrior Operations</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">iOS</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 03: ENTERPRISE BUSINESS SOFTWARE & CRM ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#F5F0E2] via-[#EDE5D3] to-[#E3DAC4] border border-[#B8860B]/12">
            {/* Hover Overlay */}
            <div className="stack-card-hover-overlay stack-card-hover-overlay--gold">
              <div className="stack-card-hover-content">
                <p className="stack-card-hover-tagline">Bespoke enterprise portals, automated onboarding workflows, and centralized revenue pipelines for complex organizations.</p>
                <ul className="stack-card-hover-features stack-card-hover-features--gold">
                  <li>Custom CRM &amp; ERP platforms</li>
                  <li>Automated workflow engines</li>
                  <li>Revenue analytics dashboards</li>
                </ul>
                <a href="/website-development-services" className="stack-card-hover-cta stack-card-hover-cta--gold">
                  Explore Service
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-[#B8860B]/12 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B8860B]/70 font-medium">
                    03 • Enterprise
                  </span>
                  <div className="flex items-center gap-2 md:hidden">
                    <span className="text-[11px] font-mono text-[#B8860B]/40">
                      Swipe →
                    </span>
                    <a
                      href="/website-development-services"
                      className="inline-flex items-center gap-1 text-[11px] font-montserrat font-bold text-[#8B6914] bg-[#B8860B]/12 hover:bg-[#B8860B]/20 active:scale-95 px-2.5 py-0.5 rounded-full transition-all"
                    >
                      Explore
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-[#0E2015] tracking-tight">
                    Enterprise Business Software &amp; CRM
                  </h3>
                </div>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Showcase 1: Tzar CRM Platform */}
                <div className="shrink-0 w-[88%] md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
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
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#B8860B]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Tzar CRM Suite</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">PostgreSQL • Revenue Pipeline</span>
                  </div>
                </div>

                {/* Showcase 2: AY Astute Group CRM */}
                <div className="shrink-0 w-[88%] md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
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
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#B8860B]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">AY Astute Portal</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Next.js • Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 04: DIGITAL MARKETING & TECHNICAL SEO ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#E6F0E4] via-[#DBEAD6] to-[#CDE1C8] border border-[#1D4224]/10">
            {/* Hover Overlay */}
            <div className="stack-card-hover-overlay">
              <div className="stack-card-hover-content">
                <p className="stack-card-hover-tagline">Data-driven organic search domination, programmatic architecture, and full-funnel paid media acquisition.</p>
                <ul className="stack-card-hover-features">
                  <li>Programmatic SEO &amp; Core Web Vitals</li>
                  <li>Google &amp; Meta performance ads</li>
                  <li>Full-funnel conversion strategy</li>
                </ul>
                <a href="/search-engine-optimization-services" className="stack-card-hover-cta">
                  Explore Service
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-[#1D4224]/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4224]/60 font-medium">
                    04 • Growth
                  </span>
                  <div className="flex items-center gap-2 md:hidden">
                    <span className="text-[11px] font-mono text-[#1D4224]/40">
                      Swipe →
                    </span>
                    <a
                      href="/search-engine-optimization-services"
                      className="inline-flex items-center gap-1 text-[11px] font-montserrat font-bold text-[#0E2015] bg-[#1D4224]/10 hover:bg-[#1D4224]/20 active:scale-95 px-2.5 py-0.5 rounded-full transition-all"
                    >
                      Explore
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4224]/8 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D4224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 7v4l2.5 2.5" strokeWidth="1.5"/></svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-[#0E2015] tracking-tight">
                    Digital Marketing &amp; Technical SEO
                  </h3>
                </div>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Showcase 1: Organic SEO */}
                <div className="shrink-0 w-[88%] md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <img
                      src="/assets/images/seo-growth-dashboard.webp"
                      alt="Organic Traffic Growth Dashboard"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Organic Search Authority</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Programmatic SEO</span>
                  </div>
                </div>

                {/* Showcase 2: Paid ROAS */}
                <div className="shrink-0 w-[88%] md:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                    <img
                      src="/assets/images/paid-performance-dashboard.webp"
                      alt="Paid Acquisition Performance Dashboard"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Paid Acquisition Suite</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Meta &amp; Google Ads</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 05: PRODUCT DESIGNING & PACKAGING ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#EDEBE4] via-[#E3E0D6] to-[#D8D4C8] border border-[#1D4224]/10">
            {/* Hover Overlay */}
            <div className="stack-card-hover-overlay">
              <div className="stack-card-hover-content">
                <p className="stack-card-hover-tagline">Physical industrial design, structural 3D packaging, and production-ready print finishes for consumer brands.</p>
                <ul className="stack-card-hover-features">
                  <li>3D box &amp; bottle renders</li>
                  <li>Prepress-ready print files</li>
                  <li>Luxury dieline layouts</li>
                </ul>
                <a href="/product-design-packaging-services" className="stack-card-hover-cta">
                  Explore Service
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between">
              {/* Card Header */}
              <div className="pb-2.5 sm:pb-3 border-b border-[#1D4224]/10 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4224]/60 font-medium">
                    05 • Industrial Design
                  </span>
                  <div className="flex items-center gap-2 md:hidden">
                    <span className="text-[11px] font-mono text-[#1D4224]/40">
                      Swipe →
                    </span>
                    <a
                      href="/product-design-packaging-services"
                      className="inline-flex items-center gap-1 text-[11px] font-montserrat font-bold text-[#0E2015] bg-[#1D4224]/10 hover:bg-[#1D4224]/20 active:scale-95 px-2.5 py-0.5 rounded-full transition-all"
                    >
                      Explore
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4224]/8 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D4224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg sm:text-2xl lg:text-3xl text-[#0E2015] tracking-tight">
                    Product Designing &amp; Packaging
                  </h3>
                </div>
              </div>

              {/* Showcase Visual Area */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-1 no-scrollbar lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0 flex-1 min-h-0 w-full overscroll-x-contain mt-2 sm:mt-3">
                {/* Packaging 1 */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging1.webp"
                      alt="Happy Brews Canister"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Happy Brews</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Pantone Foil • 3D Tin</span>
                  </div>
                </div>

                {/* Packaging 2 */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging2.webp"
                      alt="Skin Easi Dermatology"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Skin Easi</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Clinical Dispenser</span>
                  </div>
                </div>

                {/* Packaging 3 */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging3.webp"
                      alt="Happee Lifestyle Box"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Happee Lifestyle</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Magnetic Box</span>
                  </div>
                </div>

                {/* Packaging 4 */}
                <div className="shrink-0 w-[85%] sm:w-auto snap-center flex flex-col justify-between h-full min-h-0">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging4.webp"
                      alt="Escarl Luxury Box"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#0E2015]/70 font-inter border-t border-[#1D4224]/10 shrink-0">
                    <span className="font-montserrat font-semibold text-[#0E2015]">Escarl Luxury</span>
                    <span className="text-[#4B5563] font-mono text-[11px]">Velvet Drawer</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        {/* 01.65 • COMPANY ACHIEVEMENTS INSIGHTS (GLOBAL IMPACT METRICS) */}
        <div className="w-full">
          <TechInsights />
        </div>

        {/* OUR SECTOR EXPERTISE — Circuit Network & Lighting Animation */}
        <SectorCircuitExpertise />

        {/* 01.7 • CLIENT BRANDS INFINITE MARQUEE (Building Success Stories with...) */}
        <ClientMarquee />

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
