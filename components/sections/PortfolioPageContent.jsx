"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientsBar } from "@/components/sections/ClientsBar";
import { portfolioProjects } from "@/data/index.js";

export function PortfolioPageContent() {
  return (
    <>
      {/* Portfolio Grid */}
      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className={`h-60 bg-linear-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-75" />
                  {project.preview && (
                    <Image src={project.preview} alt={project.title} fill className="object-cover" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#050B14] to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-white/70 bg-black/40 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-colors">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </a>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-display font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientsBar />

      {/* CTA */}
      <section className="py-20 border-t border-white/5 relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Your Project Could Be <span className="text-gradient">Next</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/60 mb-10 max-w-xl mx-auto"
          >
            Let's build something together that you'll be proud to show the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="h-14 px-10 border-white/20 hover:bg-white/5">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
