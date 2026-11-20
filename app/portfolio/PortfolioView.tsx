"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import { TypewriterHeadline } from "@/legacy-src/components/ui/TypewriterHeadline";
import {
  PLATFORM_CASE_STUDIES,
  WEB_CASE_STUDIES,
  CATEGORY_LABELS,
  type CaseStudy,
} from "./caseStudies";
import {
  GridTexture,
  DarkBackdrop,
  WaveHero,
  DeviceDuo,
  ModuleIconBadge,
  TechStack,
  TechGrid,
} from "./components/PortfolioUI";
import { DARK_GRADIENT } from "./theme";
import { CardIllustration, PipelineFlow, type IllustrationName } from "./components/Illustrations";


/* --------------------------------------------------------------------------
   01. WEB DESIGN PROJECTS DATA (20 Real Client Websites from tzar)
-------------------------------------------------------------------------- */
interface WebProject {
  id: number;
  title: string;
  link: string;
  img: string;
  logo: string;
  services: string[];
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: 1,
    title: "Apollo India",
    link: "https://apolloindia.com",
    img: "/optimized/assets/images/projects/r1.webp",
    logo: "/assets/images/projects/Artboard 9.png",
    services: ["Shopify Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 2,
    title: "Mahaarajaa",
    link: "https://mahaarajaa.life/",
    img: "/optimized/assets/images/projects/r2.webp",
    logo: "/assets/images/projects/Artboard 3.png",
    services: ["Shopify Development", "Social Media", "SMM"],
  },
  {
    id: 3,
    title: "Blue7Vets",
    link: "https://blue7vets.com",
    img: "/optimized/assets/images/projects/r3.webp",
    logo: "/assets/images/projects/Artboard 8.png",
    services: ["WordPress Website Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 4,
    title: "Cabelo Chave",
    link: "https://cabelochave.com/",
    img: "/optimized/assets/images/projects/r4.webp",
    logo: "/assets/images/projects/Artboard 1.png",
    services: ["Shopify Development", "UI/UX Strategy"],
  },
  {
    id: 5,
    title: "Doordash",
    link: "https://www.doordash.com/",
    img: "/optimized/assets/images/projects/r5.webp",
    logo: "/assets/images/projects/Artboard 20 (1).png",
    services: ["Custom Web Development", "UI/UX Strategy"],
  },
  {
    id: 7,
    title: "Orcollective",
    link: "https://orcollective.co.uk/",
    img: "/optimized/assets/images/projects/r7.webp",
    logo: "/assets/images/projects/Artboard 19 (1).png",
    services: ["Shopify Development", "UI/UX Strategy"],
  },
  {
    id: 8,
    title: "Staples",
    link: "https://www.staples.com/",
    img: "/optimized/assets/images/projects/r8.webp",
    logo: "/assets/images/projects/Artboard 17 (1).png",
    services: ["Custom Web Development", "Social Media"],
  },
  {
    id: 9,
    title: "Target",
    link: "https://www.target.com/",
    img: "/optimized/assets/images/projects/r9.webp",
    logo: "/assets/images/projects/Artboard 18 (1).png",
    services: ["Custom Web Development", "UI/UX Strategy"],
  },
  {
    id: 10,
    title: "DIY Mumbai",
    link: "https://diyguru-mumbai.org/",
    img: "/optimized/assets/images/projects/r10.webp",
    logo: "/assets/images/projects/Artboard 7.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 11,
    title: "Little Flower Children School, Mau",
    link: "http://www.lfcsmau.co/",
    img: "/optimized/assets/images/projects/r11.webp",
    logo: "/assets/images/projects/Artboard 4.png",
    services: ["WordPress Website Development", "Social Media"],
  },
  {
    id: 12,
    title: "Urbanladder",
    link: "https://www.urbanladder.com/",
    img: "/optimized/assets/images/projects/r12.webp",
    logo: "/assets/images/projects/Artboard 2.png",
    services: ["Custom Website Work", "SEO Optimization"],
  },
  {
    id: 13,
    title: "Femmella",
    link: "https://www.femmella.com/",
    img: "/optimized/assets/images/projects/r13.webp",
    logo: "/assets/images/projects/Artboard 6.png",
    services: ["Shopify Development", "SEO Optimization"],
  },
  {
    id: 14,
    title: "Printshop",
    link: "https://www.printshop.com/",
    img: "/optimized/assets/images/projects/r14.webp",
    logo: "/assets/images/projects/Artboard 12.png",
    services: ["Custom Web Development", "UI/UX Strategy"],
  },
  {
    id: 15,
    title: "Cadd Centre Thane",
    link: "https://caddcentrethane.com/",
    img: "/optimized/assets/images/projects/r15.webp",
    logo: "/assets/images/projects/Artboard 11.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 16,
    title: "Happy Brews",
    link: "https://happybrews.co.in/",
    img: "/optimized/assets/images/projects/r16.webp",
    logo: "/assets/images/projects/Artboard 1.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 18,
    title: "The Clothing Factory",
    link: "https://theclothingfactory.in/",
    img: "/optimized/assets/images/projects/Website 5.webp",
    logo: "/assets/images/projects/Artboard 20 (1).png",
    services: ["Shopify Development", "UI/UX Strategy"],
  },
  {
    id: 19,
    title: "Gurukul Vatika",
    link: "https://gurukulvatika.com/",
    img: "/optimized/assets/images/projects/r21.webp",
    logo: "/assets/images/projects/Artboard 16.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 20,
    title: "softdots",
    link: "https://softdots.deepakwp.in/",
    img: "/optimized/assets/images/projects/r19.webp",
    logo: "/assets/images/projects/Artboard 14.png",
    services: ["WordPress Website Development", "Social Media", "SEO Optimization"],
  },
  {
    id: 21,
    title: "Chadar Mahotsav",
    link: "https://chadarmahotsav.com/",
    img: "/optimized/assets/images/projects/r20.webp",
    logo: "/assets/images/projects/Artboard 13.png",
    services: ["WordPress Website Development", "UI/UX Strategy"],
  },
  {
    id: 22,
    title: "Kp",
    link: "https://kpmumbai.com/",
    img: "/optimized/assets/images/projects/Website 4.webp",
    logo: "/assets/images/projects/Artboard 5.png",
    services: ["Shopify Development", "Social Media", "SEO Optimization"],
  },
];

/* Harmonious soft card backdrops matching site branding */

/* --------------------------------------------------------------------------
   02. CREATIVE BANNERS DATA (from tzar)
-------------------------------------------------------------------------- */
interface BannerItem {
  id: number;
  url: string;
}

const CREATIVE_BANNERS: BannerItem[] = [
  { id: 1, url: "https://ik.imagekit.io/ihxz8q7gr/1.jpg?updatedAt=1682423152315" },
  { id: 2, url: "https://ik.imagekit.io/ihxz8q7gr/3.jpg?updatedAt=1682423152314" },
  { id: 3, url: "https://ik.imagekit.io/ihxz8q7gr/2.jpg?updatedAt=1682423151909" },
  { id: 4, url: "https://ik.imagekit.io/ihxz8q7gr/8__1_.jpg?updatedAt=1682601106978" },
  { id: 9, url: "https://ik.imagekit.io/ihxz8q7gr/10.jpg?updatedAt=1682601106985" },
  { id: 28, url: "https://ik.imagekit.io/ihxz8q7gr/2__6_.jpg?updatedAt=1682602425931" },
  { id: 29, url: "https://ik.imagekit.io/ihxz8q7gr/1__3_.jpg?updatedAt=1682601964160" },
  { id: 30, url: "https://ik.imagekit.io/ihxz8q7gr/1__4_.jpg?updatedAt=1682601964160" },
  { id: 31, url: "https://ik.imagekit.io/ihxz8q7gr/3__2_.jpg?updatedAt=1682601964180" },
  { id: 32, url: "https://ik.imagekit.io/ihxz8q7gr/1__2___1_.jpg?updatedAt=1682601964157" },
  { id: 33, url: "https://ik.imagekit.io/ihxz8q7gr/1__5_.jpg?updatedAt=1682601964185" },
  { id: 34, url: "https://ik.imagekit.io/ihxz8q7gr/5__1_.jpg?updatedAt=1682602425847" },
  { id: 35, url: "https://ik.imagekit.io/ihxz8q7gr/3__1_.jpg?updatedAt=1682602425880" },
  { id: 36, url: "https://ik.imagekit.io/ihxz8q7gr/3__5_.jpg?updatedAt=1682602425890" },
];

/* --------------------------------------------------------------------------
   03. REELS DATA (YouTube vertical embeds from tzar)
-------------------------------------------------------------------------- */
interface VideoItem {
  id: number;
  url: string;
  title: string;
}

const REELS: VideoItem[] = [
  { id: 5, url: "https://www.youtube.com/embed/7MPOVdcTT2E", title: "Brand Reel 1" },
  { id: 6, url: "https://www.youtube.com/embed/IUS0ux2MhWI", title: "Brand Reel 2" },
  { id: 7, url: "https://www.youtube.com/embed/OTh5RHPFs-I", title: "Brand Reel 3" },
  { id: 8, url: "https://www.youtube.com/embed/YBhpoYvxlKw", title: "Brand Reel 4" },
  { id: 22, url: "https://www.youtube.com/embed/OZ9SDm3lPn8", title: "Brand Reel 5" },
  { id: 23, url: "https://www.youtube.com/embed/A4M1nWVAOQQ", title: "Brand Reel 6" },
  { id: 24, url: "https://www.youtube.com/embed/6hmb37ircHo", title: "Brand Reel 7" },
  { id: 25, url: "https://www.youtube.com/embed/hLxltxtLGsw", title: "Brand Reel 8" },
  { id: 26, url: "https://www.youtube.com/embed/Sc6UNBemC3c", title: "Brand Reel 9" },
  { id: 27, url: "https://www.youtube.com/embed/fVNR25FvE_Q", title: "Brand Reel 10" },
];

/* --------------------------------------------------------------------------
   04. PRINT & PACKAGING DATA (from tzar)
-------------------------------------------------------------------------- */
interface PrintItem {
  id: number;
  img: string;
  title: string;
}

const PRINT_PACKAGING: PrintItem[] = [
  { id: 18, img: "/assets/images/projects/printPackaging1.png", title: "Luxury Retail Packaging Edition 1" },
  { id: 19, img: "/assets/images/projects/printPackaging2.png", title: "Premium Box & Label Design 2" },
  { id: 20, img: "/assets/images/projects/printPackaging3.png", title: "Custom Merchandise Packaging 3" },
  { id: 21, img: "/assets/images/projects/printPackaging4.png", title: "Eco-Friendly Product Box Edition 4" },
];

/* --------------------------------------------------------------------------
   05. NIGHT CLUB SHOOT DATA (Commercial event videos from tzar)
-------------------------------------------------------------------------- */
const NIGHT_CLUB_VIDEOS: VideoItem[] = [
  { id: 37, url: "https://www.youtube.com/embed/_wPXOrzwERk?si=sh6AektxhWprfBwT", title: "Commercial Event Reel 1" },
  { id: 38, url: "https://www.youtube.com/embed/KO6RTpW6wOY?si=MOEFiGvxXn6k9WgD", title: "Nightlife Production 2" },
  { id: 39, url: "https://www.youtube.com/embed/meZyRF6aJ9U?si=34Q53My64-f_Aj78", title: "Visual Experience 3" },
  { id: 34, url: "https://www.youtube.com/embed/ACSxYu_r1Bk?si=lbSZerL00vVqA7PR", title: "Nightlife Showcase 4" },
  { id: 35, url: "https://www.youtube.com/embed/RLSUarhKFRA?si=L8CPr4Ne1m8WKhF0", title: "Production Reel 5" },
  { id: 36, url: "https://www.youtube.com/embed/y4CoBtyTIVc?si=0onb519Y7ck2IngW", title: "Event Capture 6" },
  { id: 41, url: "https://www.youtube.com/embed/nzth16Cq2q0?si=x7YorVp3pp3kx0nP", title: "Aftermovie Highlight 7" },
  { id: 42, url: "https://www.youtube.com/embed/N0DAp3JHTIY?si=4L19FJprhqhjNoQM", title: "Atmosphere Video 8" },
  { id: 43, url: "https://www.youtube.com/embed/UcXh2ZlJlNg?si=bEsidHsxWlycxj_d", title: "Music & Visual Experience 9" },
  { id: 44, url: "https://www.youtube.com/embed/_wPXOrzwERk?si=eDCgwtN4-FyUUb8R", title: "Club Video 10" },
];

/* --------------------------------------------------------------------------
   ARCHIVE TABS (tech first, creative after)
-------------------------------------------------------------------------- */
type WebFilter = "web-all" | "web-shopify" | "web-wordpress" | "web-custom";
type ArchiveTab = WebFilter | "banners" | "reels" | "packaging" | "nightclub" | "behance";

const webKind = (p: WebProject): "shopify" | "wordpress" | "custom" =>
  p.services.some((s) => s.startsWith("Shopify"))
    ? "shopify"
    : p.services.some((s) => s.startsWith("WordPress"))
      ? "wordpress"
      : "custom";

const WEB_TABS: { id: WebFilter; label: string; count: number }[] = [
  { id: "web-all", label: "All Websites", count: WEB_PROJECTS.length },
  { id: "web-shopify", label: "Shopify", count: WEB_PROJECTS.filter((p) => webKind(p) === "shopify").length },
  { id: "web-wordpress", label: "WordPress", count: WEB_PROJECTS.filter((p) => webKind(p) === "wordpress").length },
  { id: "web-custom", label: "Custom Web", count: WEB_PROJECTS.filter((p) => webKind(p) === "custom").length },
];

const CREATIVE_TABS: { id: ArchiveTab; label: string; count: number | null }[] = [
  { id: "banners", label: "Creative Banners", count: CREATIVE_BANNERS.length },
  { id: "reels", label: "Reels", count: REELS.length },
  { id: "packaging", label: "Print & Packaging", count: PRINT_PACKAGING.length },
  { id: "nightclub", label: "Night Club Shoot", count: NIGHT_CLUB_VIDEOS.length },
  { id: "behance", label: "Behance Gallery", count: null },
];

const ARCHIVE_PREVIEW = 8;

/* Proof strip: figures already used across the site */
const PROOF_METRICS = [
  { value: "4", label: "CRM & SaaS platforms" },
  { value: "50+", label: "Live websites" },
  { value: "100+", label: "Brands served" },
  { value: "95%", label: "Client retention" },
];

/* "What we build" index: tech first */
const CAPABILITIES = [
  {
    art: "crm" as IllustrationName,
    title: CATEGORY_LABELS.crm,
    desc: "CRMs, dialers and dashboards.",
    href: "#platforms",
  },
  {
    art: "webapp" as IllustrationName,
    title: CATEGORY_LABELS.nextjs,
    desc: "Fast web apps and sites.",
    href: "#web-builds",
  },
  {
    art: "store" as IllustrationName,
    title: "Shopify stores",
    desc: "Stores built to sell on mobile.",
    href: "#web-builds",
  },
  {
    art: "wordpress" as IllustrationName,
    title: CATEGORY_LABELS.wordpress,
    desc: "Sites your team can edit.",
    href: "#web-builds",
  },
  {
    art: "creative" as IllustrationName,
    title: "Creative & media",
    desc: "Banners, reels and packaging.",
    href: "#archive",
  },
];

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Vite",
  "Tailwind CSS",
  "Shopify",
  "Liquid",
  "WordPress",
  "WooCommerce",
  "MongoDB",
  "Vercel",
];

