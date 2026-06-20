import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Privacy Policy — Orbeetal",
  description: "How Orbeetal collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly to us, such as when you contact us via our website forms, email, or social media channels. This may include your name, email address, phone number, company name, and the details of your project inquiry.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and referring URLs. This data is used solely to improve site performance and user experience.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to:
• Respond to your inquiries and provide the services you request
• Send project updates, proposals, and relevant communications
• Improve our website and service offerings
• Comply with legal obligations

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "3. Data Storage & Security",
    body: `Your information is stored securely and accessed only by authorized team members at Orbeetal. We implement industry-standard security measures including encrypted connections (HTTPS) and restricted access controls to protect your data from unauthorized access, disclosure, or misuse.`,
  },
  {
    title: "4. Cookies",
    body: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how visitors interact with our site. You may disable cookies in your browser settings, although this may affect certain site functionality. For more details, please refer to our Cookie Policy.`,
  },
  {
    title: "5. Third-Party Services",
    body: `We may use trusted third-party services such as Google Maps (for our location embed) and analytics tools. These services have their own privacy policies and we encourage you to review them. We are not responsible for the privacy practices of external sites or services.`,
  },
  {
    title: "6. Your Rights",
    body: `You have the right to request access to, correction of, or deletion of your personal data that we hold. To exercise these rights, please contact us at the details below. We will respond to all legitimate requests within a reasonable timeframe.`,
  },
  {
    title: "7. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically. Continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "8. Contact Us",
    body: `If you have any questions about this Privacy Policy, please reach out to us:\n\nOrbeetal\nDhaka, Bangladesh\nEmail: support@orbeetal.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Legal"
        title="Privacy"
        titleHighlight="Policy"
        description="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
