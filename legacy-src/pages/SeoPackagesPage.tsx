"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const STANDARD_SEO = [
  {
    name: 'Starter SEO Plan',
    price: '₹15,000',
    period: '/ month',
    popular: false,
    features: [
      'Up to 10 Target Keywords',
      'On-Page Optimization',
      'Technical SEO Audit & Fixes',
      'Google Search Console Setup',
      'Google Analytics Setup',
      'Monthly Ranking & Traffic Report',
      'Basic Link Building (5 links/mo)',
    ],
  },
  {
    name: 'Growth SEO Plan',
    price: '₹30,000',
    period: '/ month',
    popular: true,
    features: [
      'Up to 25 Target Keywords',
      'Complete On-Page & Off-Page SEO',
      'Content Creation (4 Articles/mo)',
      'Local SEO & GMB Optimization',
      'High DA Link Building (15 links/mo)',
      'Core Web Vitals Optimization',
      'Bi-Weekly Reporting & Dedicated Manager',
    ],
  },
  {
    name: 'Enterprise SEO Plan',
    price: '₹60,000',
    period: '/ month',
    popular: false,
    features: [
      'Unlimited Target Keywords',
      'National & International SEO',
      'E-Commerce SEO (Shopify / Woo)',
      'Content Creation (10 Articles/mo)',
      'High Authority Digital PR Backlinks',
      'Competitor Keyword Hijacking',
      'Weekly Strategy Calls & Custom Dashboard',
    ],
  },
];

const LOCAL_SEO = [
  {
    name: 'Single Location GMB',
    price: '₹10,000',
    period: '/ month',
    popular: false,
    features: [
      '1 Google Business Profile',
      'Category & Listing Optimization',
      'Local Citation Building (25 directories)',
      'Review Management Setup',
      'Weekly GMB Posts & Photo Updates',
      'Local Map Pack Rank Tracking',
    ],
  },
  {
    name: 'Multi-Location Local SEO',
    price: '₹22,000',
    period: '/ month',
    popular: true,
    features: [
      'Up to 3 GMB Profiles',
      'Local Map Pack Dominance Strategy',
      'Local Citation Building (60+ directories)',
      'Geo-Targeted Landing Page SEO',
      'Review Acquisition & Management',
      'Competitor Local Audit & Overhaul',
    ],
  },
  {
    name: 'Franchise / Pan-India Local',
    price: '₹45,000',
    period: '/ month',
    popular: false,
    features: [
      '5+ GMB Profiles / Pan-India Cities',
      'Hyper-Local Content Strategy',
      'Custom Schema Markup & Map Integration',
      'High-Authority Local Backlinks',
      'Call Tracking & Lead Attribution',
      'Dedicated Account Manager',
    ],
  },
];

export const SeoPackagesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'local'>('standard');
  const activePackages = activeTab === 'standard' ? STANDARD_SEO : LOCAL_SEO;

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Organic Ranking & Search Dominance</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Data-Backed <span style={{ color: '#1D4224' }}>SEO Packages</span> & Pricing
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            Drive high-intent Google search traffic and convert prospects into loyal customers.
          </p>

          {/* Tab Switcher */}
          <div style={{ display: 'inline-flex', padding: '4px', borderRadius: '1rem', background: '#E5E5DC', marginTop: '1rem' }}>
            <button
              onClick={() => setActiveTab('standard')}
              style={{
                padding: '.625rem 1.5rem', borderRadius: '.75rem', border: 'none',
                fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.75rem',
                textTransform: 'uppercase', letterSpacing: '.06em', cursor: 'pointer',
                background: activeTab === 'standard' ? '#1D4224' : 'transparent',
                color: activeTab === 'standard' ? '#fff' : '#4B5563',
                transition: 'all .2s',
              }}
            >
              Standard & E-Com SEO
            </button>
            <button
              onClick={() => setActiveTab('local')}
              style={{
                padding: '.625rem 1.5rem', borderRadius: '.75rem', border: 'none',
                fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.75rem',
                textTransform: 'uppercase', letterSpacing: '.06em', cursor: 'pointer',
                background: activeTab === 'local' ? '#1D4224' : 'transparent',
                color: activeTab === 'local' ? '#fff' : '#4B5563',
                transition: 'all .2s',
              }}
            >
              Local SEO & GMB
            </button>
          </div>
        </div>
      </section>

      {/* ── Packages Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {activePackages.map((pkg, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: pkg.popular ? '2px solid #1D4224' : '1px solid #EBEBEB',
                  boxShadow: pkg.popular ? '0 20px 48px rgba(29,66,36,.12)' : '0 2px 8px rgba(0,0,0,.04)',
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    background: '#1D4224', color: '#D4AF37',
                    fontFamily: 'Rubik, sans-serif', fontWeight: 800, fontSize: '.65rem',
                    textTransform: 'uppercase', letterSpacing: '.12em',
                    padding: '.35rem 1.25rem', borderRadius: '0 1.25rem 0 1rem',
                  }}>
                    Popular Choice
                  </div>
                )}

                <div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '1.25rem' }}>
                    {pkg.name}
                  </h3>

                  <div style={{ borderBottom: '1px solid #E5E5DC', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#1D4224', lineHeight: 1 }}>
                      {pkg.price} <span style={{ fontSize: '.85rem', fontWeight: 500, color: '#6B7280' }}>{pkg.period}</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontFamily: 'Inter, sans-serif', fontSize: '.82rem', color: '#374151', lineHeight: 1.5 }}>
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#1D4224' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={pkg.popular ? 'btn-primary' : 'btn-outline'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Inquire For SEO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
