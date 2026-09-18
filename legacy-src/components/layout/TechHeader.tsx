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
  const isHome = pathname === '/';

  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        // Solid header threshold (> 50px)
        const shouldBeSolid = currentScroll > 50 || !isHome;
        setIsSolid((prev) => (prev !== shouldBeSolid ? shouldBeSolid : prev));

        // Visibility direction check
        if (currentScroll > 200) {
          if (currentScroll > lastScroll + 5) {
            setIsVisible(false);
          } else if (currentScroll < lastScroll - 5) {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }

        lastScroll = currentScroll;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setIsSolid(window.scrollY > 50 || !isHome);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

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
      <nav className={`transition-all duration-500 py-3.5 ${
        isSolid
          ? 'bg-[#0E2015] border-b border-white/10 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Node Indicator */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <img 
              src="/assets/images/tzar-logo-main.png" 
              alt="Tzar Venture Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3.5 py-2 text-xs font-semibold !text-white/80 hover:!text-white flex items-center gap-1 rounded-full hover:bg-white/10 transition"
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50">
                    <div className="bg-[#0E2015] text-white border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2 text-xs font-medium !text-white/85 hover:!text-white hover:bg-white/10 rounded-lg transition whitespace-nowrap"
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
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href={isHome ? "#contact-form" : "/#contact-form"}
              onClick={handleProposalClick}
              className="framer-btn-primary border border-white/15 px-4 py-2 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
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
              menuButtonColor={isSolid ? '#FFFFFF' : '#0E2015'}
              openMenuButtonColor="#FFFFFF"
              logoUrl="/assets/images/tzar-logo-main.png"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
