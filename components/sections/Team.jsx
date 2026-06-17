"use client";

import { motion } from "framer-motion";
import { TeamGrid } from "@/components/sections/TeamGrid";

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-white/1.5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Meet the <span className="text-gradient">Directors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60"
          >
            Seven visionary leaders driving Orbeetal&apos;s mission to engineer competitive advantages for businesses worldwide.
          </motion.p>
        </div>

        <TeamGrid />
      </div>
    </section>
  );
}
