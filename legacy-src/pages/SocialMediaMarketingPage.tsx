"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Users,
  MessageCircle,
  TrendingUp,
  Target,
  Sparkles,
  Video,
  Share2,
  Heart,
  MessageSquare,
  UserCheck,
  CheckCircle2,
  Compass,
  Tv,
  Globe2,
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. SOCIAL MEDIA MARKETING GOALS (Authentic Data from smmcard.js) ────── */
const SMM_GOALS = [
  {
    title: "AUDIENCE GROWTH",
    description: "Targeting at growth of audience and followers across all priority social platforms.",
    icon: Users,
  },
  {
    title: "ENGAGEMENT",
    description: "Unique content promotion among targeted audience through efficient SMM strategy.",
    icon: MessageCircle,
  },
  {
    title: "INCREASE IN WEBSITE TRAFFIC",
    description: "Motive is to increase clicks for the website by meaningful customers and high-intent buyers.",
    icon: TrendingUp,
  },
  {
    title: "RETARGETING",
    description: "Engaging the existing customers and followers to persuade them to make more purchases.",
    icon: Target,
  },
  {
    title: "COLLABORATIONS",
    description: "We assist you in collaborating with other brands or personalities in order to increase your presence and followers.",
    icon: Sparkles,
  },
  {
    title: "VIDEO ADS AND LIVE VIDEO",
    description: "These are used for trust building among the customers for your brand with real-time connection.",
    icon: Video,
  },
];

/* ── 02. BENEFITS FOR YOUR BUSINESS (Authentic Data from BenefitsSMM.js) ─── */
const SMM_BENEFITS = [
  {
    title: "Increases brand awareness",
    description: "Company’s image or Brand creation using the multimedia capabilities of social networking.",
    icon: Share2,
  },
  {
    title: "Increases audience loyalty",
    description: "Formation of user confidence in the brand, product, company, achieved through interaction within the social network.",
    icon: Heart,
  },
  {
    title: "Feedback",
    description: "SMO allows you to get feedback from potential and real customers to improve the quality of your services.",
    icon: MessageSquare,
  },
  {
    title: "Base of potential customers",
    description: "SMO allows you to build a base of potential customers for further conversion into real customers.",
    icon: UserCheck,
  },
];

/* ── 03. EDITORIAL SMM STRATEGY (Authentic Data from SmmService.js) ──────── */
const SMM_STRATEGY_PILLARS = [
  {
    title: "A Consistent Brand Image",
    description:
      "Using social media for marketing enables your business to project your brand image across a variety of different social media platforms. While each platform has its own unique environment and voice, your business’s core identity, whether it’s friendly, fun, or trustworthy, should stay consistent.",
    icon: Compass,
  },
  {
    title: "Social Media for Content Promotion",
    description:
      "Social media marketing is a perfect channel for sharing your best site and blog content with readers. Once you build a loyal following on social media, you’ll be able to post all your new content and make sure your readers can find new stuff right away. Plus, great blog content will help you build more followers.",
    icon: Share2,
  },
  {
    title: "Sharing Curated Links",
    description:
      "While using social media for marketing is a great way to leverage your own unique, original content to gain followers, fans, and devotees, it’s also an opportunity to link to outside articles as well. If other sources provide great, valuable information you think your target audience will enjoy, don’t be shy about linking to them.",
    icon: Globe2,
  },
  {
    title: "Tracking Competitors",
    description:
      "It’s always important to keep an eye on competitors—they can provide valuable data for keyword research and other social media marketing insight. If your competitors are using a certain social media marketing channel or technique that seems to be working for them, consider doing the same thing, but do it better!",
    icon: TrendingUp,
  },
  {
    title: "Using Facebook for Social Media Marketing",
    description:
      "Facebook’s casual, friendly environment requires an active social media marketing strategy. Start by creating a Facebook Business Fan Page. Pay careful attention to layout and visuals, keep your tone light and friendly, and pair organic reach with a cost-effective ad strategy to maximize impact.",
    icon: Users,
  },
  {
    title: "Using YouTube for Social Media Marketing",
    description:
      "YouTube is the number one place for creating and sharing video content, and it can also be an incredibly powerful social media marketing tool. Instead of focusing only on viral chances, craft useful, instructive how-to videos that rank high on Google video search results.",
    icon: Tv,
  },
];

