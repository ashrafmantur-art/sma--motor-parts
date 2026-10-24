"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, products, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function Products() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products.filter((p) => (cat === "All" || p.category === cat) && (!s || `${p.name} ${p.category}`.toLowerCase().includes(s)));
  }, [q, cat]);
  return (
    <div>
      <label htmlFor="search" className="sr-only">Search parts</label>
      <input id="search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search parts, e.g. clutch, brake, filter..." className="w-full max-w-xl rounded-full border border-slate-200 bg-white px-6 py-4 shadow-sm placeholder:text-slate-400" />
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {["All", ...categories.map((c) => c.name)].map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full border px-4 py-2 text-sm ${cat === c ? "border-navy bg-navy text-white" : "border-slate-200 bg-white hover:border-gold"}`}>{c}</button>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500" aria-live="polite">{list.length} products shown</p>
      {list.length === 0 && <p className="mt-6 rounded-xl bg-white p-6">No parts match your search. <a className="font-semibold text-navy underline" href={waLink(`Hello, I am looking for: ${q}`)}>Ask us on WhatsApp</a>.</p>}
      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            <div className="relative aspect-[4/3] bg-ink"><Image src={`/images/${p.image}.jpg`} alt={p.name} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" /></div>
            <div className="p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{p.category}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-blue-800">Contact for Price and Availability</p>
              <a href={waLink(`Hello SMA MOTOR PARTS, I would like to enquire about: ${p.name}`)} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-3 w-full"><WhatsAppIcon /> Enquire Now</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
