"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { TrafficGrowthSection } from "@/legacy-src/components/home/tech/TrafficGrowthSection";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";

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

// Key Team Proof Metrics
const TEAM_STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "15+", label: "Dedicated Specialists" },
  { value: "5+", label: "Years of Growth" },
];

export default function OurTeamView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredMembers =
    activeFilter === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeFilter);

  return (
    <div className="relative min-h-screen text-white bg-transparent overflow-x-clip">
      {/* ── FIXED PARALLAX BACKGROUND (ONLY FOR OUR TEAM PAGE - PERSISTENT BEHIND SCROLLING SECTIONS) ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/our-team-page-bg.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* ── SVG CLIP PATH: SHAPES THE HERO BOTTOM ITSELF AS AN ORGANIC WAVE ── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-bottom-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.952 C 0.875,0.936 0.736,0.984 0.556,0.956 C 0.375,0.928 0.222,0.984 0,0.948 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── 01. EDITORIAL AGENCY HERO BANNER (IDENTICAL HERO STYLING & MOBILE RESPONSIVENESS ACROSS PAGES) ── */}
      <section
        className="relative z-10 w-full pt-24 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 lg:pb-20 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          clipPath: "url(#hero-bottom-wave)",
          WebkitClipPath: "url(#hero-bottom-wave)",
        }}
      >
        {/* Check Box Grid Texture into Hero Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Foreground Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-8 sm:pb-12 lg:pb-16">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 sm:mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR TEAM</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Short Headline, Simple Description, Focus Pillars, Action Buttons */}
            <div className="space-y-4 sm:space-y-6 relative z-20">
              {/* Short Headline (No Badge, No Sparkle Icon) */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]">
                  Meet Our <span className="text-[#FFAE00]">Team</span>
                </h1>
              </div>

              {/* Reduced, Simple Description */}
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                The designers, developers, and growth strategists behind every high-performance digital project we craft at Tzar Digital Agency.
              </p>

              {/* Focus Pillars (Identical Mobile Responsive 3-Column Pattern across all pages) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Web & Apps
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Next.js & React
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Creative & UI
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Brand & UX Design
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Growth & SEO
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    SEO & High ROAS
                  </span>
                </div>
              </div>

              {/* Action Buttons (Responsive Sizing Matching FAQs & Client Page) */}
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                <a
                  href="#team-directory"
                  className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 text-xs sm:text-sm group font-sans cursor-pointer"
                >
                  <span>Explore Team</span>
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  href="/career"
                  className="border border-white/25 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold transition-all text-xs sm:text-sm inline-flex items-center gap-2 font-sans cursor-pointer"
                >
                  <span>Join Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image with Responsive Mobile Wrapper */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/our-team-page.webp"
                  alt="Tzar Digital Agency Team"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-56 sm:max-h-72 lg:max-h-115 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delicate golden accent curve tracing the wave bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-10 lg:h-16 block pointer-events-none opacity-60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40"
              stroke="#FFAE00"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* ── 02. PROOF METRICS STRIP (WITH GENEROUS BREATHING SPACE BELOW HERO WAVE) ── */}
      <section className="relative z-20 pt-8 sm:pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-5 sm:p-7 lg:p-8"
          style={{
            backgroundColor: "#061309",
            backgroundImage:
              "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          }}
        >
          {/* Subtle 32px grid texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TEAM_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""
                }`}
              >
                <span className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#FFAE00] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-bold text-xs sm:text-sm text-white/90 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. TEAM DIRECTORY WITH INTERACTIVE FILTER ── */}
      <section id="team-directory" className="relative z-10 py-10 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Directory Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold bg-[#FFAE00]/10 border border-[#FFAE00]/25 px-3 py-1 rounded-full inline-block">
              TALENT & SPECIALISTS
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-3">
              The Minds Behind <span className="text-[#FFAE00]">Tzar</span>
            </h2>
            <p className="text-[#B6F8DD]/85 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              A multidisciplinary collective of engineers, designers, and growth marketers united by technical excellence.
            </p>
          </div>

          {/* Category Filter Pills (Clean, Flat, Zero Glow, Swipable on Mobile) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-10">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FFAE00] text-[#061309] font-bold"
                      : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Team Cards Grid (Luxury Dark Cards with Subtle Radial Texture & Hover Gold Border) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.name}
                className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#FFAE00]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col group"
                style={{
                  backgroundColor: "#061309",
                  backgroundImage:
                    "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
                }}
              >
                {/* Subtle 32px grid texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                      `,
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>

                {/* Photo container with natural portrait ratio */}
                <div className="relative w-full aspect-4/5 overflow-hidden z-10 bg-[#061309]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#061309] via-transparent to-transparent opacity-80" />
                </div>

                {/* Member Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="font-montserrat font-bold text-base sm:text-lg text-white group-hover:text-[#FFAE00] transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#FFAE00] uppercase tracking-wider mt-0.5 mb-2">
                      {member.role}
                    </p>
                    {member.describe && (
                      <p className="font-sans text-xs text-[#B6F8DD]/80 leading-relaxed line-clamp-3">
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

      {/* ── 04. HIGH-CONVERTING LEAD ENQUIRY FORM SECTION (SINGLE CLEAN TITLE) ── */}
      <div className="relative z-10 w-full overflow-hidden">
        <TrafficGrowthSection
          noBorder={true}
          badge="GET IN TOUCH"
          title={
            <>
              Work With Our <span className="text-[#FFAE00]">Specialists</span>
            </>
          }
          subtitle="Connect directly with our engineering and growth team to bring your digital vision to life."
        />
      </div>

      {/* ── 05. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
        className="relative z-10"
        title="Collaborate With Our Specialists"
        description="Partner with our multidisciplinary collective of engineers, designers, and growth strategists to scale your company online."
        primaryText="Let's Get Started"
        primaryHref="/contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </div>
  );
}
