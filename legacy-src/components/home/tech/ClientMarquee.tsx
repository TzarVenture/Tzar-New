"use client";

import React from "react";
import { BRAND_LOGOS, BrandLogo } from "./BrandLogos";

const ROWS = [BRAND_LOGOS.slice(0, 7), BRAND_LOGOS.slice(7)];

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

      <div className="space-y-5 sm:space-y-7 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        {ROWS.map((row, r) => (
          <div key={r} className="relative flex overflow-hidden w-full py-1">
            <div
              className={`flex w-max motion-reduce:animate-none ${r === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}
            >
              {[0, 1].map((track) => (
                <ul
                  key={track}
                  aria-hidden={track === 1 ? true : undefined}
                  className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
                >
                  {row.map((logo) => (
                    <li key={logo.name} className="flex items-center text-[#EFE8E0]/75">
                      <BrandLogo logo={logo} className="h-7 sm:h-8 w-auto" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
