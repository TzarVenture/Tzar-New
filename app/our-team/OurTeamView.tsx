"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";

// Configure local WASM URL immediately to prevent remote CDN network waterfall delays
if (typeof window !== "undefined") {
  setWasmUrl("/assets/lottie/dotlottie-player.wasm");
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: "all" | "engineering" | "marketing" | "design" | "leadership";
  describe: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Nistha Bhati",
    role: "Lead Web Developer",
    category: "engineering",
    describe:
      "Full-stack web developer building scalable, visually polished, and intuitive web platforms using modern Next.js architectures.",
    image: "/assets/images/team/team-page-img-7.jpg",
  },
  {
    id: 2,
    name: "Devika Kalal",
    role: "Social Media Manager",
    category: "marketing",
    describe:
      "With in-depth knowledge of social media ecosystems, she crafts viral content strategies that drive authentic brand engagement and follower growth.",
    image: "/assets/images/team/team-page-img-1.png",
  },
  {
    id: 3,
    name: "Iqra Fatima",
    role: "Social Media Strategist",
    category: "marketing",
    describe:
      "I help businesses look good and connect authentically with people on social media platforms.",
    image: "/assets/images/team/Artboard 2 (1).png",
  },
  {
    id: 4,
    name: "Sufiya Utnal",
    role: "Digital Marketing Specialist",
    category: "marketing",
    describe:
      "Enthusiast passionate about building meaningful digital presence and high-ROI multi-channel funnels.",
    image: "/assets/images/team/Artboard 1 (1).png",
  },
  {
    id: 5,
    name: "Ankit",
    role: "Creative Designer",
    category: "design",
    describe:
      "Budding with interesting thoughts and ideas, he creates an entire new world of colours, images, and visual storytelling.",
    image: "/assets/images/team/team-page-img-3.jpg",
  },
  {
    id: 6,
    name: "Deepak Yadav",
    role: "Website Developer",
    category: "engineering",
    describe:
      "Dedicated web developer focused on clean code, seamless UX micro-interactions, and robust technical implementations.",
    image: "/assets/images/team/vivek11.png",
  },
  {
    id: 7,
    name: "Jahid",
    role: "Graphic Designer",
    category: "design",
    describe:
      "Specializes in brand identity kits, vector graphics, print art, and high-impact visual marketing creatives.",
    image: "/assets/images/team/sanskar11.png",
  },
  {
    id: 8,
    name: "Parnika",
    role: "Sales Development Executive",
    category: "leadership",
    describe:
      "She has a serious attitude towards work when it comes to delivering results to clients and meeting growth targets.",
    image: "/assets/images/team/team-page-img-5.jpg",
  },
  {
    id: 9,
    name: "Nidhi",
    role: "Business Head",
    category: "leadership",
    describe:
      "A powerhouse combination of strategic insight and market expertise, driving client partnerships and operational excellence.",
    image: "/assets/images/team/team-page-img-4.jpg",
  },
  {
    id: 10,
    name: "Mansi",
    role: "Social Media Specialist",
    category: "marketing",
    describe:
      "Creative strategist focused on high-reach community management, campaign execution, and social audience scaling.",
    image: "/assets/images/team/mansi11.jpg",
  },
  {
    id: 11,
    name: "Omkar Shinde",
    role: "Website Developer",
    category: "engineering",
    describe:
      "Hard working and relentless dedication describes him best. Focused on robust frontend systems and fast load performance.",
    image: "/assets/images/team/team-page-img-2.jpg",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Specialists" },
  { id: "engineering", label: "Engineering & Tech" },
  { id: "marketing", label: "Growth & Marketing" },
  { id: "design", label: "Creative & Design" },
  { id: "leadership", label: "Leadership & Strategy" },
] as const;

