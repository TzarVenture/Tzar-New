"use client";

import React from "react";

interface TopAnnouncementMarqueeProps {
  isSolid: boolean;
}

const ANNOUNCEMENTS = [
  "Trusted by 1500+ Businesses Across India",
  "Fast Delivery • Premium Quality • Best Pricing",
  "Serving now in Mumbai and Dubai",
];

export const TopAnnouncementMarquee: React.FC<TopAnnouncementMarqueeProps> = ({ isSolid }) => {
  return (
    <div
      className={`w-full max-w-full min-w-0 overflow-hidden transition-colors duration-300 select-none z-50 flex items-center h-[32px] sm:h-[36px] ${isSolid
        ? "bg-[#003108] border-b border-[#1D4224]/30 text-white/95"
        : "bg-[#003108]/60 backdrop-blur-md border-b border-white/10 text-white/90"
        }`}
    >
      <div className="relative w-full max-w-full min-w-0 overflow-hidden flex items-center group">
        {/* Soft edge fade masks on extreme borders */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-6 sm:w-16 z-10 pointer-events-none transition-colors duration-300 bg-gradient-to-r ${isSolid ? "from-[#003108] to-transparent" : "from-[#003108]/60 to-transparent"
            }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-6 sm:w-16 z-10 pointer-events-none transition-colors duration-300 bg-gradient-to-l ${isSolid ? "from-[#003108] to-transparent" : "from-[#003108]/60 to-transparent"
            }`}
        />

        {/* Marquee Track: Two identical sets for gapless 0% -> -50% loop */}
        <div className="flex w-max animate-topbar-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform">
          {/* Part 1 (shrink-0 ensures precise equal width) */}
          <div className="flex items-center shrink-0">
            {ANNOUNCEMENTS.map((text, idx) => (
              <div
                key={`p1-${idx}`}
                className="flex items-center px-4 sm:px-8 text-[11.5px] sm:text-[13px] font-medium tracking-wide shrink-0"
              >
                <span>{text}</span>
                <span className="ml-4 sm:ml-8 text-[#FFAE00] text-[10px] sm:text-xs select-none">◆</span>
              </div>
            ))}
          </div>

          {/* Part 2 (Duplicate shrink-0 ensures precise equal width) */}
          <div className="flex items-center shrink-0">
            {ANNOUNCEMENTS.map((text, idx) => (
              <div
                key={`p2-${idx}`}
                className="flex items-center px-4 sm:px-8 text-[11.5px] sm:text-[13px] font-medium tracking-wide shrink-0"
              >
                <span>{text}</span>
                <span className="ml-4 sm:ml-8 text-[#FFAE00] text-[10px] sm:text-xs select-none">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAnnouncementMarquee;
