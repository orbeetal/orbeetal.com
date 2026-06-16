"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers, stats } from "@/data/index.js";

export function TeamPageContent() {
  return (
    <>
      {/* Team Grid */}
      <section className="py-20 md:py-28 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => {
              const isLast = i === teamMembers.length - 1;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/25 transition-all duration-500 text-center ${isLast && teamMembers.length % 4 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="relative mx-auto mb-5 w-20 h-20">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg`}>
                      {member.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <User className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-1 leading-tight">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-5">{member.role}</p>
                  <div className="w-full h-px bg-white/5 mb-4" />
                  <p className="text-white/40 text-xs leading-relaxed">
                    Driving Orbeetal's mission and shaping the company's strategic direction.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 border-t border-white/5 relative z-20">
        <div className="absolute inset-0 bg-white/[0.015]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            >
              By The Numbers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Impact We've <span className="text-gradient">Created</span>
            </motion.h2>
          </div>

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

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]">
                Join Our Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
