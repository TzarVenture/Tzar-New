"use client";

import React from 'react';

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass = '' }) => {
  return (
    <div className={`animated-title ${containerClass}`}>
      {title.split('<br />').map((line, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 text-center md:gap-3">
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word font-montserrat font-black"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
