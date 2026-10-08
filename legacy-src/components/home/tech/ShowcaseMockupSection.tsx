"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MockupSlide {
  id: number;
  img: string;
  title: string;
  tag: string;
}

const MOCKUP_SLIDES: MockupSlide[] = [
  { id: 1, img: "/assets/images/MobileShowcase/Home/Showcase-01.png", title: "Brand Flagship Store", tag: "E-Commerce" },
  { id: 2, img: "/assets/images/MobileShowcase/Home/Showcase-02.png", title: "Product Catalog View", tag: "Mobile UI" },
  { id: 3, img: "/assets/images/MobileShowcase/Home/Showcase-03.png", title: "Interactive Product Detail", tag: "Shopify Store" },
  { id: 4, img: "/assets/images/MobileShowcase/Home/Showcase-04.png", title: "Seamless Mobile Checkout", tag: "Conversion Flow" },
  { id: 5, img: "/assets/images/MobileShowcase/Home/Showcase-05.png", title: "Modern UI/UX Feed", tag: "Mobile App" },
  { id: 6, img: "/assets/images/MobileShowcase/Home/Showcase-06.png", title: "Dynamic Brand Header", tag: "Web Design" },
  { id: 7, img: "/assets/images/MobileShowcase/Home/Showcase-07.png", title: "Category Navigation", tag: "UX Architecture" },
  { id: 8, img: "/assets/images/MobileShowcase/Home/Showcase-08.png", title: "Mobile Cart Experience", tag: "Checkout Funnel" },
  { id: 9, img: "/assets/images/MobileShowcase/Home/Showcase-09.png", title: "Order Tracking Screen", tag: "Customer Portal" },
  { id: 10, img: "/assets/images/MobileShowcase/Home/Showcase-10.png", title: "Customer Profile Page", tag: "User Account" },
  { id: 11, img: "/assets/images/MobileShowcase/Home/Showcase-11.png", title: "Filter & Search Grid", tag: "Instant Search" },
  // { id: 12, img: "/assets/images/MobileShowcase/Home/Showcase-12mob.png", title: "Mobile Checkout Flow", tag: "Secure Pay" },
  { id: 13, img: "/assets/images/MobileShowcase/Home/Showcase-13.png", title: "Brand Story Showcase", tag: "Brand Narrative" },
  { id: 14, img: "/assets/images/MobileShowcase/Home/Showcase-14.png", title: "Promotion Grid Screen", tag: "Campaign Hub" },
  { id: 15, img: "/assets/images/MobileShowcase/Home/Showcase-15.png", title: "Interactive Review Carousel", tag: "Social Proof" },
  { id: 16, img: "/assets/images/MobileShowcase/Home/Showcase-16.png", title: "Newsletter & Retention", tag: "Lead Capture" },
  { id: 17, img: "/assets/images/MobileShowcase/Home/Showcase-17.png", title: "Mobile Footer & FAQs", tag: "Support UI" },
  { id: 18, img: "/assets/images/MobileShowcase/Home/Showcase-18.png", title: "E-Commerce Speed Metric", tag: "Core Web Vitals" },
  { id: 19, img: "/assets/images/MobileShowcase/Home/CabeoChavess.png", title: "Cabelo Chave Luxury Hair", tag: "Live Client Store" },
  { id: 20, img: "/assets/images/MobileShowcase/Home/MahaaRajass.png", title: "Mahaarajaa Royal Apparel", tag: "Live Client Store" },
  { id: 21, img: "/assets/images/MobileShowcase/Home/epitomess.png", title: "Epitome Global Brand", tag: "Live Client Store" },
  { id: 22, img: "/assets/images/MobileShowcase/Home/blue7vets.png", title: "Blue7 Vets Healthcare", tag: "Live Client Store" },
];

const BASE_COUNT = MOCKUP_SLIDES.length;
// Tripled for seamless infinite looping
const CLONED_SLIDES = [...MOCKUP_SLIDES, ...MOCKUP_SLIDES, ...MOCKUP_SLIDES];

