import Image from "next/image";
import type { MenuItem } from "@/data/menu";

type DishCardProps = {
  item: MenuItem;
  number: number;
  sizes?: string;
};

/**
 * Carte d'un plat. Le nom est posé sur le visuel ; la photo n'apparaît que
 * lorsqu'elle montre bien ce plat. À défaut, un fond de braise prend le relais
 * plutôt que la photo d'un autre plat.
 */
export function DishCard({ item, number, sizes = "(min-width: 640px) 340px, 78vw" }: DishCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
        {item.image ? (
          <>
            <Image
              src={item.image}
              alt={`${item.name}, servi chez Didon`}
              fill
              sizes={sizes}
              draggable={false}
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
          </>
        ) : (
          <div
            aria-hidden
            className="ember-glow absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
        )}

        <span className="absolute left-7 top-6 font-serif text-sm italic text-sand/75">
          N° {String(number).padStart(2, "0")}
        </span>
        {item.tag ? (
          <span className="absolute right-6 top-5 rounded-full border border-ivory/25 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ivory/80">
            {item.tag}
          </span>
        ) : null}
        <h3 className="absolute inset-x-7 bottom-6 text-balance font-serif text-[1.9rem] leading-[1.05] text-ivory">
          {item.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-4 pt-5">
        <p className="text-[0.95rem] leading-relaxed text-charcoal/65">{item.description}</p>
        <span className="mt-auto border-t border-charcoal/10 pt-4 font-serif text-lg text-ember">
          {item.price}
        </span>
      </div>
    </article>
  );
}
