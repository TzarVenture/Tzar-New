"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

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
      {/* ── 01. EDITORIAL PAGE HEADER / HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#1D4224] text-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        {/* Background Image with Rich Tint */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/page-header-bgAu.jpg')",
          }}
        />

        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4224]/90 via-[#1D4224]/95 to-[#0E2015]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">ABOUT US</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFAE00]/15 border border-[#FFAE00]/30 text-[#FFAE00] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AGENCY DNA & MISSION</span>
            </div>

            <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              About <span className="text-[#FFAE00]">Tzar Venture</span>
            </h1>

            <p className="font-sans text-sm sm:text-lg text-[#B6F8DD]/90 max-w-2xl leading-relaxed">
              India's premier digital growth and enterprise web systems agency. We engineer high-converting digital platforms, technical SEO dominance, and high-impact brand identities.
            </p>
          </div>
        </div>

        {/* Delicate Border Separator */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
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
      <section className="py-10 sm:py-14">
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
                    priority
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
