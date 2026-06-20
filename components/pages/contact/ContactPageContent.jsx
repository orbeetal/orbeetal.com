"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { contactInfo } from "@/data/index.js";

export function ContactPageContent() {
  return (
    <section className="py-20 md:py-28 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">Contact Information</h3>
              <p className="text-white/55 leading-relaxed">
                We&apos;re based in {contactInfo.location} and serve clients across the globe. Get in touch via any channel below.
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
