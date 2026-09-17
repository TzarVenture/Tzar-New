"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  BarChart3,
  TrendingUp,
  Globe2,
  ShieldCheck,
  Zap,
  Target,
  ExternalLink,
  ChevronRight,
  Layers,
  FileText,
  Users
} from 'lucide-react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. 8-STEP SEO JOURNEY DATA ────────────────────────────────────────── */
interface SeoStep {
  stepNumber: string;
  title: string;
  description: string;
  iconSrc: string;
}

const SEO_STEPS: SeoStep[] = [
  {
    stepNumber: "Step 01",
    title: "Website Audit",
    description: "Unlock your competitive edge and enhance your online presence with our thorough website audit services.",
    iconSrc: "/assets/images/icons/sale-report.png",
  },
  {
    stepNumber: "Step 02",
    title: "Competitor Analysis",
    description: "Discover insights into your competitors' online strategies and identify high-value search market opportunities.",
    iconSrc: "/assets/images/icons/analytics.png",
  },
  {
    stepNumber: "Step 03",
    title: "Keyword Research",
    description: "Our skilled team performs thorough analysis to find the most relevant and high-performing commercial intent keywords.",
    iconSrc: "/assets/images/icons/keyword-analysis.png",
  },
  {
    stepNumber: "Step 04",
    title: "Competitor Benchmarking",
    description: "Boost your business to new levels with our custom competitor benchmarking and search share-of-voice solutions.",
    iconSrc: "/assets/images/icons/competitors.png",
  },
  {
    stepNumber: "Step 05",
    title: "On-Page Optimisation",
    description: "Boost your site's visibility and attract targeted traffic with our on-page optimization services, ensuring efficient Google crawling.",
    iconSrc: "/assets/images/icons/seo-1.png",
  },
  {
    stepNumber: "Step 06",
    title: "Link Building",
    description: "Our skilled team uses proven methods to gain high-quality, high-DA backlinks from top niche-relevant authoritative websites.",
    iconSrc: "/assets/images/icons/link-building.png",
  },
  {
    stepNumber: "Step 07",
    title: "Content Writing",
    description: "Top-notch search-intent content crafted and published online to establish topical authority and earn natural backlinks.",
    iconSrc: "/assets/images/icons/content-writing.png",
  },
  {
    stepNumber: "Step 08",
    title: "Performance Reports",
    description: "Get actionable insights into your digital performance and monitor key metrics with our detailed bi-weekly performance reports.",
    iconSrc: "/assets/images/icons/statistics.png",
  },
];

/* ── 02. THREE-CARD DELIVERABLES MATRIX (24 Deliverables) ──────────────── */
const DELIVERABLES_COL_1 = [
  "Meta Tags Optimization",
  "Site Content Optimization",
  "Creation of side & Footer links",
  "XML Sitemap Creation",
  "Article Submissions",
  "Social Bookmarking",
  "Keywords Ranking Report",
  "Traffic Sources Report",
];

const DELIVERABLES_COL_2 = [
  "H Tags Optimization",
  "Anchor Text Optimization",
  "Alt Tags Optimization",
  "Static Sitemap Optimization",
  "Search Engines Submissions",
  "Niche Directory Submission",
  "Off Page SEO Report",
  "Conversions Report",
];

const DELIVERABLES_COL_3 = [
  "HTML Code Optimization",
  "Internal Linking Optimization",
  "Error Page Configuration",
  "Conversion analysis reporting",
  "Directory Submissions",
  "Press Release Distribution",
  "Blog Optimization",
  "Visitors Overview Report",
];

/* ── 03. SEO PACKAGES & PRICING MATRICES (Authentic Data from tzar) ────── */
interface SeoPlanDetail {
  label: string;
  value: string;
}

interface SeoPlan {
  id: string;
  name: string;
  theme?: 'white' | 'dark' | 'forest';
  keywordsPlan?: string;
  subDetails?: SeoPlanDetail[];
  features: string[];
}

