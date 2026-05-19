"use client";

import { useForm, ValidationError } from "@formspree/react";
import { contactInfo } from "@/content";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjgzgwea");

  if (state.succeeded) {
    return (
      <div className="py-12 text-center space-y-4">
        <div
          className="w-12 h-px mx-auto"
          style={{ backgroundColor: "var(--color-mid-green)" }}
        />
        <p className="font-serif text-2xl text-forest">Thank you</p>
        <p className="text-charcoal/60 leading-relaxed max-w-sm mx-auto">
          Eleanor will be in touch within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Full name <span style={{ color: "var(--color-mid-green)" }}>*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full border-b border-mist-dark bg-transparent py-2.5 text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-current transition-colors"
          style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
          placeholder="Jane Smith"
        />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="mt-1 text-xs text-red-500" />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Email <span style={{ color: "var(--color-mid-green)" }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full border-b border-mist-dark bg-transparent py-2.5 text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-current transition-colors"
          placeholder="jane@example.com"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="mt-1 text-xs text-red-500" />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Phone <span className="normal-case text-charcoal/30">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full border-b border-mist-dark bg-transparent py-2.5 text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-current transition-colors"
          placeholder="+44 7700 000000"
        />
      </div>

      {/* Preferred contact time */}
      <div>
        <label
          htmlFor="contact-time"
          className="block text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Best time to reach you
        </label>
        <select
          id="contact-time"
          name="contact_time"
          className="w-full border-b border-mist-dark bg-transparent py-2.5 text-charcoal focus:outline-none focus:border-current transition-colors appearance-none cursor-pointer"
        >
          <option value="">No preference</option>
          {contactInfo.fields.preferredContactTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-widest uppercase text-charcoal/50 mb-2"
        >
          Tell us about your garden <span style={{ color: "var(--color-mid-green)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border-b border-mist-dark bg-transparent py-2.5 text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-current transition-colors resize-none"
          placeholder="Describe your outdoor space, what you'd like to achieve, and anything else that feels relevant…"
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="mt-1 text-xs text-red-500" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 px-10 py-4 text-sm tracking-widest uppercase text-cream hover:opacity-80 transition-opacity duration-300 disabled:opacity-50"
        style={{ backgroundColor: "var(--color-mid-green)" }}
      >
        {state.submitting ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
