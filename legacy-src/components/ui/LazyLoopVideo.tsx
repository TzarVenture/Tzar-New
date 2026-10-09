'use client';

import React, { useEffect, useRef } from 'react';

interface LazyLoopVideoProps {
  src: string;
  poster: string;
  /** Accessible name (replaces the old <img alt>). */
  label: string;
  className?: string;
}

/**
 * Drop-in replacement for an autoplaying animated GIF.
 * Shows the first-frame poster immediately, downloads the (much smaller)
 * MP4 only when the element is near the viewport, plays it muted and
 * looping like the GIF did, and pauses it while off-screen.
 */
export function LazyLoopVideo({ src, poster, label, className = '' }: LazyLoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // required for autoplay on mobile browsers

    if (typeof IntersectionObserver === 'undefined') {
      video.play().catch(() => {});
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      role="img"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default LazyLoopVideo;
