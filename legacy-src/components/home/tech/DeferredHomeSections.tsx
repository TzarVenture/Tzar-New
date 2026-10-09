'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { DeferredSection } from './DeferredSection';

// Below-the-fold, decorative home sections. Their JS is only requested when the
// visitor scrolls within ~800px of them. Reserved heights equal the rendered
// heights at each breakpoint used by the components themselves, so mounting
// does not shift the content below.
const ShowcaseMockupSection = dynamic(
  () => import('./ShowcaseMockupSection').then((m) => m.ShowcaseMockupSection),
  { ssr: false }
);
const ClientMarquee = dynamic(() => import('./ClientMarquee').then((m) => m.ClientMarquee), {
  ssr: false,
});

export function DeferredShowcaseMockupSection() {
  return (
    // ShowcaseMockupSection switches card size at 640px and 1024px (sm / lg).
    <DeferredSection className="min-h-[634.3px] sm:min-h-[772.8px] lg:min-h-[859.8px]">
      <ShowcaseMockupSection />
    </DeferredSection>
  );
}

export function DeferredClientMarquee() {
  return (
    // Same dark background as the marquee so the reserved space never flashes.
    <DeferredSection className="min-h-[345.6px] bg-[#0E2015]">
      <ClientMarquee />
    </DeferredSection>
  );
}
