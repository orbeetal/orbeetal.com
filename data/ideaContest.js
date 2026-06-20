// ─── Single source of truth — edit here to update everywhere ─────────────────
export const ideaContestMeta = {
  submitFormUrl: "https://form.jotform.com/orbeetalcom/idea-contest--2026",
  eventDate: "11 July, 2026",
  deadline: "09 July, 2026",
  prize: "৳10,000",
  organizer: "Orbeetal",
  venue: "RUET Career Forum 11th Career Fair",
};

// ─── Top banner content ───────────────────────────────────────────────────────
export const ideaContestBannerContent = {
  label: `${ideaContestMeta.organizer} Idea Contest 2026`,
  highlight: `Prize Pool ${ideaContestMeta.prize}`,
  detail: `Deadline ${ideaContestMeta.deadline}`,
  href: "/idea-contest",
  cta: "View Details",
};

// ─── Page metadata (SEO) ──────────────────────────────────────────────────────
const _title = `Idea Contest 2026 — ${ideaContestMeta.organizer}`;
const _desc  = `Showcase your innovative ideas at the ${ideaContestMeta.venue}. Prize Pool ${ideaContestMeta.prize}. Event: ${ideaContestMeta.eventDate}.`;

export const ideaContestPageMeta = {
  title: _title,
  description: _desc,
  openGraph: {
    title: _title,
    description: _desc,
    type: "website",
    images: [{ url: "/api/og/idea-contest", width: 1200, height: 630, alt: "Idea Contest 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: _title,
    description: _desc,
    images: ["/api/og/idea-contest"],
  },
};

// ─── Homepage section stat cards ──────────────────────────────────────────────
export const ideaContestStats = [
  {
    icon: "Trophy",
    label: "Prize Pool",
    value: ideaContestMeta.prize,
    amber: true,
  },
  {
    icon: "Calendar",
    label: "Event Date",
    value: ideaContestMeta.eventDate,
    amber: false,
  },
  {
    icon: "Clock",
    label: "Submission Deadline",
    value: ideaContestMeta.deadline,
    amber: false,
  },
];

// ─── Landing page info strip ──────────────────────────────────────────────────
export const ideaContestInfoCards = [
  {
    icon: "Calendar",
    label: "Event Date",
    value: ideaContestMeta.eventDate,
    sub: ideaContestMeta.venue,
  },
  {
    icon: "Clock",
    label: "Submission Deadline",
    value: ideaContestMeta.deadline,
    sub: "Submit before the deadline",
  },
  {
    icon: "Video",
    label: "Submission Requirement",
    value: "Idea + Concept Video",
    sub: "Write-up + 3–5 min video link",
  },
];

// ─── What to Submit ───────────────────────────────────────────────────────────
export const ideaContestSubmitItems = [
  {
    icon: "Lightbulb",
    title: "Innovative Idea",
    description:
      "A unique idea to solve a real-world problem or create impact. Submit a detailed write-up explaining your concept, approach, and potential solution.",
  },
  {
    icon: "Video",
    title: "Concept Video",
    description:
      "A short 3–5 minute video explaining your idea, concept, and potential impact. Share it via a Google Drive link during submission.",
  },
  {
    icon: "FileText",
    title: "Submit Together",
    description:
      "Your idea write-up (PDF/Docx/PPTX) along with the concept video link, submitted together as a complete package for evaluation.",
  },
];

// ─── Evaluation Criteria ──────────────────────────────────────────────────────
export const ideaContestCriteria = [
  {
    label: "Innovation & Originality",
    desc: "How unique, creative, and novel is the idea?",
  },
  {
    label: "Feasibility",
    desc: "Can the idea realistically be implemented or developed?",
  },
  {
    label: "Impact & Relevance",
    desc: "How significant and meaningful is the potential real-world impact?",
  },
  {
    label: "Presentation",
    desc: "Video quality, clarity of explanation, and communication skill.",
  },
];
