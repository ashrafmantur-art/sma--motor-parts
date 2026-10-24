"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/site";
import { CloseIcon } from "./Icons";

export default function Gallery() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((x) => (x === null ? x : (x + 1) % gallery.length));
      if (e.key === "ArrowLeft") setI((x) => (x === null ? x : (x - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [i]);
  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((g, n) => (
          <li key={g.image} className={g.big ? "col-span-2 row-span-2" : ""}>
            <button onClick={() => setI(n)} className="relative block aspect-[4/3] h-full w-full overflow-hidden rounded-xl border border-white/10" aria-label={`View larger: ${g.alt}`}>
              <Image src={`/images/${g.image}.jpg`} alt={g.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      {i !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setI(null)}>
          <button className="absolute right-4 top-4 text-white" aria-label="Close" onClick={() => setI(null)}><CloseIcon /></button>
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={`/images/${gallery[i].image}.jpg`} alt={gallery[i].alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
