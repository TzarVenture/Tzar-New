"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Phone,
  Check,
  ChevronDown,
  Clock,
} from 'lucide-react';
import { ConsistentCTA } from '@/app/components/ui/ConsistentCTA';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';
import { LazyLoopVideo } from '@/legacy-src/components/ui/LazyLoopVideo';
import { COMPANY } from '@/data/company';
import { WEB_CASE_STUDIES } from '@/app/portfolio/caseStudies';
import { WaveHero, DarkBackdrop, BrowserFrame, TechMark, WAVE_CURVE } from "@/app/components/brand/BrandUI";
import { DARK_GRADIENT } from "@/app/components/brand/theme";
import { CardIllustration, IndustryArt, type IllustrationName, type IndustryName } from "@/app/components/brand/Illustrations";


/* ──────────────────────────────────────────────────────────────────────────
   01. AUTHENTIC DATA (JARGON-FREE, FROM LIVE & OLD TZAR CODEBASE)
────────────────────────────────────────────────────────────────────────── */

// 1. Transparent Pricing Packages (from webpacksdata.js)
interface PricingPackage {
  id: string;
  name: string;
  fit: string;
  isPopular?: boolean;
  timeline: string;
  price: string;
  mark: string;
  primaryFeatures: string[];
  additionalFeatures: string[];
}

const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'wordpress',
    name: 'WordPress & WooCommerce',
    fit: 'Content sites and WooCommerce stores.',
    timeline: '2 - 3 weeks',
    price: '₹29,999',
    mark: 'WordPress',
    primaryFeatures: [
      'Up to 15 custom pages',
      'Razorpay and UPI payments',
      'Shiprocket shipping and tracking',
      '1 year of free support',
    ],
    additionalFeatures: [
      'Homepage and offer banners',
      'Help with content and page structure',
      'Designed for phones first',
      'Enquiry and contact forms',
      'Google Analytics and Search Console',
      'Meta Pixel tracking',
      'SEO-ready structure and sitemap',
      'Tested on all major browsers',
    ],
  },
  {
    id: 'nextjs',
    name: 'React & Next.js',
    fit: 'Custom sites and web apps, fully yours.',
    isPopular: true,
    timeline: '8 - 12 weeks',
    price: '₹79,999',
    mark: 'Next.js',
    primaryFeatures: [
      'Custom design, built in Next.js',
      'Customer login and member area',
      'Custom forms and booking flows',
      '1 year of free support',
    ],
    additionalFeatures: [
      'Up to 20 pages',
      'Up to 100 products or services',
      'Razorpay or Stripe payments',
      'Shiprocket or your courier\'s API',
      'Fast pages, built for search',
      'Domain, hosting and SSL setup',
      'Admin dashboard to update content',
      'You own the code and repository',
    ],
  },
  {
    id: 'shopify',
    name: 'Shopify store',
    fit: 'For brands selling products online.',
    timeline: '3 - 4 weeks',
    price: '₹49,999',
    mark: 'Shopify',
    primaryFeatures: [
      'Shopify setup with a custom theme',
      'Up to 100 products uploaded',
      'UPI, card and net banking checkout',
      '1 year of free support',
    ],
    additionalFeatures: [
      'Homepage and product banners',
      'Shiprocket shipping and labels',
      'Store SEO and Google indexing',
      'Google Analytics and Meta Pixel',
      'Domain and SSL setup',
      'Coupons and abandoned cart emails',
      'Training to manage your orders',
      'Tested on phones, tablets and desktops',
    ],
  },
];

