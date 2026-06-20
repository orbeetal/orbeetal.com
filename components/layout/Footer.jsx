"use client";

import Image from "next/image";
import Link from "next/link";
import { BasisBadge } from "@/components/common/BasisBadge";
import { navLinks } from "@/data/navigation.js";

const legalLinks = [
  { name: "Privacy Policy",  route: "/privacy-policy" },
  { name: "Terms of Service", route: "/terms" },
  { name: "Cookie Policy",   route: "/cookies" },
];

// footer navigation links upto 5
const footerNavLinks = navLinks.slice(0, 3).map((item) => ({
  name: item.name,
  route: item.route,
}));

export function Footer() {
  return (
    <footer className="bg-[#050B14] border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/brand/logo.webp" alt="Orbeetal Logo" width={48} height={48} className="object-contain" />
              <span className="font-display font-bold text-3xl tracking-tight text-white">Orbeetal</span>
            </Link>
            <p className="text-white/60 max-w-md text-lg">
              Bold, forward-thinking digital transformation. We engineer precision software and design immersive experiences that elevate businesses above the competition.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4">
              {footerNavLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-white/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-lg">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-white/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BASIS Member Strip */}
        <div className="mt-12 mb-8 flex justify-center">
          <BasisBadge />
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Orbeetal. All rights reserved.</p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
            All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
}
