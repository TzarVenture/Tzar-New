"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  ChevronDown,
  Search,
  ArrowRight,
  PhoneCall,
  Mail,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const CATEGORIES = [
  "All",
  "SEO & Growth",
  "Web & E-Commerce",
  "Social Media & Content",
  "PPC & Ads",
  "Partnership",
];

const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    category: "SEO & Growth",
    question: "What is Search Engine Optimisation (SEO)?",
    answer:
      "Search Engine Optimisation (SEO) is the process of improving the visibility of a website in organic search engine results, so it can be found by potential customers more easily. A comprehensive strategy combines in-depth keyword research, technical on-page optimisation, high-authority backlink acquisition, and regular content production to ensure you connect with high-intent buyers.",
  },
  {
    id: 2,
    category: "SEO & Growth",
    question: "What is the difference between SEO and SEM?",
    answer:
      "SEO focuses on organic, non-paid visibility by optimizing your website architecture, content, and search authority over time. SEM (Search Engine Marketing) is a broader discipline that combines organic optimization with paid search advertising (such as Google Ads). With SEO, traffic is earned organically without per-click costs, while SEM immediately positions your business at the top of search result pages through paid bidding.",
  },
  {
    id: 3,
    category: "SEO & Growth",
    question: "How long does it take to see measurable SEO results?",
    answer:
      "For targeted long-tail and local geographic queries, initial ranking improvements typically surface within 30 to 60 days. Highly competitive national and enterprise keywords generally yield compounding organic traffic and revenue within 90 to 180 days. We provide real-time dashboard tracking and monthly performance audits throughout the campaign.",
  },
  {
    id: 4,
    category: "Web & E-Commerce",
    question: "How long will it take to design and build my website or Shopify store?",
    answer:
      "A bespoke business or corporate web platform typically takes 3 to 5 weeks from discovery to final deployment. Enterprise applications or complex custom Shopify stores with third-party ERP/CRM integrations generally take 4 to 8 weeks. Every project adheres to strict sprint milestones with interactive staging previews for your team.",
  },
  {
    id: 5,
    category: "Web & E-Commerce",
    question: "Do I need coding knowledge or technical skills to manage my website?",
    answer:
      "No. All platforms we engineer come with user-friendly administrative dashboards (such as Shopify Admin or headless CMS portals) that make updating products, banners, blogs, and inquiries straightforward without touching any code. We also provide hands-on video walkthroughs and dedicated documentation during handover.",
  },
  {
    id: 6,
    category: "Web & E-Commerce",
    question: "Can you migrate an existing store or website to Shopify or Next.js?",
    answer:
      "Yes. We specialize in zero-downtime platform migrations from WooCommerce, Magento, WordPress, and custom legacy stacks. We carefully map and preserve all customer records, order histories, product catalogs, and 301 SEO redirects so your historical search equity and revenue streams remain intact.",
  },
  {
    id: 7,
    category: "Web & E-Commerce",
    question: "Can I connect my own existing domain name?",
    answer:
      "Absolutely. We configure and point your custom domain with full SSL certificate provisioning, DNS record optimization, CDN acceleration, and email routing verification (SPF, DKIM, DMARC) across your DNS providers (such as Cloudflare, GoDaddy, or AWS Route 53).",
  },
  {
    id: 8,
    category: "Social Media & Content",
    question: "What do you mean by social media marketing?",
    answer:
      "Social media marketing (SMM) utilizes major social platforms to build brand equity, foster community engagement, and drive qualified traffic into your acquisition funnels. It integrates visual creative assets, high-retention video reels, copywriting, community management, and targeted influencer activations.",
  },
  {
    id: 9,
    category: "Social Media & Content",
    question: "What are the 6 primary types of social media marketing?",
    answer:
      "Social media marketing spans six essential ecosystems: social networking (LinkedIn, Facebook), image & video sharing (Instagram, YouTube, TikTok), microblogging (X/Twitter), bookmarking & curation (Pinterest), social news & discussion communities (Reddit, Quora), and interactive broadcast channels. We select and calibrate the exact mix best suited to your target demographic.",
  },
  {
    id: 10,
    category: "Social Media & Content",
    question: "What is Content Marketing and why is it essential?",
    answer:
      "Content marketing is the strategic creation and distribution of valuable, educational, and engaging content (articles, case studies, whitepapers, video breakdowns) designed to attract and convert a clearly defined audience. Rather than pitching products directly, it establishes market authority and builds trust before sales conversations begin.",
  },
  {
    id: 11,
    category: "PPC & Ads",
    question: "What is PPC and how does it work?",
    answer:
      "PPC (Pay-Per-Click) is an advertising model where you only pay when an interested prospect clicks on your ad. Running on networks like Google Search, YouTube, Meta, and LinkedIn, PPC allows instant audience targeting based on exact search queries, demographics, and buyer intent. We continually optimize bids, copy, and landing pages to minimize Customer Acquisition Cost (CAC).",
  },
  {
    id: 12,
    category: "PPC & Ads",
    question: "How do you ensure ad spend does not get wasted?",
    answer:
      "We apply granular negative keyword lists, conversion tracking with server-side pixels (CAPI), tight audience exclusions, and multi-variant landing page split-testing. Our performance marketers review search terms and placement data daily to reallocate budgets to highest-converting keywords and demographics.",
  },
  {
    id: 13,
    category: "Partnership",
    question: "How does the onboarding and kickoff process work?",
    answer:
      "Onboarding begins with a comprehensive discovery audit of your existing digital assets, competitors, and revenue goals. Within 5 business days, we deliver an actionable roadmap with clear deliverables, project timelines, and designated communication channels (Slack/WhatsApp and weekly syncs) alongside your dedicated Project Lead.",
  },
  {
    id: 14,
    category: "Partnership",
    question: "What reporting and analytics will I receive?",
    answer:
      "You receive 24/7 access to an automated live dashboard tracking core business KPIs: organic keyword movement, qualified lead submissions, conversion rates, and ROAS. In addition, we deliver bi-weekly executive summaries and monthly strategic review calls.",
  },
];

