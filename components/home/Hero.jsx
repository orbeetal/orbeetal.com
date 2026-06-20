"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex items-center pt-28 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10"></div>
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-60 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="max-w-4xl mx-auto text-center py-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Systems Online. Ready for Launch.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8"
          >
            Elevate Above the <br className="hidden md:block" />
            <span className="text-gradient">Competition.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            A forward-thinking software company dedicated to building smart, impactful technology — empowering businesses through innovation and intelligent solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-none rounded-sm shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Initiate Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 hover:bg-white/5 rounded-sm"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Explore Capabilities
            </Button>
          </motion.div>

        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-grid-pattern opacity-30 z-10"></div>
    </section>
  );
}
