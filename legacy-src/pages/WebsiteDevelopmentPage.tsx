"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Phone,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShoppingBag,
  Globe,
  Layers,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  Play,
  Pause,
} from 'lucide-react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';
import { COMPANY } from '@/data/company';
import { DotLottieReact, setWasmUrl } from '@lottiefiles/dotlottie-react';

// Configure local WASM URL immediately to prevent remote CDN network waterfall delays
if (typeof window !== 'undefined') {
  setWasmUrl('/assets/lottie/dotlottie-player.wasm');
}

/* ──────────────────────────────────────────────────────────────────────────
   01. AUTHENTIC DATA (JARGON-FREE, FROM LIVE & OLD TZAR CODEBASE)
────────────────────────────────────────────────────────────────────────── */

// 1. Transparent Pricing Packages (from webpacksdata.js)
interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  timeline: string;
  price: string;
  iconImg: string;
  primaryFeatures: string[];
  additionalFeatures: string[];
}

const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'wordpress',
    name: 'WordPress & WooCommerce',
    badge: 'B2B / B2C / D2C',
    timeline: '2 - 3 weeks',
    price: '₹29,999',
    iconImg: '/assets/images/icons/wordpress.png',
    primaryFeatures: [
      'Up to 15 page custom responsive website',
      'Payment gateway setup (Razorpay & 1-click UPI)',
      'Shiprocket automated courier tracking',
      '1 year free maintenance & ongoing support',
    ],
    additionalFeatures: [
      'High-converting homepage & promo banners',
      'Content guidance & professional copy structure',
      '100% mobile-first design across all devices',
      'Interactive lead capture & consultation forms',
      'Google Analytics 4 & Search Console setup',
      'Facebook & Meta Pixel conversion tracking',
      'SEO-friendly site architecture & sitemaps',
      'Comprehensive testing & cross-browser QA',
    ],
  },
  {
    id: 'shopify',
    name: 'Shopify E-Commerce Store',
    badge: 'Flagship Choice',
    isPopular: true,
    timeline: '3 - 4 weeks',
    price: '₹49,999',
    iconImg: '/assets/images/icons/shopify2.png',
    primaryFeatures: [
      'Full Shopify store setup & custom theme styling',
      'Catalog upload for up to 100 products',
      '1-click UPI, cards & net banking checkout',
      '1 year free maintenance & ongoing support',
    ],
    additionalFeatures: [
      'High-converting homepage & product detail banners',
      'Shiprocket automated shipping & label creation',
      'E-commerce SEO structure & Google indexing',
      'Google Analytics 4 & Meta Pixel tracking',
      'Custom domain connection & SSL certification',
      'Discount coupons & abandoned cart recovery',
      'Admin walk-through training to manage orders easily',
      'Full cross-device testing & launch assurance',
    ],
  },
  {
    id: 'nextjs',
    name: 'React.js & Custom Next.js',
    badge: 'Bespoke Web App',
    timeline: '8 - 12 weeks',
    price: '₹79,999',
    iconImg: '/assets/images/icons/nextjs2.png',
    primaryFeatures: [
      'Bespoke tailored UI/UX design & modern code',
      'Customer login & private member portal',
      'Interactive custom forms & booking workflows',
      '1 year free maintenance & full source code ownership',
    ],
    additionalFeatures: [
      'Up to 20 custom web application pages',
      'Product or service setup (Up to 100 items)',
      'Payment gateway integration (Razorpay / Stripe)',
      'Shiprocket or custom API courier integration',
      'Ultra-fast code built for top Google search rankings',
      'Custom domain, cloud hosting & SSL certificate setup',
      'Custom admin dashboard for easy real-time updates',
      'Full ownership of Git repository & source code',
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
    tag: 'D2C Brand Store',
  },
  {
    title: 'Apollo India',
    href: 'https://www.apolloindia.co/',
    gif: '/assets/images/icons/aplloweb.gif',
    category: 'Corporate & Equipment',
    tag: 'Enterprise Catalog',
  },
  {
    title: 'Cabelo Chave',
    href: 'https://cabelochave.com/',
    gif: '/assets/images/icons/cabiloweb.gif',
    category: 'Beauty & Hair Care',
    tag: 'D2C Cosmetics',
  },
  {
    title: 'Mahaarajaa',
    href: 'https://mahaarajaa.life/',
    gif: '/assets/images/icons/mahaarajaweb.gif',
    category: 'Luxury Lifestyle',
    tag: 'Luxury Boutique',
  },
];

