import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';

export const TechFooter: React.FC = () => {
  return (
    <div className="w-full relative z-20">
      {/* ── ORGANIC WAVE TOP EDGE WITH INTEGRATED GOLDEN BORDER LINE ── */}
      <div className="w-full overflow-hidden leading-none relative z-30 -mb-px pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 sm:h-10 lg:h-14 block"
          preserveAspectRatio="none"
        >
          {/* Wave body filled with footer background color #0E2015 */}
          <path
            d="M0,24 C320,52 540,8 800,30 C1060,52 1260,12 1440,22 L1440,60 L0,60 Z"
            fill="#0E2015"
          />
          {/* Golden Yellow Border Line - precisely attached to the wave top edge */}
          <path
            d="M0,24 C320,52 540,8 800,30 C1060,52 1260,12 1440,22"
            stroke="#FFAE00"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <footer className="bg-[#0E2015] text-[#EFE8E0] font-inter relative overflow-hidden pt-4 sm:pt-8 pb-4 sm:pb-6">
        {/* Subtle ambient luxury glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1D4224]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FFAE00]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Brand Info, Contacts, Socials & Make Online Payment */}
            <div className="lg:col-span-2 space-y-5 sm:space-y-6">
              <Link href="/" className="inline-block group">
                <img
                  src="/optimized/assets/images/tzar-logo-main.webp"
                  alt="TZAR DIGITAL"
                  decoding="async"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
                India&apos;s premier digital agency system. Specializing in high-performance web applications, organic search engine domination, and custom customer acquisition systems.
              </p>

              {/* Direct Communication Contacts */}
              <div className="space-y-2.5 text-xs font-mono text-white/80 pt-1">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#FFAE00] shrink-0 mt-0.5" />
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs">
                    <a href="tel:+917304056607" className="hover:text-[#FFAE00] transition-colors whitespace-nowrap">
                      91 730-405-6607
                    </a>
                    <span className="text-white/30">|</span>
                    <a href="tel:+917760775875" className="hover:text-[#FFAE00] transition-colors whitespace-nowrap">
                      91 776-077-5875
                    </a>
                    <span className="text-white/30">|</span>
                    <a href="tel:+919004250252" className="hover:text-[#FFAE00] transition-colors whitespace-nowrap">
                      91 900-425-0252
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:corporate@tzar.co"
                  className="flex items-center gap-2.5 hover:text-[#FFAE00] transition-colors text-[11px] sm:text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FFAE00] shrink-0" />
                  <span>corporate@tzar.co</span>
                </a>
              </div>

              {/* Social Channels & Online Payment Link */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1.5">
                <a
                  href="https://www.linkedin.com/company/tzar-digital-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FFAE00] text-white/80 hover:text-[#061309] border border-white/10 flex items-center justify-center transition-all shadow-xs"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                </a>

                <a
                  href="https://www.instagram.com/tzarmktagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FFAE00] text-white/80 hover:text-[#061309] border border-white/10 flex items-center justify-center transition-all shadow-xs"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/payment"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFAE00] hover:text-white transition-colors ml-1"
                >
                  <span>MAKE ONLINE PAYMENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Columns: Links + Partner Logos directly below */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-7">
              {/* Menu Navigation Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                {/* Agency Navigation */}
                <div>
                  <h4 className="font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-3.5 sm:mb-4">
                    Agency Navigation
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs text-white/70 font-medium">
                    <li><Link href="/about-us" className="hover:text-[#FFAE00] transition-colors">About Tzar Digital</Link></li>
                    <li><Link href="/services" className="hover:text-[#FFAE00] transition-colors">All Capabilities</Link></li>
                    <li><Link href="/our-team" className="hover:text-[#FFAE00] transition-colors">Leadership Team</Link></li>
                    <li><Link href="/our-client" className="hover:text-[#FFAE00] transition-colors">Clients &amp; Proof</Link></li>
                    <li><Link href="/faqs" className="hover:text-[#FFAE00] transition-colors">Client FAQs</Link></li>
                    <li><Link href="/career" className="hover:text-[#FFAE00] transition-colors">Careers at Tzar</Link></li>
                    <li><Link href="/admin/leads" rel="nofollow" className="hover:text-[#FFAE00] transition-colors">Tzar Login</Link></li>
                  </ul>
                </div>

                {/* Core Solutions */}
                <div>
                  <h4 className="font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-3.5 sm:mb-4">
                    Core Solutions
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs text-white/70 font-medium">
                    <li><Link href="/website-development-services" className="hover:text-[#FFAE00] transition-colors">Web &amp; App Engineering</Link></li>
                    <li><Link href="/search-engine-optimization-services" className="hover:text-[#FFAE00] transition-colors">SEO Domination</Link></li>
                    <li><Link href="/graphic-designing" className="hover:text-[#FFAE00] transition-colors">Graphic &amp; Brand Design</Link></li>
                    <li><Link href="/social-media-marketing-services" className="hover:text-[#FFAE00] transition-colors">Social Media Marketing</Link></li>
                    <li><Link href="/product-design-packaging-services" className="hover:text-[#FFAE00] transition-colors">3D Packaging Studio</Link></li>
                  </ul>
                </div>

                {/* Solutions & Legal */}
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-3.5 sm:mb-4">
                    Solutions &amp; Legal
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-3 text-xs text-white/70 font-medium">
                    <li><Link href="/tzar-studio" className="hover:text-[#FFAE00] transition-colors">Tzar Studio</Link></li>
                    <li><Link href="/outdoor-ads" className="hover:text-[#FFAE00] transition-colors">Pan-India Outdoor Ads</Link></li>
                    <li><Link href="/corporate-gifting" className="hover:text-[#FFAE00] transition-colors">Corporate Gifting</Link></li>
                    <li><Link href="/blog" className="hover:text-[#FFAE00] transition-colors">Growth &amp; Tech Blog</Link></li>
                    <li><Link href="/terms-conditions" className="hover:text-[#FFAE00] transition-colors">Terms &amp; Conditions</Link></li>
                    <li><Link href="/privacy-policy" className="hover:text-[#FFAE00] transition-colors">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              {/* Partner Badges directly below right-side links (No Google repetition, no extra dividing lines) */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* 1. Google Partner Badge */}
                <a
                  href="https://maps.app.goo.gl/ryxbajb4yg24TbrG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white/90 px-2.5 sm:px-3 py-1 rounded-lg flex items-center justify-center transition-transform hover:scale-105 h-9 sm:h-10 shrink-0 shadow-sm"
                  title="Google Certified Partner"
                >
                  <img
                    src="/assets/images/footer-logos/google-partner-seeklogo.png"
                    alt="Google Partner"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </a>

                {/* 2. Facebook Marketing Partner Badge */}
                <a
                  href="https://www.facebook.com/TzarAgency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white/90 px-2 py-1 rounded-lg flex items-center justify-center transition-transform hover:scale-105 h-9 sm:h-10 shrink-0 shadow-sm"
                  title="Facebook Marketing Partner"
                >
                  <img
                    src="/assets/images/footer-logos/facebook-marketing-partner-seeklogo.png"
                    alt="Facebook Marketing Partner"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </a>

                {/* 3. Razorpay Partner Badge */}
                <div
                  className="bg-white px-2.5 sm:px-3 py-1 rounded-lg flex items-center justify-center h-9 sm:h-10 shrink-0 shadow-sm"
                  title="Razorpay"
                >
                  <img
                    src="/assets/images/footer-logos/Razorpay_idJPs0Yq7Y_0.svg"
                    alt="Razorpay"
                    className="h-5.5 sm:h-6.5 w-auto object-contain"
                  />
                </div>

                {/* 4. Shiprocket Partner Badge */}
                <div
                  className="bg-white px-2.5 sm:px-3 py-1 rounded-lg flex items-center justify-center h-9 sm:h-10 shrink-0 shadow-sm"
                  title="Shiprocket"
                >
                  <img
                    src="/assets/images/footer-logos/Shiprocket.svg"
                    alt="Shiprocket"
                    className="h-5.5 sm:h-6.5 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Legal Bar with Large Payment Gateway Strip */}
          <div className="pt-6 sm:pt-8 mt-8 sm:mt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs font-mono text-white/50 text-center md:text-left">
            <div className="flex items-center gap-6 sm:gap-8 justify-center">
              <Link href="/terms-conditions" className="hover:text-[#FFAE00] transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy" className="hover:text-[#FFAE00] transition-colors">Privacy Policy</Link>
            </div>

            {/* Payment Gateway Strip (Enlarged and clearly legible, never overlapped) */}
            <Link
              href="/payment-gateway"
              className="block hover:opacity-90 transition-opacity shrink-0"
              title="100% Safe &amp; Secure Online Payment"
            >
              <img
                src="/assets/images/footer-logos/payment-image.webp"
                alt="100% Safe &amp; Secure Payment"
                className="h-8 sm:h-11 md:h-12 w-auto max-w-full object-contain rounded drop-shadow-sm"
                decoding="async"
              />
            </Link>

            <p className="text-center md:text-right">© {new Date().getFullYear()} Tzar Digital Agency. All rights reserved.</p>
          </div>
        </div>

        {/* Giant Faded "TZAR" Brand Display (Original size text-[28vw], positioned cleanly below payment strip) */}
        <div className="w-full overflow-hidden select-none pointer-events-none flex justify-center items-end mt-2 sm:mt-3 pt-2 -mb-2 sm:-mb-6">
          <span className="font-montserrat font-black uppercase tracking-tighter leading-[0.75] text-center text-[28vw] bg-linear-to-b from-white/[0.14] via-white/4 to-transparent bg-clip-text text-transparent block">
            TZAR
          </span>
        </div>
      </footer>
    </div>
  );
};
