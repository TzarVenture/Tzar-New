"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blogData";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import { TypewriterHeadline } from "@/legacy-src/components/ui/TypewriterHeadline";

export default function BlogView() {
  return (
    <div className="min-h-screen bg-[#EFE8E0] font-sans selection:bg-[#FFAE00] selection:text-[#061309] overflow-x-hidden">
      {/* ── 01. HERO SECTION (Dark Luxury Spruce Theme) ── */}
      <section className="relative bg-[#061309] text-white pt-32 sm:pt-40 lg:pt-44 pb-0 overflow-hidden">
        {/* Ambient Radial Lights */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 25%, rgba(20, 83, 45, 0.45) 0%, transparent 60%), radial-gradient(circle at 15% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
          }}
        />

        {/* 32px Micro-Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-12">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md mb-5 shadow-sm">
              <BookOpen className="w-4 h-4 text-[#A3E635] shrink-0" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A3E635] font-semibold">
                Tzar Strategic Publications
              </span>
            </div>

            {/* 4-Word Headline using TypewriterHeadline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5">
              Insights &amp;{" "}
              <TypewriterHeadline
                text="Strategic Playbooks"
                className="text-[#FFAE00]"
                speed={55}
                delay={200}
                cursorColor="#FFAE00"
              />
            </h1>

            {/* Subline */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#B6F8DD]/90 leading-relaxed max-w-2xl mb-8">
              Authoritative guides, technical frameworks, and revenue strategies written by search engineers and digital strategists at Tzar.
            </p>

            {/* Editorial Focus Pillars */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                  Field Practice
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                  Tested on 100+ Live Client Deployments
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                  Publication Focus
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                  SEO, Web Engineering &amp; Inbound
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                  Zero Generic Fluff
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5 block">
                  Actionable Mathematical &amp; Technical Proof
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Seamless Organic Wave Transition: Dark Spruce into #EFE8E0 with pb-0 so zero dark strip occurs ── */}
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
              fill="#EFE8E0"
            />
          </svg>
        </div>
      </section>

      {/* ── 02. MAIN ARTICLES GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2D5A3D]/15">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#061309] tracking-tight">
            All Publications
          </h2>

          <div className="font-mono text-xs text-[#061309] font-bold">
            {BLOG_POSTS.length} Articles
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#2D5A3D]/15 hover:border-[#2D5A3D]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Visual Thumbnail: Matched to native 1.1 aspect ratio with object-contain to ensure ZERO cropping */}
                <div className="relative aspect-[1.1/1] w-full overflow-hidden bg-[#FAF7F2] p-2 flex items-center justify-center border-b border-[#2D5A3D]/10">
                  <div className="relative w-full h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#14532D] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#52695C] font-medium font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#2D5A3D]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-xs text-[#52695C] mb-3">
                      <Calendar className="w-3.5 h-3.5 text-[#2D5A3D]" />
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#061309] group-hover:text-[#14532D] transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#EFE8E0] text-[#1C2E24] border border-[#2D5A3D]/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Card Footer: Bottom-left text removed, clean right-aligned Read Article button */}
              <div className="px-5 sm:px-6 py-3.5 bg-[#FAF7F2] border-t border-[#2D5A3D]/10 flex items-center justify-end text-xs">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-mono text-xs font-bold text-[#061309] group-hover:text-[#FFAE00] flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── 03. BOTTOM CONSISTENT CTA ── */}
      <ConsistentCTA />
    </div>
  );
}
