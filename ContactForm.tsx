"use client";
import { useState } from "react";
import { categories, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

type F = { name: string; phone: string; email: string; product: string; message: string };
const empty: F = { name: "", phone: "", email: "", product: "", message: "" };

function validate(f: F) {
  const e: Partial<F> = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  const digits = f.phone.replace(/[\s-]/g, "").replace(/^(\+?91|0)/, "");
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!f.product.trim()) e.product = "Choose or type the part you need.";
  if (f.message.trim().length < 5) e.message = "Add a short message (at least 5 characters).";
  return e;
}

export default function ContactForm() {
  const [f, setF] = useState<F>(empty);
  const [err, setErr] = useState<Partial<F>>({});
  const set = (k: keyof F) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(f);
    setErr(v);
    if (Object.keys(v).length) return;
    const text = `Hello SMA MOTOR PARTS,\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nProduct: ${f.product}\nMessage: ${f.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };
  const field = (k: keyof F, label: string, extra: object = {}) => (
    <div className={k === "email" || k === "product" || k === "message" ? "sm:col-span-2" : ""}>
      <label htmlFor={k} className="mb-1 block text-sm font-medium text-ink">{label} *</label>
      {k === "message" ? (
        <textarea id={k} rows={4} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} className="w-full rounded-lg border border-slate-200 p-3" />
      ) : (
        <input id={k} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} className="w-full rounded-lg border border-slate-200 p-3" {...extra} />
      )}
      {err[k] && <p role="alert" className="mt-1 text-sm text-red-600">{err[k]}</p>}
    </div>
  );
  return (
    <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-6 sm:p-9">
      <h3 className="font-display text-2xl font-bold text-ink">Send an enquiry</h3>
      <p className="mb-6 text-sm text-slate-500">This form prepares a WhatsApp message to us with your details.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Customer Name", { autoComplete: "name" })}
        {field("phone", "Phone Number", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
        {field("email", "Email Address", { type: "email", autoComplete: "email" })}
        {field("product", "Product Required", { list: "parts", placeholder: "Choose from the list or type a part name" })}
        <datalist id="parts">{categories.map((c) => <option key={c.name} value={c.name} />)}</datalist>
        {field("message", "Message")}
      </div>
      <button type="submit" className="btn btn-wa mt-6 w-full py-4"><WhatsAppIcon /> Send Enquiry on WhatsApp</button>
    </form>
  );
}
