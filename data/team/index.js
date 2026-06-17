import saiful from "./md-saiful-islam.js";
import hasibul from "./hasibul-hasan-sifat.js";
import muktadir from "./muktadir-hasan-sayem.js";
import musanna from "./musanna-galib.js";
import rahik from "./rahik-ibne-forman.js";
import muhit from "./sayed-muhit-al-rafi.js";
import shahadat from "./shahadat-hossain.js";

export const teamPageMeta = {
  title: "Our Team — Orbeetal",
  description:
    "Meet the seven visionary directors driving Orbeetal's mission to engineer competitive advantages for businesses worldwide.",
  openGraph: {
    title: "Our Team — Orbeetal",
    description: "Seven visionary directors driving Orbeetal's global mission.",
    type: "website",
    images: [{ url: "/api/og/team", width: 1200, height: 630, alt: "Orbeetal Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team — Orbeetal",
    description: "Seven visionary directors driving Orbeetal's global mission.",
    images: ["/api/og/team"],
  },
};

export const teamMembers = [
  saiful,
  hasibul,
  muktadir,
  musanna,
  rahik,
  muhit,
  shahadat,
];
