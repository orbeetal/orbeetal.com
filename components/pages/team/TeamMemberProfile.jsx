import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SocialLinks } from "@/components/common/SocialLinks";

export function TeamMemberProfile({ member }) {
  const nameParts = member.name.split(" ");
  const lastName = nameParts.at(-1);
  const firstName = nameParts[0];
  const firstPart = nameParts.slice(0, -1).join(" ");

  return (
    <>
      <section className="relative flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col flex-1">
          <div className="pt-40">
            <nav className="flex items-center gap-2 text-sm text-white/30">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/team" className="hover:text-white/60 transition-colors">Team</Link>
              <span>›</span>
              <span className="text-white/50">{member.name}</span>
            </nav>
          </div>

          <div className="relative flex-1 flex flex-col justify-end pb-14 pt-10">
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
              <SocialLinks social={member.social} />
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-24 md:py-32 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-20">
            <div>
              <SectionLabel>Profile</SectionLabel>
              <p className="text-xl text-white/65 leading-relaxed">{member.bio}</p>
            </div>

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
    </>
  );
}
