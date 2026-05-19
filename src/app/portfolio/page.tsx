import type { Metadata } from "next";
import { portfolioProjects } from "@/content";
import Link from "next/link";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-mist">
        <div className="container-site">
          <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-mid-green)" }}>
            Selected work
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-forest">
            Portfolio
          </h1>
          <p className="mt-6 text-charcoal/60 text-lg max-w-xl leading-relaxed">
            A selection of residential garden design projects across London and
            the South East — from intimate courtyards to expansive country
            gardens.
          </p>
        </div>
      </div>

      {/* Project grid */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioProjects.map((project) => (
              <article key={project.id} className="group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wider uppercase px-2 py-0.5 border border-mist-dark text-sage"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Copy */}
                <h2 className="font-serif text-2xl text-forest mb-1 group-hover:text-sage transition-colors duration-200">
                  {project.name}
                </h2>
                <p className="text-xs tracking-wider uppercase text-charcoal/40 mb-3">
                  {project.location}
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-20">
        <div className="container-site text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-forest">
            Interested in working together?
          </h2>
          <p className="text-charcoal/60 max-w-md mx-auto">
            Every project starts with a conversation. Get in touch to discuss
            your garden.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase text-cream hover:opacity-80 transition-opacity duration-300"
            style={{ backgroundColor: "var(--color-mid-green)" }}
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
