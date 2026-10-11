'use client';

import React, { useState, useEffect, useMemo } from 'react';

export interface TypewriterSegment {
  text: string;
  className?: string;
}

export interface TypewriterHeadlineProps {
  /** Simple plain text string */
  text?: string;
  /** Or multiple styled text segments typed sequentially */
  segments?: TypewriterSegment[];
  /** Typing interval in milliseconds per character (default 45ms) */
  speed?: number;
  /** Initial delay in ms before typing begins (default 100ms) */
  delay?: number;
  /** Duration in ms to continue blinking cursor after typing completes before hiding (default 2500ms). Pass null to keep cursor blinking forever. */
  cursorBlinkTimeout?: number | null;
  /** Custom cursor color (default '#FFAE00') */
  cursorColor?: string;
  /** Additional CSS class for the cursor element */
  cursorClassName?: string;
  /** Additional wrapper CSS class */
  className?: string;
  /** Render wrapper element, default 'span' */
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export const TypewriterHeadline: React.FC<TypewriterHeadlineProps> = ({
  text,
  segments: propSegments,
  speed = 45,
  delay = 100,
  cursorBlinkTimeout = 2500,
  cursorColor = '#FFAE00',
  cursorClassName = '',
  className = '',
  as: Component = 'span',
}) => {
  // Normalize input into an array of segments
  const segments: TypewriterSegment[] = useMemo(() => {
    if (propSegments && propSegments.length > 0) {
      return propSegments;
    }
    if (text) {
      return [{ text }];
    }
    return [];
  }, [propSegments, text]);

  // Full raw text for accessibility and length calculation
  const fullText = useMemo(() => {
    return segments.map((s) => s.text).join('');
  }, [segments]);

  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter typing effect
  useEffect(() => {
    setCharCount(0);
    setShowCursor(true);

    if (!fullText) return;

    let timer: NodeJS.Timeout;
    const startDelayTimer = setTimeout(() => {
      let current = 0;
      timer = setInterval(() => {
        if (current < fullText.length) {
          current++;
          setCharCount(current);
        } else {
          clearInterval(timer);
          if (cursorBlinkTimeout !== null) {
            setTimeout(() => {
              setShowCursor(false);
            }, cursorBlinkTimeout);
          }
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startDelayTimer);
      if (timer) clearInterval(timer);
    };
  }, [fullText, speed, delay, cursorBlinkTimeout]);

  // Cursor blink effect (530ms interval)
  useEffect(() => {
    if (!showCursor) {
      setCursorVisible(false);
      return;
    }
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [showCursor]);

  // Render the typed text segment by segment
  const renderedContent = useMemo(() => {
    let charsRemaining = charCount;

    return segments.map((seg, idx) => {
      if (charsRemaining <= 0) return null;
      const segLength = seg.text.length;
      const visibleSlice = seg.text.slice(0, Math.min(charsRemaining, segLength));
      charsRemaining -= segLength;

      if (!visibleSlice) return null;

      return (
        <span key={idx} className={seg.className}>
          {visibleSlice}
        </span>
      );
    });
  }, [segments, charCount]);

  return (
    <Component className={`inline ${className}`}>
      {/* Visual typewriter output */}
      <span aria-hidden="true">
        {renderedContent}
        {showCursor && (
          <span
            className={`inline-block w-0.75 h-[1em] ml-1 align-middle ${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            } ${cursorClassName}`}
            style={{ backgroundColor: cursorColor }}
          />
        )}
      </span>
      {/* Screen-reader and SEO accessible text */}
      <span className="sr-only">{fullText}</span>
    </Component>
  );
};

export default TypewriterHeadline;
