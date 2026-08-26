import React from 'react';
import Link from 'next/link';
import { 
  Globe, Search, Palette, Share2, Award, FileText, 
  Target, UserCheck, Package, Utensils, Tv, ArrowRight 
} from 'lucide-react';
import { ServiceItem } from '../../content/services';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, Search, Palette, Share2, Award, FileText,
  Target, UserCheck, Package, Utensils, Tv
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = ICON_MAP[service.iconName] || Globe;

  return (
    <div className="light-card light-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden bg-white">
      <div>
        {/* Header Badge & Icon */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#1D4224]/10 border border-[#1D4224]/20 flex items-center justify-center text-[#1D4224] group-hover:bg-[#1D4224] group-hover:text-[#D4AF37] transition-all">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-[#1D4224]/30 group-hover:text-[#1D4224] transition-colors">
            {service.badgeText}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-2 group-hover:text-[#1D4224] transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed font-medium">
          {service.description}
        </p>

        {/* Features List Bullet Points */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.features.slice(0, 3).map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA */}
      <Link
        href={service.href}
        className="inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-[#1D4224] group-hover:text-[#0B2912] border-t border-slate-100 transition-colors"
      >
        <span>{service.ctaText}</span>
        <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
