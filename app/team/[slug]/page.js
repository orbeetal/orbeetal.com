import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { TeamMemberProfile } from "@/components/pages/team/TeamMemberProfile";
import { teamMembers } from "@/data/team/index.js";

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

  return (
    <PageLayout>
      <TeamMemberProfile member={member} />
    </PageLayout>
  );
}
