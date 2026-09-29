'use client';

import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

export interface GrowthPoint {
  month: string;
  fullMonth: string;
  visitors: number;
  label: string;
  keywords: number;
  keywordsLabel: string;
  growth: string;
  milestone: string;
  isMilestone?: boolean;
  guaranteed?: boolean;
}

// Full 12-month data for desktop / tablet
export const SEO_GROWTH_DATA_FULL: GrowthPoint[] = [
  { month: 'JAN', fullMonth: 'January', visitors: 200, label: '200', keywords: 45, keywordsLabel: '45', growth: 'Baseline', milestone: 'Technical Audit & Indexing Setup' },
  { month: 'FEB', fullMonth: 'February', visitors: 1000, label: '1,000', keywords: 180, keywordsLabel: '180', growth: '+400%', milestone: 'On-Page Architecture & Core Fixes' },
  { month: 'MAR', fullMonth: 'March', visitors: 1500, label: '1,500', keywords: 320, keywordsLabel: '320', growth: '+50%', milestone: 'Keyword Mapping & Content Strategy' },
  { month: 'APRIL', fullMonth: 'April', visitors: 2500, label: '2,500', keywords: 580, keywordsLabel: '580', growth: '+67%', milestone: 'Authority Link Building Initiated' },
  { month: 'MAY', fullMonth: 'May', visitors: 3500, label: '3,500', keywords: 890, keywordsLabel: '890', growth: '+40%', milestone: 'Core Web Vitals & Speed Boost' },
  { month: 'JUN', fullMonth: 'June', visitors: 5000, label: '5,000', keywords: 1250, keywordsLabel: '1,250', growth: '+43%', milestone: '100% Guaranteed 6-Month Result', guaranteed: true, isMilestone: true },
  { month: 'JULY', fullMonth: 'July', visitors: 7000, label: '7,000', keywords: 1680, keywordsLabel: '1,680', growth: '+40%', milestone: 'High-Intent Keywords Rank in Top 5' },
  { month: 'AUG', fullMonth: 'August', visitors: 8000, label: '8,000', keywords: 1950, keywordsLabel: '1,950', growth: '+14%', milestone: 'Local Pack & Map Optimization' },
  { month: 'SEPT', fullMonth: 'September', visitors: 9000, label: '9,000', keywords: 2400, keywordsLabel: '2,400', growth: '+12%', milestone: 'Featured Snippets & Schema Win' },
  { month: 'OCT', fullMonth: 'October', visitors: 11000, label: '11,000', keywords: 3100, keywordsLabel: '3,100', growth: '+22%', milestone: 'Multi-Page Organic Conversions' },
  { month: 'NOV', fullMonth: 'November', visitors: 15000, label: '15,000', keywords: 3900, keywordsLabel: '3,900', growth: '+36%', milestone: 'High-Authority Content Flywheel' },
  { month: 'DEC', fullMonth: 'December', visitors: 25000, label: '25,000', keywords: 4800, keywordsLabel: '4,800', growth: '+67%', milestone: 'Market Leadership: 25,000+ Visitors', isMilestone: true },
];

// Streamlined 5 key milestones for mobile to eliminate label collision
export const SEO_GROWTH_DATA_MOBILE: GrowthPoint[] = [
  { month: 'JAN', fullMonth: 'January', visitors: 200, label: '200', keywords: 45, keywordsLabel: '45', growth: 'Baseline', milestone: 'Technical Audit & Indexing Setup' },
  { month: 'MAR', fullMonth: 'March', visitors: 1500, label: '1,500', keywords: 320, keywordsLabel: '320', growth: '+50%', milestone: 'Keyword Mapping & Content Strategy' },
  { month: 'JUN', fullMonth: 'June', visitors: 5000, label: '5,000', keywords: 1250, keywordsLabel: '1,250', growth: '+43%', milestone: '100% Guaranteed 6-Month Result', guaranteed: true, isMilestone: true },
  { month: 'SEPT', fullMonth: 'September', visitors: 9000, label: '9,000', keywords: 2400, keywordsLabel: '2,400', growth: '+12%', milestone: 'Featured Snippets & Schema Win' },
  { month: 'DEC', fullMonth: 'December', visitors: 25000, label: '25,000', keywords: 4800, keywordsLabel: '4,800', growth: '+67%', milestone: 'Market Leadership: 25,000+ Visitors', isMilestone: true },
];

interface SeoTrafficGrowthChartProps {
  className?: string;
}

// Custom Tooltip component with high z-index displaying both metrics
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: GrowthPoint = payload[0].payload;
    return (
      <div className="relative z-50 rounded-xl bg-[#07130A]/95 border border-[#1D4224] p-3 shadow-2xl shadow-black/90 text-white min-w-[200px] backdrop-blur-md">
        <div className="flex items-center justify-between gap-2 border-b border-[#1D4224]/60 pb-1.5 mb-2">
          <span className="font-montserrat font-bold text-xs text-[#FFAE00]">
            {data.fullMonth} ({data.month})
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1D4224] text-[#22C55E]">
            {data.growth}
          </span>
        </div>
        <div className="space-y-1.5 mb-2">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="text-white/70 flex items-center gap-1.5">
              <span className="w-2.5 h-0.5 bg-[#FFAE00] rounded-full inline-block" /> Organic Traffic:
            </span>
            <span className="font-montserrat font-black text-white">{data.label} <span className="text-[10px] text-white/50 font-normal">/mo</span></span>
          </div>
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="text-white/70 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-xs bg-[#22C55E] inline-block" /> Ranked Keywords:
            </span>
            <span className="font-montserrat font-black text-[#B6F8DD]">{data.keywordsLabel}</span>
          </div>
        </div>
        <div className="text-[10px] sm:text-[11px] text-white/80 font-inter pt-1.5 border-t border-white/10 leading-snug">
          {data.milestone}
        </div>
      </div>
    );
  }
  return null;
};

