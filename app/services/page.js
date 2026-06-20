import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesPageContent } from "@/components/pages/services/ServicesPageContent";
import { servicesPageMeta } from "@/data/services.js";

export const metadata = servicesPageMeta;

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="What We Offer"
        title="Strategic"
        titleHighlight="Capabilities"
        description="A full-spectrum armory of digital services. We don't just build software — we engineer competitive advantages that move the needle for your business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesPageContent />
    </PageLayout>
  );
}
