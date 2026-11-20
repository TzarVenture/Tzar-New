"use client";

import React from "react";
import { BRAND_LOGOS, BrandLogo } from "./BrandLogos";

// Each row carries all 14 logos (in a different order) so a track is always wider than the screen.
const ROWS = [BRAND_LOGOS, [...BRAND_LOGOS.slice(7), ...BRAND_LOGOS.slice(0, 7)]];

export const ClientMarquee: React.FC = () => {
  return (
    <section className="bg-transparent py-10 sm:py-14 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 sm:mb-9 text-center">
        <h2 className="font-montserrat font-bold text-lg sm:text-xl text-[#EFE8E0]">
          Brands that trust us with their growth
        </h2>
      </div>

      <div className="space-y-5 sm:space-y-7 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        {ROWS.map((row, r) => (
          <div key={r} className="relative flex overflow-hidden w-full py-1">
            <div
              className={`flex w-max motion-reduce:animate-none ${r === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}
              style={{ animationDuration: r === 0 ? "60s" : "68s" }}
            >
              {[0, 1].map((track) => (
                <ul
                  key={track}
                  aria-hidden={track === 1 ? true : undefined}
                  className="flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20"
                >
                  {row.map((logo) => (
                    <li key={logo.name} className="flex items-center text-[#EFE8E0]">
                      <BrandLogo logo={logo} className="text-[22px] sm:text-[27px]" />
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
