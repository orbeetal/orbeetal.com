export const departmentsPageMeta = {
  title: "Our Departments — Orbeetal",
  description:
    "Seven specialized departments — Finance, Operations, Planning, IT, Marketing, Product, and Cybersecurity — working in unison to deliver excellence.",
  openGraph: {
    title: "Our Departments — Orbeetal",
    description: "Seven specialized departments working in unison to deliver excellence.",
    type: "website",
    images: [{ url: "/api/og/departments", width: 1200, height: 630, alt: "Orbeetal Departments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Departments — Orbeetal",
    description: "Seven specialized departments working in unison to deliver excellence.",
    images: ["/api/og/departments"],
  },
};

export const departments = [
  {
    title: "Finance",
    description: "Ensuring financial stability and strategic growth.",
    icon: "DollarSign",
    gradient: "from-cyan-600/20 to-cyan-900/10",
  },
  {
    title: "Operation",
    description: "Strategizing for a brighter, more efficient future.",
    icon: "Settings",
    gradient: "from-indigo-600/20 to-indigo-900/10",
  },
  {
    title: "Planning",
    description: "Innovating the future through research and technology.",
    icon: "Target",
    gradient: "from-blue-600/20 to-blue-900/10",
  },
  {
    title: "Information Technology",
    description: "Harnessing the power of technology to drive business.",
    icon: "Globe",
    gradient: "from-blue-700/20 to-blue-900/10",
  },
  {
    title: "Marketing",
    description: "Amplifying your brand's voice in the digital world.",
    icon: "TrendingUp",
    gradient: "from-sky-600/20 to-sky-900/10",
  },
  {
    title: "Product",
    description: "Turning ideas into market-ready products.",
    icon: "Package",
    gradient: "from-cyan-500/20 to-cyan-800/10",
  },
  {
    title: "Cyber Security",
    description: "Securing digital landscapes for today and tomorrow.",
    icon: "ShieldCheck",
    gradient: "from-blue-500/20 to-blue-800/10",
  },
];
