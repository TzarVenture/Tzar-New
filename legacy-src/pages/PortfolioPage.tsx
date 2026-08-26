"use client";

import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Play, Globe } from 'lucide-react';
import Link from 'next/link';
import { PORTFOLIO_ITEMS, PORTFOLIO_TABS } from '@/data/people';

export const PortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('web');

  const filteredItems = PORTFOLIO_ITEMS.filter(item => item.tab === activeTab);

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Selected Works & Case Studies</span>
          <h1 className="display-lg" style={{ maxWidth: '700px' }}>
            Our Featured <span style={{ color: '#1D4224' }}>Portfolio</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '560px', lineHeight: 1.7 }}>
            Explore our work across web design, custom e-commerce portals, creative banners, video reels, packaging, and commercial shoots.
          </p>
        </div>
      </section>

      {/* ── Legacy Portfolio Tabs Bar ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E5DC', padding: '1.25rem 0', overflowX: 'auto' }}>
        <div className="container-site" style={{ display: 'flex', gap: '.75rem', flexWrap: 'nowrap', justifyContent: 'center' }}>
          {PORTFOLIO_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.75rem',
                  letterSpacing: '.06em', textTransform: 'uppercase',
                  padding: '.65rem 1.35rem', borderRadius: '999px', whiteSpace: 'nowrap',
                  border: isActive ? 'none' : '1px solid #E5E5DC',
                  background: isActive ? '#1D4224' : '#FAFAF8',
                  color: isActive ? '#fff' : '#4B5563',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 14px rgba(29,66,36,.25)' : 'none',
                  transition: 'all .2s',
                }}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {filteredItems.map((item) => (
              <div key={item.id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {/* Media Preview: YouTube Video or Image */}
                {item.youtubeId ? (
                  <div style={{ height: '220px', position: 'relative', background: '#000' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}`}
                      title={item.title}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div style={{
                    height: '220px', background: 'linear-gradient(135deg, rgba(29,66,36,.06) 0%, rgba(212,175,55,.1) 100%)',
                    borderBottom: '1px solid #E5E5DC', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          const parent = (e.currentTarget as HTMLImageElement).parentElement;
                          if (parent) {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                            parent.innerHTML = `<span style="font-size:3rem">🌐</span>`;
                          }
                        }}
                      />
                    ) : (
                      <Globe className="w-12 h-12" style={{ color: '#1D4224', opacity: .5 }} />
                    )}
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}>
                    <span style={{
                      fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.62rem',
                      textTransform: 'uppercase', letterSpacing: '.08em',
                      background: `rgba(${item.color === '#D4AF37' ? '212,175,55' : '29,66,36'},.12)`,
                      color: item.color, borderRadius: '6px', padding: '.25rem .625rem',
                    }}>
                      {item.category}
                    </span>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" aria-label="Visit site" style={{ color: '#1D4224' }}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0F1510', lineHeight: 1.35, marginBottom: '.35rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.75rem', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      {item.tag}
                    </p>
                  </div>

                  {item.services && item.services.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.375rem', marginTop: 'auto', paddingTop: '.5rem' }}>
                      {item.services.map((s, idx) => (
                        <span key={idx} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.68rem', fontWeight: 500, background: '#FAFAF8', color: '#4B5563', padding: '.2rem .5rem', borderRadius: '4px', border: '1px solid #E5E5DC' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '.35rem',
                        fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.72rem',
                        color: '#1D4224', textTransform: 'uppercase', letterSpacing: '.08em',
                        textDecoration: 'none', marginTop: '.5rem',
                      }}
                    >
                      Visit Live Website <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="display-md" style={{ maxWidth: '560px' }}>
            Want Results Like These{' '}
            <span style={{ color: '#1D4224' }}>For Your Brand?</span>
          </h2>
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowUpRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};
