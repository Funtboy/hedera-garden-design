"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig, navigation } from "@/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={siteConfig.businessName}
        >
          {/* ── LOGO PLACEHOLDER ────────────────────────────────────────
              Replace the div below with your <Image> once the logo SVG/PNG
              is ready. The CSS custom properties --logo-width / --logo-height
              in globals.css control the slot dimensions.
          ─────────────────────────────────────────────────────────────── */}
          <div
            className="flex items-center justify-center rounded border border-mist-dark bg-mist text-forest text-xs tracking-widest uppercase"
            style={{ width: "var(--logo-width)", height: "var(--logo-height)" }}
          >
            Logo
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wider uppercase text-charcoal/70 hover:text-forest transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 text-sm tracking-wider uppercase bg-forest text-cream hover:bg-sage transition-colors duration-300"
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-px bg-forest transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-forest transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-forest transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-cream border-t border-mist-dark ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="container-site flex flex-col gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base tracking-wider uppercase text-charcoal/70 hover:text-forest transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-block px-5 py-3 text-sm tracking-wider uppercase bg-forest text-cream text-center"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
