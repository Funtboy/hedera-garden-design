import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="pt-32 section-pad container-site">
      <p className="text-sage text-sm tracking-[0.2em] uppercase mb-4">Coming soon</p>
      <h1 className="font-serif text-5xl text-forest">About Eleanor</h1>
      <p className="mt-6 text-charcoal/60 text-lg">
        Eleanor&rsquo;s story, design philosophy, and personal photo — coming in the next build.
      </p>
    </div>
  );
}
