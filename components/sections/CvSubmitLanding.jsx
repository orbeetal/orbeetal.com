"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  FileText,
  UserCircle,
  Upload,
  Send,
  CheckCircle2,
  Users,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  cvSubmitMeta,
  cvSubmitInfoCards,
  cvSubmitSteps,
  cvSubmitBenefits,
} from "@/data/index.js";
import CvSubmitForm from "@/components/sections/CvSubmitForm";

const ICON_MAP = {
  Briefcase, CalendarDays, MapPin, FileText,
  UserCircle, Upload, Send, CheckCircle2, Users,
};

export default function CvSubmitLanding() {
  return (
    <main className="bg-background text-foreground pt-12">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full bg-primary/10 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-6"
          >
            {cvSubmitMeta.organizer} · {cvSubmitMeta.edition} Edition
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-none">
              <span className="text-gradient">CAREER</span>
            </h1>
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-none mb-6">
              <span className="text-white">FAIR</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-amber-400 text-base md:text-lg font-medium uppercase tracking-widest mb-6"
          >
            Your Career Starts Here
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Submit your CV and connect with top recruiters at{" "}
            {cvSubmitMeta.venue} on{" "}
            <strong className="text-white">{cvSubmitMeta.eventDate}</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-none rounded-sm h-14 px-10 text-base shadow-[0_0_50px_-10px_rgba(0,112,243,0.6)]"
            >
              <a href="#cv-form">
                Submit Your CV <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 rounded-sm h-14 px-8 text-white text-base"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Event Info Strip ── */}
      <section className="py-16 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cvSubmitInfoCards.map((card, i) => {
              const Icon = ICON_MAP[card.icon];
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-panel rounded-2xl p-8 border border-white/10 text-center hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">{card.label}</p>
                  <p className="text-xl font-display font-bold text-white mb-1">{card.value}</p>
                  <p className="text-sm text-white/50">{card.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to Submit ── */}
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
              Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              How to <span className="text-gradient">Submit?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cvSubmitSteps.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group relative"
                >
                  <span className="absolute top-6 right-6 text-4xl font-display font-bold text-white/5 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Attend ── */}
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
              Benefits
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Why <span className="text-gradient">Attend?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {cvSubmitBenefits.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 flex items-start gap-4 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-white mb-1">{item.label}</p>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CV Submit Form ── */}
      <CvSubmitForm />

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6"
          >
            Your Career Starts Here
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Submit Your CV,{" "}
            <br />
            <span className="text-gradient">Shape Your Future.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto mb-10"
          >
            Meet top recruiters at{" "}
            <strong className="text-white">{cvSubmitMeta.venue}</strong> on{" "}
            <strong className="text-white">{cvSubmitMeta.eventDate}</strong>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-none rounded-sm h-16 px-12 text-lg shadow-[0_0_60px_-10px_rgba(0,112,243,0.6)]"
            >
              <a href="#cv-form">
                Submit Your CV <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
