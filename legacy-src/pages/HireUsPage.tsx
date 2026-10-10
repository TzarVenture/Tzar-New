"use client";

import React from 'react';
import Link from 'next/link';
import {
  Globe,
  Search,
  Palette,
  Share2,
  PenTool,
  Box,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. SERVICES THAT DRIVE GROWTH (from https://tzar-five.vercel.app/hire-us) ── */
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Globe className="w-6 h-6 text-[#FFAE00]" />,
    title: "Website Development",
    desc: "Build fast, secure, and scalable websites tailored to your business goals and user experience.",
  },
  {
    icon: <Search className="w-6 h-6 text-[#FFAE00]" />,
    title: "SEO & Search",
    desc: "Boost your visibility with data-driven SEO strategies that increase rankings, traffic, and conversions.",
  },
  {
    icon: <Palette className="w-6 h-6 text-[#FFAE00]" />,
    title: "Graphic Designing",
    desc: "Create visually compelling designs that strengthen your brand identity and capture audience attention.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-[#FFAE00]" />,
    title: "Social Media Marketing (SMM)",
    desc: "Grow your brand presence and engagement with strategic content and performance-driven social campaigns.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-[#FFAE00]" />,
    title: "Logo Design",
    desc: "Craft unique and memorable logos that reflect your brand's vision and leave a lasting impression.",
  },
  {
    icon: <Box className="w-6 h-6 text-[#FFAE00]" />,
    title: "Product & Packaging Design",
    desc: "Innovative product and packaging designs that elevate brand value and stand out on shelves.",
  },
];

/* ── 02. OUR PROVEN PROCESS (from https://tzar-five.vercel.app/hire-us) ───────── */
interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep dive into your business, audience, and goals to craft the perfect strategy.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Data-driven roadmap designed to achieve measurable results and ROI.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Flawless implementation with continuous optimization and A/B testing.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Amplify what works, refine what doesn't, and accelerate your growth.",
  },
];

/* ── 03. FORM SERVICES DROPDOWN OPTIONS ───────────────────────────────────────── */
const HIRE_US_SERVICES = [
  'Websites Design & Development',
  'Social Media (SMO | SMM)',
  'Performance Marketing',
  'Influencer Marketing',
  'Brand Marketing',
  'Search Engine Optimization (SEO)',
  'Product Shoot',
  '2D&3D Animation',
  'Logo Design',
  'Product Packaging',
];

