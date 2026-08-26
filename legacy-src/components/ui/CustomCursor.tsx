"use client";

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'DEFAULT' | 'HOVER' | 'VIEW' | 'EXPLORE' | 'PLAY'>('DEFAULT');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch screens to disable custom cursor on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Track spotlight CSS variables on cards
      const target = e.target as HTMLElement | null;
      if (target) {
        const spotlightCard = target.closest('.spotlight-card') as HTMLElement | null;
        if (spotlightCard) {
          const rect = spotlightCard.getBoundingClientRect();
          spotlightCard.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          spotlightCard.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }

        // Contextual cursor state evaluation
        const cursorData = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        if (cursorData === 'VIEW') setCursorState('VIEW');
        else if (cursorData === 'EXPLORE') setCursorState('EXPLORE');
        else if (cursorData === 'PLAY') setCursorState('PLAY');
        else if (target.closest('a, button, input, select, textarea, [role="button"]')) {
          setCursorState('HOVER');
        } else {
          setCursorState('DEFAULT');
        }
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  if (isTouchDevice) return null;

  const isExpanded = cursorState !== 'DEFAULT';

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: cursorState === 'DEFAULT' ? 32 : cursorState === 'HOVER' ? 48 : 80,
          height: cursorState === 'DEFAULT' ? 32 : cursorState === 'HOVER' ? 48 : 80,
          borderRadius: '50%',
          border: '1.5px solid rgba(212, 175, 55, 0.65)',
          background: cursorState === 'DEFAULT' 
            ? 'transparent' 
            : cursorState === 'HOVER' 
              ? 'rgba(212, 175, 55, 0.12)' 
              : 'rgba(5, 24, 10, 0.85)',
          backdropFilter: isExpanded && cursorState !== 'HOVER' ? 'blur(8px)' : 'none',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out, border-color 0.2s ease-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          fontFamily: 'Rubik, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          boxShadow: cursorState !== 'DEFAULT' ? '0 0 20px rgba(212, 175, 55, 0.25)' : 'none',
        }}
      >
        {cursorState === 'VIEW' && 'VIEW'}
        {cursorState === 'EXPLORE' && 'EXPLORE'}
        {cursorState === 'PLAY' && 'PLAY'}
      </div>

      {/* Inner Dot */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: cursorState === 'DEFAULT' ? 6 : 4,
          height: cursorState === 'DEFAULT' ? 6 : 4,
          borderRadius: '50%',
          background: '#D4AF37',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: cursorState === 'DEFAULT' || cursorState === 'HOVER' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
    </>
  );
};
