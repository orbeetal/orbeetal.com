import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactPageContent } from "@/components/sections/ContactPageContent";
import { contactPageMeta } from "@/data/contact.js";

export const metadata = contactPageMeta;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <PageHero
        tagline="Get In Touch"
        title="Ready to"
        titleHighlight="Launch?"
        description="Reach out and let's start building something exceptional together. We're based in Dhaka, Bangladesh and serve clients across the globe."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactPageContent />
      <Footer />
    </div>
  );
}
