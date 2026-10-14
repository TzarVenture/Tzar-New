"use client";

import React from "react";

// Curated Enterprise Brand Partners (Row 1)
const ROW_1_LOGOS = [
  { name: "Apollo", src: "/assets/images/brands-clean/client2.webp" },
  { name: "Softdots", src: "/assets/images/brands-clean/softdots.webp" },
  { name: "Enterprise Partner", src: "/assets/images/brands-clean/partner-4.webp" },
  { name: "Crownleaf", src: "/assets/images/brands-clean/crownleaf.webp" },
  { name: "Urban Ladder", src: "/assets/images/brands-clean/client8.webp" },
  { name: "Global Brand", src: "/assets/images/brands-clean/partner-6.webp" },
  { name: "Titepo", src: "/assets/images/brands-clean/titepo.webp" },
  { name: "Retail Leader", src: "/assets/images/brands-clean/partner-7.webp" },
  { name: "Elixee", src: "/assets/images/brands-clean/client3.webp" },
  { name: "Tech Ventures", src: "/assets/images/brands-clean/partner-9.webp" },
  { name: "Mariaa Rajaa", src: "/assets/images/brands-clean/client4.webp" },
  { name: "Commerce Brand", src: "/assets/images/brands-clean/partner-11.webp" },
];

// Curated Enterprise Brand Partners (Row 2)
const ROW_2_LOGOS = [
  { name: "Innovate Group", src: "/assets/images/brands-clean/partner-5.webp" },
  { name: "Happy Notes", src: "/assets/images/brands-clean/client7.webp" },
  { name: "Digital Solutions", src: "/assets/images/brands-clean/partner-8.webp" },
  { name: "Camelia Spa", src: "/assets/images/brands-clean/client1.webp" },
  { name: "SaaS Enterprise", src: "/assets/images/brands-clean/partner-13.webp" },
  { name: "Printshop", src: "/assets/images/brands-clean/client9.webp" },
  { name: "Venture Studio", src: "/assets/images/brands-clean/partner-14.webp" },
  { name: "The Octavian", src: "/assets/images/brands-clean/client5.webp" },
  { name: "Consumer Brands", src: "/assets/images/brands-clean/partner-10.webp" },
  { name: "Direct Commerce", src: "/assets/images/brands-clean/partner-1.webp" },
  { name: "Growth Corp", src: "/assets/images/brands-clean/partner-12.webp" },
  { name: "Crownleaf Brand", src: "/assets/images/brands-clean/crownleaf.webp" },
];

export const ClientMarquee: React.FC = () => {
  return (
    <section className="bg-transparent py-10 sm:py-14 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 sm:mb-9 text-center">
        <h3 className="font-montserrat text-xs sm:text-sm font-bold tracking-wider text-[#EFE8E0]/70 uppercase">
          Building Success Stories with{" "}
          <span className="text-white border-b-2 border-[#FFAE00] pb-0.5">
            50+ Enterprise Brands
          </span>
        </h3>
      </div>

      {/* Infinite Kinetic Ticker Strip - Row 1 (Right to Left) */}
      <div className="relative flex overflow-x-hidden w-full py-2 group">
        <div className="flex w-max animate-marquee-left">
          {/* Track 1 */}
          <div className="flex items-center gap-8 sm:gap-12 px-4">
            {ROW_1_LOGOS.map((logo, idx) => (
              <div
                key={`r1-t1-${idx}`}
                className="flex items-center justify-center min-w-30 sm:min-w-35 h-10 sm:h-12 px-2 select-none cursor-default group/logo"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  decoding="async"
                  className="h-7 sm:h-8 max-w-32.5 sm:max-w-37.5 w-auto object-contain brightness-0 invert opacity-60 group-hover/logo:opacity-100 transition-all duration-300 transform group-hover/logo:scale-105"
                />
              </div>
            ))}
          </div>
          {/* Track 2 (Duplicate for Seamless Loop) */}
          <div className="flex items-center gap-8 sm:gap-12 px-4">
            {ROW_1_LOGOS.map((logo, idx) => (
              <div
                key={`r1-t2-${idx}`}
                className="flex items-center justify-center min-w-30 sm:min-w-35 h-10 sm:h-12 px-2 select-none cursor-default group/logo"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  decoding="async"
                  className="h-7 sm:h-8 max-w-32.5 sm:max-w-37.5 w-auto object-contain brightness-0 invert opacity-60 group-hover/logo:opacity-100 transition-all duration-300 transform group-hover/logo:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Kinetic Ticker Strip - Row 2 (Left to Right) */}
      <div className="relative flex overflow-x-hidden w-full py-2 mt-3 sm:mt-5 group">
        <div className="flex w-max animate-marquee-right">
          {/* Track 1 */}
          <div className="flex items-center gap-8 sm:gap-12 px-4">
            {ROW_2_LOGOS.map((logo, idx) => (
              <div
                key={`r2-t1-${idx}`}
                className="flex items-center justify-center min-w-30 sm:min-w-35 h-10 sm:h-12 px-2 select-none cursor-default group/logo"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  decoding="async"
                  className="h-7 sm:h-8 max-w-32.5 sm:max-w-37.5 w-auto object-contain brightness-0 invert opacity-60 group-hover/logo:opacity-100 transition-all duration-300 transform group-hover/logo:scale-105"
                />
              </div>
            ))}
          </div>
          {/* Track 2 (Duplicate for Seamless Loop) */}
          <div className="flex items-center gap-8 sm:gap-12 px-4">
            {ROW_2_LOGOS.map((logo, idx) => (
              <div
                key={`r2-t2-${idx}`}
                className="flex items-center justify-center min-w-30 sm:min-w-35 h-10 sm:h-12 px-2 select-none cursor-default group/logo"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  decoding="async"
                  className="h-7 sm:h-8 max-w-32.5 sm:max-w-37.5 w-auto object-contain brightness-0 invert opacity-60 group-hover/logo:opacity-100 transition-all duration-300 transform group-hover/logo:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