export const ShowcaseMockupSection: React.FC = () => {
  // Start at the beginning of the middle set
  const [currentIndex, setCurrentIndex] = useState(BASE_COUNT);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDistance = useRef<number>(0);

  // Responsive card dimensions
  const getDimensions = useCallback(() => {
    if (windowWidth < 640) {
      return { cardWidth: 215, cardGap: 18, cardHeight: Math.round(215 * (2708 / 1311)) };
    }
    if (windowWidth < 1024) {
      return { cardWidth: 255, cardGap: 24, cardHeight: Math.round(255 * (2708 / 1311)) };
    }
    return { cardWidth: 290, cardGap: 32, cardHeight: Math.round(290 * (2708 / 1311)) };
  }, [windowWidth]);

  const { cardWidth, cardGap, cardHeight } = getDimensions();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Seamless infinite loop normalization on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * BASE_COUNT) {
      // Reached the end of middle set into set 3 -> jump back to set 2 invisibly
      const normalized = (currentIndex % BASE_COUNT) + BASE_COUNT;
      setEnableTransition(false);
      setCurrentIndex(normalized);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else if (currentIndex < BASE_COUNT) {
      // Reached before middle set into set 1 -> jump forward to set 2 invisibly
      const normalized = (currentIndex % BASE_COUNT) + BASE_COUNT;
      setEnableTransition(false);
      setCurrentIndex(normalized);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  // Continuous auto-advance every 3.5s, paused when user interacts
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch and Mouse drag / swipe handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsPaused(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragDistance.current = clientX - dragStartX.current;
  };

  const handleTouchEnd = () => {
    if (dragStartX.current !== null) {
      if (dragDistance.current > 40) {
        prevSlide();
      } else if (dragDistance.current < -40) {
        nextSlide();
      }
    }
    dragStartX.current = null;
    dragDistance.current = 0;
    setTimeout(() => setIsPaused(false), 2500);
  };

  // Compute horizontal translate so currentIndex is centered
  const containerW = containerRef.current ? containerRef.current.clientWidth : windowWidth;
  const trackTranslateX = (containerW / 2) - (currentIndex * (cardWidth + cardGap)) - (cardWidth / 2);

  return (
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#EFE8E0] relative overflow-hidden border-b border-[#0E2015]/10 select-none">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1D4224]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFAE00]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── SECTION HEADER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight uppercase leading-tight">
              Showcase Mockup
            </h2>
          </div>

          {/* Navigation Controls: Hidden on mobile (< md), visible on desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous mockup"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer border bg-[#0E2015] hover:bg-[#1D4224] text-[#FFAE00] border-[#FFAE00]/30 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next mockup"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer border bg-[#0E2015] hover:bg-[#1D4224] text-[#FFAE00] border-[#FFAE00]/30 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── EDGE-TO-EDGE FULL-BLEED SLIDING STAGE ── */}
      <div
        ref={containerRef}
        className="w-full relative overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          dragStartX.current = null;
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {/* Soft edge fade masks on left and right borders */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#EFE8E0] via-[#EFE8E0]/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#EFE8E0] via-[#EFE8E0]/70 to-transparent z-20 pointer-events-none" />

        {/* ── SINGLE PHOTOREALISTIC IPHONE 17 MOCKUP FRAME (Anchored in the exact center) ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-3 pointer-events-none z-30 drop-shadow-[0_25px_40px_rgba(0,0,0,0.32)]"
          style={{
            width: cardWidth,
            height: cardHeight,
          }}
        >
          <img
            src="/mockups/iphone17-frame.png"
            alt="iPhone 17 Frame"
            className="w-full h-full object-contain pointer-events-none select-none"
            loading="eager"
          />
        </div>

        {/* ── INFINITE SLIDING TRACK ── */}
        <div
          className="relative flex items-center will-change-transform"
          onTransitionEnd={handleTransitionEnd}
          style={{
            height: cardHeight,
            transform: `translateX(${trackTranslateX}px)`,
            transition: enableTransition
              ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        >
          {CLONED_SLIDES.map((slide, idx) => {
            const isCenter = idx === currentIndex;
            return (
              <div
                key={`${slide.id}-${idx}`}
                onClick={() => {
                  setEnableTransition(true);
                  setCurrentIndex(idx);
                }}
                className="flex-shrink-0 relative cursor-pointer select-none transition-all duration-500"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  marginRight: cardGap,
                }}
              >
                {/* Screenshot Card Container */}
                <div
                  className={`relative w-full h-full rounded-[34px] sm:rounded-[40px] lg:rounded-[44px] overflow-hidden transition-all duration-500 ${isCenter
                      ? "scale-100 opacity-100 z-10"
                      : "scale-[0.88] opacity-45 hover:opacity-85 hover:scale-[0.92] shadow-xl border border-[#0E2015]/15"
                    }`}
                >
                  {/* Underlay Screen image */}
                  <div
                    className="absolute overflow-hidden bg-black"
                    style={{
                      top: isCenter ? "1.62%" : "0%",
                      bottom: isCenter ? "1.62%" : "0%",
                      left: isCenter ? "4.12%" : "0%",
                      right: isCenter ? "4.04%" : "0%",
                      borderRadius: isCenter ? "34px" : "36px",
                    }}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      draggable={false}
                    />
                    {/* Glass glare highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseMockupSection;
