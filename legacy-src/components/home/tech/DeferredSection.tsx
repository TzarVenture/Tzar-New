'use client';

import React, { useEffect, useRef, useState } from 'react';

interface DeferredSectionProps {
  children: React.ReactNode;
  /** Classes for the wrapper. Use min-height classes that match the real section height to avoid layout shift. */
  className?: string;
  /** How far ahead of the viewport to start mounting (fetch + render) the section. */
  rootMargin?: string;
}

/**
 * Renders nothing but a height-reserving wrapper until the wrapper comes
 * within `rootMargin` of the viewport, then mounts its children once.
 * Server and first client render are identical (empty wrapper), so there is
 * no hydration mismatch.
 */
export function DeferredSection({ children, className = '', rootMargin = '800px 0px' }: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  );
}

export default DeferredSection;
