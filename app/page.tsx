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
          {/* ── CARD 01: WEB APPLICATION DEVELOPMENT (Imperial Forest to Obsidian) ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#1D4224] via-[#14351B] to-[#0A1C11] text-white border border-white/15 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div className="stack-card-header">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  01. Web Application Development
                </h3>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-2 no-scrollbar md:grid md:grid-cols-3 md:gap-5 md:pb-0 flex-1 min-h-0 w-full">
                {/* Showcase 1: Multi-Platform Ecosystem */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/mockups/next-website/all-devices-black.webp"
                      alt="Multi-Platform Web Ecosystem"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Adshalaa Multi-Platform
                  </span>
                </div>

                {/* Showcase 2: Ambrior Infrastructure */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/mockups/Macbook-Air-ambrior.vercel.app.webp"
                      alt="Ambrior Infrastructure"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Ambrior Infrastructure
                  </span>
                </div>

                {/* Showcase 3: Leorix E-Commerce */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/mockups/Macbook-Air-beleorix.com-shopify.webp"
                      alt="Leorix E-Commerce"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Leorix E-Commerce
                  </span>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 02: MOBILE APPLICATION DEVELOPMENT (Midnight Slate & Mint Accent) ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#0B151F] via-[#101F18] to-[#060D09] text-white border border-[#B6F8DD]/25 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div className="stack-card-header">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  02. Mobile Application Development
                </h3>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-2 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:pb-0 flex-1 min-h-0 w-full">
                {/* Phone 1: Kaam Milega Android */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-[#FFAE00]/30 transition-all rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/mockups/app-kaammilega-native.webp"
                      alt="Kaam Milega Native Android App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Kaam Milega (Android)
                  </span>
                </div>

                {/* Phone 2: Leorix Commerce iOS */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-[#FFAE00]/30 transition-all rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/mockups/app-leorix-native.webp"
                      alt="Leorix Luxury Drops iOS App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Leorix Commerce (iOS)
                  </span>
                </div>

                {/* Phone 3: Adshalaa Learning Android */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-[#FFAE00]/30 transition-all rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/mockups/app-adshalaa-native.webp"
                      alt="Adshalaa Learning & Placement App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Adshalaa Learning (Android)
                  </span>
                </div>

                {/* Phone 4: Ambrior Operations iOS */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-[#FFAE00]/30 transition-all rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/mockups/app-ambrior-native.webp"
                      alt="Ambrior Operations Enterprise iOS App"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Ambrior Operations (iOS)
                  </span>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 03: ENTERPRISE BUSINESS SOFTWARE (Warm Onyx & Gold Accent) ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#181816] via-[#1E261D] to-[#0E130F] text-white border border-[#FFAE00]/25 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div className="stack-card-header">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  03. Enterprise Business Software &amp; CRM
                </h3>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-2 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:pb-0 flex-1 min-h-0 w-full">
                {/* Showcase 1: Tzar CRM Platform (MacBook + iPad) */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center relative p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/mockups/Macbook-Air-tzar-crm.vercel.app.webp"
                      alt="Tzar CRM Enterprise Suite"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <img
                      src="/mockups/iPad-PRO-11-tzar-crm.vercel.app.webp"
                      alt="Tzar CRM Tablet"
                      decoding="async"
                      className="absolute bottom-2 right-2 sm:right-4 w-20 sm:w-28 object-contain drop-shadow-2xl"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Tzar CRM Enterprise Suite
                  </span>
                </div>

                {/* Showcase 2: AY Astute Group CRM (MacBook + iPad) */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center relative p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/mockups/Macbook-Air-ay-astute-group-crm.vercel.app (1).webp"
                      alt="AY Astute Group CRM"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <img
                      src="/mockups/iPad-PRO-11-ay-astute-group-crm.vercel.app.webp"
                      alt="AY Astute Tablet"
                      decoding="async"
                      className="absolute bottom-2 right-2 sm:right-4 w-20 sm:w-28 object-contain drop-shadow-2xl"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    AY Astute Group Operations Portal
                  </span>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 04: DIGITAL MARKETING & TECHNICAL SEO (Obsidian Night with Verified Data) ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#0E1A12] via-[#15281B] to-[#08120A] text-white border border-white/15 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div className="stack-card-header">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  04. Digital Marketing &amp; Technical SEO
                </h3>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-2 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:pb-0 flex-1 min-h-0 w-full">
                {/* Showcase 1: Verified Organic SEO Growth Dashboard */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-[#FFAE00]/30 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/assets/images/seo-growth-dashboard.webp"
                      alt="Organic Traffic & Keyword Domination Dashboard"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Organic Traffic Growth &amp; Keyword Authority
                  </span>
                </div>

                {/* Showcase 2: Verified Paid Acquisition & ROAS Dashboard */}
                <div className="bg-black/30 hover:bg-black/40 border border-white/10 hover:border-[#FFAE00]/30 transition-all rounded-2xl p-3 sm:p-4 flex flex-col justify-between shrink-0 w-[82%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                    <img
                      src="/assets/images/paid-performance-dashboard.webp"
                      alt="Full-Funnel Paid Acquisition & ROAS Dashboard"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Full-Funnel Paid Acquisition &amp; 4.8x ROAS
                  </span>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── CARD 05: PRODUCT DESIGNING & PACKAGING (Signature Regal Forest) ── */}
          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#224C2A] via-[#173820] to-[#0B1E12] text-white border border-white/15 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div className="stack-card-header">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  05. Product Designing &amp; Packaging
                </h3>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-2 no-scrollbar lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0 flex-1 min-h-0 w-full">
                {/* Packaging 1 */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging1.webp"
                      alt="Happy Brews"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Happy Brews Canister
                  </span>
                </div>

                {/* Packaging 2 */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging2.webp"
                      alt="Skin Easi"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Skin Easi Dermatology
                  </span>
                </div>

                {/* Packaging 3 */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging3.webp"
                      alt="Happee Lifestyle"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Happee Lifestyle Box
                  </span>
                </div>

                {/* Packaging 4 */}
                <div className="bg-black/25 hover:bg-black/35 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between shrink-0 w-[70%] sm:w-auto snap-center h-full min-h-0 group">
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src="/assets/images/projects/printPackaging4.webp"
                      alt="Escarl Jewels"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-xs sm:text-sm text-white text-center mt-2 shrink-0 truncate px-1 w-full">
                    Escarl Luxury Box
                  </span>
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
