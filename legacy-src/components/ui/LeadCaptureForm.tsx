'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

export const SERVICE_OPTIONS = [
  'Websites Design & Development',
  'Social Media (SMO | SMM)',
  'Performance Marketing',
  'Influencer Marketing',
  'Brand Marketing',
  'Search Engine Optimization (SEO)',
  'Product Shoot',
  '2D&3D Animation',
  'Logo Design',
  'Product Packaging',
];

export interface LeadCaptureFormProps {
  /** Background color of the form card. Defaults to #0E2015 */
  bgColor?: string;
  /** Text color inside the form card. Defaults to #FFFFFF */
  textColor?: string;
  /** Heading title inside the form card. Defaults to 'From Concept to Capture: We Do It All' */
  title?: string;
  /** Accent title color. Defaults to #FFAE00 */
  titleColor?: string;
  /** Primary button background color. Defaults to #1D4224 */
  buttonBgColor?: string;
  /** Primary button text color. Defaults to #FFFFFF */
  buttonTextColor?: string;
  /** Input fields background color. Defaults to #FFFFFF */
  inputBgColor?: string;
  /** Input fields text color. Defaults to #0E2015 */
  inputTextColor?: string;
  /** Optional custom class name for the wrapper */
  className?: string;
  /** Callback fired upon successful submission */
  onSuccess?: () => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  bgColor = '#0E2015',
  textColor = '#FFFFFF',
  title = 'From Concept to Capture: We Do It All',
  titleColor = '#FFAE00',
  buttonBgColor = '#1D4224',
  buttonTextColor = '#FFFFFF',
  inputBgColor = '#FFFFFF',
  inputTextColor = '#0E2015',
  className = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
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
    <div
      className={`rounded-xl p-5 sm:p-6 shadow-2xl border border-white/15 relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Subtle Top Edge Gradient Accent */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

      {/* Header */}
      <div className="relative z-10 mb-4">
        <h3
          className="text-sm sm:text-base font-extrabold tracking-tight"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
      </div>

      {submitted ? (
        <div className="relative z-10 py-10 text-center space-y-3 animate-in fade-in zoom-in-95 duration-400">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold" style={{ color: textColor }}>
            Submission Received!
          </h4>
          <p className="text-xs opacity-80 max-w-xs mx-auto leading-relaxed" style={{ color: textColor }}>
            Thank you for reaching out. A dedicated digital marketing strategist from Tzar will contact you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                city: '',
                country: '',
                agreeToTerms: true,
              });
            }}
            className="mt-4 inline-block text-xs font-bold underline opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: titleColor }}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
          {error && (
            <div className="p-2.5 rounded-lg bg-red-500/15 border border-red-500/30 text-red-200 text-xs flex items-center gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* 1. Full Name Field */}
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg font-medium placeholder:text-neutral-400 border border-transparent hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/40 focus:outline-none shadow-sm transition-all duration-200"
              style={{
                backgroundColor: inputBgColor,
                color: inputTextColor,
              }}
            />
          </div>

          {/* 2. Phone Number Field */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg font-medium placeholder:text-neutral-400 border border-transparent hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/40 focus:outline-none shadow-sm transition-all duration-200"
              style={{
                backgroundColor: inputBgColor,
                color: inputTextColor,
              }}
            />
          </div>

          {/* 3. Email Address Field */}
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg font-medium placeholder:text-neutral-400 border border-transparent hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/40 focus:outline-none shadow-sm transition-all duration-200"
              style={{
                backgroundColor: inputBgColor,
                color: inputTextColor,
              }}
            />
          </div>

          {/* 4. Services Dropdown */}
          <div className="relative group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full appearance-none px-3.5 py-2.5 pr-10 text-xs sm:text-sm rounded-lg font-medium border border-transparent hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/40 focus:outline-none shadow-sm cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: inputBgColor,
                color: formData.service ? inputTextColor : '#9CA3AF',
              }}
            >
              <option value="" disabled>
                Select a Service
              </option>
              {SERVICE_OPTIONS.map((srv) => (
                <option key={srv} value={srv} style={{ color: '#0E2015', backgroundColor: '#FFFFFF' }}>
                  {srv}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:text-neutral-700" />
          </div>

          {/* 5. City & Country (Side by Side) */}
          <div className="grid grid-cols-2 gap-2.5">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg font-medium placeholder:text-neutral-400 border border-transparent hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/40 focus:outline-none shadow-sm transition-all duration-200"
              style={{
                backgroundColor: inputBgColor,
                color: inputTextColor,
              }}
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg font-medium placeholder:text-neutral-400 border border-transparent hover:border-white/30 focus:border-[#FFAE00] focus:ring-2 focus:ring-[#FFAE00]/40 focus:outline-none shadow-sm transition-all duration-200"
              style={{
                backgroundColor: inputBgColor,
                color: inputTextColor,
              }}
            />
          </div>

          {/* 6. WhatsApp & Legal Consent Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="lead-terms-check"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-[#1D4224] focus:ring-[#FFAE00] cursor-pointer transition-transform active:scale-90"
            />
            <label
              htmlFor="lead-terms-check"
              className="text-[11px] leading-snug opacity-85 select-none cursor-pointer"
              style={{ color: textColor }}
            >
              By Proceeding, I agree to{' '}
              <Link href="/terms" className="underline hover:opacity-100 font-semibold transition-opacity" style={{ color: titleColor }}>
                T&amp;C
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:opacity-100 font-semibold transition-opacity" style={{ color: titleColor }}>
                Privacy Policy
              </Link>
              . Yes, I would like to receive updates via WhatsApp.
            </label>
          </div>

          {/* 7. Submit Button (100% Width, Centered, Animated) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300 transform active:scale-[0.99] shadow-md hover:shadow-xl hover:shadow-black/25 hover:brightness-110"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              {/* Micro-shimmer shine effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Details...</span>
                </>
              ) : (
                <>
                  <span>SUBMIT</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
