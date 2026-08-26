"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Camera, Film, Sparkles, Video, Play, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';

const STUDIO_SERVICES = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Restaurant & Food Shoot',
    desc: 'Photorealistic food shoots, menu styling, and appetiser angles optimized for Swiggy, Zomato, and cloud kitchens.',
    tag: 'Food Media',
    color: '#1D4224',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Short Form Video & Reels',
    desc: 'High-converting Instagram Reels, TikToks, and YouTube Shorts produced with trending audio and sharp edits.',
    tag: 'Video Production',
    color: '#D4AF37',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Product Photoshoot & 3D Dielines',
    desc: 'Studio product photography on white/colored backgrounds with 3D render retouching for D2C e-commerce portals.',
    tag: 'D2C E-Com',
    color: '#1D4224',
  },
  {
    icon: <Film className="w-6 h-6" />,
    title: 'Model & Fashion Shoot',
    desc: 'On-location and in-studio apparel shoots featuring professional models, hair/makeup, and high-fashion lighting.',
    tag: 'Fashion & Apparel',
    color: '#D4AF37',
  },
];

const STUDIO_SHOWCASE_ITEMS = [
  {
    id: 1,
    title: 'Restaurant Food Shoot & Styling',
    category: 'Food Shoot',
    filter: 'food',
    tag: 'Swiggy & Zomato Media',
    image: '/assets/images/MobileShowcase/food1.jpg',
    color: '#1D4224',
  },
  {
    id: 2,
    title: 'Gourmet Dish Photography',
    category: 'Food Shoot',
    filter: 'food',
    tag: 'Food Styling',
    image: '/assets/images/MobileShowcase/food2.jpg',
    color: '#D4AF37',
  },
  {
    id: 3,
    title: 'Cloud Kitchen Menu Showcase',
    category: 'Food Shoot',
    filter: 'food',
    tag: 'Menu Photoshoot',
    image: '/assets/images/MobileShowcase/food3.jpg',
    color: '#1D4224',
  },
  {
    id: 4,
    title: 'Mobile Studio Frame #1',
    category: 'Work Showcase',
    filter: 'showcase',
    tag: 'Studio Frame',
    image: '/assets/images/MobileShowcase/show1.jpg',
    color: '#D4AF37',
  },
  {
    id: 5,
    title: 'Mobile Studio Frame #2',
    category: 'Work Showcase',
    filter: 'showcase',
    tag: 'Studio Frame',
    image: '/assets/images/MobileShowcase/show2.jpg',
    color: '#1D4224',
  },
  {
    id: 6,
    title: 'Mobile Studio Frame #3',
    category: 'Work Showcase',
    filter: 'showcase',
    tag: 'Studio Frame',
    image: '/assets/images/MobileShowcase/show3.jpg',
    color: '#D4AF37',
  },
  {
    id: 7,
    title: 'D2C Product Photoshoot #1',
    category: 'Product Shoot',
    filter: 'products',
    tag: 'Product Photography',
    image: '/assets/images/MobileShowcase/product1.png',
    color: '#1D4224',
  },
  {
    id: 8,
    title: 'D2C Product Photoshoot #2',
    category: 'Product Shoot',
    filter: 'products',
    tag: '3D Render & Art',
    image: '/assets/images/MobileShowcase/product2.png',
    color: '#D4AF37',
  },
  {
    id: 9,
    title: 'Commercial Video Reel',
    category: 'Reels & Video',
    filter: 'reels',
    tag: 'Instagram Reel',
    youtubeId: '7MPOVdcTT2E',
    color: '#1D4224',
  },
  {
    id: 10,
    title: 'Nightclub Event Videography',
    category: 'Reels & Video',
    filter: 'reels',
    tag: 'Nightclub Shoot',
    youtubeId: '_wPXOrzwERk',
    color: '#D4AF37',
  },
];

const STUDIO_FILTERS = [
  { id: 'all', name: 'All Work' },
  { id: 'food', name: 'Food Shoots' },
  { id: 'showcase', name: 'Studio Showcase' },
  { id: 'products', name: 'Product Shoots' },
  { id: 'reels', name: 'Reels & Video' },
];

