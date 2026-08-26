import React from 'react';

const METRICS = [
  { val: '100+', label: 'Enterprise Brands Scaled' },
  { val: '99.9%', label: 'Platform Performance Uptime' },
  { val: '5.2x', label: 'Average Client ROI Growth' },
  { val: '#1', label: 'Organic SEO Ranking Leaders' },
  { val: '500k+', label: 'Qualified Leads Generated' },
];

const STACK_TAGS = [
  'React 18 & Next.js Systems',
  'WebGL 3D Renders',
  'Automated Lead Routers',
  'Semantic SEO Infrastructure',
  'High ROAS Performance Ads',
  'Luxury Product Packaging',
  'Pan-India Outdoor Media',
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="bg-[#090909] border-y border-[#262626] py-6 overflow-hidden select-none">
      
      {/* Live Metrics Grid Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 pb-6 border-b border-[#262626] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {METRICS.slice(0, 4).map((m, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#141414] border border-[#262626]">
            <span className="font-montserrat font-black text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-1">
              <span className="text-[#D4AF37]">{m.val}</span>
            </span>
            <span className="font-mono text-xs text-[#999999] mt-1">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Infinite Kinetic Ticker Strip */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...STACK_TAGS, ...STACK_TAGS].map((tag, i) => (
            <div key={i} className="inline-flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                {tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF]" />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8">
          {[...STACK_TAGS, ...STACK_TAGS].map((tag, i) => (
            <div key={`dup-${i}`} className="inline-flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                {tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
