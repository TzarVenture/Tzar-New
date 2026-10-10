"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Palette,
  Layers,
  Globe,
  Printer,
  Package,
  Brush,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { LeadCaptureForm } from '@/legacy-src/components/ui/LeadCaptureForm';

/* ── 01. AUTHENTIC DATA FROM LIVE SITE (tzar graphic-designing) ─────────── */

interface DesignItem {
  title: string;
  image: string;
}

interface DesignCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  items: DesignItem[];
}

const CATEGORIES: DesignCategory[] = [
  {
    id: "logo-branding",
    title: "Logo And Branding",
    description:
      "We create a lasting impression with perfect combination of colors, images and text to define your brand. Your Logo will speak for you. Get perfect branding mix with following services.",
    icon: Palette,
    items: [
      { title: "Billboard Design", image: "/assets/images/resources/logobranding/bILL-01-01-01.png" },
      { title: "Stationery Design", image: "/assets/images/resources/logobranding/sta-01-01-01.png" },
      { title: "Signage Design", image: "/assets/images/resources/logobranding/Signeg-01-01-01.png" },
      { title: "Letterhead Design", image: "/assets/images/resources/logobranding/Letter-01-01-2.png" },
      { title: "Label Design", image: "/assets/images/resources/logobranding/label-01-01-2.png" },
      { title: "Business Card Design", image: "/optimized/assets/images/resources/logobranding/Business-card-01-01-01.webp" },
      { title: "Car Wrap Design", image: "/assets/images/resources/logobranding/CAR-01-01-01.png" },
      { title: "Logo Design", image: "/assets/images/resources/logobranding/CARD-01-01-2.png" },
      { title: "Trade Show Booth Design", image: "/assets/images/resources/logobranding/trade-Show-01-01-2.png" },
    ],
  },
  {
    id: "web-design",
    title: "Web Design Services",
    description:
      "Want a great presence on world wide web? Whether it’s a new design for a custom website or a design for a popular CMS platform we can get you the perfect web design with these design services.",
    icon: Globe,
    items: [
      { title: "Wordpress Design", image: "/assets/images/resources/WebDesign/WORD-PRESS-01-01.png" },
      { title: "Icon Design", image: "/assets/images/resources/WebDesign/4-01-01.png" },
      { title: "Wix Website Design", image: "/assets/images/resources/WebDesign/WIX-01-01.png" },
      { title: "Web Design", image: "/assets/images/resources/WebDesign/WEB-01-01.png" },
      { title: "App Design", image: "/assets/images/resources/WebDesign/8-01-01.png" },
      { title: "Shopify Design", image: "/assets/images/resources/WebDesign/SHOPI-01-01.png" },
      { title: "Newsletter Design", image: "/assets/images/resources/WebDesign/new-01-01.png" },
      { title: "Squarespace Design", image: "/assets/images/resources/WebDesign/sQURE-01-01.png" },
      { title: "Banner Ad Design", image: "/assets/images/resources/WebDesign/7-01-01.png" },
      { title: "Email Marketing Design", image: "/assets/images/resources/WebDesign/5-01-01.png" },
      { title: "WooCommerce Design", image: "/assets/images/resources/WebDesign/WOO-01-01.png" },
      { title: "Landing Page Design", image: "/optimized/assets/images/resources/WebDesign/3-01-01.webp" },
    ],
  },
  {
    id: "print-design",
    title: "PrintDesign Services",
    description:
      "It’s the final decision. No mistakes can be made – We get you the right design the very first time. Explore our PrintDesign Services.",
    icon: Printer,
    items: [
      { title: "Flyer Design", image: "/assets/images/resources/PrintDesign/7-01-1.png" },
      { title: "Brochure Design", image: "/assets/images/resources/PrintDesign/10-01.png" },
      { title: "Poster Design", image: "/assets/images/resources/PrintDesign/2-01-1.png" },
      { title: "Advertisement Design", image: "/assets/images/resources/PrintDesign/11-01.png" },
      { title: "Catalogue Design", image: "/assets/images/resources/PrintDesign/9-01.png" },
      { title: "Envelope Design", image: "/assets/images/resources/PrintDesign/8-01-1.png" },
      { title: "Magazine Design", image: "/assets/images/resources/PrintDesign/6-01-1.png" },
      { title: "Menu Design", image: "/assets/images/resources/PrintDesign/5-01-1.png" },
      { title: "Newspaper Ad Design", image: "/assets/images/resources/PrintDesign/4-01-1.png" },
      { title: "Print Design", image: "/assets/images/resources/PrintDesign/1-01-1.png" },
      { title: "Sticker Design", image: "/assets/images/resources/PrintDesign/Untitled-2-01.png" },
      { title: "Resume Design", image: "/assets/images/resources/PrintDesign/Untitled-01.png" },
      { title: "Word Template Design", image: "/assets/images/resources/PrintDesign/Untitled-1-01.png" },
      { title: "PostCard Design", image: "/assets/images/resources/PrintDesign/Untitled-2-01.png" },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design Services",
    description:
      "With our creative skills to make any design attractive and eye catching you can use these graphic design services of ours.",
    icon: Layers,
    items: [
      { title: "Graphic Design", image: "/assets/images/resources/GraphicDesign/2-01-2.png" },
      { title: "PowerPoint Design", image: "/assets/images/resources/GraphicDesign/3-01-2.png" },
      { title: "Vector Design", image: "/assets/images/resources/GraphicDesign/4-01-2.png" },
      { title: "3D Design", image: "/assets/images/resources/GraphicDesign/5-01-2.png" },
      { title: "Photoshop Design", image: "/assets/images/resources/GraphicDesign/6-01-2.png" },
      { title: "Podcast Design", image: "/assets/images/resources/GraphicDesign/7-01-2.png" },
      { title: "Infographic Design", image: "/assets/images/resources/GraphicDesign/8-01-2.png" },
      { title: "Mascot Design", image: "/assets/images/resources/GraphicDesign/Untitled-1-01-1.png" },
    ],
  },
  {
    id: "product-merchandise",
    title: "Product & Merchandise Design Services",
    description:
      "Today is the time of advertising in all way possible. One such way is promotional gear for the team. Get custom apparel, mugs or cups from our professional designers.",
    icon: Package,
    items: [
      { title: "T-shirt Design", image: "/optimized/assets/images/resources/productmerchDesign/2-01-3.webp" },
      { title: "Packaging Design", image: "/assets/images/resources/productmerchDesign/3-01-3.png" },
      { title: "Bag and Tote Design", image: "/assets/images/resources/productmerchDesign/4-01-3.png" },
      { title: "Cup and Mug Design", image: "/assets/images/resources/productmerchDesign/5-01-3.png" },
      { title: "Apparel Design", image: "/assets/images/resources/productmerchDesign/6-01-3.png" },
      { title: "Merchandise Design", image: "/assets/images/resources/productmerchDesign/Untitled-1-01-2.png" },
    ],
  },
  {
    id: "art-illustration",
    title: "Art & Illustration",
    description:
      "The designers at Tzar Venture definitely are the artist you are looking for. Starting from art design to character design you’ll find what you need with these design services.",
    icon: Brush,
    items: [
      { title: "Illustration Design", image: "/optimized/assets/images/resources/art&illustration/3-01-4.webp" },
      { title: "Character Design", image: "/assets/images/resources/art&illustration/6-01-4.png" },
      { title: "Card Design", image: "/assets/images/resources/art&illustration/8-01-3.png" },
      { title: "Art Design", image: "/optimized/assets/images/resources/art&illustration/10-01-1.webp" },
      { title: "CD Cover Design", image: "/assets/images/resources/art&illustration/7-01-3.png" },
      { title: "Tattoo Design", image: "/assets/images/resources/art&illustration/Untitled-1-01-3.png" },
      { title: "Invitation Design", image: "/assets/images/resources/art&illustration/2-01-4.png" },
      { title: "eBook Cover Design", image: "/assets/images/resources/art&illustration/5-01-4.png" },
      { title: "Greeting Card Design", image: "/assets/images/resources/art&illustration/4-01-4.png" },
      { title: "Book Cover Design", image: "/assets/images/resources/art&illustration/9-01-1.png" },
    ],
  },
];

export const GraphicDesigningPage: React.FC = () => {
  const scrollToContactForm = () => {
    const el = document.getElementById('Contactform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#EAF1EB] text-[#0E2015] min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-hidden">

      {/* ──────────────────────────────────────────────────────────────────
          01. HERO BANNER: WIDESCREEN BACKGROUND ART + CONTACT FORM ON RIGHT
          Flush bottom with organic wave transition into Section 02.
      ────────────────────────────────────────────────────────────────── */}
      <section 
        className="relative w-full min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-0 bg-[#061309] text-white overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: '#061309',
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 75% 30%, #1B4D25 0%, #0E2914 45%, #061309 80%, #030A05 100%)',
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
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* ── Left Column: Hero Heading + Graphic Designing Art ── */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start w-full">
              {/* Hero Heading and Breadcrumb */}
              <div className="w-full text-center lg:text-left mb-6 sm:mb-8">
                <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-white/60 mb-3">
                  <Link href="/" className="hover:text-[#FFAE00] transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-[#FFAE00] transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-[#FFAE00] font-bold">Graphic Designing</span>
                </nav>

                <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  High-Impact Graphic &amp;{' '}
                  <span className="text-[#FFA200]">Brand Design.</span>
                </h1>
              </div>

              {/* Graphic Designing Art – matching LogoDesignPage layout */}
              <div className="w-full max-w-115 sm:max-w-135 lg:max-w-150 pt-2 sm:pt-4 flex items-center justify-center overflow-visible">
                <img
                  src="/assets/images/graphic_designing.png"
                  alt="High-Impact Graphic and Brand Design"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Lead Contact Form */}
            <div id="Contactform" className="lg:col-span-5 flex justify-center items-center w-full mt-4 lg:mt-0">
              <div className="w-full max-w-md">
                <LeadCaptureForm
                  title="Claim Your Free Design Consultation"
                  titleColor="#FFAE00"
                  bgColor="#0E2015"
                  textColor="#FFFFFF"
                  buttonBgColor="#1D4224"
                  buttonTextColor="#FFFFFF"
                  defaultService="Logo & Brand Identity"
                  serviceOptions={[
                    'Logo & Brand Identity',
                    'Websites Design & Development',
                    'Product Design & 3D Packaging',
                    'Performance Marketing (PPC)',
                    'Social Media (SMO | SMM)',
                    'Search Engine Optimization (SEO)',
                  ]}
                  noBorder={true}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Smooth Organic Wave Transition: Dark Spruce to Section 02 (#FAF9F5) ── */}
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
          02. WELCOME TO OUR DIGITAL SOLUTIONS: AMPLIFY YOUR SOCIAL PRESENCE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-[#FAF9F5] border-b border-[#1D4224]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6 sm:mb-8">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#1D4224]">
              Welcome to Our Digital Solutions
            </span>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E2015] tracking-tight mt-1.5">
              Amplify Your Social Presence
            </h2>
            <div className="w-16 h-1 bg-[#FFAE00] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Descriptive Story with Authentic Live Text */}
            <div className="lg:col-span-7 space-y-4">
              <p className="font-inter text-base sm:text-lg text-[#0E2015] leading-relaxed font-medium">
                Transforming ideas into powerful visuals — our graphic design solutions blend creativity with strategy to deliver designs that inspire, engage, and communicate your brand story effectively.
              </p>
              <p className="font-inter text-sm sm:text-base text-[#5C6860] leading-relaxed">
                From logos and branding to digital creatives and print designs, we bring concepts to life with a modern aesthetic and attention to detail. Every stroke, color palette, and typographic pairing is engineered to boost conversion, command trust, and elevate market positioning.
              </p>

              {/* Three Value Highlight Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#1D4224]/10 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  </div>
                  <span className="font-montserrat font-bold text-xs text-[#0E2015]">100% Custom Vector Art</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#1D4224]/10 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  </div>
                  <span className="font-montserrat font-bold text-xs text-[#0E2015]">Print &amp; Digital Ready</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#1D4224]/10 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#1D4224] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFAE00]" />
                  </div>
                  <span className="font-montserrat font-bold text-xs text-[#0E2015]">Full Source Files Included</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Feature Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group rounded-3xl overflow-hidden border border-[#1D4224]/15 shadow-xl bg-white max-w-md w-full">
                <img
                  src="https://t4.ftcdn.net/jpg/03/06/44/55/360_F_306445529_dFXbKcu8oAYESRfm7MFujNqAs89tc186.jpg"
                  alt="Graphic Designing Creative Showcase"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E2015]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFAE00] text-[#0E2015] font-montserrat font-black text-[10px] uppercase tracking-wider inline-block mb-1">
                    Creative Studio
                  </span>
                  <p className="font-montserrat font-bold text-sm text-white">
                    Award-Winning Visual Design Systems
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          03. AUTHENTIC DESIGN SERVICE GALLERIES (ALL 6 CATEGORIES)
      ────────────────────────────────────────────────────────────────── */}
      <div className="space-y-0">
        {CATEGORIES.map((category, catIndex) => {
          const isEven = catIndex % 2 === 0;
          const isLast = catIndex === CATEGORIES.length - 1;
          return (
            <section
              key={category.id}
              id={category.id}
              className={`pt-10 sm:pt-14 ${
                isLast ? 'pb-0' : 'pb-10 sm:pb-14 border-b border-[#1D4224]/10'
              } ${isEven ? 'bg-[#FAF9F5]' : 'bg-[#EFE8E0]'} relative`}
            >
              <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isLast ? 'pb-10 sm:pb-14' : ''}`}>
                
                {/* Section Header (No badge) */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                  <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
                    {category.title}
                  </h2>
                  <p className="font-inter text-xs sm:text-sm text-[#5C6860] leading-relaxed mt-2.5">
                    {category.description}
                  </p>
                </div>

                {/* Grid of Design Offerings */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="group bg-white rounded-2xl p-3.5 sm:p-4 border border-[#1D4224]/10 shadow-xs hover:shadow-xl hover:border-[#1D4224]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
                    >
                      {/* Image Preview Container */}
                      <div className="w-full aspect-4/3 rounded-xl bg-[#FAF9F5] p-2 flex items-center justify-center overflow-hidden border border-[#1D4224]/5 mb-3 group-hover:border-[#1D4224]/15 transition-colors">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="font-montserrat font-bold text-xs text-[#1D4224]">${item.title}</span>`;
                            }
                          }}
                        />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-montserrat font-bold text-xs sm:text-sm text-[#0E2015] group-hover:text-[#1D4224] transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Section Bottom CTA */}
                <div className="text-center mt-8">
                  <button
                    onClick={scrollToContactForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1D4224] text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all duration-200 shadow-md cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* ── Smooth Organic Wave Transition on the Last Category into Footer CTA ── */}
              {isLast && (
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
                      fill="#0E2015"
                    />
                  </svg>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ──────────────────────────────────────────────────────────────────
          CLOSING BANNER (CTAS)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0E2015] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4224]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFAE00]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready to Bring Your Brand Vision to Life?
          </h2>

          <p className="font-inter text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Elevate your business with bespoke graphic design, corporate branding, and promotional collateral engineered to convert. Let our creative team design your assets.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs shadow-lg hover:shadow-xl transition-all border border-[#FFAE00]/40 cursor-pointer"
            >
              <span>Get Free Design Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#FFAE00]" />
            </button>

            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-medium text-xs transition-all border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#FFAE00]" />
              <span>Call: {COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
