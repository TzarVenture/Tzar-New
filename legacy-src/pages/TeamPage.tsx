"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Linkedin, Instagram } from 'lucide-react';
import { TEAM } from '@/data/people';
import { COMPANY } from '@/data/company';

export const TeamPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">People Behind Tzar Venture</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Meet Our Creative & Tech <span style={{ color: '#1D4224' }}>Experts</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            A multidisciplinary team of developers, SEO strategists, graphic designers, and performance marketers driving results for over 100+ brands.
          </p>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {TEAM.map((member) => (
              <div key={member.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center', alignItems: 'center' }}>
                {/* Photo container */}
                <div style={{
                  width: 104, height: 104, borderRadius: '50%',
                  border: '3px solid #1D4224',
                  boxShadow: '0 8px 24px rgba(29,66,36,.15)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(29,66,36,.1) 0%, rgba(212,175,55,.15) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback to initial avatar if image missing
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        parent.innerText = member.name.slice(0, 2).toUpperCase();
                        parent.style.fontFamily = 'Montserrat, sans-serif';
                        parent.style.fontWeight = '900';
                        parent.style.fontSize = '1.75rem';
                        parent.style.color = '#1D4224';
                      }
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#0F1510' }}>
                    {member.name}
                  </h3>
                  <span style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.7rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '.1em' }}>
                    {member.role}
                  </span>
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.82rem', color: '#6B7280', lineHeight: 1.6 }}>
                  {member.describe}
                </p>

                <div style={{ display: 'flex', gap: '.625rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #E5E5DC', width: '100%', justifyContent: 'center' }}>
                  <a href={COMPANY.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: '#9CA3AF', transition: 'color .15s' }} onMouseEnter={e => (e.currentTarget.style.color = '#1D4224')} onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={COMPANY.socials.instagram} target="_blank" rel="noreferrer" style={{ color: '#9CA3AF', transition: 'color .15s' }} onMouseEnter={e => (e.currentTarget.style.color = '#1D4224')} onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="display-md">
            Want to Join Our Team or Work With Us?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Work With Us <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
