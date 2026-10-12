"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  ArrowDown,
  PhoneCall,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";
import { TrafficGrowthSection } from "@/legacy-src/components/home/tech/TrafficGrowthSection";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";

interface FAQItem {
  id: number;
  category: "Web & E-Commerce" | "SEO & Growth" | "Social Media & Content" | "PPC & Performance" | "Partnership & Process";
  question: string;
  answer: string;
}

const CATEGORIES = [
  "All",
  "Web & E-Commerce",
  "SEO & Growth",
  "Social Media & Content",
  "PPC & Performance",
  "Partnership & Process",
] as const;

type CategoryType = (typeof CATEGORIES)[number];

const FAQS_DATA: FAQItem[] = [
  // ── WEB & E-COMMERCE (From tzar-old faqdevdata.js & faqPage.js) ──
  {
    id: 1,
    category: "Web & E-Commerce",
    question: "How long will it take to design and build my website or Shopify store?",
    answer:
      "A bespoke business website or custom Shopify store typically takes 3 to 5 weeks from initial discovery and wireframing to final deployment. Complex enterprise platforms or headless Next.js applications with third-party ERP, CRM, and inventory integrations generally require 4 to 8 weeks. Every project adheres to agile sprint milestones with transparent staging previews for your team at every stage.",
  },
  {
    id: 2,
    category: "Web & E-Commerce",
    question: "Do I need coding knowledge or technical skills to manage my Shopify store?",
    answer:
      "No, not at all. Shopify and our custom CMS architectures are engineered to be completely user-friendly for day-to-day operations. You can easily add or edit products, adjust pricing, manage orders, update banners, and publish blog articles without touching a single line of code. Following launch, our engineering team provides hands-on video walkthroughs and dedicated documentation to empower your team.",
  },
  {
    id: 3,
    category: "Web & E-Commerce",
    question: "Can I use and connect my own custom domain name?",
    answer:
      "Absolutely! In fact, using your own custom domain name is essential for establishing a trusted, recognizable brand identity. We configure and point your custom domain with full SSL security certificate provisioning, DNS record optimization, CDN acceleration, and email authentication routing (SPF, DKIM, and DMARC) across your DNS providers such as Cloudflare, GoDaddy, Namecheap, or AWS Route 53.",
  },
  {
    id: 4,
    category: "Web & E-Commerce",
    question: "Can you migrate my existing store to Shopify without data or SEO loss?",
    answer:
      "Yes. We specialize in zero-downtime platform migrations from WooCommerce, Magento, WordPress, and custom legacy architectures. We carefully map and preserve all customer records, order histories, product variations, and customer reviews while establishing comprehensive 301 URL redirect maps so your historical organic search equity and backlinks remain 100% intact.",
  },
  {
    id: 5,
    category: "Web & E-Commerce",
    question: "Can you help set up shipping rules, taxes, and payment gateways on Shopify?",
    answer:
      "Yes, we provide end-to-end checkout and store configuration. We work closely with you to establish regional and international shipping zones, real-time courier integrations (e.g., Shiprocket, Delhivery, Bluedart, DHL), automated GST and regional sales tax rules, and secure payment gateway integrations including Razorpay, Stripe, Cashfree, and PayPal.",
  },
  {
    id: 6,
    category: "Web & E-Commerce",
    question: "What kind of custom features and functionalities can you build into our store?",
    answer:
      "We build bespoke product customizers, bundle builders, subscription checkout workflows, wholesale B2B tiered pricing portals, interactive mega-menus, personalized size recommenders, multi-warehouse inventory syncs, and custom REST/GraphQL API middleware connecting your store directly with your ERP, warehouse, or accounting software.",
  },

  // ── SEO & GROWTH (From tzar-old faqPagedata.js) ──
  {
    id: 7,
    category: "SEO & Growth",
    question: "What is Search Engine Optimisation (SEO) and how does Tzar approach it?",
    answer:
      "Search Engine Optimisation (SEO) is the process of improving your website's visibility in organic search engine results so high-intent customers find you naturally. Our methodology combines technical site architecture (Core Web Vitals, semantic schema graphs, mobile responsiveness), in-depth commercial keyword research, editorial content creation, and authoritative brand link acquisition to secure compounding rankings without ongoing cost-per-click charges.",
  },
  {
    id: 8,
    category: "SEO & Growth",
    question: "What is the difference between SEO and SEM?",
    answer:
      "SEO focuses on long-term organic visibility by optimizing your website architecture, content authority, and search engine relevance over time. SEM (Search Engine Marketing) is a broader discipline combining organic optimization with paid search advertising (such as Google Ads). With SEO, traffic is earned organically without per-click media fees, while SEM delivers immediate top-of-page visibility through paid bidding.",
  },
  {
    id: 9,
    category: "SEO & Growth",
    question: "How long does it take to see measurable SEO results?",
    answer:
      "For targeted local and long-tail commercial queries, initial ranking improvements typically surface within 30 to 60 days. Highly competitive national and enterprise keywords generally yield compounding organic traffic, pipeline opportunities, and revenue within 90 to 180 days. We provide real-time dashboard tracking and monthly performance audits throughout the engagement.",
  },
  {
    id: 10,
    category: "SEO & Growth",
    question: "What is Content Marketing and why is it essential?",
    answer:
      "Content marketing is the strategic creation and distribution of valuable, educational, and engaging content (articles, case studies, technical whitepapers, infographics, and breakdown videos) designed to attract and convert a clearly defined audience. Rather than hard pitching, it establishes market authority and builds trust before sales conversations begin.",
  },

  // ── SOCIAL MEDIA & CONTENT (From tzar-old faqPagedata.js) ──
  {
    id: 11,
    category: "Social Media & Content",
    question: "What do you mean by Social Media Marketing (SMM)?",
    answer:
      "Social media marketing (SMM) utilizes major social platforms to build brand equity, nurture community engagement, and funnel qualified prospects into your acquisition pipeline. At Tzar, our social workflows integrate high-impact visual creative assets, high-retention video reels, conversion-focused copywriting, community moderation, and strategic influencer activations.",
  },
  {
    id: 12,
    category: "Social Media & Content",
    question: "What are the 6 primary types of social media marketing?",
    answer:
      "Social media marketing encompasses six vital ecosystems: 1) Social Networking (LinkedIn, Facebook for professional and community reach), 2) Media Sharing (Instagram, YouTube, TikTok for high-retention visual reels), 3) Microblogging (X/Twitter for real-time discourse and brand authority), 4) Bookmarking & Curation (Pinterest for intent-driven product shopping), 5) Social Communities (Reddit, Quora for peer validation and research), and 6) Interactive Broadcast & Messaging (WhatsApp, Telegram for direct customer retention). We calibrate the exact mix best suited to your demographic.",
  },

  // ── PPC & PERFORMANCE (From tzar-old faqPagedata.js) ──
  {
    id: 13,
    category: "PPC & Performance",
    question: "What is PPC (Pay-Per-Click) and how does it work?",
    answer:
      "PPC (Pay-Per-Click) is an advertising model where you only pay when an interested prospect clicks on your ad. Running on networks like Google Search, YouTube, Meta (Instagram & Facebook), and LinkedIn, PPC allows instant audience targeting based on exact search intent, demographic data, and user behaviors. We continually calibrate bid strategies, ad creative variations, and landing page funnels to maximize your Return on Ad Spend (ROAS).",
  },
  {
    id: 14,
    category: "PPC & Performance",
    question: "How do you ensure ad spend does not get wasted on low-quality traffic?",
    answer:
      "We safeguard your ad budget by deploying extensive negative keyword lists, server-side conversion tracking (Meta CAPI & Google Offline Conversions), strict audience exclusions, and multi-variant landing page split-testing. Our performance media buyers review placement data and search terms daily to reallocate budgets to highest-converting keywords and demographics.",
  },

  // ── PARTNERSHIP & PROCESS ──
  {
    id: 15,
    category: "Partnership & Process",
    question: "How does the onboarding and kickoff process work at Tzar?",
    answer:
      "Onboarding begins with a comprehensive discovery audit of your existing digital assets, tech stack, and commercial goals. Within 5 business days, we deliver an actionable operational roadmap with clear sprint deliverables, milestones, and designated direct communication channels (Slack/WhatsApp and weekly syncs) alongside your dedicated Project Lead.",
  },
  {
    id: 16,
    category: "Partnership & Process",
    question: "What reporting and analytics will our team receive?",
    answer:
      "You receive 24/7 access to an automated live dashboard tracking core business KPIs: organic keyword movement, qualified lead submissions, conversion rates, and ROAS. In addition, we deliver bi-weekly executive summaries and monthly strategic review calls.",
  },
];

