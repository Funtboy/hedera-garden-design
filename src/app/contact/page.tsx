import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-32 section-pad container-site">
      <p className="text-sage text-sm tracking-[0.2em] uppercase mb-4">Coming soon</p>
      <h1 className="font-serif text-5xl text-forest">Get in touch</h1>
      <p className="mt-6 text-charcoal/60 text-lg">
        Enquiry form and contact details — coming in the next build.
      </p>
    </div>
  );
}
