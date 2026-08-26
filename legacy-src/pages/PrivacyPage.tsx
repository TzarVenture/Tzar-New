"use client";

import React from 'react';
import Link from 'next/link';
import { Lock, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';

export const PrivacyPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Data Privacy & Security</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Privacy <span style={{ color: '#1D4224' }}>Policy</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.9rem', color: '#6B7280' }}>
            Last Updated: January 2026 • Tzar Venture Digital Marketing & Tech Creative Agency
          </p>
        </div>
      </section>

      {/* ── Document Body ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                1. Information We Collect
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                We collect personal information that you voluntarily provide to us when submitting inquiry forms, requesting project proposals, or executing payment transactions. This includes your name, email address, phone number, company name, city, and project specifications.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '.88rem', color: '#0F1510', marginBottom: '.5rem' }}>
                2. How We Use Your Information
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                Your data is strictly used to communicate project updates, issue invoices, deliver requested agency services, provide ongoing maintenance support, and optimize user experience on our digital platform. We do not sell, rent, or trade your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                3. Payment Gateway Security
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                Online payments are processed through Razorpay using 256-bit SSL encryption. {COMPANY.name} does not store credit card numbers, CVVs, or UPI banking PINs on our servers.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                4. Cookies & Analytics
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                We use Google Analytics and Facebook Pixel to measure website traffic, conversion performance, and user interaction. You can disable cookies through your web browser settings at any time.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                5. Contact Us Regarding Your Data
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                If you wish to update, review, or request deletion of your personal records from our system, please contact our Privacy Manager at <a href={`mailto:${COMPANY.email}`} style={{ color: '#1D4224', fontWeight: 600 }}>{COMPANY.email}</a> or call us at <strong style={{ color: '#1D4224' }}>{COMPANY.phone}</strong>.
              </p>
            </div>

            <div style={{ borderTop: '1px solid #E5E5DC', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', color: '#6B7280' }}>
                📍 {COMPANY.address.full}
              </span>
              <Link href="/contact" className="btn-primary">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
