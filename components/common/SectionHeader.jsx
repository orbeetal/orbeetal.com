"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  tagline,
  title,
  titleHighlight,
  description,
  align = "center",
  animated = true,
  className,
}) {
  const isCenter = align === "center";
  const Wrapper = animated ? motion.p : "p";
  const TitleWrapper = animated ? motion.h2 : "h2";
  const DescWrapper = animated ? motion.p : "p";

  const taglineProps = animated
    ? { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
    : {};
  const titleProps = animated
    ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.1 } }
    : {};
  const descProps = animated
    ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 } }
    : {};

  return (
    <div className={cn(isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl", className)}>
      {tagline && (
        <Wrapper
          {...taglineProps}
          className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
        >
          {tagline}
        </Wrapper>
      )}
      {title && (
        <TitleWrapper
          {...titleProps}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          {title}{" "}
          {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
        </TitleWrapper>
      )}
      {description && (
        <DescWrapper {...descProps} className="text-xl text-white/60">
          {description}
        </DescWrapper>
      )}
    </div>
  );
}
