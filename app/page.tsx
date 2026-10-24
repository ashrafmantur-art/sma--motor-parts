import Image from "next/image";
import Header, { Logo } from "@/components/Header";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import { CheckIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { categories, site, waLink } from "@/lib/site";

const why = [
  ["Tata Truck Spare Parts Specialization", "Tata truck parts are what we focus on."],
  ["Wholesale and Retail Supply", "Buy a single part or in quantity."],
  ["Wide Range of Automotive Spare Parts", "Twelve categories across commercial vehicle needs."],
  ["Convenient Hubballi Location", "Right on PB Road, opposite Indiranagar."],
  ["Direct Customer Enquiries", "Reach us straight on WhatsApp, phone or email."],
  ["Helpful Product Assistance", "Ask us about the part you need."],
];
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent("SMA Motor Parts, PB Road, Hubballi, Karnataka 580020")}&output=embed`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="home" className="relative flex min-h-[100svh] items-end bg-ink">
          <Image src="/images/hero-truck.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
            <p className="eyebrow">Hubballi · Wholesale &amp; Retail</p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              <span className="text-gold">SMA MOTOR PARTS</span> — Your Trusted Partner for Truck Spare Parts.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">Complete Range of Automotive Spare Parts | Tata Spare Parts Specialist | Wholesale &amp; Retail Supply.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="btn btn-gold">Explore Products</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><WhatsAppIcon /> WhatsApp Enquiry</a>
              <a href={`tel:${site.tel}`} className="btn btn-line"><PhoneIcon /> Call Now</a>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line"><PinIcon /> Get Directions</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/images/tata-parts.jpg" alt="Brake drum, belts and hub" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-5 right-3 rounded-xl bg-navy px-5 py-3 text-white shadow-lg">
                <p className="font-display text-lg font-bold text-gold">Hubballi</p><p className="text-sm">PB Road</p>
              </div>
            </div>
            <div>
              <p className="eyebrow">About us</p>
              <h2 className="h2 text-ink">An automotive spare parts supplier in Hubballi</h2>
              <p className="mt-5 leading-relaxed">SMA MOTOR PARTS supplies automotive spare parts from PB Road, Hubballi, with a speciality in Tata truck spare parts. We serve customers through both wholesale and retail supply.</p>
              <p className="mt-4 leading-relaxed">From engine, suspension and clutch parts to brakes, bearings and filters, we keep a wide range of parts for commercial vehicles. Tell us what you need and our team will help you with it.</p>
              <ul className="mt-6 space-y-3">
                {[["Tata truck specialist.", "Tata truck spare parts are our speciality."], ["Wholesale and retail.", "We supply both trade and individual customers."], ["Direct support.", "Call or message us and we will help you find the right part."]].map(([b, t]) => (
                  <li key={b} className="flex gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink"><CheckIcon width={14} height={14} /></span><span><b className="text-ink">{b}</b> {t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Shop by category</p>
            <h2 className="h2 text-white">What we supply</h2>
            <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
              {categories.map((c) => (
                <li key={c.name} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-ink">
                  <Image src={`/images/${c.image}.jpg`} alt="" fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white">{c.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-mist py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Products</p>
            <h2 className="h2 max-w-2xl text-ink">Spare parts for trucks and commercial vehicles</h2>
            <p className="mb-8 mt-4 max-w-xl">Browse our categories, search for a part and enquire on WhatsApp. Price and availability are shared on enquiry.</p>
            <Products />
          </div>
        </section>

        {/* Why us */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="h2 mb-10 text-ink">Built around what truck owners need</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {why.map(([t, d], n) => (
                <li key={t} className="rounded-2xl border border-slate-100 bg-mist p-6">
                  <p className="font-display text-3xl font-bold text-gold">0{n + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{t}</h3>
                  <p className="mt-1 text-sm">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-ink py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Gallery</p>
            <h2 className="h2 text-white">Trucks, components and parts</h2>
            <p className="mb-8 mt-4 max-w-xl text-slate-300">Tap any image to view it larger. Images are illustrative of the kinds of products we deal in.</p>
            <Gallery />
          </div>
        </section>

        {/* Instagram */}
        <section className="bg-mist py-20 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold"><InstagramIcon width={28} height={28} /></span>
            <h2 className="h2 mt-5 text-ink">Follow us on Instagram</h2>
            <p className="mt-3">See our latest parts and updates on <b>{site.instagramHandle}</b>.</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn mt-6 bg-navy text-white hover:brightness-125"><InstagramIcon /> Follow Us on Instagram</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-gradient-to-b from-navy to-ink py-20">
          <div className="mx-auto max-w-4xl px-5">
            <p className="eyebrow">Contact &amp; location</p>
            <h2 className="h2 text-white">Visit us or get in touch</h2>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <iframe title="SMA MOTOR PARTS on Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0" />
            </div>
            <p className="mt-2 text-xs text-slate-400">Map is an address search for the location below. Use “Get Directions” for our exact Google Maps listing.</p>
            <ul className="mt-6 space-y-3 text-white">
              <li className="flex gap-3"><PinIcon className="mt-1 shrink-0 text-gold" /> {site.address}</li>
              <li className="flex gap-3"><PhoneIcon className="mt-1 shrink-0 text-gold" /> <a href={`tel:${site.tel}`}>{site.phone}</a></li>
              <li className="flex gap-3"><MailIcon className="mt-1 shrink-0 text-gold" /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><PinIcon /> Get Directions</a>
              <a href={`tel:${site.tel}`} className="btn btn-line"><PhoneIcon /> Call Now</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><WhatsAppIcon /> WhatsApp Enquiry</a>
              <a href={`mailto:${site.email}`} className="btn btn-line"><MailIcon /> Email Us</a>
            </div>
            <div className="mt-10"><ContactForm /></div>
            <p className="mt-4 text-center text-sm text-slate-300">Prefer email? <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
        </section>
      </main>

      <footer className="bg-ink pt-14 text-sm text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div><Logo /><p className="mt-4 max-w-sm">Automotive spare parts supplier in Hubballi. Tata truck spare parts specialist. Wholesale and retail supply.</p></div>
          <div><h3 className="mb-3 font-display text-lg font-bold text-gold">Products</h3><ul className="space-y-1.5">{categories.map((c) => <li key={c.name}><a href="#products" className="hover:text-white">{c.name}</a></li>)}</ul></div>
          <div><h3 className="mb-3 font-display text-lg font-bold text-gold">Contact</h3><p>{site.phone}</p><p className="mt-1">{site.email}</p><p className="mt-1">{site.address}</p></div>
          <div><h3 className="mb-3 font-display text-lg font-bold text-gold">Connect</h3><ul className="space-y-1.5"><li><a href={site.mapsUrl} className="hover:text-white">Google Maps directions</a></li><li><a href={waLink()} className="hover:text-white">WhatsApp</a></li><li><a href={site.instagramUrl} className="hover:text-white">Instagram</a></li></ul></div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-5 py-6 text-xs text-slate-500">© {new Date().getFullYear()} {site.name}, {site.city}. All rights reserved.</p>
      </footer>

      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-xl ring-4 ring-white/20 hover:brightness-110"><WhatsAppIcon width={28} height={28} /></a>
    </>
  );
                }
