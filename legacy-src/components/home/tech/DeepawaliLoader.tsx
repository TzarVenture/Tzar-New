"use client";

import React, { useEffect, useRef, useState } from "react";
import { Great_Vibes } from "next/font/google";
import { istDate, startFireworks } from "./DiwaliFireworks";

const calligraphy = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });

const SEEN_KEY = "tzar-deepawali-loader-seen";
const DURATION_MS = 10000;
const FADE_MS = 900;

// Only on Diwali itself: 8 & 9 Nov 2026 (IST). NEXT_PUBLIC_FESTIVE_LOADER=on forces it for testing.
function isLoaderDay() {
  if (process.env.NEXT_PUBLIC_FESTIVE_LOADER === "on") return true;
  const { y, m, day } = istDate();
  return y === 2026 && m === 11 && (day === 8 || day === 9);
}

// Fixed star field so server and client markup match
const STARS = Array.from({ length: 90 }, (_, i) => {
  const r = (n: number) => Math.round((((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1) + 1) % 1 * 100) / 100;
  return { left: r(1) * 100, top: r(2) * 75, size: r(3) * 1.8 + 0.6, delay: r(4) * 4 };
});

export default function DeepawaliLoader() {
  // The homepage is statically built, so the date is checked on the client; a tiny inline
  // script (below) paints the night sky before hydration so the page never flashes first.
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (isLoaderDay() && !seen) setVisible(true);
    else document.getElementById("deepawali-boot")?.remove();
  }, []);

  useEffect(() => {
    if (!visible) return;
    document.getElementById("deepawali-boot")?.remove();

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stop = canvasRef.current && !reduced ? startFireworks(canvasRef.current, 2.4) : () => {};

    const fade = setTimeout(() => setLeaving(true), DURATION_MS);
    const done = setTimeout(() => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
      setVisible(false);
    }, DURATION_MS + FADE_MS);

    return () => {
      stop();
      clearTimeout(fade);
      clearTimeout(done);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [visible]);

  if (!visible) {
    return (
      <>
        <div
          id="deepawali-boot"
          style={{ display: "none", position: "fixed", inset: 0, zIndex: 10000, background: "#070b24" }}
        />
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </>
    );
  }

  const skip = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    setLeaving(true);
    setTimeout(() => setVisible(false), FADE_MS);
  };

  return (
    <div className={`deepawali-loader${leaving ? " is-leaving" : ""}`} role="dialog" aria-label="Happy Deepawali">
      <style>{CSS}</style>
      <div className="deepawali-loader__stars" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>
      <canvas ref={canvasRef} className="deepawali-loader__canvas" aria-hidden="true" />

      <div className="deepawali-loader__content">
        <h2 className={`deepawali-loader__title ${calligraphy.className}`}>Happy Deepawali</h2>
        <p className="deepawali-loader__quote">
          May the glow of a thousand diyas light up your home with joy, prosperity and success.
        </p>
        <p className="deepawali-loader__from">— Team Tzar Digital Agency</p>
      </div>

      <button type="button" className="deepawali-loader__skip" onClick={skip}>
        Skip
      </button>
      <div className="deepawali-loader__progress" aria-hidden="true" />
    </div>
  );
}

// Mirrors isLoaderDay() + the seen flag, run synchronously during HTML parse
const BOOT_SCRIPT = `(function(){try{
var f=${JSON.stringify(process.env.NEXT_PUBLIC_FESTIVE_LOADER === "on")};
var d=new Date(Date.now()+(330+new Date().getTimezoneOffset())*60000);
var day=d.getFullYear()===2026&&d.getMonth()===10&&(d.getDate()===8||d.getDate()===9);
if((f||day)&&sessionStorage.getItem("${SEEN_KEY}")!=="1"){var b=document.getElementById("deepawali-boot");if(b)b.style.display="block";}
}catch(e){}})();`;

const CSS = `
.deepawali-loader {
  position: fixed; inset: 0; z-index: 10000;
  display: flex; align-items: center; justify-content: center;
  background:
    radial-gradient(ellipse 120% 70% at 50% 110%, rgba(255,140,40,0.18), transparent 60%),
    linear-gradient(180deg, #02030c 0%, #070b24 45%, #131036 80%, #24123a 100%);
  transition: opacity ${FADE_MS}ms ease, visibility ${FADE_MS}ms ease;
}
.deepawali-loader.is-leaving { opacity: 0; visibility: hidden; }
.deepawali-loader__stars { position: absolute; inset: 0; }
.deepawali-loader__stars span {
  position: absolute; border-radius: 50%; background: #fff;
  animation: deepawali-twinkle 3.2s ease-in-out infinite;
}
.deepawali-loader__canvas { position: absolute; inset: 0; }
.deepawali-loader__content {
  position: relative; z-index: 1; text-align: center; padding: 0 20px; max-width: 900px;
}
.deepawali-loader__title {
  margin: 0; font-weight: 400; line-height: 1.1;
  font-size: clamp(56px, 12vw, 150px);
  background: linear-gradient(120deg, #fff1b8 0%, #ffc21a 45%, #ff8a00 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 0 22px rgba(255,180,40,0.45));
  clip-path: inset(0 100% 0 0);
  animation: deepawali-reveal 2.4s cubic-bezier(.6,.1,.3,1) 0.4s forwards;
}
.deepawali-loader__quote {
  margin: 18px auto 0; max-width: 620px;
  color: #ffe9b8; font-size: clamp(15px, 2.1vw, 21px); line-height: 1.55;
  opacity: 0; animation: deepawali-rise 1s ease-out 2.6s forwards;
}
.deepawali-loader__from {
  margin-top: 12px; color: rgba(255,233,184,0.7); font-size: 14px; letter-spacing: 0.12em;
  opacity: 0; animation: deepawali-rise 1s ease-out 3.2s forwards;
}
.deepawali-loader__skip {
  position: absolute; top: 20px; right: 20px; z-index: 2;
  padding: 8px 18px; border-radius: 999px; cursor: pointer;
  color: #ffe9b8; background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,220,150,0.35); font-size: 14px;
}
.deepawali-loader__skip:hover { background: rgba(255,255,255,0.16); }
.deepawali-loader__progress {
  position: absolute; left: 0; bottom: 0; height: 3px; width: 100%;
  background: linear-gradient(90deg, #ff8a00, #ffd36b);
  transform-origin: left; transform: scaleX(0);
  animation: deepawali-progress ${DURATION_MS}ms linear forwards;
}
@keyframes deepawali-twinkle { 0%,100% { opacity: .25; } 50% { opacity: 1; } }
@keyframes deepawali-reveal { to { clip-path: inset(0 0 0 0); } }
@keyframes deepawali-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes deepawali-progress { to { transform: scaleX(1); } }
@media (prefers-reduced-motion: reduce) {
  .deepawali-loader *, .deepawali-loader { animation-duration: 0.01ms !important; animation-delay: 0s !important; }
}
`;
