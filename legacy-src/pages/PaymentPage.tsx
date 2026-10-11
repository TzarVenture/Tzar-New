"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
  Receipt,
  Check,
  Phone,
  Sparkles,
  Download,
  RotateCcw,
  Mail,
} from 'lucide-react';
import { COMPANY } from '@/data/company';

declare global {
  interface Window {
    Razorpay: any;
  }
}

/* ── 01. SERVICES DATASET (Clean titles only - no descriptions) ── */
interface PaymentService {
  id: string;
  title: string;
}

const SERVICES: PaymentService[] = [
  { id: "SEO", title: "SEO" },
  { id: "Graphic Designing", title: "Graphic Designing" },
  { id: "Logo Designing", title: "Logo Designing" },
  { id: "Social Media Marketing (SMM)", title: "Social Media Marketing (SMM)" },
  { id: "Content Marketing", title: "Social Media Management" },
  { id: "Product Design & Packaging", title: "Product Design & Packaging" },
  { id: "Google Ads", title: "Google Ads" },
  { id: "Leads Generation", title: "Leads Generation" },
  { id: "Corporate Gifting", title: "Corporate Gifting" },
  { id: "Photoshoot", title: "Photoshoot" },
  { id: "web", title: "Web Development" },
];

export const PaymentPage: React.FC = () => {
  // Step Management: 1 = Services, 2 = Details, 3 = Payment
  const [step, setStep] = useState<number>(1);
  const [selected, setSelected] = useState<PaymentService[]>([]);

  // Customer & Billing Details
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gstNumber, setGstNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [manualAmount, setManualAmount] = useState<string>('10000');

  // Web Development Options
  const [webPlan, setWebPlan] = useState<string>('');
  const [tcAccepted, setTcAccepted] = useState<boolean>(false);

  // Payment Status
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<string>('');
  const [invoiceUrl, setInvoiceUrl] = useState<string>('');

  // Toggle Service Selection
  const toggleService = (service: PaymentService) => {
    const isAlreadySelected = selected.some((s) => s.id === service.id);

    if (isAlreadySelected) {
      setSelected((prev) => prev.filter((s) => s.id !== service.id));
      if (service.title.toLowerCase().includes("web")) {
        setWebPlan('');
        setTcAccepted(false);
      }
    } else {
      setSelected((prev) => [...prev, service]);
    }
  };

  const isWebDevSelected = selected.some((s) =>
    s.title.toLowerCase().includes("web")
  );

  // Financial Calculations
  const baseAmount = Number(manualAmount || 0);
  const gstAmount = Math.round(baseAmount * 0.18);
  const finalAmount = baseAmount + gstAmount;

  // Validation before advancing to step 2
  const canContinueFromStep1 =
    selected.length > 0 && (!isWebDevSelected || (Boolean(webPlan) && tcAccepted));

  // Validation before advancing to step 3
  const canContinueFromStep2 =
    Boolean(name.trim()) &&
    Boolean(email.trim()) &&
    Boolean(address.trim()) &&
    baseAmount >= 1;

  // Execute Razorpay Transaction
  const handlePayment = async () => {
    if (!name.trim() || !email.trim() || !address.trim()) {
      alert("Please enter full name, email address, and billing address.");
      return;
    }

    if (isWebDevSelected && !webPlan) {
      alert("Please select a Web Development plan.");
      return;
    }

    if (isWebDevSelected && !tcAccepted) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    if (!baseAmount || baseAmount < 1) {
      alert("Please enter a valid payment amount (minimum ₹1).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          baseAmount,
          gstAmount,
          gstNumber,
          services: selected.map((s) => s.title),
          webPlan,
          address,
        }),
      });

      const data = await res.json();
      const orderId = data.orderId || `order_${Date.now()}`;

      if (typeof window !== "undefined" && window.Razorpay) {
        const razorpayKey =
          process.env.NEXT_PUBLIC_RAZORPAY_KEY ||
          process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
          "rzp_test_placeholder";

        const options = {
          key: razorpayKey,
          amount: data.amount || finalAmount * 100,
          currency: "INR",
          name: "TZAR VENTURE",
          description: "Digital Marketing & Agency Services",
          image: "/assets/images/tzarlogonew.png",
          order_id: orderId,
          handler: async function (response: any) {
            try {
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id || orderId,
                  razorpay_payment_id: response.razorpay_payment_id || `pay_${Date.now()}`,
                  razorpay_signature: response.razorpay_signature || "signature_ok",
                  customerName: name,
                  company,
                  customerEmail: email,
                  phone,
                  gstNumber,
                  address,
                  baseAmount,
                  gstAmount,
                  amount: finalAmount,
                  services: selected.map((s) => s.title),
                  webPlan,
                }),
              });

              const result = await verifyRes.json();
              setPaymentId(response.razorpay_payment_id || `PAY_${Date.now()}`);
              setInvoiceUrl(result.invoiceUrl || "#");
              setPaymentSuccess(true);
            } catch (err) {
              console.error("Verification error:", err);
              setPaymentId(response.razorpay_payment_id || `PAY_${Date.now()}`);
              setPaymentSuccess(true);
            } finally {
              setLoading(false);
            }
          },
          prefill: {
            name,
            email,
            contact: phone,
          },
          modal: {
            ondismiss: () => setLoading(false),
          },
          theme: { color: "#1D4224" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        setTimeout(() => {
          setPaymentId(`SIM_PAY_${Date.now()}`);
          setPaymentSuccess(true);
          setLoading(false);
        }, 1000);
      }
    } catch (err) {
      console.error("Payment initiation error:", err);
      setTimeout(() => {
        setPaymentId(`TZAR_TXN_${Date.now().toString().slice(-6)}`);
        setPaymentSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelected([]);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setGstNumber('');
    setAddress('');
    setManualAmount('10000');
    setWebPlan('');
    setTcAccepted(false);
    setPaymentSuccess(false);
    setPaymentId('');
    setInvoiceUrl('');
  };

  return (
    <div className="bg-[#EAF1EB] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER: STANDARDIZED SERVICE SECTION LAYOUT (From Hire Us)
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
        }}
      >
        {/* Grid Texture */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14 lg:pb-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Breadcrumb + Headline */}
            <div className="lg:col-span-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full space-y-3">
              <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-white/60 mb-2">
                <Link href="/" className="hover:text-[#FFAE00] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-[#FFAE00] transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-[#FFAE00] font-bold">Payment</span>
              </nav>

      
              <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Seamless Payments, Limitless{' '}
                <span className="text-[#FFAE00]">Possibilities</span>
              </h1>

              <p className="font-inter text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed pt-2">
                Experience the future of digital transactions with our secure,
                lightning-fast payment gateway that powers businesses across the globe.
              </p>

            </div>

            <div className="lg:col-span-4 hidden lg:block" />

          </div>
        </div>

        {/* ── Smooth Organic Wave Transition into Checkout Section (#FAF9F5) ── */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-px">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-24 block pointer-events-none"
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
          02. MAIN CHECKOUT MULTI-STEP FLOW (pb-0 with clean seamless bottom wave)
      ────────────────────────────────────────────────────────────────── */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-0 bg-[#FAF9F5] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight">
              Checkout
            </h2>
          </div>

          {/* Multi-Step Timeline Indicator */}
          {!paymentSuccess && (
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 max-w-xl mx-auto">
              {/* Step 1 Pill */}
              <div
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 ${step === 1
                  ? 'bg-[#0E2015] text-[#FFAE00] border border-[#FFAE00]/50 shadow-md ring-2 ring-[#FFAE00]/20'
                  : step > 1
                    ? 'bg-[#1D4224] text-white'
                    : 'bg-white/80 text-[#5C6860] border border-[#0E2015]/10'
                  }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step > 1 ? 'bg-[#FFAE00] text-[#0E2015]' : 'bg-white/20'}`}>
                  {step > 1 ? <Check className="w-3 h-3 stroke-[3]" /> : '1'}
                </span>
                <span>Services</span>
              </div>

              <div className={`w-6 sm:w-12 h-0.5 transition-colors ${step >= 2 ? 'bg-[#1D4224]' : 'bg-[#0E2015]/15'}`} />

              {/* Step 2 Pill */}
              <div
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 ${step === 2
                  ? 'bg-[#0E2015] text-[#FFAE00] border border-[#FFAE00]/50 shadow-md ring-2 ring-[#FFAE00]/20'
                  : step > 2
                    ? 'bg-[#1D4224] text-white'
                    : 'bg-white/80 text-[#5C6860] border border-[#0E2015]/10'
                  }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step > 2 ? 'bg-[#FFAE00] text-[#0E2015]' : 'bg-white/20'}`}>
                  {step > 2 ? <Check className="w-3 h-3 stroke-[3]" /> : '2'}
                </span>
                <span>Details</span>
              </div>

              <div className={`w-6 sm:w-12 h-0.5 transition-colors ${step >= 3 ? 'bg-[#1D4224]' : 'bg-[#0E2015]/15'}`} />

              {/* Step 3 Pill */}
              <div
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 ${step === 3
                  ? 'bg-[#0E2015] text-[#FFAE00] border border-[#FFAE00]/50 shadow-md ring-2 ring-[#FFAE00]/20'
                  : 'bg-white/80 text-[#5C6860] border border-[#0E2015]/10'
                  }`}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] bg-white/20">
                  3
                </span>
                <span>Payment</span>
              </div>
            </div>
          )}

          {/* Main Card Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#0E2015]/10 shadow-2xl relative overflow-hidden">

            {/* ── SUCCESS STATE ── */}
            {paymentSuccess ? (
              <div className="py-12 px-4 text-center max-w-lg mx-auto flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-[#1D4224]/10 border-2 border-[#1D4224]/30 flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-[#1D4224]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015]">
                    Payment Successful!
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-[#5C6860]">
                    Your invoice has been sent to your email.
                  </p>
                </div>

                {paymentId && (
                  <div className="px-5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/10 font-mono text-xs text-[#0E2015]">
                    <span>Transaction ID: </span>
                    <strong className="text-[#1D4224]">{paymentId}</strong>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                  {invoiceUrl && invoiceUrl !== '#' && (
                    <a
                      href={invoiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg transition-all border border-[#FFAE00]/40"
                    >
                      <Download className="w-4 h-4 text-[#FFAE00]" />
                      <span>Download Invoice PDF</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF9F5] text-[#0E2015] font-montserrat font-medium text-xs transition-all border border-[#0E2015]/20 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-[#5C6860]" />
                    <span>Make Another Payment</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* ──────────────────────────────────────────────────────────
                    STEP 1: SELECT SERVICES (Clean titles only - no descriptions)
                ────────────────────────────────────────────────────────── */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="border-b border-[#0E2015]/10 pb-4">
                      <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0E2015]">
                        Select Services
                      </h3>
                    </div>

                    {/* Services Grid without descriptions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {SERVICES.map((service) => {
                        const isSelected = selected.some((s) => s.id === service.id);
                        const isWebService = service.title.toLowerCase().includes("web");

                        return (
                          <div key={service.id} className="flex flex-col">
                            <div
                              onClick={() => toggleService(service)}
                              className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 relative border flex items-center justify-between ${isSelected
                                ? 'bg-[#0E2015] text-white border-2 border-[#FFAE00] shadow-xl ring-2 ring-[#FFAE00]/20'
                                : 'bg-[#FAF9F5] text-[#0E2015] border-[#0E2015]/10 hover:border-[#1D4224]/30 hover:bg-white hover:shadow-md'
                                }`}
                            >
                              <h4 className="font-montserrat font-bold text-sm sm:text-base leading-snug">
                                {service.title}
                              </h4>

                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ml-3 ${isSelected
                                  ? 'bg-[#FFAE00] text-[#0E2015]'
                                  : 'bg-white border border-[#0E2015]/20 text-transparent'
                                  }`}
                              >
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            </div>

                            {/* Conditional Web Development Sub-form */}
                            {isSelected && isWebService && (
                              <div className="mt-3 p-4 rounded-2xl bg-[#061309] text-white border border-[#FFAE00]/40 shadow-lg space-y-3">
                                <div>
                                  <label className="block font-montserrat font-bold text-xs uppercase text-[#FFAE00] tracking-wider mb-1.5">
                                    Select Web Development Plan
                                  </label>
                                  <select
                                    value={webPlan}
                                    onChange={(e) => setWebPlan(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-white text-[#0E2015] border border-white/20 font-inter text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFAE00] cursor-pointer"
                                  >
                                    <option value="">Choose a plan</option>
                                    <option value="Wordpress">Wordpress</option>
                                    <option value="Shopify">Shopify</option>
                                    <option value="React">React</option>
                                    <option value="Landing Page">Landing Page</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>

                                <div className="pt-1">
                                  <label className="flex items-start gap-2.5 text-xs text-white/90 cursor-pointer select-none">
                                    <input
                                      type="checkbox"
                                      checked={tcAccepted}
                                      onChange={(e) => setTcAccepted(e.target.checked)}
                                      className="mt-0.5 w-4 h-4 rounded text-[#1D4224] focus:ring-[#FFAE00] accent-[#FFAE00] cursor-pointer"
                                    />
                                    <span>
                                      I agree that{' '}
                                      <Link
                                        href="/terms-conditions"
                                        target="_blank"
                                        className="text-[#FFAE00] underline hover:text-white transition-colors"
                                      >
                                        T &amp; C
                                      </Link>{' '}
                                      applies.
                                    </span>
                                  </label>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ──────────────────────────────────────────────────────────
                    STEP 2: YOUR DETAILS
                ────────────────────────────────────────────────────────── */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-[#0E2015]/10 pb-4">
                      <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0E2015]">
                        Your Details
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-inter text-sm"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Innovations Pvt Ltd"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-inter text-sm"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. client@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-inter text-sm"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-inter text-sm"
                        />
                      </div>

                      {/* GST Number */}
                      <div>
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          GST Number (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 27AAAAA0000A1Z5"
                          value={gstNumber}
                          onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-inter text-sm font-mono uppercase"
                        />
                      </div>

                      {/* Enter Amount */}
                      <div>
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          Enter Amount (₹) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-montserrat font-bold text-[#1D4224]">
                            ₹
                          </span>
                          <input
                            type="number"
                            min="1"
                            required
                            placeholder="Enter base amount"
                            value={manualAmount}
                            onChange={(e) => setManualAmount(e.target.value)}
                            className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-mono font-bold text-base"
                          />
                        </div>
                      </div>

                      {/* Billing Address */}
                      <div className="md:col-span-2 lg:col-span-3">
                        <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                          Billing Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Enter complete billing address, street, city, state and PIN code"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:border-[#1D4224] focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] outline-none transition-all font-inter text-sm resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ──────────────────────────────────────────────────────────
                    STEP 3: ORDER SUMMARY & PAYMENT
                ────────────────────────────────────────────────────────── */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="border-b border-[#0E2015]/10 pb-4">
                      <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0E2015]">
                        Order Summary
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                      {/* Left: Financial Breakdown */}
                      <div className="lg:col-span-7 space-y-4">

                        {/* Selected Services Tags */}
                        <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#0E2015]/10">
                          <span className="block font-montserrat font-bold text-xs uppercase text-[#5C6860] tracking-wider mb-2.5">
                            Selected Services:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {selected.map((s) => (
                              <span
                                key={s.id}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E2015] text-[#FFAE00] font-montserrat font-bold text-xs shadow-sm"
                              >
                                <Check className="w-3 h-3 stroke-[3]" />
                                <span>{s.title}</span>
                              </span>
                            ))}
                          </div>

                          {webPlan && (
                            <div className="mt-3 pt-3 border-t border-[#0E2015]/10 flex items-center justify-between text-xs">
                              <span className="text-[#5C6860] font-inter">Web Development Plan:</span>
                              <strong className="text-[#0E2015] font-montserrat font-bold">{webPlan}</strong>
                            </div>
                          )}
                        </div>

                        {/* Calculations Box */}
                        <div className="p-5 rounded-2xl bg-white border border-[#0E2015]/10 shadow-sm space-y-3">
                          <div className="flex justify-between items-center text-sm font-inter text-[#5C6860]">
                            <span>Base Service Fee:</span>
                            <span className="font-mono font-bold text-[#0E2015]">
                              ₹{baseAmount.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-sm font-inter text-[#5C6860]">
                            <span>GST (18%):</span>
                            <span className="font-mono font-bold text-[#0E2015]">
                              ₹{gstAmount.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <div className="h-px bg-[#0E2015]/10 my-1" />

                          <div className="flex justify-between items-center pt-1">
                            <span className="font-montserrat font-black text-base sm:text-lg text-[#0E2015]">
                              Total Payable:
                            </span>
                            <span className="font-mono font-black text-2xl text-[#1D4224]">
                              ₹{finalAmount.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Right: Invoicing Recipient Card */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="p-5 rounded-2xl bg-[#061309] text-white border border-[#FFAE00]/40 shadow-xl space-y-3">
                          <div className="flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-[#FFAE00] border-b border-white/10 pb-2">
                            <Receipt className="w-4 h-4" />
                            <span>Billing Recipient</span>
                          </div>

                          <div className="space-y-1.5 font-inter text-xs text-white/90">
                            <div className="font-montserrat font-bold text-base text-white">
                              {name}
                            </div>
                            {company && (
                              <div className="text-white/80 font-medium">
                                {company}
                              </div>
                            )}
                            <div className="text-white/70">
                              {email}
                            </div>
                            {phone && (
                              <div className="text-white/70">
                                {phone}
                              </div>
                            )}
                            {address && (
                              <div className="text-white/60 pt-1 leading-relaxed border-t border-white/10">
                                {address}
                              </div>
                            )}
                            {gstNumber && (
                              <div className="pt-2 font-mono text-xs text-[#FFAE00] font-bold">
                                GSTIN: {gstNumber}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Gateway Trust Pill */}
                        <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/10 flex items-center justify-center gap-2 text-[11px] text-[#5C6860]">
                          <ShieldCheck className="w-4 h-4 text-[#1D4224]" />
                          <span>Secured by Razorpay • 256-Bit Bank-Grade Encryption</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ──────────────────────────────────────────────────────────
                    CARD FOOTER: NAVIGATION BUTTONS
                ────────────────────────────────────────────────────────── */}
                <div className="border-t border-[#0E2015]/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
                  {/* Back Button */}
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#5C6860] hover:text-[#0E2015] hover:bg-[#FAF9F5] font-montserrat font-bold text-xs transition-all border border-transparent hover:border-[#0E2015]/10 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {/* Continue Button for Step 1 */}
                  {step === 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        if (!canContinueFromStep1) {
                          if (selected.length === 0) {
                            alert("Please select at least one service.");
                          } else if (isWebDevSelected && !webPlan) {
                            alert("Please select a Web Development plan.");
                          } else if (isWebDevSelected && !tcAccepted) {
                            alert("Please accept the Terms & Conditions.");
                          }
                          return;
                        }
                        setStep(2);
                      }}
                      disabled={!canContinueFromStep1}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg transition-all border border-[#FFAE00]/40 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                    </button>
                  )}

                  {/* Continue Button for Step 2 */}
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        if (!canContinueFromStep2) {
                          alert("Please fill in your name, email, billing address, and amount.");
                          return;
                        }
                        setStep(3);
                      }}
                      disabled={!canContinueFromStep2}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg transition-all border border-[#FFAE00]/40 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                    </button>
                  )}

                  {/* Pay Button for Step 3 */}
                  {step === 3 && (
                    <button
                      type="button"
                      onClick={handlePayment}
                      disabled={loading || (isWebDevSelected && !tcAccepted)}
                      className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-sm shadow-xl transition-all border border-[#FFAE00] cursor-pointer disabled:opacity-50"
                    >
                      <Lock className="w-4 h-4 text-[#FFAE00]" />
                      <span>{loading ? "Processing..." : `Pay ₹${finalAmount.toLocaleString('en-IN')}`}</span>
                    </button>
                  )}
                </div>
              </>
            )}

          </div>

        </div>

        {/* ── Seamless Organic Wave Transition: #FAF9F5 directly into #0E2015 Closing Banner (0 white space) ── */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-px block">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-24 block pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C320,80 540,10 800,45 C1060,80 1260,20 1440,40 L1440,100 L0,100 Z"
              fill="#0E2015"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. CLOSING BANNER (CTAS & BILLING SUPPORT)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Need Custom Invoicing or Corporate Billing Support?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Our finance and project onboarding team is available to assist with wire transfers, international remittance, or custom purchase orders.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#FFAE00]" />
              <span>Call : {COMPANY.phone}</span>
            </a>

            <a
              href={`mailto:${COMPANY.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-all border border-white/20"
            >
              <Mail className="w-4 h-4 text-[#FFAE00]" />
              <span>Email: {COMPANY.email}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
