"use client";

/* Contact widget: a small button pinned to the bottom-right corner that opens
   a panel just above it. No page overlay, no blur and no scroll lock, so the
   page stays usable; it closes on Escape, on an outside click or from its
   own close button. */

import React, { useEffect, useRef, useState } from "react";
import { X, MessageSquare, Phone, Mail, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/legacy-src/data/company";

type Channel = {
  label: string;
  href: string;
  color: string;
  external?: boolean;
  icon: React.ReactNode;
};

const CHANNELS: Channel[] = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${COMPANY.whatsapp}`,
    color: "#25D366",
    external: true,
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
  },
  {
    label: "Telegram",
    href: COMPANY.socials.telegram,
    color: "#229ED9",
    external: true,
    icon: (
      <path d="M21.543 2.457a1.5 1.5 0 0 0-1.644-.326L2.695 9.098c-.897.35-.91 1.603.02 1.957l4.974 1.893 1.93 5.86c.214.65.986.953 1.564.555l2.87-1.976 4.908 3.65c.67.5 1.62.133 1.782-.693l2.8-14.5a1.5 1.5 0 0 0-.001-.001 1.5 1.5 0 0 0-1.009-1.386zM8.887 12.392l8.802-5.545c.22-.139.435.158.243.332l-7.234 6.551-.318 3.518-1.493-4.856z" />
    ),
  },
  {
    label: "Skype",
    href: COMPANY.socials.skype,
    color: "#00AFF0",
    icon: (
      <path d="M23.998 16.48c-.042-.647-.145-1.282-.308-1.9a7.65 7.65 0 0 0 .31-2.17c0-4.225-3.435-7.66-7.66-7.66-.757 0-1.488.11-2.18.312A7.632 7.632 0 0 0 12.26.754C8.034.754 4.6 4.19 4.6 8.414c0 .753.11 1.483.31 2.176a7.635 7.635 0 0 0-4.156 6.75c0 4.225 3.435 7.66 7.66 7.66.757 0 1.487-.11 2.18-.312a7.64 7.64 0 0 0 1.9.308c4.225 0 7.66-3.435 7.66-7.66 0-.756-.11-1.488-.31-2.18.163-.618.266-1.253.308-1.9zm-7.658 2.05c-1.306 1.077-3.072 1.543-5.28 1.39-1.848-.128-3.32-.823-4.4-2.083-.435-.508-.387-1.264.108-1.71.503-.453 1.272-.41 1.724.09.682.756 1.636 1.214 2.85 1.365 1.517.188 2.766-.11 3.73-.89.923-.746.993-1.688.208-2.316-.628-.5-1.602-.85-2.91-1.045-2.222-.33-3.842-1.03-4.838-2.088-.99-1.054-1.12-2.378-.39-3.483 1.025-1.55 2.774-2.344 5.234-2.38 1.66-.023 3.09.432 4.25 1.353.475.378.57 1.07.21 1.556-.36.485-1.045.584-1.53.22-.796-.597-1.785-.905-2.956-.92-1.698-.02-2.887.484-3.535 1.5-.47.734-.33 1.545.417 2.062.607.42 1.558.74 2.843.953 2.37.39 4.048 1.123 5.012 2.19.957 1.06 1.056 2.392.298 3.513z" />
    ),
  },
  {
    label: "BOTIM",
    href: COMPANY.socials.botim,
    color: "#00AEEF",
    external: true,
    icon: (
      <>
        <circle cx="7.5" cy="9" r="3" />
        <circle cx="16.5" cy="9" r="3" />
      </>
    ),
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: COMPANY.socials.linkedin,
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Instagram",
    href: COMPANY.socials.instagram,
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: COMPANY.socials.facebook,
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function StickyContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape or a click outside; return focus to the trigger on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  const tel = `tel:${COMPANY.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <div ref={rootRef} className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col items-end gap-3 select-none pointer-events-none">
      {/* Panel */}
      <div
        id="contact-widget-panel"
        role="dialog"
        aria-label="Contact us"
        aria-hidden={!isOpen}
        className={`w-[min(20rem,calc(100vw-2rem))] origin-bottom-right rounded-2xl border border-[#244A2C] bg-[#0E2015] text-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] transition-[opacity,transform,visibility] duration-200 ease-out ${
          isOpen ? "opacity-100 translate-y-0 scale-100 visible pointer-events-auto" : "opacity-0 translate-y-2 scale-95 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <p className="font-montserrat font-black text-base">Talk to us</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg bg-[#12301A] hover:bg-[#1D4224] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
            tabIndex={isOpen ? 0 : -1}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <ul className="px-2">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                tabIndex={isOpen ? 0 : -1}
                className="group flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#12301A] transition-colors"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: c.color }}>
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    {c.icon}
                  </svg>
                </span>
                <span className="font-montserrat font-semibold text-sm">{c.label}</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-[#FFAE00] transition-colors" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-4 my-2 border-t border-[#244A2C]" />

        <ul className="px-2">
          <li>
            <a href={tel} tabIndex={isOpen ? 0 : -1} className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#12301A] transition-colors">
              <span className="w-8 h-8 rounded-lg bg-[#FFAE00] text-[#0E2015] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <span className="text-sm font-semibold">{COMPANY.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${COMPANY.email}`} tabIndex={isOpen ? 0 : -1} className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#12301A] transition-colors">
              <span className="w-8 h-8 rounded-lg bg-[#B6F8DD] text-[#0E2015] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              <span className="text-sm font-semibold truncate">{COMPANY.email}</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 px-4 pt-3 pb-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              tabIndex={isOpen ? 0 : -1}
              className="w-8 h-8 rounded-lg bg-[#12301A] text-white/80 hover:bg-[#FFAE00] hover:text-[#0E2015] flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Trigger */}
      <button
        ref={triggerRef}
        style={{ pointerEvents: "auto" }}
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-controls="contact-widget-panel"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        className="h-12 w-12 sm:w-auto sm:px-5 rounded-full text-sm font-bold font-montserrat inline-flex items-center justify-center gap-2 tz-btn tz-btn-primary shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)]"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        <span className="hidden sm:inline">{isOpen ? "Close" : "Contact us"}</span>
      </button>
    </div>
  );
}
