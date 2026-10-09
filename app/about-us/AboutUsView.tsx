"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LazyDotLottie } from "@/legacy-src/components/ui/LazyDotLottie";


// Performance stats
const STATS = [
  { value: "100+", label: "Satisfied Clients", highlight: "Pan-India & Global" },
  { value: "95%", label: "Client Retention Rate", highlight: "Proven Long-Term ROI" },
  { value: "5+", label: "Years of Growth", highlight: "Established in Mumbai" },
  { value: "100+", label: "Projects Delivered", highlight: "Web, Branding & Campaigns" },
];

// Team Members from original codebase
const TEAM_MEMBERS = [
  {
    name: "Nistha Bhati",
    role: "Lead Web Developer",
    describe:
      "Full-stack web developer building scalable, visually polished, and intuitive web platforms using modern Next.js architectures.",
    image: "/assets/images/team/team-page-img-7.jpg",
  },
  {
    name: "Devika Kalal",
    role: "Social Media Manager",
    describe:
      "With in-depth knowledge of social media ecosystems, she crafts viral content strategies that drive authentic brand engagement and follower growth.",
    image: "/assets/images/team/team-page-img-1.png",
  },
  {
    name: "Ankit",
    role: "Creative Designer",
    describe:
      "Budding with innovative thoughts and ideas, he crafts an entire world of colors, imagery, and visual storytelling for ambitious brands.",
    image: "/assets/images/team/team-page-img-3.jpg",
  },
  {
    name: "Nidhi",
    role: "Business Head",
    describe:
      "A powerhouse combination of strategic insight and market expertise, driving client partnerships, enterprise growth, and delivery excellence.",
    image: "/assets/images/team/team-page-img-4.jpg",
  },
  {
    name: "Iqra Fatima",
    role: "Social Media Strategist",
    describe:
      "Helping businesses look exceptional and connect deeply with their target demographics through purposeful digital aesthetics.",
    image: "/assets/images/team/Artboard 2 (1).png",
  },
  {
    name: "Sufiya Utnal",
    role: "Digital Marketing Specialist",
    describe:
      "Enthusiast passionate about building high-authority digital presence, multi-channel customer acquisition, and performance marketing funnels.",
    image: "/assets/images/team/Artboard 1 (1).png",
  },
  {
    name: "Deepak Yadav",
    role: "Website Developer",
    describe:
      "Dedicated developer focused on clean code, mobile responsiveness, seamless UX micro-interactions, and robust technical implementations.",
    image: "/assets/images/team/vivek11.png",
  },
  {
    name: "Parnika",
    role: "Sales Development Executive",
    describe:
      "Focused and dedicated when it comes to understanding client roadmaps and architecting high-impact solutions for enterprise partners.",
    image: "/assets/images/team/team-page-img-5.jpg",
  },
];

