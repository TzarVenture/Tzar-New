"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  User,
  Phone,
  Mail,
  Briefcase,
  Globe,
  Upload,
  FileText,
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface RoleCard {
  id: string;
  type: string;
  title: string;
  description: string;
}

const ROLES: RoleCard[] = [
  {
    id: "full-stack-developer",
    type: "Full Time / Hybrid",
    title: "Full Stack Developer",
    description:
      "Build high-performance web applications, client platforms, and custom digital systems using modern React and Next.js stacks.",
  },
  {
    id: "digital-marketing",
    type: "Full Time",
    title: "Digital Marketing",
    description:
      "Execute organic SEO, paid media campaigns, and social marketing funnels to scale traffic and customer acquisition.",
  },
  {
    id: "business-development",
    type: "Full Time",
    title: "Business Development",
    description:
      "Drive strategic partnerships, lead generation, and client acquisition across our creative, web, and marketing solutions.",
  },
  {
    id: "designer",
    type: "Full Time",
    title: "Designer",
    description:
      "Design digital UI/UX experiences, brand identity systems, and commercial creative assets for emerging and established brands.",
  },
];

export default function CareerView() {
  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: ROLES[0].title,
    portfolio: "",
    resumeNote: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollToTarget = (target: HTMLElement | string, offset: number = -80) => {
    if (typeof window === "undefined") return;
    const lenis = (window as any).__tzar_lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target, {
        offset,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const element =
        typeof target === "string" ? document.querySelector(target) : target;
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  const handleHeroApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTarget(formRef.current || "#application-form", -70);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 700);
  };

  const handleHeroOpenRolesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTarget("#open-roles", -80);
  };

  const handleApplyClick = (roleTitle: string) => {
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    scrollToTarget(formRef.current || "#application-form", -70);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 700);
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (file.size > 15 * 1024 * 1024) {
      setError("File exceeds 15MB limit.");
      return;
    }
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!["pdf", "doc", "docx"].includes(ext || "")) {
      setError("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      return;
    }
    setError(null);
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }

    setLoading(true);

    try {
      const dataPayload = new FormData();
      dataPayload.append("fullName", formData.fullName.trim());
      dataPayload.append("email", formData.email.trim());
      dataPayload.append("phone", formData.phone.trim());
      dataPayload.append("role", formData.role.trim() || "General Application");
      dataPayload.append("portfolio", formData.portfolio.trim());
      dataPayload.append("resumeNote", formData.resumeNote.trim());

      if (resumeFile) {
        dataPayload.append("resume", resumeFile);
      }

      const res = await fetch("/api/career", {
        method: "POST",
        body: dataPayload,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Submission encountered an error. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setResumeFile(null);
    setError(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: ROLES[0].title,
      portfolio: "",
      resumeNote: "",
    });
  };

  return (
    <div className="relative min-h-screen text-[#0E2015] bg-[#FAF9F5] overflow-x-clip selection:bg-[#FFAE00] selection:text-[#061309]">
      {/* ── SVG CLIP PATH: SHAPES THE HERO BOTTOM AS AN ORGANIC WAVE (MATCHING ABOUT-US) ── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="career-hero-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.952 C 0.875,0.936 0.736,0.984 0.556,0.956 C 0.375,0.928 0.222,0.984 0,0.948 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ──────────────────────────────────────────────────────────────────
          01. EDITORIAL AGENCY HERO BANNER (MATCHING /about-us LAYOUT & HEIGHT)
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative z-10 w-full pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-[#061309] text-white flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)",
          clipPath: "url(#career-hero-wave)",
          WebkitClipPath: "url(#career-hero-wave)",
        }}
      >
        {/* Subtle Check Box Grid Texture into Hero Background */}
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

        {/* Foreground Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pb-8 sm:pb-12 lg:pb-16">
          {/* Breadcrumb Strip */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-4 sm:mb-6 text-[#FFAE00]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">CAREERS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Description, Focus Pillars, Action Buttons */}
            <div className="space-y-4 sm:space-y-6 relative z-20">
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1]">
                  Careers at <span className="text-[#FFAE00]">Tzar</span>
                </h1>
              </div>

              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#B6F8DD]/90 max-w-xl leading-relaxed">
                Join our multidisciplinary team of developers, designers, and marketers in Mumbai. We build high-performance web systems and scale digital brands.
              </p>

              {/* Focus Pillars (Matching /about-us pattern) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-white/10">
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Engineering
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    Full Stack & Web
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Marketing
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    SEO & Performance
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#FFAE00] font-bold">
                    Creative
                  </span>
                  <span className="text-[11px] sm:text-sm text-white/85 font-medium mt-0.5 hidden sm:block">
                    UI/UX & Branding
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                <a
                  href="#open-roles"
                  onClick={handleHeroOpenRolesClick}
                  className="bg-[#FFAE00] text-[#061309] hover:bg-white font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 text-xs sm:text-sm group font-sans cursor-pointer"
                >
                  <span>Open Roles</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#application-form"
                  onClick={handleHeroApplyClick}
                  className="border border-white/25 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold transition-all text-xs sm:text-sm inline-flex items-center gap-2 font-sans cursor-pointer"
                >
                  <span>Apply Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image with Responsive Mobile Wrapper (Using Uploaded Team Image) */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible relative z-10">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center">
                <Image
                  src="/assets/images/career-hero.webp"
                  alt="Careers at Tzar Digital Agency"
                  width={1536}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-120 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delicate golden accent curve tracing the wave bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-10 lg:h-16 block pointer-events-none opacity-60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40"
              stroke="#FFAE00"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. 2x2 OPEN POSITION CARDS (Option C)
      ────────────────────────────────────────────────────────────────── */}
      <section id="open-roles" className="scroll-mt-24 sm:scroll-mt-28 py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D4224] font-bold block mb-1">
            OPPORTUNITIES
          </span>
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-[#0E2015]">
            Open Positions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {ROLES.map((role) => {
            const isSelected = formData.role === role.title;
            return (
              <div
                key={role.id}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-white border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "border-[#FFAE00] shadow-md ring-1 ring-[#FFAE00]/30"
                    : "border-black/10 hover:border-black/20 shadow-xs"
                }`}
              >
                <div>
                  <span className="text-[11px] font-sans font-semibold text-[#6B7280] block mb-2">
                    {role.type}
                  </span>
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#0E2015] mb-2.5">
                    {role.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => handleApplyClick(role.title)}
                    className="w-auto px-6 py-2.5 rounded-full bg-[#FFAE00] hover:bg-[#ffb91a] text-[#061309] font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. APPLICATION FORM (TZAR BRAND FORM COLORS)
      ────────────────────────────────────────────────────────────────── */}
      <section id="application-form" ref={formRef} className="scroll-mt-24 sm:scroll-mt-28 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="relative max-w-xl mx-auto">
          {/* Ambient Mesh Aura */}
          <div className="hidden sm:block absolute -inset-1 rounded-3xl bg-linear-to-tr from-[#1D4224]/60 via-[#FFAE00]/25 to-[#B6F8DD]/25 blur-xl opacity-75 pointer-events-none" />

          {/* Form Border Frame */}
          <div className="relative p-[1.5px] rounded-2xl bg-linear-to-b from-[#FFAE00]/50 via-white/10 to-[#B6F8DD]/40 shadow-2xl overflow-hidden">
            {/* Form Body in Obsidian Glass */}
            <div className="relative rounded-[15px] p-5 sm:p-8 bg-[#061309] text-white">
              {/* Top Sheen */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFAE00]/40 to-transparent pointer-events-none" />

              <div className="relative z-10 mb-5 text-center">
                <h2 className="font-montserrat font-black text-lg sm:text-xl text-white tracking-tight">
                  Apply for <span className="text-[#FFAE00]">{formData.role}</span>
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Fill in your details below and attach your resume
                </p>
              </div>

              {submitted ? (
                <div className="relative z-10 py-8 text-center space-y-3.5 animate-in fade-in duration-300">
                  <div className="relative w-14 h-14 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-[#B6F8DD]/25 blur-md animate-pulse" />
                    <div className="relative w-14 h-14 rounded-full bg-[#1D4224] border-2 border-[#B6F8DD] text-[#B6F8DD] flex items-center justify-center shadow-xl">
                      <CheckCircle2 className="w-7 h-7 text-[#B6F8DD]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-montserrat font-extrabold text-white">
                    Application Received!
                  </h3>
                  <p className="text-xs text-white/75 max-w-xs mx-auto leading-relaxed">
                    Thank you for applying. Our team will review your application for{" "}
                    <span className="text-[#FFAE00] font-semibold">{formData.role}</span>.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 inline-block text-xs font-bold underline text-[#FFAE00] hover:text-[#B6F8DD] transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                  {error && (
                    <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/35 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-300" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div className="relative flex items-center group">
                    <div className="absolute left-3.5 text-[#FFAE00] pointer-events-none transition-transform duration-200 group-focus-within:scale-110">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      ref={nameInputRef}
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Full Name *"
                      className="form-input-lead w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl font-medium border focus:ring-2 focus:ring-[#FFAE00]/25 focus:outline-none shadow-sm transition-all duration-200"
                    />
                  </div>

                  {/* 2. Phone Number */}
                  <div className="relative flex items-center group">
                    <div className="absolute left-3.5 text-[#B6F8DD] pointer-events-none transition-transform duration-200 group-focus-within:scale-110">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone / WhatsApp Number *"
                      className="form-input-lead w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl font-medium border focus:ring-2 focus:ring-[#FFAE00]/25 focus:outline-none shadow-sm transition-all duration-200"
                    />
                  </div>

                  {/* 3. Email Address */}
                  <div className="relative flex items-center group">
                    <div className="absolute left-3.5 text-[#FFAE00] pointer-events-none transition-transform duration-200 group-focus-within:scale-110">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address *"
                      className="form-input-lead w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl font-medium border focus:ring-2 focus:ring-[#FFAE00]/25 focus:outline-none shadow-sm transition-all duration-200"
                    />
                  </div>

                  {/* 4. Position Selected */}
                  <div className="relative flex items-center group">
                    <div className="absolute left-3.5 text-[#B6F8DD] pointer-events-none transition-transform duration-200 group-focus-within:scale-110">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="form-input-lead w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl font-medium border focus:ring-2 focus:ring-[#FFAE00]/25 focus:outline-none shadow-sm transition-all duration-200 bg-[#061309]"
                    >
                      {ROLES.map((r) => (
                        <option key={r.id} value={r.title} className="bg-[#061309] text-white">
                          {r.title}
                        </option>
                      ))}
                      <option value="General Application" className="bg-[#061309] text-white">
                        General Application
                      </option>
                    </select>
                  </div>

                  {/* 5. Portfolio / LinkedIn */}
                  <div className="relative flex items-center group">
                    <div className="absolute left-3.5 text-[#FFAE00] pointer-events-none transition-transform duration-200 group-focus-within:scale-110">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="Portfolio / LinkedIn URL"
                      className="form-input-lead w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl font-medium border focus:ring-2 focus:ring-[#FFAE00]/25 focus:outline-none shadow-sm transition-all duration-200"
                    />
                  </div>

                  {/* 6. Resume Upload */}
                  <div>
                    {resumeFile ? (
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.08] border border-white/20">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-[#FFAE00] shrink-0" />
                          <span className="text-xs text-white truncate">{resumeFile.name}</span>
                          <span className="text-[10px] text-white/50 shrink-0">
                            ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="p-1 hover:text-red-400 text-white/60 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/25 hover:border-[#FFAE00] bg-white/[0.04] hover:bg-white/[0.07] cursor-pointer transition-all text-white/70 hover:text-white">
                        <Upload className="w-4 h-4 text-[#FFAE00]" />
                        <span className="text-xs font-medium">Attach Resume / CV (.pdf, .doc)</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleFileChange(e.target.files[0]);
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>

                  {/* 7. Brief Note */}
                  <div>
                    <textarea
                      rows={2}
                      value={formData.resumeNote}
                      onChange={(e) => setFormData({ ...formData, resumeNote: e.target.value })}
                      placeholder="Brief note or message (optional)..."
                      className="form-input-lead w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl font-medium border focus:ring-2 focus:ring-[#FFAE00]/25 focus:outline-none shadow-sm transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* 8. Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#FFAE00] shrink-0" />
                          <span>SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#FFAE00]" />
                          <span>SUBMIT APPLICATION</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
