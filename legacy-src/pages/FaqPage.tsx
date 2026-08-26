"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '@/data/blog';
import { COMPANY } from '@/data/company';

export const FaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SEO', 'Content', 'Social Media', 'PPC', 'Web Dev', 'General'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Frequently Asked Questions</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Got Questions? We Have <span style={{ color: '#1D4224' }}>Answers.</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            Find answers to common questions about our website development, SEO, digital marketing services, packages, and process.
          </p>
        </div>
      </section>

      {/* ── Filter Categories ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E5DC', padding: '1.25rem 0', overflowX: 'auto' }}>
        <div className="container-site" style={{ display: 'flex', gap: '.75rem', flexWrap: 'nowrap' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'Rubik, sans-serif', fontWeight: 600, fontSize: '.7rem',
                  letterSpacing: '.06em', textTransform: 'uppercase',
                  padding: '.5rem 1.125rem', borderRadius: '999px', whiteSpace: 'nowrap',
                  border: isActive ? 'none' : '1px solid #E5E5DC',
                  background: isActive ? '#1D4224' : 'transparent',
                  color: isActive ? '#fff' : '#6B7280',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Accordion List ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="card"
                  style={{
                    padding: '1.5rem 1.75rem',
                    border: isOpen ? '1.5px solid #1D4224' : '1px solid #EBEBEB',
                    boxShadow: isOpen ? '0 8px 24px rgba(29,66,36,.08)' : '0 2px 8px rgba(0,0,0,.03)',
                    transition: 'all .2s',
                  }}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: '1rem', background: 'transparent', border: 'none', textAlign: 'left',
                      padding: 0, cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#0F1510', lineHeight: 1.4 }}>
                      {faq.question}
                    </span>
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: isOpen ? '#1D4224' : '#FAFAF8',
                      color: isOpen ? '#fff' : '#6B7280',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all .2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    }}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E5DC' }}>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.88rem', color: '#4B5563', lineHeight: 1.75 }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Help / Direct Call Box ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container-site">
          <div className="card" style={{
            padding: '2.5rem', background: 'linear-gradient(135deg, rgba(29,66,36,.06) 0%, rgba(212,175,55,.08) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: 52, height: 52, borderRadius: '1rem', background: '#1D4224', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#0F1510', marginBottom: '.25rem' }}>
                  Still Have Questions?
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#6B7280' }}>
                  Call our technical consultants directly at <strong style={{ color: '#1D4224' }}>{COMPANY.phone}</strong>
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
