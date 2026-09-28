'use client';

import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export interface GrowthPoint {
  month: string;
  fullMonth: string;
  visitors: number;
  label: string;
  growth: string;
  milestone: string;
  isMilestone?: boolean;
  guaranteed?: boolean;
}

// Full 12-month data for desktop / tablet
export const SEO_GROWTH_DATA_FULL: GrowthPoint[] = [
  { month: 'JAN', fullMonth: 'January', visitors: 200, label: '200', growth: 'Baseline', milestone: 'Technical Audit & Indexing Setup' },
  { month: 'FEB', fullMonth: 'February', visitors: 1000, label: '1,000', growth: '+400%', milestone: 'On-Page Architecture & Core Fixes' },
  { month: 'MAR', fullMonth: 'March', visitors: 1500, label: '1,500', growth: '+50%', milestone: 'Keyword Mapping & Content Strategy' },
  { month: 'APRIL', fullMonth: 'April', visitors: 2500, label: '2,500', growth: '+67%', milestone: 'Authority Link Building Initiated' },
  { month: 'MAY', fullMonth: 'May', visitors: 3500, label: '3,500', growth: '+40%', milestone: 'Core Web Vitals & Speed Boost' },
  { month: 'JUN', fullMonth: 'June', visitors: 5000, label: '5,000', growth: '+43%', milestone: '100% Guaranteed 6-Month Result', guaranteed: true, isMilestone: true },
  { month: 'JULY', fullMonth: 'July', visitors: 7000, label: '7,000', growth: '+40%', milestone: 'High-Intent Keywords Rank in Top 5' },
  { month: 'AUG', fullMonth: 'August', visitors: 8000, label: '8,000', growth: '+14%', milestone: 'Local Pack & Map Optimization' },
  { month: 'SEPT', fullMonth: 'September', visitors: 9000, label: '9,000', growth: '+12%', milestone: 'Featured Snippets & Schema Win' },
  { month: 'OCT', fullMonth: 'October', visitors: 11000, label: '11,000', growth: '+22%', milestone: 'Multi-Page Organic Conversions' },
  { month: 'NOV', fullMonth: 'November', visitors: 15000, label: '15,000', growth: '+36%', milestone: 'High-Authority Content Flywheel' },
  { month: 'DEC', fullMonth: 'December', visitors: 25000, label: '25,000', growth: '+67%', milestone: 'Market Leadership: 25,000+ Visitors', isMilestone: true },
];

// Streamlined 5 key milestones for mobile to eliminate label collision
export const SEO_GROWTH_DATA_MOBILE: GrowthPoint[] = [
  { month: 'JAN', fullMonth: 'January', visitors: 200, label: '200', growth: 'Baseline', milestone: 'Technical Audit & Indexing Setup' },
  { month: 'MAR', fullMonth: 'March', visitors: 1500, label: '1,500', growth: '+50%', milestone: 'Keyword Mapping & Content Strategy' },
  { month: 'JUN', fullMonth: 'June', visitors: 5000, label: '5,000', growth: '+43%', milestone: '100% Guaranteed 6-Month Result', guaranteed: true, isMilestone: true },
  { month: 'SEPT', fullMonth: 'September', visitors: 9000, label: '9,000', growth: '+12%', milestone: 'Featured Snippets & Schema Win' },
  { month: 'DEC', fullMonth: 'December', visitors: 25000, label: '25,000', growth: '+67%', milestone: 'Market Leadership: 25,000+ Visitors', isMilestone: true },
];

interface SeoTrafficGrowthChartProps {
  className?: string;
}

