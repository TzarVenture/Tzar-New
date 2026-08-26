"use client";

import React, { useState } from 'react';
import { Gift, ArrowRight, ExternalLink, PackageCheck } from 'lucide-react';
import { COMPANY } from '@/data/company';

const EMPLOYEE_GIFTS = [
  { id: 1, name: 'Sharp and Steely Gift Hamper', img: '/assets/images/backgrounds/employee.webp' },
  { id: 2, name: 'Savvy and Sustainable Gift Hamper', img: '/assets/images/backgrounds/employee1.webp' },
  { id: 3, name: 'The Eco-Employee Gift Hamper', img: '/assets/images/backgrounds/employee2.webp' },
];

const CLIENT_GIFTS = [
  { id: 1, name: 'Caffienated Techie Gift Hamper', img: '/assets/images/backgrounds/client.webp' },
  { id: 2, name: 'Mighty Gift Trunk', img: '/assets/images/backgrounds/client1.webp' },
];

const WELCOME_KITS = [
  { id: 1, name: 'Savvy and Sustainable Welcome Kit', img: '/assets/images/backgrounds/wlcm1.webp' },
  { id: 2, name: 'Sharp and Steely Welcome Kit', img: '/assets/images/backgrounds/wlcm3.webp' },
  { id: 3, name: 'The Eco-Employee Welcome Kit', img: '/assets/images/backgrounds/wlcm4.webp' },
];

const CUSTOM_PACKAGING = [
  { id: 1, name: 'Custom Box - Beige Edition', img: '/assets/images/backgrounds/cust1.webp' },
  { id: 2, name: 'Custom Box - Forest Green Edition', img: '/assets/images/backgrounds/cust2.webp' },
  { id: 3, name: 'Custom Box - Luxury Black Edition', img: '/assets/images/backgrounds/cust3.webp' },
];

const PROMOTIONAL_PRODUCTS = [
  { id: 1, name: 'Bamboo Coffee Sipper', img: '/assets/images/backgrounds/Promo1.webp' },
  { id: 2, name: 'Champagne Flute', img: '/assets/images/backgrounds/promo2.webp' },
  { id: 3, name: 'Copper Bottle Set', img: '/assets/images/backgrounds/promo3.webp' },
  { id: 4, name: 'Glass Bottle – Tyrel', img: '/assets/images/backgrounds/promo4.webp' },
  { id: 5, name: 'Sipper – Laba', img: '/assets/images/backgrounds/promo5.webp' },
  { id: 6, name: 'Passport Organizer', img: '/assets/images/backgrounds/promo6.webp' },
  { id: 7, name: 'Passport Pouch', img: '/assets/images/backgrounds/promo7.webp' },
  { id: 8, name: 'Storage Pouches – Felt', img: '/assets/images/backgrounds/promo8.webp' },
  { id: 9, name: 'Sunglass Pouch', img: '/assets/images/backgrounds/promo9.webp' },
  { id: 10, name: 'Crochet Coaster – Mia', img: '/assets/images/backgrounds/promo10.webp' },
  { id: 11, name: 'Deskmate – Multipurpose Pad', img: '/assets/images/backgrounds/promo11.webp' },
  { id: 12, name: 'Foldable Mouse Pad – ZEN', img: '/assets/images/backgrounds/promo12.webp' },
  { id: 13, name: 'Seed Paper Calendar 2025/2026', img: '/assets/images/backgrounds/promo13.webp' },
  { id: 14, name: 'Whippy – Foldable Mobile Stand', img: '/assets/images/backgrounds/promo14.webp' },
  { id: 15, name: 'Blue Arrow – Journal', img: '/assets/images/backgrounds/promo15.webp' },
  { id: 16, name: 'Journal – Dante', img: '/assets/images/backgrounds/promo16.webp' },
  { id: 17, name: 'Journal – Newton', img: '/assets/images/backgrounds/promo17.webp' },
  { id: 18, name: 'Journal – Leer', img: '/assets/images/backgrounds/promo18.webp' },
  { id: 19, name: 'Journal – Libro Black', img: '/assets/images/backgrounds/promo19.webp' },
  { id: 20, name: 'Notes Organizer', img: '/assets/images/backgrounds/promo20.webp' },
];

export const CorporateGiftingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: 'Employee Gifting', products: EMPLOYEE_GIFTS, link: 'https://crownleaf.co/' },
    { label: 'Client Gifting', products: CLIENT_GIFTS, link: 'https://crownleaf.co/product-category/client-gifts/' },
    { label: 'Welcome Kit', products: WELCOME_KITS, link: 'https://crownleaf.co/product-category/welcome-kit/' },
    { label: 'Custom Packaging', products: CUSTOM_PACKAGING, link: 'https://crownleaf.co/' },
    { label: 'Promotional Products', products: PROMOTIONAL_PRODUCTS, link: 'https://crownleaf.co/' },
  ];

  const activeGroup = tabs[activeTab];

  return (
    <div style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', background: '#FAF9F5' }}>

      {/* ── Page Hero Banner ── */}
      <section
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(11,41,18,.85) 0%, rgba(11,41,18,.92) 100%), url(/assets/images/backgrounds/banner.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          padding: 'clamp(4rem, 8vw, 7rem) 0', color: '#fff', textAlign: 'center',
        }}
      >
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <span className="badge-gold">Bespoke Brand Merchandise & Hampers</span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#fff', lineHeight: 1.15 }}>
            Our Corporate Gifting Solutions
          </h1>
          <div style={{ width: 60, height: 3, background: '#D4AF37', borderRadius: 999 }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,.8)', maxWidth: '580px', lineHeight: 1.7 }}>
            Premium employee appreciation hampers, client gifting trunks, onboard welcome kits, and eco-friendly promotional merchandise.
          </p>

          <a href="https://crownleaf.co/bulk-enquiry/" target="_blank" rel="noreferrer" className="btn-gold" style={{ marginTop: '.5rem' }}>
            Submit Bulk Enquiry <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E5DC', padding: '1.25rem 0', overflowX: 'auto' }}>
        <div className="container-site" style={{ display: 'flex', gap: '.75rem', flexWrap: 'nowrap', justifyContent: 'center' }}>
          {tabs.map((t, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={t.label}
                onClick={() => setActiveTab(idx)}
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
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {activeGroup.products.map((p) => (
              <div key={p.id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  height: '240px', background: '#FAFAF8', borderBottom: '1px solid #E5E5DC',
                  overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        parent.innerHTML = `<span style="font-size:3rem">🎁</span>`;
                      }
                    }}
                  />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', flex: 1, justifyContent: 'space-between' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#0F1510', lineHeight: 1.35 }}>
                    {p.name}
                  </h3>

                  <a
                    href={activeGroup.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ justifyContent: 'center', fontSize: '.75rem', padding: '.5rem 1rem' }}
                  >
                    Enquiry Now <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bulk Enquiry CTA ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E5DC', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="display-md" style={{ maxWidth: '600px' }}>
            Need Custom Branded Merchandise in Bulk?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#4B5563', maxWidth: '480px' }}>
            Minimum order starts from 50 units with pan-India delivery and custom logo engraving.
          </p>
          <a href="https://crownleaf.co/bulk-enquiry/" target="_blank" rel="noreferrer" className="btn-primary">
            Submit Bulk Order Inquiry <ExternalLink className="w-4 h-4" style={{ color: '#D4AF37' }} />
          </a>
        </div>
      </section>
    </div>
  );
};
