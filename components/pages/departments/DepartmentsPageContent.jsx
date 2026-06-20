"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { DepartmentsGrid } from "@/components/shared/DepartmentsGrid";

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
      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <DepartmentsGrid />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/5 relative z-20">
        <div className="absolute inset-0 bg-white/[0.015]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader
            tagline="How We Operate"
            title="Built for"
            titleHighlight="Collaboration"
            description="Our departments aren't isolated units — they're an integrated organism built to deliver excellence at every layer."
            className="mb-16"
          />

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
