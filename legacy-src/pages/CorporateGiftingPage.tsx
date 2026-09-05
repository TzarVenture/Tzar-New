"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

/* --------------------------------------------------------------------------
   EXACT PRODUCT DATA FROM LIVE SITE (tzar/src/app/corporate-gifting/page.js)
-------------------------------------------------------------------------- */
interface ProductItem {
  id: number;
  name: string;
  img: string;
}

const employeeGiftingProducts: ProductItem[] = [
  { id: 1, name: "Sharp and Steely Gift Hamper", img: "/assets/images/backgrounds/employee.webp" },
  { id: 2, name: "Savvy and Sustainable Gift Hamper", img: "/assets/images/backgrounds/employee1.webp" },
  { id: 3, name: "The Eco-Employee Gift Hamper", img: "/assets/images/backgrounds/employee2.webp" },
];

const clientGiftingProducts: ProductItem[] = [
  { id: 1, name: "Caffienated Techie Gift Hamper", img: "/assets/images/backgrounds/client.webp" },
  { id: 2, name: "Mighty Gift Trunk", img: "/assets/images/backgrounds/client1.webp" },
];

const welcomeKitProducts: ProductItem[] = [
  { id: 1, name: "Savvy and Sustainable Gift Hamper", img: "/assets/images/backgrounds/wlcm1.webp" },
  { id: 2, name: "Sharp and Steely Gift Hamper", img: "/assets/images/backgrounds/wlcm3.webp" },
  { id: 3, name: "The Eco-Employee Gift Hamper", img: "/assets/images/backgrounds/wlcm4.webp" },
];

const customProducts: ProductItem[] = [
  { id: 1, name: "Box - Beige", img: "/assets/images/backgrounds/cust1.webp" },
  { id: 2, name: "Box - Green", img: "/assets/images/backgrounds/cust2.webp" },
  { id: 3, name: "Box - Black", img: "/assets/images/backgrounds/cust3.webp" },
];

const promotionalProducts: ProductItem[] = [
  { id: 1, name: "Bamboo Coffee Sipper", img: "/assets/images/backgrounds/Promo1.webp" },
  { id: 2, name: "Champagne Flute", img: "/assets/images/backgrounds/promo2.webp" },
  { id: 3, name: "Copper Bottle Set", img: "/assets/images/backgrounds/promo3.webp" },
  { id: 4, name: "Glass Bottle – Tyrel", img: "/assets/images/backgrounds/promo4.webp" },
  { id: 5, name: "Sipper – Laba", img: "/assets/images/backgrounds/promo5.webp" },
  { id: 6, name: "Passport Organizer", img: "/assets/images/backgrounds/promo6.webp" },
  { id: 7, name: "Passport Pouch", img: "/assets/images/backgrounds/promo7.webp" },
  { id: 8, name: "Storage pouches – felt", img: "/assets/images/backgrounds/promo8.webp" },
  { id: 9, name: "Sunglass pouch", img: "/assets/images/backgrounds/promo9.webp" },
  { id: 10, name: "Crochet Coaster – Mia", img: "/assets/images/backgrounds/promo10.webp" },
  { id: 11, name: "Deskmate- Multipurpose Pad", img: "/assets/images/backgrounds/promo11.webp" },
  { id: 12, name: "Foldable Mouse Pad – ZEN", img: "/assets/images/backgrounds/promo12.webp" },
  { id: 13, name: "Seed paper Calendar 2025", img: "/assets/images/backgrounds/promo13.webp" },
  { id: 14, name: "Whippy- Foldable Mobile Stand", img: "/assets/images/backgrounds/promo14.webp" },
  { id: 15, name: "Blue Arrow- Journal", img: "/assets/images/backgrounds/promo15.webp" },
  { id: 16, name: "Journal – Dante", img: "/assets/images/backgrounds/promo16.webp" },
  { id: 17, name: "Journal – Newton", img: "/assets/images/backgrounds/promo17.webp" },
  { id: 18, name: "Journal – Leer", img: "/assets/images/backgrounds/promo18.webp" },
  { id: 19, name: "Journal – Libro Black", img: "/assets/images/backgrounds/promo19.webp" },
  { id: 20, name: "Notes organizer", img: "/assets/images/backgrounds/promo20.webp" },
];

/* Filter Tabs (No numbers, no 'All Products', no 'Bulk Orders') */
const TABS = [
  "Employee Gifting",
  "Client Gifting",
  "Welcome Kit",
  "Custom Packaging",
  "Promotional Products",
];

/* --------------------------------------------------------------------------
   PRODUCT CARD COMPONENT (Matches live site functionality & luxury theme)
-------------------------------------------------------------------------- */
interface ProductCardProps {
  product: ProductItem;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden border border-[#1D4224]/10 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Product Image Stage */}
      <div className="relative h-60 overflow-hidden bg-neutral-100 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4 text-center">
        <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#0E2015] leading-snug">
          {product.name}
        </h3>

        <div className="pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (link) {
                window.open(link, "_blank", "noopener,noreferrer");
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-[#1D4224] text-[#1D4224] hover:bg-[#1D4224] hover:text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            <span>Enquiry Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   PRODUCT GRID COMPONENT (Responsive CSS Grid)
-------------------------------------------------------------------------- */
interface ProductGridProps {
  products: ProductItem[];
  link: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, link }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-in fade-in duration-200">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} link={link} />
      ))}
    </div>
  );
};

