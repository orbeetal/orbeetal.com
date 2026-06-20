"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { stats } from "@/data/index.js";
import { TeamGrid } from "@/components/shared/TeamGrid";

export function TeamPageContent() {
  return (
    <>
      {/* Team Grid */}
      <section className="py-20 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <TeamGrid />
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 border-t border-white/5 relative z-20">
        <div className="absolute inset-0 bg-white/1.5" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader
            tagline="By The Numbers"
            title="Impact We've"
            titleHighlight="Created"
            className="mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl border-t-2 border-t-primary/50 flex flex-col justify-center text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
