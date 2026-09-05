"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Phone,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  ShoppingBag,
  Cpu,
  Layers,
  Smartphone,
  Sparkles,
  Server,
  Zap,
  ShieldCheck,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';
import { COMPANY } from '@/data/company';

/* --------------------------------------------------------------------------
   01. AUTHENTIC DATA FROM LIVE SITE (website-development-services)
-------------------------------------------------------------------------- */

// 1. Packages & Pricing Data (from webpacksdata.js)
interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  timeline: string;
  price: string;
  iconImg: string;
  features: string[];
}

const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'wordpress',
    name: 'WordPress | WooCommerce',
    badge: 'B2B / B2C / D2C',
    timeline: '2 - 3 weeks / Starting Package',
    price: '29,999/- INR',
    iconImg: '/assets/images/icons/wordpress.png',
    features: [
      'Up to 15 Page Website',
      'Website Creative Banner',
      'Website Content Guidance',
      '100% Mobile Responsive',
      'Lead Form Creation',
      'Google Analytics Integration',
      'Facebook Pixel Integration',
      'Search Console Integration',
      'Shiprocket Integration',
      'Payment Gateway Integration',
      'Third Party App Integration',
      'SEO Friendly Architecture',
      'Complete Bug Fixing',
      '1 Year Maintenance & Support',
    ],
  },
  {
    id: 'shopify',
    name: 'Shopify E-Commerce',
    badge: 'B2C / D2C Flagship',
    isPopular: true,
    timeline: '3 - 4 weeks / Starting Package',
    price: '49,999/- INR',
    iconImg: '/assets/images/icons/shopify2.png',
    features: [
      'Full Shopify Setup',
      'Premium Theme Customization',
      'Up to 100 Products Catalog',
      'Product Setup (Up to 50 Products)',
      'High-Converting Creative Banners',
      'Conversion-Focused Content',
      'E-Commerce SEO Optimization',
      'Third-Party App Integration',
      'Google Analytics Setup',
      'Shiprocket Logistics Integration',
      'Payment Gateway Integration',
      'Facebook Pixel Integration',
      'Custom Domain Setup',
      'Search Console Integration',
      'Social Login Option',
      'Extended Admin Training',
      '1 Year Maintenance & Support',
    ],
  },
  {
    id: 'nextjs',
    name: 'React.js | Adv. React Next',
    badge: 'Enterprise Headless',
    timeline: '8 - 12 weeks / Starting Package',
    price: '79,999/- INR',
    iconImg: '/assets/images/icons/nextjs2.png',
    features: [
      'Bespoke Custom Page Design',
      'Up to 20 High-Speed Pages',
      'Product Setup (Up to 100 Products)',
      'Custom Creative Banners & Motion',
      'Tailored Brand Content Flow',
      'Customer Portal & Login Page',
      'Advanced Headless SEO Setup',
      'Interactive Custom Lead Forms',
      'Third-Party REST / GraphQL APIs',
      'Google Analytics Setup',
      'Custom Domain & SSL Setup',
      'Search Console Integration',
      'Social OAuth Login',
      'Payment Gateway Integration',
      'Shiprocket Integration',
      '1 Year Maintenance & Support',
    ],
  },
];

// 2. Built in Shopify - Live Store Showcase (from WebsiteShow.js)
const SHOPIFY_STORES = [
  {
    title: 'AllThingsPriti',
    href: 'https://allthingspriti.com/',
    gif: '/assets/images/icons/atpshopweb.gif',
    category: 'Fashion & Apparel',
  },
  {
    title: 'Apollo India',
    href: 'https://www.apolloindia.co/',
    gif: '/assets/images/icons/aplloweb.gif',
    category: 'Corporate & Equipment',
  },
  {
    title: 'Cabelo Chave',
    href: 'https://cabelochave.com/',
    gif: '/assets/images/icons/cabiloweb.gif',
    category: 'Beauty & Hair Care',
  },
  {
    title: 'Mahaarajaa',
    href: 'https://mahaarajaa.life/',
    gif: '/assets/images/icons/mahaarajaweb.gif',
    category: 'Luxury Lifestyle',
  },
];

