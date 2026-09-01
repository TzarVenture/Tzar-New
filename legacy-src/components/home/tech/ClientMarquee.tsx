"use client";

import React from "react";

const BRAND_LOGOS = [
  { name: "Softdots", src: "/assets/images/client/softdots.png" },
  { name: "Crownleaf", src: "/assets/images/client/crownleaf.png" },
  { name: "Titepo", src: "/assets/images/client/titepo.png" }
];

export const ClientMarquee: React.FC = () => {
  // Dynamically calculate repeat count so the track length is always optimal
  // whether there are 3 brands now or 50 brands added in the future
  const repeatCount = Math.max(2, Math.ceil(24 / (BRAND_LOGOS.length || 1)));
  const marqueeLogos = Array(repeatCount).fill(BRAND_LOGOS).flat();

  return (
    <section className="bg-[#0E2015] py-12 overflow-hidden select-none border-b border-[#1d4224]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Editorial Heading using brand colors */}
        <h3 className="font-montserrat text-sm sm:text-base font-bold tracking-wider text-[#EFE8E0]/70 uppercase">
          Building Success Stories with{" "}
          <span className="text-white border-b-2 border-[#FFAE00] pb-0.5">
            50+ Enterprise Brands
          </span>
        </h3>
      </div>
      {/* Infinite Kinetic Ticker Strip - Row 1 (Right to Left) */}
      <div className="relative flex overflow-x-hidden w-full py-2">
        {/* Left and Right Gradient Fades aligned with dark background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0E2015] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0E2015] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row scrolling left infinitely (never pauses on hover) */}
        <div className="animate-marquee-left hover:[animation-play-state:running] whitespace-nowrap flex items-center gap-6">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl border border-white/10 bg-white/[0.04] min-w-[150px] h-[64px] select-none transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] cursor-default"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain transition-all duration-300"
                style={{
                  filter: 'brightness(0) invert(0.85) drop-shadow(0 0 0.35px #C8D1CC)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Kinetic Ticker Strip - Row 2 (Left to Right) */}
      <div className="relative flex overflow-x-hidden w-full py-2 mt-4">
        {/* Left and Right Gradient Fades aligned with dark background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0E2015] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0E2015] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row scrolling right infinitely (never pauses on hover) */}
        <div className="animate-marquee-right hover:[animation-play-state:running] whitespace-nowrap flex items-center gap-6">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl border border-white/10 bg-white/[0.04] min-w-[150px] h-[64px] select-none transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] cursor-default"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain transition-all duration-300"
                style={{
                  filter: 'brightness(0) invert(0.85) drop-shadow(0 0 0.35px #C8D1CC)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
