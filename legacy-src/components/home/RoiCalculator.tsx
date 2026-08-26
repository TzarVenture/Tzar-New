import React, { useState } from 'react';
import { TrendingUp, ArrowRight, Sparkles, ShieldCheck, DollarSign, Users, Award } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenProposalModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenProposalModal }) => {
  const [traffic, setTraffic] = useState(25000);
  const [orderValue, setOrderValue] = useState(15000);
  const [objective, setObjective] = useState<'seo' | 'ppc' | 'web'>('web');

  // Multiplier mapping based on capability focus
  const multiplier = objective === 'web' ? 0.035 : objective === 'seo' ? 0.045 : 0.055;
  const estimatedNewLeads = Math.round(traffic * multiplier * 12);
  const estimatedRevenueBoost = Math.round(estimatedNewLeads * orderValue * 0.25);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section
      style={{
        background: '#0B2912',
        color: '#fff',
        padding: 'clamp(5rem, 9vw, 8rem) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="max-lg:grid-cols-1 max-lg:gap-12">
          
          {/* LEFT: Heading & Explanations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.35rem 1rem', borderRadius: '999px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="eyebrow" style={{ color: '#D4AF37' }}>Growth Simulator</span>
            </div>

            <h2 className="text-kinetic-title">
              Simulate Your Brand's <br />
              <span className="font-serif-italic text-gold-gradient">Revenue Potential</span>.
            </h2>

            <p className="font-jakarta" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7, maxWidth: '500px' }}>
              Adjust your current traffic and target deal values below to estimate your potential annual growth when partnering with Tzar Venture.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '.5rem' }}>
              {[
                { title: 'Guaranteed Core Web Vitals <1.2s', desc: 'Eliminates bounce rates & maximizes visitor engagement' },
                { title: 'Intent Search Keyword Ranking', desc: 'Captures high-value buyers searching for your exact services' },
                { title: 'Conversion Rate Optimization (CRO)', desc: 'Turns passive website visitors into qualified paying leads' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#D4AF37', marginTop: '.2rem' }}>✓</div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '.88rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.78rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Calculator Controls & Output Card */}
          <div
            className="spotlight-card glass-card-dark"
            style={{
              padding: '2.5rem',
              borderRadius: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            }}
          >
            {/* Control 1: Growth Objective Tabs */}
            <div>
              <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.6rem' }}>
                01 • Choose Capability Focus
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.5rem' }}>
                {[
                  { id: 'web', label: 'Website UX' },
                  { id: 'seo', label: 'SEO Traffic' },
                  { id: 'ppc', label: 'PPC ROAS' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setObjective(tab.id as any)}
                    style={{
                      padding: '.65rem .5rem',
                      borderRadius: '.75rem',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '.75rem',
                      border: `1px solid ${objective === tab.id ? '#D4AF37' : 'rgba(255,255,255,0.1)'}`,
                      background: objective === tab.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.04)',
                      color: objective === tab.id ? '#D4AF37' : 'rgba(255,255,255,0.7)',
                      transition: 'all .2s',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Monthly Visitors Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.5rem' }}>
                <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  02 • Monthly Website Visitors
                </span>
                <span className="font-syne" style={{ fontWeight: 800, fontSize: '1rem', color: '#D4AF37' }}>
                  {traffic.toLocaleString('en-IN')} / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={traffic}
                onChange={e => setTraffic(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer' }}
              />
            </div>

            {/* Control 3: Average Order / Deal Value */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.5rem' }}>
                <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  03 • Average Deal / Order Value
                </span>
                <span className="font-syne" style={{ fontWeight: 800, fontSize: '1rem', color: '#D4AF37' }}>
                  ₹{orderValue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="2500"
                max="250000"
                step="2500"
                value={orderValue}
                onChange={e => setOrderValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer' }}
              />
            </div>

            {/* Output Display Card */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '1.25rem',
                background: 'linear-gradient(135deg, rgba(5, 24, 10, 0.9) 0%, rgba(16, 46, 23, 0.9) 100%)',
                border: '1.5px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              <div>
                <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '.12em', display: 'block', marginBottom: '.25rem' }}>
                  Estimated Projected Annual Revenue Impact
                </span>
                <div className="font-syne text-gold-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, lineHeight: 1 }}>
                  {formatCurrency(estimatedRevenueBoost)}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <div className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                    +{estimatedNewLeads.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                    New Leads / Year
                  </div>
                </div>
                <div>
                  <div className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981' }}>
                    +3.2× ROAS
                  </div>
                  <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                    Efficiency Multiplier
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenProposalModal}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem', borderRadius: '.875rem' }}
              >
                Claim Custom Strategy Roadmap <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
