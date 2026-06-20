import { Outfit, Space_Grotesk, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { BackToTop } from "@/components/layout/BackToTop";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins-face",
});

export const metadata = {
  metadataBase: new URL("https://orbeetal.com"),
  title: "Orbeetal — Elevate Above the Competition",
  description:
    "A forward-thinking software company dedicated to building smart, impactful technology — empowering businesses through innovation and intelligent solutions.",
  keywords: ["software", "web development", "mobile app", "UI/UX", "cybersecurity", "digital marketing", "Bangladesh"],
  openGraph: {
    title: "Orbeetal — Elevate Above the Competition",
    description:
      "A forward-thinking software company dedicated to building smart, impactful technology.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Orbeetal — Elevate Above the Competition" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden" suppressHydrationWarning>
        {children}
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
