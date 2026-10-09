"use client";

import React from "react";

const BRAND_LOGOS = [
  { name: "Client 1", src: "/optimized/assets/images/Brandslogo/client1.webp" },
  { name: "Client 2", src: "/optimized/assets/images/Brandslogo/client2.webp" },
  { name: "Client 3", src: "/optimized/assets/images/Brandslogo/client3.webp" },
  { name: "Client 4", src: "/optimized/assets/images/Brandslogo/client4.webp" },
  { name: "Client 5", src: "/optimized/assets/images/Brandslogo/client5.webp" },
  { name: "Client 6", src: "/assets/images/Brandslogo/client6.jpg" },
  { name: "Client 7", src: "/assets/images/Brandslogo/client7.jpg" },
  { name: "Client 8", src: "/assets/images/Brandslogo/client8.jpg" },
  { name: "Client 9", src: "/assets/images/Brandslogo/client9.jpg" },
  { name: "Softdots", src: "/assets/images/client/softdots.png" },
  { name: "Titepo", src: "/assets/images/client/titepo.png" },
  { name: "Crownleaf", src: "/assets/images/client/crownleaf.png" }
];

export const ClientMarquee: React.FC = () => {
  // We only need one base set of logos to duplicate for the seamless loop
  const baseLogos = BRAND_LOGOS;

  return (
    <section className="bg-[#0E2015] py-12 sm:py-14 overflow-hidden select-none border-t border-b border-[#1d4224]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="font-montserrat text-sm sm:text-base font-bold tracking-wider text-[#EFE8E0]/70 uppercase">
          Building Success Stories with{" "}
          <span className="text-white border-b-2 border-[#FFAE00] pb-0.5">
            50+ Enterprise Brands
          </span>
        </h3>
      </div>
      
      {/* Infinite Kinetic Ticker Strip - Row 1 (Right to Left) */}
      <div className="relative flex overflow-x-hidden w-full py-2 group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-[#0E2015] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-[#0E2015] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left">
          {/* Track 1 */}
          <div className="flex items-center gap-6 px-3">
            {baseLogos.map((logo, idx) => (
              <div
                key={`r1-t1-${idx}`}
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white min-w-36 h-16 select-none cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Track 2 (Duplicate) */}
          <div className="flex items-center gap-6 px-3">
            {baseLogos.map((logo, idx) => (
              <div
                key={`r1-t2-${idx}`}
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white min-w-36 h-16 select-none cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Kinetic Ticker Strip - Row 2 (Left to Right) */}
      <div className="relative flex overflow-x-hidden w-full py-2 mt-4 group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-[#0E2015] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-[#0E2015] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-right">
          {/* Track 1 */}
          <div className="flex items-center gap-6 px-3">
            {[...baseLogos].reverse().map((logo, idx) => (
              <div
                key={`r2-t1-${idx}`}
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white min-w-36 h-16 select-none cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Track 2 (Duplicate) */}
          <div className="flex items-center gap-6 px-3">
            {[...baseLogos].reverse().map((logo, idx) => (
              <div
                key={`r2-t2-${idx}`}
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white min-w-36 h-16 select-none cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
