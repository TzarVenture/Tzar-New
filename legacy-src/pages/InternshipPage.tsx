"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, CheckCircle2, Send, Code, Search, Palette, Megaphone } from 'lucide-react';
import { COMPANY } from '@/data/company';

const INTERNSHIP_DOMAINS = [
  { icon: <Code className="w-6 h-6" />, title: 'Web Development & Engineering', desc: 'Build modern React, Next.js, and TypeScript web applications with live client deployment.' },
  { icon: <Search className="w-6 h-6" />, title: 'SEO & Growth Marketing', desc: 'Learn technical SEO audits, keyword research, on-page optimization, and analytics reporting.' },
  { icon: <Palette className="w-6 h-6" />, title: 'Graphic & Packaging Design', desc: 'Design real brand identity assets, packaging 3D mockups, and social media creative carousels.' },
  { icon: <Megaphone className="w-6 h-6" />, title: 'Social Media & Content Strategy', desc: 'Produce Instagram reels, write SEO blog posts, and assist in influencer marketing campaigns.' },
];

export const InternshipPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', college: '', domain: 'Web Development & Engineering', note: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Internship Application' }),
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
          <span className="badge-dark">Unlock Your Potential</span>
          <h1 className="display-hero" style={{ maxWidth: '820px' }}>
            Internships At <span style={{ color: '#1D4224' }}>Tzar Venture</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#4B5563', maxWidth: '640px', lineHeight: 1.75 }}>
            We are always on the lookout for raw talent! At Tzar, we promise you that you WON'T be just answering phone calls or making PPTs — you will gain real-world client experience.
          </p>

          <a href="#intern-apply" className="btn-primary" style={{ marginTop: '.5rem' }}>
            Apply for Internship <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
          </a>
        </div>
      </section>

      {/* ── Program Overview ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderBottom: '1px solid #E5E5DC' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(29,66,36,.05) 0%, rgba(212,175,55,.08) 100%)' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '1rem' }}>
              Designed For Real Career Transition
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.92rem', color: '#374151', lineHeight: 1.8 }}>
              Our internship program has been specifically designed for the development of practical skills that will assist you in transitioning into a full-time digital career. Whether you are interested in software engineering, digital marketing, graphic design, or content creation, you will work on live client projects under direct mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* ── Domains Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-green">Internship Tracks</span>
            <h2 className="display-xl">Choose Your <span style={{ color: '#1D4224' }}>Domain</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {INTERNSHIP_DOMAINS.map((d, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '1rem', background: 'rgba(29,66,36,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D4224' }}>
                  {d.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#0F1510' }}>
                  {d.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#6B7280', lineHeight: 1.65 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="intern-apply" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderTop: '1px solid #E5E5DC' }}>
        <div className="container-site" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="icon-circle-green"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0F1510' }}>
                  Internship Application Submitted!
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#6B7280' }}>
                  Our team will review your details and contact you for an interview.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span className="badge-green" style={{ marginBottom: '.5rem' }}>Student / Fresh Graduate</span>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.35rem', color: '#0F1510' }}>
                    Apply For Tzar Venture Internship
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
                    <input className="field" type="email" required placeholder="john@student.edu" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="max-sm:grid-cols-1">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Phone Number</label>
                    <input className="field" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>College / University</label>
                    <input className="field" type="text" required placeholder="Mumbai University" value={formData.college} onChange={e => setFormData({ ...formData, college: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Preferred Domain</label>
                  <select className="field" value={formData.domain} onChange={e => setFormData({ ...formData, domain: e.target.value })}>
                    {INTERNSHIP_DOMAINS.map(d => (
                      <option key={d.title}>{d.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 700, color: '#374151', marginBottom: '.35rem', textTransform: 'uppercase' }}>Why do you want to intern at Tzar Venture?</label>
                  <textarea className="field" rows={4} placeholder="Tell us about your interests, projects, or github/portfolio link..." value={formData.note} onChange={e => setFormData({ ...formData, note: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
                  <Send className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  {loading ? 'Submitting Application…' : 'Submit Internship Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
