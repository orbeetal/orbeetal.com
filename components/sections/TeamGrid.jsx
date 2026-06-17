"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { teamMembers } from "@/data/index.js";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, i) => {
        const isLast = i === teamMembers.length - 1;
        return (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/25 transition-all duration-500 text-center ${
              isLast && teamMembers.length % 4 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="relative mx-auto mb-5 w-20 h-20">
              <div className={`w-20 h-20 rounded-full bg-linear-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg`}>
                {member.initials}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <User className="w-3 h-3 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-1 leading-tight">{member.name}</h3>
            <p className="text-primary text-sm font-medium mb-5">{member.role}</p>
            <Link
              href={`/team/${member.slug}`}
              className="block w-full text-sm text-white/50 border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300 rounded-lg py-2 px-4 group-hover:bg-primary/5 text-center"
            >
              View Profile
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
