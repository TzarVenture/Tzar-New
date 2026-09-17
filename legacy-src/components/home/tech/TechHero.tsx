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

// Extended slides with boundary clones for seamless bidirectional infinite scrolling
// Index 0: Clone of last slide (app-dev)
// Index 1: Real slide 0 (crm)
// Index 2: Real slide 1 (web-apps)
// Index 3: Real slide 2 (app-dev)
// Index 4: Clone of first slide (crm)
const EXTENDED_SLIDES = [
  { ...HERO_SLIDES[HERO_SLIDES.length - 1], uniqueKey: "clone-prev" },
  ...HERO_SLIDES.map((slide) => ({ ...slide, uniqueKey: `real-${slide.id}` })),
  { ...HERO_SLIDES[0], uniqueKey: "clone-next" },
];

const SLIDE_DURATION_MS = 5000; // 5 seconds continuous auto-slide interval
const TRANSITION_DURATION_MS = 650; // 0.65s matching cubic-bezier animation

export const TechHero: React.FC = () => {
  // Start at index 1 (Real Slide 0: CRM)
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [withTransition, setWithTransition] = useState<boolean>(true);

  const trackRef = React.useRef<HTMLDivElement>(null);
  const isTransitioningRef = React.useRef<boolean>(false);
  const currentIndexRef = React.useRef<number>(1);
  const transitionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Keep currentIndexRef up to date synchronously
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // ── THUMB DRAG & SWIPE ENGINE FOR MOBILE ──────────────────────────────
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [timerKey, setTimerKey] = useState<number>(0);

  // Helper to map 0..4 extended indices to real slide 0..2
  const getRealSlideIndex = (index: number) => {
    if (index === 0) return HERO_SLIDES.length - 1; // clone of slide 2 -> real slide 2
    if (index === EXTENDED_SLIDES.length - 1) return 0; // clone of slide 0 -> real slide 0
    return index - 1;
  };

  const activeRealSlide = getRealSlideIndex(currentIndex);

  // When transition completes at clone boundaries, instantly teleport without animation
  const handleCompleteTransition = () => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    const idx = currentIndexRef.current;
    if (idx === EXTENDED_SLIDES.length - 1) {
      // Reached Clone of Slide 0 (index 4) -> instantly teleport to Real Slide 0 (index 1)
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (idx === 0) {
      // Reached Clone of Slide 2 (index 0) -> instantly teleport to Real Slide 2 (index 3)
      setWithTransition(false);
      setCurrentIndex(HERO_SLIDES.length);
    } else {
      isTransitioningRef.current = false;
    }
  };

  // Re-enable transitions after the teleport repaint
  useEffect(() => {
    if (!withTransition) {
      // Force a synchronous DOM reflow so transition: none and new transform are applied
      if (trackRef.current) {
        void trackRef.current.offsetHeight;
      }
      const rafId = requestAnimationFrame(() => {
        setWithTransition(true);
        isTransitioningRef.current = false;
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [withTransition]);

  // Clean up any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((curr) => curr + 1);
    setTimerKey((k) => k + 1);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      handleCompleteTransition();
    }, TRANSITION_DURATION_MS + 100);
  };

  const handlePrev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((curr) => curr - 1);
    setTimerKey((k) => k + 1);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      handleCompleteTransition();
    }, TRANSITION_DURATION_MS + 100);
  };

  const handleSelectSlide = (targetRealIndex: number) => {
    if (isTransitioningRef.current) return;
    const currentReal = getRealSlideIndex(currentIndexRef.current);
    if (targetRealIndex === currentReal) return;

    isTransitioningRef.current = true;
    setWithTransition(true);
    setTimerKey((k) => k + 1);

    // If on last slide (real 2) and clicking first slide (real 0), slide forward to clone
    if (currentReal === HERO_SLIDES.length - 1 && targetRealIndex === 0) {
      setCurrentIndex(EXTENDED_SLIDES.length - 1);
    }
    // If on first slide (real 0) and clicking last slide (real 2), slide backward to clone
    else if (currentReal === 0 && targetRealIndex === HERO_SLIDES.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(targetRealIndex + 1);
    }

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      handleCompleteTransition();
    }, TRANSITION_DURATION_MS + 100);
  };

  // ── AUTO-SLIDE TIMER (RESETS ON USER INTERACTION OR SLIDE CHANGE) ─────
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isDragging, timerKey]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioningRef.current) return;
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setDragOffset(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || touchStartX === null || touchStartY === null) return;
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
    } else {
      // Minor drag -> snap back to current slide
      setWithTransition(true);
    }

    setDragOffset(0);
    setTouchStartX(null);
    setTouchStartY(null);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Ensure only the track's own transform transition triggers the callback
    if (e.target !== trackRef.current) return;
    handleCompleteTransition();
  };

  return (
    <section className="tech-hero-section relative w-full">
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
      <div className="w-full max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 hero-stage-container">
        
        {/* ── AUTO-SLIDE SCROLLING CAROUSEL TRACK (WITH LIVE THUMB DRAG) ──── */}
        <div
          className="hero-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="hero-carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform:
                isDragging && dragOffset !== 0
                  ? `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`
                  : `translateX(-${currentIndex * 100}%)`,
              transition:
                !withTransition || isDragging
                  ? "none"
                  : `transform ${TRANSITION_DURATION_MS}ms cubic-bezier(0.25, 1, 0.35, 1)`,
            }}
          >
            {EXTENDED_SLIDES.map((slide, idx) => {
              const SlideComponent = slide.Component;
              const isClone = idx === 0 || idx === EXTENDED_SLIDES.length - 1;
              return (
                <div
                  key={slide.uniqueKey}
                  className="hero-carousel-slide"
                  aria-hidden={isClone ? "true" : undefined}
                >
                  <SlideComponent />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── UNIFIED BOTTOM CONTROLS: MOBILE PROGRESS DASHES + CTA; 3-COL ON PC ── */}
        <div className="hero-bottom-controls">
          {/* Left balancing spacer on PC */}
          <div className="hero-bottom-left-spacer" />

          {/* Mobile-Only Progress Dashes (Cleanly centered above the CTA button, NO arrow icons) */}
          <div className="hero-mobile-progress-wrapper">
            <div className="hero-dash-track-group">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeRealSlide;
                return (
                  <button
                    key={`mob-dash-${slide.id}`}
                    onClick={() => handleSelectSlide(idx)}
                    className="hero-dash-pill"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {isActive && (
                      <span
                        key={`anim-fill-mob-${activeRealSlide}-${timerKey}`}
                        className="hero-dash-fill-anim"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center: Primary CTA Button (Enlarged & Linked to Form) */}
          <div className="hero-bottom-cta-center">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('contact-form') || document.getElementById('lead-form');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#1D4224] hover:bg-[#15321B] text-white font-montserrat font-black text-sm sm:text-base uppercase tracking-widest shadow-lg hover:shadow-2xl hover:shadow-[#1D4224]/35 border border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 transform whitespace-nowrap cursor-pointer"
            >
              {/* Micro-shimmer shine effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

              <CalendarCheck size={22} weight="duotone" className="text-[#FFAE00] relative z-10 shrink-0" />
              <span className="relative z-10">ENQUIRE NOW</span>
            </a>
          </div>

          {/* Right on PC: Reference Navigation Section (Hidden on Mobile) */}
          <div className="hero-bottom-nav-right">
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
                  const isActive = idx === activeRealSlide;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleSelectSlide(idx)}
                      className="hero-dash-pill"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {isActive && (
                        <span
                          key={`anim-fill-${activeRealSlide}-${timerKey}`}
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
