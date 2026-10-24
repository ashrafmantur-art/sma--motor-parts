import type { SVGProps } from "react";
const base = (p: SVGProps<SVGSVGElement>) => ({ width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, ...p });
export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .7a3.5 3.5 0 0 1-1.7-1.7l.7-1-1-2L9 9.5z" /></svg>
);
export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>);
export const PinIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></svg>);
export const MailIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r=".5" /></svg>);
export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M5 12.500l4.500 4.500L19 7.500" /></svg>);
export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base({ width: 24, height: 24, ...p })}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base({ width: 24, height: 24, ...p })}><path d="M6 6l12 12M18 6L6 18" /></svg>);
