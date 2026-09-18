"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu as MenuIcon, X, ArrowUpRight, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data/company';

// ── NAV DATA STRUCTURE ──
const LEFT_NAV_ITEMS = [
  {
    id: 1,
    name: 'Our Agency',
    href: '/about-us',
    subNavItems: [
      { id: 1, name: 'About Us', href: '/about-us' },
      { id: 2, name: 'Our Services', href: '/services' },
      { id: 3, name: 'Our Team', href: '/our-team' },
      { id: 4, name: 'Our Clients', href: '/our-client' },
      { id: 5, name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    id: 2,
    name: 'Services',
    href: '/services',
    subNavItems: [
      { id: 1, name: 'All Services', href: '/services' },
      { id: 2, name: 'Website Development', href: '/website-development-services' },
      { id: 3, name: 'Search Engine Optimization', href: '/search-engine-optimization-services' },
      { id: 4, name: 'Graphic Designing', href: '/graphic-designing' },
      { id: 5, name: 'Social Media Marketing', href: '/social-media-marketing-services' },
      { id: 6, name: 'Logo Design', href: '/logo-design-services' },
      { id: 7, name: 'Content Marketing', href: '/content-marketing-services' },
      { id: 8, name: 'Product Design & Packaging', href: '/product-design-packaging-services' },
    ],
  },
  { id: 3, name: 'Tzar Studio', href: '/tzar-studio', subNavItems: [] },
  { id: 4, name: 'Portfolio', href: '/portfolio', subNavItems: [] },
  { id: 5, name: 'Outdoor Ads', href: '/outdoor-ads', subNavItems: [] },
  { id: 6, name: 'Corporate Gifting', href: '/corporate-gifting', subNavItems: [] },
  { id: 7, name: 'Blog', href: '/blog', subNavItems: [] },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = (id: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const toggleMobileAccordion = (id: number) => {
    setExpandedMobileMenu(prev => (prev === id ? null : id));
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none">
      {/* ── ACETERNITY FLOATING NAVBAR (PURE WHITE OUTER, GREEN INNER, YELLOW ACTIVE LINK) ── */}
      <div className="w-[96%] max-w-10xl mx-auto mt-3 sm:mt-5 pointer-events-auto">
        <div
          className={`relative rounded-2xl sm:rounded-full transition-all duration-300 bg-white border border-gray-200/80 ${isScrolled
            ? 'py-2.5 px-4 sm:px-6 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-gray-300'
            : 'py-3 px-4 sm:px-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
            }`}
          style={{
            boxShadow: '0 12px 35px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,1)',
          }}
        >
          <div className="flex items-center justify-between gap-4">

            {/* 1. LEFT: TZAR LOGO */}
            <Link href="/" className="flex items-center gap-2 shrink-0 py-0">
              <img
                src="/assets/images/tzar-logo-main.png"
                alt="TZAR VENTURE"
                className="h-10 sm:h-8 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* 2. CENTER: INNER GREEN FLOATING PILL NAV WITH MUSTARD YELLOW ACTIVE LINK */}
            <nav className="hidden lg:flex gap-4 items-center bg-[#121614] border border-[#232924] rounded-full p-1.5 relative shadow-inner">
              {LEFT_NAV_ITEMS.map((item, idx) => {
                const isActive =
                  pathname === item.href ||
                  (item.subNavItems?.some(s => s.href === pathname) ?? false);
                const hasDropdown = (item.subNavItems?.length ?? 0) > 0;
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredIdx(idx);
                      if (hasDropdown) openMenu(item.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredIdx(null);
                      if (hasDropdown) closeMenu();
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative z-10 flex items-center gap-1 px-4 py-1.5 rounded-full font-rubik text-xs font-bold uppercase tracking-wider transition-all duration-200 ${isActive
                        ? 'bg-[#D4AF37] text-[#121614] shadow-md'
                        : isHovered
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                          : 'text-white/90 hover:text-white'
                        }`}
                    >
                      <span>{item.name}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.id
                            ? 'rotate-180 text-white'
                            : isActive
                              ? 'text-[#121614]'
                              : 'text-white/70'
                            }`}
                        />
                      )}
                    </Link>

                    {/* Submenu Dropdown Card */}
                    {hasDropdown && activeMenu === item.id && (
                      <div
                        className="absolute top-full left-0 pt-3 w-60 z-50 animate-in fade-in zoom-in-95 duration-200"
                        onMouseEnter={() => openMenu(item.id)}
                        onMouseLeave={closeMenu}
                      >
                        <div
                          className="bg-[#121614] backdrop-blur-2xl border border-[#232924] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                          {item.subNavItems.map(sub => (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              className="flex items-center justify-between px-3.5 py-2 rounded-xl font-rubik text-xs font-semibold text-white/90 hover:bg-[#D4AF37] hover:text-[#121614] transition-all duration-150 group/sub"
                            >
                              <span>{sub.name}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/sub:text-[#121614] transition-transform" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* 3. RIGHT: SOLID DARK OBSIDIAN / GOLD CTA BUTTON (DESKTOP) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#121614] font-rubik font-bold text-xs uppercase tracking-wider shadow-md hover:bg-white hover:text-[#121614] transition-all duration-300 active:scale-95"
              >
                Request Quote
              </Link>
            </div>

            {/* 4. MOBILE / TABLET NAVBAR: LOGO + HAMBURGER MENU ICON ONLY */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-full bg-[#0e3b22]/10 text-[#0e3b22] hover:bg-[#0e3b22]/20 transition active:scale-95 border border-[#0e3b22]/15"
                aria-label="Open Navigation Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE APP DRAWER MENU ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden pointer-events-auto flex flex-col justify-end"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full max-h-[85vh] bg-[#FAF9F5] rounded-t-[32px] p-6 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] border-t border-[#0e3b22]/15 overflow-y-auto animate-in slide-in-from-bottom duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Sheet Handle */}
            <div className="w-12 h-1.5 bg-[#0e3b22]/20 rounded-full mx-auto mb-6" />

            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#0e3b22]/10 mb-5">
              <img
                src="/assets/images/tzar-logo-main.png"
                alt="TZAR VENTURE"
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full bg-[#0e3b22]/10 text-[#0e3b22]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Menu List */}
            <nav className="flex flex-col gap-2">
              {LEFT_NAV_ITEMS.map(item => {
                const hasSub = (item.subNavItems?.length ?? 0) > 0;
                const isExpanded = expandedMobileMenu === item.id;
                const isActive = pathname === item.href;

                return (
                  <div key={item.id} className="rounded-2xl border border-[#0e3b22]/10 bg-white overflow-hidden shadow-xs">
                    <div className="flex items-center justify-between p-3.5">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-rubik font-bold text-sm flex-1 ${isActive ? 'text-[#D4AF37]' : 'text-[#0e3b22]'
                          }`}
                      >
                        {item.name}
                      </Link>
                      {hasSub && (
                        <button
                          onClick={() => toggleMobileAccordion(item.id)}
                          className="p-1 text-[#3ba9a0]"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                        </button>
                      )}
                    </div>

                    {hasSub && isExpanded && (
                      <div className="bg-[#FAF9F5] px-4 py-2 border-t border-[#0e3b22]/10 flex flex-col gap-2">
                        {item.subNavItems.map(sub => (
                          <Link
                            key={sub.id}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 px-2 font-inter text-xs font-semibold text-[#0e3b22]/90 hover:text-[#0e3b22] flex items-center justify-between"
                          >
                            <span>{sub.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#3ba9a0]" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-5 border-t border-[#0e3b22]/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#0e3b22] text-white font-rubik font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 rounded-full border border-[#0e3b22]/20 bg-white font-rubik font-bold text-xs text-[#0e3b22] flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#3ba9a0]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=7304056607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-full bg-[#25D366] font-rubik font-bold text-xs text-white flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
