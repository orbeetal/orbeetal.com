"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamGrid } from "@/components/shared/TeamGrid";

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-white/1.5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          tagline="Leadership"
          title="Meet the"
          titleHighlight="Directors"
          description="Seven visionary leaders driving Orbeetal's mission to engineer competitive advantages for businesses worldwide."
          className="mb-20"
        />
        <TeamGrid />
      </div>
    </section>
  );
}
