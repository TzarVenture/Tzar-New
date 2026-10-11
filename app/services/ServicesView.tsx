"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypewriterHeadline } from "@/legacy-src/components/ui/TypewriterHeadline";
import BorderGlow from "@/legacy-src/components/ui/BorderGlow";
import PersistentBackdrop from "@/legacy-src/components/home/tech/PersistentBackdrop";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import {
  Code2,
  Search,
  Palette,
  Megaphone,
  PenTool,
  Package,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  href: string;
  image: string;
  icon: React.ElementType;
  description: string;
  ctaText: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    href: "/website-development-services",
    image: "/assets/images/webdev.webp",
    icon: Code2,
    description:
      "Custom Next.js websites, e-commerce stores, and web apps built for fast loading and high conversion.",
    ctaText: "Explore Web Development",
  },
  {
    id: "seo-domination",
    title: "SEO Domination",
    href: "/search-engine-optimization-services",
    image: "/assets/images/seo_page.webp",
    icon: Search,
    description:
      "Technical audits, keyword ranking, and link building to get your business to the top of Google search results.",
    ctaText: "Explore SEO Domination",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    href: "/graphic-designing",
    image: "/assets/images/graphic_designing.webp",
    icon: Palette,
    description:
      "High-impact marketing collateral, banners, brochures, and digital creatives that elevate your brand presence.",
    ctaText: "Explore Graphic Design",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    href: "/social-media-marketing-services",
    image: "/assets/images/social_media_marketing.webp",
    icon: Megaphone,
    description:
      "Consistent content planning, short-form reels, and targeted paid campaigns that build an engaged following.",
    ctaText: "Explore Social Media",
  },
  {
    id: "logo-brand-identity",
    title: "Logo & Brand Identity",
    href: "/logo-design-services",
    image: "/assets/images/logo_designing.webp",
    icon: PenTool,
    description:
      "Distinctive, trademark-ready logos and complete brand guideline kits that make your business instantly recognizable.",
    ctaText: "Explore Brand Identity",
  },
  {
    id: "product-packaging",
    title: "Product Packaging",
    href: "/product-design-packaging-services",
    image: "/assets/images/product-packaging.webp",
    icon: Package,
    description:
      "Retail-ready box and label packaging with 3D mockups and print-ready dielines engineered to stand out on shelves.",
    ctaText: "Explore Product Packaging",
  },
];

export default function ServicesView() {
  return (
    <main className="relative min-h-screen text-white overflow-x-clip bg-transparent selection:bg-[#FFAE00] selection:text-[#061309]">
      {/* ── PERSISTENT SHADER BACKGROUND ── */}
      <PersistentBackdrop />

      {/* ── 01. CENTERED HERO SECTION (NO BREADCRUMB, NO BADGES, NO SPARKLES) ── */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-5 min-h-18 sm:min-h-28 lg:min-h-34 flex flex-col items-center justify-center">
          <span className="block">Services Engineered For</span>
          <span className="block text-[#FFAE00] mt-1 sm:mt-2">
            <TypewriterHeadline text="Real Growth" delay={250} />
          </span>
        </h1>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          From custom web development and search rankings to branding and packaging design, we build and run the digital assets that help ambitious companies grow.
        </p>
      </section>

      {/* ── 02. CORE 6 SERVICES GRID (BORDERGLOW GLASSMORPHIC CARDS) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <BorderGlow
                key={service.id}
                borderRadius={24}
                glowColor="45 100 50"
                glowIntensity={0.65}
                glowRadius={20}
                edgeSensitivity={25}
                coneSpread={30}
                backgroundColor="rgba(255, 255, 255, 0.03)"
                colors={['#FFAE00', '#10B981', '#34D399']}
                className="backdrop-blur-md transition-colors duration-300 group"
                contentClassName="p-5 sm:p-6 justify-between"
              >
                <div>
                  {/* Top Header: Service Icon in Yellow */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FFAE00]/10 border border-[#FFAE00]/20 flex items-center justify-center text-[#FFAE00] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Hero Image - Direct, without nested card wrapper */}
                  <div className="relative w-full aspect-16/10 mb-5 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      priority={index < 3}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">
                    {service.title}
                  </h2>

                  {/* Humanized Short Description */}
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#FFAE00] text-white hover:text-[#061309] border border-white/10 hover:border-[#FFAE00] font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </BorderGlow>
            );
          })}
        </div>
      </section>

      {/* ── 03. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
        variant="glass"
        title="Ready to Scale Your Brand with Tzar?"
        description="Whether you need a bespoke web platform, top-tier SEO rankings, or high-impact branding, our specialists are ready to execute."
        primaryText="Talk with Our Team"
        primaryHref="/contact"
        secondaryText="View Portfolio"
        secondaryHref="/portfolio"
      />
    </main>
  );
}
