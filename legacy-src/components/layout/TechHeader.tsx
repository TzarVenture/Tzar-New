"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY } from '../../data/company';

const NAV_ITEMS = [
  {
    name: 'Agency',
    href: '/about-us',
    children: [
      { name: 'About Tzar', href: '/about-us' },
      { name: 'Our Team', href: '/our-team' },
      { name: 'Clients & Proof', href: '/our-client' },
      { name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Website Development', href: '/website-development-services' },
      { name: 'SEO Domination', href: '/search-engine-optimization-services' },
      { name: 'Graphic Designing', href: '/graphic-designing' },
      { name: 'Social Media Marketing', href: '/social-media-marketing-services' },
      { name: 'Logo & Brand Identity', href: '/logo-design-services' },
      { name: 'Pay Per Click (PPC)', href: '/pay-per-click-services' },
      { name: 'Product Packaging', href: '/product-design-packaging-services' },
    ],
  },
  { name: 'Tzar Studio', href: '/tzar-studio' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Outdoor Ads', href: '/outdoor-ads' },
  { name: 'Corporate Gifting', href: '/corporate-gifting' },
  { name: 'Blog', href: '/blog' },
];

export const TechHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter">
      {/* Framer Top Banner Ticker */}
      <div className="bg-[#090909] border-b border-[#262626] py-1.5 px-4 text-xs font-mono text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="flex h-2 w-2 relative">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0099FF]"></span>
          </span>
          <span className="text-[#0099FF] font-semibold tracking-wide uppercase">TZAR VENTURE</span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-300 hidden sm:inline">Production-Grade Digital Systems for Enterprise Founders</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-400 text-xs">
          <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-white transition">
            <Phone className="w-3 h-3 text-[#D4AF37]" />
            <span className="hidden md:inline">{COMPANY.phone}</span>
          </a>
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-white transition">
            <Mail className="w-3 h-3 text-[#0099FF]" />
            <span className="hidden lg:inline">{COMPANY.email}</span>
          </a>
        </div>
      </div>

      {/* Main Framer Navbar (56px sticky bar on #090909 canvas) */}
      <nav className={`transition-all duration-200 ${scrolled ? 'bg-[#090909]/95 backdrop-blur-md border-b border-[#262626] py-3' : 'bg-[#090909]/80 backdrop-blur-sm border-b border-[#262626] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/assets/images/tzar-logo-main.png"
              alt="TZAR VENTURE"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-[#141414] rounded-full transition-all flex items-center gap-1"
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50">
                    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-2 shadow-2xl">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-[#1C1C1C] rounded-lg transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Framer Pills */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="framer-btn-primary flex items-center gap-2"
            >
              <span>Get Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-neutral-400 hover:text-white hover:bg-[#141414] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090909] border-b border-[#262626] px-4 pt-4 pb-6 space-y-3 font-inter shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="space-y-1">
              <Link
                href={item.href}
                className="block px-3 py-2 text-base font-semibold text-white hover:text-[#0099FF]"
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-3 py-1.5 text-xs text-neutral-400 hover:text-white"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-[#262626]">
            <Link
              href="/contact"
              className="w-full framer-btn-primary py-3 flex items-center justify-center gap-2"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
