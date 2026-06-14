"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

function FacebookIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { contactInfo } from "@/data/index.js";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Ready to <span className="text-gradient">Launch?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60"
          >
            Reach out and let's start building something exceptional together.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">Contact Information</h3>
              <p className="text-white/55 leading-relaxed">
                We're based in {contactInfo.location} and serve clients across the globe. Get in touch via any channel below.
              </p>
            </div>

            <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</div>
                <div className="text-white font-medium group-hover:text-primary transition-colors">{contactInfo.email}</div>
              </div>
            </a>

            <a href={contactInfo.whatsapp.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">WhatsApp</div>
                <div className="text-white font-medium group-hover:text-green-400 transition-colors">{contactInfo.whatsapp.number}</div>
              </div>
            </a>

            <a href={contactInfo.facebook.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <FacebookIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Facebook</div>
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">{contactInfo.facebook.label}</div>
              </div>
            </a>

            <a href={contactInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">LinkedIn</div>
                <div className="text-white font-medium group-hover:text-sky-400 transition-colors">{contactInfo.linkedin.label}</div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-2xl border border-white/10 overflow-hidden min-h-120"
          >
            <iframe
              src={contactInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orbeetal Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
