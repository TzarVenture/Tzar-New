import React from "react";
import { TechHero } from "@/legacy-src/components/home/tech/TechHero";
import { ClientMarquee } from "@/legacy-src/components/home/tech/ClientMarquee";
import ScrollStack, { ScrollStackItem } from "@/legacy-src/components/home/tech/ScrollStack";
import { WebDevSpotlightCard } from "@/legacy-src/components/home/tech/WebDevSpotlightCard";
import { MobileDevSpotlightCard } from "@/legacy-src/components/home/tech/MobileDevSpotlightCard";
import { EnterpriseSpotlightCard } from "@/legacy-src/components/home/tech/EnterpriseSpotlightCard";
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
          <ScrollStackItem itemClassName="!p-0 bg-white border border-[#1D4224]/15 shadow-2xl overflow-hidden">
            <MobileDevSpotlightCard />
          </ScrollStackItem>

          {/* ── CARD 03: ENTERPRISE BUSINESS SOFTWARE & CRM ── */}
          <ScrollStackItem itemClassName="!p-0 bg-white border border-[#B8860B]/15 shadow-2xl overflow-hidden">
            <EnterpriseSpotlightCard />
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
