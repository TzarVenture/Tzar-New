"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  Copy,
  Download,
  Building2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Receipt,
} from 'lucide-react';
import { COMPANY } from '@/legacy-src/data/company';

export const BANK_DETAILS = {
  accountName: "Tzar Digital Agency",
  bankName: "Kotak Mahindra Bank",
  accountNumber: "2545306876",
  accountType: "Current Account",
  ifscCode: "KKBK0001363",
  branch: "Andheri East, Mumbai",
  gst: "27ASYPR9821N1ZF",
  upiId: "tzarventure@kotak",
  qrImage: "/assets/images/tzarpayment.jpg",
};

export default function PaymentView() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">
      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER: LUXURY DARK SPRUCE (NO TABS)
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
        }}
      >
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14 lg:pb-16 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-white/60 mb-3">
            <Link href="/" className="hover:text-[#FFAE00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FFAE00] font-bold">Payment</span>
          </nav>

          {/* Heading */}
          <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Bank Transfer &amp;{' '}
            <span className="text-[#FFAE00]">UPI Payment</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
            Pay directly via bank transfer (NEFT / RTGS / IMPS) or scan to pay instantly using any UPI app.
          </p>
        </div>

        {/* ── Smooth Organic Wave Transition: Dark Spruce into #FAF9F5 ── */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-px">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-20 block pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40 L1440,100 L0,100 Z"
              fill="#FAF9F5"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          02. MAIN CONTENT AREA: BANK DETAILS & UPI QR CODE (CORE UNTOUCHED)
      ────────────────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="space-y-10">
          {/* Top Overview Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#1D4224]/10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1D4224]/10 text-[#1D4224] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#1D4224]" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#0E2015]">
                  Verified Corporate Banking Channel
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5C6860]">
                  Direct merchant settlement to Kotak Mahindra Bank (Current A/C: 2545306876).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6860] font-bold">
                GST REGISTRATION:
              </span>
              <span className="font-mono text-xs font-bold text-[#0E2015] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-neutral-200">
                {BANK_DETAILS.gst}
              </span>
            </div>
          </div>

          {/* Two-Column Payment Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ── Left Column: Kotak UPI QR Code ── */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1D4224]/10 shadow-xl space-y-6">
                {/* Header Badge */}
                <div className="text-center space-y-1 border-b border-neutral-100 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold block">
                    INSTANT SCAN &amp; PAY
                  </span>
                  <h3 className="font-montserrat font-black text-xl text-[#0E2015]">
                    Kotak Mahindra Bank UPI
                  </h3>
                  <p className="font-sans text-xs text-[#5C6860]">
                    Scan with any UPI application on your mobile device
                  </p>
                </div>

                {/* QR Image Frame */}
                <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border-2 border-[#1D4224]/20 shadow-lg bg-white p-2">
                  <img
                    src="/assets/images/tzarpayment.jpg"
                    alt="Tzar Digital Agency Kotak UPI QR Code"
                    className="w-full h-auto block rounded-xl"
                  />
                </div>

                {/* UPI ID Display with 1-Click Copy */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAF7] border border-[#1D4224]/10 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase text-[#5C6860] block font-bold">
                      UPI ID / VPA
                    </span>
                    <span className="font-mono font-bold text-sm text-[#0E2015] truncate block">
                      {BANK_DETAILS.upiId}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(BANK_DETAILS.upiId, 'upi')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-montserrat font-bold text-xs transition-all cursor-pointer ${
                      copiedKey === 'upi'
                        ? 'bg-[#1D4224] text-white shadow-sm'
                        : 'bg-white hover:bg-[#1D4224] text-[#0E2015] hover:text-white border border-neutral-200'
                    }`}
                    title="Copy UPI ID"
                  >
                    {copiedKey === 'upi' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFAE00]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Supported UPI Apps */}
                <div className="text-center pt-2 border-t border-neutral-100">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#5C6860] font-bold block mb-2">
                    ACCEPTED ON ALL UPI APPS
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#0E2015]/80">
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100">Google Pay</span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100">PhonePe</span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100">Paytm</span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100">BHIM</span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100">Amazon Pay</span>
                  </div>
                </div>

                {/* Download QR Action */}
                <a
                  href="/assets/images/tzarpayment.jpg"
                  download="Tzar_Digital_Kotak_UPI_QR.jpg"
                  className="w-full py-3 rounded-xl bg-neutral-100 hover:bg-[#1D4224] text-[#0E2015] hover:text-white font-montserrat font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download QR Code Image</span>
                </a>
              </div>
            </div>

            {/* ── Right Column: Official Account Details, Address & Contact ── */}
            <div className="lg:col-span-7 w-full space-y-6">
              {/* 1. Account Details Table Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1D4224]/10 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#FFAE00] font-bold block">
                      DIRECT BANK TRANSFER
                    </span>
                    <h3 className="font-montserrat font-black text-xl text-[#0E2015]">
                      Account Details
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFAE00]/15 flex items-center justify-center text-[#1D4224]">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="divide-y divide-neutral-100 text-sm">
                  {/* Row 1: Account Name */}
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-sans text-[#5C6860] font-medium">Beneficiary Name</span>
                    <div className="flex items-center gap-2">
                      <strong className="font-montserrat text-[#0E2015] font-bold text-right">
                        {BANK_DETAILS.accountName}
                      </strong>
                      <button
                        type="button"
                        onClick={() => handleCopy(BANK_DETAILS.accountName, 'accName')}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-[#1D4224] hover:bg-neutral-100 transition-colors"
                        title="Copy Name"
                      >
                        {copiedKey === 'accName' ? <Check className="w-4 h-4 text-[#1D4224]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Row 2: Bank Name */}
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-sans text-[#5C6860] font-medium">Bank Name</span>
                    <strong className="font-montserrat text-[#0E2015] font-bold">
                      {BANK_DETAILS.bankName}
                    </strong>
                  </div>

                  {/* Row 3: Account Number */}
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-sans text-[#5C6860] font-medium">Account Number</span>
                    <div className="flex items-center gap-2">
                      <strong className="font-mono text-base text-[#1D4224] font-black tracking-wider">
                        {BANK_DETAILS.accountNumber}
                      </strong>
                      <button
                        type="button"
                        onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'accNo')}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-[#1D4224] hover:bg-neutral-100 transition-colors"
                        title="Copy Account Number"
                      >
                        {copiedKey === 'accNo' ? <Check className="w-4 h-4 text-[#1D4224]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Row 4: Account Type */}
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-sans text-[#5C6860] font-medium">Account Type</span>
                    <strong className="font-montserrat text-[#0E2015] font-bold">
                      {BANK_DETAILS.accountType}
                    </strong>
                  </div>

                  {/* Row 5: IFSC Code */}
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-sans text-[#5C6860] font-medium">IFSC Code</span>
                    <div className="flex items-center gap-2">
                      <strong className="font-mono text-base text-[#0E2015] font-black tracking-wider">
                        {BANK_DETAILS.ifscCode}
                      </strong>
                      <button
                        type="button"
                        onClick={() => handleCopy(BANK_DETAILS.ifscCode, 'ifsc')}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-[#1D4224] hover:bg-neutral-100 transition-colors"
                        title="Copy IFSC Code"
                      >
                        {copiedKey === 'ifsc' ? <Check className="w-4 h-4 text-[#1D4224]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Row 6: GST Number */}
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-sans text-[#5C6860] font-medium">GST Registration</span>
                    <div className="flex items-center gap-2">
                      <strong className="font-mono text-sm text-[#0E2015] font-bold">
                        {BANK_DETAILS.gst}
                      </strong>
                      <button
                        type="button"
                        onClick={() => handleCopy(BANK_DETAILS.gst, 'gst')}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-[#1D4224] hover:bg-neutral-100 transition-colors"
                        title="Copy GST"
                      >
                        {copiedKey === 'gst' ? <Check className="w-4 h-4 text-[#1D4224]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Office Address & Contact Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Address */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#1D4224]/10 shadow-lg space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAE00]">
                    <MapPin className="w-4 h-4 text-[#1D4224]" />
                    <span>Office Address</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#0E2015] leading-relaxed">
                    {COMPANY.address.full}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ryxbajb4yg24TbrG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1D4224] hover:text-[#FFAE00] transition-colors pt-1"
                  >
                    <span>Open on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Contact Us */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#1D4224]/10 shadow-lg space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAE00]">
                    <Phone className="w-4 h-4 text-[#1D4224]" />
                    <span>Contact Us</span>
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm font-sans">
                    <div>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="font-medium text-[#1D4224] hover:text-[#FFAE00] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-semibold text-[#0E2015]">
                        <a href="tel:917760775875" className="hover:text-[#1D4224] transition-colors">
                          +91 776-077-5875
                        </a>
                      </div>
                      <div className="font-semibold text-[#0E2015]">
                        <a href="tel:917304056607" className="hover:text-[#1D4224] transition-colors">
                          +91 730-405-6607
                        </a>
                        <span className="mx-1.5 text-neutral-300">|</span>
                        <a href="tel:919004250252" className="hover:text-[#1D4224] transition-colors">
                          +91 900-425-0252
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Transaction Confirmation Notice & UTR Sharing */}
              <div className="p-5 sm:p-6 rounded-3xl bg-[#061309] text-white border border-[#FFAE00]/30 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FFAE00] font-bold">
                  <Receipt className="w-4 h-4" />
                  <span>Post-Payment Confirmation</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                  Once your bank transfer or UPI payment is complete, please share your UTR or transaction ID with our accounts desk for immediate reconciliation and GST tax invoice generation.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Tzar%20Accounts%20Team,%20I%20have%20completed%20a%20payment%20via%20Bank/UPI.%20Here%20is%20my%20UTR%20number:`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-montserrat font-bold text-xs transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Share UTR on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY.email}?subject=Payment%20Confirmation%20-%20UTR%20Submission&body=Dear%20Tzar%20Team,%0A%0AI%20have%20completed%20the%20payment%20via%20Bank%20Transfer/UPI.%0A%0AAmount:%20INR%20%0AUTR/Transaction%20ID:%20%0ACompany/Client%20Name:%20%0A%0AThank%20you.`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-colors border border-white/20"
                  >
                    <Mail className="w-4 h-4 text-[#FFAE00]" />
                    <span>Email Transaction Receipt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ──────────────────────────────────────────────────────────────────
          03. CLOSING TRUST & CORPORATE BILLING SUPPORT SECTION
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-4xl bg-[#061309] border border-[#1D4224]/60 shadow-2xl overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center">
            {/* Ambient luxury glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1D4224]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFAE00] font-bold block">
                CORPORATE BILLING &amp; REMITTANCE
              </span>
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Need Custom Invoicing or Corporate Support?
              </h2>

              <p className="font-sans text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
                Our finance and accounts team is available to assist with wire transfer verification, payment receipts, or corporate purchase orders.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg transition-all border border-[#FFAE00]/40 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#FFAE00]" />
                  <span>Call: {COMPANY.phone}</span>
                </a>

                <a
                  href={`mailto:${COMPANY.email}?subject=Corporate%20Billing%20Support`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-all border border-white/20 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#FFAE00]" />
                  <span>Email: {COMPANY.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