export const SocialMediaMarketingPage: React.FC = () => {
  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EAF1EB] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER WITH EMBEDDED FORM & BACKGROUND ART
          Flush bottom with organic wave transition into Section 02.
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white overflow-hidden flex flex-col justify-between"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* ── Left Column: Hero Heading + Lottie Social Media Art ── */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start w-full">
              {/* Hero Heading and Breadcrumb */}
              <div className="w-full text-center lg:text-left mb-6 sm:mb-8">
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-white/60 mb-3">
                  <Link href="/" className="hover:text-[#FFAE00] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-[#FFAE00] transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-[#FFAE00] font-bold">Social Media Marketing</span>
                </nav>

                <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  Social Media Marketing &amp;{' '}
                  <span className="text-[#FFA200]">Brand Amplification.</span>
                </h1>
              </div>

              {/* Social Media Graphic Art – matching LogoDesignPage layout */}
              <div className="w-full max-w-115 sm:max-w-135 lg:max-w-150 pt-2 sm:pt-4 flex items-center justify-center overflow-visible">
                <img
                  src="/assets/images/social_media_marketing.png"
                  alt="Social Media Marketing and Brand Amplification"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Lead Capture Form Component */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full mt-4 lg:mt-0">
              <div className="w-full max-w-md">
                <LeadCaptureForm
                  title="Claim Your Free SMM Strategy"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Social Media (SMO | SMM)"
                  serviceOptions={[
                    'Social Media (SMO | SMM)',
                    'Performance Marketing (PPC)',
                    'Websites Design & Development',
                    'Search Engine Optimization (SEO)',
                    'Logo & Brand Identity',
                    'Product Design & 3D Packaging',
                  ]}
                  noBorder={true}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Smooth Organic Wave Transition: Dark Spruce to Section 02 (#FAF9F5) ── */}
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
          02. CORE SMM STRATEGY & CAPABILITY HIGHLIGHT
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Authentic ServiceDetails Copy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
                Social Media Marketing
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight">
                Connect With Your Audience &amp; Drive Real Conversions
              </h2>
              <div className="w-16 h-1 bg-[#FFAE00] rounded-full mt-1" />

              <p className="font-inter text-base sm:text-lg text-[#0E2015] leading-relaxed font-medium pt-2">
                At TZAR, we build customized social media roadmaps that align seamlessly with your commercial business goals and target demographics.
              </p>

              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed">
                Our team of social media experts has the experience and expertise to develop high-impact campaigns across Instagram, LinkedIn, Facebook, and YouTube. From viral reel scripting to authority LinkedIn carousels, we make your brand voice heard.
              </p>

              {/* 3 High-Impact Value Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#1D4224]/10 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  </div>
                  <span className="font-montserrat font-bold text-xs text-[#0E2015]">Audience Growth</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#1D4224]/10 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  </div>
                  <span className="font-montserrat font-bold text-xs text-[#0E2015]">Content Strategy</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#1D4224]/10 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  </div>
                  <span className="font-montserrat font-bold text-xs text-[#0E2015]">Active Engagement</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual SMM Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rounded-3xl overflow-hidden border border-[#1D4224]/15 shadow-xl bg-white max-w-md w-full">
                <img
                  src="/optimized/assets/images/backgrounds/page-header-bgSocial-Media-marketing.webp"
                  alt="Social Media Marketing Campaign"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = "/assets/images/MobileTopBanners/SMM.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E2015]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFAE00] text-[#0E2015] font-montserrat font-black text-[10px] uppercase tracking-wider inline-block mb-1">
                    Performance SMM
                  </span>
                  <p className="font-montserrat font-bold text-sm text-white">
                    300%+ Average Reach Surge Across Channels
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. SOCIAL MEDIA MARKETING GOALS (6 Authentic Cards from smmcard.js)
      ────────────────────────────────────────────────────────────────── */}
      <section id="smm-goals" className="py-10 sm:py-14 bg-[#EFE8E0] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              Social Media Marketing Goals
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed mt-2.5">
              Tzar offers you the best in industry practices to boost your Social Media circle and create meaningful engagement with the prospective customers. We build a creative content strategy and collaboration plan for your brand to help you increase the followers.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SMM_GOALS.map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EFE8E0]/60 p-3 flex items-center justify-center border border-[#1D4224]/10 mb-4 text-[#1D4224]">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#0E2015] mb-2 tracking-wide uppercase">
                      {goal.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Bottom CTA (2 words) */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. BENEFITS FOR YOUR BUSINESS (4 Authentic Cards from BenefitsSMM.js)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              Tangible Value &amp; ROI
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight mt-1.5 uppercase">
              Benefits For Your Business
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2.5" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SMM_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EFE8E0]/60 p-3 flex items-center justify-center border border-[#1D4224]/10 mb-4 text-[#1D4224]">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold text-base text-[#0E2015] mb-2 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Bottom CTA (2 words) */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          05. EDITORIAL STRATEGY PILLARS (6 Sections from SmmService.js)
      ────────────────────────────────────────────────────────────────── */}
      <section className="pt-10 sm:pt-14 pb-0 bg-[#EFE8E0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              Strategic Playbook
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight mt-1.5">
              Strategic Social Media Management
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2.5" />
          </div>

          {/* 6 Strategy Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SMM_STRATEGY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EFE8E0]/70 p-2.5 flex items-center justify-center border border-[#1D4224]/10 text-[#1D4224] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-montserrat font-black text-lg sm:text-xl text-[#0E2015] mb-3 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Bottom CTA (2 words) */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ── Smooth Organic Wave Transition: Muted Beige to Dark Spruce ── */}
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
          CLOSING BANNER (CTAS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready to Amplify Your Brand on Social Media?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Reach engaged audiences, build an active community, and convert social impressions into qualified leads. Let our social media team manage your growth strategy.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Get Free SMM Strategy Proposal</span>
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
