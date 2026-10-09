'use client';

import { RefObject, useEffect, useState } from 'react';

/**
 * Decides which mockup layers of a tabbed spotlight card should mount an image.
 *
 * - Starts with only the first tab (identical on server and client, so no
 *   hydration mismatch) and no image is marked priority.
 * - The active tab is always mounted; the next tab is mounted while the card
 *   is in view, before the auto-cycle reaches it.
 * - After the page has finished loading, all tabs are mounted as soon as the
 *   card comes within about one screen of the viewport. This way the images
 *   are fetched and decoded before the card enters the scroll-stack animation,
 *   instead of during it (which caused visible stutter).
 * - Once mounted, a layer stays mounted to avoid re-downloads.
 */
export function useStagedMockups(
  activeIdx: number,
  count: number,
  isInView: boolean,
  containerRef?: RefObject<HTMLElement | null>
) {
  const [staged, setStaged] = useState<number[]>([0]);
  const [preloadAll, setPreloadAll] = useState(false);

  useEffect(() => {
    const wanted = preloadAll
      ? Array.from({ length: count }, (_, i) => i)
      : isInView
        ? [activeIdx, (activeIdx + 1) % count]
        : [activeIdx];
    setStaged((prev) =>
      wanted.every((i) => prev.includes(i)) ? prev : Array.from(new Set([...prev, ...wanted]))
    );
  }, [activeIdx, count, isInView, preloadAll]);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    let observer: IntersectionObserver | null = null;
    const startObserving = () => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setPreloadAll(true);
            observer?.disconnect();
          }
        },
        { rootMargin: '100% 0px' }
      );
      observer.observe(el);
    };

    if (document.readyState === 'complete') {
      startObserving();
    } else {
      window.addEventListener('load', startObserving, { once: true });
    }

    return () => {
      window.removeEventListener('load', startObserving);
      observer?.disconnect();
    };
  }, [containerRef]);

  return (idx: number) => staged.includes(idx);
}
