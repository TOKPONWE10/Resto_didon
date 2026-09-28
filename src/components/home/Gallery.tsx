"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const spans = [
  "col-span-2 row-span-2",
  "row-span-1",
  "row-span-1",
  "col-span-2 row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-1",
  "col-span-2 row-span-1",
  "row-span-1",
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    [],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="galerie" className="scroll-mt-20 bg-ivory py-28 sm:py-36 lg:py-44">
      <Container className="flex flex-col gap-20">
        <SectionHeading eyebrow="Galerie" title="L'instant Didon, en images." />

        <div className="grid grid-flow-row-dense grid-cols-2 auto-rows-[9rem] gap-3 sm:grid-cols-4 sm:gap-4 lg:auto-rows-[12rem]">
          {gallery.map((image, index) => (
            <Reveal key={image.src} delay={0.03 * index} className={spans[index % spans.length]}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Agrandir : ${image.alt}`}
                className="group relative block h-full w-full overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-charcoal/40" />
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[activeIndex].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/97 p-4 backdrop-blur-sm sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer la galerie"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-2xl text-ivory/80 hover:text-ivory"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Image précédente"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-ivory/70 hover:text-ivory sm:left-6"
          >
            ‹
          </button>

          <div className="flex flex-col items-center gap-4">
            <div
              className="relative h-[65vh] w-[min(90vw,64rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-ivory/40">
              {activeIndex + 1} / {gallery.length}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Image suivante"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-ivory/70 hover:text-ivory sm:right-6"
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}
