"use client";

import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle, Terminal, Sparkles } from 'lucide-react';
import { COMPANY } from '../../../data/company';

export const TechContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website & App Development',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 framer-canvas-bg text-white relative linear-hairline-b">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="uppercase font-bold tracking-widest">PROJECT PROPOSAL</span>
            </div>

            <h2 className="font-montserrat font-extrabold text-4xl sm:text-6xl text-white tracking-[-0.04em] leading-tight">
              Ready to bring your business <br />
              <span className="text-[#D4AF37]">to the next level?</span>
            </h2>

            <p className="font-inter text-base text-[#999999] leading-relaxed">
              Schedule a strategy consultation with our digital architects. We analyze your market goals and deliver a detailed custom proposal within 24 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#262626] font-inter text-sm text-white">
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#999999] block">Direct Line</span>
                  <span className="font-bold text-white">{COMPANY.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#999999] block">Official Email</span>
                  <span className="font-bold text-white">{COMPANY.email}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Terminal Form */}
          <div className="lg:col-span-7 framer-card-surface p-6 sm:p-10">
            <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <Terminal className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-bold">STRATEGY PROPOSAL FORM</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#0099FF]" />
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#1C1C1C] border border-[#262626] text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-montserrat font-bold text-2xl text-white">Proposal Request Submitted</h3>
                <p className="font-inter text-sm text-[#999999]">
                  Our digital strategy team is reviewing your project details. We will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#999999] mb-2 uppercase font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#090909] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#999999] mb-2 uppercase font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#090909] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#999999] mb-2 uppercase font-bold">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#090909] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#999999] mb-2 uppercase font-bold">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#090909] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition"
                    >
                      <option>Website & App Development</option>
                      <option>Search Engine Optimization (SEO)</option>
                      <option>Graphic & Brand Design</option>
                      <option>Social Media Marketing</option>
                      <option>Pay Per Click (PPC) Ads</option>
                      <option>Product Packaging Studio</option>
                      <option>Pan-India Outdoor Ads</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#999999] mb-2 uppercase font-bold">Project Goals / Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business goals, target timelines, and project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#090909] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full framer-btn-primary py-4 flex items-center justify-center gap-2"
                >
                  <span>Submit Proposal Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
