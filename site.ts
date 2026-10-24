// Edit business details here. Everything on the site reads from this file.
export const site = {
  name: "SMA MOTOR PARTS",
  city: "Hubballi",
  url: "https://sma-motor-parts.vercel.app",
  phone: "+91 9880039694",
  tel: "+919880039694",
  whatsapp: "919880039694", // country code + number, digits only (from the phone shown on the original site)
  email: "smahubballi@gmail.com",
  address: "PB Road, Opp. Indiranagar, Hubballi, Karnataka 580020",
  mapsUrl: "https://maps.app.goo.gl/MbuQdP65j3FTXXev6",
  instagramHandle: "@sma_hubli",
  instagramUrl: "https://www.instagram.com/sma_hubli/", // built from the handle; confirm it
};

export const waLink = (text = "Hello SMA MOTOR PARTS, I would like to enquire about a spare part.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const categories = [
  { name: "Tata Truck Spare Parts", image: "tata-parts" },
  { name: "Engine Components", image: "engine" },
  { name: "Suspension Systems", image: "suspension" },
  { name: "Shock Absorbers", image: "shock-absorbers" },
  { name: "Clutch Plates", image: "clutch-plates" },
  { name: "Gears and Gearboxes", image: "gearbox" },
  { name: "Bearings", image: "bearings" },
  { name: "Hydraulic Jacks", image: "hydraulic-jack" },
  { name: "Air Suspension Balloons", image: "air-suspension" },
  { name: "Brake Components", image: "brake" },
  { name: "Filters and Lubrication Parts", image: "filters" },
  { name: "Other Commercial Vehicle Spare Parts", image: "other-parts" },
];

// Add or edit products here. `category` must match a category name above.
export const products: { name: string; category: string; image: string }[] = [
  { name: "Tata Truck Spare Parts", category: "Tata Truck Spare Parts", image: "tata-parts" },
  { name: "Tata Truck Service Parts", category: "Tata Truck Spare Parts", image: "tata-parts" },
  { name: "Engine Components", category: "Engine Components", image: "engine" },
  { name: "Engine Gaskets and Seals", category: "Engine Components", image: "engine" },
  { name: "Suspension Systems", category: "Suspension Systems", image: "suspension" },
  { name: "Leaf Spring Parts", category: "Suspension Systems", image: "suspension" },
  { name: "Shock Absorbers", category: "Shock Absorbers", image: "shock-absorbers" },
  { name: "Clutch Plates", category: "Clutch Plates", image: "clutch-plates" },
  { name: "Pressure Plates", category: "Clutch Plates", image: "pressure-plates" },
  { name: "Gears and Gearboxes", category: "Gears and Gearboxes", image: "gearbox" },
  { name: "Gearbox Parts", category: "Gears and Gearboxes", image: "gearbox" },
  { name: "Bearings", category: "Bearings", image: "bearings" },
  { name: "Hydraulic Jacks", category: "Hydraulic Jacks", image: "hydraulic-jack" },
  { name: "Air Suspension Balloons", category: "Air Suspension Balloons", image: "air-suspension" },
  { name: "Brake Components", category: "Brake Components", image: "brake" },
  { name: "Filters and Lubrication Parts", category: "Filters and Lubrication Parts", image: "filters" },
  { name: "Other Commercial Vehicle Spare Parts", category: "Other Commercial Vehicle Spare Parts", image: "other-parts" },
];

export const gallery = [
  { image: "hero-truck", alt: "Tata truck on a highway at sunset", big: true },
  { image: "tata-parts", alt: "Brake drum, belts and hub" },
  { image: "suspension", alt: "Leaf spring" },
  { image: "hydraulic-jack", alt: "Hydraulic jack" },
  { image: "trucks-queue", alt: "Line of trucks at dusk" },
  { image: "shock-absorbers", alt: "Shock absorbers" },
  { image: "gearbox", alt: "Gearbox internals" },
  { image: "air-suspension", alt: "Air suspension balloon" },
  { image: "truck-tyre", alt: "Truck wheel on a dusty road" },
  { image: "engine", alt: "Piston, liner and crankshaft" },
  { image: "brake", alt: "Brake drum and shoes" },
  { image: "clutch-plates", alt: "Clutch and pressure plate" },
];
