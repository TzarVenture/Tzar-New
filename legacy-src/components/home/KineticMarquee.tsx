import React from 'react';
import { ShieldCheck, Award, Zap, TrendingUp, Star, Globe } from 'lucide-react';

const PARTNERS = [
  { label: 'Google Partner Verified', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
  { label: 'Meta Business Partner', icon: <Globe className="w-4 h-4 text-sky-400" /> },
  { label: 'Shopify Expert Agency', icon: <Zap className="w-4 h-4 text-amber-400" /> },
  { label: 'Razorpay Verified Partner', icon: <Award className="w-4 h-4 text-blue-400" /> },
  { label: 'HubSpot Agency Network', icon: <Star className="w-4 h-4 text-orange-400" /> },
  { label: 'Amazon Ads Partner', icon: <TrendingUp className="w-4 h-4 text-yellow-400" /> },
];

const METRICS = [
  '⚡ +180% Organic Traffic Growth in 6 Months',
  '🏆 95% Annual Client Retention Rate',
  '📈 $12M+ Performance Ad Spend Managed',
  '🚀 0.8s Average Page Load Speed Across All Builds',
  '💎 100+ Brands Scaled Across India & Globally',
  '🛡️ 100% Core Web Vitals Green Compliance',
];

export const KineticMarquee: React.FC = () => {
  return (
    <section
      style={{
        background: '#052C10',
        borderTop: '1px solid #D4AF37',
        borderBottom: '1px solid #D4AF37',
        padding: '1.25rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top Track — Partners Scrolling Left */}
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%', marginBottom: '.75rem' }}>
        <div
          className="animate-marquee-left"
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.6rem',
                padding: '.6rem 1.35rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#FFFFFF',
                fontFamily: 'Rubik, sans-serif',
                fontSize: '.78rem',
                fontWeight: 700,
                letterSpacing: '.04em',
              }}
            >
              {p.icon}
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Track — Live Metrics Scrolling Right */}
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <div
          className="animate-marquee-right"
          style={{ display: 'flex', alignItems: 'center', gap: '2rem', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          {[...METRICS, ...METRICS, ...METRICS].map((m, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '.82rem',
                fontWeight: 800,
                color: '#FED65B',
                letterSpacing: '.03em',
              }}
            >
              <span>{m}</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '1rem' }}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
