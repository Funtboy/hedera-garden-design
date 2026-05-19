import type { Metadata } from "next";
import Link from "next/link";
import { aboutTeaser } from "@/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-mist">
        <div className="container-site">
          <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-mid-green)" }}>
            The designer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-forest">
            About Eleanor
          </h1>
        </div>
      </div>

      {/* Main bio section */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* ── IMAGE SLOT ──────────────────────────────────────────
                  Replace with Eleanor's portrait photo.
              ──────────────────────────────────────────────────────── */}
              <img
                src={aboutTeaser.imageUrl}
                alt={aboutTeaser.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-mist-dark pointer-events-none" />
            </div>

            {/* Bio */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-forest">
                Design rooted in place
              </h2>
              <div className="space-y-5 text-charcoal/70 leading-relaxed">
                <p>
                  Eleanor founded Hedera Garden Design after 4 years of study
                  at Capel Manor College in London. Her approach begins not
                  with plants or plans, but with listening — understanding how
                  clients actually live, what they love, and what they quietly
                  dream their outdoor space could become.
                </p>
                <p>
                  Eleanor brings deep horticultural knowledge to every project.
                  She believes that the best gardens are never imposed on a
                  landscape — they grow from it. Each design is site-specific,
                  season-aware, and built to mature and improve over time.
                </p>
                <p>
                  Whether transforming a compact city courtyard or shaping
                  acres of countryside, Eleanor&apos;s work is united by the same
                  principle: that a garden should feel inevitable, as though
                  it always belonged exactly where it is.
                </p>
              </div>

              {/* Credentials */}
              <div className="border-t border-mist-dark pt-8 space-y-3">
                <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-4">
                  Credentials
                </p>
                {[
                  "Diploma in Garden Design, Capel Manor College, London",
                  "Member, Society of Garden Designers (SGD)",
                  "2 years designing private residential gardens",
                  "Based in London, working across London & the South East",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-mid-green)" }} />
                    <p className="text-sm text-charcoal/70">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-sm tracking-widest uppercase text-cream hover:opacity-80 transition-opacity duration-300"
                style={{ backgroundColor: "var(--color-mid-green)" }}
              >
                Work with Eleanor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="section-pad bg-mist">
        <div className="container-site max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "var(--color-mid-green)" }}>
            Design philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest">
            Gardens that grow with you
          </h2>
          <div className="space-y-5 text-charcoal/70 leading-relaxed text-left">
            <p>
              Every garden Eleanor designs is conceived as a living thing —
              something that will change with the seasons, mature over years,
              and reward patient observation. She works closely with each
              client through an unhurried process of site visits, conversations,
              and considered iteration before a single plant is chosen.
            </p>
            <p>
              Planting is always ecological at heart: choosing species suited
              to the soil, the aspect, and the local climate. Eleanor works
              with nature rather than against it, and the result is gardens
              that feel effortless — even when the thinking behind them was
              anything but.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
