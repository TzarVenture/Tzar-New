import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { COMPANY } from '../../data/company';

export const TechFooter: React.FC = () => {
  return (
    <div className="w-full relative z-20 -mt-px">
      {/* ── Smooth Organic Wave Shape into Footer (#0E2015) ── */}
      <div className="w-full overflow-hidden leading-none relative z-10 -mb-px pointer-events-none">
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

      <footer className="bg-[#0E2015] text-[#EFE8E0] font-inter relative overflow-hidden">
        {/* Subtle ambient luxury glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1D4224]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FFAE00]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            
            {/* Brand Info (2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block group">
                <img
                  src="/optimized/assets/images/tzar-logo-main.webp"
                  alt="TZAR DIGITAL"
                  loading="lazy"
                  decoding="async"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                India&apos;s premier digital agency system. Specializing in high-performance web applications, organic search engine domination, and custom customer acquisition systems.
              </p>

              <div className="space-y-3 text-xs font-mono text-white/80">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 hover:text-[#FFAE00] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFAE00] shrink-0" />
                  <span>{COMPANY.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 hover:text-[#FFAE00] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FFAE00] shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </div>
            </div>

            {/* Menu Navigation Links: 2 columns on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
                  Agency Navigation
                </h4>
                <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                  <li><Link href="/about-us" className="hover:text-[#FFAE00] transition-colors">About Tzar Digital</Link></li>
                  <li><Link href="/services" className="hover:text-[#FFAE00] transition-colors">All Capabilities</Link></li>
                  <li><Link href="/our-team" className="hover:text-[#FFAE00] transition-colors">Leadership Team</Link></li>
                  <li><Link href="/our-client" className="hover:text-[#FFAE00] transition-colors">Clients &amp; Proof</Link></li>
                  <li><Link href="/faqs" className="hover:text-[#FFAE00] transition-colors">Client FAQs</Link></li>
                  <li><Link href="/career" className="hover:text-[#FFAE00] transition-colors">Careers at Tzar</Link></li>
                </ul>
              </div>

              {/* Core Services */}
              <div>
                <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
                  Core Solutions
                </h4>
                <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                  <li><Link href="/website-development-services" className="hover:text-[#FFAE00] transition-colors">Web &amp; App Engineering</Link></li>
                  <li><Link href="/search-engine-optimization-services" className="hover:text-[#FFAE00] transition-colors">SEO Domination</Link></li>
                  <li><Link href="/graphic-designing" className="hover:text-[#FFAE00] transition-colors">Graphic &amp; Brand Design</Link></li>
                  <li><Link href="/social-media-marketing-services" className="hover:text-[#FFAE00] transition-colors">Social Media Marketing</Link></li>
                  <li><Link href="/product-design-packaging-services" className="hover:text-[#FFAE00] transition-colors">3D Packaging Studio</Link></li>
                </ul>
              </div>

              {/* Specialized Solutions & Legal */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
                  Solutions &amp; Legal
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 text-xs text-white/70 font-medium">
                  <li><Link href="/tzar-studio" className="hover:text-[#FFAE00] transition-colors">Tzar Studio</Link></li>
                  <li><Link href="/outdoor-ads" className="hover:text-[#FFAE00] transition-colors">Pan-India Outdoor Ads</Link></li>
                  <li><Link href="/corporate-gifting" className="hover:text-[#FFAE00] transition-colors">Corporate Gifting</Link></li>
                  <li><Link href="/blog" className="hover:text-[#FFAE00] transition-colors">Growth &amp; Tech Blog</Link></li>
                  <li><Link href="/terms-conditions" className="hover:text-[#FFAE00] transition-colors">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#FFAE00] transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Bar */}
          <div className="pt-10 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
            <div className="flex items-center gap-6">
              <Link href="/terms-conditions" className="hover:text-[#FFAE00] transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy" className="hover:text-[#FFAE00] transition-colors">Privacy Policy</Link>
            </div>
            <p>© {new Date().getFullYear()} Tzar Digital Agency. All rights reserved.</p>
          </div>
        </div>

        {/* Giant Faded "TZAR" Brand Display (Inspired by Reference) */}
        <div className="w-full overflow-hidden select-none pointer-events-none flex justify-center items-end -mt-4 sm:-mt-8 -mb-2 sm:-mb-6">
          <span className="font-montserrat font-black uppercase tracking-tighter leading-[0.75] text-center text-[28vw] bg-linear-to-b from-white/[0.14] via-white/4 to-transparent bg-clip-text text-transparent block">
            TZAR
          </span>
        </div>
      </footer>
    </div>
  );
};
