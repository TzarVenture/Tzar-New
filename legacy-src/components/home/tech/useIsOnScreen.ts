'use client';

import { RefObject, useEffect, useState } from 'react';

/**
 * True while the element intersects the viewport AND the browser tab is
 * visible. Used to pause auto-advancing carousels that nobody can see.
 * Starts as true so server and first client render behave identically.
 */
export function useIsOnScreen(ref: RefObject<HTMLElement | null>, rootMargin = '0px') {
  const [onScreen, setOnScreen] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let inView = true;
    let pageVisible = !document.hidden;
    const update = () => setOnScreen(inView && pageVisible);

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              inView = entry.isIntersecting;
              update();
            },
            { rootMargin }
          )
        : null;
    observer?.observe(el);

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      update();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [ref, rootMargin]);

  return onScreen;
}