export default function AboutUsView() {
  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* ── 01. EDITORIAL PAGE HEADER / HERO BANNER (90% VIEWPORT HEIGHT) ── */}
      <section className="relative overflow-hidden bg-[#0E2015] border-b border-[#1D4224]/30 text-white min-h-[90vh] flex flex-col justify-between pt-28 pb-14 sm:pt-36 sm:pb-20">
        {/* Ambient Dark Spruce & Gold Glows with Subtle Dot-Matrix Grid (Same as website-development-services page) */}
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

        {/* Foreground Content Grid (relative z-10, completely above all background overlays) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">ABOUT US</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Equal 50% Space with Simplified Copywriting & Modern Tech Stack */}
            <div className="space-y-6 relative z-20">
              {/* Clean Typographic Eyebrow (No pill badge, No sparkles) */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FFAE00] uppercase font-bold">
                <span className="w-8 h-px bg-[#FFAE00]" />
                <span>Agency DNA & Strategic Vision</span>
              </div>

              {/* Bold Editorial Headline */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                  About <span className="text-[#FFAE00]">Tzar Venture</span>
                </h1>
                <p className="font-montserrat font-bold text-lg sm:text-2xl text-white/95 tracking-tight leading-snug">
                  Digital growth agency and modern application engineering.
                </p>
              </div>

              {/* Simplified, Impactful Copywriting */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                We engineer modern web and mobile applications, high-performance e-commerce platforms, and technical SEO strategies that scale businesses across India and globally.
              </p>

              {/* Modern Tech Stack Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Web & Mobile Apps
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Next.js, React & Mobile Apps
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Modern Tech Stack
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Node, Cloud & Headless APIs
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Growth Systems
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Technical SEO & High ROAS
                  </span>
                </div>
              </div>

              {/* High-Converting Action Triggers */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2.5 text-sm sm:text-base group font-sans"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#about-story"
                  className="border border-white/25 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base inline-flex items-center gap-2 font-sans"
                >
                  <span>Our Mission & Story</span>
                </a>
              </div>
            </div>

            {/* Right Column: Equal 50% Space with Sized-Up Lottie Art */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-xl lg:max-w-none aspect-[882/551] flex items-center justify-center transform scale-105 lg:scale-110 xl:scale-115 origin-center lg:translate-x-4 xl:translate-x-8 transition-transform duration-300">
                <LazyDotLottie
                  src="/assets/lottie/team-discussion.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delicate Border Separator */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/10 pointer-events-none" />
      </section>

      {/* ── 02. CORE METRICS BENCHMARK STRIP ── */}
      <section className="relative z-20 -mt-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-lg p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx !== 0 ? "lg:border-l lg:border-[#1D4224]/10 lg:pl-6" : ""
              }`}
            >
              <span className="font-montserrat font-black text-2xl sm:text-4xl text-[#1D4224] tracking-tight">
                {stat.value}
              </span>
              <span className="font-bold text-xs sm:text-sm text-[#0E2015] mt-0.5">
                {stat.label}
              </span>
              <span className="font-mono text-[11px] text-[#5C6860] uppercase tracking-wider mt-0.5">
                {stat.highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03. MAIN ABOUT COMPANY SECTION ── */}
      <section id="about-story" className="py-10 sm:py-14 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Image with smooth border radius */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] sm:h-[420px] rounded-3xl bg-white p-3 sm:p-3.5 border border-[#1D4224]/10 shadow-sm">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/resources/about-page-img-2.png"
                    alt="About Tzar Venture"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Mission & Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4224]/10 text-[#1D4224] text-xs font-mono uppercase tracking-widest font-black">
                ABOUT COMPANY
              </div>

              <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-[#0E2015] tracking-tight leading-tight">
                ABOUT US
              </h2>

              {/* Exact Text from Original Website */}
              <p className="font-sans text-base sm:text-lg text-[#5C6860] leading-relaxed">
                Our mission is to change the way businesses speak, listen and share online. We pursue relationships based on transparency, persistance, mutual trust and integrity with our clients. Our team of specialists consistently delivers outstanding results with their creative ideas and vast experience. We work in areas as diverse as Search Engine optimization, Website development, Social Media marketing, Digital marketing and much more. We have a proven track record in delivering what we promise.
              </p>

              {/* Highlight Blockquote */}
              <div className="p-5 rounded-2xl bg-white border-l-4 border-[#FFAE00] border border-[#1D4224]/10 shadow-sm">
                <p className="font-montserrat font-bold text-lg sm:text-xl text-[#1D4224] italic leading-snug">
                  "providing innovative Website solutions for future."
                </p>
                <span className="block mt-1 font-mono text-xs uppercase tracking-widest text-[#5C6860]">
                  — Tzar Venture Core Philosophy
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="bg-[#1D4224] text-white hover:bg-[#FFAE00] hover:text-[#0E2015] font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2.5 text-sm sm:text-base group"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#team"
                  className="border border-[#1D4224]/20 text-[#1D4224] hover:bg-[#B6F8DD]/40 px-6 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base inline-flex items-center gap-2"
                >
                  <span>Meet Our Specialists</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. MEET THE TEAM SECTION ── */}
      <section id="team" className="py-10 sm:py-16 bg-[#FDFBF7] border-t border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#1D4224] font-black">
                PEOPLE BEHIND IT
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-[#0E2015] tracking-tight mt-1">
                MEET THE TEAM
              </h2>
              <p className="text-[#5C6860] text-xs sm:text-sm max-w-xl mt-1.5">
                A multidisciplinary collective of senior engineers, visual creators, and performance marketers dedicated to scaling your brand.
              </p>
            </div>

            <Link
              href="/our-team"
              className="bg-[#1D4224] text-white hover:bg-[#FFAE00] hover:text-[#0E2015] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 text-xs sm:text-sm inline-flex items-center gap-2 self-start md:self-end"
            >
              <span>Discover Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group"
              >
                {/* Photo container with natural 4:5 portrait aspect ratio */}
                <div className="relative w-full aspect-[4/5] bg-[#F5F2EB] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Member Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015] group-hover:text-[#1D4224] transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#FFAE00] uppercase tracking-wider mt-0.5 mb-2">
                      {member.role}
                    </p>
                    <p className="font-sans text-xs text-[#5C6860] leading-relaxed line-clamp-3">
                      {member.describe}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Discover CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 text-[#1D4224] font-bold text-xs sm:text-sm hover:underline hover:text-[#0E2015]"
            >
              <span>View our complete team directory</span>
              <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
