"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const navLinks = [
  { name: "Services",    href: "services" },
  { name: "Departments", href: "departments" },
  { name: "Portfolio",   href: "portfolio" },
  { name: "Team",        href: "team" },
  { name: "About",       href: "about" },
  { name: "Contact",     href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image src="/brand/logo.webp" alt="Orbeetal Logo" width={48} height={48} className="object-contain" />
          <span className="font-poppins font-semibold text-3xl text-white">Orbeetal</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-display font-thin text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-none"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed h-screen lg:hidden inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, link.href); }}
              className="text-2xl font-display font-medium text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            size="lg"
            onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, "contact"); }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-none mt-4"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
