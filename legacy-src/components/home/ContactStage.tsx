import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactStage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="my-20 min-h-screen w-screen px-6 sm:px-12 relative z-10 bg-[#FAF9F5]">
      <div className="relative rounded-3xl bg-[#052C10] py-20 px-8 sm:px-16 text-white overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
        {/* Zentry Asymmetrical Layered Clip Path Decorative Boxes */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-10 lg:w-96 pointer-events-none opacity-20">
          <div className="contact-clip-path-1 bg-[#D4AF37] size-64 mb-4" />
          <div className="contact-clip-path-2 bg-amber-400 size-64 lg:translate-y-20" />
        </div>

        <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="font-rubik text-xs font-bold uppercase tracking-widest text-[#FED65B] mb-2">
            JOIN TZAR VENTURE
          </span>

          <h2 className="special-font font-montserrat font-black text-4xl sm:text-6xl uppercase leading-none mb-6 text-white">
            Let's b<b>u</b>ild the <br /> new era of <br /> digital <b>g</b>rowth!
          </h2>

          <p className="font-inter text-base text-white/90 max-w-lg mb-10">
            Request a free technical proposal & digital audit. Our senior strategist will review your requirements and respond within 30 minutes.
          </p>

          {/* Single-Page Clean Proposal Form (Pure White Card) */}
          <div className="w-full max-w-xl bg-white text-[#1A1C19] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#E2E3DE] text-left">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#052C10]/10 text-[#052C10] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-montserrat font-extrabold text-2xl text-[#1A1C19]">
                  Proposal Request Received!
                </h3>
                <p className="font-inter text-sm text-[#424941]">
                  Our lead digital consultant will contact you within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#E2E3DE] bg-[#FAF9F5] font-inter text-sm outline-none focus:border-[#052C10] text-[#1A1C19]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@co.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-[#E2E3DE] bg-[#FAF9F5] font-inter text-sm outline-none focus:border-[#052C10] text-[#1A1C19]"
                    />
                  </div>
                  <div>
                    <label className="block font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10] mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765..."
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-[#E2E3DE] bg-[#FAF9F5] font-inter text-sm outline-none focus:border-[#052C10] text-[#1A1C19]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10] mb-1">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#E2E3DE] bg-[#FAF9F5] font-inter text-sm outline-none focus:border-[#052C10] text-[#1A1C19] cursor-pointer"
                  >
                    <option>Website Development</option>
                    <option>SEO Engine & Search Ranking</option>
                    <option>Graphic & Packaging Design</option>
                    <option>Social Media & Brand Marketing</option>
                    <option>Pay-Per-Click (PPC) Ads</option>
                    <option>Tzar Studio Commercial Production</option>
                  </select>
                </div>

                <div>
                  <label className="block font-rubik text-xs font-bold uppercase tracking-wider text-[#052C10] mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Delhi, Bengaluru"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#E2E3DE] bg-[#FAF9F5] font-inter text-sm outline-none focus:border-[#052C10] text-[#1A1C19]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#052C10] text-white font-montserrat font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1D4224] transition mt-2"
                >
                  <span>{loading ? 'Submitting…' : 'Request Free Proposal'}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-[#727970] mt-1">
                  <ShieldCheck className="w-4 h-4 text-[#052C10]" />
                  <span>Your company details are 100% confidential.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
