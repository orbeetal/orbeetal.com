"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function EventCriteriaList({ tagline, title, titleHighlight, items }) {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
          >
            {tagline}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            {title} <span className="text-gradient">{titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 flex items-start gap-4 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-white mb-1">{item.label}</p>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
