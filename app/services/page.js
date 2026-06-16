import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";
import { servicesPageMeta } from "@/data/services.js";

export const metadata = servicesPageMeta;

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <PageHero
        tagline="What We Offer"
        title="Strategic"
        titleHighlight="Capabilities"
        description="A full-spectrum armory of digital services. We don't just build software — we engineer competitive advantages that move the needle for your business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesPageContent />
      <Footer />
    </div>
  );
}
