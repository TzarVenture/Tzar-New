"use client";

import React, { useState, useEffect } from "react";
import "./TechText.css";

interface TechTextProps {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
  pauseBeforeNext?: number;
}

const DEFAULT_WORDS = [
  "IDEAS",
  "TECHNOLOGY",
  "CREATIVITY",
  "PERFORMANCE",
  "GROWTH",
];

export const TechText: React.FC<TechTextProps> = ({
  words = DEFAULT_WORDS,
  typingSpeed = 90,
  deletingSpeed = 45,
  holdTime = 2200,
  pauseBeforeNext = 360,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] || "";

    if (!isDeleting) {
      // 1. Typing forward
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // 2. Full word typed: hold for reading
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, holdTime);
        return () => clearTimeout(timeout);
      }
    } else {
      // 3. Backspacing
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // 4. Fully erased: pause before starting next word
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, pauseBeforeNext);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, holdTime, pauseBeforeNext]);

  return (
    <section className="tech-text-section relative z-20" aria-label="Kinetic Technology Headline">
      {/* Soft ambient lighting glow behind the font with zero edge-clipping seams */}
      <div 
        className="tech-text-ambient-glow" 
        aria-hidden="true"
      />

      <div className="tech-text-viewport">
        <h2 className="tech-text-masked">
          {displayedText || "\u00A0"}
          <span className="tech-text-cursor" aria-hidden="true">|</span>
        </h2>
      </div>
    </section>
  );
};

export default TechText;
