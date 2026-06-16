"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats, whyChooseUs } from "@/data/index.js";

const mission = {
  title: "Our Mission",
  text: "To engineer digital products that elevate businesses above the competition — combining technical precision, creative excellence, and strategic thinking to deliver measurable impact.",
};

const vision = {
  title: "Our Vision",
  text: "To become the most trusted technology partner for ambitious businesses in South Asia and beyond — known for our integrity, innovation, and the lasting success of our clients.",
};

export function AboutPageContent() {
  return (
    <>
      {/* About Content */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-bg.png"
            alt=""
            fill
            className="object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-background/90 z-10" />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-20" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <p className="text-xl text-white/70 mb-8 font-light leading-relaxed">
                Orbeetal is a forward-thinking software company based in Dhaka, Bangladesh. We specialize in delivering cutting-edge digital solutions — from web and mobile development to AI-powered systems and cybersecurity — helping businesses of all sizes compete and grow in the digital age.
              </p>
              <p className="text-xl text-white/70 mb-10 font-light leading-relaxed">
                Founded by seven directors who believe technology should be a force for growth, we are a proud member of BASIS (Bangladesh Association of Software & Information Services) and serve clients across Bangladesh and internationally.
              </p>
              <ul className="space-y-4 mb-10">
                {whyChooseUs.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-white">{item.title}</strong> — {item.description}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-none h-12 px-8">
                  Work With Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
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

      {/* Mission & Vision */}
      <section className="py-20 border-t border-white/5 relative z-20">
        <div className="absolute inset-0 bg-white/[0.015]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[mission, vision].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">{item.title}</p>
                <p className="text-xl text-white/75 leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* BASIS Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-6 px-8 py-5 rounded-2xl border border-amber-400/25 bg-amber-400/8">
              <div className="shrink-0 w-24 h-14 bg-white rounded-lg overflow-hidden p-2 flex items-center justify-center">
                <Image src="/brand/basis_logo.jpeg" alt="BASIS" width={80} height={48} className="object-contain w-full h-full" />
              </div>
              <div>
                <span className="text-amber-300 font-semibold text-base block mb-1">Proud Member of BASIS</span>
                <span className="text-amber-400/50 text-sm">Bangladesh Association of Software &amp; Information Services</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
