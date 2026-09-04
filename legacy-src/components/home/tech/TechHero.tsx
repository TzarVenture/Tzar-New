"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Grainient from "./Grainient";
import { CrmHeroSlide } from "./slides/CrmHeroSlide";
import { WebAppHeroSlide } from "./slides/WebAppHeroSlide";
import { AppDevHeroSlide } from "./slides/AppDevHeroSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CalendarCheck } from "@phosphor-icons/react";
import "./TechHero.css";

// ── SLIDE REGISTRY ────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    id: "crm",
    tag: "01",
    label: "Custom CRM & Systems",
    Component: CrmHeroSlide,
  },
  {
    id: "web-apps",
    tag: "02",
    label: "Web Applications",
    Component: WebAppHeroSlide,
  },
  {
    id: "app-dev",
    tag: "03",
    label: "Mobile App Development",
    Component: AppDevHeroSlide,
  },
];

const SLIDE_DURATION_MS = 5000; // 5 seconds continuous auto-slide interval

export const TechHero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = HERO_SLIDES.length;

  // ── THUMB DRAG & SWIPE ENGINE FOR MOBILE ──────────────────────────────
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [timerKey, setTimerKey] = useState<number>(0);

  // ── AUTO-SLIDE TIMER (RESETS ON USER THUMB SWIPE OR SLIDE CHANGE) ─────
  useEffect(() => {
    if (totalSlides <= 1 || isDragging) return;

    const timer = setInterval(() => {
      setActiveSlide((curr) => (curr + 1) % totalSlides);
      setTimerKey((k) => k + 1);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [totalSlides, activeSlide, isDragging, timerKey]);

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
    setTimerKey((k) => k + 1);
  };

  const handlePrev = () => {
    setActiveSlide((curr) => (curr - 1 + totalSlides) % totalSlides);
    setTimerKey((k) => k + 1);
  };

  const handleNext = () => {
    setActiveSlide((curr) => (curr + 1) % totalSlides);
    setTimerKey((k) => k + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setDragOffset(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    const diffX = currentX - touchStartX;
    const diffY = currentY - touchStartY;

    // Detect horizontal swipe vs vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setDragOffset(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 40; // 40px thumb swipe threshold
    if (dragOffset < -threshold) {
      // Swiped Left -> Next Slide
      handleNext();
    } else if (dragOffset > threshold) {
      // Swiped Right -> Prev Slide
      handlePrev();
    }

    setDragOffset(0);
    setTouchStartX(null);
    setTouchStartY(null);
  };

  return (
    <section className="tech-hero-section relative">
      {/* ── GRAINIENT BACKGROUND CANVAS SHADER ────────────────────────── */}
      <div
        className="absolute inset-0 z-0 opacity-75 pointer-events-none scale-y-[-1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 25%, rgba(180, 151, 207, 0.45) 0%, transparent 70%), radial-gradient(ellipse 65% 55% at 20% 75%, rgba(51, 147, 67, 0.4) 0%, transparent 65%), radial-gradient(circle at 50% 50%, rgba(176, 170, 148, 0.4) 0%, transparent 80%), #EFE8E0",
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

      {/* Background Soft Glow Mesh Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1D4224]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2FE594]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── MAIN STAGE CONTAINER ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 hero-stage-container">
        
        {/* ── AUTO-SLIDE SCROLLING CAROUSEL TRACK (WITH LIVE THUMB DRAG) ──── */}
        <div
          className="hero-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="hero-carousel-track"
            style={{
              transform:
                isDragging && dragOffset !== 0
                  ? `translateX(calc(-${activeSlide * 100}% + ${dragOffset}px))`
                  : `translateX(-${activeSlide * 100}%)`,
              transition: isDragging
                ? "none"
                : "transform 0.65s cubic-bezier(0.25, 1, 0.35, 1)",
            }}
          >
            {HERO_SLIDES.map((slide) => {
              const SlideComponent = slide.Component;
              return (
                <div key={slide.id} className="hero-carousel-slide">
                  <SlideComponent />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── UNIFIED BOTTOM CONTROLS: MOBILE PROGRESS DASHES + CTA; 3-COL ON PC ── */}
        <div className="hero-bottom-controls">
          {/* Left balancing spacer on PC */}
          <div className="hidden lg:block hero-bottom-left-spacer" />

          {/* Mobile-Only Progress Dashes (Cleanly centered above the CTA button, NO arrow icons) */}
          <div className="flex lg:hidden hero-mobile-progress-wrapper">
            <div className="hero-dash-track-group">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={`mob-dash-${slide.id}`}
                    onClick={() => handleSelectSlide(idx)}
                    className="hero-dash-pill"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {isActive && (
                      <span
                        key={`anim-fill-mob-${activeSlide}-${timerKey}`}
                        className="hero-dash-fill-anim"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center: Primary CTA Button */}
          <div className="hero-bottom-cta-center">
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#1D4224] text-white font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-black/25 hover:brightness-110 active:scale-[0.99] transition-all duration-300 transform whitespace-nowrap"
            >
              {/* Micro-shimmer shine effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

              <CalendarCheck size={18} weight="duotone" className="text-[#FFAE00] relative z-10 shrink-0" />
              <span className="relative z-10">ENQUIRE NOW</span>
            </Link>
          </div>

          {/* Right on PC: Reference Navigation Section (Hidden on Mobile) */}
          <div className="hidden lg:flex hero-bottom-nav-right">
            <div className="hero-reference-nav">
              {/* Circular Previous Button */}
              <button
                onClick={handlePrev}
                className="hero-circle-btn"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.4]" />
              </button>

              {/* Segmented Dash Progress Bars */}
              <div className="hero-dash-track-group">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === activeSlide;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleSelectSlide(idx)}
                      className="hero-dash-pill"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {isActive && (
                        <span
                          key={`anim-fill-${activeSlide}-${timerKey}`}
                          className="hero-dash-fill-anim"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Circular Next Button */}
              <button
                onClick={handleNext}
                className="hero-circle-btn"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.4]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechHero;
