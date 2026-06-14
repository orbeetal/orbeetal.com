"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { stats, whyChooseUs } from "@/data/index.js";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-bg.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-background/90 z-10"></div>
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">About Orbeetal</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              One of the Fastest Ways to <span className="text-gradient">Business Growth</span>
            </h2>
            <p className="text-xl text-white/70 mb-6 font-light leading-relaxed">
              Orbeetal is a forward-thinking software company based in Dhaka, Bangladesh. We specialize in delivering cutting-edge digital solutions — from web and mobile development to AI-powered systems and cybersecurity — helping businesses of all sizes compete and grow in the digital age.
            </p>
            <ul className="space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-white">{item.title}</strong> — {item.description}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl border-t-2 border-t-primary/50 flex flex-col justify-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
