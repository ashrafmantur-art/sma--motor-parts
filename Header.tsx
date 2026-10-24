"use client";
import { useState } from "react";
import { site } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [["Home", "#home"], ["About", "#about"], ["Products", "#products"], ["Gallery", "#gallery"], ["Contact", "#contact"]];

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-navy font-display text-sm font-bold text-gold">SMA</span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold text-white">{site.name}</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{site.city}</span>
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-ink/90 to-ink/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" aria-label={`${site.name} home`}><Logo /></a>
        <nav className="hidden items-center gap-7 text-sm text-white md:flex" aria-label="Main">
          {links.map(([l, h]) => (<a key={h} href={h} className="hover:text-gold">{l}</a>))}
          <a href={`tel:${site.tel}`} className="btn btn-gold !py-2">Call Now</a>
        </nav>
        <button className="text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-ink px-5 pb-5 md:hidden" aria-label="Mobile">
          {links.map(([l, h]) => (<a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-white">{l}</a>))}
          <a href={`tel:${site.tel}`} className="btn btn-gold mt-4 w-full">Call Now</a>
        </nav>
      )}
    </header>
  );
}