// 3. Core Solutions We Build (Curated from websiteDevCards.js & Designway UX)
const CORE_SOLUTIONS = [
  {
    id: 1,
    title: 'E-Commerce online stores',
    subtitle: 'Shopify & WooCommerce platforms',
    desc: 'High-converting digital storefronts built for instant mobile UPI checkouts, fast browsing, and effortless catalog management.',
    pills: ['1-Click UPI & Razorpay', 'Shiprocket Logistics', 'Product Catalogs', 'Cart Recovery'],
    icon: <ShoppingBag className="w-8 h-8 text-[#FFAE00]" />,
    accentBorder: 'border-[#FFAE00]/30 hover:border-[#FFAE00]',
  },
  {
    id: 2,
    title: 'Corporate & business websites',
    subtitle: 'Authority & inbound lead capture',
    desc: 'High-credibility web platforms designed to showcase your services, build brand authority, and turn visitors into qualified inquiries.',
    pills: ['High-Trust UI/UX', 'Inbound Lead Funnel', 'Google SEO Ready', 'SSL & Cloud Security'],
    icon: <Globe className="w-8 h-8 text-[#FFAE00]" />,
    accentBorder: 'border-[#1D4224]/30 hover:border-[#1D4224]',
  },
  {
    id: 3,
    title: 'Custom web apps & portals',
    subtitle: 'Bespoke React.js & Next.js builds',
    desc: 'Tailor-made cloud applications with role-based member logins, real-time client dashboards, and automated business workflows.',
    pills: ['Client Dashboards', 'Custom Logic', 'Database Sync', 'Role-Based Access'],
    icon: <Layers className="w-8 h-8 text-[#FFAE00]" />,
    accentBorder: 'border-[#1D4224]/30 hover:border-[#FFAE00]',
  },
  {
    id: 4,
    title: 'Website redesign & upgrades',
    subtitle: 'Modernization & performance revamp',
    desc: 'Transform outdated legacy websites into fast, modern platforms with zero downtime and 2x higher visitor retention.',
    pills: ['2x Faster Speed', 'Modern UI/UX', 'Mobile-First Revamp', 'Zero Downtime'],
    icon: <Smartphone className="w-8 h-8 text-[#FFAE00]" />,
    accentBorder: 'border-[#FFAE00]/30 hover:border-[#1D4224]',
  },
];

// 4. Industry Verticals (from OurIndustryExpertise.js)
const INDUSTRIES = [
  { name: 'Beauty & cosmetics', icon: '/assets/images/icons/beauty.png', highlight: 'Catalog & Shade Finders' },
  { name: 'Fashion & lifestyle', icon: '/assets/images/icons/fashion.png', highlight: 'Lookbooks & Size Guides' },
  { name: 'Furniture & home décor', icon: '/assets/images/icons/furniture.png', highlight: 'Room Visualizer & AR' },
  { name: 'Food & beverages', icon: '/assets/images/icons/food.png', highlight: 'Subscriptions & Fast Delivery' },
  { name: 'Electronics & gadgets', icon: '/assets/images/icons/mobile.png', highlight: 'Spec Compare & Warranty' },
  { name: 'Health & wellness', icon: '/assets/images/icons/health.png', highlight: 'Dosage Guides & Trust Badges' },
  { name: 'Jewellery & diamonds', icon: '/assets/images/icons/jewellery.png', highlight: 'Luxury Showcase & Certs' },
  { name: 'Baby care & kids', icon: '/assets/images/icons/baby-care.png', highlight: 'Safety First & Bundles' },
  { name: 'Books & stationery', icon: '/assets/images/icons/stationery.png', highlight: 'Quick Search & Multi-Author' },
];

