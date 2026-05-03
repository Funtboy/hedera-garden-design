import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: {
    default: siteConfig.businessName,
    template: `%s — ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.businessName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
