"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ArrowUpRight, Zap, ShieldCheck, Star, Phone, MessageSquare, Send } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { COMPANY } from '@/data/company';

interface Props {
  slug?: string;
}

export const ServiceDetailPage: React.FC<Props> = ({ slug: propSlug }) => {
  const currentSlug = propSlug || 'website-development-services';

  const service = SERVICES.find(s => s.slug === currentSlug || s.id === currentSlug || s.href === `/${currentSlug}`) || SERVICES[0];

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: service.title }),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Hero Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3.5rem, 7vw, 6rem) 0', position: 'relative' }}
      >
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '4rem', alignItems: 'center' }} className="max-md:grid-cols-1 max-md:gap-10">

            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                <span className="badge-green">{service.badge}</span>
                {service.results && (
                  <span className="badge-gold">Proven Results: {service.results}</span>
                )}
              </div>

              <h1 className="display-lg">
                {service.title}
              </h1>

              <div className="section-divider" />

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#374151', lineHeight: 1.7, fontWeight: 500 }}>
                {service.subtitle}
              </p>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.92rem', color: '#6B7280', lineHeight: 1.75 }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '.5rem' }}>
                <a href="#inquiry-form" className="btn-primary">
                  Request {service.title} Quote <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </a>
                <a href={`tel:${COMPANY.phone.replace(/\s+/g,'')}`} className="btn-outline">
                  <Phone className="w-4 h-4" /> Call {COMPANY.phone}
                </a>
              </div>
            </div>

            {/* Right Card — Quick Highlight */}
            <div className="card" style={{ padding: '2.25rem', background: '#fff', borderRadius: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#0F1510', marginBottom: '1.25rem' }}>
                Key Service Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {service.features.slice(0, 5).map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#374151', lineHeight: 1.5 }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#1D4224' }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ background: '#FAF9F5', padding: '1rem', borderRadius: '1rem', border: '1px solid #E5E5DC', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <ShieldCheck className="w-6 h-6 shrink-0" style={{ color: '#D4AF37' }} />
                <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.75rem', fontWeight: 600, color: '#374151' }}>
                  Includes 1 Year Free Support & Dedicated Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Checklist & Benefits Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="max-md:grid-cols-1">

            {/* What's Included */}
            <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span className="badge-green">Scope of Work</span>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510' }}>
                  What's Included
                </h3>
              </div>
              <div className="section-divider" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                {service.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', background: '#FAFAF8', padding: '1rem 1.25rem', borderRadius: '1rem', border: '1px solid #EBEBEB' }}>
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#1D4224' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#374151', fontWeight: 500, lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span className="badge-gold">Why Choose This</span>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510' }}>
                  Business Benefits
                </h3>
              </div>
              <div className="section-divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {service.benefits.map((b, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '.875rem', padding: '1.125rem', borderRadius: '1rem', background: 'rgba(29,66,36,.04)', border: '1px solid rgba(29,66,36,.1)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1D4224', color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.75rem', flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#374151', lineHeight: 1.6, fontWeight: 500 }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Inquiry Form ── */}
      <section id="inquiry-form" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderTop: '1px solid #E5E5DC' }}>
        <div className="container-site" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="icon-circle-green"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0F1510' }}>
                  Inquiry Received for {service.title}!
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#6B7280' }}>
                  Our technical lead will contact you within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ marginBottom: '.5rem' }}>
                  <span className="badge-green" style={{ marginBottom: '.5rem' }}>Direct Inquiry</span>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.35rem', color: '#0F1510' }}>
                    Request Proposal for {service.title}
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
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>City</label>
                    <input className="field" type="text" required placeholder="Mumbai" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Project Details / Requirements</label>
                  <textarea className="field" rows={4} placeholder={`Tell us about your requirements for ${service.title}...`} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
                  <Send className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  {loading ? 'Sending Request…' : `Get Proposal for ${service.title}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
