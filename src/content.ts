// ─────────────────────────────────────────────────────────────────
// HEDERA GARDEN DESIGN — SITE CONTENT
// Edit copy, projects, testimonials, and contact details here.
// No component code changes needed for routine content updates.
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  businessName: "Hedera Garden Design",
  tagline: "Gardens that grow with you",
  description:
    "Residential garden design for considered outdoor spaces — from intimate courtyards to sprawling country gardens.",
  email: "eleanor@hederagardendesign.co.uk",
  phone: "+44 (0)7967 047297",
  location: "Based in London · serving London and the South East of England",
  instagramHandle: "@hederagardendesign",
  // Replace with your actual Vercel / custom domain
  siteUrl: "https://hederagardendesign.co.uk",
};

export const navigation = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
];

export const hero = {
  headline: "Transforming your Garden",
  subtext:
    "Bespoke garden design and landscaping across London and the South East.",
  ctaLabel: "See the work",
  ctaHref: "/portfolio",
  // Replace with your own hero image (full-bleed, 2:1 landscape)
  imageUrl: "/plan.jpg",
  imageAlt: "A beautifully landscaped residential garden in summer",
};

export const aboutTeaser = {
  heading: "Design rooted in place",
  body: "Eleanor brings ten years of horticultural expertise to every project — listening first, then crafting gardens that feel inevitable, as though they always belonged to their landscape.",
  ctaLabel: "About Eleanor",
  ctaHref: "/about",
  // Replace with Eleanor's photo (portrait orientation)
  imageUrl: "/Eleanor Alty.jpg",
  imageAlt: "Eleanor Alty, garden designer",
};

export const portfolioProjects = [
  {
    id: "walled-kitchen-garden",
    name: "The Walled Kitchen Garden",
    location: "Chipping Norton, Oxfordshire",
    description:
      "A productive kitchen garden enclosed by original Cotswold stone walls, blending heritage roses, espalier fruit trees, and raised vegetable beds.",
    imageUrl: "https://picsum.photos/seed/project1/900/675",
    imageAlt: "Walled kitchen garden with raised beds and climbing roses",
    tags: ["Kitchen Garden", "Country House"],
  },
  {
    id: "urban-courtyard",
    name: "The Urban Courtyard",
    location: "Oxford, Oxfordshire",
    description:
      "A small-footprint city garden transformed into a year-round sanctuary of shade-tolerant planting and pale limestone paving.",
    imageUrl: "https://picsum.photos/seed/project2/900/675",
    imageAlt: "Elegant urban courtyard garden with limestone paving",
    tags: ["Courtyard", "Urban"],
  },
  {
    id: "meadow-garden",
    name: "The Meadow Garden",
    location: "Burford, Oxfordshire",
    description:
      "Five acres of managed meadow with mown paths threading through wildflower planting — a garden that belongs entirely to its setting.",
    imageUrl: "https://picsum.photos/seed/project3/900/675",
    imageAlt: "Wildflower meadow garden with mown path",
    tags: ["Meadow", "Large Garden"],
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Eleanor has an extraordinary ability to listen and translate what you half-imagine into something real and alive. Our garden is the heart of our home now.",
    author: "Sarah & James T.",
    location: "Chipping Norton",
    projectRef: "Walled Kitchen Garden",
  },
  {
    id: 2,
    quote:
      "We gave Eleanor a challenging brief — a small space, two dogs, and a compulsive need for flowers — and she made it all work beautifully.",
    author: "Priya M.",
    location: "Oxford",
    projectRef: "Urban Courtyard",
  },
  {
    id: 3,
    quote:
      "What sets Eleanor apart is her depth of horticultural knowledge. Every plant is in the right place, and five years on the garden just keeps getting better.",
    author: "Robert & Anne H.",
    location: "Burford",
    projectRef: "Meadow Garden",
  },
];

export const contactInfo = {
  heading: "Start a conversation",
  subtext:
    "Every garden begins with a conversation. Fill in the form and Eleanor will be in touch within two working days.",
  fields: {
    preferredContactTimes: [
      "Morning (9am–12pm)",
      "Afternoon (12pm–5pm)",
      "Evening (5pm–7pm)",
      "Anytime",
    ],
  },
  serviceArea:
    "Hedera Garden Design works primarily across London and the South East of England. Projects further afield are considered on request.",
};
