import { reviewsSource } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Reviews() {
  const maxCount = Math.max(...reviewsSource.breakdown.map((b) => b.count));

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-14 border-y border-charcoal/10 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <Reveal className="flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-7xl leading-none sm:text-8xl">
                {reviewsSource.rating.toString().replace(".", ",")}
              </span>
              <span className="text-base text-charcoal/45">/ 5</span>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-charcoal/60">
              {reviewsSource.reviewCount} avis vérifiés sur {reviewsSource.provider}
              <br />
              {reviewsSource.ranking}
            </p>
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              <span className="h-px w-8 bg-ember/60" />
              {reviewsSource.distinction}
            </span>
            <a
              href={reviewsSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit text-xs font-medium uppercase tracking-[0.2em] text-charcoal/70 underline underline-offset-4 decoration-charcoal/25 transition-colors hover:text-charcoal"
            >
              Lire les avis sur {reviewsSource.provider}
            </a>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-1 flex-col gap-3 sm:max-w-md">
            {reviewsSource.breakdown.map((row) => (
              <div key={row.label} className="flex items-center gap-4 text-xs text-charcoal/55">
                <span className="w-20 shrink-0 uppercase tracking-[0.12em]">{row.label}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-charcoal/10">
                  <span
                    className="block h-full rounded-full bg-ember"
                    style={{ width: `${(row.count / maxCount) * 100}%` }}
                  />
                </span>
                <span className="w-8 shrink-0 text-right tabular-nums">{row.count}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
