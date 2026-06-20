import { PageLayout } from "@/components/layout/PageLayout";
import { IdeaContestLanding } from "@/components/pages/idea-contest/IdeaContestLanding";
import { ideaContestPageMeta } from "@/data/ideaContest.js";
import { isIdeaContestEnabled } from "@/lib/siteFeatures.js";

export const metadata = ideaContestPageMeta;

export default function IdeaContestPage() {
  if (isIdeaContestEnabled()) {
    return (
      <PageLayout>
        <IdeaContestLanding />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Idea Contest is not active</h1>
        <p className="text-lg text-muted-foreground">
          Please check back later for updates on the Idea Contest.
        </p>
      </div>
    </PageLayout>
  );
}
