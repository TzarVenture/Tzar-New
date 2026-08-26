import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { COMPANY } from '../../data/company';

export const TechFooter: React.FC = () => {
  return (
    <footer className="bg-[#090909] text-white border-t border-[#262626] font-inter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#D4AF37] text-sm font-black text-[#111]">T</span>
              <span className="text-lg font-black tracking-tighter text-white">TZAR <span className="text-white/40 font-medium">VENTURE</span></span>
            </Link>

            <p className="text-sm text-[#999999] leading-relaxed max-w-sm">
              India's premier digital agency system. Specializing in high-performance web applications, organic search engine domination, and custom customer acquisition systems.
            </p>

            <div className="space-y-2 text-xs font-mono text-[#999999]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{COMPANY.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0099FF]" />
                <span>{COMPANY.email}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
              Agency Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#999999] font-medium">
              <li><Link href="/about-us" className="hover:text-white transition">About Tzar Venture</Link></li>
              <li><Link href="/services" className="hover:text-white transition">All Capabilities</Link></li>
              <li><Link href="/our-team" className="hover:text-white transition">Leadership Team</Link></li>
              <li><Link href="/our-client" className="hover:text-white transition">Clients & Proof</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition">Client FAQs</Link></li>
              <li><Link href="/career" className="hover:text-white transition">Careers at Tzar</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#999999] font-medium">
              <li><Link href="/website-development-services" className="hover:text-white transition">Web & App Engineering</Link></li>
              <li><Link href="/search-engine-optimization-services" className="hover:text-white transition">SEO Domination</Link></li>
              <li><Link href="/graphic-designing" className="hover:text-white transition">Graphic & Brand Design</Link></li>
              <li><Link href="/social-media-marketing-services" className="hover:text-white transition">Social Media Marketing</Link></li>
              <li><Link href="/pay-per-click-services" className="hover:text-white transition">Pay Per Click Ads</Link></li>
              <li><Link href="/product-design-packaging-services" className="hover:text-white transition">3D Packaging Studio</Link></li>
            </ul>
          </div>

          {/* Specialized Ventures */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
              Ventures & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#999999] font-medium">
              <li><Link href="/tzar-studio" className="hover:text-white transition">Tzar Studio</Link></li>
              <li><Link href="/outdoor-ads" className="hover:text-white transition">Pan-India Outdoor Ads</Link></li>
              <li><Link href="/corporate-gifting" className="hover:text-white transition">Corporate Gifting</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Growth & Tech Blog</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-12 mt-12 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#999999] gap-4">
          <p>© {new Date().getFullYear()} Tzar Venture. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[#999999]">
            <span>Powered by</span>
            <span className="text-[#0099FF] font-bold">TZAR ENGINE v3.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
