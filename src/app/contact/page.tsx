import type { Metadata } from "next";
import { siteConfig, contactInfo } from "@/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-mist">
        <div className="container-site">
          <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-mid-green)" }}>
            Get in touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-forest">
            {contactInfo.heading}
          </h1>
          <p className="mt-6 text-charcoal/60 text-lg max-w-xl leading-relaxed">
            {contactInfo.subtext}
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — contact details */}
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-xs tracking-widest uppercase text-charcoal/40">
                  Direct contact
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px mt-3 flex-shrink-0" style={{ backgroundColor: "var(--color-mid-green)" }} />
                    <div>
                      <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-0.5">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-charcoal hover:opacity-70 transition-opacity"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px mt-3 flex-shrink-0" style={{ backgroundColor: "var(--color-mid-green)" }} />
                    <div>
                      <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-0.5">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-charcoal hover:opacity-70 transition-opacity"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-mist-dark pt-8 space-y-3">
                <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-4">
                  Service area
                </p>
                <p className="text-charcoal/60 leading-relaxed text-sm">
                  {contactInfo.serviceArea}
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