export default function FaqsView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter FAQs based on active category & search query
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* ── 01. EDITORIAL HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#1D4224] text-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        {/* Background Graphic from Original Codebase */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/page-header-bgFAQ.jpg')",
          }}
        />

        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4224]/90 via-[#1D4224]/95 to-[#0E2015]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">FAQS</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFAE00]/15 border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Got Questions? We Have <span className="text-[#FFAE00]">Answers.</span>
            </h1>

            <p className="font-sans text-sm sm:text-lg text-[#B6F8DD]/90 max-w-2xl leading-relaxed">
              Find transparent answers to common inquiries about our web development, SEO strategies, paid media funnels, and enterprise digital solutions.
            </p>
          </div>
        </div>

        {/* Delicate Border Separator */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
      </section>

      {/* ── 02. SEARCH & FILTER CONTROLS ── */}
      <section className="relative z-20 -mt-7 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
          {/* Search Input Bar */}
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-[#5C6860]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., SEO timeline, Shopify, PPC budgets, migrations)..."
              className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#FDFBF7] border border-[#1D4224]/10 text-xs sm:text-sm text-[#0E2015] placeholder:text-[#5C6860]/70 focus:outline-none focus:border-[#1D4224] focus:ring-1 focus:ring-[#1D4224] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 text-xs text-[#5C6860] hover:text-[#0E2015] font-mono px-1.5 py-0.5 rounded bg-gray-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

      {/* ── 03. FAQ ACCORDION LIST ── */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#1D4224]/10 p-10 text-center space-y-3">
              <HelpCircle className="w-10 h-10 text-[#FFAE00] mx-auto opacity-80" />
              <h3 className="font-montserrat font-bold text-lg text-[#0E2015]">
                No questions found matching "{searchQuery}"
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6860] max-w-md mx-auto">
                Try searching with different keywords, select "All" categories, or connect directly with our technical strategists.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#1D4224] hover:underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
                      isOpen
                        ? "border-[#1D4224]/30 shadow-md ring-1 ring-[#1D4224]/10"
                        : "border-[#1D4224]/10 hover:border-[#1D4224]/20 hover:shadow"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#0E2015] group-hover:text-[#1D4224] transition-colors leading-snug">
                        {faq.question}
                      </h3>

                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#1D4224] text-[#FFAE00] rotate-180"
                            : "bg-[#F5F2EB] text-[#5C6860] group-hover:bg-[#1D4224]/10 group-hover:text-[#1D4224]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-[#1D4224]/5 bg-[#FAF8F5]">
                        <p className="font-sans text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── 04. DIRECT CONSULTATION HELP CARD ── */}
          <div className="mt-8 sm:mt-12 bg-white rounded-2xl border border-[#1D4224]/10 shadow-sm p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#1D4224] text-[#FFAE00] flex items-center justify-center flex-shrink-0 shadow-sm">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015]">
                  Have a specific question about your project?
                </h4>
                <p className="text-xs sm:text-sm text-[#5C6860] mt-0.5">
                  Speak directly with our team at{" "}
                  <a
                    href="tel:+917304056607"
                    className="font-bold text-[#1D4224] hover:underline"
                  >
                    +91 730-405-6607
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:corporate@tzar.co"
                    className="font-bold text-[#1D4224] hover:underline"
                  >
                    corporate@tzar.co
                  </a>
                  .
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-[#1D4224] text-white hover:bg-[#FFAE00] hover:text-[#0E2015] font-montserrat font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-200 shadow-sm flex-shrink-0 inline-flex items-center gap-2 group"
            >
              <span>Speak With An Expert</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
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
                READY TO START?
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Let's Build Something Exceptional Together
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                Whether you need enterprise web engineering, high-ranking SEO, or full-funnel digital campaigns, our team is ready to scale your brand.
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
                href="/services"
                className="border border-white/20 text-white hover:bg-white/10 font-montserrat font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