// 5. Mobile Mockup Showcase Slides (from WebDesignMock.js)
const MOCKUP_SLIDES = [
  { id: 1, img: '/assets/images/MobileShowcase/Home/Showcase-01.png', title: 'Brand Flagship Store' },
  { id: 2, img: '/assets/images/MobileShowcase/Home/Showcase-02.png', title: 'Product Catalog View' },
  { id: 3, img: '/assets/images/MobileShowcase/Home/Showcase-03.png', title: 'Interactive Product Detail' },
  { id: 4, img: '/assets/images/MobileShowcase/Home/Showcase-04.png', title: 'Seamless Mobile Checkout' },
  { id: 5, img: '/assets/images/MobileShowcase/Home/Showcase-05.png', title: 'Modern Clean Feed' },
  { id: 6, img: '/assets/images/MobileShowcase/Home/Showcase-06.png', title: 'Dynamic Brand Header' },
  { id: 7, img: '/assets/images/MobileShowcase/Home/Showcase-07.png', title: 'Category Navigation' },
  { id: 8, img: '/assets/images/MobileShowcase/Home/Showcase-08.png', title: 'Mobile Cart Experience' },
  { id: 9, img: '/assets/images/MobileShowcase/Home/Showcase-09.png', title: 'Order Tracking Screen' },
  { id: 10, img: '/assets/images/MobileShowcase/Home/Showcase-10.png', title: 'Customer Profile Page' },
  { id: 11, img: '/assets/images/MobileShowcase/Home/Showcase-11.png', title: 'Filter & Search Grid' },
  { id: 13, img: '/assets/images/MobileShowcase/Home/Showcase-13.png', title: 'Brand Story Showcase' },
  { id: 14, img: '/assets/images/MobileShowcase/Home/Showcase-14.png', title: 'Promotion Grid Screen' },
  { id: 15, img: '/assets/images/MobileShowcase/Home/Showcase-15.png', title: 'Customer Reviews Carousel' },
  { id: 16, img: '/assets/images/MobileShowcase/Home/Showcase-16.png', title: 'Retention & Email Signup' },
  { id: 17, img: '/assets/images/MobileShowcase/Home/Showcase-17.png', title: 'Mobile Footer & FAQs' },
  { id: 18, img: '/assets/images/MobileShowcase/Home/Showcase-18.png', title: 'Fast-Loading Experience' },
];

// 6. Measurable Business Benefits (from BenefitsWD.js)
const BUSINESS_BENEFITS = [
  {
    stat: '+45%',
    statLabel: 'Higher conversion rate',
    title: 'More visitors turned into paying customers',
    desc: 'Clear visual hierarchy, effortless 1-click checkout, and instant mobile load speeds prevent drop-offs and drive higher completed orders.',
    icon: <TrendingUp className="w-7 h-7 text-[#FFAE00]" />,
  },
  {
    stat: '2 - 3 Mo.',
    statLabel: 'Rapid ROI payback',
    title: 'Fast return on your development investment',
    desc: 'Every design decision is tied to tangible business growth. Our clients typically recoup their build costs within 60 to 90 days from increased direct sales.',
    icon: <Zap className="w-7 h-7 text-[#FFAE00]" />,
  },
  {
    stat: '3 - 5x',
    statLabel: 'Customer lifetime value',
    title: 'Repeat orders and long-term retention',
    desc: 'Seamless mobile experiences, automated order tracking, and intuitive account portals turn first-time buyers into loyal brand advocates.',
    icon: <ShoppingBag className="w-7 h-7 text-[#FFAE00]" />,
  },
  {
    stat: '365 Days',
    statLabel: 'Free support included',
    title: 'Zero stress with 1 year free maintenance',
    desc: 'Zero post-launch anxiety. We actively monitor your store, handle platform updates, fix bugs, and provide direct technical help whenever you need it.',
    icon: <ShieldCheck className="w-7 h-7 text-[#FFAE00]" />,
  },
];

// 7. Backend & Modern Tech Stack Logos (from /tech-icons SVGs)
const TECH_STACK_LOGOS = [
  { id: 'nodejs', name: 'Node.js', img: '/tech-icons/nodejs.svg' },
  { id: 'postgresql', name: 'PostgreSQL', img: '/tech-icons/postgresql.svg' },
  { id: 'mongodb', name: 'MongoDB', img: '/tech-icons/mongodb.svg' },
  { id: 'redis', name: 'Redis', img: '/tech-icons/redis.svg' },
  { id: 'nextjs', name: 'Next.js', img: '/tech-icons/nextjs.svg' },
  { id: 'react', name: 'React.js', img: '/tech-icons/react.svg' },
  { id: 'typescript', name: 'TypeScript', img: '/tech-icons/typescript.svg' },
  { id: 'python', name: 'Python', img: '/tech-icons/python.svg' },
  { id: 'docker', name: 'Docker', img: '/tech-icons/docker.svg' },
  { id: 'firebase', name: 'Firebase', img: '/tech-icons/firebase.svg' },
  { id: 'tailwindcss', name: 'Tailwind CSS', img: '/tech-icons/tailwindcss.svg' },
  { id: 'flutter', name: 'Flutter', img: '/tech-icons/flutter.svg' },
  { id: 'kotlin', name: 'Kotlin', img: '/tech-icons/kotlin.svg' },
  { id: 'swift', name: 'Swift', img: '/tech-icons/swift.svg' },
  { id: 'android', name: 'Android', img: '/tech-icons/android.svg' },
  { id: 'apple', name: 'Apple iOS', img: '/tech-icons/apple.svg' },
  { id: 'expo', name: 'Expo', img: '/tech-icons/expo.svg' },
];


