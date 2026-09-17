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
    image: '/assets/images/MobileShowcase/show1-3.jpg',
    label: 'Kashmiri Kahwa Tea',
    tag: 'Happy Brews • Artisanal Food Styling',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show4.jpg',
    label: 'Cherry Blossom Serum',
    tag: 'Ellixee • Botanical Daily Glow',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show1-2.jpg',
    label: 'Rose Cardamom Brew',
    tag: 'Happy Brews • Floral Infusion',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show2.jpg',
    label: 'Grapevine Face Wash',
    tag: 'Ellixee • Cryo Mist Studio',
    link: '#'
  },
  {
    image: '/assets/images/MobileShowcase/show1-1.jpg',
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

      {/* 01.6 • DYNAMIC SCROLLING CASE STUDY STACK */}
      <section className="bg-[#EFE8E0] pt-6 sm:pt-8 pb-2 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-1">
          <span className="font-mono text-sm sm:text-base uppercase tracking-widest text-[#1D4224] font-black">
            OUR CLIENT WORK & SYSTEM PROOF
          </span>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight mt-1.5 max-w-3xl mx-auto leading-tight">
            Systems Built for Peak Operational Performance
          </h2>
        </div>

        <ScrollStack useWindowScroll={true} stackPosition="64px" itemDistance={95} itemStackDistance={16} baseScale={0.92}>
          {/* Card 01: Web Application Development */}
          <ScrollStackItem itemClassName="bg-[#FDFBF7] text-[#0E2015] border border-[#1D4224]/10 shadow-xl">
            <div className="flex flex-col gap-3 lg:gap-4 w-full text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-[#1D4224]/10 pb-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-bold">01 • WEB APPLICATION DEVELOPMENT</span>
                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#0E2015] mt-0.5 mb-1">High-Performance Next.js Web Apps</h3>
                  <p className="font-inter text-xs sm:text-sm text-[#5C6860] max-w-2xl leading-snug">
                    We engineer lightning-fast custom web applications optimized for PageSpeed, technical SEO, and high-conversion client acquisition.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Next.js 14</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Sub-Second TTFB</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Edge SSR</span>
                </div>
              </div>

              {/* Desktop Showcase - Adshalaa Multi-Platform Hero & Ecosystem */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 items-stretch">
                <div className="md:col-span-7 bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-4 rounded-2xl border border-[#1D4224]/10 shadow-inner group flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-[#1D4224] font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Adshalaa Multi-Platform Ecosystem
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <img
                      src="/mockups/next-website/all-devices-black.png"
                      alt="Adshalaa Multi-Platform Web Ecosystem"
                      className="w-full h-56 lg:h-64 object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#1D4224]/10 text-[11px] font-mono text-[#5C6860]">
                    <span>Full-Stack EdTech Learning Architecture</span>
                    <span className="text-[#1D4224] font-semibold">Cross-Platform Sync</span>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col gap-3">
                  <div className="flex-1 bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 shadow-inner group hover:border-[#1D4224]/30 transition-colors flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#1D4224] font-semibold mb-1">
                      <span>Ambrior Infrastructure Platform</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-1">
                      <img
                        src="/mockups/Macbook-Air-ambrior.vercel.app.webp"
                        alt="Ambrior Web Application Macbook Mockup"
                        className="w-full h-24 lg:h-28 object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="text-[10px] font-mono text-[#5C6860] text-center">Custom ERP Dashboard &amp; Heavy Industry SLA</div>
                  </div>

                  <div className="flex-1 bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 shadow-inner group hover:border-[#1D4224]/30 transition-colors flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#1D4224] font-semibold mb-1">
                      <span>Leorix E-Commerce Storefront</span>
                      <span className="text-neutral-500">Shopify Custom</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-1">
                      <img
                        src="/mockups/Macbook-Air-beleorix.com-shopify.webp"
                        alt="Leorix Footwear Web Platform"
                        className="w-full h-24 lg:h-28 object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="text-[10px] font-mono text-[#5C6860] text-center">Custom Cart Drawer &amp; Instant Search Grid</div>
                  </div>
                </div>
              </div>

              {/* Mobile Showcase - Rich & Prominent */}
              <div className="md:hidden flex flex-col gap-3">
                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 shadow-sm text-center">
                  <div className="flex items-center justify-center font-mono text-[10px] text-[#1D4224] font-bold mb-1.5">
                    <span>Adshalaa Multi-Platform</span>
                  </div>
                  <img
                    src="/mockups/next-website/all-devices-black.png"
                    alt="Adshalaa Multi-Platform Web Suite"
                    className="w-full h-44 sm:h-52 object-contain drop-shadow-xl mx-auto"
                  />
                  <div className="font-mono text-[9px] text-[#5C6860] mt-1.5">Full Stack Next.js 14 Responsive Ecosystem</div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-2.5 rounded-xl border border-[#1D4224]/10 text-center flex flex-col justify-between">
                    <div className="font-mono text-[10px] text-[#1D4224] font-bold mb-1">Ambrior ERP</div>
                    <img src="/mockups/Macbook-Air-ambrior.vercel.app.webp" alt="Ambrior ERP" className="w-full h-16 sm:h-20 object-contain mx-auto my-1" />
                    <div className="font-mono text-[8px] text-[#5C6860]">Infrastructure Portal</div>
                  </div>
                  <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-2.5 rounded-xl border border-[#1D4224]/10 text-center flex flex-col justify-between">
                    <div className="font-mono text-[10px] text-[#1D4224] font-bold mb-1">Leorix Store</div>
                    <img src="/mockups/Macbook-Air-beleorix.com-shopify.webp" alt="Leorix Footwear" className="w-full h-16 sm:h-20 object-contain mx-auto my-1" />
                    <div className="font-mono text-[8px] text-[#5C6860]">Custom Shopify</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 02: Mobile Application Development */}
          <ScrollStackItem itemClassName="bg-[#1D4224] text-white border border-white/10 shadow-xl">
            <div className="flex flex-col gap-3 lg:gap-4 w-full text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B6F8DD] font-bold">02 • MOBILE APPLICATION DEVELOPMENT</span>
                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mt-0.5 mb-1">Native Mobile Engineering</h3>
                  <p className="font-inter text-xs sm:text-sm text-[#B6F8DD]/80 max-w-2xl leading-snug">
                    High-ROI mobile applications built with React Native and Flutter, fully integrated with live tracking, IoT systems, and clean checkout portals.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-[11px] font-semibold text-[#B6F8DD]">React Native &amp; Flutter</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-[11px] font-semibold text-[#B6F8DD]">Offline-First Sync</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-[11px] font-semibold text-[#B6F8DD]">Live Sockets</span>
                </div>
              </div>

              {/* Desktop Showcase - 4 Tall Hero iPhone 14 Pro Max devices */}
              <div className="hidden md:grid md:grid-cols-4 gap-3 lg:gap-4 items-stretch justify-center pt-1">
                <div className="bg-white/5 hover:bg-white/10 p-2.5 lg:p-3 rounded-2xl border border-white/10 text-center group hover:border-[#B6F8DD]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center py-1">
                    <img
                      src="/mockups/iPhone-14-PRO-MAX-kaammilega.com.webp"
                      alt="Kaam Milega Mobile App"
                      className="w-full h-48 lg:h-54 object-contain drop-shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="font-mono text-xs lg:text-sm text-white font-bold">Kaam Milega</div>
                    <div className="font-inter text-[10px] text-[#B6F8DD]/80 mt-0.5">Recruitment Engine • iOS &amp; Android</div>
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-2.5 lg:p-3 rounded-2xl border border-white/10 text-center group hover:border-[#B6F8DD]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center py-1">
                    <img
                      src="/mockups/iPhone-14-PRO-MAX-beleorix.com-shopify.webp"
                      alt="Leorix Mobile Commerce"
                      className="w-full h-48 lg:h-54 object-contain drop-shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="font-mono text-xs lg:text-sm text-white font-bold">Leorix Commerce</div>
                    <div className="font-inter text-[10px] text-[#B6F8DD]/80 mt-0.5">D2C Mobile Store • Fast Checkout</div>
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-2.5 lg:p-3 rounded-2xl border border-white/10 text-center group hover:border-[#B6F8DD]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center py-1">
                    <img
                      src="/mockups/iPhone-14-PRO-MAX-ambrior.vercel.app.webp"
                      alt="Ambrior Field Tracking"
                      className="w-full h-48 lg:h-54 object-contain drop-shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="font-mono text-xs lg:text-sm text-white font-bold">Ambrior Ops</div>
                    <div className="font-inter text-[10px] text-[#B6F8DD]/80 mt-0.5">Civil Field Tracking • Offline Sync</div>
                  </div>
                </div>

                <div className="bg-white/5 hover:bg-white/10 p-2.5 lg:p-3 rounded-2xl border border-white/10 text-center group hover:border-[#B6F8DD]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center py-1">
                    <img
                      src="/mockups/next-website/iPhone-14-PRO-MAX-clicks4coupon.xyz.png"
                      alt="ClicksTracker Mobile"
                      className="w-full h-48 lg:h-54 object-contain drop-shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="font-mono text-xs lg:text-sm text-white font-bold">ClicksTracker</div>
                    <div className="font-inter text-[10px] text-[#B6F8DD]/80 mt-0.5">Live Ad Spend • Socket Analytics</div>
                  </div>
                </div>
              </div>

              {/* Mobile Showcase - Luxurious Full-Card Carousel */}
              <div className="md:hidden flex flex-col gap-2">
                <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory py-1">
                  <div className="snap-center shrink-0 w-[68%] bg-white/5 p-3 rounded-2xl border border-white/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/mockups/iPhone-14-PRO-MAX-kaammilega.com.webp" alt="Kaam Milega" className="w-full h-52 sm:h-60 object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-white font-bold">Kaam Milega</div>
                      <div className="font-mono text-[9px] text-[#B6F8DD]/70">Recruitment Platform • iOS &amp; Android</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[68%] bg-white/5 p-3 rounded-2xl border border-white/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/mockups/iPhone-14-PRO-MAX-beleorix.com-shopify.webp" alt="Leorix Commerce" className="w-full h-52 sm:h-60 object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-white font-bold">Leorix Commerce</div>
                      <div className="font-mono text-[9px] text-[#B6F8DD]/70">D2C Mobile Store • Flutter</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[68%] bg-white/5 p-3 rounded-2xl border border-white/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/mockups/iPhone-14-PRO-MAX-ambrior.vercel.app.webp" alt="Ambrior Mobile" className="w-full h-52 sm:h-60 object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-white font-bold">Ambrior Mobile</div>
                      <div className="font-mono text-[9px] text-[#B6F8DD]/70">Field Ops Tracker • Offline Sync</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[68%] bg-white/5 p-3 rounded-2xl border border-white/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/mockups/next-website/iPhone-14-PRO-MAX-clicks4coupon.xyz.png" alt="ClicksTracker" className="w-full h-52 sm:h-60 object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-white font-bold">ClicksTracker</div>
                      <div className="font-mono text-[9px] text-[#B6F8DD]/70">Ad Spend Routing • Live Sockets</div>
                    </div>
                  </div>
                </div>
                <div className="text-center font-mono text-[9px] text-[#B6F8DD]/60">Swipe to explore 4 native mobile apps</div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 03: Enterprise Business Software */}
          <ScrollStackItem itemClassName="bg-[#FDFBF7] text-[#0E2015] border border-[#1D4224]/10 shadow-xl">
            <div className="flex flex-col gap-3 lg:gap-4 w-full text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-[#1D4224]/10 pb-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-bold">03 • ENTERPRISE BUSINESS SOFTWARE</span>
                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#0E2015] mt-0.5 mb-1">Custom CRM &amp; Operations Trackers</h3>
                  <p className="font-inter text-xs sm:text-sm text-[#5C6860] max-w-2xl leading-snug">
                    Ditch generic monthly subscriptions. We construct tailor-made CRMs, Kanban task managers, and lead routers modeled exactly around your team.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Multi-Tenant SaaS</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Automated Lead Dispatch</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Revenue BI</span>
                </div>
              </div>

              {/* Desktop Showcase - Dual Enterprise CRM Systems */}
              <div className="hidden md:grid md:grid-cols-2 gap-4 mt-1">
                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-4 rounded-2xl border border-[#1D4224]/10 shadow-inner group hover:border-[#1D4224]/30 transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between font-mono text-xs text-[#1D4224] font-bold mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Tzar CRM Enterprise Suite
                    </span>
                  </div>
                  <div className="relative my-2">
                    <img
                      src="/mockups/Macbook-Air-tzar-crm.vercel.app.webp"
                      alt="Tzar CRM Macbook"
                      className="w-full h-44 lg:h-52 object-contain drop-shadow-xl group-hover:scale-[1.01] transition-transform"
                    />
                    <img
                      src="/mockups/iPad-PRO-11-tzar-crm.vercel.app.webp"
                      alt="Tzar CRM iPad Pro"
                      className="absolute -bottom-2 -right-1 w-24 lg:w-28 object-contain drop-shadow-2xl rounded-lg"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10 flex items-center justify-between text-[11px] font-mono text-[#5C6860]">
                    <span>Lead Pipeline &amp; Won Deals Forecasting</span>
                    <span className="text-[#1D4224] font-semibold">Real-Time BI</span>
                  </div>
                </div>

                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-4 rounded-2xl border border-[#1D4224]/10 shadow-inner group hover:border-[#1D4224]/30 transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between font-mono text-xs text-[#1D4224] font-bold mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      AY Astute Group CRM
                    </span>
                  </div>
                  <div className="relative my-2">
                    <img
                      src="/mockups/Macbook-Air-ay-astute-group-crm.vercel.app (1).webp"
                      alt="AY Astute CRM Macbook"
                      className="w-full h-44 lg:h-52 object-contain drop-shadow-xl group-hover:scale-[1.01] transition-transform"
                    />
                    <img
                      src="/mockups/iPad-PRO-11-ay-astute-group-crm.vercel.app.webp"
                      alt="AY Astute CRM iPad Pro"
                      className="absolute -bottom-2 -right-1 w-24 lg:w-28 object-contain drop-shadow-2xl rounded-lg"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10 flex items-center justify-between text-[11px] font-mono text-[#5C6860]">
                    <span>FTA Corporate Tax Retainers &amp; Audit Logs</span>
                    <span className="text-[#1D4224] font-semibold">UAE Compliance</span>
                  </div>
                </div>
              </div>

              {/* Mobile Showcase - Rich Dual Card */}
              <div className="md:hidden flex flex-col gap-3">
                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center relative">
                  <div className="flex items-center justify-center font-mono text-[10px] text-[#1D4224] font-bold mb-1.5">
                    <span>Tzar CRM Suite</span>
                  </div>
                  <div className="relative">
                    <img src="/mockups/Macbook-Air-tzar-crm.vercel.app.webp" alt="Tzar CRM" className="w-full h-32 sm:h-36 object-contain mx-auto" />
                    <img src="/mockups/iPad-PRO-11-tzar-crm.vercel.app.webp" alt="Tzar CRM iPad" className="absolute -bottom-1 right-2 w-16 object-contain drop-shadow-lg" />
                  </div>
                  <div className="font-mono text-[9px] text-[#5C6860] mt-1.5">Lead Pipeline &amp; Won Deals Tracker</div>
                </div>
                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center relative">
                  <div className="flex items-center justify-center font-mono text-[10px] text-[#1D4224] font-bold mb-1.5">
                    <span>AY Astute Group CRM</span>
                  </div>
                  <div className="relative">
                    <img src="/mockups/Macbook-Air-ay-astute-group-crm.vercel.app (1).webp" alt="AY Astute CRM" className="w-full h-32 sm:h-36 object-contain mx-auto" />
                    <img src="/mockups/iPad-PRO-11-ay-astute-group-crm.vercel.app.webp" alt="AY Astute CRM iPad" className="absolute -bottom-1 right-2 w-16 object-contain drop-shadow-lg" />
                  </div>
                  <div className="font-mono text-[9px] text-[#5C6860] mt-1.5">Corporate Tax Retainers &amp; Audit Logs</div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 04: Digital Marketing & SEO */}
          <ScrollStackItem itemClassName="bg-[#1D4224] text-white border border-white/10 shadow-xl">
            <div className="flex flex-col gap-3 lg:gap-4 w-full text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B6F8DD] font-bold">04 • DIGITAL MARKETING &amp; SEO</span>
                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mt-0.5 mb-1">Technical SEO &amp; Ad Spend ROAS</h3>
                  <p className="font-inter text-xs sm:text-sm text-[#B6F8DD]/80 max-w-2xl leading-snug">
                    Secure Page 1 rankings on Google. We build custom landing pages and semantic schema wrappers to convert incoming search traffic into sales.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-[11px] font-semibold text-[#B6F8DD]">Google Page 1 Indexing</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-[11px] font-semibold text-[#B6F8DD]">Attribution Engine</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-[11px] font-semibold text-[#B6F8DD]">ROAS Funnels</span>
                </div>
              </div>

              {/* Desktop Showcase - Video Walkthrough & Traffic Engine */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 items-stretch">
                <div className="md:col-span-7 bg-white/5 p-4 rounded-2xl border border-white/10 relative overflow-hidden group flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-[#B6F8DD] font-bold mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Store E-Commerce Walkthrough
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center py-1">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster="/mockups/Macbook-Air-beleorix.com-shopify.webp"
                      className="w-full h-56 lg:h-64 object-contain drop-shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                    >
                      <source src="/mockups/Macbook-Air-beleorix.com-1o-n_uq5l3zs3r.webm" type="video/webm" />
                    </video>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-[#B6F8DD]/80">
                    <span>High-Velocity D2C Funnel &amp; Checkout Optimization</span>
                    <span className="text-white font-semibold">+340% ROAS Lift</span>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col gap-3 justify-between">
                  <div className="flex-1 bg-white/5 hover:bg-white/10 p-3.5 rounded-2xl border border-white/10 group transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#B6F8DD] font-semibold mb-1">
                      <span>ClicksTracker Analytics Engine</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-1">
                      <img
                        src="/mockups/next-website/Macbook-Air-clicks4coupon.xyz.png"
                        alt="ClicksTracker Traffic Engine"
                        className="w-full h-24 lg:h-28 object-contain drop-shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="pt-1.5 border-t border-white/10 text-[10px] font-mono text-[#B6F8DD]/70 text-center">
                      Real-Time Ad Fraud Filter &amp; Multi-Touch Conversion Attribution
                    </div>
                  </div>

                  <div className="flex-1 bg-white/5 hover:bg-white/10 p-3.5 rounded-2xl border border-white/10 group transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#B6F8DD] font-semibold mb-1">
                      <span>Multi-Channel Conversion Portal</span>
                      <span className="text-white/70">Search &amp; Paid Traffic</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-1">
                      <img
                        src="/mockups/next-website/all-devices-black.png"
                        alt="Multi-Channel Portal"
                        className="w-full h-24 lg:h-28 object-contain drop-shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="pt-1.5 border-t border-white/10 text-[10px] font-mono text-[#B6F8DD]/70 text-center">
                      Google Page 1 Schema, Meta CAPI &amp; Omnichannel Lead Routing
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Showcase - Rich & Visually Attractive */}
              <div className="md:hidden flex flex-col gap-3">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shadow-sm text-center">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#B6F8DD] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Store Walkthrough
                    </span>
                  </div>
                  <div className="relative py-1">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster="/mockups/Macbook-Air-beleorix.com-shopify.webp"
                      className="w-full h-44 sm:h-52 object-contain drop-shadow-xl mx-auto"
                    >
                      <source src="/mockups/Macbook-Air-beleorix.com-1o-n_uq5l3zs3r.webm" type="video/webm" />
                    </video>
                  </div>
                  <div className="flex items-center justify-between pt-1.5 border-t border-white/10 font-mono text-[9px] text-[#B6F8DD]/90">
                    <span>Shopify Custom Architecture</span>
                    <span className="text-white font-semibold">+340% ROAS</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center flex flex-col justify-between shadow-md">
                    <div className="font-mono text-[10px] text-[#B6F8DD] font-bold">ClicksTracker</div>
                    <img src="/mockups/next-website/Macbook-Air-clicks4coupon.xyz.png" alt="ClicksTracker" className="w-full h-16 sm:h-20 object-contain mx-auto my-1 drop-shadow-md" />
                    <div className="font-mono text-[8px] text-white/70">Ad Attribution</div>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center flex flex-col justify-between shadow-md">
                    <div className="font-mono text-[10px] text-[#B6F8DD] font-bold">Multi-Channel</div>
                    <img src="/mockups/next-website/all-devices-black.png" alt="Multi-Channel" className="w-full h-16 sm:h-20 object-contain mx-auto my-1 drop-shadow-md" />
                    <div className="font-mono text-[8px] text-white/70">Paid Traffic</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 05: Product Designing & Packaging */}
          <ScrollStackItem itemClassName="bg-[#FDFBF7] text-[#0E2015] border border-[#1D4224]/10 shadow-xl">
            <div className="flex flex-col gap-3 lg:gap-4 w-full text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-[#1D4224]/10 pb-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-bold">05 • PRODUCT DESIGNING &amp; PACKAGING</span>
                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#0E2015] mt-0.5 mb-1">3D Packaging &amp; Print Dielines</h3>
                  <p className="font-inter text-xs sm:text-sm text-[#5C6860] max-w-2xl leading-snug">
                    Scale your e-commerce and retail presence with custom 3D packaging mockups, print-ready vector dielines, and typography guides.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">3D CAD &amp; Photoreal Renders</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Vector Dielines</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1D4224]/5 border border-[#1D4224]/15 font-mono text-[11px] font-semibold text-[#1D4224]">Shelf Impact</span>
                </div>
              </div>

              {/* Desktop Showcase - 5 Luxury Packaging Pedestals */}
              <div className="hidden md:grid md:grid-cols-5 gap-3 lg:gap-3.5 mt-1">
                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center group hover:border-[#1D4224]/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-xl bg-neutral-900/5 p-2 flex items-center justify-center my-1">
                    <img
                      src="/assets/images/projects/printPackaging1.png"
                      alt="Happy Brews Tea Canister Packaging"
                      className="w-full aspect-square h-36 lg:h-44 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10">
                    <div className="font-mono text-xs lg:text-sm text-[#0E2015] font-bold">Happy Brews</div>
                    <div className="font-inter text-[10px] text-[#5C6860] mt-0.5">Luxury Tea Canister</div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center group hover:border-[#1D4224]/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-xl bg-neutral-900/5 p-2 flex items-center justify-center my-1">
                    <img
                      src="/assets/images/projects/printPackaging2.png"
                      alt="Skin Easi Dermatological Packaging"
                      className="w-full aspect-square h-36 lg:h-44 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10">
                    <div className="font-mono text-xs lg:text-sm text-[#0E2015] font-bold">Skin Easi</div>
                    <div className="font-inter text-[10px] text-[#5C6860] mt-0.5">Dieline Box &amp; Tube</div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center group hover:border-[#1D4224]/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-xl bg-neutral-900/5 p-2 flex items-center justify-center my-1">
                    <img
                      src="/assets/images/projects/printPackaging3.png"
                      alt="Happee Lifestyle Box"
                      className="w-full aspect-square h-36 lg:h-44 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10">
                    <div className="font-mono text-xs lg:text-sm text-[#0E2015] font-bold">Happee Lifestyle</div>
                    <div className="font-inter text-[10px] text-[#5C6860] mt-0.5">Active Lifestyle Box</div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center group hover:border-[#1D4224]/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-xl bg-neutral-900/5 p-2 flex items-center justify-center my-1">
                    <img
                      src="/assets/images/projects/printPackaging4.png"
                      alt="Escarl Jewels Luxury Velvet Box"
                      className="w-full aspect-square h-36 lg:h-44 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10">
                    <div className="font-mono text-xs lg:text-sm text-[#0E2015] font-bold">Escarl Jewels</div>
                    <div className="font-inter text-[10px] text-[#5C6860] mt-0.5">Velvet Luxury Casket</div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/10 text-center group hover:border-[#1D4224]/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-xl bg-neutral-900/5 p-2 flex items-center justify-center my-1">
                    <img
                      src="/assets/images/projects/printPackaging5.png"
                      alt="Velvex Lubricants 3D Canister"
                      className="w-full aspect-square h-36 lg:h-44 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-2 border-t border-[#1D4224]/10">
                    <div className="font-mono text-xs lg:text-sm text-[#0E2015] font-bold">Velvex Lubricants</div>
                    <div className="font-inter text-[10px] text-[#5C6860] mt-0.5">3D Canister &amp; Label</div>
                  </div>
                </div>
              </div>

              {/* Mobile Showcase - Full Gallery Snap Carousel */}
              <div className="md:hidden flex flex-col gap-2">
                <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory py-1">
                  <div className="snap-center shrink-0 w-[65%] bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/assets/images/projects/printPackaging1.png" alt="Happy Brews" className="w-full h-44 sm:h-52 aspect-square object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-[#0E2015] font-bold">Happy Brews</div>
                      <div className="font-mono text-[9px] text-[#5C6860]">Luxury Tea Canister Dieline</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[65%] bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/assets/images/projects/printPackaging2.png" alt="Skin Easi" className="w-full h-44 sm:h-52 aspect-square object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-[#0E2015] font-bold">Skin Easi</div>
                      <div className="font-mono text-[9px] text-[#5C6860]">Dermatology Box &amp; Tube</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[65%] bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/assets/images/projects/printPackaging3.png" alt="Happee" className="w-full h-44 sm:h-52 aspect-square object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-[#0E2015] font-bold">Happee Lifestyle</div>
                      <div className="font-mono text-[9px] text-[#5C6860]">Active Retail Box Design</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[65%] bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/assets/images/projects/printPackaging4.png" alt="Escarl" className="w-full h-44 sm:h-52 aspect-square object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-[#0E2015] font-bold">Escarl Jewels</div>
                      <div className="font-mono text-[9px] text-[#5C6860]">Luxury Velvet Casket</div>
                    </div>
                  </div>
                  <div className="snap-center shrink-0 w-[65%] bg-linear-to-br from-[#F5F3EF] to-[#ECE6DC] p-3 rounded-2xl border border-[#1D4224]/15 text-center flex flex-col justify-between shadow-lg">
                    <img src="/assets/images/projects/printPackaging5.png" alt="Velvex" className="w-full h-44 sm:h-52 aspect-square object-contain mx-auto my-1 drop-shadow-xl" />
                    <div>
                      <div className="font-mono text-xs text-[#0E2015] font-bold">Velvex Lubricants</div>
                      <div className="font-mono text-[9px] text-[#5C6860]">3D Industrial Canister</div>
                    </div>
                  </div>
                </div>
                <div className="text-center font-mono text-[9px] text-[#5C6860]/80">Swipe to explore 5 custom packaging dielies</div>
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
