"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { teamMembers } from "@/data/index.js";

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.015]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Meet the <span className="text-gradient">Directors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60"
          >
            Seven visionary leaders driving Orbeetal's mission to engineer competitive advantages for businesses worldwide.
          </motion.p>
        </div>

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
                <button className="w-full text-sm text-white/50 border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300 rounded-lg py-2 px-4 group-hover:bg-primary/5">
                  View Profile
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
