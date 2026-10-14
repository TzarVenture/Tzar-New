"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Copy,
  Check,
  Linkedin,
  Lightbulb,
  Info,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { BlogPost } from "@/lib/data/blogData";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import { TypewriterHeadline } from "@/legacy-src/components/ui/TypewriterHeadline";

interface BlogDetailViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogDetailView({ post, relatedPosts }: BlogDetailViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://www.tzar.co/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  // Split title for yellow accent highlight on the key closing phrase
  const { titlePrefix, titleAccent } = useMemo(() => {
    const words = post.title.trim().split(" ");
    const splitIdx =
      words.length > 6
        ? words.length - 3
        : words.length > 3
        ? words.length - 2
        : 1;
    const prefix = words.slice(0, splitIdx).join(" ") + " ";
    const accent = words.slice(splitIdx).join(" ");
    return { titlePrefix: prefix, titleAccent: accent };
  }, [post.title]);

  return (
    <div className="min-h-screen bg-[#EFE8E0] font-sans selection:bg-[#FFAE00] selection:text-[#061309] overflow-x-hidden">
      {/* ── 01. HERO BANNER (Dark Luxury Spruce Theme) ── */}
      <section className="relative bg-[#061309] text-white pt-32 sm:pt-40 lg:pt-44 pb-0 overflow-hidden">
        {/* Ambient Radial Glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 25%, rgba(20, 83, 45, 0.45) 0%, transparent 60%), radial-gradient(circle at 15% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
          }}
        />

        {/* 32px Micro-Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#B6F8DD]/70 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link href="/blog" className="hover:text-white transition-colors">
              BLOG
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#FFAE00] font-semibold truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </nav>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 mb-5 text-xs">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#061309] bg-[#FFAE00] px-3 py-1 rounded-full shadow-sm">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/75 font-medium font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#B6F8DD]" />
              {post.date}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-white/75 font-medium font-mono">
              <Clock className="w-3.5 h-3.5 text-[#B6F8DD]" />
              {post.readTime} Read
            </span>
          </div>

          {/* Main Article Title with Zero-Layout-Shift Height Lock & Yellow Highlight */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] max-w-4xl relative">
            {/* Invisible layout-reservation clone: locks exact height and line breaks so 0px height shift occurs */}
            <span className="invisible select-none pointer-events-none block" aria-hidden="true">
              <span>{titlePrefix}</span>
              <span className="text-[#FFAE00]">{titleAccent}</span>
            </span>

            {/* Overlaid Typewriter */}
            <span className="absolute inset-0">
              <TypewriterHeadline
                segments={[
                  { text: titlePrefix, className: "text-white" },
                  { text: titleAccent, className: "text-[#FFAE00]" },
                ]}
                speed={30}
                delay={150}
                cursorColor="#FFAE00"
              />
            </span>
          </h1>
        </div>

        {/* ── Seamless Organic Wave Transition into #EFE8E0 with pb-0 so zero dark strip occurs ── */}
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

      {/* ── 02. EDITORIAL ARTICLE CONTAINER (Generous max-w-7xl Width) ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#061309] hover:text-[#14532D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Publications</span>
          </Link>
        </div>

        {/* 2-Column Content Grid: Main Reader Area & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Body (8 Columns - wide, spacious reading card) */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#2D5A3D]/15 shadow-sm">
            {/* Sections */}
            {post.content.map((section, idx) => (
              <div key={idx} className={idx > 0 ? "mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-[#2D5A3D]/10" : ""}>
                {section.heading && (
                  <h2
                    id={section.headingId}
                    className="font-display text-2xl sm:text-3xl font-extrabold text-[#061309] tracking-tight leading-snug mb-4 scroll-mt-28"
                  >
                    {section.heading}
                  </h2>
                )}

                {section.subheading && (
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#14532D] mb-3">
                    {section.subheading}
                  </h3>
                )}

                {/* Paragraphs */}
                {section.paragraphs?.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-base sm:text-lg text-[#1C2E24] leading-relaxed mb-4 font-normal"
                  >
                    {para}
                  </p>
                ))}

                {/* Styled Lists */}
                {section.listItems && section.listItems.length > 0 && (
                  <div className="my-6 space-y-3">
                    {section.listItems.map((item, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#2D5A3D]/10"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#14532D] mt-2 shrink-0" />
                        <div>
                          {item.title && (
                            <strong className="block text-sm sm:text-base font-bold text-[#061309] mb-0.5">
                              {item.title}
                            </strong>
                          )}
                          <span className="text-xs sm:text-sm text-[#4D6556] leading-relaxed">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Callout Boxes */}
                {section.callout && (
                  <div
                    className={`my-6 p-5 sm:p-6 rounded-2xl border flex items-start gap-4 ${
                      section.callout.type === "warning"
                        ? "bg-amber-50/70 border-amber-300 text-amber-950"
                        : section.callout.type === "note"
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                        : "bg-[#061309] text-white border-[#2D5A3D]/40"
                    }`}
                  >
                    {section.callout.type === "warning" ? (
                      <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    ) : section.callout.type === "note" ? (
                      <Info className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Lightbulb className="w-6 h-6 text-[#FFAE00] shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="block font-mono text-[11px] uppercase tracking-wider font-bold mb-1 opacity-80">
                        Strategic Takeaway
                      </span>
                      <p className="font-sans text-sm sm:text-base font-medium leading-relaxed">
                        {section.callout.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Tags Strip */}
            <div className="mt-10 pt-6 border-t border-[#2D5A3D]/15 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#061309] mr-2">
                TOPICS:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 rounded-lg bg-[#FAF7F2] text-[#1C2E24] border border-[#2D5A3D]/15"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social Share Bar */}
            <div className="mt-8 pt-6 border-t border-[#2D5A3D]/15 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#061309] flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#14532D]" />
                Share this publication:
              </span>

              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#FAF7F2] hover:bg-[#061309] hover:text-[#FFAE00] text-[#061309] border border-[#2D5A3D]/15 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* X / Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-9 h-9 rounded-xl bg-[#FAF7F2] hover:bg-[#061309] hover:text-[#FFAE00] text-[#061309] border border-[#2D5A3D]/15 flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#FAF7F2] hover:bg-[#061309] hover:text-[#FFAE00] text-[#061309] border border-[#2D5A3D]/15 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 0 1-5.82 2.41c-1.42 0-2.82-.37-4.04-1.07l-.29-.17-3.11.82.83-3.03-.19-.3a8.2 8.2 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m4.51 11.66c-.25-.13-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.09-.17.04-.32-.02-.45-.07-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.13.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29" />
                  </svg>
                </a>

                {/* Copy Link */}
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                  className="px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#061309] hover:text-[#FFAE00] text-[#061309] border border-[#2D5A3D]/15 flex items-center gap-1.5 text-xs font-mono font-bold transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-[#2D5A3D]/15 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2D5A3D]/10">
                  <BookOpen className="w-4 h-4 text-[#14532D]" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[#061309]">
                    Table of Contents
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {post.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-xs sm:text-sm text-[#4D6556] hover:text-[#14532D] hover:font-bold transition-colors block py-1 border-l-2 border-transparent hover:border-[#FFAE00] pl-3"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Consultation Strategy Card */}
            <div className="bg-[#061309] text-white rounded-3xl p-6 border border-[#2D5A3D]/30 shadow-xl relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(20, 83, 45, 0.6) 0%, transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFAE00] font-bold block mb-2">
                  Client Execution
                </span>
                <h4 className="font-display text-xl font-extrabold text-white mb-2 leading-tight">
                  Need Help Scaling Your Brand&rsquo;s Organic Search?
                </h4>
                <p className="text-xs sm:text-sm text-[#B6F8DD]/80 leading-relaxed mb-5 font-sans">
                  Speak directly with the practitioners behind these frameworks. We audit your web architecture and build custom conversion roadmaps.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-3 bg-[#FFAE00] hover:bg-white text-[#061309] font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ── 03. RELATED ARTICLES STRIP (max-w-7xl) ── */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#2D5A3D]/15">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#2D5A3D]/15">
            <h2 className="font-display text-2xl font-black text-[#061309] tracking-tight">
              Related Strategic Publications
            </h2>
            <Link
              href="/blog"
              className="font-mono text-xs font-bold text-[#14532D] hover:text-[#061309] flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <article
                key={rPost.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#2D5A3D]/15 hover:border-[#2D5A3D]/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <Link href={`/blog/${rPost.slug}`} className="block">
                  <div className="relative aspect-[1.1/1] w-full overflow-hidden bg-[#FAF7F2] p-2 flex items-center justify-center border-b border-[#2D5A3D]/10">
                    <div className="relative w-full h-full">
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#14532D] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {rPost.category}
                        </span>
                        <span className="text-[11px] text-[#52695C] font-mono">
                          {rPost.readTime}
                        </span>
                      </div>

                      <h3 className="font-display text-sm sm:text-base font-extrabold text-[#061309] group-hover:text-[#14532D] transition-colors leading-snug line-clamp-2 mb-2">
                        {rPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>

                <div className="px-4 py-2.5 bg-[#FAF7F2] border-t border-[#2D5A3D]/10 flex items-center justify-end text-xs">
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="font-mono text-xs font-bold text-[#061309] group-hover:text-[#FFAE00] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── 04. BOTTOM CONSISTENT CTA ── */}
      <ConsistentCTA />
    </div>
  );
}