const PROCESS = [
  { art: "discover" as IllustrationName, title: "Discover", desc: "Map your workflow, users and data." },
  { art: "design" as IllustrationName, title: "Design", desc: "Clickable designs, approved early." },
  { art: "build" as IllustrationName, title: "Build", desc: "Weekly releases on a live link." },
  { art: "launch" as IllustrationName, title: "Launch & support", desc: "Go-live, training and ongoing care." },
];

/* --------------------------------------------------------------------------
   PLATFORM PANEL (large, alternating)
-------------------------------------------------------------------------- */
function PlatformPanel({ study, index }: { study: CaseStudy; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <Link href={`/portfolio/${study.slug}`} className="block" aria-label={`${study.name} case study`}>
          <DeviceDuo
            desktop={study.images.desktop}
            desktopAlt={study.images.desktopAlt}
            mobile={study.images.mobile}
            name={study.name}
            domain={study.domain}
            tone="dark"
          />
        </Link>
      </div>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
          {study.name}
        </h3>
        <p className="mt-3 text-base sm:text-lg text-[#B6F8DD] leading-snug">{study.tagline}</p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
          {study.modules.slice(0, 4).map((m) => (
            <li key={m.title} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#FFAE00] flex items-center justify-center shrink-0">
                <ModuleIconBadge icon={m.icon} className="w-4 h-4 text-[#0E2015]" />
              </span>
              <span className="text-sm text-white font-semibold leading-snug">{m.title}</span>
            </li>
          ))}
        </ul>

        <TechStack items={study.stack} className="mt-6" />

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href={`/portfolio/${study.slug}`}
            className="h-11 bg-[#FFAE00] text-[#0E2015] font-bold px-6 rounded-xl inline-flex items-center gap-2 text-sm pf-btn pf-btn-primary"
          >
            Read case study
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/60 font-medium">
            <Lock className="w-3.5 h-3.5" />
            Demo on request
          </span>
        </div>
      </div>
    </article>
  );
}