// 3. 12 Core Capabilities Grid (from websiteDevCards.js)
const CORE_CAPABILITIES = [
  {
    id: 1,
    title: 'e-Commerce Development',
    desc: 'We transform your vision of selling online into a robust, high-conversion digital reality.',
    icon: <ShoppingBag className="w-6 h-6 text-[#FFAE00]" />,
  },
  {
    id: 2,
    title: 'Website Re-designing',
    desc: 'Turn your legacy website into a modern, dynamic, and attractive customer conversion engine.',
    icon: <Layers className="w-6 h-6 text-[#1D4224]" />,
  },
  {
    id: 3,
    title: 'Application Development',
    desc: 'We excel in creating flexible, scalable, and secure end-to-end software application solutions.',
    icon: <Cpu className="w-6 h-6 text-[#FFAE00]" />,
  },
  {
    id: 4,
    title: 'Magento Architecture',
    desc: 'Enterprise open-source storefronts engineered for high-volume catalogs and complex B2B workflows.',
    icon: <Server className="w-6 h-6 text-[#1D4224]" />,
  },
  {
    id: 5,
    title: 'Custom Web Architecture',
    desc: 'Engineered with clean, modular code to support ever-expanding traffic and user engagement.',
    icon: <Code2 className="w-6 h-6 text-[#FFAE00]" />,
  },
  {
    id: 6,
    title: 'WordPress & WooCommerce',
    desc: 'Intuitive, easily manageable, and SEO-optimized content management systems for modern brands.',
    icon: <Globe className="w-6 h-6 text-[#1D4224]" />,
  },
  {
    id: 7,
    title: 'Volusion Architecture',
    desc: 'High standard and high-performance shopping cart development tailored to your commercial needs.',
    icon: <Zap className="w-6 h-6 text-[#FFAE00]" />,
  },
  {
    id: 8,
    title: 'Core PHP Solutions',
    desc: 'Custom PHP frameworks engineered for robust database operations, custom portals, and APIs.',
    icon: <Server className="w-6 h-6 text-[#1D4224]" />,
  },
  {
    id: 9,
    title: 'Drupal CMS',
    desc: 'Enterprise CMS architecture built to handle complex permissions, multi-sites, and structured content.',
    icon: <ShieldCheck className="w-6 h-6 text-[#FFAE00]" />,
  },
  {
    id: 10,
    title: 'Joomla Development',
    desc: 'Advanced web applications powered by custom plugins, modular extensions, and multilingual setups.',
    icon: <Layers className="w-6 h-6 text-[#1D4224]" />,
  },
  {
    id: 11,
    title: 'Shopify Development',
    desc: 'Custom theme builds, Liquid customization, app integrations, and high-converting checkout flows.',
    icon: <ShoppingBag className="w-6 h-6 text-[#FFAE00]" />,
  },
  {
    id: 12,
    title: 'React & Next.js Web Apps',
    desc: 'Sub-second page loads, server-side rendering, and ultra-smooth interactive user interfaces.',
    icon: <Smartphone className="w-6 h-6 text-[#1D4224]" />,
  },
];

// 4. Industry Expertise (from OurIndustryExpertise.js)
const INDUSTRIES = [
  { name: 'Beauty and Cosmetics', icon: '/assets/images/icons/beauty.png' },
  { name: 'Fashion and Lifestyle', icon: '/assets/images/icons/fashion.png' },
  { name: 'Furniture and Home Décor', icon: '/assets/images/icons/furniture.png' },
  { name: 'Food and Beverages', icon: '/assets/images/icons/food.png' },
  { name: 'Mobile and Electronics', icon: '/assets/images/icons/mobile.png' },
  { name: 'Health and Wellness', icon: '/assets/images/icons/health.png' },
  { name: 'Jewellery and Diamonds', icon: '/assets/images/icons/jewellery.png' },
  { name: 'Baby Care and Kids Toys', icon: '/assets/images/icons/baby-care.png' },
  { name: 'Books and Stationery', icon: '/assets/images/icons/stationery.png' },
];

