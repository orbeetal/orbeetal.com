"use client";

import { motion } from "framer-motion";
import { resolveIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function EventInfoCardGrid({ cards }) {
  return (
    <section className="py-16 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = resolveIcon(card.icon);
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-8 border border-white/10 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-2">{card.label}</p>
                <p className="text-xl font-display font-bold text-white mb-1">{card.value}</p>
                <p className="text-sm text-white/50">{card.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
