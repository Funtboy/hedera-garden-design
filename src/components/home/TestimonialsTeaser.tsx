import Link from "next/link";
import { testimonials } from "@/content";

export default function TestimonialsTeaser() {
  // Feature the first testimonial as a large pull-quote; the others as cards
  const [featured, ...rest] = testimonials;

  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        {/* Section label */}
        <div className="reveal mb-14 text-center">
          <p className="text-sage text-sm tracking-[0.2em] uppercase mb-4">
            Client words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest">
            What clients say
          </h2>
        </div>

        {/* Featured pull-quote */}
        <blockquote className="reveal mb-14 max-w-3xl mx-auto text-center space-y-6">
          <p className="font-serif text-2xl md:text-3xl text-forest leading-relaxed italic">
            &ldquo;{featured.quote}&rdquo;
          </p>
          <footer className="space-y-1">
            <p className="text-sm font-medium tracking-wider uppercase text-charcoal">
              {featured.author}
            </p>
            <p className="text-xs text-charcoal/40 tracking-wider uppercase">
              {featured.location} &mdash; {featured.projectRef}
            </p>
          </footer>
        </blockquote>

        {/* Secondary cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {rest.map((t) => (
            <div
              key={t.id}
              className="bg-mist p-8 space-y-4 border-l-2 border-sage"
            >
              <p className="text-charcoal/80 leading-relaxed italic text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-xs font-medium tracking-wider uppercase text-charcoal">
                  {t.author}
                </p>
                <p className="text-xs text-charcoal/40 tracking-wider uppercase mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-forest hover:text-sage transition-colors duration-200 group"
          >
            Read more reviews
            <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
