import type { Metadata } from "next";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <div className="pt-32 section-pad container-site">
      <p className="text-sage text-sm tracking-[0.2em] uppercase mb-4">Coming soon</p>
      <h1 className="font-serif text-5xl text-forest">Client Testimonials</h1>
      <p className="mt-6 text-charcoal/60 text-lg">
        Full testimonials page — coming in the next build.
      </p>
    </div>
  );
}
