import Link from "next/link";
import { aboutTeaser } from "@/content";

export default function AboutTeaser() {
  return (
    <section className="section-pad bg-cream overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="reveal order-2 lg:order-1 relative aspect-[4/5] overflow-hidden">
            {/* ── IMAGE SLOT ──────────────────────────────────────────────
                Replace with Next.js <Image fill> once Eleanor's photo arrives.
            ──────────────────────────────────────────────────────────── */}
            <img
              src={aboutTeaser.imageUrl}
              alt={aboutTeaser.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* Decorative border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-mist-dark pointer-events-none" />
          </div>

          {/* Text */}
          <div className="reveal order-1 lg:order-2 space-y-8">
            <p className="text-sage text-sm tracking-[0.2em] uppercase">
              About the designer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest">
              {aboutTeaser.heading}
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              {aboutTeaser.body}
            </p>
            <Link
              href={aboutTeaser.ctaHref}
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-forest hover:text-sage transition-colors duration-200 group"
            >
              {aboutTeaser.ctaLabel}
              <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
