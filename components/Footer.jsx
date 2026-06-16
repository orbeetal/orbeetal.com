"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Services",    route: "/services" },
  { name: "Departments", route: "/departments" },
  { name: "Portfolio",   route: "/portfolio" },
  { name: "Team",        route: "/team" },
  { name: "About",       route: "/about" },
  { name: "Contact",     route: "/contact" },
];

const specialLinks = [
  { name: "Idea Contest", route: "/idea-contest" },
  { name: "Career Fair",  route: "/cv-submit" },
];

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
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-white/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Programs</h4>
            <ul className="space-y-4 mb-8">
              {specialLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-amber-400/80 hover:text-amber-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-white mb-4 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* BASIS Member Strip */}
        <div className="mt-12 mb-8 flex justify-center">
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-xl border border-amber-400/25 bg-amber-400/8">
            <div className="shrink-0 w-20 h-12 bg-white rounded-lg overflow-hidden p-1.5 flex items-center justify-center">
              <Image src="/brand/basis_logo.jpeg" alt="BASIS" width={72} height={40} className="object-contain w-full h-full" />
            </div>
            <div>
              <span className="text-amber-300 font-semibold text-sm block">Proud Member of BASIS</span>
              <span className="text-amber-400/50 text-xs hidden sm:block mt-0.5">Bangladesh Association of Software &amp; Information Services</span>
            </div>
          </div>
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
