"use client";

import React, { useRef, useState } from 'react';

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = '', style = {} }) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 12;
    const tiltY = (relativeX - 0.5) * -12;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transform: transformStyle, transition: 'transform 0.25s ease-out' }}
    >
      {children}
    </div>
  );
};
