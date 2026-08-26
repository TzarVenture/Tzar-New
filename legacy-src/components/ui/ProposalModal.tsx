"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY } from '../../data/company';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    objective: 'Website Engineering & WebGL',
    budget: '₹1.5L - ₹3.0L',
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (_) {}
    setLoading(false);
    setStep(4);
  };

  const OBJECTIVES = [
    { label: 'Website Engineering & WebGL Apps', desc: 'Custom high-performance web applications' },
    { label: 'SEO & Organic Growth Engine', desc: 'Top-3 rankings & intent search traffic' },
    { label: 'PPC Lead Generation & ROAS', desc: 'High-converting paid ad campaigns' },
    { label: 'Brand & Product Packaging', desc: 'Luxury brand identity & box packaging' },
    { label: 'Studio Photography & Content', desc: 'Production-grade product videos & shoots' },
  ];

  const BUDGETS = [
    '₹50K - ₹1.5L / month',
    '₹1.5L - ₹3.0L / month',
    '₹3.0L - ₹5.0L / month',
    '₹5.0L+ Enterprise',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'rgba(5, 24, 10, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      {/* Slide-Over Drawer Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          height: '100%',
          background: 'linear-gradient(180deg, #0B2912 0%, #05180A 100%)',
          borderLeft: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '.75rem',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D4AF37',
              }}
            >
              <Sparkles style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <h3 className="font-syne" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', margin: 0 }}>
                Instant Proposal Portal
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.75rem', color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                Get a tailored growth proposal within 30 minutes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(212, 175, 55, 0.2)';
              (e.currentTarget as HTMLElement).style.color = '#D4AF37';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.08)';
              (e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 0.7)';
            }}
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background: i <= step ? '#D4AF37' : 'rgba(255, 255, 255, 0.1)',
                  transition: 'background .3s',
                }}
              />
            ))}
          </div>
        )}

        {/* Body Content */}
        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span className="eyebrow" style={{ color: '#D4AF37', marginBottom: '.35rem', display: 'block' }}>
                  STEP 01 OF 03
                </span>
                <h4 className="font-syne" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  What is your primary growth objective?
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {OBJECTIVES.map(obj => (
                  <div
                    key={obj.label}
                    onClick={() => setFormData({ ...formData, objective: obj.label })}
                    style={{
                      padding: '1.1rem 1.25rem',
                      borderRadius: '1rem',
                      background: formData.objective === obj.label ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1.5px solid ${formData.objective === obj.label ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      cursor: 'pointer',
                      transition: 'all .2s',
                    }}
                  >
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '.92rem', color: formData.objective === obj.label ? '#D4AF37' : '#fff', marginBottom: '.2rem' }}>
                      {obj.label}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '.78rem', color: 'rgba(255, 255, 255, 0.55)' }}>
                      {obj.desc}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
              >
                Continue to Budget <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span className="eyebrow" style={{ color: '#D4AF37', marginBottom: '.35rem', display: 'block' }}>
                  STEP 02 OF 03
                </span>
                <h4 className="font-syne" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  Select your targeted monthly budget range
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
                {BUDGETS.map(b => (
                  <div
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: b })}
                    style={{
                      padding: '1.25rem 1rem',
                      borderRadius: '1rem',
                      background: formData.budget === b ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1.5px solid ${formData.budget === b ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '.85rem',
                      color: formData.budget === b ? '#D4AF37' : '#fff',
                      transition: 'all .2s',
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  onClick={() => setStep(1)}
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="btn-gold"
                  style={{ flex: 2, justifyContent: 'center' }}
                >
                  Enter Business Details <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <span className="eyebrow" style={{ color: '#D4AF37', marginBottom: '.35rem', display: 'block' }}>
                  STEP 03 OF 03
                </span>
                <h4 className="font-syne" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  Where should we send your custom proposal?
                </h4>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: '.35rem', textTransform: 'uppercase', letterSpacing: '.07em' }}>
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '.85rem 1rem', borderRadius: '.75rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '.88rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: '.35rem', textTransform: 'uppercase', letterSpacing: '.07em' }}>
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '.85rem 1rem', borderRadius: '.75rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '.88rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: '.35rem', textTransform: 'uppercase', letterSpacing: '.07em' }}>
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '.85rem 1rem', borderRadius: '.75rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '.88rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: '.35rem', textTransform: 'uppercase', letterSpacing: '.07em' }}>
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '.85rem 1rem', borderRadius: '.75rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '.88rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 700, color: 'rgba(255,255,255,.7)', marginBottom: '.35rem', textTransform: 'uppercase', letterSpacing: '.07em' }}>
                    City *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Mumbai, Delhi..."
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '.85rem 1rem', borderRadius: '.75rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '.88rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold"
                  style={{ flex: 2, justifyContent: 'center' }}
                >
                  {loading ? 'Generating Roadmap...' : 'Request Custom Proposal'} <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', fontFamily: 'Inter, sans-serif', fontSize: '.72rem', color: 'rgba(255,255,255,.45)', marginTop: '.5rem' }}>
                <ShieldCheck style={{ width: 14, height: 14, color: '#D4AF37' }} /> Strict NDA & Instant 30-Minute Turnaround
              </div>
            </form>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'rgba(16, 46, 23, 0.8)',
                  border: '2px solid #D4AF37',
                  color: '#D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
                }}
              >
                <CheckCircle2 style={{ width: 36, height: 36 }} />
              </div>

              <div>
                <span className="eyebrow" style={{ color: '#D4AF37', marginBottom: '.5rem', display: 'block' }}>
                  PROPOSAL REQUEST CONFIRMED
                </span>
                <h4 className="font-syne" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '.5rem' }}>
                  Your Customized Growth Roadmap is Being Prepared!
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
                  Our senior growth strategist is reviewing your request for <strong style={{ color: '#fff' }}>{formData.objective}</strong>. You will receive your tailored proposal and audit within 30 minutes.
                </p>
              </div>

              <div style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '.75rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontFamily: 'Montserrat, sans-serif', fontSize: '.8rem', fontWeight: 700, color: '#fff' }}>
                  <Clock style={{ width: 16, height: 16, color: '#D4AF37' }} /> Need Instant Strategy Right Now?
                </div>
                <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                  <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '.75rem', color: '#D4AF37', borderColor: 'rgba(212,175,55,.4)' }}>
                    <Phone style={{ width: 14, height: 14 }} /> Call Direct
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '.75rem', color: '#fff', borderColor: 'rgba(255,255,255,.2)' }}>
                    <Mail style={{ width: 14, height: 14 }} /> Email Us
                  </a>
                </div>
              </div>

              <button onClick={onClose} className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                Return to Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
