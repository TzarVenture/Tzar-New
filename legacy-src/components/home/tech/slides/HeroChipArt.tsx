"use client";

/* Small animated marks for the four feature chips on each hero slide.
   Each sits on a solid dark tile in the brand palette and keeps moving;
   visitors who prefer reduced motion get the still frame. */

import React from "react";
import "./HeroChipArt.css";

const C = {
  ink: "#0E2015",
  panel: "#1D4224",
  line: "#2E5236",
  gold: "#FFAE00",
  mint: "#B6F8DD",
  paper: "#EFE8E0",
};

export type HeroChipName =
  | "speed"
  | "pwa"
  | "seo"
  | "cloud"
  | "routing"
  | "analytics"
  | "pipeline"
  | "invoice"
  | "fps"
  | "crossplatform"
  | "push"
  | "offline";

const delay = (s: number): React.CSSProperties => ({ animationDelay: `${s}s` });

const ART: Record<HeroChipName, () => React.ReactElement> = {
  /* Sub-second performance: bolt with speed lines streaming past */
  speed: () => (
    <>
      {[12, 20, 28].map((y, i) => (
        <rect key={y} className="hc-stream" style={delay(i * 0.25)} x="5" y={y - 1} width="9" height="2" rx="1" fill={C.mint} />
      ))}
      <path d="M23 6 L13 22 H20 L17 34 L28 17 H21 Z" fill={C.gold} />
    </>
  ),
  /* Mobile-first PWA: phone with content scrolling */
  pwa: () => (
    <>
      <defs>
        <clipPath id="hc-pwa-screen">
          <rect x="14" y="9" width="12" height="20" rx="1.5" />
        </clipPath>
      </defs>
      <rect x="12" y="6" width="16" height="28" rx="3.5" fill="none" stroke={C.paper} strokeWidth="1.8" />
      <g clipPath="url(#hc-pwa-screen)">
        <g className="hc-scroll">
          {[0, 1].map((k) => (
            <g key={k} transform={`translate(0 ${k * 20})`}>
              <rect x="15" y="10" width="10" height="5" rx="1" fill={C.gold} />
              <rect x="15" y="17" width="10" height="2" rx="1" fill={C.mint} />
              <rect x="15" y="21" width="7" height="2" rx="1" fill={C.mint} />
              <rect x="15" y="25" width="10" height="3" rx="1" fill={C.line} />
            </g>
          ))}
        </g>
      </g>
      <rect x="18" y="31" width="4" height="1.2" rx="0.6" fill={C.paper} />
    </>
  ),
  /* SEO & search indexing: lens over rising rankings */
  seo: () => (
    <>
      {[[9, 22], [14, 17], [19, 12]].map(([x, y], i) => (
        <rect key={x} className="hc-grow" style={delay(i * 0.18)} x={x} y={y} width="3.5" height={30 - y} rx="1" fill={i === 2 ? C.gold : C.mint} />
      ))}
      <g className="hc-bob">
        <circle cx="26" cy="15" r="6.5" fill={C.ink} stroke={C.paper} strokeWidth="2" />
        <path d="M30.6 19.6 L35 24" stroke={C.paper} strokeWidth="2.6" strokeLinecap="round" />
      </g>
      <rect x="7" y="30" width="20" height="1.6" rx="0.8" fill={C.paper} />
    </>
  ),
  /* Zero-downtime cloud scaling: cloud with steady uptime pulse */
  cloud: () => (
    <>
      <path d="M12 27 a6 6 0 0 1 0.6 -12 a8 8 0 0 1 15.2 1.6 a5.2 5.2 0 0 1 -0.6 10.4 Z" fill={C.paper} />
      <path className="hc-draw" pathLength={1} d="M11 21 H16 L18 17 L21 25 L23 21 H29" fill="none" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="hc-blink" cx="31" cy="31" r="2.2" fill={C.mint} />
      <rect x="9" y="30" width="18" height="2" rx="1" fill={C.line} />
    </>
  ),
  /* Instant lead & WhatsApp routing: a lead splits to the right person */
  routing: () => (
    <>
      <path d="M10 20 C17 20 18 11 25 11 M10 20 C17 20 18 29 25 29" fill="none" stroke={C.line} strokeWidth="1.8" />
      <circle cx="10" cy="20" r="4" fill={C.gold} />
      <circle cx="29" cy="11" r="4" fill={C.paper} />
      <circle cx="29" cy="29" r="4" fill={C.mint} />
      <circle r="1.9" fill={C.gold}>
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M10 20 C17 20 18 11 25 11" />
      </circle>
      <circle r="1.9" fill={C.gold}>
        <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M10 20 C17 20 18 29 25 29" />
      </circle>
    </>
  ),
  /* Real-time revenue analytics: line chart drawing in */
  analytics: () => (
    <>
      <path d="M7 31 V9 M7 31 H33" fill="none" stroke={C.line} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 27 L15 21 L20 24 L32 11 V30 H8 Z" fill={C.panel} />
      <path className="hc-draw" pathLength={1} d="M8 27 L15 21 L20 24 L32 11" fill="none" stroke={C.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="hc-blink" cx="32" cy="11" r="2.2" fill={C.mint} />
    </>
  ),
  /* Visual pipeline & auto follow-ups: a card moves to the next stage */
  pipeline: () => (
    <>
      {[6, 16, 26].map((x) => (
        <rect key={x} x={x} y="8" width="8" height="24" rx="2" fill={C.panel} />
      ))}
      <rect x="7" y="20" width="6" height="4" rx="1" fill={C.mint} />
      <rect x="17" y="11" width="6" height="4" rx="1" fill={C.mint} />
      <rect x="27" y="11" width="6" height="4" rx="1" fill={C.paper} />
      <rect className="hc-advance" x="7" y="11" width="6" height="5" rx="1" fill={C.gold} />
    </>
  ),
  /* Automated invoicing & payments: invoice gets a paid tick */
  invoice: () => (
    <>
      <path d="M10 6 H25 L30 11 V34 H10 Z" fill={C.paper} />
      <path d="M25 6 V11 H30" fill={C.line} />
      <rect x="13" y="14" width="10" height="2" rx="1" fill={C.line} />
      <rect x="13" y="19" width="14" height="2" rx="1" fill={C.line} />
      <rect x="13" y="24" width="8" height="2" rx="1" fill={C.line} />
      <g className="hc-pop">
        <circle cx="28" cy="29" r="6" fill={C.gold} />
        <path d="M25.3 29 l1.9 1.9 l3.6 -3.8" fill="none" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </>
  ),
  /* 60fps native UI & fluid gestures: a thumb glides along a track */
  fps: () => (
    <>
      <rect x="7" y="18.5" width="26" height="3" rx="1.5" fill={C.panel} />
      <g className="hc-glide">
        <circle cx="12" cy="20" r="5" fill={C.gold} />
        <circle cx="12" cy="20" r="2" fill={C.ink} />
      </g>
      <path d="M9 30 q4 -3 8 0 t8 0 t8 0" fill="none" stroke={C.mint} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 10 q4 -3 8 0 t8 0 t8 0" fill="none" stroke={C.line} strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  /* Single codebase iOS & Android: one build hops to both phones */
  crossplatform: () => (
    <>
      <rect x="5" y="12" width="11" height="20" rx="2.5" fill="none" stroke={C.paper} strokeWidth="1.8" />
      <rect x="24" y="12" width="11" height="20" rx="2.5" fill="none" stroke={C.mint} strokeWidth="1.8" />
      <path d="M10.5 12 C10.5 4 29.5 4 29.5 12" fill="none" stroke={C.line} strokeWidth="1.4" strokeDasharray="2 2" />
      <rect x="8" y="16" width="5" height="5" rx="1" fill={C.gold} />
      <rect x="27" y="16" width="5" height="5" rx="1" fill={C.gold} />
      <circle r="2" fill={C.gold}>
        <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" path="M10.5 12 C10.5 4 29.5 4 29.5 12" />
      </circle>
    </>
  ),
  /* Instant push & WhatsApp triggers: bell rings with a badge */
  push: () => (
    <>
      <g className="hc-ring">
        <path d="M20 8 a8 8 0 0 1 8 8 v6 l3 4 H9 l3 -4 v-6 a8 8 0 0 1 8 -8 Z" fill={C.paper} />
        <path d="M17 29 a3 3 0 0 0 6 0" fill={C.paper} />
      </g>
      <circle className="hc-pop" cx="28" cy="10" r="4" fill={C.gold} />
    </>
  ),
  /* Offline-first SQLite: local database keeps working when signal drops */
  offline: () => (
    <>
      <ellipse cx="15" cy="13" rx="8" ry="3" fill={C.mint} />
      <path d="M7 13 V27 c0 1.7 3.6 3 8 3 s8 -1.3 8 -3 V13" fill={C.paper} />
      <path d="M7 18 c0 1.7 3.6 3 8 3 s8 -1.3 8 -3 M7 23 c0 1.7 3.6 3 8 3 s8 -1.3 8 -3" fill="none" stroke={C.line} strokeWidth="1.2" />
      {[
        "M27 22 a5 5 0 0 1 7 0",
        "M25 19 a8 8 0 0 1 11 0",
      ].map((d, i) => (
        <path key={d} className="hc-blink" style={delay(i * 0.4)} d={d} fill="none" stroke={C.gold} strokeWidth="1.8" strokeLinecap="round" />
      ))}
      <circle cx="30.5" cy="25" r="1.6" fill={C.gold} />
    </>
  ),
};

export function HeroChipArt({ name, className = "" }: { name: HeroChipName; className?: string }) {
  const Art = ART[name];
  return (
    <span aria-hidden="true" className={`hero-chip-art ${className}`}>
      <svg viewBox="3 3 34 34" xmlns="http://www.w3.org/2000/svg">
        <Art />
      </svg>
    </span>
  );
}

export default HeroChipArt;
