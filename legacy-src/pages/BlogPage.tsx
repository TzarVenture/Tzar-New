"use client";

import React from 'react';
import { Calendar, User, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';

export const BlogPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Insights & Tech Updates</span>
          <h1 className="display-lg" style={{ maxWidth: '600px' }}>
            Tzar Agency{' '}
            <span style={{ color: '#1D4224' }}>Blog</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '520px', lineHeight: 1.7 }}>
            Articles on web development, SEO strategies, digital marketing trends, and creative design.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}>
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="card" style={{
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
              }}>
                {/* Category header strip */}
                <div style={{
                  padding: '1.25rem 1.75rem',
                  background: 'rgba(29,66,36,.06)',
                  borderBottom: '1px solid #E5E5DC',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.65rem',
                    textTransform: 'uppercase', letterSpacing: '.1em',
                    color: '#1D4224', background: 'rgba(29,66,36,.1)',
                    padding: '.25rem .75rem', borderRadius: '999px',
                  }}>
                    {post.tag}
                  </span>
                  <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.65rem', fontWeight: 500, color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '.25rem' }}>
                    <Clock className="w-3 h-3" /> {post.readTime} read
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
                    fontSize: '1rem', color: '#0F1510', lineHeight: 1.4, flex: 1,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', lineHeight: 1.7, color: '#6B7280' }}>
                    {post.description}
                  </p>
                </div>

                {/* Footer row */}
                <div style={{
                  padding: '1rem 1.75rem',
                  borderTop: '1px solid #E5E5DC',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '.7rem', color: '#9CA3AF', fontFamily: 'Rubik, sans-serif', fontWeight: 500 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '.25rem',
                    fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.68rem',
                    color: '#1D4224', textTransform: 'uppercase', letterSpacing: '.06em',
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  }}>
                    Read <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="display-md">
            Want Content Marketing for Your Brand?
          </h2>
          <Link href="/contact" className="btn-primary">
            Let's Build Your Content Strategy <ArrowUpRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};
