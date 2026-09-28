import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost-light";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ember text-ivory hover:bg-ember-brown border border-ember hover:border-ember-brown",
  "outline-light":
    "border border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal",
  "outline-dark":
    "border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory",
  "ghost-light": "text-ivory hover:text-sand underline underline-offset-4 decoration-ivory/40",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300";

export function Button({ href, children, variant = "primary", className = "", target, rel }: ButtonAsLink) {
  const isExternal = href.startsWith("http");
  const computedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return (
    <Link
      href={href}
      target={target}
      rel={computedRel}
      className={`${base} ${variantClasses[variant]} ${className}`}
      prefetch={isExternal ? false : undefined}
    >
      {children}
    </Link>
  );
}
