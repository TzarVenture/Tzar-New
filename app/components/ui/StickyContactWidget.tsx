"use client";

import React, { useState, useEffect } from "react";
import { X, MessageSquare, Phone, Mail, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/legacy-src/data/company";

export default function StickyContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent background scrolling while modal is open on mobile
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ──────────────────────────────────────────────────────────────────
          01. STICKY SIDE TRIGGER BUTTON (Right Viewport Edge)
      ────────────────────────────────────────────────────────────────── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 select-none">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex flex-col items-center gap-2.5 px-2.5 py-4 bg-[#061309] hover:bg-[#1D4224] text-white rounded-l-2xl border-t border-b border-l border-[#FFAE00]/40 hover:border-[#FFAE00] shadow-2xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFAE00]/60"
          aria-label="Open contact and social channels"
          title="Connect with Us"
        >
          {/* Chat Icon */}
          <div className="w-6 h-6 flex items-center justify-center text-[#FFAE00]">
            <MessageSquare className="w-5 h-5 stroke-[2.2]" />
          </div>

          {/* Rotated Vertical Text */}
          <span
            className="font-mono text-[11px] font-bold tracking-widest text-white/90 uppercase [writing-mode:vertical-rl] rotate-180"
            style={{ textOrientation: "mixed" }}
          >
            CONNECT
          </span>
        </button>
      </div>

      {/* ──────────────────────────────────────────────────────────────────
          02. FLOATING POP-UP MODAL & BACKDROP
      ────────────────────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center sm:justify-end sm:pr-8 p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Pop-up Card: Luxury Obsidian Spruce & Gold Glassmorphic Card */}
          <div
            className="relative w-full max-w-[360px] bg-[#061309]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(255,174,0,0.08)] border border-[#FFAE00]/25 overflow-hidden animate-slideInRight"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Luxury Lighting Glows */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#1D4224]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-center border-b border-white/[0.08] pb-4 pt-1">
              <h3 className="w-full text-center px-8 font-montserrat font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
                Connect With Us
              </h3>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-white/80 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Channels Grid (WhatsApp, Telegram, Skype, BOTIM) */}
            <div className="relative pt-3.5">
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#25D366]/40 flex items-center gap-2.5 transition-all duration-200 group no-underline shadow-sm hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-montserrat font-semibold text-xs text-white/90 group-hover:text-white truncate">
                    WhatsApp
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#25D366] transition-colors ml-auto shrink-0" />
                </a>

                {/* 2. Telegram */}
                <a
                  href={COMPANY.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#229ED9]/40 flex items-center gap-2.5 transition-all duration-200 group no-underline shadow-sm hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#229ED9] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M21.543 2.457a1.5 1.5 0 0 0-1.644-.326L2.695 9.098c-.897.35-.91 1.603.02 1.957l4.974 1.893 1.93 5.86c.214.65.986.953 1.564.555l2.87-1.976 4.908 3.65c.67.5 1.62.133 1.782-.693l2.8-14.5a1.5 1.5 0 0 0-.001-.001 1.5 1.5 0 0 0-1.009-1.386zM8.887 12.392l8.802-5.545c.22-.139.435.158.243.332l-7.234 6.551-.318 3.518-1.493-4.856z" />
                    </svg>
                  </div>
                  <span className="font-montserrat font-semibold text-xs text-white/90 group-hover:text-white truncate">
                    Telegram
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#229ED9] transition-colors ml-auto shrink-0" />
                </a>

                {/* 3. Skype */}
                <a
                  href={COMPANY.socials.skype}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#00aff0]/40 flex items-center gap-2.5 transition-all duration-200 group no-underline shadow-sm hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#00aff0] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M23.998 16.48c-.042-.647-.145-1.282-.308-1.9a7.65 7.65 0 0 0 .31-2.17c0-4.225-3.435-7.66-7.66-7.66-.757 0-1.488.11-2.18.312A7.632 7.632 0 0 0 12.26.754C8.034.754 4.6 4.19 4.6 8.414c0 .753.11 1.483.31 2.176a7.635 7.635 0 0 0-4.156 6.75c0 4.225 3.435 7.66 7.66 7.66.757 0 1.487-.11 2.18-.312a7.64 7.64 0 0 0 1.9.308c4.225 0 7.66-3.435 7.66-7.66 0-.756-.11-1.488-.31-2.18.163-.618.266-1.253.308-1.9zm-7.658 2.05c-1.306 1.077-3.072 1.543-5.28 1.39-1.848-.128-3.32-.823-4.4-2.083-.435-.508-.387-1.264.108-1.71.503-.453 1.272-.41 1.724.09.682.756 1.636 1.214 2.85 1.365 1.517.188 2.766-.11 3.73-.89.923-.746.993-1.688.208-2.316-.628-.5-1.602-.85-2.91-1.045-2.222-.33-3.842-1.03-4.838-2.088-.99-1.054-1.12-2.378-.39-3.483 1.025-1.55 2.774-2.344 5.234-2.38 1.66-.023 3.09.432 4.25 1.353.475.378.57 1.07.21 1.556-.36.485-1.045.584-1.53.22-.796-.597-1.785-.905-2.956-.92-1.698-.02-2.887.484-3.535 1.5-.47.734-.33 1.545.417 2.062.607.42 1.558.74 2.843.953 2.37.39 4.048 1.123 5.012 2.19.957 1.06 1.056 2.392.298 3.513z" />
                    </svg>
                  </div>
                  <span className="font-montserrat font-semibold text-xs text-white/90 group-hover:text-white truncate">
                    Skype
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#00aff0] transition-colors ml-auto shrink-0" />
                </a>

                {/* 4. BOTIM */}
                <a
                  href={COMPANY.socials.botim}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#00AEEF]/40 flex items-center gap-2.5 transition-all duration-200 group no-underline shadow-sm hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="24" fill="#00AEEF" />
                      <circle cx="31" cy="34" r="12.5" fill="white" />
                      <circle cx="69" cy="34" r="12.5" fill="white" />
                    </svg>
                  </div>
                  <span className="font-montserrat font-semibold text-xs text-white/90 group-hover:text-white truncate">
                    BOTIM
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#00AEEF] transition-colors ml-auto shrink-0" />
                </a>
              </div>
            </div>

            {/* Direct Call & Email */}
            <div className="relative pt-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, "")}`}
                  className="p-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#1D4224]/70 flex items-center gap-2 text-xs transition-colors group"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-white/80 group-hover:text-white truncate">
                    {COMPANY.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#FFAE00]/50 flex items-center gap-2 text-xs transition-colors group"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#FFAE00]/10 text-[#FFAE00] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[11px] font-medium text-white/80 group-hover:text-white truncate">
                    {COMPANY.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative pt-3.5 border-t border-white/[0.08] mt-3.5 flex items-center justify-center gap-3">
              {/* LinkedIn */}
              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#FFAE00] hover:text-[#061309] text-white/60 border border-white/[0.08] hover:border-[#FFAE00] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#FFAE00] hover:text-[#061309] text-white/60 border border-white/[0.08] hover:border-[#FFAE00] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#FFAE00] hover:text-[#061309] text-white/60 border border-white/[0.08] hover:border-[#FFAE00] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
