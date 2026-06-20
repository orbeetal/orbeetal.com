"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction({
  title = "Ready to",
  titleHighlight = "Launch?",
  description = "Reach out and let's start building something exceptional together.",
  primaryAction = { href: "/contact", label: "Initiate Project" },
  secondaryAction = { href: "/portfolio", label: "See Our Work" },
}) {
  return (
    <section className="py-20 border-t border-white/5 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          {title} <span className="text-gradient">{titleHighlight}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/60 mb-10 max-w-xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={primaryAction.href}>
            <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]">
              {primaryAction.label} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <Button size="lg" variant="outline" className="h-14 px-10 border-white/20 hover:bg-white/5">
                {secondaryAction.label}
              </Button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
