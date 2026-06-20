"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CvSubmitForm } from "@/components/pages/cv-submit/CvSubmitForm";
import { EventInfoCardGrid } from "@/components/event/EventInfoCardGrid";
import { EventStepsList } from "@/components/event/EventStepsList";
import { EventCriteriaList } from "@/components/event/EventCriteriaList";
import {
  cvSubmitMeta,
  cvSubmitInfoCards,
  cvSubmitSteps,
  cvSubmitBenefits,
} from "@/data/index.js";

export function CvSubmitLanding() {
  return (
    <main className="bg-background text-foreground pt-12">
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

      <EventInfoCardGrid cards={cvSubmitInfoCards} />

      <EventStepsList
        tagline="Process"
        title="How to"
        titleHighlight="Submit?"
        items={cvSubmitSteps}
        accent="primary"
        showStepNumber
      />

      <EventCriteriaList
        tagline="Benefits"
        title="Why"
        titleHighlight="Attend?"
        items={cvSubmitBenefits}
      />

      <CvSubmitForm />

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
