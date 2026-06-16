import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CvSubmitLanding from "@/components/sections/CvSubmitLanding";
import { cvSubmitPageMeta } from "@/data/cvSubmit.js";

export const metadata = cvSubmitPageMeta;

export default function CvSubmitPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <CvSubmitLanding />
      <Footer />
    </div>
  );
}
