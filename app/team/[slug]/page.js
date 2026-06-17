import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { teamMembers } from "@/data/team/index.js";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary shrink-0">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} — Orbeetal`,
    description: member.bio,
    openGraph: {
      title: `${member.name} — Orbeetal`,
      description: member.bio,
      images: [{ url: "/api/og/team", width: 1200, height: 630 }],
    },
  };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const nameParts = member.name.split(" ");
  const lastName = nameParts.at(-1);
  const firstName = nameParts[0];
  const firstPart = nameParts.slice(0, -1).join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* Profile Header */}
      <section className="relative flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col flex-1">

          {/* Top row: breadcrumb + avatar */}
          <div className="pt-40">
            <nav className="flex items-center gap-2 text-sm text-white/30">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/team" className="hover:text-white/60 transition-colors">Team</Link>
              <span>›</span>
              <span className="text-white/50">{member.name}</span>
            </nav>
          </div>

          {/* Bottom content */}
          <div className="relative flex-1 flex flex-col justify-end pb-14 pt-10">
            {/* Ghost initials watermark */}
            <div className="hidden md:block absolute right-0 top-0 text-[10rem] md:text-[24rem] font-display font-bold text-white/5 leading-none select-none pointer-events-none tracking-tighter">
              {member.initials}
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-7 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-medium uppercase tracking-widest">
                {member.role} · Orbeetal
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[0.92] tracking-tight mb-10">
              {firstPart}
              <br />
              <span className="text-gradient">{lastName}</span>
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16 pt-8 border-t border-white/5">
              {member.quote && (
                <p className="text-base text-white/35 italic font-light leading-relaxed max-w-xl">
                  &ldquo;{member.quote}&rdquo;
                </p>
              )}

              {member.social && Object.keys(member.social).length > 0 && (
                <div className="flex items-center gap-3 sm:ml-auto shrink-0">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 text-xs transition-all">
                      <LinkedinIcon /> LinkedIn
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 text-xs transition-all">
                      <GithubIcon /> GitHub
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 text-xs transition-all">
                      <TwitterIcon /> Twitter
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      {member.stats?.length > 0 && (
        <div className="border-b border-white/5 bg-white/2">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-3 divide-x divide-white/5">
              {member.stats.map((stat) => (
                <div key={stat.label} className="py-8 px-6 text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CV Body */}
      <section className="py-24 md:py-32 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-20">

            {/* Profile */}
            <div>
              <SectionLabel>Profile</SectionLabel>
              <p className="text-xl text-white/65 leading-relaxed">{member.bio}</p>
            </div>

            {/* Expertise */}
            <div>
              <SectionLabel>Expertise</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {member.expertise.map((skill) => (
                  <div
                    key={skill}
                    className="glass-panel rounded-xl p-6 border border-white/8 hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/15 transition-colors" />
                    <p className="text-white/80 font-medium text-sm leading-snug">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {member.highlights?.length > 0 && (
              <div>
                <SectionLabel>Achievements</SectionLabel>
                <div className="space-y-0">
                  {member.highlights.map((h, i) => (
                    <div key={i} className="flex gap-8 items-start group py-6 border-b border-white/5 last:border-0">
                      <span className="text-5xl font-display font-bold text-white/5 group-hover:text-primary/15 transition-colors leading-none shrink-0 w-14 text-right select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-white/65 leading-relaxed pt-2 flex-1">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Background */}
            <div>
              <SectionLabel>Background</SectionLabel>
              <div className="glass-panel rounded-2xl p-8 border border-white/8">
                <p className="text-white/60 leading-relaxed">
                  As a founding Director at Orbeetal, {firstName} plays a pivotal role in shaping
                  the company&apos;s vision and delivering world-class technology solutions. Orbeetal is a
                  forward-thinking software company based in Dhaka, Bangladesh, committed to engineering
                  competitive advantages for businesses worldwide.
                </p>
              </div>
            </div>

            {/* Back */}
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-white/30 hover:text-primary transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Team
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
