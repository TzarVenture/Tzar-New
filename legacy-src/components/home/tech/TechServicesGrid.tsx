import React from 'react';
import { Globe, Search, Palette, Share2, Target, Package, Layers, Megaphone, ArrowUpRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ALL_SERVICES = [
  {
    title: 'Website & App Development',
    category: 'Full-Stack Web Engineering',
    desc: 'Custom high-speed corporate websites, web portals, and mobile apps built for maximum visitor conversion.',
    icon: Globe,
    link: '/website-development-services',
    features: ['Sub-second Load Times', 'Custom E-Commerce & Apps', '100% Mobile Responsive'],
  },
  {
    title: 'Search Engine Optimization',
    category: 'Organic Growth Engine',
    desc: 'Dominating search engine results on Google with technical SEO audits, semantic schema, and high-authority links.',
    icon: Search,
    link: '/search-engine-optimization-services',
    features: ['Technical SEO Audits', 'Google Page #1 Ranks', 'High-Intent Buyer Traffic'],
  },
  {
    title: 'Graphic & Brand Design',
    category: 'Visual Brand Identity',
    desc: 'High-impact visual brand designs, marketing graphics, social media collaterals, and digital brand manuals.',
    icon: Palette,
    link: '/graphic-designing',
    features: ['Brand Identity Systems', 'Marketing Collaterals', 'Corporate UI/UX'],
  },
  {
    title: 'Social Media Marketing',
    category: 'Audience & Brand Growth',
    desc: 'End-to-end social media management, Instagram reel production, authority content, and community growth.',
    icon: Share2,
    link: '/social-media-marketing-services',
    features: ['Reel Content Production', 'Audience Growth', 'Performance Copywriting'],
  },
  {
    title: 'Logo & Brand Identity',
    category: 'Corporate Identity Studio',
    desc: 'Iconic vector logo design, typography systems, color guidelines, and full brand manual books.',
    icon: Layers,
    link: '/logo-design-services',
    features: ['Vector Logo Design', 'Brand Guideline Books', '3D Emblem Renders'],
  },
  {
    title: 'Pay Per Click (PPC)',
    category: 'Paid Customer Acquisition',
    desc: 'High-conversion Google Search Ads, Meta Ads, YouTube video campaigns, and high-ROAS retargeting.',
    icon: Target,
    link: '/pay-per-click-services',
    features: ['Google & Meta Ads', 'High ROAS Campaigns', 'Conversion Funnel Setup'],
  },
  {
    title: 'Product Packaging Design',
    category: 'Physical Product Renders',
    desc: 'Luxury packaging design, 3D bottle/box renders, label compliance, and manufacturing prepress artwork.',
    icon: Package,
    link: '/product-design-packaging-services',
    features: ['3D Box & Bottle Renders', 'Prepress Print Files', 'Custom Dieline Layouts'],
  },
  {
    title: 'Pan-India Outdoor Ads',
    category: 'High-Visibility Media',
    desc: 'Strategic billboard placements, airport branding, metro wrap media, and digital outdoor screen networks.',
    icon: Megaphone,
    link: '/outdoor-ads',
    features: ['Prime Location Billboard', 'Airport & Metro Wraps', 'Impact Media Campaigns'],
  },
];

export const TechServicesGrid: React.FC = () => {
  return (
    <section className="py-24 framer-canvas-bg text-white relative linear-hairline-b">
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#262626]" />
      <div className="absolute top-0 left-8 -translate-y-1/2 text-neutral-600 font-mono text-xs select-none">+</div>
      <div className="absolute top-0 right-8 -translate-y-1/2 text-neutral-600 font-mono text-xs select-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#D4AF37]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="uppercase font-bold tracking-widest">FULL-STACK SERVICE CATALOG</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white tracking-[-0.04em]">
            Specialized Digital Capabilities for Founders
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#999999]">
            High-performance engineering, search engine domination, and creative media solutions for growing businesses.
          </p>
        </div>

        {/* Grid of 8 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALL_SERVICES.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <Link
                key={idx}
                href={service.link}
                className="framer-card-surface p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center group-hover:border-[#D4AF37] transition">
                      <IconComp className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#999999] group-hover:text-[#D4AF37] transition" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#999999] uppercase tracking-widest block mb-1">
                      {service.category}
                    </span>
                    <h3 className="font-montserrat font-bold text-xl text-white group-hover:text-[#D4AF37] transition">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-inter text-xs text-[#999999] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#262626]">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] font-mono text-[#999999]">
                        <CheckCircle className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#262626] font-mono text-xs text-[#D4AF37] font-bold flex items-center justify-between">
                  <span>VIEW DETAILS</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
