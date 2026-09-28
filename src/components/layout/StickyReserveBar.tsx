import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function StickyReserveBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ivory/10 bg-charcoal/97 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href={restaurant.reservation.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ivory"
      >
        Réserver une table
      </Link>
    </div>
  );
}
