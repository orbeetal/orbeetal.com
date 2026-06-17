import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { TeamPageContent } from "@/components/sections/TeamPageContent";
import { teamPageMeta } from "@/data/team/index.js";

export const metadata = teamPageMeta;

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <PageHero
        tagline="Leadership"
        title="Meet the"
        titleHighlight="Directors"
        description="Seven visionary leaders driving Orbeetal's mission to engineer competitive advantages for businesses worldwide."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <TeamPageContent />
      <Footer />
    </div>
  );
}
