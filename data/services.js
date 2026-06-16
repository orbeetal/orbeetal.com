export const servicesPageMeta = {
  title: "Digital Services — Orbeetal",
  description:
    "Full-spectrum digital services: web design, web development, mobile apps, UI/UX design, digital marketing, and cybersecurity. We engineer competitive advantages.",
  openGraph: {
    title: "Digital Services — Orbeetal",
    description: "Full-spectrum digital services engineered for precision and long-term growth.",
    type: "website",
    images: [{ url: "/api/og/services", width: 1200, height: 630, alt: "Orbeetal Digital Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services — Orbeetal",
    description: "Full-spectrum digital services engineered for precision and long-term growth.",
    images: ["/api/og/services"],
  },
};

export const services = [
  {
    title: "Web Design",
    description: "Bold, forward-thinking visual identities and landing pages that command attention.",
    icon: "Monitor",
    image: "/services/service-webdesign.png",
  },
  {
    title: "Web Development",
    description: "High-performance, scalable web architectures engineered for precision and long-term growth.",
    icon: "Code2",
    image: "/services/service-webdev.png",
  },
  {
    title: "Mobile App Development",
    description: "High-performance mobile apps for iOS and Android, from concept to deployment.",
    icon: "Smartphone",
    image: "/services/service-mobile.png",
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces that are intuitive, beautiful, and built to convert.",
    icon: "Paintbrush",
    image: "/services/service-uiux.png",
  },
  {
    title: "Digital Marketing",
    description: "Performance-driven campaigns that boost your brand visibility and sales.",
    icon: "TrendingUp",
    image: "/services/service-marketing.png",
  },
  {
    title: "Cybersecurity",
    description: "Securing digital landscapes for today and tomorrow with proactive threat protection.",
    icon: "ShieldCheck",
    image: "/services/service-cybersecurity.png",
  },
];
