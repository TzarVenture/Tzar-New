import React, { useState } from 'react';
import { Cpu, Terminal } from 'lucide-react';

const TECH_PILLARS = [
  {
    id: 'frontend',
    title: 'Frontend & WebGL Engineering',
    tag: 'REACT 18 • NEXT.JS • THREE.JS',
    desc: 'We engineer bespoke web applications with sub-second page rendering, zero layout shift, and 60FPS fluid spatial animations.',
    code: `// Tzar Venture Web Application Architecture
import { createHighSpeedApp } from '@tzar/engine';

export default async function FlagshipSite() {
  const perf = await checkCoreWebVitals();
  return (
    <HydratedStage perfScore={perf.score}> // 100/100 Lighthouse
      <SpatialWebGLCanvas fps={60} />
      <ConversionOptimizedForm />
    </HydratedStage>
  );
}`,
    metrics: [
      { label: 'Time to First Byte (TTFB)', val: '< 0.48s' },
      { label: 'Cumulative Layout Shift', val: '0.00' },
      { label: 'Lighthouse Performance', val: '100 / 100' },
    ],
  },
  {
    id: 'seo',
    title: 'SEO Engine & Schema Dominance',
    tag: 'TECHNICAL SEO • SCHEMAS • INTENT CLUSTERS',
    desc: 'Structured data architecture, automated sitemap indexing, and intent keyword clustering engineered to rank #1 on Google search.',
    code: `// Technical SEO & Schema Injection Engine
export const seoSchema = {
  "@context": "https://schema.org",
  "@type": "TechAgency",
  "name": "Tzar Venture",
  "aggregateRating": { "ratingValue": "4.9", "reviewCount": "128" },
  "coreWebVitalsPassed": true
};`,
    metrics: [
      { label: 'Organic Traffic Lift', val: '+180%' },
      { label: 'Google Page 1 Keywords', val: '2,400+' },
      { label: 'Schema Indexing Rate', val: '100%' },
    ],
  },
  {
    id: 'performance',
    title: 'PPC Lead Generation & ROAS',
    tag: 'META ADS • GOOGLE ADS • REVENUE CRO',
    desc: 'Precision targeted acquisition funnels, dynamic ad tracking, and instant CRM API webhook sync for maximum return on ad spend.',
    code: `// Webhook Lead Routing & CRM Sync
export async function handleLeadSubmit(payload: LeadPayload) {
  const verifiedLead = await validateGSTAndPhone(payload);
  await crmWebhook.dispatch(verifiedLead, { priority: 'IMMEDIATE' });
  return { status: 200, responseSLA: '30_MIN' };
}`,
    metrics: [
      { label: 'Average Client ROAS', val: '3.2×' },
      { label: 'Lead Conversion Lift', val: '+250%' },
      { label: 'Response SLA Time', val: '< 30 Min' },
    ],
  },
  {
    id: 'studio',
    title: 'Studio Content & Visual Identity',
    tag: 'COMMERCIAL PHOTOGRAPHY • AD CREATIVE',
    desc: 'In-house studio production for brand identity, product commercial photography, and high-impact commercial video ads.',
    code: `// High-Resolution Asset Pipeline
const mediaPipeline = createAssetStudio({
  outputFormat: 'AVIF / WebP',
  compressionRatio: '92% Lossless',
  colorProfile: 'Display P3 HDR'
});`,
    metrics: [
      { label: 'Asset Compression Ratio', val: '92%' },
      { label: 'Color Accuracy Standard', val: 'P3 HDR' },
      { label: 'Production Turnaround', val: '48 Hours' },
    ],
  },
];

export const TechMatrixStage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const currentPillar = TECH_PILLARS.find(p => p.id === activeTab) || TECH_PILLARS[0];

  return (
    <section
      style={{
        background: '#FAF9F5',
        padding: 'clamp(5rem, 9vw, 8rem) 0',
        position: 'relative',
        borderTop: '1px solid #E2E3DE',
        borderBottom: '1px solid #E2E3DE',
      }}
      className="text-[#1A1C19]"
    >
      <div className="container-site">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.35rem 1rem', borderRadius: '999px', background: 'rgba(29, 66, 36, 0.08)', border: '1px solid rgba(29, 66, 36, 0.15)' }}>
            <Cpu className="w-4 h-4 text-[#052C10]" />
            <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#052C10' }}>
              Engineering Architecture
            </span>
          </div>

          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', fontWeight: 900, color: '#1A1C19', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px', margin: 0 }}>
            Built for High-Stakes <span style={{ color: '#052C10' }} className="italic font-serif">Digital Performance</span>.
          </h2>

          <div className="divider-brand" style={{ margin: '.5rem 0' }} />

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#424941', maxWidth: '540px', margin: 0 }}>
            Explore the technology stack and engineering protocols behind our web builds and growth campaigns.
          </p>
        </div>

        {/* Capability Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {TECH_PILLARS.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              style={{
                padding: '.8rem 1.5rem',
                borderRadius: '999px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: '.85rem',
                letterSpacing: '.02em',
                border: activeTab === p.id ? '2px solid #052C10' : '1px solid #E2E3DE',
                background: activeTab === p.id ? '#052C10' : '#FFFFFF',
                color: activeTab === p.id ? '#FFFFFF' : '#1A1C19',
                boxShadow: activeTab === p.id ? '0 8px 24px rgba(29, 66, 36, 0.2)' : 'none',
                transition: 'all .25s ease',
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Tab Content Stage */}
        <div
          className="max-lg:grid-cols-1 max-lg:p-6"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            padding: '3rem',
            borderRadius: '1.5rem',
            alignItems: 'center',
            background: '#FFFFFF',
            border: '1px solid #E2E3DE',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* LEFT: Pillar Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.72rem', fontWeight: 700, color: '#052C10', background: 'rgba(29, 66, 36, 0.08)', padding: '.3rem .85rem', borderRadius: '999px', width: 'fit-content', letterSpacing: '.12em', border: '1px solid rgba(29, 66, 36, 0.15)' }}>
              {currentPillar.tag}
            </span>

            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.85rem', color: '#1A1C19', margin: 0, lineHeight: 1.2 }}>
              {currentPillar.title}
            </h3>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#424941', lineHeight: 1.7, margin: 0 }}>
              {currentPillar.desc}
            </p>

            {/* Performance Benchmark Indicators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '.5rem' }}>
              {currentPillar.metrics.map(m => (
                <div key={m.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.75rem 1.25rem', borderRadius: '.875rem', background: '#FAF9F5', border: '1px solid #E2E3DE' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', fontWeight: 600, color: '#1A1C19' }}>{m.label}</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1rem', color: '#052C10' }}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Live Code Snippet Terminal (Forest Green Theme) */}
          <div
            style={{
              background: '#052C10',
              borderRadius: '1.25rem',
              border: '1px solid #D4AF37',
              padding: '1.75rem',
              boxShadow: '0 20px 40px rgba(5, 44, 16, 0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Terminal Top Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '.75rem' }}>
              <div style={{ display: 'flex', gap: '.4rem' }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#10B981' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontFamily: 'monospace', fontSize: '.72rem', color: '#FED65B' }}>
                <Terminal className="w-3.5 h-3.5" />
                <span>tzar-architecture-engine.ts</span>
              </div>
            </div>

            {/* Code Snippet Block */}
            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '.82rem', color: '#FFFFFF', lineHeight: 1.65, overflowX: 'auto' }}>
              <code>{currentPillar.code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
