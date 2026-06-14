"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Paintbrush, Smartphone, ShieldCheck, TrendingUp, Brain, Monitor, Cpu } from "lucide-react";
import { services } from "@/data/index.js";

const ICON_MAP = { Code2, Paintbrush, Smartphone, ShieldCheck, TrendingUp, Brain, Monitor, Cpu };

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Strategic <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-xl text-white/60">
            A full-spectrum armory of digital services. We don't just build software; we engineer competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-panel p-8 rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] -mr-16 -mt-16 rounded-full group-hover:bg-primary/40 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