// 2. Built in Shopify - Live Store Showcase (from WebsiteShow.js)
const SHOPIFY_STORES = [
  {
    title: 'AllThingsPriti',
    href: 'https://allthingspriti.com/',
    // Was a atpshopweb.gif (21–38 MB); now an equivalent looping MP4 + first-frame poster.
    video: '/optimized/assets/images/icons/atpshopweb.mp4',
    poster: '/optimized/assets/images/icons/atpshopweb-poster.webp',
    category: 'Fashion & Apparel',
    tag: 'D2C Brand Store',
  },
  {
    title: 'Apollo India',
    href: 'https://www.apolloindia.co/',
    // Was a aplloweb.gif (21–38 MB); now an equivalent looping MP4 + first-frame poster.
    video: '/optimized/assets/images/icons/aplloweb.mp4',
    poster: '/optimized/assets/images/icons/aplloweb-poster.webp',
    category: 'Corporate & Equipment',
    tag: 'Enterprise Catalog',
  },
  {
    title: 'Cabelo Chave',
    href: 'https://cabelochave.com/',
    // Was a cabiloweb.gif (21–38 MB); now an equivalent looping MP4 + first-frame poster.
    video: '/optimized/assets/images/icons/cabiloweb.mp4',
    poster: '/optimized/assets/images/icons/cabiloweb-poster.webp',
    category: 'Beauty & Hair Care',
    tag: 'D2C Cosmetics',
  },
  {
    title: 'Mahaarajaa',
    href: 'https://mahaarajaa.life/',
    // Was a mahaarajaweb.gif (21–38 MB); now an equivalent looping MP4 + first-frame poster.
    video: '/optimized/assets/images/icons/mahaarajaweb.mp4',
    poster: '/optimized/assets/images/icons/mahaarajaweb-poster.webp',
    category: 'Luxury Lifestyle',
    tag: 'Luxury Boutique',
  },
];

// 3. What we build (cards carry an animated illustration)
const CORE_SOLUTIONS: { id: number; title: string; desc: string; art: IllustrationName }[] = [
  {
    id: 1,
    title: 'Online stores',
    desc: 'Shopify and WooCommerce stores with UPI checkout, shipping and an easy catalogue.',
    art: 'store',
  },
  {
    id: 2,
    title: 'Business websites',
    desc: 'Clear, fast company sites that explain what you do and bring in enquiries.',
    art: 'wordpress',
  },
  {
    id: 3,
    title: 'Web apps and portals',
    desc: 'Custom Next.js builds with logins, dashboards and your own workflows.',
    art: 'webapp',
  },
  {
    id: 4,
    title: 'Redesigns',
    desc: 'Move an old site to a faster, modern build without taking it offline.',
    art: 'design',
  },
];

// 4. Industry Verticals (from OurIndustryExpertise.js)
const INDUSTRIES = [
  { name: 'Beauty & cosmetics', art: 'beauty' as IndustryName, highlight: 'Catalogues and shade finders' },
  { name: 'Fashion & lifestyle', art: 'fashion' as IndustryName, highlight: 'Lookbooks and size guides' },
  { name: 'Furniture & home décor', art: 'home' as IndustryName, highlight: 'Room visualisers and AR' },
  { name: 'Food & beverages', art: 'food' as IndustryName, highlight: 'Subscriptions and fast delivery' },
  { name: 'Electronics & gadgets', art: 'electronics' as IndustryName, highlight: 'Spec comparison and warranty' },
  { name: 'Health & wellness', art: 'health' as IndustryName, highlight: 'Dosage guides and trust signals' },
  { name: 'Jewellery & diamonds', art: 'jewellery' as IndustryName, highlight: 'Luxury showcases and certificates' },
  { name: 'Baby care & kids', art: 'kids' as IndustryName, highlight: 'Safety details and bundles' },
  { name: 'Books & stationery', art: 'books' as IndustryName, highlight: 'Fast search across authors' },
];

