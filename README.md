# Hedera Garden Design

Website for Eleanor's residential garden design business.

**Live site:** [hederagardendesign.co.uk](https://hederagardendesign.co.uk)  
**Repository:** [github.com/Funtboy/hedera-garden-design](https://github.com/Funtboy/hedera-garden-design)

---

## Stack

- [Next.js 14](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Vercel](https://vercel.com) — hosting & deployment
- Static content — no CMS required

---

## Running locally

Make sure [Node.js](https://nodejs.org) is installed, then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating content

All site copy, project data, testimonials, and contact details live in one file:

```
src/content.ts
```

Edit that file to update:
- Business name, email, phone, location
- Hero headline and subtext
- Portfolio projects (name, description, image, tags)
- Testimonials (quote, author, location)
- Navigation links

No component code changes needed for routine content updates.

---

## Swapping brand assets

All brand tokens (colours, fonts, logo size) are CSS custom properties in:

```
src/app/globals.css
```

| Variable | Purpose |
|---|---|
| `--color-cream` | Page background |
| `--color-forest` | Primary dark green |
| `--color-sage` | Accent green |
| `--color-stone` | Warm earth accent |
| `--color-charcoal` | Body text |
| `--font-serif` | Heading font (currently Cormorant Garamond) |
| `--font-sans` | Body font (currently Inter) |
| `--logo-width` / `--logo-height` | Nav logo slot dimensions |

### Replacing the logo

Drop the new file into `public/logo.png` (or update the `src` in `src/components/Nav.tsx` and `src/components/home/HeroSection.tsx`).

### Replacing placeholder images

Update the image URLs in `src/content.ts`. For real photos, put them in the `public/` folder and reference them as `/filename.jpg`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer)
│   ├── globals.css         # Theme tokens + Tailwind
│   ├── page.tsx            # Home page
│   ├── portfolio/page.tsx  # Portfolio page (stub)
│   ├── about/page.tsx      # About page (stub)
│   ├── testimonials/page.tsx
│   └── contact/page.tsx    # Contact page (stub)
├── components/
│   ├── Nav.tsx             # Site navigation
│   ├── Footer.tsx          # Site footer
│   ├── RevealObserver.tsx  # Scroll-reveal animation wiring
│   └── home/
│       ├── HeroSection.tsx
│       ├── AboutTeaser.tsx
│       ├── PortfolioPreview.tsx
│       ├── TestimonialsTeaser.tsx
│       └── CtaBanner.tsx
└── content.ts              # All site content
```

---

## Deployment

Hosted on Vercel. Every push to `main` triggers an automatic deployment.

To deploy manually: push to the `main` branch on GitHub.

---

## Pages status

| Page | Status |
|---|---|
| Home | Complete — hero + footer, teaser sections commented out pending more content |
| Portfolio | Complete — grid layout, placeholder images (swap in `src/content.ts`) |
| About | Complete — Eleanor's bio, photo, credentials, philosophy section |
| Testimonials | Complete — full quote list with dividers |
| Contact | Complete — Formspree form (endpoint: xjgzgwea), email + phone in footer |
