"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ConsistentCTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  variant?: "dark" | "glass";
  className?: string;
}

export const ConsistentCTA: React.FC<ConsistentCTAProps> = ({
  title = "Ready to start your next project?",
  description = "Tell us about your business goals and current challenges. We will review your requirements and provide a clear, practical roadmap to move forward.",
  primaryText = "Talk with Our Team",
  primaryHref = "/contact",
  secondaryText = "View Portfolio",
  secondaryHref = "/portfolio",
  variant = "dark",
  className = "",
}) => {
  const isGlass = variant === "glass";

  return (
    <section className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 ${className}`}>
      <div
        className={`relative rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl transition-all duration-300 ${
          isGlass
            ? "bg-white/3 backdrop-blur-xl border border-white/10 text-white"
            : "bg-[#061309] text-white border border-white/10"
        }`}
        style={
          !isGlass
            ? {
                backgroundColor: "#061309",
                backgroundImage:
                  "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
              }
            : undefined
        }
      >
        {/* Subtle grid texture for dark variant */}
        {!isGlass && (
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
          </div>
        )}

        {/* Ambient luxury glows inside card */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {description}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFAE00] hover:bg-[#ffb91a] text-[#061309] font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer"
            >
              <span>{primaryText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-montserrat font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
            >
              <span>{secondaryText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsistentCTA;
