"use client";

import React from "react";
import Image from "next/image";
import "../portfolio.css";
import {
  BarChart3,
  Droplet,
  LayoutGrid,
  Palette,
  PhoneCall,
  Calendar,
  FileText,
  Gift,
  Globe,
  Headphones,
  LayoutTemplate,
  Megaphone,
  Mic,
  Phone,
  Receipt,
  Route,
  Search,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ModuleIcon } from "../caseStudies";
import { BRAND_PATHS } from "./brandPaths";

export function GridTexture({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

/* ── Fixed page backdrop ────────────────────────────────────────────────
   The About-page shapes (green discs traced by gold arcs) drawn in code,
   then blurred into soft light so they set the mood without competing with
   text. A dark scrim keeps contrast even, and fine grain stops banding. */
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export function DarkBackdrop() {
  // iOS Safari only applies :active on tap when a touch listener exists.
  React.useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#061309]">
      <div className="absolute -inset-[10%] pf-backdrop-shapes">
        {/* Top-right */}
        <svg viewBox="0 0 600 600" className="absolute top-[4%] right-[4%] w-[min(90vw,760px)] h-auto">
          <circle cx="430" cy="110" r="300" fill="#1B4D2B" />
          <circle cx="430" cy="110" r="300" fill="none" stroke="#FFAE00" strokeWidth="10" strokeDasharray="520 1365" transform="rotate(95 430 110)" />
          <circle cx="365" cy="395" r="140" fill="#163F24" />
        </svg>
        {/* Bottom-left */}
        <svg viewBox="0 0 600 600" className="absolute bottom-[4%] left-[4%] w-[min(95vw,800px)] h-auto">
          <circle cx="150" cy="500" r="310" fill="#174528" />
          <circle cx="150" cy="500" r="310" fill="none" stroke="#FFAE00" strokeWidth="10" strokeDasharray="560 1388" transform="rotate(255 150 500)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[#061309]/40" />
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
    </div>
  );
}

/* ── Hero with an organic wave bottom edge and the gold accent line ───────
   The section is masked along the curve so the page backdrop shows below it,
   and the gold line is drawn on exactly the same curve outside the mask. */
const WAVE_CURVE = "M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40";
const WAVE_MASK_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'><path d='M0,0 H1440 V40 C1260,20 1060,80 800,45 C540,10 320,80 0,35 Z'/></svg>\")";
const WAVE_MASK: React.CSSProperties = {
  maskImage: `linear-gradient(#000, #000), ${WAVE_MASK_SVG}`,
  maskSize: "100% calc(100% - var(--wave-h) + 1px), 100% var(--wave-h)",
  maskPosition: "top, bottom",
  maskRepeat: "no-repeat",
  WebkitMaskImage: `linear-gradient(#000, #000), ${WAVE_MASK_SVG}`,
  WebkitMaskSize: "100% calc(100% - var(--wave-h) + 1px), 100% var(--wave-h)",
  WebkitMaskPosition: "top, bottom",
  WebkitMaskRepeat: "no-repeat",
};

export function WaveHero({
  className = "",
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div className="relative [--wave-h:40px] sm:[--wave-h:64px] lg:[--wave-h:96px]">
      <section className={className} style={{ ...style, ...WAVE_MASK }}>
        {children}
        <div aria-hidden="true" style={{ height: "var(--wave-h)" }} />
      </section>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full pointer-events-none z-20"
        style={{ height: "var(--wave-h)" }}
      >
        <path d={WAVE_CURVE} stroke="#FFAE00" strokeWidth="2.5" vectorEffect="non-scaling-stroke" fill="none" />
      </svg>
    </div>
  );
}

/* ── Browser window frame ──────────────────────────────────────────────── */
export function BrowserFrame({
  src,
  alt,
  domain,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 720px, 100vw",
  tone = "light",
}: {
  src: string;
  alt: string;
  domain?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`rounded-xl sm:rounded-2xl overflow-hidden border shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ${
        dark ? "bg-[#0B1A10] border-[#244A2C]" : "bg-white border-[#D9D2C7]"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 px-3 sm:px-4 h-7 sm:h-9 border-b ${
          dark ? "border-[#244A2C] bg-[#0E2015]" : "border-[#D9D2C7] bg-[#F6F2EC]"
        }`}
      >
        <span className="flex gap-1 sm:gap-1.5 shrink-0" aria-hidden="true">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28C840]" />
        </span>
        {domain ? (
          <span
            className={`mx-auto truncate max-w-[70%] text-[9px] sm:text-[11px] font-medium px-3 py-0.5 rounded-md ${
              dark ? "bg-[#173322] text-white/70" : "bg-white text-[#5C6860] border border-[#D9D2C7]"
            }`}
          >
            {domain}
          </span>
        ) : (
          <span className="mx-auto" />
        )}
        <span className="w-8 sm:w-10 shrink-0" aria-hidden="true" />
      </div>
      <div className="relative aspect-16/10 bg-[#EEE]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/* ── iPhone frame (same art + screen insets as the homepage showcase) ──── */
const PHONE_SCREEN_INSET = { top: "1.62%", bottom: "1.62%", left: "4.12%", right: "4.04%" };

export function PhoneFrame({
  src,
  alt,
  className = "",
  sizes = "260px",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[1311/2708] drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div
        className="absolute overflow-hidden bg-[#07130a]"
        style={{ ...PHONE_SCREEN_INSET, borderRadius: "12.5% / 6%" }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mockups/iphone17-frame.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* ── Desktop + phone composition used on cards and case-study heroes ───── */
export function DeviceDuo({
  desktop,
  desktopAlt,
  mobile,
  name,
  domain,
  priority = false,
  tone = "light",
}: {
  desktop: string;
  desktopAlt?: string;
  mobile?: string;
  name: string;
  domain?: string;
  priority?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <div className="relative pb-6 sm:pb-10">
      <div className={mobile ? "pr-[11%]" : desktopAlt ? "pr-[10%] pb-[10%]" : ""}>
        <BrowserFrame src={desktop} alt={`${name} desktop screen`} domain={domain} priority={priority} tone={tone} />
      </div>
      {mobile && (
        <div className="absolute right-0 bottom-0 w-[22%]">
          <PhoneFrame src={mobile} alt={`${name} mobile screen`} sizes="(min-width: 1024px) 180px, 24vw" />
        </div>
      )}
      {!mobile && desktopAlt && (
        <div className="absolute right-0 bottom-0 w-[62%]">
          <BrowserFrame src={desktopAlt} alt={`${name} second screen`} domain={domain} tone={tone} sizes="(min-width: 1024px) 460px, 62vw" />
        </div>
      )}
    </div>
  );
}

/* ── Module icon map ───────────────────────────────────────────────────── */
const ICONS: Record<ModuleIcon, LucideIcon> = {
  pipeline: Workflow,
  invoice: Receipt,
  chart: BarChart3,
  users: Users,
  phone: Phone,
  headset: Headphones,
  mic: Mic,
  shield: ShieldCheck,
  route: Route,
  megaphone: Megaphone,
  calendar: Calendar,
  globe: Globe,
  cart: ShoppingCart,
  gift: Gift,
  search: Search,
  layout: LayoutTemplate,
  zap: Zap,
  file: FileText,
};

export function ModuleIconBadge({ icon, className = "" }: { icon: ModuleIcon; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} aria-hidden="true" />;
}

/* ── Tech stack: brand marks in place of text chips ──────────────────────
   Monochrome marks on solid tiles so a mixed stack reads as one set.
   Non-brand items (charts, dialer, custom theme) use matching line icons. */
const GENERIC: Record<string, LucideIcon> = {
  Liquid: Droplet,
  WooCommerce: ShoppingCart,
  Charts: BarChart3,
  "Dialer integration": PhoneCall,
  "Custom theme": Palette,
  "Custom sections": LayoutGrid,
};

const SHORT: Record<string, string> = {
  "Dialer integration": "Dialer",
  "Custom theme": "Theme",
  "Custom sections": "Sections",
  "Tailwind CSS": "Tailwind",
};

export function TechMark({ name, className = "" }: { name: string; className?: string }) {
  const path = BRAND_PATHS[name];
  if (path) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    );
  }
  const Icon = GENERIC[name] ?? LayoutGrid;
  return <Icon className={className} strokeWidth={1.8} aria-hidden="true" />;
}

/** Row of icon tiles with a short label under each (platform panels, case studies). */
export function TechStack({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-3 ${className}`} aria-label="Built with">
      {items.map((t) => (
        <li key={t} className="group/tech w-14 flex flex-col items-center gap-1.5" title={t}>
          <span className="w-11 h-11 rounded-xl bg-[#12301A] border border-[#2A4A31] flex items-center justify-center text-[#EFE8E0] transition-colors duration-200 group-hover/tech:border-[#FFAE00] group-hover/tech:text-[#FFAE00]">
            <TechMark name={t} className="w-5 h-5" />
          </span>
          <span className="text-[11px] leading-tight font-semibold text-white/75 text-center">{SHORT[t] ?? t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Even grid of larger tiles (the "One team" panel). */
export function TechGrid({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`grid grid-cols-3 sm:grid-cols-4 auto-rows-fr gap-2.5 sm:gap-3 ${className}`} aria-label="Our stack">
      {items.map((t) => (
        <li
          key={t}
          className="group/tech aspect-square lg:aspect-auto lg:min-h-24 rounded-2xl bg-[#0C1F12] border border-[#244A2C] flex flex-col items-center justify-center gap-2 text-[#EFE8E0] transition-colors duration-200 hover:border-[#FFAE00] hover:text-[#FFAE00]"
        >
          <TechMark name={t} className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="text-[11px] sm:text-xs font-semibold text-white/75 text-center leading-tight px-1">{SHORT[t] ?? t}</span>
        </li>
      ))}
    </ul>
  );
}
