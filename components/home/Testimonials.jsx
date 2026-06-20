"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { testimonials } from "@/data/index.js";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          tagline="From Our Customers"
          title="What Our Clients"
          titleHighlight="Say"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-panel rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-5 flex-shrink-0" />
              <p className="text-white/70 leading-relaxed mb-8 flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-display font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/45 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
