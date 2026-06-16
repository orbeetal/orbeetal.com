import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { DepartmentsPageContent } from "@/components/sections/DepartmentsPageContent";
import { departmentsPageMeta } from "@/data/departments.js";

export const metadata = departmentsPageMeta;

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <PageHero
        tagline="Our Structure"
        title="Our"
        titleHighlight="Departments"
        description="Seven specialized departments working in perfect unison — each a centre of excellence delivering mastery across every dimension of your project."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      />
      <DepartmentsPageContent />
      <Footer />
    </div>
  );
}
