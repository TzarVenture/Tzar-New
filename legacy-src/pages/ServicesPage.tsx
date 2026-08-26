"use client";

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { Code2, Search, Palette, Megaphone, Package, Camera, Globe, BarChart3, Star, FileText, Utensils, Gift, ArrowUpRight, ArrowRight } from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'website-development': <Code2 className="w-6 h-6" />,
  'seo': <Search className="w-6 h-6" />,
  'graphic-designing': <Palette className="w-6 h-6" />,
  'social-media': <Megaphone className="w-6 h-6" />,
  'logo-design': <Star className="w-6 h-6" />,
  'content-marketing': <FileText className="w-6 h-6" />,
  'ppc': <BarChart3 className="w-6 h-6" />,
  'product-packaging': <Package className="w-6 h-6" />,
  'cloud-kitchen': <Utensils className="w-6 h-6" />,
  'corporate-gifting': <Gift className="w-6 h-6" />,
  'outdoor-ads': <Globe className="w-6 h-6" />,
};

export const ServicesPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">End-to-End Digital Solutions</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Our Full Service{' '}
            <span style={{ color: '#1D4224' }}>Verticals</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            Explore all 11 core service offerings designed to scale your brand presence and drive real revenue.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}>
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href || '/services'}
                className="card"
                style={{
                  padding: '2rem',
                  display: 'flex', flexDirection: 'column', gap: '1.125rem',
                  textDecoration: 'none',
                }}
              >
                {/* Icon + badge row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '1rem',
                    background: 'rgba(29,66,36,.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#1D4224', flexShrink: 0,
                  }}>
                    {SERVICE_ICONS[service.id] ?? <Globe className="w-6 h-6" />}
                  </div>
                  {service.badge && (
                    <span className="badge-gold" style={{ fontSize: '.6rem' }}>
                      {service.badge}
                    </span>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
                    fontSize: '1rem', color: '#0F1510', marginBottom: '.5rem',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', lineHeight: 1.7, color: '#6B7280' }}>
                    {service.description}
                  </p>
                </div>

                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  {service.features.slice(0, 3).map((f) => (
                    <span key={f} style={{
                      fontFamily: 'Rubik, sans-serif', fontSize: '.62rem', fontWeight: 600,
                      background: '#F5F5F0', color: '#374151', borderRadius: '6px',
                      padding: '.25rem .625rem', border: '1px solid #E5E5DC',
                    }}>
                      {f}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '.375rem',
                  fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700,
                  color: '#1D4224', textTransform: 'uppercase', letterSpacing: '.08em',
                }}>
                  View Details <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container-site" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="display-md" style={{ maxWidth: '600px' }}>
            Don't See What You Need?{' '}
            <span style={{ color: '#1D4224' }}>Let's Talk.</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '480px', lineHeight: 1.7 }}>
            We build custom digital strategies tailored to your industry, budget, and growth targets.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Custom Proposal <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};
