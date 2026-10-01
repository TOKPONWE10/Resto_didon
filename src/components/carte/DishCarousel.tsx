"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { useReducedMotion } from "framer-motion";
import type { MenuCategory } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DishCard } from "./DishCard";

type DishCarouselProps = {
  category: MenuCategory;
  /** Numéro du premier plat de la catégorie, pour numéroter toute la carte. */
  startAt: number;
};

type ScrollState = { progress: number; ratio: number; atStart: boolean; atEnd: boolean };

/**
 * Une catégorie de la carte, défilant horizontalement : au doigt sur mobile,
 * à la souris (glisser) ou aux flèches sur ordinateur, au clavier une fois la
 * rangée sélectionnée.
 */
export function DishCarousel({ category, startAt }: DishCarouselProps) {
  const track = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<ScrollState>({ progress: 0, ratio: 1, atStart: true, atEnd: false });
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      progress: max > 0 ? el.scrollLeft / max : 0,
      ratio: el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
      atStart: el.scrollLeft <= 4,
      atEnd: el.scrollLeft >= max - 4,
    });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const step = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
    el.scrollBy({
      left: direction * ((card?.offsetWidth ?? 340) + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  // Glisser à la souris ; le tactile garde le défilement natif.
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || !track.current) return;
    drag.current = { active: true, startX: e.clientX, startLeft: track.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = track.current;
    if (!drag.current.active || !el) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) > 5) {
      drag.current.moved = true;
      el.classList.add("is-dragging");
      el.setPointerCapture(e.pointerId);
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    const el = track.current;
    if (!drag.current.active || !el) return;
    drag.current.active = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    el.classList.remove("is-dragging");
  };

  const count = category.items.length;
  const headingId = `carte-${category.id}`;

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-8">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <Reveal className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal/45">
              {String(count).padStart(2, "0")} {count > 1 ? "propositions" : "proposition"}
            </span>
            <h2 id={headingId} className="font-serif text-4xl italic text-ember sm:text-5xl">
              {category.title}
            </h2>
          </Reveal>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <ArrowButton direction={-1} disabled={state.atStart} onClick={() => step(-1)} label={`${category.title} : précédent`} />
            <ArrowButton direction={1} disabled={state.atEnd} onClick={() => step(1)} label={`${category.title} : suivant`} />
          </div>
        </div>
      </Container>

      <div
        ref={track}
        role="region"
        aria-roledescription="carrousel"
        aria-labelledby={headingId}
        tabIndex={0}
        onScroll={measure}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="bleed-x no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 outline-none focus-visible:ring-1 focus-visible:ring-ember/40 sm:cursor-grab"
      >
        {category.items.map((item, index) => (
          <div
            key={item.name}
            data-card
            className="w-[78vw] max-w-[340px] shrink-0 snap-start sm:w-[340px]"
          >
            <Reveal delay={Math.min(index, 4) * 0.06} className="h-full">
              <DishCard item={item} number={startAt + index} />
            </Reveal>
          </div>
        ))}
      </div>

      <Container>
        <div className="relative h-px w-full bg-charcoal/10" aria-hidden>
          <div
            className="absolute inset-y-0 bg-ember transition-[left] duration-150 ease-out"
            style={{
              width: `${state.ratio * 100}%`,
              left: `${state.progress * (1 - state.ratio) * 100}%`,
            }}
          />
        </div>
      </Container>
    </section>
  );
}

function ArrowButton({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: 1 | -1;
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory disabled:pointer-events-none disabled:opacity-30"
    >
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${direction === -1 ? "rotate-180" : ""}`} aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
