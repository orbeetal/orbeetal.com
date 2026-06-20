// ─── Feature flags ────────────────────────────────────────────────────────────
// Controls nav links and dedicated page content (/idea-contest, /cv-submit)
export const features = {
  ideaContest: true,
  cvSubmit: false,
};

// ─── Homepage hero ────────────────────────────────────────────────────────────
// Which section renders at the top of the homepage (below Navbar)
// Options:
//   "hero"         — DefaultHero (default company Hero section)
//   "idea-contest" — IdeaContestHero (Idea Contest promotional section)
//   "cv-submit"    — CvSubmitHero (CV Submit promotional section)
//
// If the selected hero's feature is disabled, falls back to DefaultHero.
export const activeHero = "idea-contest";

// ─── Top announcement banner ──────────────────────────────────────────────────
// Options:
//   false          — hide banner
//   "idea-contest" — Idea Contest banner (from ideaContest.js)
//   "cv-submit"    — CV Submit banner (from cvSubmit.js)
//   "custom"       — custom banner (from customBannerContent below)
export const activeTopBanner = "idea-contest";

// Used only when activeTopBanner === "custom"
export const customBannerContent = {
  label: "Custom announcement",
  highlight: "Highlight text",
  detail: "Detail text",
  href: "/contact",
  cta: "Learn More",
  icon: "Megaphone",
};
