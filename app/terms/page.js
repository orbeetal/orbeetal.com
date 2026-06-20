import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Terms of Service — Orbeetal",
  description: "The terms and conditions governing your use of Orbeetal's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Orbeetal website (orbeetal.com) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
  },
  {
    title: "2. Services",
    body: `Orbeetal provides software development, UI/UX design, digital marketing, cybersecurity, mobile development, AI solutions, and related technology services. The specific scope, timeline, and deliverables of any engagement are defined in a separate written agreement or proposal between Orbeetal and the client.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All content on this website — including text, graphics, logos, and code — is the property of Orbeetal and protected by applicable intellectual property laws. Upon full payment for a project, the client receives ownership of the custom deliverables as specified in the project agreement. Orbeetal retains the right to display completed work in its portfolio unless otherwise agreed in writing.`,
  },
  {
    title: "4. Client Responsibilities",
    body: `Clients are responsible for:
• Providing accurate and complete project requirements in a timely manner
• Supplying necessary assets, credentials, and approvals as requested
• Ensuring that any content or materials provided to Orbeetal do not infringe on third-party rights
• Making payments as per the agreed schedule

Delays caused by the client may result in adjusted timelines at no additional cost to Orbeetal.`,
  },
  {
    title: "5. Payment Terms",
    body: `Payment terms are outlined in the individual project agreement. Orbeetal reserves the right to suspend or withhold delivery of work in the event of non-payment. Any disputed charges must be raised within 14 days of the invoice date.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `Orbeetal's liability for any claim arising out of or related to our services is limited to the total fees paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages, including loss of data, revenue, or business opportunities.`,
  },
  {
    title: "7. Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. This obligation survives the termination of any project agreement.`,
  },
  {
    title: "8. Termination",
    body: `Either party may terminate a project engagement with written notice. Upon termination, the client is responsible for payment of work completed up to the termination date. Orbeetal will deliver all completed work upon receipt of outstanding payments.`,
  },
  {
    title: "9. Governing Law",
    body: `These Terms of Service are governed by the laws of Bangladesh. Any disputes arising from these terms or our services will be subject to the jurisdiction of the courts of Dhaka, Bangladesh.`,
  },
  {
    title: "10. Changes to Terms",
    body: `We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.`,
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Legal"
        title="Terms of"
        titleHighlight="Service"
        description="Please read these terms carefully before using our website or engaging our services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />

      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-white/40 text-sm mb-12">Last updated: June 2025</p>
            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-display font-semibold text-white mb-4">{s.title}</h2>
                  <p className="text-white/65 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