export const TzarStudioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? STUDIO_SHOWCASE_ITEMS
    : STUDIO_SHOWCASE_ITEMS.filter(item => item.filter === activeFilter);

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Standardized Page Banner ── */}
      <section
        className="bg-grid"
        style={{ borderBottom: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-green">Tzar Creative Studio</span>
          <h1 className="display-lg" style={{ maxWidth: '750px' }}>
            Where Every Frame <span style={{ color: '#1D4224' }}>Tells a Story</span>
          </h1>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '580px', lineHeight: 1.7 }}>
            India’s premier media production studio specializing in restaurant food photography, high-converting short-form video reels, model shoots, and e-commerce product photography.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            <Link href="/contact" className="btn-primary">
              Book Studio Shoot <ArrowRight className="w-4 h-4" style={{ color: '#D4AF37' }} />
            </Link>
            <a href={`tel:${COMPANY.phone.replace(/\s+/g,'')}`} className="btn-outline">
              Call Studio: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Studio Capabilities Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: '#fff', borderBottom: '1px solid #E5E5DC' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-green">Studio Services</span>
            <h2 className="display-xl">End-to-End <span style={{ color: '#1D4224' }}>Media Production</span></h2>
            <div className="section-divider" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            {STUDIO_SERVICES.map((s, i) => (
              <div key={i} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '1rem',
                    background: `rgba(${s.color === '#D4AF37' ? '212,175,55' : '29,66,36'},.1)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color,
                  }}>
                    {s.icon}
                  </div>
                  <span className="badge-gold" style={{ fontSize: '.6rem' }}>{s.tag}</span>
                </div>

                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0F1510' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: '#6B7280', lineHeight: 1.65 }}>
                  {s.desc}
                </p>

                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '.35rem', fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.72rem', color: '#1D4224', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 'auto', textDecoration: 'none' }}>
                  Inquire Now <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filterable Showcase Gallery ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-gold">Production Portfolio</span>
            <h2 className="display-xl">Tzar Studio <span style={{ color: '#1D4224' }}>Work Showcase</span></h2>
            <div className="section-divider" />
          </div>

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {STUDIO_FILTERS.map(f => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  style={{
                    fontFamily: 'Rubik, sans-serif', fontWeight: 600, fontSize: '.72rem',
                    letterSpacing: '.06em', textTransform: 'uppercase',
                    padding: '.55rem 1.25rem', borderRadius: '999px',
                    border: isActive ? 'none' : '1px solid #E5E5DC',
                    background: isActive ? '#1D4224' : '#fff',
                    color: isActive ? '#fff' : '#6B7280',
                    cursor: 'pointer', transition: 'all .2s',
                  }}
                >
                  {f.name}
                </button>
              );
            })}
          </div>

          {/* Showcase Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {filteredItems.map(item => (
              <div key={item.id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {item.youtubeId ? (
                  <div style={{ height: '230px', position: 'relative', background: '#000' }}>
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
                    height: '230px', background: 'linear-gradient(135deg, rgba(29,66,36,.06) 0%, rgba(212,175,55,.1) 100%)',
                    borderBottom: '1px solid #E5E5DC', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        const parent = (e.currentTarget as HTMLImageElement).parentElement;
                        if (parent) {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }
                      }}
                    />
                  </div>
                )}

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.875rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', color: item.color, background: `rgba(${item.color === '#D4AF37' ? '212,175,55' : '29,66,36'},.12)`, padding: '.25rem .75rem', borderRadius: '999px' }}>
                      {item.category}
                    </span>
                    <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '.7rem', color: '#9CA3AF', fontWeight: 500 }}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#0F1510', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Facilities Band ── */}
      <section style={{ background: '#1D4224', padding: 'clamp(4rem, 7vw, 6rem) 0', color: '#fff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="max-md:grid-cols-1">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span className="badge-dark">Mumbai Studio Facility</span>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#fff', lineHeight: 1.2 }}>
                Full-Service In-House Studio Kitchen & Video Rigs
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.7 }}>
                Equipped with professional cinema cameras, high-CRI studio lights, specialized food styling props, and 4K editing bays to turn around commercial campaigns in days.
              </p>
              <Link href="/contact" className="btn-gold" style={{ alignSelf: 'flex-start' }}>
                Book Studio Space <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Food Styling Kitchen', desc: 'Equipped for live cooking & food styling shoots.' },
                { label: '4K Cinema Rigs', desc: 'Sony FX3 & RED cinema cameras with prime lenses.' },
                { label: 'High-CRI Lighting', desc: 'Aputure & Godox studio strobe & continuous lights.' },
                { label: 'Fast Turnaround', desc: 'Color-graded edits delivered within 48–72 hours.' },
              ].map((f, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '1.25rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                  <CheckCircle2 className="w-5 h-5" style={{ color: '#D4AF37' }} />
                  <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '.9rem', color: '#fff' }}>{f.label}</h4>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.78rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
