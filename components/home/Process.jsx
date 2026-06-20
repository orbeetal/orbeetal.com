"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/data/index.js";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          tagline="How We Work"
          title="Our"
          titleHighlight="Process"
          description="A battle-tested methodology built for speed, precision, and results."
          className="mb-20"
        />

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden lg:block -translate-y-1/2" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-background relative"
              >
                <div className="text-8xl font-display font-black text-white/5 absolute -top-10 -left-4 select-none pointer-events-none">
                  {step.num}
                </div>
                <div className="w-16 h-16 rounded-full bg-[#050B14] border border-primary/30 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_-5px_rgba(0,112,243,0.3)]">
                  <span className="text-xl font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
