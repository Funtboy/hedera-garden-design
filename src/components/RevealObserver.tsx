"use client";

import { useEffect } from "react";

// Attaches an IntersectionObserver that adds `.is-visible` to any element
// with the `.reveal` or `.reveal-stagger` class when it scrolls into view.
export default function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .reveal-stagger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
