'use client';

import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

interface CardMetrics {
  cardTop: number;
  cardHeight: number;
}

interface CachedLayoutMetrics {
  cards: CardMetrics[];
  endElementTop: number;
  containerHeight: number;
  stackPositionPx: number;
  scaleEndPositionPx: number;
  finalItemStackDist: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 280,
  itemScale = 0.03,
  itemStackDistance = 22,
  stackPosition = '50px',
  scaleEndPosition = '24px',
  baseScale = 0.96,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: false,
      offset: 30,
    });
  }, []);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef<Map<number, { translateY: number; scale: number; rotation: number }>>(new Map());
  const isUpdatingRef = useRef<boolean>(false);

  const cachedMetricsRef = useRef<CachedLayoutMetrics>({
    cards: [],
    endElementTop: 0,
    containerHeight: 800,
    stackPositionPx: 64,
    scaleEndPositionPx: 24,
    finalItemStackDist: 16
  });

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    if (end === start) return 0;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      let top = 0;
      let curr: HTMLElement | null = element;
      const scroller = scrollerRef.current;
      while (curr) {
        if (!useWindowScroll && curr === scroller) break;
        top += curr.offsetTop;
        curr = curr.offsetParent as HTMLElement | null;
      }
      return top;
    },
    [useWindowScroll]
  );

  // Measure all card metrics in one synchronized batch (Zero layout thrashing on scroll)
  const measureMetrics = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards || !cards.length) return;

    const scroller = scrollerRef.current;
    const containerHeight = useWindowScroll
      ? (typeof window !== 'undefined' ? window.innerHeight : 800)
      : (scroller ? scroller.clientHeight : 800);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const finalStackPos = isMobile ? '44px' : (typeof stackPosition === 'number' ? `${stackPosition}px` : stackPosition);
    const finalScalePos = isMobile ? '20px' : (typeof scaleEndPosition === 'number' ? `${scaleEndPosition}px` : scaleEndPosition);
    const finalItemStackDist = isMobile ? 16 : (typeof itemStackDistance === 'number' ? itemStackDistance : 22);

    const stackPositionPx = parsePercentage(finalStackPos, containerHeight);
    const scaleEndPositionPx = parsePercentage(finalScalePos, containerHeight);

    const endElement = useWindowScroll
      ? (document.querySelector('.scroll-stack-end') as HTMLElement)
      : (scroller?.querySelector('.scroll-stack-end') as HTMLElement);

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    const cardMetrics: CardMetrics[] = cards.map(card => ({
      cardTop: getElementOffset(card),
      cardHeight: card.offsetHeight || 500
    }));

    cachedMetricsRef.current = {
      cards: cardMetrics,
      endElementTop,
      containerHeight,
      stackPositionPx,
      scaleEndPositionPx,
      finalItemStackDist
    };
  }, [
    useWindowScroll,
    stackPosition,
    scaleEndPosition,
    itemStackDistance,
    getElementOffset,
    parsePercentage
  ]);

  // Update visual transforms with zero DOM layout reads during scroll
  const updateCardTransforms = useCallback((currentScrollTop?: number) => {
    const cards = cardsRef.current;
    if (!cards.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = currentScrollTop !== undefined
      ? currentScrollTop
      : (useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop || 0));

    const metrics = cachedMetricsRef.current;
    if (!metrics.cards.length) {
      isUpdatingRef.current = false;
      return;
    }

    const {
      cards: cardMetrics,
      endElementTop,
      containerHeight,
      stackPositionPx,
      scaleEndPositionPx,
      finalItemStackDist
    } = metrics;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;

      const metric = cardMetrics[i];
      const cardTop = metric ? metric.cardTop : 0;
      const cardHeight = metric ? metric.cardHeight : 500;

      const triggerStart = cardTop - stackPositionPx - finalItemStackDist * i;
      const pinStart = triggerStart;
      const pinEnd = isMobile
        ? endElementTop - cardHeight - stackPositionPx - 20
        : endElementTop - Math.max(cardHeight, containerHeight / 2);

      // Card remains in full view at scale 1; only gently scales down by 3.5% as next card covers it
      let scale = 1;
      const nextMetric = cardMetrics[i + 1];
      if (nextMetric) {
        const nextPinStart = nextMetric.cardTop - stackPositionPx - finalItemStackDist * (i + 1);
        if (scrollTop >= pinStart) {
          const overlapProgress = calculateProgress(scrollTop, pinStart, nextPinStart);
          scale = 1 - overlapProgress * 0.035;
        }
      }
      const rotation = 0;

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + finalItemStackDist * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + finalItemStackDist * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.15 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }

    isUpdatingRef.current = false;
  }, [
    useWindowScroll,
    baseScale,
    itemScale,
    rotationAmount,
    calculateProgress,
    onStackComplete
  ]);

  const touchScrollCleanupRef = useRef<(() => void) | null>(null);

  const setupLenis = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scroller = scrollerRef.current;
    if (!useWindowScroll && !scroller) return;

    // Detect touch-enabled devices (phones, tablets)
    const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

    // On mobile & touch devices, preserve 100% native 120Hz/60Hz hardware compositor momentum
    // Virtual smooth scrolling on touch screens causes heavy input lag and stuttering
    if (isTouch) {
      let ticking = false;
      const handleNativeScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            updateCardTransforms(window.scrollY);
            ticking = false;
          });
        }
      };
      window.addEventListener('scroll', handleNativeScroll, { passive: true });
      touchScrollCleanupRef.current = () => window.removeEventListener('scroll', handleNativeScroll);
      return null;
    }

    // High-performance, natural snappy deceleration for desktop mice & trackpads
    const lenis = new Lenis({
      ...(useWindowScroll ? {} : {
        wrapper: scroller!,
        content: (scroller!.querySelector('.scroll-stack-inner') as HTMLElement) || undefined
      }),
      duration: 0.8, // Snappy response (eliminates heavy dragging feel)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0, // 1:1 natural wheel speed without artificial friction
      touchMultiplier: 0, // Never hijack touch
      syncTouch: false,
      infinite: false
    });

    lenis.on('scroll', (e: any) => {
      updateCardTransforms(e.scroll);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    (window as any).__tzar_lenis = lenis;
    return lenis;
  }, [useWindowScroll, updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller!.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const finalDistance = isMobile ? Math.max(36, Math.round(itemDistance * 0.5)) : itemDistance;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${finalDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.setProperty('-webkit-transform', 'translateZ(0)');
    });

    // Initial batch layout measurement
    measureMetrics();

    setupLenis();

    updateCardTransforms();

    // Responsive resize handler with debounced measurement
    let resizeTimer: any = null;
    const handleResize = () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        measureMetrics();
        updateCardTransforms();
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    // Observe changes in card content sizes (e.g. image loads)
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        measureMetrics();
        updateCardTransforms();
      });
      cards.forEach(card => resizeObserver?.observe(card));
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeTimer) {
        cancelAnimationFrame(resizeTimer);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (touchScrollCleanupRef.current) {
        touchScrollCleanupRef.current();
        touchScrollCleanupRef.current = null;
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        if (typeof window !== 'undefined' && (window as any).__tzar_lenis === lenisRef.current) {
          (window as any).__tzar_lenis = null;
        }
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    useWindowScroll,
    measureMetrics,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${useWindowScroll ? 'use-window-scroll' : ''} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
