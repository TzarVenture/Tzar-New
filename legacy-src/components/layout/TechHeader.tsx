"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { StaggeredMenu } from '../ui/StaggeredMenu';

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
      { name: 'Content Marketing', href: '/content-marketing-services' },
      { name: 'Product Packaging', href: '/product-design-packaging-services' },
    ],
  },
  { name: 'Tzar Studio', href: '/tzar-studio' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Outdoor Ads', href: '/outdoor-ads' },
  { name: 'Corporate Gifting', href: '/corporate-gifting' },
  { name: 'Blog', href: '/blog' },
];

const STAGGERED_ITEMS = [
  ...NAV_ITEMS.map((item) => ({
    label: item.name,
    link: item.href,
    children: item.children,
  })),
  { label: 'Get Proposal', link: '/#contact-form' },
  { label: 'Contact', link: '/contact' },
];

const STAGGERED_SOCIALS = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'WhatsApp', link: 'https://wa.me' }
];

export const TechHeader: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSolid, setIsSolid] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  // Safe home detection for SSR, hydration, and hash anchors
  const isHome = !pathname || pathname === '/' || pathname === '' || pathname.startsWith('/#');

  useEffect(() => {
    let lastScroll = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const checkHeaderState = () => {
      const currentScroll = typeof window !== 'undefined' ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
      const isClientHome = typeof window !== 'undefined' 
        ? (window.location.pathname === '/' || window.location.pathname === '' || isHome)
        : isHome;

      // Solid header threshold: Only solid after scrolling > 40px down, or on non-home pages
      const shouldBeSolid = currentScroll > 40 || !isClientHome;
      setIsSolid(shouldBeSolid);

      // On mobile screens (< 768px), keep the header reliably visible so sticky cards remain anchored without jumping
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (isMobile) {
        setIsVisible(true);
      } else {
        // Desktop visibility direction check with stable 15px threshold to eliminate micro-scroll jitter
        if (currentScroll > 240) {
          if (currentScroll > lastScroll + 15) {
            setIsVisible(false);
          } else if (currentScroll < lastScroll - 15) {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      }

      lastScroll = currentScroll;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(checkHeaderState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Immediate evaluation on client mount
    checkHeaderState();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isHome]);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const handleProposalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      const target = document.getElementById('contact-form') || document.getElementById('lead-form');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header 
      className="fixed left-0 right-0 top-0 z-50 font-inter transition-transform duration-300 ease-in-out"
      style={{
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)'
      }}
    >
      {/* Main Framer Navbar */}
      <nav className={`transition-all duration-300 py-3.5 ${
        isSolid
          ? 'bg-[#0E2015]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="w-full max-w-[clamp(1200px,94vw,1700px)] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-[clamp(1rem,2vw,2.5rem)]">
          
          {/* Logo & Node Indicator */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <img 
              src="/assets/images/tzar-logo-main.png" 
              alt="Tzar Venture Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-[clamp(0.25rem,0.55vw,1rem)]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (Boolean(item.children) && item.children!.some(sub => pathname === sub.href));
              return (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.children && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-[clamp(0.65rem,0.8vw,1.1rem)] py-2 text-[clamp(13.5px,0.88vw,15.5px)] font-semibold tracking-[-0.01em] flex items-center gap-1.5 rounded-full transition-all duration-200 whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] ${
                      isActive
                        ? 'text-[#FFAE00] bg-white/8'
                        : 'text-white/90 hover:text-[#FFAE00] hover:bg-white/8'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDown className={`w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180 text-[#FFAE00]' : 'text-white/70'
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 min-w-60 pt-2 z-50">
                      <div className="bg-[#0E2015]/95 text-white border border-white/15 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                        {item.children.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-3.5 py-2.5 text-[14px] font-medium rounded-xl transition whitespace-nowrap ${
                                isSubActive
                                  ? 'text-[#FFAE00] bg-white/8'
                                  : 'text-white/85 hover:text-[#FFAE00] hover:bg-white/8'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Framer Pills */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href={isHome ? "#contact-form" : "/#contact-form"}
              onClick={handleProposalClick}
              className="framer-btn-primary border border-white/20 px-[clamp(1rem,1.25vw,1.45rem)] py-[clamp(0.55rem,0.65vw,0.75rem)] text-[clamp(13.5px,0.85vw,15px)] font-bold flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Get Proposal</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 stroke-[2.2]" />
            </Link>
          </div>

          {/* Mobile Staggered Menu */}
          <div className="lg:hidden flex items-center shrink-0">
            <StaggeredMenu
              items={STAGGERED_ITEMS}
              socialItems={STAGGERED_SOCIALS}
              displaySocials={true}
              displayItemNumbering={false}
              colors={['#FFAE00', '#1D4224', '#0E2015']}
              accentColor="#FFAE00"
              menuButtonColor="#FFFFFF"
              openMenuButtonColor="#FFFFFF"
              logoUrl="/assets/images/tzar-logo-main.png"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
