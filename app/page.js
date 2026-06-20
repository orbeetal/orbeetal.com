import { PageLayout } from "@/components/PageLayout";
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
import { resolveActiveHero } from "@/lib/siteFeatures.js";

const heroComponents = {
  hero: <Hero />,
  "idea-contest": <IdeaContest />,
  "cv-submit": <CvSubmit />,
};

export default function Home() {
  const heroKey = resolveActiveHero();

  return (
    <PageLayout>
      {heroComponents[heroKey] ?? <Hero />}
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
    </PageLayout>
  );
}
