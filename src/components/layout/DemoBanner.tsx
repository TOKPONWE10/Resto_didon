"use client";

import { useEffect, useRef, useState } from "react";
import { DEMO, OFFICIAL_SITE, isLiveActionHref } from "@/lib/demo";

/**
 * Bandeau de démonstration et garde des liens. Le garde écoute les clics au
 * niveau du document, en phase de capture : il couvre tous les composants, y
 * compris ceux rendus après une navigation côté client.
 */
export function DemoBanner() {
  const bar = useRef<HTMLDivElement>(null);
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    if (!DEMO) return;
    const root = document.documentElement;

    const size = () => {
      if (bar.current) root.style.setProperty("--demo-h", `${bar.current.offsetHeight}px`);
    };
    size();
    const ro = new ResizeObserver(size);
    if (bar.current) ro.observe(bar.current);

    let timer: number | undefined;
    const block = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || !isLiveActionHref(link.getAttribute("href"))) return;
      e.preventDefault();
      e.stopPropagation();
      setNotice(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setNotice(false), 2800);
    };
    document.addEventListener("click", block, true);
    document.addEventListener("auxclick", block, true);

    return () => {
      ro.disconnect();
      document.removeEventListener("click", block, true);
      document.removeEventListener("auxclick", block, true);
      window.clearTimeout(timer);
    };
  }, []);

  if (!DEMO) return null;

  return (
    <>
      <div
        ref={bar}
        role="status"
        className="fixed inset-x-0 top-0 z-[60] bg-ember px-5 py-2.5 text-center text-[0.78rem] leading-snug text-ivory"
      >
        <strong className="font-semibold">Maquette de démonstration</strong>
        <span className="hidden sm:inline"> — proposition réalisée par UpTech, sans lien avec le restaurant.</span>
        <span className="sm:hidden"> — sans lien avec le restaurant.</span>{" "}
        <a
          href={OFFICIAL_SITE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-ivory/50 underline-offset-2 hover:decoration-ivory"
        >
          Site officiel de Didon
        </a>
      </div>

      <div
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-24 z-[70] flex justify-center px-6 transition-all duration-300 md:bottom-10 ${
          notice ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {notice ? (
          <p className="rounded-full bg-charcoal px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-ivory shadow-lg">
            Démonstration : réservation et appels désactivés
          </p>
        ) : null}
      </div>
    </>
  );
}
