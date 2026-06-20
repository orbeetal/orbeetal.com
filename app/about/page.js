import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AboutPageContent } from "@/components/pages/about/AboutPageContent";
import { aboutPageMeta } from "@/data/about.js";

export const metadata = aboutPageMeta;

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="About Orbeetal"
        title="One of the Fastest Ways to"
        titleHighlight="Business Growth"
        description="A BASIS-certified software company based in Dhaka, Bangladesh — delivering cutting-edge digital solutions that help businesses compete and grow in the digital age."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutPageContent />
    </PageLayout>
  );
}
