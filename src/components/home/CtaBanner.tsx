import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      {/* ── IMAGE SLOT ──────────────────────────────────────────────────
          Replace the <img> with a Next.js <Image fill> once available.
          Suggested: a wide garden detail — foliage, texture, texture.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1920&q=80"
          alt="Lush garden planting detail"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest/70" />
      </div>

      {/* Content */}
      <div className="relative container-site py-28 md:py-36 text-center space-y-8">
        <p className="text-sage text-sm tracking-[0.2em] uppercase">
          Ready to begin?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream max-w-2xl mx-auto leading-tight">
          Your garden is waiting to become itself.
        </h2>
        <p className="text-cream/70 text-lg max-w-lg mx-auto leading-relaxed">
          Every project starts with a conversation. Let&rsquo;s talk about what
          your outdoor space could be.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-cream text-forest text-sm tracking-widest uppercase hover:bg-sage hover:text-cream transition-colors duration-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
