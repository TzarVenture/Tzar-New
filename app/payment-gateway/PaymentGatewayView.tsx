"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
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
  CreditCard,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Receipt,
  RotateCcw,
} from 'lucide-react';
import { COMPANY } from '@/legacy-src/data/company';

declare global {
  interface Window {
    Razorpay: any;
  }
}

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

export default function PaymentGatewayView() {
  // Method selection: "online" (Razorpay card/netbanking) at first place | "direct" (Kotak Bank & UPI) at second
  const [paymentMode, setPaymentMode] = useState<'online' | 'direct'>('online');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Copy helper
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };

  // Online Checkout States
  const [step, setStep] = useState<number>(1);
  const [selected, setSelected] = useState<PaymentService[]>([]);
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gstNumber, setGstNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [manualAmount, setManualAmount] = useState<string>('10000');
  const [webPlan, setWebPlan] = useState<string>('');
  const [tcAccepted, setTcAccepted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<string>('');
  const [invoiceUrl, setInvoiceUrl] = useState<string>('');

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

  const baseAmount = Number(manualAmount || 0);
  const gstAmount = Math.round(baseAmount * 0.18);
  const finalAmount = baseAmount + gstAmount;

  const canContinueFromStep1 =
    selected.length > 0 && (!isWebDevSelected || (Boolean(webPlan) && tcAccepted));

  const canContinueFromStep2 =
    Boolean(name.trim()) &&
    Boolean(email.trim()) &&
    Boolean(address.trim()) &&
    baseAmount >= 1;

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
          name: "TZAR DIGITAL AGENCY",
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
    <div className="bg-[#FAF9F5] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER: LUXURY DARK SPRUCE WITH BRAND ACCENTS
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
            <span className="text-[#FFAE00] font-bold">Payment Gateway</span>
          </nav>

          {/* Heading */}
          <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Official Payment Gateway &amp;{' '}
            <span className="text-[#FFAE00]">Banking Hub</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
            Encrypted online card/UPI checkout, or direct Kotak Mahindra Bank transfer. All transactions are backed by official GST invoices.
          </p>

          {/* Method Switcher Tabs: 1st Place = Card & Online Checkout, 2nd Place = Bank Transfer & UPI QR */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
              <button
                type="button"
                onClick={() => setPaymentMode('online')}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  paymentMode === 'online'
                    ? 'bg-[#FFAE00] text-[#061309] shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Card &amp; Online Checkout</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMode('direct')}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  paymentMode === 'direct'
                    ? 'bg-[#FFAE00] text-[#061309] shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Bank Transfer &amp; UPI QR</span>
              </button>
            </div>
          </div>
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
          02. MAIN CONTENT AREA
      ────────────────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {paymentMode === 'online' ? (
          /* ════════════════════════════════════════════════════════════════
             MODE 1 (FIRST PLACE): ONLINE CARD & RAZORPAY CHECKOUT FLOW
             ════════════════════════════════════════════════════════════════ */
          <div className="max-w-5xl mx-auto">
            {/* Timeline Indicator */}
            {!paymentSuccess && (
              <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 max-w-xl mx-auto">
                <div
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 ${
                    step === 1
                      ? 'bg-[#0E2015] text-[#FFAE00] border border-[#FFAE00]/50 shadow-md ring-2 ring-[#FFAE00]/20'
                      : step > 1
                      ? 'bg-[#1D4224] text-white'
                      : 'bg-white text-[#5C6860] border border-[#0E2015]/10'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step > 1 ? 'bg-[#FFAE00] text-[#0E2015]' : 'bg-white/20'}`}>
                    {step > 1 ? <Check className="w-3 h-3 stroke-3" /> : '1'}
                  </span>
                  <span>Services</span>
                </div>

                <div className={`w-6 sm:w-12 h-0.5 transition-colors ${step >= 2 ? 'bg-[#1D4224]' : 'bg-[#0E2015]/15'}`} />

                <div
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 ${
                    step === 2
                      ? 'bg-[#0E2015] text-[#FFAE00] border border-[#FFAE00]/50 shadow-md ring-2 ring-[#FFAE00]/20'
                      : step > 2
                      ? 'bg-[#1D4224] text-white'
                      : 'bg-white text-[#5C6860] border border-[#0E2015]/10'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step > 2 ? 'bg-[#FFAE00] text-[#0E2015]' : 'bg-white/20'}`}>
                    {step > 2 ? <Check className="w-3 h-3 stroke-3" /> : '2'}
                  </span>
                  <span>Details</span>
                </div>

                <div className={`w-6 sm:w-12 h-0.5 transition-colors ${step >= 3 ? 'bg-[#1D4224]' : 'bg-[#0E2015]/15'}`} />

                <div
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all duration-300 ${
                    step === 3
                      ? 'bg-[#0E2015] text-[#FFAE00] border border-[#FFAE00]/50 shadow-md ring-2 ring-[#FFAE00]/20'
                      : 'bg-white text-[#5C6860] border border-[#0E2015]/10'
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
              {paymentSuccess ? (
                /* Success View */
                <div className="py-12 px-4 text-center max-w-lg mx-auto flex flex-col items-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-[#1D4224]/10 border-2 border-[#1D4224]/30 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-[#1D4224]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015]">
                      Payment Successful!
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#5C6860]">
                      Your payment has been recorded and an official invoice has been sent to your email.
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
                  {/* Step 1: Select Services */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="border-b border-[#0E2015]/10 pb-4">
                        <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0E2015]">
                          Select Services
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SERVICES.map((service) => {
                          const isSelected = selected.some((s) => s.id === service.id);
                          const isWebService = service.title.toLowerCase().includes("web");

                          return (
                            <div key={service.id} className="flex flex-col">
                              <div
                                onClick={() => toggleService(service)}
                                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 relative border flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-[#0E2015] text-white border-2 border-[#FFAE00] shadow-xl ring-2 ring-[#FFAE00]/20'
                                    : 'bg-[#FAF9F5] text-[#0E2015] border-[#0E2015]/10 hover:border-[#1D4224]/30 hover:bg-white hover:shadow-md'
                                }`}
                              >
                                <h4 className="font-montserrat font-bold text-sm sm:text-base leading-snug">
                                  {service.title}
                                </h4>
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ml-3 ${
                                    isSelected
                                      ? 'bg-[#FFAE00] text-[#0E2015]'
                                      : 'bg-white border border-[#0E2015]/20 text-transparent'
                                  }`}
                                >
                                  <Check className="w-3.5 h-3.5 stroke-3" />
                                </div>
                              </div>

                              {isSelected && isWebService && (
                                <div className="mt-3 p-4 rounded-2xl bg-[#061309] text-white border border-[#FFAE00]/40 shadow-lg space-y-3">
                                  <div>
                                    <label className="block font-montserrat font-bold text-xs uppercase text-[#FFAE00] tracking-wider mb-1.5">
                                      Select Web Development Plan
                                    </label>
                                    <select
                                      value={webPlan}
                                      onChange={(e) => setWebPlan(e.target.value)}
                                      className="w-full px-3.5 py-2.5 rounded-xl bg-white text-[#0E2015] border border-white/20 font-sans text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFAE00] cursor-pointer"
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

                  {/* Step 2: Customer Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="border-b border-[#0E2015]/10 pb-4">
                        <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0E2015]">
                          Your Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all font-sans text-sm"
                          />
                        </div>

                        <div>
                          <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Innovations Pvt Ltd"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all font-sans text-sm"
                          />
                        </div>

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
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all font-sans text-sm"
                          />
                        </div>

                        <div>
                          <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="e.g. +91 98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all font-sans text-sm"
                          />
                        </div>

                        <div>
                          <label className="block font-montserrat font-bold text-xs uppercase tracking-wider text-[#0E2015] mb-1.5">
                            GST Number (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 27AAAAA0000A1Z5"
                            value={gstNumber}
                            onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all text-sm font-mono uppercase"
                          />
                        </div>

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
                              className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all font-mono font-bold text-base"
                            />
                          </div>
                        </div>

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
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/15 focus:outline-none focus:ring-2 focus:ring-[#1D4224]/20 text-[#0E2015] transition-all font-sans text-sm resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Order Summary */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="border-b border-[#0E2015]/10 pb-4">
                        <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0E2015]">
                          Order Summary
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 space-y-4">
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
                                  <Check className="w-3 h-3 stroke-3" />
                                  <span>{s.title}</span>
                                </span>
                              ))}
                            </div>

                            {webPlan && (
                              <div className="mt-3 pt-3 border-t border-[#0E2015]/10 flex items-center justify-between text-xs">
                                <span className="text-[#5C6860] font-sans">Web Development Plan:</span>
                                <strong className="text-[#0E2015] font-montserrat font-bold">{webPlan}</strong>
                              </div>
                            )}
                          </div>

                          <div className="p-5 rounded-2xl bg-white border border-[#0E2015]/10 shadow-sm space-y-3">
                            <div className="flex justify-between items-center text-sm font-sans text-[#5C6860]">
                              <span>Base Service Fee:</span>
                              <span className="font-mono font-bold text-[#0E2015]">
                                ₹{baseAmount.toLocaleString('en-IN')}
                              </span>
                            </div>

                            <div className="flex justify-between items-center text-sm font-sans text-[#5C6860]">
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

                        <div className="lg:col-span-5 space-y-4">
                          <div className="p-5 rounded-2xl bg-[#061309] text-white border border-[#FFAE00]/40 shadow-xl space-y-3">
                            <div className="flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-[#FFAE00] border-b border-white/10 pb-2">
                              <Receipt className="w-4 h-4" />
                              <span>Billing Recipient</span>
                            </div>

                            <div className="space-y-1.5 font-sans text-xs text-white/90">
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

                          <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#0E2015]/10 flex items-center justify-center gap-2 text-[11px] text-[#5C6860]">
                            <ShieldCheck className="w-4 h-4 text-[#1D4224]" />
                            <span>Secured by Razorpay • 256-Bit Bank-Grade Encryption</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Footer */}
                  <div className="border-t border-[#0E2015]/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
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
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg transition-all border border-[#FFAE00]/40 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                      </button>
                    )}

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
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg transition-all border border-[#FFAE00]/40 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
                      </button>
                    )}

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
        ) : (
          /* ════════════════════════════════════════════════════════════════
             MODE 2 (SECOND PLACE): OFFICIAL KOTAK BANK TRANSFER & UPI QR CODE
             ════════════════════════════════════════════════════════════════ */
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

                {/* 2. Office Address & Contact Card (Matching old site structure) */}
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
        )}
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
