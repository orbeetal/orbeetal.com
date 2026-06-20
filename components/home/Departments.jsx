"use client";

import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { DepartmentsGrid } from "@/components/shared/DepartmentsGrid";

export function Departments() {
  return (
    <Section
      id="departments"
      className="py-24 md:py-32 relative z-20 border-t border-white/5"
      overlay="absolute inset-0 bg-white/[0.015]"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          tagline="Our Structure"
          title="Our"
          titleHighlight="Departments"
          description="Seven specialized departments working in unison to deliver excellence across every dimension of your project."
          className="mb-20"
        />
        <DepartmentsGrid />
      </div>
    </Section>
  );
}
