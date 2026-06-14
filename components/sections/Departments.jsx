"use client";

import { motion } from "framer-motion";
import { Target, DollarSign, Settings, Globe, Package, ShieldCheck, TrendingUp, Cpu } from "lucide-react";
import { departments } from "@/data/index.js";

const ICON_MAP = { Target, DollarSign, Settings, Globe, Package, ShieldCheck, TrendingUp, Cpu };

export function Departments() {
  return (
    <section id="departments" className="py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="absolute inset-0 bg-white/[0.015]"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
          >
            Our Structure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Departments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60"
          >
            Seven specialized departments working in unison to deliver excellence across every dimension of your project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((dept, i) => {
            const Icon = ICON_MAP[dept.icon];
            const isLast = i === departments.length - 1;
            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden ${isLast && departments.length % 4 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">{dept.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{dept.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
