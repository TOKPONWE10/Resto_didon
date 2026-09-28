import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  description,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowColor = tone === "light" ? "text-ivory-soft/70" : "text-ember";
  const descColor = tone === "light" ? "text-ivory-soft/80" : "text-charcoal/65";
  const lineColor = tone === "light" ? "bg-ivory-soft/50" : "bg-ember/60";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <span
            className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] ${eyebrowColor} ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className={`h-px w-8 ${lineColor}`} />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="text-balance font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className={`text-balance text-lg leading-[1.7] sm:text-xl ${descColor}`}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