// 8. Plain-English FAQs (from faqdevdata.js)
const FAQS = [
  {
    id: 1,
    question: 'Which platform should I choose: Shopify, WordPress, or Custom Next.js?',
    answer:
      'If you sell physical products and want an easy, stress-free store with automated shipping and payments, Shopify is the ideal flagship choice. If you want content freedom, blogs, or a flexible corporate catalog with WooCommerce, WordPress is great and cost-effective. For custom web applications, member portals, or high-scale custom startups, Custom Next.js offers total tailor-made flexibility.',
  },
  {
    id: 2,
    question: 'Will I be able to update products, banners, and prices myself without coding?',
    answer:
      'Yes, 100%. All our websites are built with user-friendly admin dashboards. You will receive extended walk-through training from our team on how to add new products, edit descriptions, adjust prices, and manage customer orders with zero coding required.',
  },
  {
    id: 3,
    question: 'Are payment gateways and courier shipping included in the setup?',
    answer:
      'Yes. Every package includes full integration for online payment gateways (Razorpay, Cashfree, UPI, Credit/Debit cards, Net Banking) and courier logistics (Shiprocket automated shipping label generation and live customer tracking).',
  },
  {
    id: 4,
    question: 'How long does it take from kickoff to website launch?',
    answer:
      'A standard WordPress website takes approximately 2 to 3 weeks. A flagship Shopify e-commerce store takes 3 to 4 weeks. Custom Next.js web platforms generally take 8 to 12 weeks depending on custom feature requirements.',
  },
  {
    id: 5,
    question: 'What kind of support is included after the website goes live?',
    answer:
      'Every project includes 1 year of free maintenance and support. This covers regular technical checkups, security updates, bug fixes, and direct assistance whenever you have questions or need guidance.',
  },
  {
    id: 6,
    question: 'Do I own 100% of my website, domain, and data?',
    answer:
      'Yes. You maintain complete 100% ownership of your domain name, website files, database, and all business data. We set everything up directly in your own accounts with zero lock-in.',
  },
];

// Form Service Options
const WEB_FORM_SERVICES = [
  'Shopify E-Commerce Store',
  'WordPress & WooCommerce',
  'React.js & Next.js Web App',
  'Website Redesign & Upgrades',
  'Custom Business & Corporate Site',
];

