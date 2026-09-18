"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Share2,
  Video,
  MessageSquare,
  Sparkles,
  Globe,
  Newspaper,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. AUTHENTIC 6 CONTENT MARKETING CHANNELS (from cotentmarketingcd.js) ─── */
const CONTENT_CHANNELS = [
  {
    id: 1,
    title: "Posts to Instagram and FaceBook",
    description: "In social networks, you can make great-targeted campaigns in the form of creative posts with pictures, carousels, and witty text that build community engagement.",
    icon: Share2,
  },
  {
    id: 2,
    title: "Integration in YouTube Videos-Bloggers",
    description: "This is the new must-have in any media plan for any business of any subject. YouTube is one of the premier suppliers of long-term organic traffic on the internet.",
    icon: Video,
  },
  {
    id: 3,
    title: "Reviews in Communities",
    description: "Review in specialized niche communities and discussion hubs where content gets genuine views, discussions, and high-intent customer inquiries in huge numbers.",
    icon: MessageSquare,
  },
  {
    id: 4,
    title: "Posts from Top Bloggers",
    description: "We strategically include in your media plan leading bloggers and industry authorities who have proven themselves with large, loyal, and engaged audiences.",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Niche Websites",
    description: "In almost every category there are specialized niche sites with a concentrated core of your target audience who should know about your product or service first.",
    icon: Globe,
  },
  {
    id: 6,
    title: "Publications in Mass Media",
    description: "For brands with significant milestones and serious market reach, we craft and distribute comprehensive editorial features and high-impact press coverage across leading publications.",
    icon: Newspaper,
  },
];

export const ContentMarketingPage: React.FC = () => {
  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER WITH EMBEDDED FORM & BACKGROUND ART
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden border-b border-[#1D4224]/10">
        {/* Subtle Ambient Background */}
        <div
          className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bgContent-Marketing.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-[#EFE8E0]/70 via-[#EFE8E0]/90 to-[#EFE8E0] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Headline & Pitch */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Breadcrumb & Guarantee Badge */}
              <div className="flex flex-col gap-2.5">
                <nav className="flex items-center gap-2 text-xs font-mono text-[#5C6860]">
                  <Link href="/" className="hover:text-[#1D4224] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-[#1D4224] transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-[#1D4224] font-bold">Content Marketing</span>
                </nav>

                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1D4224]/10 border border-[#1D4224]/20 w-fit">
                  <span className="font-montserrat font-black text-xs uppercase tracking-wider text-[#1D4224]">
                    Data-Driven Content Growth Engines
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.15]">
                Targeted Content Marketing &amp;{' '}
                <span className="bg-[#FFAE00] text-[#0E2015] px-2 py-0.5 rounded-md inline-block mt-1">
                  Strategic Distribution.
                </span>
              </h1>

              {/* Supporting Hook from Authentic Data */}
              <p className="font-inter text-base sm:text-lg text-[#5C6860] max-w-xl leading-relaxed">
                Welcome to our content marketing services! At TZAR, we believe that great content can help you achieve your business goals by attracting, engaging, and converting your target audience into long-term loyal clients.
              </p>

              {/* Action Buttons (2-3 words) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-sm hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-lg shadow-[#1D4224]/10 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#channels"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1D4224]/20 bg-white/70 hover:bg-white text-[#1D4224] font-montserrat font-bold text-sm transition-all duration-200"
                >
                  <span>Explore Channels</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Lead Capture Form Component */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="w-full max-w-md rounded-3xl bg-[#0E2015] p-2 border border-[#1D4224]/50 shadow-2xl shadow-black/20">
                <LeadCaptureForm
                  title="Claim Your Free Content Strategy"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Content Marketing"
                  serviceOptions={[
                    'Content Marketing',
                    'Search Engine Optimization (SEO)',
                    'Social Media (SMO | SMM)',
                    'Performance Marketing (PPC)',
                    'Websites Design & Development',
                    'Logo & Brand Identity',
                  ]}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. EDITORIAL SERVICE INTRO: GET TO KNOW CONTENT MARKETING
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Concise Editorial Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8E0] border border-[#1D4224]/10">
                <FileText className="w-3.5 h-3.5 text-[#1D4224]" />
                <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#1D4224]">
                  Data-Driven ROI &amp; Audience Value
                </span>
              </div>

              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight leading-tight">
                Get To Know Content Marketing
              </h2>

              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed">
                At TZAR, we create data-driven content strategies that attract, engage, and convert your target audience into loyal customers. From authoritative thought leadership to multi-channel distribution, we craft stories that build brand credibility and drive measurable business ROI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Audience Persona & Pain-Point Architecture",
                  "Omnichannel Distribution (Social, Video, PR)",
                  "Search-Optimized Thought Leadership",
                  "High-Retention Conversion Lead Funnels",
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4224] shrink-0 mt-0.5" />
                    <span className="font-inter text-xs sm:text-sm font-semibold text-[#0E2015]">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Graphic Stage */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rounded-3xl overflow-hidden border border-[#1D4224]/15 shadow-xl bg-[#FAF9F5] p-6 max-w-md w-full flex items-center justify-center">
                <img
                  src="/assets/images/resources/contentmarketing.png"
                  alt="Content Marketing Services"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. 6 CONTENT MARKETING CHANNELS (from cotentmarketingcd.js)
      ────────────────────────────────────────────────────────────────── */}
      <section id="channels" className="py-10 sm:py-14 bg-[#EFE8E0] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              Strategic Channels
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight mt-1.5 uppercase">
              Content Marketing Services
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-2.5 mb-3" />
            <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed">
              Regular communication with the target audience of the brand with creative and engaging content increases the brand value and credibility of the company.
            </p>
          </div>

          {/* 6 Cards Grid (Without Badges, Without Pillars, Without Inquire Buttons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CONTENT_CHANNELS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1D4224]/10 flex items-center justify-center text-[#1D4224] group-hover:bg-[#1D4224] group-hover:text-white transition-colors duration-200 mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015] mb-2.5 group-hover:text-[#1D4224] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed">
                    {item.description}
                  </p>
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

    </div>
  );
};