// Custom Dot for Line Data points
const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  const isTarget = payload?.month === 'DEC';

  if (isTarget) {
    return (
      <circle cx={cx} cy={cy} r={5} fill="#22C55E" stroke="#FFAE00" strokeWidth={2} />
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
      <div className={`w-full h-[240px] sm:h-[280px] md:h-[400px] lg:h-[480px] flex items-center justify-center ${className}`}>
        <div className="w-7 h-7 rounded-full border-2 border-[#22C55E] border-t-transparent animate-spin" />
      </div>
    );
  }

  const chartData = isMobile ? SEO_GROWTH_DATA_MOBILE : SEO_GROWTH_DATA_FULL;

  return (
    <div className={`w-full select-none relative ${className}`}>
      {/* Metric Indicator Ribbon Bar */}
      <div className="flex items-center justify-start gap-4 sm:gap-6 mb-2 px-1 text-xs font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-gradient-to-t from-[#1D4224] to-[#22C55E] inline-block border border-[#22C55E]/40" />
          <span className="text-white/70 text-[11px]">Ranked Keywords (Top 10)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 rounded-full bg-[#FFAE00] inline-block" />
          <span className="text-[#FFAE00] text-[11px] font-semibold">Organic Traffic / Mo</span>
        </div>
      </div>

      {/* 1-3 Words Heading: "Guaranteed Result" placed inside the interior of the graph with low z-index */}
      <div className="absolute top-[22%] sm:top-[26%] left-[16%] sm:left-[20%] z-0 pointer-events-none select-none">
        <h2 className="font-montserrat font-black text-xl sm:text-3xl lg:text-4xl text-white/90 tracking-tight uppercase">
          Guaranteed <span className="text-[#FFAE00]">Result</span>
        </h2>
      </div>

      {/* Responsive Composed Chart Container */}
      <div className="w-full h-[230px] sm:h-[270px] md:h-[390px] lg:h-[460px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={
              isMobile
                ? { top: 22, right: 10, left: -20, bottom: 0 }
                : { top: 35, right: 20, left: -10, bottom: 10 }
            }
          >
            <defs>
              {/* Luminous Line Gradient */}
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1D4224" />
                <stop offset="50%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#FFAE00" />
              </linearGradient>

              {/* Standard Bar Gradient (Emerald / Forest Green) */}
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#1D4224" stopOpacity={0.15} />
              </linearGradient>

              {/* 6-Month Milestone Bar Gradient (Light Mint Accent) */}
              <linearGradient id="mintBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B6F8DD" stopOpacity={0.65} />
                <stop offset="100%" stopColor="#1D4224" stopOpacity={0.2} />
              </linearGradient>

              {/* 12-Month Market Leadership Bar Gradient (Bright Gold Accent) */}
              <linearGradient id="goldBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFAE00" stopOpacity={0.65} />
                <stop offset="100%" stopColor="#1D4224" stopOpacity={0.2} />
              </linearGradient>

              {/* Line Glow Filter */}
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

            {/* Left Y-Axis for Organic Visitors */}
            <YAxis
              yAxisId="left"
              stroke="#5C6860"
              tick={{ fill: '#9CA3AF', fontSize: isMobile ? 9 : 10 }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
              tickLine={false}
              axisLine={false}
              domain={[0, 27000]}
              dx={-4}
            />

            {/* Right Y-Axis for Ranked Keywords */}
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#5C6860"
              tick={{ fill: '#B6F8DD', fontSize: isMobile ? 8 : 9, opacity: isMobile ? 0 : 0.7 }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
              tickLine={false}
              axisLine={false}
              domain={[0, 5200]}
              dx={4}
              hide={isMobile}
            />

            <Tooltip
              wrapperStyle={{ zIndex: 50, pointerEvents: 'none' }}
              content={<CustomTooltip />}
            />

            {/* ── BAR GRAPH: KEYWORD RANKINGS IN TOP 10 ── */}
            <Bar
              yAxisId="right"
              dataKey="keywords"
              radius={[6, 6, 0, 0]}
              maxBarSize={isMobile ? 32 : 28}
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="ease-out"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.month === 'DEC'
                      ? 'url(#goldBarGradient)'
                      : entry.month === 'JUN'
                      ? 'url(#mintBarGradient)'
                      : 'url(#barGradient)'
                  }
                  stroke={
                    entry.month === 'DEC'
                      ? '#FFAE00'
                      : entry.month === 'JUN'
                      ? '#B6F8DD'
                      : '#22C55E'
                  }
                  strokeOpacity={0.4}
                  strokeWidth={1}
                />
              ))}
            </Bar>

            {/* ── LINE GRAPH: ORGANIC TRAFFIC TRAJECTORY ── */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="visitors"
              stroke="url(#lineGradient)"
              strokeWidth={isMobile ? 2.5 : 3.5}
              dot={<CustomDot />}
              activeDot={{ r: 6, fill: '#FFAE00', stroke: '#FFFFFF', strokeWidth: 2 }}
              label={<CustomLabel />}
              filter="url(#glow)"
              isAnimationActive={true}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
