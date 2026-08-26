"use client";

import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Quote, Building } from 'lucide-react';
import { TESTIMONIALS, CLIENT_LOGOS_DATA } from '@/data/people';

export const ClientPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Trusted By 100+ Brands</span>
          <h1 className="display-lg" style={{ maxWidth: '750px' }}>
            Our Valued <span style={{ color: '#1D4224' }}>Clients & Success Stories</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '580px', lineHeight: 1.7 }}>
            Tzar Venture has generated high-intent leads and sales for B2B & D2C clients through bespoke website development, search engine optimization, and performance marketing.
          </p>
        </div>
      </section>

      {/* ── Clients Logo Grid ── */}
      <section style={{ padding: 'clamp(4rem, 6vw, 5rem) 0', background: '#fff', borderBottom: '1px solid #E5E5DC' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow badge-gold">Brands We Partner With</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1.25rem',
          }}>
            {CLIENT_LOGOS_DATA.map((client) => (
              <div key={client.id} className="card" style={{ padding: '1.25rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
                <img
                  src={client.image}
                  alt={client.name}
                  style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    // Fallback to stylized building icon if image fails
                    const parent = (e.currentTarget as HTMLImageElement).parentElement;
                    if (parent) {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      parent.innerHTML = `<span style="font-family: Montserrat; font-weight: 800; font-size: .8rem; color: #1D4224;">Client #${client.id}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-green">Client Reviews</span>
            <h2 className="display-xl">What Our Clients <span style={{ color: '#1D4224' }}>Say About Us</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '.25rem' }}>
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6" style={{ color: '#D4AF37', opacity: .5 }} />
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#4B5563', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>

                <div style={{ borderTop: '1px solid #E5E5DC', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '.875rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(29,66,36,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', overflow: 'hidden', flexShrink: 0 }}>
                    {t.image ? (
                      <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }} />
                    ) : t.avatar}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '.9rem', color: '#0F1510' }}>
                      {t.name}
                    </h4>
                    <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.72rem', color: '#6B7280', fontWeight: 500 }}>
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#1D4224', padding: 'clamp(3rem, 6vw, 5rem) 0', color: '#fff', textAlign: 'center' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#fff' }}>
            Ready to Become Our Next Success Story?
          </h2>
          <Link href="/contact" className="btn-gold">
            Get Your Free Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
