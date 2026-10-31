"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  TrendingUp,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { LeadCaptureForm } from "@/legacy-src/components/ui/LeadCaptureForm";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import { TypewriterHeadline } from "@/legacy-src/components/ui/TypewriterHeadline";
import { COMPANY } from "@/legacy-src/data/company";

export default function ContactView() {
  return (
    <div className="relative min-h-screen text-white bg-transparent overflow-x-clip selection:bg-[#FFAE00] selection:text-[#061309]">
      {/* ── FIXED PARALLAX BACKGROUND (MATCHING ABOUT-US DESIGN PATTERN) ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform transform-gpu"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/contact-page-bg.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center w-full h-full"
        />
        {/* Subtle ambient overlay to ensure perfect contrast on text content */}
        <div className="absolute inset-0 bg-[#061309]/50 pointer-events-none" />
      </div>

      {/* ── SVG CLIP PATH: SHAPES THE HERO BOTTOM ITSELF AS AN ORGANIC WAVE (MATCHING /about-us) ── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-bottom-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.952 C 0.875,0.936 0.736,0.984 0.556,0.956 C 0.375,0.928 0.222,0.984 0,0.948 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ──────────────────────────────────────────────────────────────────
          01. EDITORIAL HERO BANNER (MATCHING OUR NEW THEME)
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative z-10 w-full pt-24 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 lg:pb-20 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          clipPath: "url(#hero-bottom-wave)",
          WebkitClipPath: "url(#hero-bottom-wave)",
        }}
      >
        {/* Check Box Grid Texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-8 sm:pb-12 lg:pb-16 text-center">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">CONTACT US</span>
          </nav>

          <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Get In Touch With Our{" "}
            <span className="text-[#FFAE00] block mt-1 sm:mt-2">
              <TypewriterHeadline text="Digital Specialists" delay={250} />
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B6F8DD]/90 max-w-2xl mx-auto mt-4 leading-relaxed">
            Have a project in mind or need a custom proposal? Reach out through our direct communication channels below or submit your project requirements.
          </p>

          <div className="pt-6 flex items-center justify-center">
            <a
              href="#Contactform"
              className="bg-[#FFAE00] text-[#0E2015] hover:bg-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2.5 text-sm sm:text-base font-sans cursor-pointer group"
            >
              <span>Enquire Now</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        {/* Delicate golden accent curve tracing the wave bottom edge (100% matched to clipPath) */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[8%] overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block pointer-events-none opacity-80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40"
              stroke="#FFAE00"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. THREE LOCATION & COMMUNICATION CARDS (LUXURY OBSIDIAN GLASS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative z-20 pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: ABOUT */}
          <div className="relative overflow-hidden bg-[#061309]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FFAE00]/50 hover:shadow-[0_8px_30px_rgba(255,174,0,0.12)] transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFAE00]/15 text-[#FFAE00] border border-[#FFAE00]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-[#FFAE00]" />
              </div>
              <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-wider mb-2">
                About
              </h3>
              <p className="font-sans text-sm text-[#B6F8DD]/80 leading-relaxed">
                We appreciate your business and guarantee a response within 24 Business hours which would include our Packages and Pricing.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6 flex items-center gap-2 text-xs font-semibold text-[#FFAE00]">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Guaranteed 24h Response</span>
            </div>
          </div>

          {/* Card 2: ADDRESS */}
          <div className="relative overflow-hidden bg-[#061309]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FFAE00]/50 hover:shadow-[0_8px_30px_rgba(255,174,0,0.12)] transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFAE00]/15 text-[#FFAE00] border border-[#FFAE00]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-[#FFAE00]" />
              </div>
              <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-wider mb-2">
                Address
              </h3>
              <p className="font-sans text-sm text-[#B6F8DD]/80 leading-relaxed">
                B, Ground Floor, Andheri E, Saki Vihar Rd, behind Finch Restaurant, Ganesh Nagar, Marol, Andheri East, Mumbai, Maharashtra 400072
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=B%2C+Ground+Floor%2C+Andheri+E%2C+Saki+Vihar+Rd%2C+behind+Finch+Restaurant%2C+Ganesh+Nagar%2C+Marol%2C+Andheri+East%2C+Mumbai%2C+Maharashtra+400072"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-[#FFAE00] hover:text-white transition-colors"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: CONTACT */}
          <div className="relative overflow-hidden bg-[#061309]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FFAE00]/50 hover:shadow-[0_8px_30px_rgba(255,174,0,0.12)] transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFAE00]/15 text-[#FFAE00] border border-[#FFAE00]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6 text-[#FFAE00]" />
              </div>
              <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-wider mb-2">
                Contact
              </h3>
              <div className="space-y-1.5 font-sans text-sm">
                <div className="block">
                  <a
                    href="tel:917760775875"
                    className="font-semibold text-white/90 hover:text-[#FFAE00] transition-colors"
                  >
                    +91 776-077-5875
                  </a>
                </div>
                <div className="block">
                  <a
                    href="tel:917304056607"
                    className="font-semibold text-white/90 hover:text-[#FFAE00] transition-colors"
                  >
                    +91 730-405-6607
                  </a>
                  <span className="mx-2 text-white/20">|</span>
                  <a
                    href="tel:919004250252"
                    className="font-semibold text-white/90 hover:text-[#FFAE00] transition-colors"
                  >
                    +91 900-425-0252
                  </a>
                </div>
                <div className="block pt-1">
                  <a
                    href="mailto:corporate@tzar.co"
                    className="font-medium text-[#FFAE00] hover:text-white transition-colors"
                  >
                    corporate@tzar.co
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Channels & Social Icons */}
            <div className="pt-4 border-t border-white/10 mt-6 flex flex-wrap items-center gap-2">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] hover:text-white text-[#25D366] border border-[#25D366]/30 flex items-center justify-center transition-all shadow-xs"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href={COMPANY.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0088cc]/20 hover:bg-[#0088cc] hover:text-white text-[#0088cc] border border-[#0088cc]/30 flex items-center justify-center transition-all shadow-xs"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.942z" />
                </svg>
              </a>

              {/* Skype */}
              <a
                href={COMPANY.socials.skype}
                className="w-9 h-9 rounded-full bg-[#00aff0]/20 hover:bg-[#00aff0] hover:text-white text-[#00aff0] border border-[#00aff0]/30 flex items-center justify-center transition-all shadow-xs"
                aria-label="Skype"
                title="Skype"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.998 16.48c-.042-.647-.145-1.282-.308-1.9a7.65 7.65 0 0 0 .31-2.17c0-4.225-3.435-7.66-7.66-7.66-.757 0-1.488.11-2.18.312A7.632 7.632 0 0 0 12.26.754C8.034.754 4.6 4.19 4.6 8.414c0 .753.11 1.483.31 2.176a7.635 7.635 0 0 0-4.156 6.75c0 4.225 3.435 7.66 7.66 7.66.757 0 1.487-.11 2.18-.312a7.64 7.64 0 0 0 1.9.308c4.225 0 7.66-3.435 7.66-7.66 0-.756-.11-1.488-.31-2.18.163-.618.266-1.253.308-1.9zm-7.658 2.05c-1.306 1.077-3.072 1.543-5.28 1.39-1.848-.128-3.32-.823-4.4-2.083-.435-.508-.387-1.264.108-1.71.503-.453 1.272-.41 1.724.09.682.756 1.636 1.214 2.85 1.365 1.517.188 2.766-.11 3.73-.89.923-.746.993-1.688.208-2.316-.628-.5-1.602-.85-2.91-1.045-2.222-.33-3.842-1.03-4.838-2.088-.99-1.054-1.12-2.378-.39-3.483 1.025-1.55 2.774-2.344 5.234-2.38 1.66-.023 3.09.432 4.25 1.353.475.378.57 1.07.21 1.556-.36.485-1.045.584-1.53.22-.796-.597-1.785-.905-2.956-.92-1.698-.02-2.887.484-3.535 1.5-.47.734-.33 1.545.417 2.062.607.42 1.558.74 2.843.953 2.37.39 4.048 1.123 5.012 2.19.957 1.06 1.056 2.392.298 3.513z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFAE00] hover:text-[#061309] text-white border border-white/15 flex items-center justify-center transition-all shadow-xs"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFAE00] hover:text-[#061309] text-white border border-white/15 flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFAE00] hover:text-[#061309] text-white border border-white/15 flex items-center justify-center transition-all shadow-xs"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. MAIN CONTACT FORM SECTION (#Contactform)
          Replicating: "We Can Get Massive Traffic To Your Website"
      ────────────────────────────────────────────────────────────────── */}
      <section id="Contactform" className="relative z-10 py-10 sm:py-16 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-2">
              We Can Get Massive <span className="text-[#FFAE00]">Traffic To Your Website</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#B6F8DD]/80 font-bold">
              TZAR DIGITAL MARKETING AGENCY
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ── Left Column: Existing Contact LeadCaptureForm ── */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-[#061309]/80 p-1">
                <LeadCaptureForm
                  title="From Concept to Capture: We Do It All"
                  titleColor="#FFAE00"
                  bgColor="#061309"
                  buttonBgColor="#FFAE00"
                  buttonTextColor="#061309"
                  className="shadow-none rounded-2xl border-none"
                  noBorder={true}
                />
              </div>
            </div>

            {/* ── Right Column: Strategic Highlight Information ── */}
            <div className="lg:col-span-6 w-full space-y-6 lg:pt-2">
              <div className="relative overflow-hidden bg-[#061309]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 text-white">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FFAE00] font-bold block mb-1">
                    OUR CORE DISCIPLINES
                  </span>
                  <p className="font-sans text-sm sm:text-base font-semibold text-white/90 leading-relaxed border-b border-white/10 pb-4">
                    SEO | Content Marketing | Paid Search Marketing | Social Media | Analytics | Programmatic Advertising
                  </p>
                </div>

                {/* The 3 Core Highlights */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FFAE00]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <h4 className="font-montserrat font-bold text-base text-white mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#FFAE00]" />
                      <span>SEO</span>
                    </h4>
                    <p className="font-sans text-sm text-[#B6F8DD]/80 leading-relaxed">
                      Bring huge organic traffic and qualified leads through engineered technical and keyword SEO strategies.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FFAE00]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <h4 className="font-montserrat font-bold text-base text-white mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#FFAE00]" />
                      <span>Paid Media</span>
                    </h4>
                    <p className="font-sans text-sm text-[#B6F8DD]/80 leading-relaxed">
                      High-converting Google, Meta, and Programmatic advertising campaigns with guaranteed ROI.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FFAE00]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <h4 className="font-montserrat font-bold text-base text-white mb-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FFAE00]" />
                      <span>Content Marketing</span>
                    </h4>
                    <p className="font-sans text-sm text-[#B6F8DD]/80 leading-relaxed">
                      Attractive and creative multimedia content that drives viral engagement, brand retention, and repeat conversions.
                    </p>
                  </div>
                </div>

                {/* Direct Messaging Quick Channels */}
                <div className="pt-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FFAE00] font-bold block mb-2.5">
                    DIRECT MESSAGING
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/[0.04] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 flex items-center gap-2.5 transition-all group no-underline"
                      title="WhatsApp"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-montserrat font-bold text-xs text-white truncate">
                          WhatsApp
                        </div>
                        <div className="font-sans text-[11px] text-[#25D366] font-medium">
                          Quick Chat
                        </div>
                      </div>
                    </a>

                    {/* Telegram */}
                    <a
                      href={COMPANY.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/[0.04] hover:bg-[#0088cc]/20 border border-white/10 hover:border-[#0088cc]/40 flex items-center gap-2.5 transition-all group no-underline"
                      title="Telegram"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#0088cc] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.942z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-montserrat font-bold text-xs text-white truncate">
                          Telegram
                        </div>
                        <div className="font-sans text-[11px] text-[#0088cc] font-medium">
                          @tzardigital
                        </div>
                      </div>
                    </a>

                    {/* Skype */}
                    <a
                      href={COMPANY.socials.skype}
                      className="p-3 rounded-2xl bg-white/[0.04] hover:bg-[#00aff0]/20 border border-white/10 hover:border-[#00aff0]/40 flex items-center gap-2.5 transition-all group no-underline"
                      title="Skype"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#00aff0] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M23.998 16.48c-.042-.647-.145-1.282-.308-1.9a7.65 7.65 0 0 0 .31-2.17c0-4.225-3.435-7.66-7.66-7.66-.757 0-1.488.11-2.18.312A7.632 7.632 0 0 0 12.26.754C8.034.754 4.6 4.19 4.6 8.414c0 .753.11 1.483.31 2.176a7.635 7.635 0 0 0-4.156 6.75c0 4.225 3.435 7.66 7.66 7.66.757 0 1.487-.11 2.18-.312a7.64 7.64 0 0 0 1.9.308c4.225 0 7.66-3.435 7.66-7.66 0-.756-.11-1.488-.31-2.18.163-.618.266-1.253.308-1.9zm-7.658 2.05c-1.306 1.077-3.072 1.543-5.28 1.39-1.848-.128-3.32-.823-4.4-2.083-.435-.508-.387-1.264.108-1.71.503-.453 1.272-.41 1.724.09.682.756 1.636 1.214 2.85 1.365 1.517.188 2.766-.11 3.73-.89.923-.746.993-1.688.208-2.316-.628-.5-1.602-.85-2.91-1.045-2.222-.33-3.842-1.03-4.838-2.088-.99-1.054-1.12-2.378-.39-3.483 1.025-1.55 2.774-2.344 5.234-2.38 1.66-.023 3.09.432 4.25 1.353.475.378.57 1.07.21 1.556-.36.485-1.045.584-1.53.22-.796-.597-1.785-.905-2.956-.92-1.698-.02-2.887.484-3.535 1.5-.47.734-.33 1.545.417 2.062.607.42 1.558.74 2.843.953 2.37.39 4.048 1.123 5.012 2.19.957 1.06 1.056 2.392.298 3.513z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-montserrat font-bold text-xs text-white truncate">
                          Skype
                        </div>
                        <div className="font-sans text-[11px] text-[#00aff0] font-medium">
                          Direct Chat
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          04. EMBEDDED GOOGLE MAP CARD (SAKI VIHAR RD, ANDHERI EAST MUMBAI)
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-[#061309]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 text-white">
            <div className="p-2 sm:p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#FFAE00] font-bold block">
                  STUDIO LOCATION
                </span>
                <h3 className="font-montserrat font-bold text-base sm:text-lg text-white mt-1">
                  B, Ground Floor, Saki Vihar Rd, behind Finch Restaurant, Ganesh Nagar, Marol, Andheri East, Mumbai 400072
                </h3>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=B%2C+Ground+Floor%2C+Andheri+E%2C+Saki+Vihar+Rd%2C+behind+Finch+Restaurant%2C+Ganesh+Nagar%2C+Marol%2C+Andheri+East%2C+Mumbai%2C+Maharashtra+400072"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#FFAE00] hover:bg-white text-[#061309] font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 shadow-md shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
              <iframe
                title="Tzar Digital Agency Office Location"
                src="https://maps.google.com/maps?q=B%2C%20Ground%20Floor%2C%20Andheri%20E%2C%20Saki%20Vihar%20Rd%2C%20behind%20Finch%20Restaurant%2C%20Ganesh%20Nagar%2C%20Marol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400072&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          05. CONSISTENT REUSABLE CTA CARD
      ────────────────────────────────────────────────────────────────── */}
      <ConsistentCTA
        className="!py-6 sm:!py-8"
        title="Ready to Scale Your Brand with Tzar?"
        description="Whether you need high-impact web development, top-ranking SEO, or viral social campaigns, our specialists are ready to execute."
        primaryText="Talk with Our Team"
        primaryHref="/contact"
        secondaryText="View Portfolio"
        secondaryHref="/portfolio"
      />
    </div>
  );
}