/* ──────────────────────────────────────────────────────────────────────────
   02. COMPONENT: WEBSITE DEVELOPMENT SERVICES PAGE
────────────────────────────────────────────────────────────────────────── */
export const WebsiteDevelopmentPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [expandedPackages, setExpandedPackages] = useState<Record<string, boolean>>({});
  const [isMockupMarqueePaused, setIsMockupMarqueePaused] = useState(false);
  const mockupMarqueeRef = useRef<HTMLDivElement>(null);

  // Typewriter animation for hero heading
  const heroText = 'Powerup your online presence';
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < heroText.length) {
        setDisplayedText(heroText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        // Blink cursor a few times then hide
        setTimeout(() => setShowCursor(false), 2500);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    if (!showCursor) { setCursorVisible(false); return; }
    const blink = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(blink);
  }, [showCursor]);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const togglePackageExpand = (id: string) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#EAF1EB] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER WITH CODE VIEWER & STANDARDIZED FORM
          Flush bottom (pb-0) with smooth wave transition into Section 02.
      ────────────────────────────────────────────────────────────────── */}
      <section 
        className="relative w-full min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309]"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
        }}
      >
        {/* Check Box Grid Texture into Hero Background (Zero Yellow Glow, Exclusively Home Page Hero Green) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* ── Left Column: Hero Heading + Lottie Web Development Art ── */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start w-full">
              {/* Hero Heading with Typewriter Animation */}
              <div className="w-full text-center lg:text-left mb-6 sm:mb-8">
                <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  <span>{displayedText}</span>
                  {showCursor && (
                    <span className={`inline-block w-0.75 h-[1em] bg-[#FFAE00] ml-1 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
                  )}
                </h1>
                <p className="mt-3 font-montserrat font-semibold text-sm sm:text-base lg:text-lg text-[#FFAE00] tracking-widest uppercase">
                  Shopify &nbsp;|&nbsp; Wordpress &nbsp;|&nbsp; React Next.Js
                </p>
              </div>

              {/* Lottie Web Development Art – spacing above and overflow visible */}
              <div className="w-full max-w-115 sm:max-w-135 lg:max-w-150 pt-5 sm:pt-7 flex items-center justify-center overflow-visible">
                <DotLottieReact
                  src="/assets/lottie/web-dev.json"
                  loop
                  autoplay
                  className="w-full h-auto overflow-visible"
                />
              </div>
            </div>

            {/* ── Right Column: Lead Consultation Form ── */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full mt-4 lg:mt-0">
              <div className="w-full max-w-md">
                <LeadCaptureForm
                  title="Web Project Consultation"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Shopify E-Commerce Store"
                  serviceOptions={WEB_FORM_SERVICES}
                  noBorder={true}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Smooth Organic Wave Transition: Dark Spruce to Subtle Green Tint ── */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-px">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-24 block pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40 L1440,100 L0,100 Z"
              fill="#EAF1EB"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. WEBSITE DEVELOPMENT PACKAGES & PRICING
          Modern, compact, interactive pricing cards with expandable details.
      ────────────────────────────────────────────────────────────────── */}
      <section id="packages-pricing" className="py-14 sm:py-18 lg:py-24 bg-[#EAF1EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Website packages &amp; pricing
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-2xl mx-auto leading-relaxed">
              Transparent fixed-price packages with zero hidden fees. Includes payment gateway setup, Shiprocket shipping automation, and 1 year of free ongoing support.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {PRICING_PACKAGES.map((pkg) => {
              const isExpanded = !!expandedPackages[pkg.id];
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                    pkg.isPopular
                      ? 'bg-[#0E2015] text-white shadow-2xl border-2 border-[#FFAE00] lg:-translate-y-2'
                      : 'bg-white text-[#0E2015] shadow-lg border border-[#0E2015]/10 hover:shadow-xl hover:border-[#1D4224]/30'
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFAE00] text-[#0E2015] font-montserrat font-bold text-xs shadow-md whitespace-nowrap">
                      Most Popular Choice
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F2F7F3] p-2 flex items-center justify-center border border-[#0E2015]/10 shadow-sm shrink-0">
                      <img
                        src={pkg.iconImg}
                        alt={pkg.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span
                      className={`text-xs font-montserrat font-semibold px-3 py-1 rounded-full ${
                        pkg.isPopular
                          ? 'bg-white/10 text-[#FFAE00] border border-[#FFAE00]/30'
                          : 'bg-[#1D4224]/10 text-[#1D4224]'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl sm:text-2xl leading-tight mb-2">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-inter mb-5">
                    <Clock className="w-4 h-4 text-[#FFAE00]" />
                    <span className={pkg.isPopular ? 'text-white/80' : 'text-[#142C1D]/80'}>
                      Estimated: {pkg.timeline}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="py-4 my-1 border-y border-current/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-montserrat font-black text-3xl sm:text-4xl text-[#FFAE00]">
                        {pkg.price}
                      </span>
                      <span className={`text-xs font-medium ${pkg.isPopular ? 'text-white/70' : 'text-[#142C1D]/70'}`}>
                        + GST • Fixed project fee
                      </span>
                    </div>
                  </div>

                  {/* Key Highlights (Always Visible) */}
                  <div className="py-4">
                    <p className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-3.5 ${
                      pkg.isPopular ? 'text-[#FFAE00]' : 'text-[#1D4224]'
                    }`}>
                      Core Deliverables:
                    </p>
                    <ul className="space-y-2.5 text-sm font-inter">
                      {pkg.primaryFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-snug">
                          <Check className="w-4 h-4 text-[#FFAE00] shrink-0 mt-0.5" />
                          <span className={pkg.isPopular ? 'text-white/90 font-medium' : 'text-[#0E2015] font-medium'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Additional Deliverables */}
                    {isExpanded && (
                      <div className="pt-3 mt-3 border-t border-current/10 animate-fadeIn">
                        <p className={`text-xs font-montserrat font-semibold mb-2.5 ${
                          pkg.isPopular ? 'text-white/80' : 'text-[#142C1D]/80'
                        }`}>
                          Also Included:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm font-inter">
                          {pkg.additionalFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-snug">
                              <Check className="w-3.5 h-3.5 text-[#FFAE00] shrink-0 mt-0.5" />
                              <span className={pkg.isPopular ? 'text-white/80' : 'text-[#142C1D]/80'}>
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Interactive Toggle Button */}
                    <button
                      type="button"
                      onClick={() => togglePackageExpand(pkg.id)}
                      className={`mt-4 inline-flex items-center gap-1.5 text-xs font-montserrat font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                        pkg.isPopular
                          ? 'bg-white/10 text-[#FFAE00] hover:bg-white/20'
                          : 'bg-[#1D4224]/10 text-[#1D4224] hover:bg-[#1D4224]/20'
                      }`}
                    >
                      <span>{isExpanded ? 'Hide detailed checklist' : `+ View all ${pkg.primaryFeatures.length + pkg.additionalFeatures.length} inclusions`}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-5 mt-2 border-t border-current/10 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => scrollToSection('Contactform')}
                      className={`w-full py-3.5 px-6 rounded-full font-montserrat font-bold text-xs transition-all shadow-md cursor-pointer ${
                        pkg.isPopular
                          ? 'bg-[#1D4224] text-white hover:bg-[#25552f] border border-[#FFAE00]/40 hover:shadow-xl'
                          : 'bg-[#0E2015] text-white hover:bg-[#1D4224]'
                      }`}
                    >
                      Select Plan &amp; Consult
                    </button>

                    <a
                      href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                      className={`w-full py-2.5 px-6 rounded-full font-montserrat font-medium text-xs text-center transition-all border ${
                        pkg.isPopular
                          ? 'border-white/20 text-white/90 hover:bg-white/10'
                          : 'border-[#0E2015]/20 text-[#0E2015] hover:bg-[#F2F7F3]'
                      }`}
                    >
                      Call: {COMPANY.phone}
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. BUILT IN SHOPIFY - LIVE STORES SHOWCASE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 lg:py-24 bg-white relative border-t border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Built in Shopify
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-xl mx-auto leading-relaxed">
              Explore live e-commerce stores designed, customized, and launched by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOPIFY_STORES.map((store, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-3xl overflow-hidden bg-[#F2F7F3] border border-[#0E2015]/10 shadow-sm hover:shadow-xl hover:border-[#1D4224]/30 transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#0E2015]">
                  <img
                    src={store.gif}
                    alt={store.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-[#1D4224] text-white font-montserrat font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <span>Visit Live Store</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FFAE00]" />
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-montserrat font-bold text-[#1D4224]">
                        {store.category}
                      </span>
                      <span className="text-[11px] font-inter font-medium text-[#142C1D]/60 bg-white px-2 py-0.5 rounded-full border border-[#0E2015]/10">
                        {store.tag}
                      </span>
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-[#0E2015]">
                      {store.title}
                    </h4>
                  </div>

                  <a
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-[#1D4224] hover:text-[#0E2015] transition-colors"
                  >
                    <span>View Live Website</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FFAE00]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. WHAT WE BUILD FOR YOUR BUSINESS
          Visual cards with 64px pedestals, concise readable copy, and feature pills.
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#EAF1EB] relative border-t border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              What we build for your business
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-2xl mx-auto leading-relaxed">
              Every website is engineered for clean aesthetics, effortless catalog management, and seamless payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className={`group p-7 rounded-3xl bg-white border border-[#0E2015]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${sol.accentBorder}`}
              >
                <div>
                  {/* Large Visual Pedestal */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0E2015] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-5">
                    {sol.icon}
                  </div>

                  <span className="text-xs font-montserrat font-bold text-[#1D4224] block mb-1">
                    {sol.subtitle}
                  </span>

                  <h3 className="font-montserrat font-bold text-xl text-[#0E2015] leading-snug mb-3">
                    {sol.title}
                  </h3>

                  <p className="font-inter text-sm text-[#142C1D]/85 leading-relaxed mb-5">
                    {sol.desc}
                  </p>

                  {/* Visual Deliverable Feature Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sol.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="inline-flex items-center text-xs font-inter font-medium px-2.5 py-1 rounded-full bg-[#F2F7F3] border border-[#0E2015]/10 text-[#0E2015]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0E2015]/10">
                  <button
                    type="button"
                    onClick={() => scrollToSection('Contactform')}
                    className="text-xs font-montserrat font-bold text-[#1D4224] hover:text-[#0E2015] flex items-center gap-1.5 group-hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Inquire About This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFAE00]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          05. OUR INDUSTRY EXPERTISE GRID
          Large 80px pedestals with crisp icons and readable copy.
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 lg:py-24 bg-white relative border-t border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Our industry expertise
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-2xl mx-auto leading-relaxed">
              We have extensive experience building websites across consumer goods, retail, corporate, and lifestyle verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="group p-6 rounded-3xl bg-[#F2F7F3] border border-[#0E2015]/10 hover:bg-white hover:border-[#1D4224]/30 hover:shadow-lg transition-all duration-300 flex items-center gap-5"
              >
                {/* Generous 76px Icon Pedestal */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white p-3 flex items-center justify-center border border-[#0E2015]/10 shrink-0 shadow-sm group-hover:scale-105 group-hover:border-[#FFAE00]/40 transition-all">
                  <img
                    src={ind.icon}
                    alt={ind.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015] leading-snug">
                    {ind.name}
                  </h4>
                  <span className="text-xs sm:text-sm font-inter text-[#142C1D]/80 block mt-1">
                    {ind.highlight}
                  </span>
                  <span className="inline-block mt-2 text-[11px] font-montserrat font-semibold px-2.5 py-0.5 rounded-full bg-[#1D4224]/10 text-[#1D4224]">
                    Custom Funnel &amp; Architecture
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          06. MOBILE UI/UX SHOWCASE CAROUSEL (SMOOTH AUTO SLIDER)
          Smooth infinite auto-scrolling marquee with pause on hover.
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#EAF1EB] relative overflow-hidden border-t border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div className="space-y-3">
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
                Mobile showcase
              </h2>
              <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-xl leading-relaxed">
                Clean mobile experiences engineered for fluid touch navigation and easy checkouts.
              </p>
            </div>

            {/* Auto-Scroll Indicator / Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMockupMarqueePaused(!isMockupMarqueePaused)}
                aria-label={isMockupMarqueePaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E2015] text-[#FFAE00] hover:bg-[#1D4224] font-montserrat font-semibold text-xs shadow-md border border-[#FFAE00]/30 transition-all cursor-pointer"
              >
                {isMockupMarqueePaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume Auto-Scroll</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause Auto-Scroll</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Infinite Smooth Auto-Scrolling Marquee Track */}
          <div
            ref={mockupMarqueeRef}
            className="relative w-full overflow-hidden group py-4"
            onMouseEnter={() => setIsMockupMarqueePaused(true)}
            onMouseLeave={() => setIsMockupMarqueePaused(false)}
          >
            {/* Ambient Fade Edge Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-linear-to-r from-[#EAF1EB] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-linear-to-l from-[#EAF1EB] to-transparent z-10 pointer-events-none" />

            <div
              className="flex w-max animate-marquee-left"
              style={{
                animationDuration: '45s',
                animationPlayState: isMockupMarqueePaused ? 'paused' : 'running',
              }}
            >
              {/* Track 1 */}
              <div className="flex items-center gap-5 sm:gap-6 px-3">
                {MOCKUP_SLIDES.map((slide) => (
                  <div
                    key={`m1-${slide.id}`}
                    className="flex-none w-50 sm:w-57.5 md:w-62.5 group/item cursor-pointer"
                  >
                    <div className="rounded-3xl overflow-hidden bg-white border border-[#0E2015]/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-2">
                      <div className="relative aspect-9/18 overflow-hidden rounded-2xl bg-neutral-900">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 text-center bg-white">
                        <span className="font-montserrat font-bold text-xs sm:text-sm text-[#0E2015] group-hover/item:text-[#1D4224] transition-colors block truncate">
                          {slide.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
              <div className="flex items-center gap-5 sm:gap-6 px-3" aria-hidden="true">
                {MOCKUP_SLIDES.map((slide) => (
                  <div
                    key={`m2-${slide.id}`}
                    className="flex-none w-50 sm:w-57.5 md:w-62.5 group/item cursor-pointer"
                  >
                    <div className="rounded-3xl overflow-hidden bg-white border border-[#0E2015]/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-2">
                      <div className="relative aspect-9/18 overflow-hidden rounded-2xl bg-neutral-900">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 text-center bg-white">
                        <span className="font-montserrat font-bold text-xs sm:text-sm text-[#0E2015] group-hover/item:text-[#1D4224] transition-colors block truncate">
                          {slide.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="font-inter text-xs text-[#142C1D]/70">
              Hover to pause • Smooth auto-sliding 18 mobile showcase screens
            </span>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          07. MEASURABLE BUSINESS OUTCOMES (FROM BenefitsWD.js)
          Bold stat metrics, 20px headings, and readable 15px body copy.
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 lg:py-24 bg-white relative border-t border-[#0E2015]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Benefits for your business
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-xl mx-auto leading-relaxed">
              We design websites focused on measurable business outcomes, not vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_BENEFITS.map((b, i) => (
              <div
                key={i}
                className="p-7 sm:p-8 rounded-3xl bg-[#F2F7F3] border border-[#0E2015]/10 hover:border-[#FFAE00]/60 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0E2015] flex items-center justify-center shadow-md mb-5">
                    {b.icon}
                  </div>
                  
                  <span className="font-montserrat font-black text-3xl sm:text-4xl text-[#FFAE00] tracking-tight block mb-1">
                    {b.stat}
                  </span>
                  
                  <span className="font-montserrat font-bold text-xs text-[#1D4224] uppercase tracking-wider block mb-3">
                    {b.statLabel}
                  </span>

                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#0E2015] leading-snug mb-3">
                    {b.title}
                  </h3>

                  <p className="font-inter text-sm sm:text-base text-[#142C1D]/85 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          08. BACK-END DEVELOPMENT & SUPPORTED PLATFORMS
          Continuous auto-scrolling logo marquee with larger logos & zero empty space.
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#EAF1EB] relative border-t border-[#0E2015]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-3 mb-10 sm:mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Back-end development &amp; integrations
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-xl mx-auto leading-relaxed">
              Fully integrated with leading payment gateways, courier shipping providers, and modern database stacks.
            </p>
          </div>

          {/* Continuous Auto-Scrolling Logo Marquee */}
          <div className="relative w-full overflow-hidden group py-4">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-linear-to-r from-[#EAF1EB] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-linear-to-l from-[#EAF1EB] to-transparent z-10 pointer-events-none" />

            <div
              className="flex w-max animate-marquee-left hover:[animation-play-state:paused]"
              style={{ animationDuration: '32s' }}
            >
              {/* Track 1 */}
              <div className="flex items-center gap-4 sm:gap-6 px-3">
                {TECH_STACK_LOGOS.map((tech) => (
                  <div
                    key={`tech1-${tech.id}`}
                    className="inline-flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-[#0E2015]/10 shadow-xs hover:border-[#FFAE00]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-w-46.25 sm:min-w-52.5 h-21 sm:h-22.5 group/item cursor-default"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015] whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Track 2 (Duplicate for Smooth Infinite Loop) */}
              <div className="flex items-center gap-4 sm:gap-6 px-3" aria-hidden="true">
                {TECH_STACK_LOGOS.map((tech) => (
                  <div
                    key={`tech2-${tech.id}`}
                    className="inline-flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-[#0E2015]/10 shadow-xs hover:border-[#FFAE00]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-w-46.25 sm:min-w-52.5 h-21 sm:h-22.5 group/item cursor-default"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015] whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integration Category Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-montserrat font-semibold">
            <span className="px-4 py-2 rounded-full bg-white border border-[#0E2015]/10 text-[#0E2015] shadow-xs">
              Backend &amp; APIs: Node.js • Python • Firebase • Next.js
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-[#0E2015]/10 text-[#0E2015] shadow-xs">
              Databases: PostgreSQL • MongoDB • Redis
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-[#0E2015]/10 text-[#0E2015] shadow-xs">
              Frontend &amp; Mobile: React • TypeScript • Tailwind • Flutter • Swift
            </span>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          09. FREQUENTLY ASKED QUESTIONS (ACCORDION)
          Flush bottom (pb-0) with smooth wave transition into Closing Banner.
      ────────────────────────────────────────────────────────────────── */}
      <section className="pt-14 sm:pt-18 lg:pt-24 pb-0 bg-white relative border-t border-[#0E2015]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-24">
          
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Frequently asked questions
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#142C1D]/85 max-w-xl mx-auto">
              Everything you need to know about our web development process, pricing, and support.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#F2F7F3] border-[#1D4224]/40 shadow-sm'
                      : 'bg-white border-[#0E2015]/10 hover:border-[#1D4224]/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#1D4224] text-white' : 'bg-[#EAF1EB] text-[#0E2015]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base font-inter text-[#142C1D]/90 leading-relaxed border-t border-[#0E2015]/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ── Smooth Organic Wave Transition: Crisp White to Dark Spruce ── */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-px">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-24 block pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40 L1440,100 L0,100 Z"
              fill="#0E2015"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          10. CLOSING BANNER (CTAS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready to build a high-converting website?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Turn your brand vision into an online sales engine. Let our specialists build you a clean, mobile-first website complete with payment gateways and 1 year of free ongoing support.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('Contactform')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Get Free Project Proposal</span>
              <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
            </button>

            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-all border border-white/20"
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
