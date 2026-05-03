import Link from "next/link";
import { portfolioProjects } from "@/content";

export default function PortfolioPreview() {
  // Show the first three projects on the home page
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="section-pad bg-mist">
      <div className="container-site">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4">
            <p className="text-sage text-sm tracking-[0.2em] uppercase">
              Selected work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest">
              Recent projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex-shrink-0 inline-flex items-center gap-3 text-sm tracking-widest uppercase text-forest hover:text-sage transition-colors duration-200 group"
          >
            View all projects
            <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>

        {/* Grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group bg-cream overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* ── IMAGE SLOT ────────────────────────────────────────
                    Replace with Next.js <Image fill> per project.
                ──────────────────────────────────────────────────────── */}
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Copy */}
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wider uppercase text-sage border border-mist-dark px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-xl text-forest group-hover:text-sage transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-xs tracking-wider text-charcoal/40 uppercase">
                  {project.location}
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