// 5. Mobile Mockup Showcase Slides (from WebDesignMock.js)
const MOCKUP_SLIDES = [
  { id: 1, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-01.webp', title: 'Brand Flagship Store' },
  { id: 2, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-02.webp', title: 'Product Catalog View' },
  { id: 3, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-03.webp', title: 'Interactive Product Detail' },
  { id: 4, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-04.webp', title: 'Seamless Mobile Checkout' },
  { id: 5, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-05.webp', title: 'Modern Clean Feed' },
  { id: 6, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-06.webp', title: 'Dynamic Brand Header' },
  { id: 7, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-07.webp', title: 'Category Navigation' },
  { id: 8, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-08.webp', title: 'Mobile Cart Experience' },
  { id: 9, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-09.webp', title: 'Order Tracking Screen' },
  { id: 10, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-10.webp', title: 'Customer Profile Page' },
  { id: 11, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-11.webp', title: 'Filter & Search Grid' },
  { id: 13, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-13.webp', title: 'Brand Story Showcase' },
  { id: 14, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-14.webp', title: 'Promotion Grid Screen' },
  { id: 15, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-15.webp', title: 'Customer Reviews Carousel' },
  { id: 16, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-16.webp', title: 'Retention & Email Signup' },
  { id: 17, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-17.webp', title: 'Mobile Footer & FAQs' },
  { id: 18, img: '/optimized/assets/images/MobileShowcase/Home/Showcase-18.webp', title: 'Fast-Loading Experience' },
];

// 6. Measurable Business Benefits (from BenefitsWD.js)
const BUSINESS_BENEFITS = [
  {
    stat: '+45%',
    art: 'conversion' as IndustryName,
    statLabel: 'Higher conversion rate',
    desc: 'Clear pages, fast mobile loads and one-tap checkout mean fewer drop-offs.',
  },
  {
    stat: '2–3 mo',
    art: 'payback' as IndustryName,
    statLabel: 'Typical payback',
    desc: 'Most clients recover the build cost within 60 to 90 days of launch.',
  },
  {
    stat: '3–5x',
    art: 'repeat' as IndustryName,
    statLabel: 'Customer lifetime value',
    desc: 'Order tracking and simple accounts bring first-time buyers back.',
  },
  {
    stat: '1 year',
    art: 'support' as IndustryName,
    statLabel: 'Free support included',
    desc: 'Updates, fixes and help from the team that built it, for a full year.',
  },
];

// 7. Stack ticker: two rows moving in opposite directions
const STACK_ROWS: string[][] = [
  ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify', 'WordPress', 'WooCommerce', 'Razorpay', 'Stripe'],
  ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Docker', 'Flutter', 'Kotlin', 'Swift', 'Android', 'iOS', 'Expo'],
];

// 8. Plain-English FAQs (from faqdevdata.js)
const FAQS = [
  {
    id: 1,
    question: 'Shopify, WordPress or Next.js: which should I pick?',
    answer:
      'Shopify if you sell products and want payments and shipping handled for you. WordPress if content matters most, or for a simple WooCommerce catalogue. Next.js for web apps, member areas or anything that needs its own logic.',
  },
  {
    id: 2,
    question: 'Can I update products, banners and prices myself?',
    answer:
      'Yes. Every site has an admin panel, and we train your team to add products, edit pages, change prices and manage orders. No code needed.',
  },
  {
    id: 3,
    question: 'Are payments and shipping included?',
    answer:
      'Yes. Every package sets up online payments (Razorpay, Cashfree, UPI, cards and net banking) and Shiprocket shipping with labels and live tracking.',
  },
  {
    id: 4,
    question: 'How long does it take?',
    answer:
      'WordPress takes 2 to 3 weeks and Shopify 3 to 4 weeks. Custom Next.js builds take 8 to 12 weeks, depending on features.',
  },
  {
    id: 5,
    question: 'What support do I get after launch?',
    answer:
      'A year of free support: updates, security and bug fixes, and help whenever you need it.',
  },
  {
    id: 6,
    question: 'Do I own my website and data?',
    answer:
      'Yes. The domain, code, database and data are yours. We set everything up in your own accounts, so you\'re never locked in.',
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
   Hero stays as designed; the body sits on the portfolio's dark backdrop.
────────────────────────────────────────────────────────────────────────── */
const H2 = 'font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.08] text-white';
const LEAD = 'text-base sm:text-lg text-[#B6F8DD] max-w-md leading-relaxed';

/* Plan colours: header, the darker wave layer behind it, header text, secondary text, tick colour, body. */
const PLAN_TONES: Record<string, { head: string; back: string; ink: string; sub: string; accent: string; body: string }> = {
  wordpress: { head: "#244A2C", back: "#1A3820", ink: "#FFFFFF", sub: "#B6F8DD", accent: "#B6F8DD", body: "#0C1F12" },
  nextjs: { head: "#FFAE00", back: "#D99200", ink: "#0E2015", sub: "#3B2A00", accent: "#FFAE00", body: "#0E2015" },
  shopify: { head: "#B6F8DD", back: "#8ED9BA", ink: "#0E2015", sub: "#1D4224", accent: "#B6F8DD", body: "#0C1F12" },
};

/** Counts a price like "₹79,999" up from zero the first time it scrolls into view. */
function CountUpPrice({ value, className = '' }: { value: string; className?: string }) {
  const target = Number(value.replace(/[^\d]/g, ''));
  const prefix = value.match(/^[^\d]*/)?.[0] ?? '';
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // The real price shows until the observer confirms the card is off screen,
    // so a missed callback can never leave it at zero.
    let raf = 0;
    let done = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) {
          setN(0);
          return;
        }
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, Math.max(0, t - start) / 1400);
          const eased = 1 - Math.pow(1 - p, 4);
          setN(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        // Background tabs pause rAF; make sure the real price always lands.
        done = window.setTimeout(() => setN(target), 1600);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
  }, [target]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={value}>
      {prefix}
      {n.toLocaleString('en-IN')}
    </span>
  );
}

function PhoneSlide({ slide }: { slide: (typeof MOCKUP_SLIDES)[number] }) {
  return (
    <figure className="flex-none w-44 sm:w-52 md:w-56">
      <div className="rounded-[26px] bg-[#0E2015] border border-[#244A2C] p-1.5">
        <div className="relative aspect-9/18 overflow-hidden rounded-[20px] bg-[#12301A]">
          <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" decoding="async" />
        </div>
      </div>
      <figcaption className="mt-3 text-center font-montserrat font-semibold text-xs sm:text-sm text-white/80 truncate">
        {slide.title}
      </figcaption>
    </figure>
  );
}

export const WebsiteDevelopmentPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [expandedPackages, setExpandedPackages] = useState<Record<string, boolean>>({});

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

  const tel = `tel:${COMPANY.phone.replace(/\s+/g, '')}`;

  return (
    <div className="relative isolate text-white min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-clip">
      <DarkBackdrop />

      <WaveHero
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* ── Left Column: heading, actions, platforms, art ── */}
            <div className="lg:col-span-7 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00] uppercase">
                <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
                <span className="opacity-40">/</span>
                <Link href="/services" className="hover:underline opacity-80 hover:opacity-100">Services</Link>
                <span className="opacity-40">/</span>
                <span className="text-white font-bold">Website development</span>
              </nav>

              <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.05] max-w-3xl">
                Website development that grows your business.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#B6F8DD] leading-relaxed max-w-xl">
                Shopify, WordPress and custom Next.js sites. Live in weeks, with a year of support.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a href="#packages-pricing" className="h-12 px-6 rounded-xl text-sm font-bold font-montserrat inline-flex items-center gap-2 tz-btn tz-btn-primary">
                  See packages <ArrowDown className="w-4 h-4" />
                </a>
                <a href={tel} className="h-12 px-6 rounded-xl text-sm font-bold font-montserrat inline-flex items-center gap-2 tz-btn tz-btn-ghost">
                  <Phone className="w-4 h-4" /> Call {COMPANY.phone}
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3" aria-label="Platforms we build on">
                {['Next.js', 'React', 'Node.js', 'WordPress', 'Shopify'].map((name) => (
                  <li key={name} className="flex items-center gap-2 text-white/80">
                    <TechMark name={name} className="w-5 h-5" />
                    <span className="text-sm font-semibold">{name}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 w-full max-w-115 sm:max-w-135 lg:max-w-140">
                <Image
                  src="/assets/images/webdev.webp"
                  alt="Custom Website Development & Engineering"
                  width={1536}
                  height={1024}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="w-full h-auto object-contain drop-shadow-2xl"
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
      </WaveHero>

      {/* ── What we build ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className={`${H2} max-w-xl`}>What we build</h2>
            <p className={LEAD}>From a first store to a full custom platform.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CORE_SOLUTIONS.map((sol) => (
              <article
                key={sol.id}
                tabIndex={-1}
                className="group rounded-2xl border border-[#244A2C] bg-[#0C1F12] p-3 hover:border-[#FFAE00] transition-colors duration-300"
              >
                <CardIllustration name={sol.art} />
                <div className="px-1.5 pt-4 pb-2">
                  <h3 className="font-montserrat font-black text-lg leading-tight">{sol.title}</h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">{sol.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent websites (from the portfolio) ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className={`${H2} max-w-xl`}>Recent websites</h2>
            <Link href="/portfolio" className="h-11 px-5 rounded-xl text-sm font-bold font-montserrat inline-flex items-center gap-2 tz-btn tz-btn-ghost self-start lg:self-auto">
              All work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {WEB_CASE_STUDIES.map((cs) => (
              <Link key={cs.slug} href={`/portfolio/${cs.slug}`} className="group block">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <BrowserFrame src={cs.images.desktop} alt={`${cs.name} website`} domain={cs.domain} tone="dark" sizes="(min-width: 768px) 600px, 100vw" />
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <h3 className="font-montserrat font-black text-xl leading-tight">{cs.name}</h3>
                    <p className="mt-1.5 text-sm text-white/70 leading-relaxed max-w-md">{cs.tagline}</p>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-[#FFAE00] text-[#0E2015] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live Shopify stores ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className={`${H2} max-w-xl`}>Shopify stores we&apos;ve launched</h2>
            <p className={LEAD}>Live stores we designed and built.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {SHOPIFY_STORES.map((store) => (
              <a
                key={store.title}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-[#244A2C] bg-[#0C1F12] p-2 sm:p-2.5 hover:border-[#FFAE00] transition-colors duration-200"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-white">
                  <LazyLoopVideo src={store.video} poster={store.poster} label={store.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-end justify-between gap-2 px-1 pt-3 pb-1">
                  <div className="min-w-0">
                    <h3 className="font-montserrat font-black text-sm sm:text-base leading-tight truncate">{store.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/65 truncate">{store.category}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#FFAE00] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile showcase (continuous, no pause) ── */}
      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <h2 className={H2}>Built for the phone first</h2>
          <p className={`mt-4 ${LEAD}`}>Most of your customers will shop on one.</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee-left motion-reduce:animate-none" style={{ animationDuration: '60s' }}>
            {[0, 1].map((track) => (
              <div key={track} className="flex items-start gap-5 sm:gap-6 px-2.5 sm:px-3" aria-hidden={track === 1 ? true : undefined}>
                {MOCKUP_SLIDES.map((slide) => (
                  <PhoneSlide key={`${track}-${slide.id}`} slide={slide} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack: two plain logo rows, opposite directions ── */}
      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <h2 className={H2}>Tools we build with</h2>
          <p className={`mt-4 ${LEAD}`}>Frameworks, databases, payments and mobile.</p>
        </div>
        <div className="space-y-8 sm:space-y-10 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          {STACK_ROWS.map((row, r) => (
            <div key={r} className="overflow-hidden">
              <div
                className={`flex w-max motion-reduce:animate-none ${r === 0 ? 'animate-marquee-left' : 'animate-marquee-right'}`}
                style={{ animationDuration: r === 0 ? '38s' : '46s' }}
              >
                {[0, 1].map((track) => (
                  <ul key={track} className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16" aria-hidden={track === 1 ? true : undefined}>
                    {row.map((name) => (
                      <li key={name} className="flex items-center gap-3 text-[#EFE8E0]">
                        <TechMark name={name} className="w-8 h-8 sm:w-9 sm:h-9" />
                        <span className="font-montserrat font-bold text-lg sm:text-xl whitespace-nowrap">{name}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Business outcomes: heading and action on the left, four results on the right ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col">
              <h2 className={H2}>What a better site does for you</h2>
              <p className={`mt-4 ${LEAD}`}>What our clients usually see in the months after launch.</p>
              <button
                type="button"
                onClick={() => scrollToSection('Contactform')}
                className="mt-8 self-start h-12 px-6 rounded-xl text-sm font-bold font-montserrat inline-flex items-center gap-2 tz-btn tz-btn-primary"
              >
                Start your project <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <dl className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-[#244A2C]">
              {BUSINESS_BENEFITS.map((b, i) => (
                <div
                  key={b.statLabel}
                  tabIndex={-1}
                  className={`py-8 sm:py-10 border-b border-[#244A2C] ${i % 2 === 1 ? 'sm:border-l sm:pl-8 lg:pl-10' : 'sm:pr-8 lg:pr-10'}`}
                >
                  <IndustryArt name={b.art} className="w-11 h-11" />
                  <dt className="mt-6 font-montserrat font-black text-5xl sm:text-6xl tracking-tight leading-none text-[#FFAE00]">{b.stat}</dt>
                  <dd className="mt-4">
                    <span className="block font-montserrat font-bold text-base sm:text-lg text-white">{b.statLabel}</span>
                    <span className="block mt-2 text-sm text-white/70 leading-relaxed max-w-xs">{b.desc}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Packages and pricing ──
          Each plan has a coloured header that ends in the brand wave, over a dark body.
          The recommended Next.js plan is gold and stands taller. */}
      <section id="packages-pricing" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12 sm:mb-16">
            <h2 className={`${H2} max-w-xl`}>Packages and pricing</h2>
            <p className={LEAD}>One fixed fee, with payments, shipping and a year of support included.</p>
          </div>

          {/* items-start: opening one card never stretches the others */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-start max-w-md md:max-w-none mx-auto">
            {PRICING_PACKAGES.map((pkg) => {
              const isExpanded = !!expandedPackages[pkg.id];
              const lead = !!pkg.isPopular;
              const tone = PLAN_TONES[pkg.id] ?? PLAN_TONES.wordpress;
              const total = pkg.primaryFeatures.length + pkg.additionalFeatures.length;
              const Tick = () => (
                <span className="mt-px w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: tone.accent, color: '#0E2015' }}>
                  <Check className="w-3 h-3" strokeWidth={3.5} />
                </span>
              );
              return (
                <article
                  key={pkg.id}
                  className={`relative flex flex-col rounded-[28px] overflow-hidden border transition-colors duration-300 ${
                    lead
                      ? 'border-[#FFAE00] order-first md:col-span-2 lg:col-span-1 lg:order-none lg:-mt-6'
                      : 'border-[#244A2C] hover:border-[#3A5A40]'
                  }`}
                  style={{ backgroundColor: tone.body }}
                >
                  {/* Header */}
                  <div className={`relative px-7 sm:px-8 pt-8 ${lead ? 'pb-16 sm:pb-20' : 'pb-14 sm:pb-16'}`} style={{ backgroundColor: tone.head, color: tone.ink }}>
                    {lead && (
                      <span className="inline-block mb-4 rounded-full bg-[#0E2015] px-3 py-1 text-xs font-bold font-montserrat text-[#FFAE00]">
                        Recommended
                      </span>
                    )}
                    <h3 className="font-montserrat font-black text-xl sm:text-2xl leading-tight">{pkg.name}</h3>
                    <p className="mt-1.5 text-sm font-medium" style={{ color: tone.sub }}>{pkg.fit}</p>

                    <CountUpPrice
                      value={pkg.price}
                      className={`mt-6 block font-montserrat font-black tracking-tight leading-none ${lead ? 'text-5xl sm:text-6xl' : 'text-5xl'}`}
                    />
                    <p className="mt-3 text-sm font-semibold">
                      One-time fee, plus GST
                      <span className="block font-medium" style={{ color: tone.sub }}>Live in {pkg.timeline}</span>
                    </p>

                    {/* Two-layer wave into the body */}
                    <svg
                      viewBox="0 0 1440 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px w-full h-10 sm:h-12"
                    >
                      <path d={`${WAVE_CURVE} L1440,100 L0,100 Z`} transform="translate(0 -22)" fill={tone.back} />
                      <path d={`${WAVE_CURVE} L1440,100 L0,100 Z`} fill={tone.body} />
                      <path d={WAVE_CURVE} fill="none" stroke="#FFAE00" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col px-7 sm:px-8 pt-4 pb-8">
                    <ul className="space-y-3.5 text-sm">
                      {pkg.primaryFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-3 leading-snug">
                          <Tick />
                          <span className="text-white/90">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      id={`more-${pkg.id}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <ul className="pt-3.5 space-y-3.5 text-sm">
                          {pkg.additionalFeatures.map((f) => (
                            <li key={f} className="flex items-start gap-3 leading-snug">
                              <Tick />
                              <span className="text-white/90">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => togglePackageExpand(pkg.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`more-${pkg.id}`}
                      className="mt-5 self-start inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline cursor-pointer"
                      style={{ color: tone.accent }}
                    >
                      {isExpanded ? 'Show less' : `See all ${total} inclusions`}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollToSection('Contactform')}
                      className={`mt-8 h-12 w-full rounded-full text-sm font-bold font-montserrat inline-flex items-center justify-center gap-2 tz-btn ${lead ? 'tz-btn-primary' : 'tz-btn-ghost'}`}
                    >
                      Start with this plan <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href={tel} className="mt-3 text-center text-sm text-white/65 hover:text-white hover:underline underline-offset-4">
                      or call {COMPANY.phone}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className={H2}>Industries we build for</h2>
            <p className={`mt-4 ${LEAD}`}>Brands we've built for, and what their sites needed.</p>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 border-t border-[#244A2C]">
            {INDUSTRIES.map((ind) => (
              <li key={ind.name} tabIndex={-1} className="group flex items-center gap-4 py-5 border-b border-[#244A2C]">
                <IndustryArt name={ind.art} className="w-11 h-11 shrink-0" />
                <div>
                  <h3 className="font-montserrat font-bold text-base text-white">{ind.name}</h3>
                  <p className="mt-1 text-sm text-white/65">{ind.highlight}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className={H2}>Common questions</h2>
            <p className={`mt-4 ${LEAD}`}>Platforms, timing, ownership and support.</p>
          </div>
          <div className="lg:col-span-8 border-t border-[#244A2C]">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="border-b border-[#244A2C]">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="font-montserrat font-bold text-base sm:text-lg text-white">{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#FFAE00] text-[#0E2015]' : 'bg-[#12301A] text-white group-hover:bg-[#1D4224]'}`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  {isOpen && <p className="pb-6 pr-12 text-sm sm:text-base text-white/75 leading-relaxed">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsistentCTA
        title="Ready to build your website?"
        description="Tell us what you sell. We'll come back with a plan and a fixed price."
        primaryText="Get a proposal"
        primaryHref="/contact"
        secondaryText="See our work"
        secondaryHref="/portfolio"
      />
    </div>
  );
};
