"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Search,
  Palette,
  Megaphone,
  Star,
  Target,
  BarChart3,
  Package,
  FileText,
  Utensils,
  Gift,
  Globe,
  CheckCircle2,
  Layers,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "Engineering & Web" | "Search & Performance" | "Creative & Branding" | "Specialized Solutions";
  title: string;
  href: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  metric: string;
}

const CATEGORIES = [
  "All Verticals",
  "Engineering & Web",
  "Search & Performance",
  "Creative & Branding",
  "Specialized Solutions",
] as const;

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-development",
    category: "Engineering & Web",
    title: "Website Development",
    href: "/website-development-services",
    icon: Code2,
    description:
      "High-performance custom React & Next.js web applications, headless commerce systems, and bespoke platforms engineered for sub-1.2s page loads, conversion-focused UX, and 95+ Lighthouse scores.",
    deliverables: ["Next.js & React Architectures", "Custom Shopify Frontends", "Payment & ERP Integrations"],
    metric: "95+ Lighthouse Performance",
  },
  {
    id: "seo",
    category: "Search & Performance",
    title: "Search Engine Optimization",
    href: "/search-engine-optimization-services",
    icon: Search,
    description:
      "Comprehensive technical SEO audits, high-intent keyword positioning, Core Web Vitals remediation, and high-authority link acquisition strategies that capture top Google rankings and qualified organic revenue.",
    deliverables: ["Technical SEO & Architecture", "Local Google Map Pack Ranking", "Authoritative Digital PR Links"],
    metric: "+180% Organic Traffic Average",
  },
  {
    id: "graphic-designing",
    category: "Creative & Branding",
    title: "Graphic Designing",
    href: "/graphic-designing",
    icon: Palette,
    description:
      "Impactful brand identities, print design systems, high-converting digital advertising collateral, and bespoke UI/UX components crafted to elevate brand perception across all customer touchpoints.",
    deliverables: ["Visual Identity Systems", "Marketing & Ad Collaterals", "UI/UX Prototypes & Layouts"],
    metric: "3× Higher Engagement",
  },
  {
    id: "social-media",
    category: "Search & Performance",
    title: "Social Media Marketing",
    href: "/social-media-marketing-services",
    icon: Megaphone,
    description:
      "Strategy-first social growth and community management across Instagram, LinkedIn, Facebook, and YouTube. We craft viral short-form video reels, authoritative B2B copy, and high-conversion retargeting funnels.",
    deliverables: ["Viral Reel & Video Production", "LinkedIn B2B Leadership", "Paid Social Retargeting"],
    metric: "+250% Audience Reach",
  },
  {
    id: "logo-design",
    category: "Creative & Branding",
    title: "Logo Design & Identity",
    href: "/logo-design-services",
    icon: Star,
    description:
      "Timeless, scalable brand logos and complete visual guideline kits. From concept generation to print-ready vector delivery, we engineer identities that communicate credibility and market authority.",
    deliverables: ["Vector Master Files (AI, SVG)", "Brand Guidelines & Typeface", "Trademark-Ready Stationery"],
    metric: "500+ Brand Logos Crafted",
  },
  {
    id: "lead-generation",
    category: "Search & Performance",
    title: "Lead Generation Services",
    href: "/lead-generation-services",
    icon: Target,
    description:
      "Predictable, high-intent B2B and B2C lead pipelines. Combining conversion-optimized landing pages, multi-channel ad targeting, and automated CRM routing to deliver qualified sales appointments.",
    deliverables: ["High-Intent Ad Funnels", "Landing Page Split-Testing", "Automated CRM Integration"],
    metric: "+3x Lead Flow Velocity",
  },
  {
    id: "ppc",
    category: "Search & Performance",
    title: "Pay-Per-Click Advertising",
    href: "/pay-per-click-services",
    icon: BarChart3,
    description:
      "Data-driven Google Search, Display, Shopping, and Meta ad management. We sculpt negative keyword lists, test creative variants, and optimize bids daily to eliminate wasted budget and maximize ROAS.",
    deliverables: ["Google Search & Shopping Ads", "Meta & Instagram Campaigns", "Server-Side Pixel Tracking (CAPI)"],
    metric: "Zero Wasted Ad Spend",
  },
  {
    id: "product-packaging",
    category: "Creative & Branding",
    title: "Product Design & Packaging",
    href: "/product-design-packaging-services",
    icon: Package,
    description:
      "Retail-ready packaging, custom boxes, pouches, labels, and 3D mockups engineered to stand out on retail shelves and e-commerce marketplaces (Amazon, Flipkart) with full dieline specifications.",
    deliverables: ["3D Photorealistic Mockups", "Print-Ready Dieline Files", "Marketplace Compliance"],
    metric: "200+ Commercial SKUs",
  },
  {
    id: "content-marketing",
    category: "Search & Performance",
    title: "Content Marketing Services",
    href: "/content-marketing-services",
    icon: FileText,
    description:
      "Editorial thought leadership, high-ranking SEO blog articles, and conversion copywriting that educate prospects, accelerate buying decisions, and build durable organic search authority.",
    deliverables: ["In-Depth SEO Articles (2k–4k words)", "Technical Whitepapers & Case Studies", "Email Automation Sequences"],
    metric: "+120% Inbound Inquiries",
  },
  {
    id: "cloud-kitchen",
    category: "Specialized Solutions",
    title: "Cloud Kitchen Marketing",
    href: "/cloud-kitchen-marketing-services",
    icon: Utensils,
    description:
      "Specialized food delivery marketing designed to accelerate Swiggy and Zomato rankings, optimize menu click-through rates with photorealistic food styling shoots, and scale repeat direct orders.",
    deliverables: ["Swiggy & Zomato Algorithm Optimization", "Professional Food Photography", "Direct Order Funnels"],
    metric: "+90% Average Order Lift",
  },
  {
    id: "corporate-gifting",
    category: "Specialized Solutions",
    title: "Corporate Gifting Solutions",
    href: "/corporate-gifting",
    icon: Gift,
    description:
      "Premium customized corporate gift hampers, branded merchandise, and employee welcome kits. We oversee curation, luxury unboxing design, precision logo engraving, and pan-India fulfillment.",
    deliverables: ["Custom Luxury Packaging", "High-End Branded Tech & Swag", "Pan-India Secure Logistics"],
    metric: "10,000+ Units Fulfilled",
  },
  {
    id: "outdoor-ads",
    category: "Specialized Solutions",
    title: "Outdoor & Transit Advertising",
    href: "/outdoor-ads",
    icon: Globe,
    description:
      "High-impact out-of-home (OOH) media campaigns across Mumbai's prime arterial routes, local train and metro wrapping, bus transit shelters, and landmark LED hoardings for maximum physical brand presence.",
    deliverables: ["Prime Arterial Billboards", "Mumbai Local Train & Metro Wraps", "LED Digital Outdoor Displays"],
    metric: "50+ Prime Mumbai Placements",
  },
];

