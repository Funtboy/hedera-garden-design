import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/content";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-mist">
        <div className="container-site">
          <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-mid-green)" }}>
            Client words
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-forest">
            Testimonials
          </h1>
          <p className="mt-6 text-charcoal/60 text-lg max-w-xl leading-relaxed">
            What clients say about working with Eleanor and the gardens she has
            helped them create.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <section className="pt-8 pb-16 bg-cream">
        <div className="container-site max-w-4xl mx-auto divide-y divide-mist-dark">
          {testimonials.map((t) => (
            <div key={t.id} className="py-10 first:pt-4">
              <blockquote>
                {/* Opening quote mark */}
                <span
                  className="block font-serif text-5xl leading-none mb-3"
                  style={{ color: "var(--color-mid-green)", opacity: 0.35 }}
                >
                  &ldquo;
                </span>
                <p className="font-serif text-2xl md:text-3xl text-forest leading-relaxed mb-6">
                  {t.quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "var(--color-mid-green)" }}
                  />
                  <div>
                    <p className="text-sm font-medium tracking-wider uppercase text-charcoal">
                      {t.author}
                    </p>
                    <p className="text-xs text-charcoal/40 tracking-wider uppercase mt-0.5">
                      {t.location} &mdash; {t.projectRef}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-20">
        <div className="container-site text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-forest">
            Ready to start your project?
          </h2>
          <p className="text-charcoal/60 max-w-md mx-auto">
            Join the clients who have transformed their outdoor spaces with
            Eleanor&apos;s help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase text-cream hover:opacity-80 transition-opacity duration-300"
            style={{ backgroundColor: "var(--color-mid-green)" }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
