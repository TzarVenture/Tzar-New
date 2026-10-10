"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { StaggeredMenu } from '../ui/StaggeredMenu';
import { TopAnnouncementMarquee } from './TopAnnouncementMarquee';

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
  { label: 'Hire Us', link: '/hire-us' },
  { label: 'Payment', link: '/payment' },
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
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 font-inter transition-transform duration-300 ease-in-out w-full max-w-full"
      style={{
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)'
      }}
    >
      {/* Top Announcement Marquee */}
      <TopAnnouncementMarquee isSolid={isSolid} />

      {/* Main Framer Navbar */}
      <nav className={`transition-all duration-300 py-2.5 sm:py-3 ${isSolid
          ? 'bg-[#0E2015]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent border-b border-transparent'
        }`}>
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-2.5 xl:gap-4 2xl:gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <img
              src="/optimized/assets/images/tzar-logo-main.webp"
              alt="Tzar Venture Logo"
              width={1506}
              height={248}
              decoding="async"
              className="h-9 sm:h-10 xl:h-10 w-auto max-w-[205px] sm:max-w-[230px] xl:max-w-[230px] object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (Boolean(item.children) && item.children!.some(sub => pathname === sub.href));
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  <Link
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold tracking-[-0.01em] flex items-center gap-1 rounded-full transition-all duration-200 whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] ${isActive
                        ? 'text-[#FFAE00] bg-white/8'
                        : 'text-white/90 hover:text-[#FFAE00] hover:bg-white/8'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDown className={`w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-[#FFAE00]' : 'text-white/70'
                        }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu with Hover Bridge */}
                  {item.children && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 min-w-60 pt-2 z-50 before:content-[''] before:absolute before:-top-3 before:-left-6 before:-right-6 before:h-5 before:pointer-events-auto"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-[#0E2015]/95 text-white border border-white/15 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                        {item.children.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-3.5 py-2.5 text-[14px] font-medium rounded-xl transition whitespace-nowrap ${isSubActive
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

          {/* Right Action Group (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 2xl:gap-3.5 shrink-0">
            {/* Hire Us Pill */}
            <Link
              href="/hire-us"
              className={`px-3 xl:px-3.5 py-1.5 text-[12.5px] xl:text-[13px] font-bold font-montserrat rounded-full border transition-all duration-200 whitespace-nowrap ${
                pathname === '/hire-us'
                  ? 'bg-[#FFAE00] text-[#0E2015] border-[#FFAE00]'
                  : 'border-[#FFAE00]/40 text-white hover:bg-[#FFAE00] hover:text-[#0E2015] hover:border-[#FFAE00]'
              }`}
            >
              Hire Us
            </Link>

            {/* Payment Pill */}
            <Link
              href="/payment"
              className={`px-3.5 xl:px-4 py-1.5 text-[12.5px] xl:text-[13px] font-black font-montserrat rounded-full transition-all duration-200 shadow-sm whitespace-nowrap ${
                pathname === '/payment' || pathname === '/payment-gateway'
                  ? 'bg-white text-[#1D4224]'
                  : 'bg-[#FFAE00] text-[#0E2015] hover:bg-white hover:text-[#1D4224]'
              }`}
            >
              Payment
            </Link>

            {/* Contact Phone Block */}
            <div className="flex items-center gap-2 pl-2 xl:pl-3 border-l border-white/15 shrink-0">
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                className="w-8 h-8 rounded-full bg-[#FFAE00]/10 border border-[#FFAE00]/30 flex items-center justify-center shrink-0 text-[#FFAE00] hover:bg-[#FFAE00] hover:text-[#0E2015] transition-all"
                title={`Call ${COMPANY.phone}`}
                aria-label="Call Primary Line"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <div className="flex flex-col leading-tight font-sans shrink-0">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-[12px] font-bold text-white hover:text-[#FFAE00] tracking-tight transition-colors whitespace-nowrap"
                  title="Call Primary Line"
                >
                  {COMPANY.phone}
                </a>
                <a
                  href={`tel:${COMPANY.phone2.replace(/[^0-9+]/g, '')}`}
                  className="text-[12px] font-bold text-white hover:text-[#FFAE00] tracking-tight transition-colors whitespace-nowrap"
                  title="Call Alternate Line"
                >
                  {COMPANY.phone2}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Right Action Area (< 1024px) */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            {/* Quick Payment Button on sm-md */}
            <Link
              href="/payment"
              className="hidden sm:inline-flex px-3 py-1 text-xs font-black font-montserrat rounded-full bg-[#FFAE00] text-[#0E2015] hover:bg-white hover:text-[#1D4224] transition-all whitespace-nowrap"
            >
              Payment
            </Link>

            {/* Staggered Drawer Menu */}
            <StaggeredMenu
              items={STAGGERED_ITEMS}
              socialItems={STAGGERED_SOCIALS}
              contactInfo={{ phone1: COMPANY.phone, phone2: COMPANY.phone2 }}
              displaySocials={true}
              displayItemNumbering={false}
              colors={['#FFAE00', '#1D4224', '#0E2015']}
              accentColor="#FFAE00"
              menuButtonColor="#FFFFFF"
              openMenuButtonColor="#FFFFFF"
              logoUrl="/optimized/assets/images/tzar-logo-main.webp"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
