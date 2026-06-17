import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { IdeaContest } from "@/components/sections/IdeaContest";
import { CvSubmit } from "@/components/sections/CvSubmit";
import { ClientsBar } from "@/components/sections/ClientsBar";
import { Services } from "@/components/sections/Services";
import { Departments } from "@/components/sections/Departments";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { BasisBadge } from "@/components/BasisBadge";
import { activeHero } from "@/data/siteConfig.js";

const heroComponents = {
  "hero":         <Hero />,
  "idea-contest": <IdeaContest />,
  "cv-submit":    <CvSubmit />,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      {heroComponents[activeHero] ?? <Hero />}
      <div className="py-8 flex justify-center border-b border-white/5 bg-white/1 border-t">
        <BasisBadge />
      </div>
      <ClientsBar />
      <Services />
      <Departments />
      <Portfolio />
      <Testimonials />
      <Team />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
