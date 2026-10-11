'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { DeferredSection } from './DeferredSection';

import { ShowcaseMockupSkeleton } from './ShowcaseMockupSection';

// Below-the-fold, decorative home sections. Their JS is only requested when the
// visitor scrolls within ~1200px of them. Reserved heights equal the rendered
// heights at each breakpoint used by the components themselves, so mounting
// does not shift the content below.
const ShowcaseMockupSection = dynamic(
  () => import('./ShowcaseMockupSection').then((m) => m.ShowcaseMockupSection),
  {
    ssr: false,
    loading: () => <ShowcaseMockupSkeleton />,
  }
);
const ClientMarquee = dynamic(() => import('./ClientMarquee').then((m) => m.ClientMarquee), {
  ssr: false,
});

export function DeferredShowcaseMockupSection() {
  return (
    // ShowcaseMockupSection switches card size at 640px and 1024px (sm / lg).
    <DeferredSection
      rootMargin="1200px 0px"
      fallback={<ShowcaseMockupSkeleton />}
      className="min-h-[634.3px] sm:min-h-[772.8px] lg:min-h-[859.8px]"
    >
      <ShowcaseMockupSection />
    </DeferredSection>
  );
}

export function DeferredClientMarquee() {
  return (
    <DeferredSection className="min-h-60 bg-transparent">
      <ClientMarquee />
    </DeferredSection>
  );
}
