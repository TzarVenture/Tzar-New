"use client";

import React from 'react';
import { 
  Car, 
  Coins, 
  MessagesSquare, 
  ShoppingBag, 
  BookOpen, 
  Plug, 
  CalendarDays, 
  Utensils, 
  Cpu, 
  HeartPulse, 
  ConciergeBell, 
  Factory 
} from 'lucide-react';

import './DomainMarquee.css';

interface DomainItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ROW_1_ITEMS: DomainItem[] = [
  { name: 'Automobiles', icon: Car },
  { name: 'Capital', icon: Coins },
  { name: 'Consulting', icon: MessagesSquare },
  { name: 'E-Commerce', icon: ShoppingBag },
  { name: 'Education', icon: BookOpen },
  { name: 'Energy', icon: Plug }
];

const ROW_2_ITEMS: DomainItem[] = [
  { name: 'Events', icon: CalendarDays },
  { name: 'Food', icon: Utensils },
  { name: 'Hardware', icon: Cpu },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Hospitality', icon: ConciergeBell },
  { name: 'Industries', icon: Factory }
];

const DomainMarquee: React.FC = () => {
  return (
    <div className="domain-marquee-section relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="font-mono text-sm uppercase tracking-widest text-[#FFAE00] font-black">
          OUR SECTOR EXPERTISE
        </span>
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white tracking-tight mt-2 leading-tight">
          Domains We Are Working With
        </h2>
      </div>

      {/* Row 1: Right to Left */}
      <div className="domain-marquee-container overflow-hidden py-1">
        <div className="domain-marquee-track-left">
          {/* Double items for infinite wrap */}
          {[...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`r1-${idx}`} className="domain-card">
                <div className="domain-card-icon-wrapper">
                  <Icon className="w-5 h-5 text-[#FFAE00]" />
                </div>
                <span className="domain-card-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className="domain-marquee-container overflow-hidden py-1 mt-3">
        <div className="domain-marquee-track-right">
          {/* Double items for infinite wrap */}
          {[...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`r2-${idx}`} className="domain-card">
                <div className="domain-card-icon-wrapper">
                  <Icon className="w-5 h-5 text-[#FFAE00]" />
                </div>
                <span className="domain-card-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DomainMarquee;
