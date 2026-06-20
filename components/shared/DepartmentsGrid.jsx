"use client";

import { motion } from "framer-motion";
import { departments } from "@/data/index.js";
import { resolveIcon } from "@/lib/icons";

export function DepartmentsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {departments.map((dept, i) => {
        const Icon = resolveIcon(dept.icon);
        const isLast = i === departments.length - 1;
        return (
          <motion.div
            key={dept.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden ${isLast && departments.length % 4 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {Icon && <Icon className="w-7 h-7" />}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">{dept.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{dept.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