// Custom Tooltip component with high z-index
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: GrowthPoint = payload[0].payload;
    return (
      <div className="relative z-50 rounded-xl bg-[#0E2015] border border-[#1D4224] p-2.5 sm:p-3 shadow-2xl shadow-black/90 text-white min-w-[160px] sm:min-w-[180px]">
        <div className="flex items-center justify-between gap-2 border-b border-[#1D4224]/60 pb-1.5 mb-1.5">
          <span className="font-montserrat font-bold text-xs text-[#FFAE00]">
            {data.fullMonth} ({data.month})
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1D4224] text-[#22C55E]">
            {data.growth}
          </span>
        </div>
        <div className="text-sm sm:text-base font-montserrat font-black text-white">
          {data.label} <span className="text-xs text-white/60 font-normal">visitors/mo</span>
        </div>
        <div className="text-[10px] sm:text-[11px] text-white/70 font-inter mt-1 leading-snug">
          {data.milestone}
        </div>
      </div>
    );
  }
  return null;
};

// Custom Dot for Data points
const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  const isTarget = payload?.month === 'DEC';

  if (isTarget) {
    return (
      <circle cx={cx} cy={cy} r={4.5} fill="#22C55E" stroke="#FFAE00" strokeWidth={2} />
    );
  }

  return (
    <circle cx={cx} cy={cy} r={3.5} fill="#22C55E" stroke="#09160E" strokeWidth={1.5} />
  );
};

// Custom Label above each data point
const CustomLabel = (props: any) => {
  const { x, y, value } = props;

  return (
    <text
      x={x}
      y={y - 9}
      fill="#FFFFFF"
      fontSize={9}
      fontFamily="monospace"
      fontWeight="normal"
      textAnchor="middle"
      fillOpacity={0.9}
    >
      {value >= 1000 ? value.toLocaleString() : value}
    </text>
  );
};

export default function SeoTrafficGrowthChart({ className = '' }: SeoTrafficGrowthChartProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-full h-[220px] sm:h-[260px] md:h-[380px] lg:h-[460px] flex items-center justify-center ${className}`}>
        <div className="w-7 h-7 rounded-full border-2 border-[#22C55E] border-t-transparent animate-spin" />
      </div>
    );
  }

  const chartData = isMobile ? SEO_GROWTH_DATA_MOBILE : SEO_GROWTH_DATA_FULL;

  return (
    <div className={`w-full select-none relative ${className}`}>
      {/* 1-3 Words Heading: "Guaranteed Result" placed inside the empty interior of the graph with low z-index (z-0) */}
      <div className="absolute top-[20%] sm:top-[24%] left-[16%] sm:left-[20%] z-0 pointer-events-none select-none">
        <h2 className="font-montserrat font-black text-xl sm:text-3xl lg:text-4xl text-white/90 tracking-tight uppercase">
          Guaranteed <span className="text-[#FFAE00]">Result</span>
        </h2>
      </div>

      {/* Reduced Height on Mobile (220px) while maintaining Desktop (460px) */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] lg:h-[460px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={
              isMobile
                ? { top: 22, right: 10, left: -26, bottom: 0 }
                : { top: 35, right: 25, left: -15, bottom: 10 }
            }
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1D4224" />
                <stop offset="50%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#FFAE00" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1D4224"
              opacity={0.2}
              vertical={false}
            />

            <XAxis
              dataKey="month"
              stroke="#5C6860"
              tick={{ fill: '#9CA3AF', fontSize: isMobile ? 10 : 11, fontWeight: 600 }}
              tickLine={false}
              axisLine={{ stroke: '#1D4224', opacity: 0.5 }}
              dy={isMobile ? 4 : 8}
            />

            <YAxis
              stroke="#5C6860"
              tick={{ fill: '#9CA3AF', fontSize: isMobile ? 9 : 10 }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
              tickLine={false}
              axisLine={false}
              domain={[0, 27000]}
              dx={-4}
            />

            <Tooltip
              wrapperStyle={{ zIndex: 50, pointerEvents: 'none' }}
              content={<CustomTooltip />}
            />

            <Line
              type="monotone"
              dataKey="visitors"
              stroke="url(#lineGradient)"
              strokeWidth={isMobile ? 2.5 : 3.5}
              dot={<CustomDot />}
              activeDot={{ r: 6, fill: '#FFAE00', stroke: '#FFFFFF', strokeWidth: 2 }}
              label={<CustomLabel />}
              filter="url(#glow)"
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
