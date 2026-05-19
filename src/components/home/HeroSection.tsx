import Link from "next/link";
import { hero } from "@/content";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] flex items-end overflow-hidden">
      {/* Background image */}
      {/* ── IMAGE SLOT ──────────────────────────────────────────────────
          Replace the <img> with a Next.js <Image fill priority> once your
          hero photograph is available. Keep the absolute inset-0 wrapper.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src={hero.imageUrl}
          alt={hero.imageAlt}
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Gradient overlay — bottom-heavy to frame the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-forest/10" />
      </div>

      {/* Content */}
      <div className="relative container-site pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <img
            src="/logo.png"
            alt="Hedera Garden Design"
            className="-mb-12 max-h-[306px] md:max-h-[409px]"
            style={{ width: "auto", objectFit: "contain" }}
          />
          <p className="text-xl tracking-[0.25em] uppercase mb-4 font-sans" style={{ color: "var(--color-mid-green)" }}>
            Hedera Garden Design
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none mb-8 animate-fade-up" style={{ color: "var(--color-mid-green)" }}>
            {hero.headline}
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up"
            style={{ color: "var(--color-mid-green)", animationDelay: "150ms" }}
          >
            {hero.subtext}
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href={hero.ctaHref}
              className="px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-80"
              style={{ backgroundColor: "var(--color-mid-green)", color: "white" }}
            >
              {hero.ctaLabel}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-80"
              style={{ border: "2px solid var(--color-mid-green)", color: "var(--color-mid-green)" }}
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
