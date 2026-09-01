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

import './DomainList.css';

interface DomainItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DOMAIN_ITEMS: DomainItem[] = [
  { name: 'Automobiles', icon: Car },
  { name: 'Capital', icon: Coins },
  { name: 'Consulting', icon: MessagesSquare },
  { name: 'E-Commerce', icon: ShoppingBag },
  { name: 'Education', icon: BookOpen },
  { name: 'Energy', icon: Plug },
  { name: 'Events', icon: CalendarDays },
  { name: 'Food', icon: Utensils },
  { name: 'Hardware', icon: Cpu },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Hospitality', icon: ConciergeBell },
  { name: 'Industries', icon: Factory }
];

const DomainList: React.FC = () => {
  return (
    <div className="domain-grid-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="text-center mb-8">
        <span className="font-mono text-sm uppercase tracking-widest text-[#1D4224] font-black">
          OUR SECTOR EXPERTISE
        </span>
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#0E2015] tracking-tight mt-2 leading-tight">
          Domains we have worked for
        </h2>
      </div>

      <div className="domain-flat-grid">
        {DOMAIN_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="domain-grid-cell">
              <div className="domain-grid-icon-box">
                <Icon className="domain-grid-icon" />
              </div>
              <span className="domain-grid-name">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DomainList;
