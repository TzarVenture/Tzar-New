"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Megaphone, ArrowRight, CheckCircle2, Building, ShieldCheck, MapPin, Send } from 'lucide-react';
import { COMPANY } from '@/data/company';

const OUTDOOR_SERVICES = [
  { title: 'HOARDING ADVERTISEMENT', img: '/assets/images/resources/Ads-service/a1.png', desc: 'Large format billboards along major highways and arterial roads across Mumbai.' },
  { title: 'BUS PANEL BRANDING', img: '/assets/images/resources/Ads-service/a2.png', desc: 'BEST bus side and back panel wraps covering high-density commuter routes.' },
  { title: 'BUS SHELTER ADVERTISING', img: '/assets/images/resources/Ads-service/a3.png', desc: 'Illuminated bus stop shelters capturing pedestrian and street traffic.' },
  { title: 'RADIO ADVERTISING', img: '/assets/images/resources/Ads-service/a4.png', desc: 'Prime time audio spots on Red FM, Radio Mirchi, and Big FM.' },
  { title: 'CINEMA ADVERTISING', img: '/assets/images/resources/Ads-service/a5.png', desc: 'On-screen slides and video ads across PVR, INOX, and Cinepolis multiplexes.' },
  { title: 'RICKSHAW ADVERTISING', img: '/assets/images/resources/Ads-service/a6.png', desc: 'Hyper-local auto rickshaw hood and back panel branding.' },
  { title: 'CAB BRANDING', img: '/assets/images/resources/Ads-service/a7.png', desc: 'Ola, Uber, and radio taxi wraps for high-status brand visibility.' },
  { title: 'POLE KIOSK BRANDING', img: '/assets/images/resources/Ads-service/a8.png', desc: 'Street light pole kiosks lining major commercial streets.' },
  { title: 'RAILWAY STATION BRANDING', img: '/assets/images/resources/Ads-service/a9.png', desc: 'Western & Central railway platform hoardings and bridge banners.' },
  { title: 'TRAIN BRANDING (EXT & INT)', img: '/assets/images/resources/Ads-service/a10.png', desc: 'Mumbai local train exterior vinyl wraps and interior poster ads.' },
  { title: 'MALL ADVERTISING', img: '/assets/images/resources/Ads-service/a11.png', desc: 'Atrium banners, digital screens, and drop downs in premier Mumbai malls.' },
  { title: 'AIRPORT & INFLIGHT BRANDING', img: '/assets/images/resources/Ads-service/a12.png', desc: 'Terminal baggage belts, digital screens, and inflight magazine branding.' },
];

export const OutdoorAdsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', format: 'Hoarding Advertisement' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Outdoor Advertising' }),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Standardized Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">OOH Media & Transit Campaigns</span>
          <h1 className="display-lg" style={{ maxWidth: '750px' }}>
            We Don't Sell Products — <span style={{ color: '#1D4224' }}>WE MAKE ICONIC BRANDS</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '580px', lineHeight: 1.7 }}>
            High-impact outdoor advertising campaigns across Mumbai: Billboards, Local Trains, Metro Branding, Bus Shelters, Cinemas, and Airport Media.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            <a href="#quote-form" className="btn-primary">
              Request Media Plan <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
            </a>
            <a href={`tel:${COMPANY.phone.replace(/\s+/g,'')}`} className="btn-outline">
              Call OOH Media Team: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── 12 Outdoor Services Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderBottom: '1px solid #E5E5DC' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-green">Media Formats</span>
            <h2 className="display-xl">Outdoor Advertising <span style={{ color: '#1D4224' }}>Services</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}>
            {OUTDOOR_SERVICES.map((s, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center', alignItems: 'center' }}>
                <div style={{
                  width: 84, height: 84, borderRadius: '1rem',
                  background: 'rgba(29,66,36,.06)', border: '1px solid rgba(29,66,36,.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '.75rem',
                }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }
                    }}
                  />
                </div>

                <div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '.95rem', color: '#0F1510', lineHeight: 1.35, marginBottom: '.5rem' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', color: '#6B7280', lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>

                <a href="#quote-form" style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem', fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.7rem', color: '#1D4224', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 'auto', textDecoration: 'none' }}>
                  Check Availability <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote-form" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="icon-circle-green"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0F1510' }}>
                  Outdoor Campaign Inquiry Received!
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#6B7280' }}>
                  Our OOH media manager will contact you with availability and rates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span className="badge-green" style={{ marginBottom: '.5rem' }}>Media Planning</span>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.35rem', color: '#0F1510' }}>
                    Request Outdoor Media Rates & Availability
                  </h3>
                  <div className="section-divider" style={{ marginTop: '.5rem' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="max-sm:grid-cols-1">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Full Name</label>
                    <input className="field" type="text" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Email Address</label>
                    <input className="field" type="email" required placeholder="john@company.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="max-sm:grid-cols-1">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Phone Number</label>
                    <input className="field" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Format Required</label>
                    <select className="field" value={formData.format} onChange={e => setFormData({ ...formData, format: e.target.value })}>
                      {OUTDOOR_SERVICES.map(s => (
                        <option key={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
                  <Send className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  {loading ? 'Sending Request…' : 'Get OOH Media Proposal'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
