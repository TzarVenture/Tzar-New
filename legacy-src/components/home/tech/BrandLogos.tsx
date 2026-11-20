/* Client logos as single-colour marks: live text in the site fonts plus small
   SVG symbols, all in currentColor. The parent sets the font size; every logo
   scales from it, so spacing follows the real text width. */

import React from "react";

const DARK = "#0E2015";
const SERIF: React.CSSProperties = { fontFamily: "Georgia, 'Times New Roman', serif" };

const Mark = ({ w = 1, children, className = "" }: { w?: number; children: React.ReactNode; className?: string }) => (
  <svg
    viewBox={`0 0 ${40 * w} 40`}
    style={{ height: "1.15em", width: `${1.15 * w}em` }}
    className={`shrink-0 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    {children}
  </svg>
);

type Logo = { name: string; node: React.ReactNode };

export const BRAND_LOGOS: Logo[] = [
  {
    name: "Amazon",
    node: (
      <span className="relative inline-block pb-[0.28em]">
        <span className="font-bold text-[1.18em] tracking-[-0.03em] leading-none">amazon</span>
        <svg
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
          className="absolute left-[4%] bottom-[-0.12em] w-[80%] h-[0.5em]"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 5 Q48 24 92 6" strokeWidth="3.4" vectorEffect="non-scaling-stroke" />
          <path d="M83 3 L95 5 L91 15" strokeWidth="3.4" vectorEffect="non-scaling-stroke" />
        </svg>
      </span>
    ),
  },
  {
    name: "Myntra",
    node: (
      <>
        <Mark>
          <path d="M3 36 L11 4 L20 22 L29 4 L37 36 H30 L26.5 19 L20 32 L13.5 19 L10 36 Z" />
        </Mark>
        <span className="font-bold">Myntra</span>
      </>
    ),
  },
  {
    name: "IndiGo",
    node: (
      <>
        <span className="font-semibold text-[1.12em] tracking-[-0.01em]">IndiGo</span>
        <Mark w={1.2}>
          {[
            [4, 20], [11, 20], [18, 20], [25, 20], [32, 20], [39, 20], [45, 20],
            [28, 13], [31, 7], [28, 27], [31, 33], [9, 15], [9, 25],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.3" />
          ))}
        </Mark>
      </>
    ),
  },
  {
    name: "Axis Bank",
    node: (
      <>
        <Mark>
          <path d="M2 37 L20 3 L27 16 L15 37 Z" />
          <path d="M29 20 L38 37 H20 Z" />
        </Mark>
        <span className="font-bold tracking-[0.04em]">AXIS BANK</span>
      </>
    ),
  },
  {
    name: "Glenmark",
    node: (
      <>
        <Mark>
          <circle cx="20" cy="20" r="18" />
          <path d="M27.5 12.5 A10.5 10.5 0 1 0 30 23 H20.5" fill="none" stroke={DARK} strokeWidth="4.4" strokeLinecap="round" />
        </Mark>
        <span style={SERIF} className={`font-bold tracking-[0.02em]`}>Glenmark</span>
      </>
    ),
  },
  {
    name: "Urban Ladder",
    node: (
      <>
        <Mark>
          <path d="M4 38 V4 H36" fill="none" stroke="currentColor" strokeWidth="5" />
          <path d="M14 38 V14 H36" fill="none" stroke="currentColor" strokeWidth="2.6" />
        </Mark>
        <span className="flex flex-col font-semibold text-[0.62em] leading-[1.05]">
          <span>Urban</span>
          <span>Ladder</span>
        </span>
      </>
    ),
  },
  {
    name: "Apollo",
    node: (
      <span
        style={SERIF} className={`italic font-bold rounded-[0.3em] bg-current px-[0.45em] py-[0.05em] -skew-x-6`}
      >
        <span style={{ color: DARK }}>Apollo</span>
      </span>
    ),
  },
  {
    name: "Femella",
    node: <span className="font-normal tracking-[0.32em] text-[0.92em]">FƎMELLA</span>,
  },
  {
    name: "CHRMP",
    node: (
      <span className="font-semibold text-[1.15em] tracking-[-0.02em]">
        chrmp<sup className="text-[0.4em] align-super ml-[0.1em]">®</sup>
      </span>
    ),
  },
  {
    name: "Crownleaf",
    node: <span style={SERIF} className={`font-bold text-[1.08em]`}>Crownleaf</span>,
  },
  {
    name: "Titepo",
    node: (
      <span className="inline-flex items-start">
        <span className="font-extrabold text-[1.08em] tracking-[-0.02em]">Titepo</span>
        <svg viewBox="0 0 20 20" className="w-[0.5em] h-[0.5em] ml-[0.1em]" aria-hidden="true">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
          <path d="M6 13 Q9 4 15 6" fill="none" stroke={DARK} strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
    ),
  },
  {
    name: "Rexmed",
    node: (
      <span className="tracking-[-0.02em] text-[1.05em]">
        <span className="font-black">REX</span>
        <span className="font-medium">MED</span>
      </span>
    ),
  },
  {
    name: "TSW",
    node: (
      <>
        <Mark>
          {[2, 9, 16, 23, 30].map((x, i) => (
            <rect key={x} x={x} y={i % 2 ? 9 : 2} width="4" height={i % 2 ? 29 : 36} />
          ))}
          <rect x="37" y="2" width="1.6" height="36" />
        </Mark>
        <span className="font-black tracking-[0.12em]">TSW</span>
      </>
    ),
  },
  {
    name: "Ellixee",
    node: <span className="font-bold text-[1.05em] tracking-[-0.01em]">Ellixee</span>,
  },
];

export function BrandLogo({ logo, className = "" }: { logo: Logo; className?: string }) {
  return (
    <span role="img" aria-label={logo.name} className={`inline-flex items-center gap-[0.35em] whitespace-nowrap leading-none font-montserrat ${className}`}>
      {logo.node}
    </span>
  );
}
