"use client";

import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

declare global {
  interface Window { Razorpay: any; }
}

export const PaymentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    phone: '',
    gstNumber: '',
    baseAmount: 10000,
    services: 'Website Development',
  });
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState('');

  const gstAmount = Math.round(formData.baseAmount * 0.18);
  const totalAmount = formData.baseAmount + gstAmount;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalAmount }),
      });
      const order = await res.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'Tzar Venture',
        description: `Payment for ${formData.services}`,
        order_id: order.orderId,
        handler: async (response: any) => {
          setPaymentId(response.razorpay_payment_id);
          setPaymentSuccess(true);
        },
        prefill: { name: formData.customerName, email: formData.customerEmail, contact: formData.phone },
        theme: { color: '#1D4224' },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      alert('Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const LabelStyle: React.CSSProperties = {
    display: 'block', fontFamily: 'Rubik, sans-serif', fontSize: '.7rem',
    fontWeight: 600, color: '#374151', marginBottom: '.375rem',
    textTransform: 'uppercase', letterSpacing: '.06em',
  };

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="pill-green">Secure Payment Portal</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Client Online{' '}
            <span style={{ color: '#1D4224' }}>Payment & Invoicing</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '540px', lineHeight: 1.7 }}>
            Pay securely via UPI, Credit/Debit Card, or Net Banking with instant automated GST invoice generation.
          </p>
        </div>
      </section>

      {/* ── Payment Form ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '2.5rem' }}>

            {paymentSuccess ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'rgba(29,66,36,.1)', border: '2px solid rgba(29,66,36,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle2 className="w-9 h-9" style={{ color: '#1D4224' }} />
                </div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.75rem', color: '#0F1510' }}>
                  Payment Successful!
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#4B5563' }}>
                  Payment ID:{' '}
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#D4AF37' }}>{paymentId}</span>
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#6B7280', maxWidth: '380px' }}>
                  Your GST invoice has been generated and sent to{' '}
                  <span style={{ color: '#1D4224', fontWeight: 600 }}>{formData.customerEmail}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ marginBottom: '.5rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.375rem' }}>
                    Payment Details
                  </h3>
                  <div className="section-divider" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={LabelStyle}>Client / Company Name</label>
                    <input className="field" type="text" required placeholder="Acme Corp / John Doe"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })} />
                  </div>
                  <div>
                    <label style={LabelStyle}>Email Address</label>
                    <input className="field" type="email" required placeholder="client@acme.com"
                      value={formData.customerEmail}
                      onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={LabelStyle}>Phone Number</label>
                    <input className="field" type="tel" required placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={LabelStyle}>GSTIN (Optional)</label>
                    <input className="field" type="text" placeholder="27AAAAA0000A1Z5"
                      value={formData.gstNumber}
                      onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={LabelStyle}>Services Being Paid For</label>
                  <input className="field" type="text" required placeholder="Website Development Milestone 1"
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })} />
                </div>

                <div>
                  <label style={LabelStyle}>Base Amount (INR ₹)</label>
                  <input className="field" type="number" required min="100"
                    style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.125rem' }}
                    value={formData.baseAmount}
                    onChange={(e) => setFormData({ ...formData, baseAmount: Number(e.target.value) })} />
                </div>

                {/* Tax Breakdown */}
                <div style={{
                  background: '#F5F5F0', border: '1.5px solid #E5E5DC',
                  borderRadius: '1rem', padding: '1.25rem 1.5rem',
                  display: 'flex', flexDirection: 'column', gap: '.625rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: '.8rem', color: '#4B5563' }}>
                    <span>Base Service Fee:</span>
                    <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>₹{formData.baseAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: '.8rem', color: '#4B5563' }}>
                    <span>GST (18%):</span>
                    <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>₹{gstAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ height: 1, background: '#E5E5DC', margin: '.25rem 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 800, color: '#0F1510' }}>
                    <span>Total Payable:</span>
                    <span style={{ fontFamily: 'monospace', color: '#1D4224' }}>₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button type="submit" className="btn-primary" disabled={loading}
                        style={{ width: '100%', justifyContent: 'center', padding: '1.125rem 2rem', fontSize: '.8rem' }}>
                  <Lock className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  {loading ? 'Processing…' : `Pay ₹${totalAmount.toLocaleString('en-IN')} via Razorpay`}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', fontFamily: 'Inter, sans-serif', fontSize: '.7rem', color: '#9CA3AF' }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: '#1D4224' }} />
                  <span>256-bit SSL Encrypted & Secured by Razorpay Payment Gateway</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
