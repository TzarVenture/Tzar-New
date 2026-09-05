"use client";

import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2, Users2, Award, Briefcase } from 'lucide-react';
import './TechInsights.css';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad transition
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

interface StatItem {
  endNumber: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAT_ITEMS: StatItem[] = [
  {
    endNumber: 8000,
    suffix: '+',
    label: 'Projects Completed',
    icon: CheckCircle2
  },
  {
    endNumber: 150,
    suffix: '+',
    label: 'Active Clients',
    icon: Users2
  },
  {
    endNumber: 7000,
    suffix: '+',
    label: 'Satisfied Customers',
    icon: Award
  },
  {
    endNumber: 25,
    suffix: '+',
    label: 'Expert Teams',
    icon: Briefcase
  }
];

export const TechInsights: React.FC = () => {
  return (
    <section className="tech-insights-section relative z-20">
      {/* Background Tech Mesh lines */}
      <div className="tech-insights-grid-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="tech-insights-grid">
          {STAT_ITEMS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="tech-insights-card">
                <div className="tech-insights-icon-box">
                  <Icon className="tech-insights-icon" />
                </div>
                <div className="tech-insights-number-gradient">
                  <CountUp end={stat.endNumber} suffix={stat.suffix} />
                </div>
                <div className="tech-insights-label">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TechInsights;
