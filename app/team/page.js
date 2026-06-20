import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { TeamPageContent } from "@/components/pages/team/TeamPageContent";
import { teamPageMeta } from "@/data/team/index.js";

export const metadata = teamPageMeta;

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Leadership"
        title="Meet the"
        titleHighlight="Directors"
        description="Seven visionary leaders driving Orbeetal's mission to engineer competitive advantages for businesses worldwide."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <TeamPageContent />
    </PageLayout>
  );
}
