"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, Loader2 } from 'lucide-react';
import { COMPANY } from '@/data/company';

const CONTACT_INFO = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Corporate Address',
    value: COMPANY.address.full,
    color: '#1D4224',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Direct Phone',
    value: COMPANY.phone,
    color: '#D4AF37',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email Support',
    value: COMPANY.email,
    color: '#1D4224',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Business Hours',
    value: 'Mon–Sat, 10:00 AM – 7:00 PM IST',
    color: '#D4AF37',
  },
];

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingPincode, setFetchingPincode] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [pincodeMessage, setPincodeMessage] = useState('');

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    services: 'Website Development',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    message: '',
  });

  const handlePincodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const cleanPin = rawVal.replace(/\D/g, '').slice(0, 6);

    setFormData((prev) => ({ ...prev, pincode: cleanPin }));

    if (cleanPin.length === 6) {
      setFetchingPincode(true);
      setPincodeStatus('idle');
      setPincodeMessage('');

      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`);
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();

        if (
          Array.isArray(data) &&
          data[0] &&
          data[0].Status === 'Success' &&
          Array.isArray(data[0].PostOffice) &&
          data[0].PostOffice.length > 0
        ) {
          const po = data[0].PostOffice[0];
          const fetchedCity = po.District || po.Division || po.Circle || '';
          const fetchedState = po.State || '';

          setFormData((prev) => ({
            ...prev,
            pincode: cleanPin,
            city: fetchedCity || prev.city,
            state: fetchedState || prev.state,
            country: 'India',
          }));
          setPincodeStatus('success');
          setPincodeMessage(`Detected: ${fetchedCity ? fetchedCity + ', ' : ''}${fetchedState}`);
        } else {
          setPincodeStatus('error');
          setPincodeMessage('No records found for this PIN code');
        }
      } catch (err) {
        console.error('India Post API error:', err);
        setPincodeStatus('error');
        setPincodeMessage('Unable to auto-detect location');
      } finally {
        setFetchingPincode(false);
      }
    } else {
      setPincodeStatus('idle');
      setPincodeMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const webhookUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK ||
      (typeof window !== 'undefined'
        ? (window as unknown as { __ENV?: { VITE_GOOGLE_SHEETS_WEBHOOK?: string } })
            .__ENV?.VITE_GOOGLE_SHEETS_WEBHOOK
        : '');
    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="pill-green">Get In Touch</span>
          <h1 className="display-lg" style={{ maxWidth: '680px' }}>
            Contact Our{' '}
            <span style={{ color: '#1D4224' }}>Digital Specialists</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '520px', lineHeight: 1.7 }}>
            Have a project in mind or need a custom proposal? Fill out the form below or drop by our Mumbai studio.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}
               className="lg:grid-cols-[380px_1fr]">

            {/* LEFT — Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#0F1510' }}>
                  Contact Information
                </h3>
                <div className="section-divider" />
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '.75rem', flexShrink: 0,
                      background: `rgba(${info.color === '#D4AF37' ? '212,175,55' : '29,66,36'},.1)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: info.color,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 600, fontSize: '.7rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.25rem' }}>
                        {info.label}
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#374151', lineHeight: 1.5, fontWeight: 500 }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp shortcut */}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
                  textDecoration: 'none', background: '#ECFDF5', borderColor: 'rgba(29,66,36,.18)',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '.875rem',
                  background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', flexShrink: 0,
                }}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '.9rem', color: '#0F1510' }}>
                    Chat on WhatsApp
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '.75rem', color: '#6B7280' }}>
                    Get a response within minutes
                  </div>
                </div>
              </a>
            </div>

            {/* RIGHT — Form */}
            <div className="card" style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(29,66,36,.1)', border: '1.5px solid rgba(29,66,36,.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <CheckCircle2 className="w-8 h-8" style={{ color: '#1D4224' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#0F1510' }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#6B7280', maxWidth: '380px' }}>
                    Thank you for reaching out. A Tzar consultant will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ marginBottom: '.5rem' }}>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.375rem' }}>
                      Send Us a Message
                    </h3>
                    <div className="section-divider" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>Full Name</label>
                    <input className="field" type="text" required placeholder="Jane Smith"
                      value={formData.fullname}
                      onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>Email Address</label>
                      <input className="field" type="email" required placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>Phone Number</label>
                      <input className="field" type="tel" required placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>Requested Service</label>
                      <select className="field"
                        value={formData.services}
                        onChange={(e) => setFormData({ ...formData, services: e.target.value })}>
                        <option>Website Development</option>
                        <option>Search Engine Optimization</option>
                        <option>Graphic Designing</option>
                        <option>Social Media Marketing</option>
                        <option>Logo Design</option>
                        <option>Product Design &amp; Packaging</option>
                        <option>Photography &amp; Studio</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.375rem' }}>
                        <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', textTransform: 'uppercase', letterSpacing: '.06em' }}>PIN Code</label>
                        {fetchingPincode && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.25rem', fontSize: '.65rem', color: '#D4AF37', fontFamily: 'monospace' }}>
                            <Loader2 className="w-3 h-3 animate-spin" /> Fetching...
                          </span>
                        )}
                        {!fetchingPincode && pincodeStatus === 'success' && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.25rem', fontSize: '.65rem', color: '#10B981', fontFamily: 'monospace', fontWeight: 600 }}>
                            <CheckCircle2 className="w-3 h-3" /> Auto-filled
                          </span>
                        )}
                      </div>
                      <input className="field" type="text" maxLength={6} placeholder="6-digit PIN (e.g. 110001)"
                        value={formData.pincode}
                        onChange={handlePincodeChange} />
                      {pincodeMessage && (
                        <span style={{ display: 'block', fontSize: '.65rem', marginTop: '.25rem', color: pincodeStatus === 'success' ? '#10B981' : '#F59E0B', fontFamily: 'monospace' }}>
                          {pincodeMessage}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>City</label>
                      <input className="field" type="text" required placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>State</label>
                      <input className="field" type="text" placeholder="State"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', fontWeight: 600, color: '#374151', marginBottom: '.375rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>Project Details</label>
                    <textarea className="field" rows={4}
                      placeholder="Tell us about your brand goals, timeline, and budget..."
                      style={{ resize: 'vertical', minHeight: '120px' }}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  <button type="submit" className="btn-primary" disabled={loading}
                          style={{ width: '100%', justifyContent: 'center' }}>
                    <Send className="w-4 h-4" style={{ color: '#D4AF37' }} />
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.7rem', color: '#9CA3AF', textAlign: 'center' }}>
                    🔒 Your information is always kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
