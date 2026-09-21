"use client";

import React, { useRef, useEffect, useState } from 'react';
import './AccordionGallery.css';

export interface GalleryItem {
  image: string;
  label: string;
  tag?: string;
  link?: string;
  alt?: string;
}

interface AccordionGalleryProps {
  items: GalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  orientation?: 'horizontal' | 'vertical';
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  className?: string;
}

const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultIndex = 2,
  accentColor = '#FFAE00',
  overlayColor = '#0E2015',
  textColor = '#ffffff',
  height = 480,
  gap = 14,
  radius = 20,
  orientation = 'horizontal',
  trigger = 'hover',
  showLabels = true,
  className = ''
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const effectiveOrientation = isMobile ? 'vertical' : orientation;
  const vertical = effectiveOrientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Mobile scroll-linked activation (Optimized with IntersectionObserver & RAF)
  useEffect(() => {
    if (!isMobile) return;

    let ticking = false;
    let isIntersecting = false;

    const checkScroll = () => {
      const el = rootRef.current;
      if (!el || !isIntersecting) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const progress = (viewportCenter - rect.top) / rect.height;

      const currentActive = activeRef.current;
      let nextActive = currentActive;

      const forwardThresholds = [0.25, 0.45, 0.65, 0.85];
      const reverseThresholds = [0.15, 0.35, 0.55, 0.75];

      if (currentActive < count - 1 && progress > forwardThresholds[currentActive]) {
        let idx = currentActive;
        while (idx < count - 1 && progress > forwardThresholds[idx]) {
          idx++;
        }
        nextActive = idx;
      } else if (currentActive > 0 && progress < reverseThresholds[currentActive - 1]) {
        let idx = currentActive;
        while (idx > 0 && progress < reverseThresholds[idx - 1]) {
          idx--;
        }
        nextActive = idx;
      }

      if (nextActive !== currentActive) {
        setActive(nextActive);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && isIntersecting) {
        ticking = true;
        requestAnimationFrame(checkScroll);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          handleScroll();
        }
      },
      { rootMargin: "150px 0px" }
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, count]);

  // Smooth hover intent threshold (50ms) prevents fast jumpy triggers when sweeping the cursor
  const handleEnter = (i: number) => {
    if (trigger !== 'hover') return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActive(i);
    }, 50);
  };

  const handleLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleClick = (i: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActive(i);
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.5)}px` : `${height}px`
      } as React.CSSProperties}
      role="list"
      aria-label="Brand campaigns and product photography gallery"
      onMouseLeave={handleLeave}
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media">
                <img
                  src={item.image}
                  alt={item.alt || item.label || ''}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>
            {showLabels && (
              <span className="ag-panel__label" aria-hidden="true">
                <span className="flex items-center gap-2.5">
                  <span className="ag-panel__bar" />
                  <span className="ag-panel__text">{item.label}</span>
                </span>
                {item.tag && (
                  <span className="ag-panel__subtext">{item.tag}</span>
                )}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
