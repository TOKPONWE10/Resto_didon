"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/components/layout/nav-links";
import { restaurant } from "@/data/restaurant";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 top-[var(--demo-h,0px)] z-[45] flex flex-col bg-charcoal px-6 pt-28 pb-10 lg:hidden"
        >
          <nav className="flex flex-1 flex-col justify-center gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-ivory/10 py-5 font-serif text-3xl text-ivory"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex flex-col gap-4">
            <Link
              href={restaurant.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-ember px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory"
            >
              Réserver une table
            </Link>
            <a
              href={`tel:${restaurant.phone.href}`}
              className="text-center text-sm text-ivory/60"
            >
              {restaurant.phone.display}
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
