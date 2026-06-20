"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, MapPin, Users, ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cvSubmitMeta, cvSubmitStats } from "@/data/index.js";
import { resolveIcon } from "@/lib/icons";

export function CvSubmit() {
  return (
    <section
      id="cv-submit"
      className="relative pb-20 md:pb-24 pt-36 md:pt-48 overflow-hidden border-t border-white/5"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute top-1/4 right-0 w-100 h-100 rounded-full bg-amber-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
            >
              {cvSubmitMeta.organizer} · {cvSubmitMeta.edition} Edition
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mb-3 leading-tight"
            >
              <span className="text-gradient">Career</span>{" "}
              <span className="text-white">Fair</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6"
            >
              Your Career Starts Here
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-10"
            >
              Submit your CV and meet top recruiters at the{" "}
              {cvSubmitMeta.organizer} {cvSubmitMeta.edition} Career Fair.
              Explore internship, part-time, and full-time opportunities
              from leading companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white border-none rounded-sm h-14 px-8 text-base shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]"
              >
                <Link href="/cv-submit">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {cvSubmitMeta.submitFormUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 text-white rounded-sm h-14 px-8 text-base"
                >
                  <a
                    href={cvSubmitMeta.submitFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit CV
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Right: Stat Cards */}
          <div className="flex flex-col gap-4">
            {cvSubmitStats.map((stat, i) => {
              const Icon = resolveIcon(stat.icon);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className={cn(
                    "glass-panel rounded-2xl p-6 flex items-center gap-5 border transition-all duration-300",
                    stat.amber
                      ? "border-amber-400/20 hover:border-amber-400/40 hover:bg-amber-500/5"
                      : "border-white/10 hover:border-primary/30 hover:bg-primary/5"
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center shrink-0",
                      stat.amber
                        ? "bg-amber-500/10 border border-amber-500/20"
                        : "bg-primary/10 border border-primary/20"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-6 h-6",
                        stat.amber ? "text-amber-400" : "text-primary"
                      )}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p
                      className={cn(
                        "text-xl font-display font-bold",
                        stat.amber ? "text-amber-400" : "text-white"
                      )}
                    >
                      {stat.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
