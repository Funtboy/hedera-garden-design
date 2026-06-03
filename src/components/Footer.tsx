import Link from "next/link";
import { siteConfig, navigation } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <p className="font-serif text-2xl text-cream">
              {siteConfig.businessName}
            </p>
            <p className="text-sm leading-relaxed text-sage">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            <p className="text-xs tracking-widest uppercase text-sage mb-5">
              Navigation
            </p>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-cream hover:text-sage transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest uppercase text-sage mb-5">
              Get in touch
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-cream hover:text-sage transition-colors duration-200"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="block text-sm text-cream hover:text-sage transition-colors duration-200"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream hover:text-sage transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              {siteConfig.instagramHandle}
            </a>
            <p className="text-sm text-sage pt-2 leading-relaxed">
              {siteConfig.location}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sage/30 flex flex-col md:flex-row justify-between gap-4 text-xs text-sage">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
            rights reserved.
          </p>
          <p>Garden design with intention.</p>
        </div>
      </div>
    </footer>
  );
}
