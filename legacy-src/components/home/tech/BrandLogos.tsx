/* Client logos redrawn as single-colour SVGs (currentColor) at one height,
   so the homepage ticker reads evenly. All share a 40-unit tall viewBox;
   width varies with each mark. */

import React from "react";

const SANS = "var(--font-montserrat), Montserrat, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

type Logo = { name: string; w: number; art: React.ReactNode };

export const BRAND_LOGOS: Logo[] = [
  {
    name: "Amazon",
    w: 124,
    art: (
      <>
        <text x="2" y="27" fontFamily={SANS} fontWeight={700} fontSize="30" letterSpacing="-1">amazon</text>
        <path d="M8 31 Q52 42 92 31" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M86 27.5 L94 30.5 L88 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Myntra",
    w: 132,
    art: (
      <>
        <path d="M2 34 L9 6 L19 24 L29 6 L36 34 H29 L26 20 L19 32 L12 20 L9 34 Z" fill="currentColor" />
        <text x="44" y="29" fontFamily={SANS} fontWeight={700} fontSize="22">Myntra</text>
      </>
    ),
  },
  {
    name: "IndiGo",
    w: 140,
    art: (
      <>
        <text x="0" y="29" fontFamily={SANS} fontWeight={600} fontSize="27" letterSpacing="-0.5">IndiGo</text>
        {[
          [104, 20], [110, 20], [116, 20], [122, 20], [128, 20], [134, 20],
          [122, 14], [125, 9], [122, 26], [125, 31], [116, 14], [116, 26],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="currentColor" />
        ))}
      </>
    ),
  },
  {
    name: "Axis Bank",
    w: 168,
    art: (
      <>
        <path d="M2 34 L17 6 L23 17 L13 34 Z" fill="currentColor" />
        <path d="M25 21 L32 34 H18 Z" fill="currentColor" />
        <text x="40" y="28" fontFamily={SANS} fontWeight={700} fontSize="20" letterSpacing="0.5">AXIS BANK</text>
      </>
    ),
  },
  {
    name: "Glenmark",
    w: 150,
    art: (
      <>
        <circle cx="16" cy="20" r="14" fill="currentColor" />
        <path d="M22 14 A8 8 0 1 0 23 23 H17" fill="none" stroke="#0E2015" strokeWidth="3.4" strokeLinecap="round" />
        <text x="38" y="28" fontFamily={SERIF} fontWeight={700} fontSize="23">Glenmark</text>
      </>
    ),
  },
  {
    name: "Urban Ladder",
    w: 118,
    art: (
      <>
        <path d="M3 34 V6 H31" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M12 34 V15 H31" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <text x="38" y="18" fontFamily={SANS} fontWeight={600} fontSize="15">Urban</text>
        <text x="38" y="34" fontFamily={SANS} fontWeight={600} fontSize="15">Ladder</text>
      </>
    ),
  },
  {
    name: "Apollo",
    w: 104,
    art: (
      <>
        <defs>
          <mask id="bl-apollo">
            <rect width="104" height="40" fill="#fff" />
            <text x="52" y="28" textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontWeight={700} fontSize="24" fill="#000">Apollo</text>
          </mask>
        </defs>
        <path d="M6 8 Q52 1 98 6 L96 33 Q52 38 8 33 Z" fill="currentColor" mask="url(#bl-apollo)" />
      </>
    ),
  },
  {
    name: "Femella",
    w: 168,
    art: (
      <text x="0" y="28" fontFamily={SANS} fontWeight={400} fontSize="25" letterSpacing="6">FƎMELLA</text>
    ),
  },
  {
    name: "CHRMP",
    w: 104,
    art: (
      <>
        <text x="0" y="29" fontFamily={SANS} fontWeight={600} fontSize="31" letterSpacing="-0.5">chrmp</text>
        <circle cx="99" cy="9" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
  },
  {
    name: "Crownleaf",
    w: 150,
    art: (
      <text x="0" y="29" fontFamily={SERIF} fontWeight={700} fontSize="28">Crownleaf</text>
    ),
  },
  {
    name: "Titepo",
    w: 112,
    art: (
      <>
        <text x="0" y="29" fontFamily={SANS} fontWeight={800} fontSize="27" letterSpacing="-0.5">Titepo</text>
        <circle cx="104" cy="11" r="6" fill="currentColor" />
        <path d="M101 13 Q104 6 107 9" fill="none" stroke="#0E2015" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Rexmed",
    w: 118,
    art: (
      <>
        <text x="0" y="29" fontFamily={SANS} fontWeight={800} fontSize="25" letterSpacing="-0.5">REX</text>
        <text x="54" y="29" fontFamily={SANS} fontWeight={500} fontSize="25" letterSpacing="-0.5">MED</text>
      </>
    ),
  },
  {
    name: "TSW",
    w: 108,
    art: (
      <>
        {[2, 8, 14, 20, 26].map((x, i) => (
          <rect key={x} x={x} y={i % 2 ? 10 : 4} width="3" height={i % 2 ? 26 : 32} fill="currentColor" />
        ))}
        <path d="M36 4 V36" stroke="currentColor" strokeWidth="1.5" />
        <text x="44" y="30" fontFamily={SANS} fontWeight={800} fontSize="25" letterSpacing="2">TSW</text>
      </>
    ),
  },
  {
    name: "Ellixee",
    w: 108,
    art: (
      <text x="0" y="29" fontFamily={SANS} fontWeight={700} fontSize="26" letterSpacing="-0.5">Ellixee</text>
    ),
  },
];

export function BrandLogo({ logo, className = "" }: { logo: Logo; className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${logo.w} 40`}
      role="img"
      aria-label={logo.name}
      className={className}
      style={{ aspectRatio: `${logo.w} / 40` }}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {logo.art}
    </svg>
  );
}
