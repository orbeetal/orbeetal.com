import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { AboutPageContent } from "@/components/sections/AboutPageContent";
import { aboutPageMeta } from "@/data/about.js";

export const metadata = aboutPageMeta;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <PageHero
        tagline="About Orbeetal"
        title="One of the Fastest Ways to"
        titleHighlight="Business Growth"
        description="A BASIS-certified software company based in Dhaka, Bangladesh — delivering cutting-edge digital solutions that help businesses compete and grow in the digital age."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutPageContent />
      <Footer />
    </div>
  );
}
