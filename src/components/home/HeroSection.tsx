import Link from "next/link";
import { hero } from "@/content";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      {/* ── IMAGE SLOT ──────────────────────────────────────────────────
          Replace the <img> with a Next.js <Image fill priority> once your
          hero photograph is available. Keep the absolute inset-0 wrapper.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src={hero.imageUrl}
          alt={hero.imageAlt}
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — bottom-heavy to frame the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-site pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p className="text-sage text-sm tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Residential Garden Design
          </p>
          <h1 className="text-cream font-serif text-5xl md:text-6xl lg:text-7xl leading-none whitespace-pre-line mb-8 animate-fade-up">
            {hero.headline}
          </h1>
          <p
            className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            {hero.subtext}
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href={hero.ctaHref}
              className="px-8 py-4 bg-cream text-forest text-sm tracking-widest uppercase hover:bg-sage hover:text-cream transition-colors duration-300"
            >
              {hero.ctaLabel}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-cream/50 text-cream text-sm tracking-widest uppercase hover:border-cream hover:bg-cream/10 transition-colors duration-300"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-cream/50">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <span className="block w-px h-12 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
