"use client";

import React from 'react';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

const OUTDOOR_SERVICES = [
  { id: '1', title: 'HOARDING ADVERTISEMENT', img: '/assets/images/resources/Ads-service/a1.png' },
  { id: '2', title: 'BUS PANEL BRANDING', img: '/assets/images/resources/Ads-service/a2.png' },
  { id: '3', title: 'BUS SHELTER', img: '/assets/images/resources/Ads-service/a3.png' },
  { id: '4', title: 'RADIO ADVERTISING', img: '/assets/images/resources/Ads-service/a4.png' },
  { id: '5', title: 'CINEMA ADVERTISING', img: '/assets/images/resources/Ads-service/a5.png' },
  { id: '6', title: 'RICKSHAW ADVERTISING', img: '/assets/images/resources/Ads-service/a6.png' },
  { id: '7', title: 'CAB BRANDING', img: '/assets/images/resources/Ads-service/a7.png' },
  { id: '8', title: 'POLE KIOSK BRANDING', img: '/assets/images/resources/Ads-service/a8.png' },
  { id: '9', title: 'RAILWAY STATION BRANDING', img: '/assets/images/resources/Ads-service/a9.png' },
  { id: '10', title: 'TRAIN BRANDING - EXT & INT', img: '/assets/images/resources/Ads-service/a10.png' },
  { id: '11', title: 'MALL ADVERTISING', img: '/assets/images/resources/Ads-service/a11.png' },
  { id: '12', title: 'AIRPORT & INFLIGHT BRANDING', img: '/assets/images/resources/Ads-service/a12.png' },
];

const OUTDOOR_FORM_SERVICES = [
  'Hoarding Advertisement',
  'Bus Panel Branding',
  'Bus Shelter',
  'Radio Advertising',
  'Cinema Advertising',
  'Rickshaw Advertising',
  'Cab Branding',
  'Pole Kiosk Branding',
  'Railway Station Branding',
  'Train Branding - Ext & Int',
  'Mall Advertising',
  'Airport & Inflight Branding',
  'Websites Design & Development',
  'Social Media (SMO | SMM)',
  'Performance Marketing',
  'Search Engine Optimization (SEO)',
  'Product Shoot',
  'Logo Design & Packaging',
];

const BRAND_LOGOS = [
  { name: 'State Bank of India', img: '/assets/images/iconicbrands/p1.png' },
  { name: 'Raymond', img: '/assets/images/iconicbrands/p2.png' },
  { name: 'Hero', img: '/assets/images/iconicbrands/p3.png' },
  { name: 'Brand 4', img: '/assets/images/iconicbrands/p4.png' },
  { name: 'Brand 5', img: '/assets/images/iconicbrands/p5.png' },
  { name: 'Brand 6', img: '/assets/images/iconicbrands/p6.png' },
  { name: 'Brand 7', img: '/assets/images/iconicbrands/p7.png' },
  { name: 'Brand 8', img: '/assets/images/iconicbrands/p8.png' },
  { name: 'Brand 9', img: '/assets/images/iconicbrands/p9.png' },
  { name: 'Brand 10', img: '/assets/images/iconicbrands/p10.png' },
];

export const OutdoorAdsPage: React.FC = () => {
  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">

      {/* ── 01. ABOVE THE FOLD (ATF) HERO SECTION WITH BACKGROUND MARKETING VIDEO ── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center pt-20 sm:pt-20 pb-6 sm:pb-6 overflow-hidden border-b border-[#1D4224]/10 bg-[#0E2015]">
        {/* Background Marketing Video - Visible across PC & Mobile */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-60"
            src="/marketing-bg.mp4"
          >
            <source src="/marketing-bg.mp4" type="video/mp4" />
            <source src="/assets/videos/marketing-bg.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay to keep text and form highly readable while video motion stays vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2015]/90 via-[#0E2015]/65 to-[#0E2015]/60" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Normal Crisp Typography (No description below heading) */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#FFAE00]">
                We Dont Sell Products
              </p>
              <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.1] sm:leading-[1.05]">
                WE MAKE ICONIC BRANDS
              </h1>
            </div>

            {/* Right Column: Lead Capture Form (Exact project style & size) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-md">
                <LeadCaptureForm
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  title="From Concept to Capture: We Do It All"
                  titleColor="#FFAE00"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  serviceOptions={OUTDOOR_FORM_SERVICES}
                  defaultService="Hoarding Advertisement"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02. OUTDOOR ADVERTISING SERVICES (12 CARDS) ── */}
      <section className="py-7 sm:py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-center text-[#0E2015] tracking-tight mb-5 sm:mb-6">
            Outdoor Advertising Services
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {OUTDOOR_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#1D4224]/8 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-2.5">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-montserrat font-bold text-xs sm:text-sm text-[#0E2015] leading-snug tracking-tight">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 03. HOW IT WORKS? ── */}
      <section className="py-7 sm:py-9 border-t border-[#1D4224]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015] tracking-tight mb-4 sm:mb-5">
            How it works?
          </h2>

          <div className="max-w-3xl lg:max-w-4xl mx-auto">
            <img
              src="/assets/images/resources/flow4.png"
              alt="How it works flowchart"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

        </div>
      </section>

      {/* ── 04. BRANDS WHO TRUST US WITH THEIR ADVERTISING CAMPAIGNS ── */}
      <section className="py-6 sm:py-8 border-t border-[#1D4224]/10 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Left Title */}
            <div className="lg:col-span-4 text-left space-y-0.5 sm:space-y-1">
              <p className="text-xs sm:text-sm text-[#5C6860]">
                Brands Who Trust Us With Their
              </p>
              <h2 className="font-montserrat font-black text-xl sm:text-2xl text-[#0E2015] tracking-tight">
                Advertising Campaigns
              </h2>
            </div>

            {/* Right Brand Logos */}
            <div className="lg:col-span-8 space-y-3">
              {/* Primary 3 Brand Cards (matching reference image) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#1D4224]/10 shadow-xs flex items-center justify-center h-14 sm:h-16">
                  <img
                    src="/assets/images/iconicbrands/p1.png"
                    alt="State Bank of India"
                    className="max-h-8 sm:max-h-10 max-w-full object-contain"
                  />
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#1D4224]/10 shadow-xs flex items-center justify-center h-14 sm:h-16">
                  <img
                    src="/assets/images/iconicbrands/p2.png"
                    alt="Raymond"
                    className="max-h-8 sm:max-h-10 max-w-full object-contain"
                  />
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#1D4224]/10 shadow-xs flex items-center justify-center h-14 sm:h-16">
                  <img
                    src="/assets/images/iconicbrands/p3.png"
                    alt="Hero"
                    className="max-h-8 sm:max-h-10 max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Clean infinite ticker for the rest */}
              <div className="overflow-hidden">
                <div className="ticker-track flex items-center gap-2.5 sm:gap-3">
                  {BRAND_LOGOS.concat(BRAND_LOGOS).map((brand, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg px-2.5 py-1 border border-neutral-200/70 flex items-center justify-center min-w-[90px] sm:min-w-[100px] h-10 sm:h-11 shrink-0"
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="max-h-5 sm:max-h-6 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
