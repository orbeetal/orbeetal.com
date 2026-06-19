import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CvSubmitLanding from "@/components/sections/CvSubmitLanding";
import { cvSubmitPageMeta } from "@/data/cvSubmit.js";
import { activeHero } from "@/data/siteConfig.js";

export const metadata = cvSubmitPageMeta;

export default function CvSubmitPage() {
  if (activeHero && activeHero === "cv-submit") {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
        <Navbar />
        <CvSubmitLanding />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">CV Submit is not active</h1>
        <p className="text-lg text-muted-foreground">
          Please check back later for updates on CV Submit.
        </p>
      </div>
      <Footer />
    </div>
  );
}
