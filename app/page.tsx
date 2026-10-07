import React from "react";
import { TechHero } from "@/legacy-src/components/home/tech/TechHero";
import { ClientMarquee } from "@/legacy-src/components/home/tech/ClientMarquee";
import ScrollStack, { ScrollStackItem } from "@/legacy-src/components/home/tech/ScrollStack";
import { WebDevSpotlightCard } from "@/legacy-src/components/home/tech/WebDevSpotlightCard";
import { MobileDevSpotlightCard } from "@/legacy-src/components/home/tech/MobileDevSpotlightCard";
import { EnterpriseSpotlightCard } from "@/legacy-src/components/home/tech/EnterpriseSpotlightCard";
import { MarketingSpotlightCard } from "@/legacy-src/components/home/tech/MarketingSpotlightCard";
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

          <ScrollStackItem itemClassName="!p-0 bg-white border border-[#1D4224]/15 shadow-2xl overflow-hidden">
            <MobileDevSpotlightCard />
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!p-0 bg-white border border-[#B8860B]/15 shadow-2xl overflow-hidden">
            <EnterpriseSpotlightCard />
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!p-0 bg-white border border-[#10B981]/20 shadow-2xl overflow-hidden">
            <MarketingSpotlightCard />
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
