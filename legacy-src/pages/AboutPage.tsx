"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Award, Users, Target, Zap } from 'lucide-react';
import { COMPANY } from '@/data/company';

const PILLARS = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Innovation & Speed',
    body: 'Leveraging React, Next.js, and Vite for blazing-fast page rendering and smooth UX.',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Data-Driven Results',
    body: 'Every campaign is measured against real conversion metrics, ROAS goals, and live rank tracking.',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Strict Transparency',
    body: 'No hidden fees or vanity metrics — clean reporting, direct contact, and dedicated account management.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'End-to-End Team',
    body: 'Developers, SEO strategists, graphic designers, and performance marketers — all under one roof.',
  },
];

const STATS = [
  { value: '100+', label: 'Satisfied Clients', color: '#1D4224' },
  { value: '95%', label: 'Retention Rate', color: '#D4AF37' },
  { value: '5+', label: 'Years Active', color: '#1D4224' },
  { value: '40+', label: 'Team Members', color: '#D4AF37' },
];

export const AboutPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '5rem', background: '#FAF9F5' }}>

      {/* ── Page Hero Banner ── */}
      <section
        className="bg-grid"
        style={{
          borderBottom: '1px solid #E5E5DC',
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          textAlign: 'center',
        }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="pill-green">About Tzar Venture</span>
          <h1 className="display-lg" style={{ maxWidth: '680px' }}>
            India's Premier Full-Service{' '}
            <span style={{ color: '#1D4224' }}>Digital Agency</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            We combine cutting-edge technology, creative storytelling, and data-backed performance marketing to engineer market leaders.
          </p>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E5E5DC' }}>
        <div className="container-site" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: '#E5E5DC',
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{
              background: '#fff', padding: '2rem 1.5rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '.375rem',
            }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '2.25rem', color: s.color, lineHeight: 1 }}>
                {s.value}
              </span>
              <span style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 600, fontSize: '.68rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }}
               className="lg:grid-cols-2">
            {/* Left Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span className="pill-green">Our Story</span>
              <h2 className="display-md">
                Empowering Brands Through{' '}
                <span style={{ color: '#1D4224' }}>High-Tech Digital Solutions</span>
              </h2>
              <div className="section-divider" />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.75, color: '#4B5563' }}>
                Founded with a vision to replace outdated agency templates with high-performance web applications and high-ROI marketing funnels, Tzar Venture has grown into a trusted partner for over 100+ brands across India and internationally.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.75, color: '#4B5563' }}>
                From our Mumbai headquarters, our team of developers, SEO strategists, graphic designers, and performance marketers deliver end-to-end digital excellence across every vertical.
              </p>
              <Link href="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Work With Us <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
              </Link>
            </div>

            {/* Right Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PILLARS.map((p) => (
                <div key={p.title} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '.875rem', flexShrink: 0,
                    background: 'rgba(29,66,36,.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#1D4224',
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '.9rem', color: '#0F1510', marginBottom: '.35rem' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', lineHeight: 1.65, color: '#6B7280' }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: '#1D4224', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container-site" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#fff', lineHeight: 1.2 }}>
            Ready to Scale Your Business With Tzar?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,.75)', maxWidth: '500px', lineHeight: 1.7 }}>
            Get a custom proposal and free technical audit within 24 hours. No commitment required.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            background: '#D4AF37', color: '#0B2912',
            fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.75rem',
            letterSpacing: '.1em', textTransform: 'uppercase',
            padding: '1rem 2.5rem', borderRadius: '.875rem', textDecoration: 'none',
          }}>
            Get a Free Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
