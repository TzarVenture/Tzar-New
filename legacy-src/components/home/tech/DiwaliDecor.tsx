"use client";

import React, { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import "./DiwaliDecor.css";

const calligraphy = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });

// Festive window (local time). Overridable with NEXT_PUBLIC_FESTIVE=diwali / off.
const START = new Date(2026, 9, 25);
const END = new Date(2026, 10, 13);
const INTRO_KEY = "tzar-diwali-intro-seen";
const INTRO_MS = 4200;

function isFestiveActive() {
  const flag = process.env.NEXT_PUBLIC_FESTIVE;
  if (flag === "off") return false;
  if (flag === "diwali") return true;
  const now = new Date();
  return now >= START && now < END;
}

const Diya = ({ id }: { id: string }) => (
  <svg className="diwali-diya" viewBox="0 0 100 90" aria-hidden="true">
    <defs>
      <radialGradient id={`${id}-halo`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffd36b" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ff8a00" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-flame`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#ff5a00" />
        <stop offset="55%" stopColor="#ffb300" />
        <stop offset="100%" stopColor="#fff3b0" />
      </linearGradient>
      <linearGradient id={`${id}-clay`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e2742b" />
        <stop offset="100%" stopColor="#8a3410" />
      </linearGradient>
    </defs>
    <circle className="diwali-halo" cx="50" cy="30" r="30" fill={`url(#${id}-halo)`} />
    <path className="diwali-flame" d="M50 8 C58 22 60 32 50 46 C40 32 42 22 50 8 Z" fill={`url(#${id}-flame)`} />
    <path className="diwali-flame diwali-flame--inner" d="M50 24 C54 31 54 37 50 44 C46 37 46 31 50 24 Z" fill="#fffbe6" />
    <path d="M8 52 Q50 50 92 52 Q86 82 50 84 Q14 82 8 52 Z" fill={`url(#${id}-clay)`} />
    <path d="M8 52 Q50 60 92 52" fill="none" stroke="#ffcf6b" strokeWidth="2.5" />
    <g fill="#ffcf6b">
      <circle cx="30" cy="68" r="2.4" />
      <circle cx="50" cy="72" r="2.8" />
      <circle cx="70" cy="68" r="2.4" />
    </g>
    <path d="M38 64 Q50 70 62 64" fill="none" stroke="#ffe39a" strokeWidth="1.5" />
  </svg>
);

const Lantern = () => (
  <svg className="diwali-lantern" viewBox="0 0 70 200" aria-hidden="true">
    <line x1="35" y1="0" x2="35" y2="60" stroke="#c99a3c" strokeWidth="1.5" />
    <circle className="diwali-lantern__glow" cx="35" cy="105" r="34" fill="#ffb347" opacity="0.5" />
    <path d="M20 60 H50 L60 80 H10 Z" fill="#b8231c" />
    <path d="M10 80 H60 L52 135 H18 Z" fill="#e8462b" />
    <path d="M22 80 L35 135 L48 80" fill="none" stroke="#ffd36b" strokeWidth="1.5" />
    <path d="M10 80 H60" stroke="#ffd36b" strokeWidth="2" />
    <circle cx="35" cy="102" r="7" fill="#ffd36b" />
    <path d="M18 135 H52 L45 145 H25 Z" fill="#b8231c" />
    <g stroke="#ffd36b" strokeWidth="1.5">
      <line x1="25" y1="145" x2="23" y2="185" />
      <line x1="31" y1="145" x2="30" y2="192" />
      <line x1="39" y1="145" x2="40" y2="192" />
      <line x1="45" y1="145" x2="47" y2="185" />
    </g>
  </svg>
);

// Vertical marigold strands (ladi) hanging in a corner, longest nearest the edge
const MarigoldStrands = ({ side }: { side: "left" | "right" }) => {
  const lengths = [9, 7, 5];
  return (
    <svg className={`diwali-ladi diwali-ladi--${side}`} viewBox="0 0 90 300" aria-hidden="true">
      {lengths.map((count, s) => {
        const x = side === "left" ? 14 + s * 28 : 76 - s * 28;
        return (
          <g key={s} className="diwali-ladi__strand" style={{ animationDelay: `${-s * 0.9}s` }}>
            <line x1={x} y1="0" x2={x} y2={count * 30} stroke="#3f7a2b" strokeWidth="1.5" />
            {Array.from({ length: count }, (_, i) => (
              <g key={i} transform={`translate(${x} ${16 + i * 30})`}>
                <circle r="10" fill={i % 2 ? "#ff9f1a" : "#ffc21a"} />
                <circle r="5.5" fill={i % 2 ? "#e86f00" : "#ff9f1a"} />
              </g>
            ))}
            <path
              transform={`translate(${x} ${count * 30 + 4})`}
              d="M0 0 Q-7 12 0 22 Q7 12 0 0 Z"
              fill="#4c9a35"
            />
          </g>
        );
      })}
    </svg>
  );
};

const Spark = ({ style }: { style: React.CSSProperties }) => (
  <svg className="diwali-spark" style={style} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#ffd36b" />
  </svg>
);

const Burst = ({ color, className, style }: { color: string; className: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="-50 -50 100 100" aria-hidden="true">
    {Array.from({ length: 14 }, (_, i) => {
      const a = (i / 14) * Math.PI * 2;
      return (
        <line
          key={i}
          x1={Math.cos(a) * 10}
          y1={Math.sin(a) * 10}
          x2={Math.cos(a) * 36}
          y2={Math.sin(a) * 36}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      );
    })}
    <circle r="3" fill={color} />
  </svg>
);

const SPARKS: React.CSSProperties[] = [
  { top: "22%", left: "24%", animationDelay: "0s" },
  { top: "30%", left: "80%", animationDelay: "0.7s" },
  { top: "58%", left: "6%", animationDelay: "1.3s" },
  { top: "62%", left: "93%", animationDelay: "0.4s" },
];

// Faint looping bursts behind the hero; long idle gaps keep them subtle
const BG_BURSTS = [
  { color: "#ffcf4a", slot: { top: "22%", left: "16%" }, delay: "0s" },
  { color: "#ff6fa8", slot: { top: "18%", right: "18%" }, delay: "3.1s" },
  { color: "#7fe0ff", slot: { top: "52%", left: "9%" }, delay: "5.4s" },
  { color: "#ffb347", slot: { top: "48%", right: "10%" }, delay: "1.7s" },
];

const INTRO_BURSTS = [
  { color: "#ffcf4a", style: { top: "14%", left: "12%", animationDelay: "0.1s" } },
  { color: "#ff6fa8", style: { top: "10%", right: "14%", animationDelay: "0.5s" } },
  { color: "#7fe0ff", style: { top: "58%", left: "18%", animationDelay: "0.9s" } },
  { color: "#ffcf4a", style: { top: "62%", right: "20%", animationDelay: "1.3s" } },
  { color: "#ff9a3c", style: { top: "6%", left: "44%", animationDelay: "1.7s" } },
  { color: "#c79bff", style: { top: "70%", left: "46%", animationDelay: "2.1s" } },
];

const DiwaliIntro = ({ onDone }: { onDone: () => void }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setLeaving(true), INTRO_MS);
    const done = setTimeout(onDone, INTRO_MS + 700);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div
      className={`diwali-intro${leaving ? " is-leaving" : ""}`}
      role="presentation"
      onClick={() => {
        setLeaving(true);
        setTimeout(onDone, 500);
      }}
    >
      {INTRO_BURSTS.map((b, i) => (
        <Burst key={i} color={b.color} className="diwali-intro__burst" style={b.style} />
      ))}
      <div className="diwali-intro__center">
        <svg className="diwali-intro__title" viewBox="0 0 800 220" role="img" aria-label="Happy Diwali">
          <defs>
            <linearGradient id="diwali-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff1b8" />
              <stop offset="50%" stopColor="#ffc21a" />
              <stop offset="100%" stopColor="#ff8a00" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="62%"
            textAnchor="middle"
            className={`diwali-intro__text ${calligraphy.className}`}
            fill="url(#diwali-gold)"
            stroke="#ffd36b"
          >
            Happy Diwali
          </text>
        </svg>
        <p className="diwali-intro__sub">Wishing you light, joy &amp; prosperity — Team Tzar</p>
        <div className="diwali-intro__diyas">
          <Diya id="intro1" />
          <Diya id="intro2" />
          <Diya id="intro3" />
        </div>
      </div>
    </div>
  );
};

export default function DiwaliDecor() {
  // Date check runs during render so the decor ships in the SSR HTML (no pop-in after hydration)
  const [active] = useState(isFestiveActive);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {}
    if (!seen) setShowIntro(true);
  }, [active]);

  // Mark as seen only once it has actually played (StrictMode re-runs effects in dev)
  const closeIntro = React.useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {}
    setShowIntro(false);
  }, []);

  if (!active) return null;

  return (
    <>
      {showIntro && <DiwaliIntro onDone={closeIntro} />}
      <div className="diwali-decor" aria-hidden="true">
        <MarigoldStrands side="left" />
        <MarigoldStrands side="right" />
        <div className="diwali-lantern-wrap diwali-lantern-wrap--left"><Lantern /></div>
        <div className="diwali-lantern-wrap diwali-lantern-wrap--right"><Lantern /></div>
        {BG_BURSTS.map((b, i) => (
          <div key={i} className="diwali-bg-burst-slot" style={b.slot}>
            <Burst color={b.color} className="diwali-bg-burst" style={{ animationDelay: b.delay, animationDuration: "7s" }} />
          </div>
        ))}
        {SPARKS.map((s, i) => (
          <Spark key={i} style={s} />
        ))}
        <div className="diwali-diyas diwali-diyas--left">
          <Diya id="dl1" />
          <Diya id="dl2" />
          <Diya id="dl3" />
        </div>
        <div className="diwali-diyas diwali-diyas--right">
          <Diya id="dr3" />
          <Diya id="dr2" />
          <Diya id="dr1" />
        </div>
      </div>
    </>
  );
}
