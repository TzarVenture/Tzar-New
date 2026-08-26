import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../../data/company';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = COMPANY.whatsapp || '917304056607';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi%20Tzar%20Venture,%20I'd%20like%20to%20inquire%20about%20your%20digital%20and%20web/app%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 bg-[#141414] hover:bg-[#1C1C1C] text-white px-4 py-3 rounded-full border border-[#262626] hover:border-[#0099FF] transition-all duration-200 group shadow-2xl font-inter"
      aria-label="Chat on WhatsApp"
    >
      {/* Online Status Dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0099FF] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0099FF]"></span>
      </span>

      {/* WhatsApp Icon Box */}
      <div className="w-7 h-7 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center group-hover:bg-[#25D366] transition duration-200">
        <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-black transition" />
      </div>

      {/* Text Label */}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-mono text-[#999999] uppercase tracking-widest leading-none">Instant Inquiry</span>
        <span className="text-xs font-bold text-white group-hover:text-[#0099FF] transition mt-0.5 flex items-center gap-1">
          <span>Chat on WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#0099FF] transition" />
        </span>
      </div>
    </a>
  );
};