// 5. Mobile Mockup Showcase Slides (from WebDesignMock.js)
const MOCKUP_SLIDES = [
  { id: 1, img: '/assets/images/MobileShowcase/Home/Showcase-01.png', title: 'Brand Flagship Store' },
  { id: 2, img: '/assets/images/MobileShowcase/Home/Showcase-02.png', title: 'Product Catalog View' },
  { id: 3, img: '/assets/images/MobileShowcase/Home/Showcase-03.png', title: 'Interactive Product Detail' },
  { id: 4, img: '/assets/images/MobileShowcase/Home/Showcase-04.png', title: 'Seamless Mobile Checkout' },
  { id: 5, img: '/assets/images/MobileShowcase/Home/Showcase-05.png', title: 'Modern UI/UX Feed' },
  { id: 6, img: '/assets/images/MobileShowcase/Home/Showcase-06.png', title: 'Dynamic Brand Header' },
  { id: 7, img: '/assets/images/MobileShowcase/Home/Showcase-07.png', title: 'Category Navigation' },
  { id: 8, img: '/assets/images/MobileShowcase/Home/Showcase-08.png', title: 'Mobile Cart Experience' },
  { id: 9, img: '/assets/images/MobileShowcase/Home/Showcase-09.png', title: 'Order Tracking Screen' },
  { id: 10, img: '/assets/images/MobileShowcase/Home/Showcase-10.png', title: 'Customer Profile Page' },
  { id: 11, img: '/assets/images/MobileShowcase/Home/Showcase-11.png', title: 'Filter & Search Grid' },
  { id: 12, img: '/assets/images/MobileShowcase/Home/Showcase-12.png', title: 'Hero Banner Layout' },
  { id: 13, img: '/assets/images/MobileShowcase/Home/Showcase-13.png', title: 'Brand Story Showcase' },
  { id: 14, img: '/assets/images/MobileShowcase/Home/Showcase-14.png', title: 'Promotion Grid Screen' },
  { id: 15, img: '/assets/images/MobileShowcase/Home/Showcase-15.png', title: 'Interactive Review Carousel' },
  { id: 16, img: '/assets/images/MobileShowcase/Home/Showcase-16.png', title: 'Newsletter & Retention' },
  { id: 17, img: '/assets/images/MobileShowcase/Home/Showcase-17.png', title: 'Mobile Footer & FAQs' },
  { id: 18, img: '/assets/images/MobileShowcase/Home/Showcase-18.png', title: 'E-Commerce Speed Metric' },
];

// 6. Back-End Technologies Logos (from TestimonialFive.js & BED folder)
const BACKEND_LOGOS = [
  { id: 1, img: '/assets/images/BED/1.png' },
  { id: 2, img: '/assets/images/BED/2.png' },
  { id: 3, img: '/assets/images/BED/3.png' },
  { id: 4, img: '/assets/images/BED/4.png' },
  { id: 5, img: '/assets/images/BED/5.png' },
  { id: 6, img: '/assets/images/BED/6.png' },
  { id: 7, img: '/assets/images/BED/7.png' },
  { id: 8, img: '/assets/images/BED/8.png' },
  { id: 9, img: '/assets/images/BED/9.png' },
  { id: 10, img: '/assets/images/BED/10.png' },
  { id: 11, img: '/assets/images/BED/11.png' },
  { id: 12, img: '/assets/images/BED/12.png' },
  { id: 13, img: '/assets/images/BED/13.png' },
];

// Form Service Options
const WEB_FORM_SERVICES = [
  'Shopify E-Commerce Store',
  'WordPress & WooCommerce',
  'React.js & Next.js Web App',
  'Website Redesign & UI/UX',
  'Custom Enterprise Web Platform',
  'PHP / Laravel Backend',
];

