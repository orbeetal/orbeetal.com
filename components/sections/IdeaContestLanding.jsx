"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Users, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventInfoCardGrid } from "@/components/sections/event/EventInfoCardGrid";
import { EventStepsList } from "@/components/sections/event/EventStepsList";
import { EventCriteriaList } from "@/components/sections/event/EventCriteriaList";
import {
  ideaContestMeta,
  ideaContestInfoCards,
  ideaContestSubmitItems,
  ideaContestCriteria,
} from "@/data/index.js";

export function IdeaContestLanding() {
  return (
    <main className="bg-background text-foreground pt-12">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full bg-amber-500/10 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6"
          >
            {ideaContestMeta.organizer} Presents
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-none">
              <span className="text-amber-400">IDEA</span>
            </h1>
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-none mb-6">
              <span className="text-white">CONTEST</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-primary text-base md:text-lg font-medium uppercase tracking-widest mb-6"
          >
            Ideas Today, Impact Tomorrow
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Showcase your innovative ideas and creative concepts that can solve
            real-world problems and build a better future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-3 glass-panel border border-amber-400/30 rounded-full px-6 py-3 mb-10"
          >
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-display font-semibold text-base">Prize Pool</span>
            <span className="w-px h-5 bg-white/20" />
            <span className="text-white font-display font-bold text-2xl">
              {ideaContestMeta.prize}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold border-none rounded-sm h-14 px-10 text-base shadow-[0_0_50px_-10px_rgba(245,158,11,0.7)]"
            >
              <a href={ideaContestMeta.submitFormUrl} target="_blank" rel="noopener noreferrer">
                Submit IDEA
                <ArrowRight className="ml-2 h-4 w-4" />
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

      <EventInfoCardGrid cards={ideaContestInfoCards} />

      <EventStepsList
        tagline="Submission Guidelines"
        title="What to"
        titleHighlight="Submit?"
        items={ideaContestSubmitItems}
        accent="amber"
      />

      <EventCriteriaList
        tagline="Judging"
        title="Evaluation"
        titleHighlight="Criteria"
        items={ideaContestCriteria}
      />

      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
          >
            Eligibility
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-12"
          >
            Who Can <span className="text-gradient">Participate?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel border border-primary/20 rounded-2xl p-12 max-w-xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-3">All RUET Students</h3>
            <p className="text-white/60 leading-relaxed">
              Open to all students of Rajshahi University of Engineering &amp;
              Technology (RUET). Individual or team participation is welcome.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-amber-500/10 blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6"
          >
            Think. Create. Inspire.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Your Idea Can{" "}
            <span className="text-amber-400">Change</span>
            <br />
            The Future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto mb-10"
          >
            Don&apos;t wait. Submit your idea before{" "}
            <strong className="text-white">{ideaContestMeta.deadline}</strong> and showcase it at
            the RCF Career Fair on{" "}
            <strong className="text-white">{ideaContestMeta.eventDate}</strong>.
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
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold border-none rounded-sm h-16 px-12 text-lg shadow-[0_0_60px_-10px_rgba(245,158,11,0.7)]"
            >
              <a href={ideaContestMeta.submitFormUrl} target="_blank" rel="noopener noreferrer">
                Submit IDEA
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