export default function FaqsView() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleAccordion = useCallback((id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  // Filter FAQs based on active category
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      return activeCategory === "All" || faq.category === activeCategory;
    });
  }, [activeCategory]);

  // Split FAQs into two side-by-side columns to minimize vertical space
  const leftFaqs = useMemo(
    () => filteredFaqs.filter((_, idx) => idx % 2 === 0),
    [filteredFaqs]
  );
  const rightFaqs = useMemo(
    () => filteredFaqs.filter((_, idx) => idx % 2 === 1),
    [filteredFaqs]
  );

  const isAllOpen =
    filteredFaqs.length > 0 &&
    filteredFaqs.every((faq) => openIds.includes(faq.id));

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIds([]);
    } else {
      setOpenIds(filteredFaqs.map((faq) => faq.id));
    }
  };

  // Reusable FAQ Card with exact CTA card dark spruce background & styling
  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openIds.includes(faq.id);

    return (
      <div
        key={faq.id}
        className={`relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border transition-all duration-300 shadow-xl ${
          isOpen
            ? "border-[#FFAE00]/50 shadow-2xl shadow-[#061309]/30 ring-1 ring-[#FFAE00]/30"
            : "border-white/10 hover:border-white/25 hover:shadow-2xl"
        }`}
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
        }}
      >
        {/* Subtle 32px grid texture matching CTA card */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Accordion Trigger Header */}
          <button
            type="button"
            onClick={() => toggleAccordion(faq.id)}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${faq.id}`}
            className="w-full text-left p-4 sm:p-5 lg:p-6 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer group transition-colors"
          >
            <div className="flex items-start gap-2.5 sm:gap-4 flex-1 min-w-0">
              {/* "Q" Badge mirroring faqs-page.webp illustration */}
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 font-montserrat font-black text-xs transition-all duration-300 mt-0.5 ${
                  isOpen
                    ? "bg-[#FFAE00] text-[#061309] shadow-md shadow-[#FFAE00]/20"
                    : "bg-white/10 text-white border border-white/15 group-hover:bg-[#FFAE00] group-hover:text-[#061309]"
                }`}
              >
                Q
              </div>

              {/* Category Tag & Question */}
              <div className="space-y-1 flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#FFAE00] bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-2 py-0.5 rounded-md inline-block">
                  {faq.category}
                </span>
                <h3
                  id={`faq-question-${faq.id}`}
                  className="font-montserrat font-bold text-xs sm:text-sm lg:text-base text-white group-hover:text-[#FFAE00] transition-colors leading-snug wrap-break-word"
                >
                  {faq.question}
                </h3>
              </div>
            </div>

            {/* Rotating Chevron Icon Pill */}
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ml-1 ${
                isOpen
                  ? "bg-[#FFAE00] text-[#061309] rotate-180 shadow-md"
                  : "bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white"
              }`}
            >
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </button>

          {/* Smooth Hardware-Accelerated CSS Grid Height Transition Container */}
          <div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-question-${faq.id}`}
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
                {/* Answer Box with "A" Badge */}
                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/4 border border-white/10 flex items-start gap-2.5 sm:gap-4 backdrop-blur-xs">
                  {/* "A" Badge */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FFAE00] text-[#061309] flex items-center justify-center shrink-0 font-montserrat font-black text-[11px] sm:text-xs shadow-xs mt-0.5">
                    A
                  </div>

                  {/* Answer Text */}
                  <p className="font-sans text-xs sm:text-sm text-[#B6F8DD]/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen text-white bg-transparent overflow-x-clip">
      {/* ── FIXED PARALLAX BACKGROUND (ONLY FOR FAQ PAGE - PERSISTENT BEHIND SCROLLING SECTIONS) ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/faq-page-body-green.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* ── SVG CLIP PATH: SHAPES THE HERO BOTTOM ITSELF AS AN ORGANIC WAVE ── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-bottom-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.952 C 0.875,0.936 0.736,0.984 0.556,0.956 C 0.375,0.928 0.222,0.984 0,0.948 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── 01. EDITORIAL AGENCY HERO BANNER (HERO BOTTOM SHAPED AS WAVE, RESPONSIVE) ── */}
      <section
        className="relative z-10 w-full pt-24 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 lg:pb-20 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          clipPath: "url(#hero-bottom-wave)",
          WebkitClipPath: "url(#hero-bottom-wave)",
        }}
      >
        {/* Check Box Grid Texture into Hero Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Foreground Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-8 sm:pb-12 lg:pb-16">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 sm:mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">FAQS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Short Headline, Simple Description, Focus Pillars, Action Buttons */}
            <div className="space-y-4 sm:space-y-6 relative z-20">
              {/* Short Headline (No Badge, No Sparkle Icon) */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]">
                  Got Questions? We Have <span className="text-[#FFAE00]">Answers.</span>
                </h1>
              </div>

              {/* Reduced, Simple Description */}
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                Clear answers to common questions about our web platforms, SEO, and digital growth services.
              </p>

              {/* Focus Pillars */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Web & E-Com
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Shopify & Next.js
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Growth & SEO
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    SEO & High ROAS
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Transparency
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Weekly Sprints & KPIs
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                <a
                  href="#faqs-directory"
                  className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 text-xs sm:text-sm group font-sans cursor-pointer"
                >
                  <span>Browse Questions</span>
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-1" />
                </a>

                <a
                  href="#enquiry-form"
                  className="border border-white/25 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold transition-all text-xs sm:text-sm inline-flex items-center gap-2 font-sans cursor-pointer"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image (faqs-page.webp) */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/faqs-page.webp"
                  alt="Tzar Digital Agency FAQs and Knowledge Base"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-56 sm:max-h-72 lg:max-h-115 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delicate golden accent curve tracing the wave bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-10 lg:h-16 block pointer-events-none opacity-35"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40"
              stroke="#FFAE00"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* ── 02. CATEGORY TABS & FAQ ACCORDION (SCROLLS ON PARALLAX BG, FULLY RESPONSIVE) ── */}
      <section id="faqs-directory" className="py-8 sm:py-14 scroll-mt-20 relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs with Expand / Collapse Toggle (No Search Tab) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 sm:mb-10">
            {/* Category Filter Tabs - Swipable Edge-to-Edge on Mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 max-w-full scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === "All"
                    ? FAQS_DATA.length
                    : FAQS_DATA.filter((f) => f.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#FFAE00] text-[#061309] shadow-md shadow-[#FFAE00]/25 scale-[1.02]"
                        : "bg-black/40 hover:bg-black/60 text-white/85 hover:text-white border border-white/15 backdrop-blur-md shadow-xs"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                        isActive
                          ? "bg-[#061309] text-[#FFAE00] font-black"
                          : "bg-white/15 text-white/90"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Expand / Collapse All Toggle */}
            {filteredFaqs.length > 0 && (
              <button
                onClick={toggleAll}
                className="self-end sm:self-auto shrink-0 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#FFAE00] bg-black/40 hover:bg-black/60 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/15 backdrop-blur-md transition-colors cursor-pointer shadow-xs"
              >
                {isAllOpen ? (
                  <>
                    <Minus className="w-3.5 h-3.5" />
                    <span>Collapse All</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Expand All</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* ── FAQ GRID: SINGLE COLUMN ON MOBILE (ALL IN ORDER), 2 COLUMNS ON DESKTOP ── */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#061309] text-white rounded-2xl sm:rounded-3xl border border-white/10 p-8 sm:p-14 text-center space-y-4 shadow-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFAE00]/15 text-[#FFAE00] flex items-center justify-center mx-auto">
                <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white">
                No questions found in this category
              </h3>
              <p className="text-xs sm:text-sm text-[#B6F8DD]/80 max-w-md mx-auto leading-relaxed">
                Please select another category or scroll down to enquire directly with our engineering team.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold font-mono px-4 py-2 rounded-xl bg-[#FFAE00] text-[#061309] hover:bg-white transition-colors cursor-pointer"
              >
                Show All Questions ({FAQS_DATA.length})
              </button>
            </div>
          ) : (
            <>
              {/* Mobile View: Sequential list showing every single FAQ in order */}
              <div className="md:hidden space-y-3">
                {filteredFaqs.map(renderFaqCard)}
              </div>

              {/* Desktop & Tablet View: Balanced Two Columns side by side */}
              <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-5 items-start">
                <div className="space-y-4">
                  {leftFaqs.map(renderFaqCard)}
                </div>
                <div className="space-y-4">
                  {rightFaqs.map(renderFaqCard)}
                </div>
              </div>
            </>
          )}

          {/* ── 03. DIRECT HELPLINE CARD (SIMPLE, RESPONSIVE, NO BADGES) ── */}
          <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-[#061309]/95 border border-white/12 p-4 sm:p-6 lg:p-7 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFAE00]/15 text-[#FFAE00] border border-[#FFAE00]/25 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-0.5 min-w-0 flex-1">
                <h4 className="font-montserrat font-bold text-sm sm:text-base text-white">
                  Have a specific question about your project?
                </h4>
                <p className="text-xs sm:text-sm text-[#B6F8DD]/85 leading-relaxed">
                  Call{" "}
                  <a
                    href="tel:+917304056607"
                    className="font-bold text-[#FFAE00] hover:underline whitespace-nowrap"
                  >
                    +91 730-405-6607
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:corporate@tzar.co"
                    className="font-bold text-[#FFAE00] hover:underline whitespace-nowrap"
                  >
                    corporate@tzar.co
                  </a>
                </p>
              </div>
            </div>

            <a
              href="#enquiry-form"
              className="w-full sm:w-auto text-center justify-center bg-[#FFAE00] hover:bg-white text-[#061309] font-montserrat font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-200 shadow-md shrink-0 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Ask Us Directly</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 04. ENQUIRY FORM SECTION (NO GLOW BEHIND FORM) ── */}
      <section
        id="enquiry-form"
        className="relative z-10 text-white pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden scroll-mt-12 bg-transparent"
      >
        {/* Integrated Homepage Traffic Growth & Lead Form Section without aura glow */}
        <div className="relative z-10">
          <TrafficGrowthSection noBorder={true} />
        </div>
      </section>

      {/* ── 05. CONSISTENT REUSABLE CTA CARD (SCROLLS ON PARALLAX BG) ── */}
      <ConsistentCTA
        className="relative z-10"
        title="Still Have Questions About Scaling Your Brand?"
        description="Whether you need enterprise web engineering, high-ranking SEO, or full-funnel digital campaigns, our team is ready to scale your brand."
        primaryText="Request Custom Proposal"
        primaryHref="/contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </div>
  );
}
