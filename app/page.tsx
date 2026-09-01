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
import FlowingMenu from "@/legacy-src/components/home/tech/FlowingMenu";
import SeoArticle from "@/legacy-src/components/home/tech/SeoArticle";
import TechInsights from "@/legacy-src/components/home/tech/TechInsights";
import { TrafficGrowthSection } from "@/legacy-src/components/home/tech/TrafficGrowthSection";

const DOMAIN_ITEMS = [
  { link: '#', text: 'Automobiles', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Capital', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Consulting', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'E-Commerce', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Education', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Energy', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Hardware', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Healthcare', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Hospitality', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Industries', image: 'https://images.unsplash.com/photo-1530646194784-a11950aa577c?q=80&w=800&auto=format&fit=crop' }
];

const PHOTOSHOOT_ITEMS = [
  { image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop', label: 'Kashmiri Kahva', link: '#' },
  { image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop', label: 'Premium Perfume', link: '#' },
  { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop', label: 'Luxury Apparel', link: '#' },
  { image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop', label: 'Artisanal Candle', link: '#' },
  { image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop', label: 'Organic Honey', link: '#' }
];

export default function Home() {
  return (
    <main className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* 01 • NEXT.JS CONNECTED CENTRAL NODE HERO */}
      <TechHero />

      {/* 01.5 • CLIENT BRANDS INFINITE MARQUEE */}
      <ClientMarquee />

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

        <ScrollStack useWindowScroll={true} stackPosition="110px" itemDistance={60} itemStackDistance={28} baseScale={0.85}>
          {/* Card 01: Web Application Development */}
          <ScrollStackItem itemClassName="bg-white text-[#0E2015] border border-[#1D4224]/10">
            <div className="flex flex-col gap-6 w-full text-left">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-bold">01 • WEB APPLICATION DEVELOPMENT</span>
                <h3 className="font-montserrat font-black text-2xl md:text-3xl tracking-tight text-[#0E2015] mt-1 mb-2">High-Performance Next.js Web Apps</h3>
                <p className="font-inter text-sm md:text-base text-[#5C6860] max-w-2xl leading-relaxed">
                  We engineer lightning-fast custom web applications optimized for PageSpeed, technical SEO, and high-conversion client acquisition.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <img src="/hero-image-references/Screenshot 2026-08-27 132347.png" alt="CRM Web Portal View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132603.png" alt="SaaS Dashboard View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132630.png" alt="Mobile System Tracker View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132953.png" alt="Analytics Traffic View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 02: Mobile Application Development */}
          <ScrollStackItem itemClassName="bg-[#1D4224] text-white border border-white/5">
            <div className="flex flex-col gap-6 w-full text-left">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B6F8DD] font-bold">02 • MOBILE APPLICATION DEVELOPMENT</span>
                <h3 className="font-montserrat font-black text-2xl md:text-3xl tracking-tight text-white mt-1 mb-2">Native Mobile Engineering</h3>
                <p className="font-inter text-sm md:text-base text-[#B6F8DD]/80 max-w-2xl leading-relaxed">
                  High-ROI mobile applications built with React Native and Flutter, fully integrated with live tracking, IoT systems, and clean checkout portals.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <img src="/hero-image-references/Screenshot 2026-08-27 132630.png" alt="Mobile System Tracker View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132347.png" alt="CRM Web Portal View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132953.png" alt="Analytics Traffic View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132603.png" alt="SaaS Dashboard View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 03: Enterprise Business Software */}
          <ScrollStackItem itemClassName="bg-white text-[#0E2015] border border-[#1D4224]/10">
            <div className="flex flex-col gap-6 w-full text-left">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-bold">03 • ENTERPRISE BUSINESS SOFTWARE</span>
                <h3 className="font-montserrat font-black text-2xl md:text-3xl tracking-tight text-[#0E2015] mt-1 mb-2">Custom CRM &amp; Operations Trackers</h3>
                <p className="font-inter text-sm md:text-base text-[#5C6860] max-w-2xl leading-relaxed">
                  Ditch generic monthly subscriptions. We construct tailor-made CRMs, Kanban task managers, and lead routers modeled exactly around your team.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <img src="/hero-image-references/Screenshot 2026-08-27 132603.png" alt="SaaS Dashboard View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132953.png" alt="Analytics Traffic View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132347.png" alt="CRM Web Portal View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132630.png" alt="Mobile System Tracker View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 04: Digital Marketing & SEO */}
          <ScrollStackItem itemClassName="bg-[#1D4224] text-white border border-white/5">
            <div className="flex flex-col gap-6 w-full text-left">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B6F8DD] font-bold">04 • DIGITAL MARKETING &amp; SEO</span>
                <h3 className="font-montserrat font-black text-2xl md:text-3xl tracking-tight text-white mt-1 mb-2">Technical SEO &amp; Ad Spend ROAS</h3>
                <p className="font-inter text-sm md:text-base text-[#B6F8DD]/80 max-w-2xl leading-relaxed">
                  Secure Page 1 rankings on Google. We build custom landing pages and semantic schema wrappers to convert incoming search traffic into sales.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <img src="/hero-image-references/Screenshot 2026-08-27 132953.png" alt="Analytics Traffic View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132630.png" alt="Mobile System Tracker View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132603.png" alt="SaaS Dashboard View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132347.png" alt="CRM Web Portal View" className="rounded-xl border border-white/10 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 05: Product Designing & Packaging */}
          <ScrollStackItem itemClassName="bg-white text-[#0E2015] border border-[#1D4224]/10">
            <div className="flex flex-col gap-6 w-full text-left">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-bold">05 • PRODUCT DESIGNING &amp; PACKAGING</span>
                <h3 className="font-montserrat font-black text-2xl md:text-3xl tracking-tight text-[#0E2015] mt-1 mb-2">3D Packaging &amp; Print Dielines</h3>
                <p className="font-inter text-sm md:text-base text-[#5C6860] max-w-2xl leading-relaxed">
                  Scale your e-commerce and retail presence with custom 3D packaging mockups, print-ready vector dielines, and typography guides.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <img src="/hero-image-references/Screenshot 2026-08-27 132347.png" alt="CRM Web Portal View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132953.png" alt="Analytics Traffic View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132603.png" alt="SaaS Dashboard View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
                <img src="/hero-image-references/Screenshot 2026-08-27 132630.png" alt="Mobile System Tracker View" className="rounded-xl border border-neutral-200/50 shadow-sm w-full object-cover aspect-[4/3] hover:scale-[1.03] transition-transform duration-300" />
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        {/* 01.6 • COMPANY ACHIEVEMENTS INSIGHTS */}
        <TechInsights />

        {/* Domains We Have Worked For */}
        <div className="w-full pt-16 pb-8 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <span className="font-mono text-sm uppercase tracking-widest text-[#1D4224] font-black">
              OUR SECTOR EXPERTISE
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015] tracking-tight mt-2 leading-tight">
              Domains we have worked for
            </h2>
          </div>
          <div className="w-full px-4 sm:px-6 lg:px-0">
            <FlowingMenu items={DOMAIN_ITEMS} />
          </div>
        </div>

        {/* Brand Showcase Accordion Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 relative z-20">
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
            expandRatio={0.52}
            trigger="hover"
            accentColor="#FFAE00"
            overlayColor="#0E2015"
            textColor="#ffffff"
            grayscale={true}
            showLabels={true}
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>
      </section>

      {/* Traffic Growth Lead Generation Section */}
      <TrafficGrowthSection />

      {/* SEO Marketing Article */}
      <SeoArticle />
    </main>
  );
}
