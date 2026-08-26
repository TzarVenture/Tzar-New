"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [{ href: "#capabilities", label: "Capabilities" }, { href: "#work", label: "Work" }, { href: "#about", label: "About" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  useEffect(() => { const stored = localStorage.getItem("tzar-theme"); const next = stored === "light"; setLight(next); document.documentElement.classList.toggle("light", next); }, []);
  function toggleTheme() { const next = !light; setLight(next); localStorage.setItem("tzar-theme", next ? "light" : "dark"); document.documentElement.classList.toggle("light", next); }
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-7"><div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/15 bg-[#111111]/75 px-4 py-3 text-white shadow-2xl backdrop-blur-xl"><Link href="/" className="flex items-center gap-2 text-lg font-black tracking-[-.08em]"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#d4af37] text-xs text-[#111]">T</span>TZAR <span className="font-medium tracking-normal text-white/45">VENTURE</span></Link><nav className="hidden gap-8 text-sm text-white/70 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="transition hover:text-[#d4af37]">{link.label}</a>)}</nav><div className="flex items-center gap-2"><button onClick={toggleTheme} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 hover:text-[#d4af37]" aria-label="Toggle colour theme">{light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button><a href="#contact" className="hidden rounded-full bg-[#d4af37] px-4 py-2 text-sm font-bold text-[#111] sm:block">Let’s talk</a><button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 md:hidden" aria-expanded={open} aria-label="Open menu">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></div>{open && <div className="mx-auto mt-2 max-w-[1440px] rounded-3xl border border-white/15 bg-[#161618] p-5 text-white shadow-2xl md:hidden"><nav className="flex flex-col gap-1">{links.map((link) => <a key={link.href} onClick={() => setOpen(false)} href={link.href} className="rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/10">{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#d4af37] px-4 py-3 text-center font-bold text-[#111]">Start a project</a></nav></div>}</header>;
}
