"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Legal & Transparency</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Terms & <span style={{ color: '#1D4224' }}>Conditions</span>
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
                1. Acceptance of Terms
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                By accessing or using the services provided by {COMPANY.name} ("Company", "we", "us", "our"), including our website development, search engine optimization, social media marketing, graphic design, and media production services, you agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                2. Scope of Services & Project Deliverables
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                {COMPANY.name} agrees to perform services as defined in individual proposals, service agreements, or statements of work (SOW). Scope changes or additional feature requests requested during a project may be subject to additional fees and revised delivery timelines.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                3. Payment & Billing Terms
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                All payments shall be made according to the agreed milestone schedule. Invoices are payable via our secure online Razorpay payment portal, net banking, or wire transfer within 7 days of issuance. Late payments may incur interest at 1.5% per month. Applicable Goods and Services Tax (GST 18%) is added to all invoices.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                4. Intellectual Property Rights
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                Upon full payment of all project fees, the Client receives full ownership of the final design source files, custom code, logos, and marketing assets created specifically for the project. {COMPANY.name} retains the right to display completed project case studies in our digital portfolio.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                5. Confidentiality & Non-Disclosure
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                Both parties agree to treat all business data, access credentials, strategies, and customer information received during the project as strictly confidential.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0F1510', marginBottom: '.5rem' }}>
                6. Governing Law & Jurisdiction
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </div>

            <div style={{ borderTop: '1px solid #E5E5DC', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', color: '#6B7280' }}>
                Questions? Contact legal support at <a href={`mailto:${COMPANY.email}`} style={{ color: '#1D4224', fontWeight: 600 }}>{COMPANY.email}</a>
              </span>
              <Link href="/contact" className="btn-primary">
                Contact Legal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
