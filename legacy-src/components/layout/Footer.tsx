import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube, ArrowUpRight, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '../../data/company';

// Group nav items for footer columns
const SERVICES_LINKS = [
  { name: 'Website Development', href: '/website-development-services' },
  { name: 'Search Engine Optimization', href: '/search-engine-optimization-services' },
  { name: 'Graphic Designing', href: '/graphic-designing' },
  { name: 'Social Media Marketing', href: '/social-media-marketing-services' },
  { name: 'Logo Design Services', href: '/logo-design-services' },
  { name: 'Content Marketing', href: '/content-marketing-services' },
  { name: 'Product Design & Packaging', href: '/product-design-packaging-services' },
];

const COMPANY_LINKS = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Our Portfolio', href: '/portfolio' },
  { name: 'Tzar Studio', href: '/tzar-studio' },
  { name: 'Corporate Gifting', href: '/corporate-gifting' },
  { name: 'Outdoor Ads', href: '/outdoor-ads' },
  { name: 'Blog & Insights', href: '/blog' },
  { name: 'FAQs', href: '/faqs' },
];

const SOCIAL_LINKS = [
  { icon: <Instagram className="w-4 h-4" />, href: COMPANY.socials.instagram, label: 'Instagram' },
  { icon: <Linkedin className="w-4 h-4" />, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
  { icon: <Facebook className="w-4 h-4" />, href: COMPANY.socials.facebook, label: 'Facebook' },
  { icon: <Youtube className="w-4 h-4" />, href: COMPANY.socials.youtube, label: 'YouTube' },
];

const LinkItem: React.FC<{ name: string; href: string }> = ({ name, href }) => (
  <li style={{ width: '100%', textAlign: 'center' }}>
    <Link
      href={href}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', fontFamily: 'Inter, sans-serif', fontSize: '.82rem', color: 'rgba(255,255,255,.65)', textDecoration: 'none', transition: 'all .2s', lineHeight: 1.6 }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = '#D4AF37';
        el.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = 'rgba(255,255,255,.65)';
        el.style.transform = 'none';
      }}
    >
      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#D4AF37', flexShrink: 0 }} />
      {name}
    </Link>
  </li>
);

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#0A0D0B', color: 'rgba(255,255,255,.85)', position: 'relative', zIndex: 10 }}>

      {/* ── Top decorative stripe ── */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, #1A201C 0%, #D4AF37 50%, #1A201C 100%)' }} />

      {/* ── CTA Banner ── */}
      <div style={{ background: 'rgba(20,24,21,.6)', borderBottom: '1px solid rgba(255,255,255,.08)', padding: '2.5rem 0' }}>
        <div className="container-site" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', gap: '1.5rem',
        }}>
          <div style={{ maxWidth: '650px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', color: '#fff', marginBottom: '.35rem', lineHeight: 1.3 }}>
              Your Perfect Business Partner Solution
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.85rem', color: 'rgba(255,255,255,.7)', margin: '0 auto' }}>
              Ready to scale? Get a free audit and proposal within 30 minutes.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <a href={`tel:${COMPANY.phone.replace(/\s+/g,'')}`}
               style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontFamily: 'Rubik, sans-serif', fontSize: '.78rem', fontWeight: 700, color: '#D4AF37', padding: '.75rem 1.5rem', borderRadius: '.875rem', border: '1.5px solid rgba(212,175,55,.4)', textDecoration: 'none', transition: 'all .2s' }}
               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,.15)'; }}
               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
              <Phone style={{ width: 14, height: 14 }} /> {COMPANY.phone}
            </a>
            <Link href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontFamily: 'Rubik, sans-serif', fontSize: '.78rem', fontWeight: 700, color: '#0B2912', background: '#D4AF37', padding: '.75rem 1.5rem', borderRadius: '.875rem', textDecoration: 'none', transition: 'all .2s', boxShadow: '0 4px 16px rgba(212,175,55,.3)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C49A2A'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#D4AF37'; }}>
              Get Free Proposal <ArrowUpRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="container-site" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0 2.5rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12" style={{ width: '100%' }}>

          {/* Col 1 — Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
            <Link href="/" aria-label="Tzar Venture home" style={{ display: 'inline-block' }}>
              <img
                src="/assets/images/tzar-logo-main.png"
                alt="Tzar Venture"
                style={{ height: 'clamp(36px, 4vw, 50px)', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', margin: '0 auto' }}
              />
            </Link>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.82rem', lineHeight: 1.75, color: 'rgba(255,255,255,.65)', maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
              {COMPANY.description}
            </p>

            {/* Verification Badges */}
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'Google Partner Verified', icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> },
                { label: 'Top Rated Agency', icon: <Award className="w-3.5 h-3.5 text-amber-400" /> },
              ].map(b => (
                <span key={b.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem', fontFamily: 'Rubik, sans-serif', fontSize: '.68rem', fontWeight: 600, color: 'rgba(255,255,255,.8)', background: 'rgba(255,255,255,.08)', padding: '.35rem .85rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,.12)' }}>
                  {b.icon}
                  {b.label}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '.625rem', justifyContent: 'center' }}>
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                   style={{ width: 38, height: 38, borderRadius: '.75rem', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.7)', textDecoration: 'none', transition: 'all .2s' }}
                   onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#1D4224'; el.style.color = '#D4AF37'; el.style.borderColor = 'rgba(212,175,55,.4)'; }}
                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,.08)'; el.style.color = 'rgba(255,255,255,.7)'; el.style.borderColor = 'rgba(255,255,255,.12)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.68rem', letterSpacing: '.14em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1rem', width: '100%', textAlign: 'center' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', width: '100%' }}>
              {SERVICES_LINKS.map(l => <LinkItem key={l.href} {...l} />)}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.68rem', letterSpacing: '.14em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1rem', width: '100%', textAlign: 'center' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', width: '100%' }}>
              {COMPANY_LINKS.map(l => <LinkItem key={l.href} {...l} />)}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
            <h4 style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: '.68rem', letterSpacing: '.14em', textTransform: 'uppercase', color: '#D4AF37', width: '100%', textAlign: 'center' }}>
              Head Office
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}>
              {[
                { icon: <MapPin className="w-4 h-4" />, content: COMPANY.address.full, href: undefined },
                { icon: <Phone className="w-4 h-4" />, content: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s+/g,'')}` },
                { icon: <Phone className="w-4 h-4" />, content: COMPANY.phone2, href: `tel:${COMPANY.phone2.replace(/\s+/g,'')}` },
                { icon: <Mail className="w-4 h-4" />, content: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map((item, i) => {
                const inner = (
                  <div style={{ display: 'inline-flex', gap: '.6rem', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '280px' }}>
                    <span style={{ color: '#D4AF37', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.8rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.6, transition: 'color .15s' }}>{item.content}</span>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', width: '100%' }}
                     onMouseEnter={e => { const sp = (e.currentTarget as HTMLElement).querySelector('span:last-child') as HTMLElement; if (sp) sp.style.color = '#D4AF37'; }}
                     onMouseLeave={e => { const sp = (e.currentTarget as HTMLElement).querySelector('span:last-child') as HTMLElement; if (sp) sp.style.color = 'rgba(255,255,255,.65)'; }}>
                    {inner}
                  </a>
                ) : <div key={i} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{inner}</div>;
              })}
            </div>

            <Link href="/payment"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.4rem', fontFamily: 'Rubik, sans-serif', fontSize: '.72rem', fontWeight: 700, color: '#0B2912', background: '#D4AF37', padding: '.65rem 1.25rem', borderRadius: '.75rem', textDecoration: 'none', transition: 'all .2s', alignSelf: 'center', margin: '0 auto', boxShadow: '0 4px 12px rgba(212,175,55,.25)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#C49A2A')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#D4AF37')}>
              Client Payment Portal <ExternalLink style={{ width: 12, height: 12 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', padding: '1.5rem 0' }}>
        <div className="container-site" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', gap: '1rem',
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.75rem', color: 'rgba(255,255,255,.45)', margin: 0, textAlign: 'center' }}>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Crafted in Mumbai, India.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {[
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms & Conditions', href: '/terms-conditions' },
              { name: 'Sitemap', href: '/' },
              { name: 'Contact', href: '/contact' },
            ].map(l => (
              <Link key={l.name} href={l.href}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '.75rem', color: 'rgba(255,255,255,.45)', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.85)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.45)')}>
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
