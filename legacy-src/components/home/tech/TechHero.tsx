"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Grainient from "./Grainient";

const SLIDES = [
  {
    category: "Web Application Development",
    title: "High-Performance Next.js Web Apps",
    tagline: "React & Serverless Architectures",
    description: "We engineer lightning-fast custom web applications optimized for PageSpeed, technical SEO, and high-conversion client acquisition.",
    link: "/contact"
  },
  {
    category: "Mobile Application Development",
    title: "Native Mobile Engineering",
    tagline: "iOS & Android System Apps",
    description: "High-ROI mobile applications built with React Native and Flutter, fully integrated with live tracking, IoT systems, and clean checkout portals.",
    link: "/contact"
  },
  {
    category: "Enterprise Business Software",
    title: "Custom CRM & Operations Trackers",
    tagline: "Bespoke SaaS Platforms",
    description: "Ditch generic monthly subscriptions. We construct tailor-made CRMs, Kanban task managers, and lead routers modeled exactly around your team.",
    link: "/contact"
  },
  {
    category: "Digital Marketing & SEO",
    title: "Technical SEO & Ad Spend ROAS",
    tagline: "Organic Search & PPC Domination",
    description: "Secure Page 1 rankings on Google. We build custom landing pages and semantic schema wrappers to convert incoming search traffic into sales.",
    link: "/contact"
  },
  {
    category: "Product Designing & Packaging",
    title: "3D Packaging & Print Dielines",
    tagline: "Retail Mockups & Brand Kits",
    description: "Scale your e-commerce and retail presence with custom 3D packaging mockups, print-ready vector dielines, and typography guides.",
    link: "/contact"
  }
];

export const TechHero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Reset progress bar whenever active slide changes
  useEffect(() => {
    setProgress(0);
  }, [activeSlide]);

  // Smooth Auto-scroll countdown interval (approx 6 seconds per slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((slide) => (slide + 1) % SLIDES.length);
          return 0;
        }
        return prev + 1.67; // Increment progress per 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = SLIDES[activeSlide];

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#EFE8E0] text-[#0E2015] overflow-hidden border-b border-[rgba(29,66,36,0.1)]">
      {/* Grainient Canvas Background with Instant CSS Gradient Fallback (Zero Dark Overlay / Zero Blink) */}
      <div 
        className="absolute inset-0 z-0 opacity-75 pointer-events-none scale-y-[-1]"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 75% 25%, rgba(180, 151, 207, 0.45) 0%, transparent 70%), radial-gradient(ellipse 65% 55% at 20% 75%, rgba(51, 147, 67, 0.4) 0%, transparent 65%), radial-gradient(circle at 50% 50%, rgba(176, 170, 148, 0.4) 0%, transparent 80%), #EFE8E0'
        }}
      >
        <Grainient
          color1="#339343"
          color2="#b0aa94"
          color3="#b497cf"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Background Radial Glow Mesh */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1D4224]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B6F8DD]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: STATIC COPY (NO SLIDING ANIMATION) */}
          <div className="lg:col-span-6 flex flex-col justify-center min-h-0 lg:min-h-[420px] relative">
            <div>
              {/* Main Headline */}
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-[#0E2015] tracking-tight leading-[1.1] mb-3">
                {currentSlide.title}
              </h1>

              {/* Subheadline Tagline */}
              <p className="font-mono text-xs sm:text-sm text-[#1D4224] uppercase tracking-widest font-black mb-4">
                {currentSlide.tagline}
              </p>

              {/* Description Copy (High contrast dark grey text) */}
              <p className="font-inter text-base sm:text-lg text-[#2B3A30] leading-relaxed max-w-xl mb-8">
                {currentSlide.description}
              </p>

              {/* CTA Action Button (Forced white text contrast) */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] !text-white font-rubik font-black text-sm uppercase tracking-wider shadow-lg hover:bg-[#FFAE00] hover:!text-[#0E2015] transition-colors duration-200"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* PROGRESS & NAVIGATION CONTROLS (DESKTOP) */}
            <div className="hidden lg:flex items-center gap-3 mt-10 pt-6 border-t border-[rgba(29,66,36,0.25)] w-fit">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-[#1D4224]/30 hover:border-[#1D4224] text-[#1D4224] hover:bg-[#1D4224]/10 transition duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Progress Dash Lines */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className="h-1.5 w-12 sm:w-16 bg-black/20 rounded-full overflow-hidden relative cursor-pointer"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div
                      className="h-full bg-[#1D4224] rounded-full"
                      style={{
                        width: idx === activeSlide ? `${progress}%` : "0%",
                        transition: idx === activeSlide && progress > 0 ? "width 100ms linear" : "none"
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-[#1D4224]/30 hover:border-[#1D4224] text-[#1D4224] hover:bg-[#1D4224]/10 transition duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SINGLE STATIC IMAGE (NO ANIMATION) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-0 py-2 lg:py-0 lg:min-h-[460px]">
            {/* Morphing color background glow aligned with active slides */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div
                className={`w-80 h-80 rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
                  activeSlide === 0 ? "bg-[#B6F8DD]" :
                  activeSlide === 1 ? "bg-emerald-200" :
                  activeSlide === 2 ? "bg-[#FFAE00]" :
                  activeSlide === 3 ? "bg-emerald-300" :
                  "bg-[#FFAE00]"
                }`}
              />
            </div>

            {/* Static Image block without transition loops */}
            <div className="relative w-full max-w-[550px] flex items-center justify-center z-10">
              <img
                src="/assets/images/hero-collage.png"
                alt="Tzar Venture Services Showcase"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-h-[260px] sm:max-h-[360px] lg:max-h-[460px]"
                onError={(e) => {
                  const parent = (e.currentTarget as HTMLImageElement).parentElement;
                  if (parent) {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    parent.innerHTML = `<div class="w-full h-80 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-neutral-500">Mockup Image</div>`;
                  }
                }}
              />
            </div>

            {/* PROGRESS & NAVIGATION CONTROLS (MOBILE - Rendered under the image collage) */}
            <div className="flex lg:hidden items-center justify-center gap-3 mt-8 pt-4 border-t border-[rgba(29,66,36,0.25)] w-full relative z-20">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-[#1D4224]/30 hover:border-[#1D4224] text-[#1D4224] hover:bg-[#1D4224]/10 transition duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Progress Dash Lines */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className="h-1.5 w-10 bg-black/20 rounded-full overflow-hidden relative cursor-pointer"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div
                      className="h-full bg-[#1D4224] rounded-full"
                      style={{
                        width: idx === activeSlide ? `${progress}%` : "0%",
                        transition: idx === activeSlide && progress > 0 ? "width 100ms linear" : "none"
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-[#1D4224]/30 hover:border-[#1D4224] text-[#1D4224] hover:bg-[#1D4224]/10 transition duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
