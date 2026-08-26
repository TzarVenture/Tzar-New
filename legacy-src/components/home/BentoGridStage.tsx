"use client";

import React from 'react';
import Link from 'next/link';
import { BentoTilt } from '../ui/BentoTilt';
import { Code2, Search, Package, BarChart3, Camera, ArrowUpRight, ChevronRight } from 'lucide-react';

export const BentoGridStage: React.FC = () => {
  return (
    <section id="services" className="bg-[#FAF9F5] py-32 text-[#1A1C19] relative overflow-hidden border-b border-[#E2E3DE]">
      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        {/* Header */}
        <div className="px-4 mb-20 text-center flex flex-col items-center">
          <span className="font-rubik text-xs font-bold uppercase tracking-widest text-[#052C10] mb-3">
            FLAGSHIP CAPABILITIES
          </span>
          <h2 className="font-montserrat font-black text-4xl sm:text-6xl max-w-3xl leading-tight mb-4 text-[#1A1C19]">
            Solutions Engineered for <span className="text-[#052C10] italic font-serif">High-Stakes</span> Growth.
          </h2>
          <p className="max-w-xl font-inter text-base text-[#424941]">
            Immerse yourself in our multi-disciplinary engineering grid designed to outpace competitors on every metric.
          </p>
        </div>

        {/* BENTO TILT GRID STAGE */}
        {/* Main Bento Feature Item (Full Width) */}
        <BentoTilt className="relative mb-8 h-96 w-full overflow-hidden rounded-2xl border border-[#E2E3DE] bg-white p-8 sm:p-12 flex flex-col justify-between group shadow-lg hover:border-[#052C10]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#052C10]/10 border border-[#052C10]/20 flex items-center justify-center text-[#052C10]">
                <Code2 className="w-7 h-7" />
              </div>
              <div>
                <span className="font-rubik text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">01 • TECH FLAGSHIP</span>
                <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#1A1C19]">
                  Website Engineering & WebGL Apps
                </h3>
              </div>
            </div>
            <Link href="/website-development-services" className="w-10 h-10 rounded-full bg-[#052C10]/10 flex items-center justify-center text-[#052C10] hover:bg-[#052C10] hover:text-white transition">
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E3DE] font-mono text-xs text-[#1A1C19] max-w-md my-4">
            <div className="flex justify-between border-b border-[#E2E3DE] pb-2 mb-2 text-[#052C10] font-bold">
              <span>Lighthouse 100/100</span>
              <span>Sub-Second TTFB</span>
            </div>
            <div className="text-[#052C10] font-bold">✓ React 18 + Next.js SSR Architecture</div>
            <div className="text-[#D4AF37] font-bold">const perfScore = 99.8; // Zero CLS</div>
          </div>

          <p className="font-inter text-sm text-[#424941] max-w-2xl">
            Blazing fast web apps built on modern tech stacks. Sub-second page loads, conversion-first UI, and enterprise CDN infrastructure.
          </p>
        </BentoTilt>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 2: SEO Engine */}
          <BentoTilt className="relative h-96 overflow-hidden rounded-2xl border border-[#E2E3DE] bg-white p-8 flex flex-col justify-between shadow-lg hover:border-[#052C10]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#052C10]/10 border border-[#052C10]/20 flex items-center justify-center text-[#052C10]">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-rubik text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">02 • ORGANIC SEARCH</span>
                  <h4 className="font-montserrat font-bold text-xl text-[#1A1C19]">SEO & Organic Engine</h4>
                </div>
              </div>
              <Link href="/search-engine-optimization-services" className="w-9 h-9 rounded-full bg-[#052C10]/10 flex items-center justify-center text-[#052C10]">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3 my-4">
              <div>
                <div className="flex justify-between text-xs font-rubik font-bold mb-1">
                  <span className="text-[#1A1C19]">Search Rank #1 Keywords</span>
                  <span className="text-[#052C10]">+95%</span>
                </div>
                <div className="h-2 rounded-full bg-[#FAF9F5] overflow-hidden border border-[#E2E3DE]">
                  <div className="h-full w-[95%] bg-gradient-to-r from-[#D4AF37] to-[#052C10]" />
                </div>
              </div>
            </div>

            <p className="font-inter text-xs text-[#424941]">
              Dominate high-value search keywords. Technical audits, high-authority link building, and intent content clusters.
            </p>
          </BentoTilt>

          {/* Card 3: PPC Lead Generation */}
          <BentoTilt className="relative h-96 overflow-hidden rounded-2xl border border-[#E2E3DE] bg-white p-8 flex flex-col justify-between shadow-lg hover:border-[#052C10]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#052C10]/10 border border-[#052C10]/20 flex items-center justify-center text-[#052C10]">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-rubik text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">03 • PAID ROAS</span>
                  <h4 className="font-montserrat font-bold text-xl text-[#1A1C19]">PPC & Paid Acquisition</h4>
                </div>
              </div>
              <Link href="/pay-per-click-services" className="w-9 h-9 rounded-full bg-[#052C10]/10 flex items-center justify-center text-[#052C10]">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E3DE] my-4 flex items-center justify-around text-center">
              <div>
                <div className="font-montserrat font-black text-2xl text-[#052C10]">3.2×</div>
                <div className="font-rubik text-[10px] text-[#727970]">Avg Client ROAS</div>
              </div>
              <div className="w-px h-8 bg-[#E2E3DE]" />
              <div>
                <div className="font-montserrat font-black text-2xl text-[#D4AF37]">+250%</div>
                <div className="font-rubik text-[10px] text-[#727970]">SQL Lead Boost</div>
              </div>
            </div>

            <p className="font-inter text-xs text-[#424941]">
              Precision Meta & Google ad campaigns engineered for immediate lead conversion and scalable ROAS.
            </p>
          </BentoTilt>

          {/* Card 4: Brand & Packaging */}
          <BentoTilt className="relative h-80 overflow-hidden rounded-2xl border border-[#E2E3DE] bg-white p-8 flex flex-col justify-between shadow-lg hover:border-[#052C10]">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#052C10]/10 border border-[#052C10]/20 flex items-center justify-center text-[#052C10]">
                <Package className="w-5 h-5" />
              </div>
              <span className="font-rubik text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">04 • BRAND</span>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-xl text-[#1A1C19] mb-2">Brand & Package Systems</h4>
              <p className="font-inter text-xs text-[#424941]">
                Luxury brand positioning, custom design systems, and high-impact retail package design.
              </p>
            </div>

            <Link href="/product-design-packaging-services" className="inline-flex items-center gap-1 font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10]">
              Explore Packaging <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </BentoTilt>

          {/* Card 5: Tzar Studio */}
          <BentoTilt className="relative h-80 overflow-hidden rounded-2xl border border-[#E2E3DE] bg-white p-8 flex flex-col justify-between shadow-lg hover:border-[#052C10]">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#052C10]/10 border border-[#052C10]/20 flex items-center justify-center text-[#052C10]">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-rubik text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">05 • STUDIO</span>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-xl text-[#1A1C19] mb-2">Tzar Studio & Media</h4>
              <p className="font-inter text-xs text-[#424941]">
                In-house production studio for commercial product photography, ad creatives, and high-res video shoots.
              </p>
            </div>

            <Link href="/tzar-studio" className="inline-flex items-center gap-1 font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10]">
              Explore Studio <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </BentoTilt>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#052C10] text-[#052C10] font-montserrat font-extrabold text-sm uppercase tracking-wider hover:bg-[#052C10] hover:text-white transition"
          >
            Explore All 11 Capabilities <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
