"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";
import { navLinks } from "@/components/layout/nav-links";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-[var(--demo-h,0px)] z-50 transition-colors duration-500 ${
          solid ? "bg-charcoal/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link href="/" className="relative z-10 shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo/didon-logo-light.png"
              alt="Didon"
              width={130}
              height={44}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ivory/85 transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={restaurant.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-ivory/40 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-ivory hover:text-charcoal sm:inline-flex"
            >
              Réserver
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ivory transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
