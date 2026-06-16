"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, DollarSign, Settings, Globe, Package, ShieldCheck, TrendingUp, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { departments } from "@/data/index.js";

const ICON_MAP = { Target, DollarSign, Settings, Globe, Package, ShieldCheck, TrendingUp, Cpu };

const howWeWork = [
  {
    title: "Cross-Functional Collaboration",
    description: "Every department contributes its expertise to each project — strategy, design, engineering, and marketing work in parallel, not in silos.",
  },
  {
    title: "Dedicated Ownership",
    description: "Each department owns its domain completely. When Finance says the numbers work or Cyber Security approves the architecture, you can trust it.",
  },
  {
    title: "Unified Delivery",
    description: "Despite seven distinct specializations, clients experience a single, coherent team. One point of contact, one cohesive delivery.",
  },
];

export function DepartmentsPageContent() {
  return (
    <>
      {/* Departments Grid */}
      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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

      {/* How departments work together */}
      <section className="py-20 md:py-28 border-t border-white/5 relative z-20">
        <div className="absolute inset-0 bg-white/[0.015]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            >
              How We Operate
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Built for <span className="text-gradient">Collaboration</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60"
            >
              Our departments aren't isolated units — they're an integrated organism built to deliver excellence at every layer.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {howWeWork.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-primary font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]">
                Work With Our Team <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