/* --------------------------------------------------------------------------
   02. COMPONENT: WEBSITE DEVELOPMENT SERVICES PAGE
-------------------------------------------------------------------------- */
export const WebsiteDevelopmentPage: React.FC = () => {
  const mockupScrollRef = useRef<HTMLDivElement>(null);

  const scrollMockups = (direction: 'left' | 'right') => {
    if (mockupScrollRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      mockupScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015]">

      {/* ──────────────────────────────────────────────────────────────────
          01. LUXURY HERO BANNER (100% VH / DVH HEIGHT ON ALL DEVICES)
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-[#0E2015] border-b border-[#1D4224]/30">
        {/* Ambient Dark Spruce & Gold Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1D4224]/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* ── Left Column: Value Proposition & Tech Stack ── */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D4224]/80 border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-montserrat font-bold uppercase tracking-widest">
                <Code2 className="w-3.5 h-3.5" />
                <span>Web Engineering &amp; Architecture</span>
              </div>

              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.12]">
                Power Up Your <br />
                <span className="text-[#FFAE00]">Online Presence</span>
              </h1>

              {/* Technologies Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {['Shopify', 'WordPress', 'React.js', 'Next.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1 rounded-full bg-white/[0.07] border border-white/15 text-white/90 font-montserrat font-semibold text-xs tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="font-inter text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We design and engineer lightning-fast, custom-coded web flagships that convert traffic into loyal customers. From headless e-commerce to enterprise platforms, experience flawless UX and zero technical debt.
              </p>

              {/* Key Features Quick Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                {[
                  'Sub-Second Load Times',
                  'Conversion-Led UI/UX',
                  'Shiprocket & Payment Gateways',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/75 text-xs font-inter">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('packages-pricing')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 group cursor-pointer"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-4 h-4 text-[#FFAE00] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#FFAE00]" />
                  <span>Call: {COMPANY.phone}</span>
                </a>
              </div>
            </div>

            {/* ── Right Column: Lead Consultation Form ── */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="w-full max-w-md rounded-2xl bg-[#07130A]/95 p-1 border border-[#1D4224]/60 shadow-2xl shadow-black/60 backdrop-blur-md">
                <LeadCaptureForm
                  title="Web Project Consultation"
                  titleColor="#FFFFFF"
                  bgColor="#07130A"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Shopify E-Commerce Store"
                  serviceOptions={WEB_FORM_SERVICES}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. WEBSITE DEVELOPMENT PACKAGES & PRICING
      ────────────────────────────────────────────────────────────────── */}
      <section id="packages-pricing" className="py-20 sm:py-28 bg-[#EFE8E0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14 sm:mb-16">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
              Transparent &amp; ROI-Driven Pricing
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight uppercase">
              WEBSITE PACKAGES &amp; PRICING
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#0E2015]/75 max-w-2xl mx-auto leading-relaxed">
              Choose the ideal architecture for your commercial scale. Transparent fixed-price packages with zero hidden fees.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-[#0E2015] text-white shadow-2xl border-2 border-[#FFAE00] lg:-translate-y-2'
                    : 'bg-white text-[#0E2015] shadow-lg border border-[#0E2015]/10 hover:shadow-xl hover:border-[#1D4224]/30'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFAE00] text-[#0E2015] font-montserrat font-black text-xs uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                {/* Package Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF9F5] p-2.5 flex items-center justify-center border border-[#0E2015]/10 shadow-sm">
                    <img
                      src={pkg.iconImg}
                      alt={pkg.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span
                    className={`text-[11px] font-montserrat font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      pkg.isPopular
                        ? 'bg-white/10 text-[#FFAE00] border border-[#FFAE00]/30'
                        : 'bg-[#1D4224]/10 text-[#1D4224]'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="font-montserrat font-black text-xl sm:text-2xl leading-tight mb-2">
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-inter text-white/70 mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#FFAE00]" />
                  <span className={pkg.isPopular ? 'text-white/70' : 'text-[#0E2015]/70'}>
                    {pkg.timeline}
                  </span>
                </div>

                {/* Price Display */}
                <div className="py-4 my-2 border-y border-current/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-montserrat font-black text-3xl sm:text-4xl text-[#FFAE00]">
                      {pkg.price}
                    </span>
                    <span className={`text-xs font-bold ${pkg.isPopular ? 'text-white/60' : 'text-[#0E2015]/60'}`}>
                      + GST
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 py-4">
                  <p className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-4 ${
                    pkg.isPopular ? 'text-white/80' : 'text-[#1D4224]'
                  }`}>
                    Included Deliverables:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-inter">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-snug">
                        <Check className="w-4 h-4 text-[#FFAE00] shrink-0 mt-0.5" />
                        <span className={pkg.isPopular ? 'text-white/85' : 'text-[#0E2015]/80'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-4 border-t border-current/10 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection('Contactform')}
                    className={`w-full py-3.5 px-6 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-[#1D4224] text-white hover:bg-[#25552f] border border-[#FFAE00]/40 hover:shadow-xl'
                        : 'bg-[#0E2015] text-white hover:bg-[#1D4224]'
                    }`}
                  >
                    Enquiry Now
                  </button>

                  <a
                    href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                    className={`w-full py-2.5 px-6 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider text-center transition-all border ${
                      pkg.isPopular
                        ? 'border-white/20 text-white/80 hover:bg-white/10'
                        : 'border-[#0E2015]/20 text-[#0E2015] hover:bg-[#FAF9F5]'
                    }`}
                  >
                    Call: {COMPANY.phone}
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. BUILT IN SHOPIFY - LIVE STORES SHOWCASE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-y border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-14">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
              Proven Commercial Flagships
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#1D4224] tracking-tight uppercase">
              Built in Shopify
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#0E2015]/75 max-w-xl mx-auto leading-relaxed">
              Explore recent live Shopify stores designed, customized, and launched by our engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOPIFY_STORES.map((store, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[#FAF9F5] border border-[#0E2015]/10 shadow-sm hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0E2015]">
                  <img
                    src={store.gif}
                    alt={store.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <span>Visit Live Store</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FFAE00]" />
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-[#1D4224] block mb-1">
                      {store.category}
                    </span>
                    <h4 className="font-montserrat font-bold text-base text-[#0E2015]">
                      {store.title}
                    </h4>
                  </div>

                  <a
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-[#1D4224] hover:text-[#0E2015] transition-colors"
                  >
                    <span>View Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFAE00]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. 12 CORE CAPABILITIES GRID
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-3 mb-14">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
              Full-Stack Architecture
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight uppercase">
              Website Development Services
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#0E2015]/75 max-w-xl mx-auto leading-relaxed">
              Engineered for high conversion rates, seamless mobile responsiveness, and effortless catalog management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="group p-6 rounded-2xl bg-white border border-[#0E2015]/10 shadow-sm hover:shadow-xl hover:border-[#FFAE00]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E2015] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {cap.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-[#0E2015] leading-snug">
                    {cap.title}
                  </h3>
                  <p className="font-inter text-xs text-[#0E2015]/70 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0E2015]/10">
                  <button
                    type="button"
                    onClick={() => scrollToSection('Contactform')}
                    className="text-xs font-montserrat font-bold text-[#1D4224] hover:text-[#0E2015] flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3 h-3 text-[#FFAE00]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          05. OUR INDUSTRY EXPERTISE GRID
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-y border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-3 mb-14">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
              Specialized Vertical Experience
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight uppercase">
              Our Industry Expertise
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#0E2015]/75 max-w-2xl mx-auto leading-relaxed">
              We excel in developing online stores tailored to a wide range of industries. Our expertise ensures customized solutions that drive success across diverse business sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-[#FAF9F5] border border-[#0E2015]/10 hover:bg-[#EFE8E0] hover:border-[#1D4224]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-white p-2.5 flex items-center justify-center border border-[#0E2015]/10 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <img
                    src={ind.icon}
                    alt={ind.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm sm:text-base text-[#0E2015] leading-snug">
                    {ind.name}
                  </h4>
                  <span className="text-[11px] font-inter text-[#0E2015]/60">Custom Conversion Funnel</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          06. MOBILE UI/UX SHOWCASE CAROUSEL (MOCKUPS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#1D4224] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="font-montserrat font-bold text-xs sm:text-sm text-[#FFAE00] tracking-widest uppercase">
                Website Design &amp; Development
              </span>
              <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                Showcase Mockup
              </h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollMockups('left')}
                aria-label="Previous mockup"
                className="w-11 h-11 rounded-full bg-[#0E2015] hover:bg-[#07130A] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer border border-[#FFAE00]/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollMockups('right')}
                aria-label="Next mockup"
                className="w-11 h-11 rounded-full bg-[#0E2015] hover:bg-[#07130A] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer border border-[#FFAE00]/30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrolling Mockup Track */}
          <div
            ref={mockupScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MOCKUP_SLIDES.map((slide) => (
              <div
                key={slide.id}
                className="flex-none w-[200px] sm:w-[240px] md:w-[270px] snap-center group cursor-pointer"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0E2015] border border-white/15 shadow-xl group-hover:shadow-2xl group-hover:border-[#FFAE00]/60 transition-all duration-300">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0E2015] via-[#0E2015]/60 to-transparent p-3 text-center">
                    <span className="font-montserrat font-bold text-xs text-white drop-shadow">
                      {slide.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center sm:hidden">
            <span className="font-inter text-xs text-white/70">← Swipe to explore mobile designs →</span>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          07. BACK-END DEVELOPMENT TECHNOLOGIES (MARQUEE)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-2 mb-12">
            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-widest uppercase">
              Our Programming Language &amp; Architecture
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight uppercase">
              Back End Development
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-13 gap-3 sm:gap-4 items-center">
            {BACKEND_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="group p-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/10 hover:border-[#1D4224]/30 hover:bg-[#EFE8E0] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[75px]"
              >
                <img
                  src={logo.img}
                  alt={`Backend Tech ${logo.id}`}
                  className="max-h-9 w-auto max-w-[70px] object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          08. HIGH-TRAFFIC CONVERSION BANNER (AUTHENTIC COPY & CTAS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D4224] border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-montserrat font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>TZAR DIGITAL MARKETING AGENCY</span>
          </span>

          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            We Can Get Massive Traffic To Your Website
          </h2>

          <p className="font-inter text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our extensive experience allows us to serve businesses of all types and sizes, turning visions into high-converting digital flagships. Based on your ROI expectations and commercial targets, we build web experiences that redefine your brand.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('Contactform')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Get Free Proposal</span>
              <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
            </button>

            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#FFAE00]" />
              <span>Call: {COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