const TRUST_PILLARS = [
  {
    icon: Zap,
    title: "Engineered for Performance",
    description: "Modern tech stacks delivering sub-1.2s load speeds and friction-free conversion paths.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Delivery Milestones",
    description: "Predictable sprint schedules with staging previews and weekly transparent reviews.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Growth Metrics",
    description: "Every campaign is calibrated against real customer acquisition cost (CAC) and ROI.",
  },
  {
    icon: Layers,
    title: "Full-Stack Specialist Teams",
    description: "Dedicated developers, senior SEO tacticians, and visual designers under one roof.",
  },
];

export default function ServicesView() {
  const [activeCategory, setActiveCategory] = useState<string>("All Verticals");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All Verticals") return SERVICES_DATA;
    return SERVICES_DATA.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* ── 01. EDITORIAL HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#1D4224] text-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        {/* Background Image from Original Site */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/page-header-bgOur-Services.jpg')",
          }}
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4224]/90 via-[#1D4224]/95 to-[#0E2015]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR SERVICES</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFAE00]/15 border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FULL-SERVICE AGENCY CAPABILITIES</span>
            </div>

            <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Services Engineered For{" "}
              <span className="text-[#FFAE00]">Compounding Growth</span>
            </h1>

            <p className="font-sans text-sm sm:text-lg text-[#B6F8DD]/90 max-w-2xl leading-relaxed">
              We combine enterprise web engineering, high-ranking search dominance, precision performance media, and memorable brand identities to unlock measurable revenue.
            </p>
          </div>
        </div>

        {/* Subtle Bottom Border */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
      </section>

      {/* ── 02. CATEGORY FILTER NAVIGATION ── */}
      <section className="relative z-20 -mt-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-lg p-3 sm:p-4">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#1D4224] text-white shadow-sm"
                      : "bg-[#F5F2EB] text-[#5C6860] hover:bg-[#1D4224]/10 hover:text-[#1D4224]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. SERVICES CARDS GRID ── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-black">
              END-TO-END CAPABILITIES
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight mt-1">
              What We Deliver
            </h2>
            <p className="text-[#5C6860] text-xs sm:text-sm mt-1.5">
              Explore our core disciplines designed to scale your brand presence and drive real revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="bg-white rounded-2xl border border-[#1D4224]/10 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Row: Icon + Performance Metric */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1D4224]/5 text-[#1D4224] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#1D4224] group-hover:text-[#FFAE00] flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#1D4224] bg-[#FFAE00]/15 px-2.5 py-1 rounded-md">
                        {service.metric}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#0E2015] group-hover:text-[#1D4224] transition-colors mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5C6860] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Deliverable Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[10px] font-bold text-[#1D4224] bg-[#F5F2EB] border border-[#1D4224]/10 px-2 py-0.5 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-3 border-t border-[#1D4224]/5 flex items-center justify-between text-xs font-mono font-bold text-[#1D4224] group-hover:text-[#0E2015] transition-colors">
                    <span className="tracking-wider uppercase">Explore Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 04. WHY PARTNER WITH TZAR (TRUST BENCHMARK) ── */}
      <section className="py-10 sm:py-14 bg-[#FDFBF7] border-y border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-black">
              WHY TZAR VENTURE
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015] tracking-tight mt-1">
              Engineered For Excellence
            </h2>
            <p className="text-[#5C6860] text-xs sm:text-sm mt-1.5">
              Built on transparency, technical precision, and measurable return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-[#1D4224]/10 p-5 shadow-sm space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1D4224] text-[#FFAE00] flex items-center justify-center">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#0E2015]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#5C6860] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 05. CALL TO ACTION STRIP ── */}
      <section className="py-10 sm:py-16 bg-[#1D4224] text-white relative overflow-hidden">
        {/* Background Texture Pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/assets/images/resources/counter-one-pattern.png')",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#FFAE00]">
                ACCELERATE YOUR GROWTH
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Ready to Build Something Exceptional?
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                Schedule a consultation to discover how our engineering, search, and creative teams can scale your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-montserrat font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg inline-flex items-center gap-2 group"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="border border-white/20 text-white hover:bg-white/10 font-montserrat font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-200"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
