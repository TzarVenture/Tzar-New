"use client";

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { WEB_PACKAGES } from '@/data/people';

export const WebPackagesPage: React.FC = () => {
  const packages = [
    { key: 'wordpress', data: WEB_PACKAGES.wordpress, popular: false },
    { key: 'shopify', data: WEB_PACKAGES.shopify, popular: true },
    { key: 'nextjs', data: WEB_PACKAGES.nextjs, popular: false },
  ];

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Transparent Web Development Packages</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            High-Tech <span style={{ color: '#1D4224' }}>Web Packages</span> & Pricing
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            Choose the ideal website package engineered for speed, mobile responsiveness, and high conversion rates.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {packages.map(({ key, data, popular }) => (
              <div
                key={key}
                className="card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: popular ? '2px solid #1D4224' : '1px solid #EBEBEB',
                  boxShadow: popular ? '0 20px 48px rgba(29,66,36,.12)' : '0 2px 8px rgba(0,0,0,.04)',
                }}
              >
                {popular && (
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    background: '#1D4224', color: '#D4AF37',
                    fontFamily: 'Rubik, sans-serif', fontWeight: 800, fontSize: '.65rem',
                    textTransform: 'uppercase', letterSpacing: '.12em',
                    padding: '.35rem 1.25rem', borderRadius: '0 1.25rem 0 1rem',
                  }}>
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.35rem' }}>
                    {data.title}
                  </h3>
                  <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.75rem', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '1.5rem' }}>
                    {data.subtitle}
                  </p>

                  <div style={{ borderBottom: '1px solid #E5E5DC', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#1D4224', lineHeight: 1 }}>
                      {data.price}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '.75rem', color: '#6B7280', marginTop: '.35rem' }}>
                      {data.priceNote}
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                    {data.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontFamily: 'Inter, sans-serif', fontSize: '.82rem', color: '#374151', lineHeight: 1.5 }}>
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" style={{ color: '#1D4224' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={popular ? 'btn-primary' : 'btn-outline'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Select Package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
