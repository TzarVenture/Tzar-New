'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
  Briefcase,
} from 'lucide-react';

export const SERVICE_OPTIONS = [
  'Websites Design & Development',
  'Custom CRM & Enterprise Systems',
  'Search Engine Optimization (SEO)',
  'Mobile App Development (iOS & Android)',
  'Performance Marketing (PPC)',
  'Social Media (SMO | SMM)',
  'Product Design & 3D Packaging',
  'Logo & Brand Identity',
  'Product Photoshoot & Commercials',
  '2D & 3D Animation',
];

export interface LeadCaptureFormProps {
  /** Background color override */
  bgColor?: string;
  /** Text color override */
  textColor?: string;
  /** Heading title */
  title?: string;
  /** Accent title color */
  titleColor?: string;
  /** Primary button background color */
  buttonBgColor?: string;
  /** Primary button text color */
  buttonTextColor?: string;
  /** Input fields background color */
  inputBgColor?: string;
  /** Input fields text color */
  inputTextColor?: string;
  /** Optional custom class name for the wrapper */
  className?: string;
  /** Callback fired upon successful submission */
  onSuccess?: () => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  bgColor = '#0E2015',
  textColor = '#FFFFFF',
  title = "Let's Build Together",
  titleColor = '#FFAE00',
  buttonBgColor = '#1D4224',
  buttonTextColor = '#FFFFFF',
  className = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Websites Design & Development',
    city: '',
    country: '',
    agreeToTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Websites Design & Development',
      city: '',
      country: '',
      agreeToTerms: true,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in your full name and email address.');
      return;
    }
    if (!formData.agreeToTerms) {
      setError('Please agree to the terms to proceed.');
      return;
    }

    setLoading(true);
    setError(null);

    const webhookUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK ||
      (typeof window !== 'undefined'
        ? (window as unknown as { __ENV?: { VITE_GOOGLE_SHEETS_WEBHOOK?: string } })
            .__ENV?.VITE_GOOGLE_SHEETS_WEBHOOK
        : '');

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: 'LeadCaptureForm',
          }),
        });
      }
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Form submission error:', err);
      // Fallback graceful success to prevent blocking leads
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative group w-full ${className}`}>
      {/* ── AMBIENT MULTI-LAYER MESH AURA (DESKTOP ONLY, HIDDEN ON MOBILE) ── */}
      <div className="hidden sm:block absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#1D4224]/60 via-[#FFAE00]/25 to-[#B6F8DD]/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* ── GRADIENT BORDER FRAME (SHADOW REMOVED ON MOBILE) ── */}
      <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-b from-[#FFAE00]/50 via-white/10 to-[#B6F8DD]/40 shadow-none sm:shadow-2xl overflow-hidden">
        
        {/* ── MAIN CARD BODY ── */}
        <div
          className="relative rounded-[15px] p-5 sm:p-6 sm:py-7 overflow-hidden backdrop-blur-xl transition-all duration-300"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          {/* Top Sheen Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFAE00]/40 to-transparent pointer-events-none" />

          {/* ── HEADER TITLE (Clean, No Badges or Sub-description) ── */}
          <div className="relative z-10 mb-4 sm:mb-5">
            <h3 className="font-montserrat font-black text-base sm:text-lg text-white tracking-tight leading-snug">
              {(() => {
                if (title.includes(':')) {
                  const [first, ...rest] = title.split(':');
                  return (
                    <>
                      {first}:{' '}
                      <span style={{ color: titleColor }}>{rest.join(':').trim()}</span>
                    </>
                  );
                }
                const words = title.trim().split(' ');
                if (words.length > 1) {
                  const lastWord = words.pop();
                  return (
                    <>
                      {words.join(' ')}{' '}
                      <span style={{ color: titleColor }}>{lastWord}</span>
                    </>
                  );
                }
                return title;
              })()}
            </h3>
          </div>

          {submitted ? (
            /* ── SUCCESS VIEW ── */
            <div className="relative z-10 py-8 text-center space-y-3.5 animate-in fade-in zoom-in-95 duration-400">
              <div className="relative w-14 h-14 mx-auto">
                <div className="absolute inset-0 rounded-full bg-[#B6F8DD]/25 blur-md animate-pulse" />
                <div className="relative w-14 h-14 rounded-full bg-[#1D4224] border-2 border-[#B6F8DD] text-[#B6F8DD] flex items-center justify-center shadow-xl">
                  <CheckCircle2 className="w-7 h-7 text-[#B6F8DD]" />
                </div>
              </div>

              <h4 className="text-lg font-montserrat font-extrabold text-white">
                Enquiry Received!
              </h4>
              <p className="text-xs text-white/75 max-w-xs mx-auto leading-relaxed font-inter">
                Thank you for reaching out. A dedicated consultant from Tzar will review your requirements and contact you via WhatsApp or email within 24 hours.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-4 inline-block text-xs font-bold underline text-[#FFAE00] hover:text-[#B6F8DD] transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
              {error && (
                <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/35 text-red-200 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-300" />
                  <span>{error}</span>
                </div>
              )}

              {/* 1. Full Name Field (With Embedded Gold User Icon, No '*') */}
              <div className="relative flex items-center group">
                <div className="absolute left-3.5 text-[#FFAE00]/80 pointer-events-none transition-all duration-200 group-focus-within:text-[#FFAE00] group-focus-within:scale-110">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl font-medium bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#07130A] border border-white/15 hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/25 text-white placeholder:text-white/40 focus:outline-none shadow-sm transition-all duration-200"
                />
              </div>

              {/* 2. Phone Number Field (With Embedded Mint Phone Icon, No WhatsApp text) */}
              <div className="relative flex items-center group">
                <div className="absolute left-3.5 text-[#B6F8DD]/80 pointer-events-none transition-all duration-200 group-focus-within:text-[#B6F8DD] group-focus-within:scale-110">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl font-medium bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#07130A] border border-white/15 hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/25 text-white placeholder:text-white/40 focus:outline-none shadow-sm transition-all duration-200"
                />
              </div>

              {/* 3. Email Address Field (With Embedded Gold Mail Icon, No '*') */}
              <div className="relative flex items-center group">
                <div className="absolute left-3.5 text-[#FFAE00]/80 pointer-events-none transition-all duration-200 group-focus-within:text-[#FFAE00] group-focus-within:scale-110">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl font-medium bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#07130A] border border-white/15 hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/25 text-white placeholder:text-white/40 focus:outline-none shadow-sm transition-all duration-200"
                />
              </div>

              {/* 4. Services Dropdown (Stylized with Briefcase Icon) */}
              <div className="relative flex items-center group">
                <div className="absolute left-3.5 text-[#B6F8DD]/80 pointer-events-none transition-all duration-200 group-focus-within:text-[#B6F8DD] group-focus-within:scale-110">
                  <Briefcase className="w-4 h-4" />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full appearance-none pl-10 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl font-medium bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#07130A] border border-white/15 hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/25 text-white focus:outline-none shadow-sm cursor-pointer transition-all duration-200"
                >
                  <option value="" disabled className="bg-[#0E2015] text-white/50">
                    Select a Service
                  </option>
                  {SERVICE_OPTIONS.map((srv) => (
                    <option
                      key={srv}
                      value={srv}
                      className="bg-[#0E2015] text-white py-1"
                    >
                      {srv}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-white/50 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:text-white" />
              </div>

              {/* 5. City & Country (Side by Side with Location Icons) */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                <div className="relative flex items-center group">
                  <div className="absolute left-3 text-[#FFAE00]/80 pointer-events-none transition-all duration-200 group-focus-within:text-[#FFAE00]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full pl-8 sm:pl-9 pr-2.5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl font-medium bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#07130A] border border-white/15 hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/25 text-white placeholder:text-white/40 focus:outline-none shadow-sm transition-all duration-200"
                  />
                </div>

                <div className="relative flex items-center group">
                  <div className="absolute left-3 text-[#B6F8DD]/80 pointer-events-none transition-all duration-200 group-focus-within:text-[#B6F8DD]">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full pl-8 sm:pl-9 pr-2.5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl font-medium bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#07130A] border border-white/15 hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/25 text-white placeholder:text-white/40 focus:outline-none shadow-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* 6. Original WhatsApp & Legal Consent Checkbox Text */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="lead-terms-check"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-0.5 w-3.5 h-3.5 rounded border-white/20 bg-white/10 text-[#FFAE00] focus:ring-[#FFAE00] cursor-pointer transition-transform active:scale-90"
                />
                <label
                  htmlFor="lead-terms-check"
                  className="text-[11px] leading-snug text-white/80 select-none cursor-pointer"
                >
                  By Proceeding, I agree to{' '}
                  <Link
                    href="/terms-conditions"
                    className="underline hover:text-[#B6F8DD] font-semibold text-[#FFAE00] transition-colors"
                  >
                    T&amp;C
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-[#B6F8DD] font-semibold text-[#FFAE00] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  . Yes, I would like to receive updates via WhatsApp.
                </label>
              </div>

              {/* 7. Submit Button (Identical Design to "ENQUIRE NOW", No Glow) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D4224] text-white font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider shadow-none sm:shadow-md hover:shadow-xl hover:shadow-black/25 hover:brightness-110 active:scale-[0.99] transition-all duration-300 transform cursor-pointer"
                  style={
                    buttonBgColor && buttonBgColor !== '#1D4224'
                      ? { backgroundColor: buttonBgColor, color: buttonTextColor }
                      : undefined
                  }
                >
                  {/* Micro-shimmer shine effect on hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#FFAE00] relative z-10 shrink-0" />
                      <span className="relative z-10">SUBMITTING...</span>
                    </>
                  ) : (
                    <span className="relative z-10">SUBMIT</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