export default function OurTeamView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredMembers =
    activeFilter === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeFilter);

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">
      {/* ── 01. EDITORIAL PAGE HEADER BANNER (90% VIEWPORT HEIGHT) ── */}
      <section className="relative overflow-hidden bg-[#0E2015] border-b border-[#1D4224]/30 text-white min-h-[90vh] flex flex-col justify-between pt-28 pb-14 sm:pt-36 sm:pb-20">
        {/* Ambient Dark Spruce & Gold Glows with Subtle Dot-Matrix Grid */}
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
            <span className="text-white font-bold">OUR TEAM</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Equal 50% Space with Simplified Copywriting & Modern Tech Stack */}
            <div className="space-y-6 relative z-20">
              {/* Clean Typographic Eyebrow (No pill badge, No sparkles) */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FFAE00] uppercase font-bold">
                <span className="w-8 h-px bg-[#FFAE00]" />
                <span>Specialist Practitioners & Leadership</span>
              </div>

              {/* Bold Editorial Headline */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                  Meet Our <span className="text-[#FFAE00]">Specialists</span>
                </h1>
                <p className="font-montserrat font-bold text-lg sm:text-2xl text-white/95 tracking-tight leading-snug">
                  Engineers, product designers, and growth tacticians.
                </p>
              </div>

              {/* Simplified, Impactful Copywriting */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                Our in-house team in Mumbai develops modern web and mobile applications, scalable cloud backends, and organic search monopolies with obsessive attention to detail.
              </p>

              {/* Modern Tech Stack Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Web & Mobile Apps
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Next.js, React & iOS / Android
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Backend & Cloud
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Modern APIs, Node & DBs
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Growth & Strategy
                  </span>
                  <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                    Technical SEO & UX Design
                  </span>
                </div>
              </div>

              {/* High-Converting Action Triggers */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#team-directory"
                  className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2.5 text-sm sm:text-base group font-sans"
                >
                  <span>Explore All Specialists</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  href="/career"
                  className="border border-white/25 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base inline-flex items-center gap-2 font-sans"
                >
                  <span>Join Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Equal 50% Space with Sized-Up Lottie Art Shifted to Right to Eliminate Overlap */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-xl lg:max-w-none aspect-[16/9] flex items-center justify-center transform scale-110 sm:scale-115 lg:scale-120 xl:scale-125 origin-center lg:translate-x-12 xl:translate-x-16 transition-transform duration-300">
                <DotLottieReact
                  src="/assets/lottie/for-team-page.json"
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

      {/* ── 02. TEAM DIRECTORY WITH INTERACTIVE FILTER ── */}
      <section id="team-directory" className="py-10 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-montserrat font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1D4224] text-white shadow-md shadow-[#1D4224]/20"
                      : "bg-white text-[#5C6860] hover:text-[#0E2015] border border-[#1D4224]/10 hover:border-[#1D4224]/30"
                  }`}
                >
                  {tab.label}
                  {tab.id === "all" ? ` (${TEAM_MEMBERS.length})` : ""}
                </button>
              );
            })}
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-[#1D4224]/10 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group"
              >
                {/* Photo container with natural 4:5 portrait ratio */}
                <div className="relative w-full aspect-[4/5] bg-[#F5F2EB] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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
                    {member.describe && (
                      <p className="font-sans text-xs text-[#5C6860] leading-relaxed line-clamp-3">
                        {member.describe}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. CTA SECTION (FROM ORIGINAL CTAONE COMPONENT) ── */}
      <section className="py-10 sm:py-16 bg-[#FDFBF7] border-t border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1D4224] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl">
            {/* Background Texture Pattern */}
            <div
              className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
              style={{
                backgroundImage: "url('/assets/images/resources/counter-one-pattern.png')",
              }}
            />

            <div className="relative z-10 space-y-2 text-center md:text-left">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#FFAE00]">
                COLLABORATE WITH OUR SPECIALISTS
              </span>
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                We deliver the best <br className="hidden sm:inline" /> customer experience
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Partner with our multidisciplinary collective of engineers, designers, and growth strategists to scale your company online.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-montserrat font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg inline-flex items-center gap-2 group"
              >
                <span>Let's Get Started</span>
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