/* --------------------------------------------------------------------------
   MAIN CORPORATE GIFTING PAGE COMPONENT
-------------------------------------------------------------------------- */
export const CorporateGiftingPage: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="bg-[#EFE8E0] text-[#0E2015] min-h-screen">

      {/* ── 01. ENHANCED BESPOKE HERO BANNER (100% VH / DVH HEIGHT AS REQUESTED) ── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] h-screen h-[100dvh] flex flex-col justify-center pt-20 pb-8 sm:pt-20 sm:pb-8 overflow-hidden bg-[#0E2015] border-b border-[#1D4224]/20">
        {/* Enhanced High-Resolution Luxury Banner Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src="/assets/images/backgrounds/corporate-banner.jpg"
            alt="Bespoke Corporate Gifting"
            className="w-full h-full object-cover object-center opacity-70"
          />
          {/* Brand dark spruce & gold ambient gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2015] via-[#0E2015]/75 to-[#0E2015]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2015] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 my-auto w-full">
          <div className="max-w-3xl space-y-4">
            <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#FFAE00]">
              Curated Luxury &amp; Bespoke Merchandise
            </p>
            <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08]">
              CORPORATE GIFTING SOLUTIONS
            </h1>

            {/* CTA Buttons: Fixed Mobile Positioning */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
              <a
                href="https://crownleaf.co/bulk-enquiry/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#FFAE00]/30"
              >
                <span>Submit Bulk Enquiry</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FFAE00]" />
              </a>
              <a
                href="#gifting-solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-montserrat font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all cursor-pointer border border-white/20"
              >
                <span>Explore Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. OUR GIFTING SOLUTIONS (EXACT MATCHED FILTERING FROM LIVE SITE) ── */}
      <section id="gifting-solutions" className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0E2015] tracking-tight">
              Our Gifting Solutions
            </h2>
          </div>

          {/* Responsive Filter Bar: Exact 6 tabs matching live site, no numbers, no 'All Products' */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto px-4 sm:px-0 pb-3 mb-8 no-scrollbar scroll-smooth">
            {TABS.map((tabLabel, idx) => {
              const isActive = tabIndex === idx;

              return (
                <button
                  key={tabLabel}
                  id={`filter-tab-${idx}`}
                  type="button"
                  onClick={() => setTabIndex(idx)}
                  className={`shrink-0 px-5 py-2.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? 'bg-[#0E2015] text-[#FFAE00] shadow-md border-2 border-[#FFAE00]'
                      : 'bg-white text-[#5C6860] hover:text-[#0E2015] border border-neutral-300 hover:border-[#1D4224]/50'
                  }`}
                >
                  {tabLabel}
                </button>
              );
            })}
          </div>

          {/* Matched Tab Content */}
          <div key={tabIndex} className="animate-in fade-in duration-200">
            {/* Tab 0: Employee Gifting */}
            {tabIndex === 0 && (
              <ProductGrid
                products={employeeGiftingProducts}
                link="https://crownleaf.co/"
              />
            )}

            {/* Tab 1: Client Gifting */}
            {tabIndex === 1 && (
              <ProductGrid
                products={clientGiftingProducts}
                link="https://crownleaf.co/product-category/client-gifts/"
              />
            )}

            {/* Tab 2: Welcome Kit */}
            {tabIndex === 2 && (
              <ProductGrid
                products={welcomeKitProducts}
                link="https://crownleaf.co/product-category/welcome-kit/"
              />
            )}

            {/* Tab 3: Custom Packaging */}
            {tabIndex === 3 && (
              <ProductGrid
                products={customProducts}
                link="https://crownleaf.co/"
              />
            )}

            {/* Tab 4: Promotional Products */}
            {tabIndex === 4 && (
              <ProductGrid
                products={promotionalProducts}
                link="https://crownleaf.co/"
              />
            )}

          </div>

        </div>
      </section>

      {/* ── 03. "TAILORED SPECIFICALLY FOR YOUR BRAND" CONTACT SECTION (KEPT AS IS) ── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#0E2015] text-white p-8 sm:p-12 overflow-hidden border border-white/10 shadow-xl">
            {/* Ambient subtle aura */}
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#1D4224]/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
              <p className="font-serif italic text-xl sm:text-2xl text-[#FFAE00]">
                Tailored Specifically for Your Brand
              </p>
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
                Connect With Our Gifting Team
              </h2>
              <p className="font-inter text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
                Have questions about our corporate gifting solutions, orders, or need assistance? Get in touch with our team today.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1D4224] hover:bg-[#25552f] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-[#FFAE00]/40"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFAE00]" />
                </Link>
                <a
                  href="tel:+917304056607"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-montserrat font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all cursor-pointer border border-white/20"
                >
                  <span>+91 730-405-6607</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
