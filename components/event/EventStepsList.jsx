"use client";

import { motion } from "framer-motion";
import { resolveIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const accentStyles = {
  amber: {
    card: "hover:border-amber-400/30 hover:bg-amber-500/5",
    iconBox: "bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20",
    icon: "text-amber-400",
  },
  primary: {
    card: "hover:border-primary/30 hover:bg-primary/5",
    iconBox: "bg-primary/10 border-primary/20 group-hover:bg-primary/20",
    icon: "text-primary",
  },
};

export function EventStepsList({ tagline, title, titleHighlight, items, accent = "primary", showStepNumber = false }) {
  const styles = accentStyles[accent] ?? accentStyles.primary;

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = resolveIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "glass-panel rounded-2xl p-8 border border-white/10 transition-all duration-300 group relative",
                  styles.card
                )}
              >
                {showStepNumber && (
                  <span className="absolute top-6 right-6 text-4xl font-display font-bold text-white/5 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <div className={cn("w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-colors duration-300", styles.iconBox)}>
                  {Icon && <Icon className={cn("w-6 h-6", styles.icon)} />}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
