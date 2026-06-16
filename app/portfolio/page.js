import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PortfolioPageContent } from "@/components/sections/PortfolioPageContent";
import { portfolioPageMeta } from "@/data/portfolio.js";

export const metadata = portfolioPageMeta;

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <PageHero
        tagline="Our Portfolio"
        title="Projects We're"
        titleHighlight="Proud Of"
        description="From news portals to EdTech platforms, each project is built with precision, purpose, and a relentless focus on delivering real-world impact."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />
      <PortfolioPageContent />
      <Footer />
    </div>
  );
}
