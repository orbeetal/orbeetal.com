import { PageLayout } from "@/components/layout/PageLayout";
import { CvSubmitLanding } from "@/components/pages/cv-submit/CvSubmitLanding";
import { cvSubmitPageMeta } from "@/data/cvSubmit.js";
import { isCvSubmitEnabled } from "@/lib/siteFeatures.js";

export const metadata = cvSubmitPageMeta;

export default function CvSubmitPage() {
  if (isCvSubmitEnabled()) {
    return (
      <PageLayout>
        <CvSubmitLanding />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">CV Submit is not active</h1>
        <p className="text-lg text-muted-foreground">
          Please check back later for updates on CV Submit.
        </p>
      </div>
    </PageLayout>
  );
}
