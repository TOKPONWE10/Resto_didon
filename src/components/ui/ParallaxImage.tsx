"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function ParallaxImage({ src, alt, className, sizes = "100vw" }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-[8%] h-[116%]"
        style={shouldReduceMotion ? undefined : { y }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={className} />
      </motion.div>
    </div>
  );
}
