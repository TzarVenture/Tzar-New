"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, ArrowRight, CheckCircle2, Send, Zap, Users, Sparkles } from 'lucide-react';
import { COMPANY } from '@/data/company';

const OPEN_POSITIONS = [
  {
    title: 'Senior Full-Stack Developer (React / Next.js)',
    type: 'Full-Time',
    location: 'Mumbai (In-Office / Hybrid)',
    experience: '2-4 Years',
    desc: 'Architecting fast, high-conversion web applications, custom Shopify storefronts, and REST APIs.',
  },
  {
    title: 'SEO Specialist & Organic Growth Strategist',
    type: 'Full-Time',
    location: 'Mumbai',
    experience: '1-3 Years',
    desc: 'Managing technical SEO audits, keyword research, link building, and local map pack rankings for B2B & D2C clients.',
  },
  {
    title: 'Senior Graphic & Brand Identity Designer',
    type: 'Full-Time',
    location: 'Mumbai',
    experience: '2-5 Years',
    desc: 'Crafting brand kits, 3D packaging dielines, social media carousels, and UI/UX wireframes.',
  },
  {
    title: 'Social Media & Content Marketing Manager',
    type: 'Full-Time',
    location: 'Mumbai',
    experience: '1-3 Years',
    desc: 'Creating Instagram reels, video scripts, content calendars, and running influencer outreach campaigns.',
  },
];

export const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'Senior Full-Stack Developer', portfolio: '', resumeNote: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Career Application' }),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Hero Banner ── */}
      <section
        className="bg-dots"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3.5rem, 7vw, 6rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-dark">Careers At Tzar Venture</span>
          <h1 className="display-hero" style={{ maxWidth: '800px' }}>
            WE ARE HIRING — <span style={{ color: '#1D4224' }}>JOIN OUR TEAM</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#4B5563', maxWidth: '620px', lineHeight: 1.75 }}>
            We’re always looking for motivated, creative, and ambitious people to join our digital marketing and tech engineering studio in Mumbai.
          </p>

          <a href="#open-positions" className="btn-primary" style={{ marginTop: '.5rem' }}>
            View Open Roles <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
          </a>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderBottom: '1px solid #E5E5DC' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-green">Work Culture</span>
            <h2 className="display-xl">Why Build Your Career <span style={{ color: '#1D4224' }}>At Tzar?</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Real Ownership', desc: 'Work directly on high-traffic client platforms, national brands, and creative media shoots.' },
              { title: 'Rapid Growth', desc: 'Accelerated promotion paths, skill development workshops, and direct mentorship.' },
              { title: 'Modern Tech Stack', desc: 'Develop with React 19, Next.js 15, TypeScript, Tailwind CSS, and AI-assisted workflows.' },
              { title: 'Vibrant Environment', desc: 'Collaborative, supportive team atmosphere in our Mumbai office with top-tier equipment.' },
            ].map((b, i) => (
              <div key={i} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: '1rem', background: 'rgba(29,66,36,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D4224' }}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0F1510' }}>{b.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#6B7280', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions List ── */}
      <section id="open-positions" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site" style={{ maxWidth: '950px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-gold">Current Vacancies</span>
            <h2 className="display-xl">Explore Open <span style={{ color: '#1D4224' }}>Positions</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {OPEN_POSITIONS.map((pos, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
                    <span className="badge-green" style={{ fontSize: '.6rem' }}>{pos.type}</span>
                    <span className="badge-gold" style={{ fontSize: '.6rem' }}>{pos.experience}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#0F1510', marginBottom: '.5rem' }}>
                    {pos.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#6B7280', lineHeight: 1.6 }}>
                    {pos.desc}
                  </p>
                </div>
                <a href="#apply-form" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Apply Now <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply-form" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderTop: '1px solid #E5E5DC' }}>
        <div className="container-site" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="icon-circle-green"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0F1510' }}>
                  Application Received!
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#6B7280' }}>
                  Our HR team will review your application and contact you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span className="badge-green" style={{ marginBottom: '.5rem' }}>Quick Application</span>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.35rem', color: '#0F1510' }}>
                    Apply For a Role at Tzar Venture
                  </h3>
                  <div className="section-divider" style={{ marginTop: '.5rem' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="max-sm:grid-cols-1">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Full Name</label>
                    <input className="field" type="text" required placeholder="Jane Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Email Address</label>
                    <input className="field" type="email" required placeholder="jane@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="max-sm:grid-cols-1">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Phone Number</label>
                    <input className="field" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Position Applied For</label>
                    <select className="field" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}>
                      {OPEN_POSITIONS.map(p => (
                        <option key={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Portfolio / LinkedIn URL</label>
                  <input className="field" type="url" placeholder="https://linkedin.com/in/yourname or github" value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })} />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Brief Introduction / Experience Summary</label>
                  <textarea className="field" rows={4} placeholder="Tell us about your background and why you want to join Tzar Venture..." value={formData.resumeNote} onChange={e => setFormData({ ...formData, resumeNote: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
                  <Send className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  {loading ? 'Submitting Application…' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
