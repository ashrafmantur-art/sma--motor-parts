import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";
import { site } from "@/lib/site";

const title = "SMA MOTOR PARTS Hubballi | Tata Truck Spare Parts, Wholesale & Retail";
const description = "SMA MOTOR PARTS on PB Road, Hubballi supplies automotive spare parts with a speciality in Tata truck spare parts. Wholesale and retail supply. Enquire on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: ["Tata truck spare parts", "truck spare parts Hubballi", "automotive spare parts Hubballi", "clutch plates", "leaf spring", "wholesale spare parts Karnataka"],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, url: site.url, siteName: site.name, locale: "en_IN", type: "website", images: [{ url: "/images/hero-truck.jpg", width: 1400, height: 1064, alt: "Tata truck on a highway" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero-truck.jpg"] },
};
export const viewport: Viewport = { themeColor: "#0a1f45", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/hero-truck.jpg`,
  address: { "@type": "PostalAddress", streetAddress: "PB Road, Opp. Indiranagar", addressLocality: "Hubballi", addressRegion: "Karnataka", postalCode: "580020", addressCountry: "IN" },
  hasMap: site.mapsUrl,
  sameAs: [site.instagramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
