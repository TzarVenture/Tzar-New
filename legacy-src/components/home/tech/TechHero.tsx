"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Users,
  TrendingUp,
  FileCheck2,
  PhoneCall,
} from "lucide-react";
import Grainient from "./Grainient";
import "./TechHero.css";

// ── TECH STACK ICONS (Clean Inline SVGs) ──────────────────────────────────
const TECH_STACK = [
  {
    name: "React",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#00D8FE]" viewBox="0 0 115.3 100" fill="currentColor">
        <path d="M57.65 65.57c-8.6 0-15.57-6.97-15.57-15.57s6.97-15.57 15.57-15.57 15.57 6.97 15.57 15.57-6.97 15.57-15.57 15.57z"/>
        <path fill="none" stroke="currentColor" strokeWidth="4.5" d="M57.65 85.57C23.65 85.57 0 69.64 0 50s23.65-35.57 57.65-35.57 57.65 15.93 57.65 35.57-23.65 35.57-57.65 35.57z"/>
        <path fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(60 57.65 50)" d="M57.65 85.57C23.65 85.57 0 69.64 0 50s23.65-35.57 57.65-35.57 57.65 15.93 57.65 35.57-23.65 35.57-57.65 35.57z"/>
        <path fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(120 57.65 50)" d="M57.65 85.57C23.65 85.57 0 69.64 0 50s23.65-35.57 57.65-35.57 57.65 15.93 57.65 35.57-23.65 35.57-57.65 35.57z"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="heroMask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#heroMask)">
          <circle cx="90" cy="90" fill="black" r="90" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect fill="white" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#3178C6]" viewBox="0 0 128 128" fill="currentColor">
        <path d="M1.5 0h125c.8 0 1.5.7 1.5 1.5v125c0 .8-.7 1.5-1.5 1.5H1.5c-.8 0-1.5-.7-1.5-1.5V1.5C0 .7.7 0 1.5 0z" fill="#3178c6"/>
        <path d="M72.2 60.1h15.2v46.7H72.2V60.1zm-48.4 0h36.7v10.3H48.4v36.4H33.8V70.4H23.8V60.1z" fill="#ffffff"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#5FA04E]" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2.5L3.5 9.7v14.5L16 31.5l12.5-7.3V9.7L16 2.5zm0 3.3l9.5 5.5v11.1L16 27.9l-9.5-5.5V11.3L16 5.8z"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#13AA52]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0s-7.5 7.8-7.5 13.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5C19.5 7.8 12 0 12 0zm0 19.5c-3.3 0-6-2.7-6-6 0-3.6 4.3-8.8 6-10.7 1.7 1.9 6 7.1 6 10.7 0 3.3-2.7 6-6 6z"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
];

export const TechHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12 bg-[#EFE8E0] text-[#0E2015] overflow-hidden border-b border-[rgba(29,66,36,0.1)] select-none">
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── HERO HEADER COPY (COMPACT & PUNCHY) ─────────────────────── */}
        <div className="flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight leading-[1.12] max-w-4xl mx-auto mb-2">
            A GREAT BUSINESS NEEDS A <span className="text-[#1D4224]">CUSTOM CRM.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-xs sm:text-sm lg:text-base text-[#3A473E] max-w-xl mx-auto mb-4 leading-relaxed">
            Ditch generic monthly SaaS fees. We engineer tailor-made CRMs, telesales pipelines, and audit workflows built exactly around your team.
          </p>

          {/* Linear Technology Stack Icons (Below Heading) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#1D4224] font-bold mr-1">
              STACK:
            </span>
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="tech-stack-pill">
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* ── CENTRAL LAPTOP SHOWCASE WITH SURROUNDING FLOATING FEATURE PODS ── */}
          <div className="relative w-full max-w-5xl mx-auto my-0">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-5 items-center">
              
              {/* ── LEFT FLOATING FEATURE PODS (2 Cards) ── */}
              <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 text-left z-20">
                
                {/* Pod 1: Lead Pipeline & Telesales */}
                <div className="hero-orbit-card group">
                  <div className="flex items-start gap-3">
                    <div className="orbit-icon-halo halo-blue">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#2563EB] font-bold block mb-0.5">
                        PIPELINE
                      </span>
                      <h3 className="font-montserrat font-extrabold text-xs sm:text-sm text-[#0E2015] leading-tight mb-0.5">
                        Lead Lifecycle & Queues
                      </h3>
                      <p className="font-inter text-[11px] text-[#5C6860] leading-tight">
                        Automated inbound capture, daily rep queues & 28.8% conversion tracking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pod 2: Revenue Analytics */}
                <div className="hero-orbit-card group">
                  <div className="flex items-start gap-3">
                    <div className="orbit-icon-halo halo-green">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#059669] font-bold block mb-0.5">
                        ANALYTICS
                      </span>
                      <h3 className="font-montserrat font-extrabold text-xs sm:text-sm text-[#0E2015] leading-tight mb-0.5">
                        Revenue & Retainers
                      </h3>
                      <p className="font-inter text-[11px] text-[#5C6860] leading-tight">
                        Real-time billed audit revenue with multi-currency AED/USD trend forecasting.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* ── CENTER SHOWCASE: MACBOOK AIR CRM TRANSPARENT INTERFACE ── */}
              <div className="lg:col-span-6 flex items-center justify-center relative z-10">
                <div className="hero-device-container w-full max-w-[480px] lg:max-w-[520px]">
                  <img
                    src="/assets/images/hero-crm-showcase.png"
                    alt="Custom Enterprise CRM Dashboard — AY Astute Group"
                    className="hero-device-img w-full h-auto object-contain select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* ── RIGHT FLOATING FEATURE PODS (2 Cards) ── */}
              <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 text-left z-20">
                
                {/* Pod 3: Tax & E-Invoicing Compliance */}
                <div className="hero-orbit-card group">
                  <div className="flex items-start gap-3">
                    <div className="orbit-icon-halo halo-amber">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#D97706] font-bold block mb-0.5">
                        COMPLIANCE
                      </span>
                      <h3 className="font-montserrat font-extrabold text-xs sm:text-sm text-[#0E2015] leading-tight mb-0.5">
                        UAE E-Invoicing Ready
                      </h3>
                      <p className="font-inter text-[11px] text-[#5C6860] leading-tight">
                        Multi-branch FTA regulatory compliance, automated VAT & one-click audit exports.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pod 4: Telesales Journey & Callbacks */}
                <div className="hero-orbit-card group">
                  <div className="flex items-start gap-3">
                    <div className="orbit-icon-halo halo-purple">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#7C3AED] font-bold block mb-0.5">
                        WORKFLOWS
                      </span>
                      <h3 className="font-montserrat font-extrabold text-xs sm:text-sm text-[#0E2015] leading-tight mb-0.5">
                        Telesales & Callbacks
                      </h3>
                      <p className="font-inter text-[11px] text-[#5C6860] leading-tight">
                        Scheduled caller follow-ups, rep performance audits & instant meeting sync.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ── BOTTOM PRIMARY CTA ACTION BUTTON ── */}
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1D4224] text-white font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#0E2015] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-[#2FE594]" />
              <span>BOOK CRM ARCHITECTURE CALL</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechHero;
