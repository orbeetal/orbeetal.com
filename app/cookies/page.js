import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Cookie Policy — Orbeetal",
  description: "Learn how Orbeetal uses cookies and similar technologies on our website.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    body: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners. Cookies do not contain personally identifiable information by themselves.`,
  },
  {
    title: "2. How We Use Cookies",
    body: `Orbeetal uses cookies for the following purposes:

Essential Cookies — These are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas.

Analytics Cookies — We may use analytics tools to understand how visitors interact with our site, including which pages are visited most frequently and how long visitors spend on the site. This helps us improve the user experience.

Preference Cookies — These cookies remember your preferences and settings to provide a more personalized experience on return visits.`,
  },
  {
    title: "3. Third-Party Cookies",
    body: `Some pages on our website may include embedded content or tools from third parties (such as Google Maps), which may set their own cookies. We do not control these third-party cookies and recommend reviewing the privacy and cookie policies of those third parties.`,
  },
  {
    title: "4. Managing Cookies",
    body: `You can control and manage cookies through your browser settings. Most browsers allow you to:
• View the cookies stored on your device
• Delete cookies individually or all at once
• Block cookies from specific websites
• Block all cookies from being set

Please note that disabling cookies may affect the functionality of our website. Refer to your browser's help documentation for specific instructions on managing cookies.`,
  },
  {
    title: "5. Changes to This Policy",
    body: `We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised date. We encourage you to review this policy periodically.`,
  },
  {
    title: "6. Contact Us",
    body: `If you have any questions about our use of cookies, please contact us:\n\nOrbeetal\nDhaka, Bangladesh\nEmail: support@orbeetal.com`,
  },
];

export default function CookiesPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Legal"
        title="Cookie"
        titleHighlight="Policy"
        description="We use cookies to enhance your experience on our website. Here's everything you need to know."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
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