/* --------------------------------------------------------------------------
   WEB BUILD CARD
-------------------------------------------------------------------------- */
function WebBuildCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group h-full flex flex-col bg-[#0E2015] rounded-3xl border border-[#244A2C] hover:border-[#FFAE00] transition-colors duration-300 overflow-hidden">
      <Link
        href={`/portfolio/${study.slug}`}
        aria-label={`${study.name} case study`}
        className="relative block p-5 sm:p-7 pb-0 sm:pb-0 overflow-hidden bg-[#EFE8E0]"
      >
        <DeviceDuo desktop={study.images.desktop} mobile={study.images.mobile} name={study.name} domain={study.domain} />
      </Link>
      <div className="flex-1 flex flex-col p-5 sm:p-7">
        <p className="text-sm text-[#FFAE00] font-semibold">
          {study.industry}
        </p>
        <h3 className="mt-1 font-montserrat font-black text-xl sm:text-2xl text-white tracking-tight">
          {study.name}
        </h3>
        <p className="mt-2 text-sm sm:text-[15px] text-[#B6F8DD] leading-relaxed">{study.tagline}</p>
        <div className="mt-auto pt-6 flex items-center justify-between gap-3">
          <Link
            href={`/portfolio/${study.slug}`}
            className="h-10 px-5 rounded-xl bg-[#FFAE00] text-[#0E2015] inline-flex items-center gap-2 text-sm font-bold pf-btn pf-btn-primary"
          >
            Read case study
            <ArrowRight className="w-4 h-4" />
          </Link>
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-[#FFAE00] underline-offset-4 hover:underline"
            >
              {study.domain}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const KIND_LABEL = { shopify: "Shopify store", wordpress: "WordPress site", custom: "Custom website" } as const;
const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");

function ArchiveSiteCard({ item }: { item: WebProject }) {
  const tags = item.services.filter((s) => !/^(Shopify|WordPress|Custom Web)/.test(s)).slice(0, 2);
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl overflow-hidden bg-[#0E2015] border border-[#244A2C] hover:border-[#FFAE00] transition-[border-color,transform] duration-200 active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFAE00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061309]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8E0]">
        <img
          src={item.img}
          alt={`${item.title} website on desktop and mobile`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex-1 flex flex-col p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-montserrat font-bold text-base text-white leading-tight truncate">{item.title}</h3>
            <p className="text-xs text-[#B6F8DD] truncate">{hostOf(item.link)}</p>
          </div>
          <span className="w-8 h-8 rounded-lg bg-[#1D4224] text-[#FFAE00] group-hover:bg-[#FFAE00] group-hover:text-[#0E2015] flex items-center justify-center shrink-0 transition-colors duration-200">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
        <div className="mt-4 pt-3 border-t border-[#244A2C] flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs font-bold text-[#FFAE00]">{KIND_LABEL[webKind(item)]}</span>
          {tags.map((t) => (
            <span key={t} className="text-[11px] font-semibold text-white/80 bg-[#173322] rounded-md px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function ArchiveTabButton({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number | null;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full font-montserrat font-bold text-sm pf-chip cursor-pointer select-none inline-flex items-center gap-2 ${
        active
          ? "bg-[#FFAE00] text-[#0E2015] border border-[#FFAE00]"
          : "bg-[#0E2015] text-white hover:text-[#FFAE00] border border-[#2A4A31] hover:border-[#FFAE00]"
      }`}
    >
      <span>{label}</span>
      {count !== null && (
        <span
          className={`text-[11px] px-1.5 py-0.5 rounded-full ${
            active ? "bg-[#0E2015] text-[#FFAE00]" : "bg-[#1D4224] text-white"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default function PortfolioView() {
  const [activeTab, setActiveTab] = useState<ArchiveTab>("web-all");
  const [showAllWeb, setShowAllWeb] = useState(false);
  const selectTab = (id: ArchiveTab) => {
    setActiveTab(id);
    setShowAllWeb(false);
  };
  const webFilter = activeTab.startsWith("web-") ? activeTab : null;
  const visibleWeb = WEB_PROJECTS.filter((p) =>
    webFilter === "web-all" ? true : webFilter ? `web-${webKind(p)}` === webFilter : false
  );

  return (
    <div className="relative isolate text-white min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-clip">
      <DarkBackdrop />
      {/* ──────────────────────────────────────────────────────────────────
          01. EDITORIAL HERO BANNER (MATCHING /our-client & SERVICES THEME)
          Widescreen Background Art + 3D Visual on Right + Organic Wave
      ────────────────────────────────────────────────────────────────── */}
      <WaveHero
        className="relative w-full min-h-[85vh] lg:min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-6 sm:pb-8 lg:pb-10">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">OUR PORTFOLIO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Description, Focus Pillars, CTAs */}
            <div className="lg:col-span-6 space-y-6 relative z-20 text-left">
              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                  Our Proven Work &amp;{" "}
                  <span className="text-[#FFAE00] block mt-1 sm:mt-2">
                    <TypewriterHeadline text="Case Studies" delay={250} />
                  </span>
                </h1>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#B6F8DD] max-w-md leading-relaxed">
                Selected CRMs, web apps and online stores we have built.
              </p>

              {/* Action Buttons (Left-aligned on mobile, matching identical width and height) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#portfolio-showcase"
                  className="w-[210px] sm:w-auto h-12 bg-[#FFAE00] text-[#0E2015] font-bold px-6 sm:px-7 rounded-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base group font-sans cursor-pointer pf-btn pf-btn-primary"
                >
                  <span>Explore Showcase</span>
                  <ArrowDown className="w-4 h-4 shrink-0" />
                </a>

                <Link
                  href="/contact"
                  className="w-[210px] sm:w-auto h-12 border border-[#3A5A40] text-white px-6 sm:px-7 rounded-xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 font-sans pf-btn pf-btn-ghost"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual (User Provided 3D Render) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-lg lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/portfolio-hero.webp"
                  alt="Tzar Digital Agency Portfolio Showcase"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-125 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

      </WaveHero>

      {/* ── 02. PROOF STRIP (dark card with breathing room below the hero wave, as on About) ── */}
      <section
        id="portfolio-showcase"
        className="relative z-20 pt-10 sm:pt-14 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div
          className="relative overflow-hidden text-white rounded-2xl sm:rounded-3xl border border-[#244A2C] shadow-2xl p-5 sm:p-7 lg:p-8"
          style={{ backgroundColor: "#061309", backgroundImage: DARK_GRADIENT }}
        >
          <GridTexture />
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PROOF_METRICS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""
                }`}
              >
                <span className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#FFAE00] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-bold text-xs sm:text-sm text-white/90 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. WHAT WE BUILD (tech-first index) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-end mb-8 sm:mb-10">
          <h2 className="lg:col-span-7 font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
            What we build
          </h2>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#B6F8DD] leading-relaxed">
            Engineering at the core. Design and media to launch it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {CAPABILITIES.map((cap, i) => {
            const lead = i === 0;
            return (
              <a
                key={cap.title}
                href={cap.href}
                className={`group flex flex-col rounded-2xl p-3 sm:p-3.5 border bg-[#0E2015] text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFAE00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061309] ${
                  lead ? "sm:col-span-2 lg:col-span-1 border-[#FFAE00]" : "border-[#244A2C] hover:border-[#FFAE00]"
                }`}
              >
                <CardIllustration name={cap.art} />
                <div className="flex items-end justify-between gap-3 px-1.5 pt-4 pb-1.5">
                  <div>
                    <h3 className="font-montserrat font-black text-base leading-tight">{cap.title}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-[#B6F8DD]">{cap.desc}</p>
                  </div>
                  <ArrowDown className="w-4 h-4 shrink-0 mb-0.5 text-[#FFAE00] transition-transform duration-200 group-hover:translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── 04. PLATFORMS: CRM, ERP & SaaS case studies ── */}
      <section id="platforms" className="py-14 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-[#244A2C] shadow-2xl px-5 py-10 sm:p-10 lg:p-14"
            style={{ backgroundColor: "#061309", backgroundImage: DARK_GRADIENT }}
          >
            <GridTexture />
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-6">
                  <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
                    CRM, ERP &amp; SaaS platforms
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-[#B6F8DD] leading-relaxed">
                    Software that runs sales, finance and call centres.
                  </p>
                </div>
                <div className="lg:col-span-6 rounded-2xl border border-[#244A2C] bg-[#0A1C10] px-3 sm:px-5 py-4">
                  <PipelineFlow className="block w-full h-auto" />
                </div>
              </div>

              <div className="mt-12 sm:mt-16 space-y-16 sm:space-y-20">
                {PLATFORM_CASE_STUDIES.map((study, i) => (
                  <div key={study.slug} className={i > 0 ? "pt-16 sm:pt-20 border-t border-white/10" : ""}>
                    <PlatformPanel study={study} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. WEB BUILDS: Next.js, Shopify, WordPress ── */}
      <section id="web-builds" className="pb-14 sm:pb-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-end mb-8 sm:mb-12">
            <h2 className="lg:col-span-7 font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
              Websites &amp; online stores
            </h2>
            <p className="lg:col-span-5 text-sm sm:text-base text-[#B6F8DD] leading-relaxed">
              Next.js for speed. Shopify to sell. WordPress to self-edit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {WEB_CASE_STUDIES.map((study) => (
              <WebBuildCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. ARCHIVE: all existing work, tech first ── */}
      <section id="archive" className="pb-14 sm:pb-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              More work
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#B6F8DD]">
              Websites first, then campaigns and creative.
            </p>
          </div>

          {/* Tabs: websites first, creative after */}
          <div className="flex items-center justify-start lg:justify-center lg:flex-wrap gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-3 mb-8 sm:mb-10 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {WEB_TABS.map((tab) => (
              <ArchiveTabButton
                key={tab.id}
                active={activeTab === tab.id}
                label={tab.label}
                count={tab.count}
                onClick={() => selectTab(tab.id)}
              />
            ))}
            <span className="shrink-0 w-px h-6 bg-[#2A4A31] mx-1" aria-hidden="true" />
            {CREATIVE_TABS.map((tab) => (
              <ArchiveTabButton
                key={tab.id}
                active={activeTab === tab.id}
                label={tab.label}
                count={tab.count}
                onClick={() => selectTab(tab.id)}
              />
            ))}
          </div>

          {/* ── TAB 1: WEB DESIGN GRID (20 Verified Client Builds) ── */}
          {webFilter && (
            <div
              key="web-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 animate-in fade-in duration-300"
            >
              {(showAllWeb ? visibleWeb : visibleWeb.slice(0, ARCHIVE_PREVIEW)).map((item) => (
                <ArchiveSiteCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {webFilter && !showAllWeb && visibleWeb.length > ARCHIVE_PREVIEW && (
            <div className="mt-8 sm:mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllWeb(true)}
                className="h-12 px-7 rounded-xl bg-[#FFAE00] text-[#0E2015] font-bold text-sm inline-flex items-center gap-2 cursor-pointer pf-btn pf-btn-primary"
              >
                Show all {visibleWeb.length} websites
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* ── TAB 2: CREATIVE BANNERS (14 High-Impact Creatives) ── */}
          {activeTab === "banners" && (
            <div
              key="banners-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300"
            >
              {CREATIVE_BANNERS.map((banner) => (
                <div
                  key={banner.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#1D4224]/10 shadow-xs hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="overflow-hidden bg-neutral-100 aspect-4/3 flex items-center justify-center">
                    <img
                      src={banner.url}
                      alt="Creative Brand Banner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 3: VIDEO REELS (10 Vertical YouTube Shorts) ── */}
          {activeTab === "reels" && (
            <div
              key="reels-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-300"
            >
              {REELS.map((reel) => (
                <div
                  key={reel.id}
                  className="bg-black rounded-2xl overflow-hidden border border-[#1D4224]/20 shadow-md aspect-9/16 relative"
                >
                  <iframe
                    src={reel.url}
                    title={reel.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 4: PRINT & PACKAGING (4 Luxury Editions) ── */}
          {activeTab === "packaging" && (
            <div
              key="packaging-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in duration-300"
            >
              {PRINT_PACKAGING.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#1D4224]/10 shadow-xs hover:shadow-xl transition-all duration-300 group p-6 flex flex-col justify-between"
                >
                  <div className="overflow-hidden rounded-2xl bg-neutral-100 flex items-center justify-center h-72 mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="text-center pt-2">
                    <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0E2015]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 5: NIGHT CLUB SHOOT (10 Commercial Productions) ── */}
          {activeTab === "nightclub" && (
            <div
              key="nightclub-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 animate-in fade-in duration-300"
            >
              {NIGHT_CLUB_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-md aspect-video"
                >
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── TAB 6: BEHANCE GALLERY (Official Embed) ── */}
          {activeTab === "behance" && (
            <div
              key="behance-grid"
              className="bg-white rounded-3xl p-4 sm:p-8 border border-[#1D4224]/10 shadow-sm animate-in fade-in duration-300"
            >
              <div className="mb-4 text-center">
                <span className="font-serif italic text-lg text-[#1D4224]">
                  Official Design Showcase
                </span>
                <h3 className="font-montserrat font-black text-2xl text-[#0E2015] uppercase mt-1">
                  Behance Curated Portfolio
                </h3>
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xs">
                <iframe
                  src="https://www.behance.net/embed/project/192005763?ilo0=1"
                  height="650"
                  width="100%"
                  allowFullScreen
                  className="w-full border-0"
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 07. STACK + HOW WE SHIP ── */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-[#244A2C] shadow-2xl px-5 py-10 sm:p-10 lg:p-14 text-white"
            style={{ backgroundColor: "#061309", backgroundImage: DARK_GRADIENT }}
          >
            <GridTexture />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-5 flex flex-col">
                <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white tracking-tight leading-[1.1]">
                  One team, brief to launch
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#B6F8DD] leading-relaxed">
                  Designers and engineers in Mumbai, under one roof.
                </p>
                <div className="mt-8 lg:flex-1 lg:flex lg:flex-col">
                  <TechGrid items={TECH_STACK} className="lg:flex-1" />
                </div>
              </div>

              <ol className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {PROCESS.map((step, i) => (
                  <li key={step.title} tabIndex={-1} className="group rounded-2xl border border-[#244A2C] bg-[#0C1F12] p-3 sm:p-3.5 hover:border-[#FFAE00] transition-colors duration-300">
                    <CardIllustration name={step.art} />
                    <div className="px-1.5 pt-4 pb-1.5">
                      <h3 className="font-montserrat font-bold text-base sm:text-lg text-white">
                        <span className="text-[#FFAE00]">{i + 1}.</span> {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/75 leading-snug">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08. CONSISTENT REUSABLE CTA CARD ── */}
      <ConsistentCTA
        title="Have a CRM, web app or store in mind?"
        description="Tell us how your team works. We'll reply with a plan, timeline and stack."
        primaryText="Start a Project"
        primaryHref="/contact"
        secondaryText="Website Development"
        secondaryHref="/website-development-services"
      />
    </div>
  );
}