const NATIONAL_SEO_PLANS: SeoPlan[] = [
  {
    id: 'growth',
    name: 'Growth',
    theme: 'white',
    keywordsPlan: 'Upto 25 Keywords',
    subDetails: [
      { label: 'Keywords Scope', value: 'Upto 25 Keywords' },
      { label: 'Reporting', value: 'Monthly Ranking & Traffic' },
    ],
    features: [
      'In-Depth Site Analysis',
      'Duplicate Content Check',
      'Competition Analysis',
      'Title & Meta Tags Optimization',
      'Header (H1) Tags Optimization',
      'Robots.txt & XML Sitemap Creation',
      'Google Console & Analytics Setup',
      'Monthly Ranking & Traffic Report',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    theme: 'dark',
    keywordsPlan: 'Upto 40 Keywords',
    subDetails: [
      { label: 'Keywords Scope', value: 'Upto 40 Keywords' },
      { label: 'Reporting', value: 'Bi-Weekly Progress Report' },
    ],
    features: [
      'In-Depth Site Analysis & Audit',
      'Competition & Keyword Analysis',
      'Title, Meta & Header Tags Optimization',
      'Internal Link Structuring & Optimization',
      'Desktop Page Speed Optimization',
      'Canonicalization & URL Structure Fixes',
      'Google Console & Analytics Setup',
      'Backlinks & Content Marketing Submissions',
      'Bi-Weekly Ranking & Progress Report',
    ],
  },
  {
    id: 'high-volume',
    name: 'High Volume',
    theme: 'white',
    keywordsPlan: 'Upto 75 Keywords',
    subDetails: [
      { label: 'Keywords Scope', value: 'Upto 75 Keywords' },
      { label: 'Reporting', value: 'Bi-Weekly Performance Report' },
    ],
    features: [
      'Comprehensive Site Audit & Analysis',
      'Deep Keyword URL Mapping',
      'Full On-Page Optimization (Meta, H1, Alt Tags)',
      'Schema & HTML Sitemap Creation',
      'Robots.txt & XML Sitemap Analysis',
      'Content Writing & High-DA Link Building',
      'Custom 404 & Mobility Optimization',
      'Bi-Weekly Performance & Ranking Reports',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    theme: 'forest',
    keywordsPlan: 'Upto 100 Keywords',
    subDetails: [
      { label: 'Keywords Scope', value: 'Upto 100 Keywords' },
      { label: 'Reporting', value: 'Executive Bi-Weekly Reports' },
    ],
    features: [
      'Full-Scale National Search Domination',
      'Extensive Keyword Research & Mapping',
      'Complete Technical & Usability Analysis',
      'Header Status & Cache Verification',
      'High-DA Backlinks & Outreach',
      'Press Release & Directory Submissions',
      'Conversion Analysis Reporting',
      'Executive Bi-Weekly Ranking Reports',
    ],
  },
];

const LOCAL_SEO_PLANS: SeoPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    theme: 'white',
    keywordsPlan: 'Upto 10 Keywords',
    subDetails: [
      { label: 'Keywords', value: '5 Primary + 5 Secondary' },
      { label: 'Best Suited For', value: 'Business with 1 location' },
      { label: 'Expected Results', value: 'Google Maps Ranking + More Calls' },
    ],
    features: [
      'Local SEO Audit & Site Analysis',
      'Google Business Profile (GMB) Setup',
      'Local Citation & Directory Submissions',
      'Title, Meta Tags & Alt Tags Optimization',
      'Monthly Ranking & Conversion Reports',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    theme: 'dark',
    keywordsPlan: 'Upto 20 Keywords',
    subDetails: [
      { label: 'Keywords', value: '10 Primary + 10 Secondary' },
      { label: 'Best Suited For', value: 'Business with 2 locations' },
      { label: 'Expected Results', value: 'Google Maps Ranking + More Calls' },
    ],
    features: [
      'Multi-Location GMB Optimization',
      'Local Citation Building (60+ Directories)',
      'Geo-Targeted Content & Alt Tags',
      'Local Schema & Geo-Coordinates Setup',
      'Internal Link Structuring & Speed Fixes',
      'Bi-Weekly Local Calls & Leads Report',
    ],
  },
  {
    id: 'booster',
    name: 'Booster',
    theme: 'forest',
    keywordsPlan: 'Upto 40 Keywords',
    subDetails: [
      { label: 'Keywords', value: '20 Primary + 20 Secondary' },
      { label: 'Best Suited For', value: 'Business with >2 locations' },
      { label: 'Expected Results', value: 'Google Maps Ranking + More Calls' },
    ],
    features: [
      'Regional & Multi-City Map Pack Strategy',
      'Extensive Local Citation Network',
      'City Landing Page Optimization',
      'Local Backlink & Directory Outreach',
      'Local Reputation & Review Strategy',
      'Bi-Weekly Multi-Location Performance Tracking',
    ],
  },
];

const ECOM_SEO_PLANS: SeoPlan[] = [
  {
    id: 'nano',
    name: 'Nano',
    theme: 'white',
    keywordsPlan: 'Upto 30 Keywords',
    subDetails: [
      { label: 'Focus Keywords', value: '15 Focus Keywords' },
      { label: 'Reporting', value: 'Monthly Sales & Traffic' },
    ],
    features: [
      'E-Commerce Store Site Audit',
      'Product & Collection Meta Tags Optimization',
      'Product Schema & Rich Snippets',
      'Image Alt Tag & Speed Optimization',
      'Monthly Sales & Traffic Reports',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    theme: 'dark',
    keywordsPlan: 'Upto 50 Keywords',
    subDetails: [
      { label: 'Focus Keywords', value: '25 Focus Keywords' },
      { label: 'Reporting', value: 'Bi-Weekly Revenue & Traffic' },
    ],
    features: [
      'Store Architecture & Crawl Fixes',
      'Category & Facet Navigation Optimization',
      'Duplicate Content & Canonical Tagging',
      'High-Intent Buyer Keyword Ranking',
      'E-Commerce Backlinks & Submissions',
      'Bi-Weekly Revenue & Organic Traffic Reports',
    ],
  },
  {
    id: 'blast',
    name: 'Blast',
    theme: 'white',
    keywordsPlan: 'Upto 100 Keywords',
    subDetails: [
      { label: 'Focus Keywords', value: '50 Focus Keywords' },
      { label: 'Reporting', value: 'Bi-Weekly Growth & Conversion' },
    ],
    features: [
      'High-SKU Catalog SEO Strategy',
      'Advanced Product & Review Schema',
      'Category Content & Internal Linking',
      'Merchant Center & Product Feed Audit',
      'High-DA E-Commerce Backlink Building',
      'Bi-Weekly Growth & Conversion Analysis',
    ],
  },
  {
    id: 'mega',
    name: 'Mega',
    theme: 'forest',
    keywordsPlan: 'Upto 200 Keywords',
    subDetails: [
      { label: 'Focus Keywords', value: '100 Focus Keywords' },
      { label: 'Reporting', value: 'Bi-Weekly Sales & Revenue' },
    ],
    features: [
      'Full Enterprise E-Commerce Domination',
      'Multi-Category & High-Volume Keyword Clusters',
      'Speed & Core Web Vitals Optimization',
      'Digital PR & Authority Lifestyle Backlinks',
      'Dynamic Schema & International SEO',
      'Bi-Weekly Executive Revenue & Sales Tracking',
    ],
  },
];

/* ── 04. CLIENT LOGOS (From Authentic Testimonials Data) ────────────────── */
const CLIENT_LOGOS = [
  { name: 'Spardha', image: '/assets/images/testimonial/spardha.jpg' },
  { name: 'New Life Steel', image: '/assets/images/testimonial/newlifesteel.jpg' },
  { name: 'CHRMP', image: '/assets/images/testimonial/chrmp.jpg' },
  { name: 'Urban', image: '/assets/images/testimonial/urban.jpg' },
  { name: 'Helms', image: '/assets/images/testimonial/helms.jpg' },
  { name: 'Femm', image: '/assets/images/testimonial/femm.jpg' },
  { name: 'Client 10', image: '/assets/images/testimonial/testimonial-one-img-10.jpg' },
  { name: 'Client 11', image: '/assets/images/testimonial/testimonial-one-img-11.jpg' },
  { name: 'Client 13', image: '/assets/images/testimonial/testimonial-one-img-13.jpg' },
  { name: 'Client 14', image: '/assets/images/testimonial/testimonial-one-img-14.jpg' },
  { name: 'Client 15', image: '/assets/images/testimonial/testimonial-one-img-15.jpg' },
  { name: 'Client 16', image: '/assets/images/testimonial/testimonial-one-img-16.jpg' },
  { name: 'Client 17', image: '/assets/images/testimonial/testimonial-one-img-17.jpg' },
  { name: 'Client 19', image: '/assets/images/testimonial/testimonial-one-img-19.jpg' },
];

export const SeoServicePage: React.FC = () => {
  const [activePackageTab, setActivePackageTab] = useState<'national' | 'local' | 'ecom'>('national');

  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER WITH EMBEDDED FORM & BACKGROUND GIF
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[#1D4224]/10">
        {/* Subtle Background Pattern & Gradient */}
        <div
          className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/backgrounds/seo-banner1.gif')" }}
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-[#EFE8E0]/70 via-[#EFE8E0]/90 to-[#EFE8E0] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Punchy Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Breadcrumb & Clean Guarantee Badge */}
              <div className="flex flex-col gap-2.5">
                <nav className="flex items-center gap-2 text-xs font-mono text-[#5C6860]">
                  <Link href="/" className="hover:text-[#1D4224] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-[#1D4224] font-bold">SEO Services</span>
                </nav>

                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1D4224]/10 border border-[#1D4224]/20 w-fit">
                  <span className="font-montserrat font-black text-xs uppercase tracking-wider text-[#1D4224]">
                    100% Guaranteed Result in 6 Months
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.15]">
                Drive Increased Visibility &amp; Traffic with Our{' '}
                <span className="bg-[#FFAE00] text-[#0E2015] px-2 py-0.5 rounded-md inline-block mt-1">
                  Dynamic SEO Techniques.
                </span>
              </h1>

              {/* Ultra-Short Supporting Hook */}
              <p className="font-inter text-base sm:text-lg text-[#5C6860] max-w-xl">
                Dominate page-one search rankings and turn high-intent Google searches into paying customers.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-sm hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-lg shadow-[#1D4224]/10 cursor-pointer"
                >
                  <span>Enquiry Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#packages-pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1D4224]/20 bg-white/70 hover:bg-white text-[#1D4224] font-montserrat font-bold text-sm transition-all duration-200"
                >
                  <span>View Packages</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: High-Converting Lead Capture Form Component */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="w-full max-w-md rounded-3xl bg-[#0E2015] p-2 border border-[#1D4224]/50 shadow-2xl shadow-black/20">
                <LeadCaptureForm
                  title="Claim Your Free SEO Audit"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Search Engine Optimization (SEO)"
                  serviceOptions={[
                    'Search Engine Optimization (SEO)',
                    'Websites Design & Development',
                    'Performance Marketing (PPC)',
                    'Social Media (SMO | SMM)',
                    'Product Design & 3D Packaging',
                  ]}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. THE 8-STEP SEO JOURNEY: THE JOURNEY UNVEILED
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading: Minimalist 4-Word Title */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              The SEO Journey Unveiled
            </h2>
          </div>

          {/* 8-Step Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEO_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#1D4224]/10 shadow-sm hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Step Badge */}
                <div className="w-full flex justify-center items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1D4224] text-[#FFAE00] font-montserrat font-black text-xs uppercase tracking-wider">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Icon */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#EFE8E0]/60 p-3 flex items-center justify-center border border-[#1D4224]/10 group-hover:scale-105 transition-transform duration-300 mb-5">
                  <img
                    src={step.iconSrc}
                    alt={step.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Step Title & Copy */}
                <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#0E2015] mb-2.5 group-hover:text-[#1D4224] transition-colors">
                  {step.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. THREE-CARD DELIVERABLES MATRIX (24 Deliverables)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EFE8E0] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              Complete Optimization Scope
            </h2>
          </div>

          {/* Three Column Matrix Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 01: Technical Foundation */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#1D4224]/10 shadow-lg hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300 flex flex-col">
              <div className="mb-6 pb-4 border-b border-[#1D4224]/10">
                <h3 className="font-montserrat font-black text-xl text-[#0E2015]">Technical Foundation</h3>
              </div>

              <ul className="space-y-3.5 font-inter text-xs sm:text-sm text-[#0E2015]">
                {DELIVERABLES_COL_1.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-[#0E2015]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 02: On-Page Architecture */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#1D4224]/10 shadow-lg hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300 flex flex-col">
              <div className="mb-6 pb-4 border-b border-[#1D4224]/10">
                <h3 className="font-montserrat font-black text-xl text-[#0E2015]">On-Page Architecture</h3>
              </div>

              <ul className="space-y-3.5 font-inter text-xs sm:text-sm text-[#0E2015]">
                {DELIVERABLES_COL_2.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-[#0E2015]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 03: Code Hygiene & PR */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#1D4224]/10 shadow-lg hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300 flex flex-col">
              <div className="mb-6 pb-4 border-b border-[#1D4224]/10">
                <h3 className="font-montserrat font-black text-xl text-[#0E2015]">Code Hygiene &amp; PR</h3>
              </div>

              <ul className="space-y-3.5 font-inter text-xs sm:text-sm text-[#0E2015]">
                {DELIVERABLES_COL_3.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-[#0E2015]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. INTERACTIVE SEO PACKAGES & PRICING
      ────────────────────────────────────────────────────────────────── */}
      <section id="packages-pricing" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              SEO Plans &amp; Packages
            </h2>

            {/* Tab Switcher */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#EFE8E0] border border-[#1D4224]/15 mt-6">
              <button
                onClick={() => setActivePackageTab('national')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePackageTab === 'national'
                    ? 'bg-[#1D4224] text-white shadow-md'
                    : 'text-[#5C6860] hover:text-[#0E2015]'
                }`}
              >
                National SEO
              </button>
              <button
                onClick={() => setActivePackageTab('local')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePackageTab === 'local'
                    ? 'bg-[#1D4224] text-white shadow-md'
                    : 'text-[#5C6860] hover:text-[#0E2015]'
                }`}
              >
                Local SEO
              </button>
              <button
                onClick={() => setActivePackageTab('ecom')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl font-montserrat font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePackageTab === 'ecom'
                    ? 'bg-[#1D4224] text-white shadow-md'
                    : 'text-[#5C6860] hover:text-[#0E2015]'
                }`}
              >
                Ecommerce SEO
              </button>
            </div>
          </div>

          {/* Render Plans Based on Active Tab */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch pt-2 ${
              activePackageTab === 'local'
                ? 'lg:grid-cols-3 max-w-5xl mx-auto'
                : 'lg:grid-cols-3 xl:grid-cols-4'
            }`}
          >
            {(activePackageTab === 'national'
              ? NATIONAL_SEO_PLANS
              : activePackageTab === 'local'
              ? LOCAL_SEO_PLANS
              : ECOM_SEO_PLANS
            ).map((plan) => {
              const isDark = plan.theme === 'dark';
              const isForest = plan.theme === 'forest';
              const isColored = isDark || isForest;

              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#0E2015] text-white shadow-2xl border-2 border-[#FFAE00] lg:-translate-y-2 relative'
                      : isForest
                      ? 'bg-[#1D4224] text-white shadow-xl border border-[#FFAE00]/40 hover:border-[#FFAE00] hover:shadow-2xl'
                      : 'bg-white text-[#0E2015] shadow-md border border-[#1D4224]/10 hover:shadow-xl hover:border-[#1D4224]/30'
                  }`}
                >
                  <div>
                    <h3
                      className={`font-montserrat font-black text-2xl mb-4 ${
                        isColored ? 'text-white' : 'text-[#0E2015]'
                      }`}
                    >
                      {plan.name}
                    </h3>

                    {/* Sub-Details (Primary/Secondary, Best Suited For, Reporting, Focus Keywords) */}
                    {plan.subDetails && plan.subDetails.length > 0 && (
                      <div
                        className={`space-y-1.5 py-3 my-3 border-y font-inter text-xs ${
                          isColored
                            ? 'border-white/15 text-white/80'
                            : 'border-[#1D4224]/10 text-[#5C6860]'
                        }`}
                      >
                        {plan.subDetails.map((detail, dIdx) => (
                          <div key={dIdx} className="flex justify-between items-start gap-2">
                            <span
                              className={`font-semibold shrink-0 ${
                                isColored ? 'text-[#FFAE00]' : 'text-[#0E2015]'
                              }`}
                            >
                              {detail.label}:
                            </span>
                            <span className={isColored ? 'text-white/90 text-right' : 'text-right'}>
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div
                      className={`w-full h-px mb-4 ${
                        isColored ? 'bg-white/15' : 'bg-[#1D4224]/10'
                      }`}
                    />

                    {/* Feature List */}
                    <ul className="space-y-2.5 text-xs font-inter mb-6">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isColored ? 'text-[#FFAE00]' : 'text-[#1D4224]'
                            }`}
                          />
                          <span
                            className={`leading-relaxed ${
                              isColored ? 'text-white/85' : 'text-[#5C6860]'
                            }`}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={scrollToContactForm}
                    className={`w-full py-3 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isDark
                        ? 'bg-[#FFAE00] text-[#0E2015] hover:bg-white hover:text-[#0E2015]'
                        : isForest
                        ? 'bg-white text-[#1D4224] hover:bg-[#FFAE00] hover:text-[#0E2015]'
                        : 'bg-[#1D4224] text-white hover:bg-[#FFAE00] hover:text-[#0E2015]'
                    }`}
                  >
                    <span>Get Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          05. ICONIC BRANDS PROOF GRID: "WE MAKE ICONIC BRANDS"
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              We Don&apos;t Sell Products
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight uppercase">
              WE MAKE ICONIC BRANDS
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2" />
          </div>

          {/* Logo Showcase Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] border border-[#1D4224]/10 rounded-2xl p-4 flex items-center justify-center aspect-square hover:shadow-md hover:border-[#1D4224]/30 transition-all duration-200"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const parent = (e.currentTarget as HTMLImageElement).parentElement;
                    if (parent) {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      parent.innerHTML = `<span class="font-montserrat font-bold text-xs text-[#1D4224] text-center">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/our-client"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#1D4224] text-[#1D4224] font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#1D4224] hover:text-white transition-all duration-200"
            >
              <span>View All 100+ Partner Clients</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          06. MASSIVE TRAFFIC CONSULTATION FUNNEL SECTION (With Form)
      ────────────────────────────────────────────────────────────────── */}
      <section id="Contactform" className="py-16 sm:py-24 bg-[#0E2015] text-white relative overflow-hidden">
        {/* Decorative background aura */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1D4224]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-2 mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              We Can Get Massive Traffic To Your Website
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#FFAE00] uppercase tracking-widest font-bold">
              TZAR DIGITAL MARKETING AGENCY
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT: Standardized LeadCaptureForm Component */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="w-full max-w-lg rounded-3xl bg-[#07130A] p-2 sm:p-4 border border-[#1D4224]/60 shadow-2xl">
                <LeadCaptureForm
                  title="Accelerate Your Search Traffic"
                  titleColor="#FFAE00"
                  bgColor="#07130A"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Search Engine Optimization (SEO)"
                  serviceOptions={[
                    'Search Engine Optimization (SEO)',
                    'Websites Design & Development',
                    'Performance Marketing (PPC)',
                    'Social Media (SMO | SMM)',
                    'Product Design & 3D Packaging',
                  ]}
                />
              </div>
            </div>

            {/* RIGHT: High-Impact Strategic Advantage Copy */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-[#FFAE00]">
                SEO | Content Marketing | Paid Search Marketing | Social Media | Analytics | Programmatic Advertising
              </div>

              <div className="space-y-4 font-inter">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFAE00]/40 transition-all duration-200">
                  <h4 className="font-montserrat font-bold text-lg text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAE00]" />
                    <span className="text-[#FFAE00]">SEO Strategy</span> – Sustainable Long-Term Inbound Pipeline
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Bring massive qualified buyer traffic through algorithmic SEO architectures designed to withstand Google core updates and dominate page-one search volume.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFAE00]/40 transition-all duration-200">
                  <h4 className="font-montserrat font-bold text-lg text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAE00]" />
                    <span className="text-[#FFAE00]">Paid Media</span> – Direct Customer Acquisition with Guaranteed ROI
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Laser-targeted Google Search &amp; Shopping ads coordinated with organic landing pages to achieve optimal blended customer acquisition cost (CAC).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFAE00]/40 transition-all duration-200">
                  <h4 className="font-montserrat font-bold text-lg text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAE00]" />
                    <span className="text-[#FFAE00]">Content Marketing</span> – Engaging Editorial Authority
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Attractive, conversion-focused content designed to elevate domain authority, improve visitor dwell time, and drive measurable client inquiries.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          07. IN-DEPTH EDITORIAL SEO KNOWLEDGE SECTION (For Search Dominance)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EFE8E0] relative border-t border-[#1D4224]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#1D4224]/15 shadow-xl space-y-8 font-inter text-[#0E2015] leading-relaxed">
            
            <div>
              <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224] block mb-2">
                Deep Dive Technical Insights
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
                Benefits of Using Search Engine Optimization Services
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5C6860] leading-relaxed">
              <strong className="text-[#1D4224] font-bold bg-[#1D4224]/10 px-1.5 py-0.5 rounded">Organic search engine optimization</strong>, leading to substantial increases in <strong className="text-[#1D4224] font-bold bg-[#1D4224]/10 px-1.5 py-0.5 rounded">website traffic</strong>, is the paramount advantage of professional SEO execution. SEO is an organic technical process that enhances the rank position of your commercial website on search engine results pages (SERPs). An effective enterprise SEO roadmap places your conversion assets directly in front of targeted decision-makers querying high-intent search terms.
            </p>

            <p className="text-sm sm:text-base text-[#5C6860] leading-relaxed">
              The most critical outcome of search engine optimization is qualified inbound traffic. This traffic drives new customer acquisition, generates qualified B2B leads, and accelerates direct D2C sales. Because organic search users proactively seek solutions, their conversion rates consistently outperform non-organic traffic channels.
            </p>

            <div className="w-full h-px bg-[#1D4224]/10" />

            <div>
              <h3 className="font-montserrat font-black text-xl sm:text-2xl text-[#0E2015] mb-3">
                Social Media &amp; Link Building Authority
              </h3>
              <p className="text-sm sm:text-base text-[#5C6860] leading-relaxed">
                Social media tactics remain an integral multiplier for modern organic search presence. With continual algorithmic updates, Google places tremendous scrutiny upon link quality, referring domains, and brand co-occurrences. Active social distribution amplifies content discovery, facilitates natural link acquisition, and establishes undeniable digital brand authority across major networks.
              </p>
              <p className="text-sm sm:text-base text-[#5C6860] leading-relaxed mt-3">
                Crucially, search algorithms evaluate domain authority based on the quality and contextual relevance of incoming backlinks. A domain with few or substandard links cannot compete for competitive keywords. Partnering with seasoned search architects ensures your backlink footprint is built upon trusted, high-DA digital publications.
              </p>
            </div>

            <div className="w-full h-px bg-[#1D4224]/10" />

            <div>
              <h3 className="font-montserrat font-black text-xl sm:text-2xl text-[#0E2015] mb-3">
                Strategic Search Engine Optimization Execution
              </h3>
              <p className="text-sm sm:text-base text-[#5C6860] leading-relaxed">
                Professional search engine optimization delivers maximum return on investment for your total marketing spend. By employing white-hat methods and technical rigor, we insulate your business from penalty risks while driving sustained keyword growth. From local maps to national multi-state search results, Tzar Venture structures campaigns that dominate page one.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[#1D4224]/10">
              <span className="font-mono text-xs text-[#5C6860]">
                TZAR VENTURE • TECHNICAL SEO &amp; ORGANIC GROWTH
              </span>
              <button
                onClick={scrollToContactForm}
                className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-[#1D4224] hover:text-[#FFAE00] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Request Custom SEO Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