export const HireUsPage: React.FC = () => {
  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EAF1EB] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER: STANDARDIZED SERVICE SECTION LAYOUT
          Left: Breadcrumb + "Hire Us" Title (no placeholder cards)
          Right: Spacious open area for future artwork integration
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
        }}
      >
        {/* Check Box Grid Texture */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14 lg:pb-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Clean Breadcrumb + Headline only */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full space-y-3">
              <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-white/60 mb-2">
                <Link href="/" className="hover:text-[#FFAE00] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-[#FFAE00] transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-[#FFAE00] font-bold">Hire Us</span>
              </nav>

              <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Hire <span className="text-[#FFAE00]">Us.</span>
              </h1>

              <p className="font-montserrat font-semibold text-xs sm:text-sm lg:text-base text-[#FFAE00] tracking-widest uppercase pt-1">
                Dedicated Teams &nbsp;|&nbsp; Full-Stack Specialists &nbsp;|&nbsp; Performance Driven
              </p>

              <p className="font-inter text-sm sm:text-base text-white/80 max-w-xl leading-relaxed pt-2">
                Partner with India&apos;s leading digital specialists to build, scale, and accelerate your commercial growth.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-all border border-white/20"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean spacious area reserved for vector / art integration */}
            <div className="lg:col-span-5 hidden lg:block" />

          </div>
        </div>

        {/* ── Smooth Organic Wave Transition into Section 02 (#FAF9F5) ── */}
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
              fill="#FAF9F5"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. SERVICES THAT DRIVE GROWTH (Authentic Content from tzar-old)
      ────────────────────────────────────────────────────────────────── */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8E0] border border-[#1D4224]/10 font-montserrat font-bold text-xs uppercase tracking-wider text-[#1D4224]">
              Comprehensive Capabilities
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              Services That <span className="text-[#1D4224]">Drive Growth</span>
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#5C6860] max-w-xl mx-auto leading-relaxed">
              Full-stack digital marketing solutions tailored to your business goals
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl p-6 sm:p-8 bg-white border border-[#0E2015]/10 hover:border-[#1D4224]/30 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0E2015] flex items-center justify-center shadow-md mb-6 group-hover:scale-105 group-hover:bg-[#1D4224] transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-[#0E2015] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6 mt-auto">
                  <button
                    type="button"
                    onClick={scrollToContactForm}
                    className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-[#1D4224] hover:text-[#FFAE00] transition-colors cursor-pointer"
                  >
                    <span>Hire Specialists</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFAE00]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. OUR PROVEN PROCESS (Authentic Content from tzar-old)
      ────────────────────────────────────────────────────────────────── */}
      <section id="process" className="py-14 sm:py-20 lg:py-24 bg-[#EFE8E0] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading, Pitch & Badges */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#1D4224]/10 font-montserrat font-bold text-xs uppercase tracking-wider text-[#1D4224]">
                Strategic Execution
              </span>

              <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight leading-tight">
                Our Proven <span className="text-[#1D4224]">Process</span>
              </h2>

              <p className="font-inter text-base sm:text-lg text-[#0E2015]/85 leading-relaxed">
                We follow a strategic, results-driven process designed to deliver consistency, clarity, and measurable growth. From understanding your business to scaling performance, every step is built to maximize impact and long-term success.
              </p>

              {/* Official Partner Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E2015] text-white font-montserrat font-bold text-xs shadow-md border border-[#FFAE00]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  Google Partner
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E2015] text-white font-montserrat font-bold text-xs shadow-md border border-[#FFAE00]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  Meta Business Partner
                </span>
              </div>
            </div>

            {/* Right Column: 4 Process Steps */}
            <div className="lg:col-span-7 space-y-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl p-6 bg-white border border-[#1D4224]/15 shadow-sm hover:shadow-md hover:border-[#1D4224]/40 transition-all flex items-start gap-5"
                >
                  <span className="font-montserrat font-black text-3xl sm:text-4xl text-[#FFAE00] shrink-0 leading-none">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-[#0E2015] mb-1">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-[#5C6860] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. WE CAN GET MASSIVE TRAFFIC TO YOUR WEBSITE (from tzar-old)
          Standardized LeadCaptureForm + 3 Traffic Highlights
      ────────────────────────────────────────────────────────────────── */}
      <section className="pt-14 sm:pt-20 lg:pt-24 pb-0 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              TZAR DIGITAL MARKETING AGENCY
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              We Can Get Massive Traffic To Your Website
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Reusable Standardized LeadCaptureForm */}
            <div id="Contactform" className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="w-full max-w-md">
                <LeadCaptureForm
                  title="From Concept to Capture: We Do It All"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Websites Design & Development"
                  serviceOptions={HIRE_US_SERVICES}
                  noBorder={true}
                />
              </div>
            </div>

            {/* Right Column: Key Traffic & Growth Highlights (from tzar-old) */}
            <div className="lg:col-span-6 space-y-6">
              <p className="font-montserrat font-bold text-xs sm:text-sm text-[#1D4224] tracking-wide uppercase">
                SEO &bull; Content Marketing &bull; Paid Search &bull; Social Media &bull; Analytics &bull; Programmatic
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl p-5 bg-[#FAF9F5] border border-[#1D4224]/15">
                  <h3 className="font-montserrat font-bold text-base text-[#0E2015] flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFAE00]" />
                    <span className="text-[#1D4224]">SEO:</span> Bring Huge Traffic Through Search
                  </h3>
                  <p className="font-inter text-sm text-[#5C6860] pl-4 leading-relaxed">
                    Bring huge traffic through SEO strategies. High-intent keyword rankings and technical site architecture that brings organic visitors continuously.
                  </p>
                </div>

                <div className="rounded-2xl p-5 bg-[#FAF9F5] border border-[#1D4224]/15">
                  <h3 className="font-montserrat font-bold text-base text-[#0E2015] flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFAE00]" />
                    <span className="text-[#1D4224]">Paid Media:</span> Guaranteed ROI Strategies
                  </h3>
                  <p className="font-inter text-sm text-[#5C6860] pl-4 leading-relaxed">
                    Strategies with guaranteed ROI. Precision ad funnels optimized for maximum performance and scalable conversions.
                  </p>
                </div>

                <div className="rounded-2xl p-5 bg-[#FAF9F5] border border-[#1D4224]/15">
                  <h3 className="font-montserrat font-bold text-base text-[#0E2015] flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFAE00]" />
                    <span className="text-[#1D4224]">Content Marketing:</span> Attractive &amp; Creative Content
                  </h3>
                  <p className="font-inter text-sm text-[#5C6860] pl-4 leading-relaxed">
                    Attractive and creative content which will increase customer engagement and traffic across all your channels.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D4224] text-white font-montserrat font-bold text-xs hover:bg-[#25552f] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#FFAE00]" />
                  <span>Call Now: {COMPANY.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ── Smooth Organic Wave Transition: White into Closing Dark Spruce Footer Banner ── */}
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
          05. CLOSING BANNER (CTAS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready to Scale Your Business with TZAR?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Hire our vetted engineering, branding, and performance marketing specialists to transform your digital presence and drive measurable commercial results.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Claim Free Strategy Session</span>
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
