// ─── Single source of truth — edit here to update everywhere ─────────────────
export const cvSubmitMeta = {
  submitFormUrl: "https://form.jotform.com/orbeetalcom/cv-submit--2026",  // JotForm link এখানে দিন
  eventDate: "10–11 July, 2026",
  deadline: "",       // CV submission deadline এখানে দিন
  organizer: "RUET Career Forum",
  venue: "RUET Campus, Rajshahi",
  edition: "11th",
};

// ─── Page metadata (SEO) ──────────────────────────────────────────────────────
export const cvSubmitPageMeta = {
  title: `CV Submit — RCF ${cvSubmitMeta.edition} Career Fair`,
  description: `Submit your CV for the ${cvSubmitMeta.organizer} ${cvSubmitMeta.edition} Career Fair. Event: ${cvSubmitMeta.eventDate} at ${cvSubmitMeta.venue}.`,
};

// ─── Top banner content ───────────────────────────────────────────────────────
export const cvSubmitBannerContent = {
  label: `RCF ${cvSubmitMeta.edition} Career Fair`,
  highlight: cvSubmitMeta.eventDate,
  detail: cvSubmitMeta.venue,
  href: "/cv-submit",
  cta: "Submit CV",
};

// ─── Homepage section stat cards ──────────────────────────────────────────────
export const cvSubmitStats = [
  {
    icon: "CalendarDays",
    label: "Event Date",
    value: cvSubmitMeta.eventDate,
    amber: true,
  },
  {
    icon: "MapPin",
    label: "Venue",
    value: cvSubmitMeta.venue,
    amber: false,
  },
  {
    icon: "Users",
    label: "Organized By",
    value: cvSubmitMeta.organizer,
    amber: false,
  },
];

// ─── Landing page info strip ──────────────────────────────────────────────────
export const cvSubmitInfoCards = [
  {
    icon: "CalendarDays",
    label: "Event Date",
    value: cvSubmitMeta.eventDate,
    sub: `${cvSubmitMeta.edition} Annual Career Fair`,
  },
  {
    icon: "MapPin",
    label: "Venue",
    value: cvSubmitMeta.venue,
    sub: "Rajshahi University of Engineering & Technology",
  },
  {
    icon: "FileText",
    label: "What to Submit",
    value: "Your CV / Resume",
    sub: "PDF format, max 2MB",
  },
];

// ─── How to submit steps ──────────────────────────────────────────────────────
export const cvSubmitSteps = [
  {
    icon: "UserCircle",
    title: "Fill Your Details",
    description:
      "Provide your name, department, series, and contact information in the submission form.",
  },
  {
    icon: "Upload",
    title: "Upload Your CV",
    description:
      "Attach your CV in PDF format. Make sure it is up-to-date and highlights your skills and experience.",
  },
  {
    icon: "Send",
    title: "Submit & Attend",
    description:
      "Submit your form and attend the Career Fair on the event date to meet recruiters in person.",
  },
];

// ─── Why attend ───────────────────────────────────────────────────────────────
export const cvSubmitBenefits = [
  {
    label: "Top Companies",
    desc: "Meet recruiters from leading companies across Bangladesh.",
  },
  {
    label: "Direct Interaction",
    desc: "Talk directly with hiring managers and company representatives.",
  },
  {
    label: "Career Opportunities",
    desc: "Explore internship, part-time, and full-time job openings.",
  },
  {
    label: "Networking",
    desc: "Connect with peers, alumni, and industry professionals.",
  },
];
