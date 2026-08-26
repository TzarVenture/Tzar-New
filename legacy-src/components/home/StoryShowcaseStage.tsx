"use client";

import React, { useRef } from 'react';
import { AnimatedTitle } from '../ui/AnimatedTitle';
import { ArrowRight } from 'lucide-react';

export const StoryShowcaseStage: React.FC = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="story" className="bg-[#FAF9F5] py-32 text-[#1A1C19] border-b border-[#E2E3DE]">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-rubik text-xs font-bold uppercase tracking-widest text-[#052C10] mb-4">
            The Story Behind Every System
          </span>
          <AnimatedTitle title="Crafting Digital<b>Craftsmanship</b>" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="story-img-container flex justify-center">
            <img
              ref={frameRef}
              src="/assets/images/projects/r20.png"
              alt="Tzar Venture Craftsmanship"
              className="rounded-2xl shadow-2xl transition-transform duration-300 max-w-full h-auto object-cover"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#1A1C19]">
              Connected Systems That Perform at Scale
            </h3>
            <p className="font-inter text-base text-[#424941] leading-relaxed">
              We partner with founders and business leaders to eliminate digital friction. From rapid custom WebGL apps to organic SEO engines, every pixel is engineered for measurable ROI.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#052C10] px-8 py-4 font-montserrat font-extrabold text-xs uppercase tracking-wider text-white hover:bg-[#1D4224] transition shadow-md"
            >
              Start A Project <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
