"use client";

import { useState } from "react";
import { ArrowUp, Mail, Copy, Check } from "lucide-react";
import AismaLogo from "./AismaLogo";

// ✦ Direct Contact Email:
// Yahan apna Email address add ya update karein:
const CONTACT_EMAIL = " aisalesmarketinga@gmail.com";

// ✦ Elite Social Media Links Configuration
// Aap yahan aasani se apne Facebook, Instagram, LinkedIn aur Twitter (X) ke URLs update kar sakte hain:
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/AISMA/61595011714748/",
    label: "Follow us on Facebook",
    brandColor: "#1877F2",
    hoverStyles:
      "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-blue-50/70 hover:shadow-[0_10px_22px_-4px_rgba(24,119,242,0.32)]",
    icon: (
      <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aisalesmarketingagency/",
    label: "Follow us on Instagram",
    brandColor: "#E4405F",
    hoverStyles:
      "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-rose-50/70 hover:shadow-[0_10px_22px_-4px_rgba(228,64,95,0.32)]",
    icon: (
      <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    // Yahan apna LinkedIn profile link daalain:
    href: "https://linkedin.com/in/your-profile",
    label: "Follow us on LinkedIn",
    brandColor: "#0A66C2",
    hoverStyles:
      "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-sky-50/70 hover:shadow-[0_10px_22px_-4px_rgba(10,102,194,0.32)]",
    icon: (
      <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    // Yahan apna Twitter / X profile link daalain:
    href: "https://x.com/AISMAOutreach",
    label: "Follow us on X (Twitter)",
    brandColor: "#0f172a",
    hoverStyles:
      "hover:text-black hover:border-slate-800/40 hover:bg-slate-100 hover:shadow-[0_10px_22px_-4px_rgba(15,23,42,0.25)]",
    icon: (
      <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 pt-16 pb-12 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand info (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <AismaLogo size="md" />

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed mt-3">
              Engineering autonomous growth through next-generation web architectures, algorithmic B2B client hunting, and predictive performance marketing.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-beacon" />
              <span>All Systems Operational • 2026 Production V4.2</span>
            </div>
          </div>

          {/* Core Services Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Leads Generation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Social Media Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
              Agency
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <a href="#process" className="hover:text-blue-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#book-call" className="hover:text-blue-600 transition-colors">
                  Book Strategy Call
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 Cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
              Direct Contact
            </h4>

            {/* Interactive Working Email (mailto + Copy-to-clipboard) */}
            <div className="flex items-center gap-1.5 p-1.5 pl-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400/50 transition-all max-w-fit group">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Inquiry%20from%20Website&body=Hi%20Ahmad,%0A%0AI%20would%20like%20to%20discuss%20a%20project...`}
                className="text-xs font-mono font-semibold text-slate-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 truncate"
                title="Click to compose email"
              >
                <Mail className="h-3.5 w-3.5 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{CONTACT_EMAIL}</span>
              </a>

              <div className="h-3.5 w-px bg-slate-200 mx-0.5" />

              <button
                type="button"
                onClick={handleCopyEmail}
                className="relative p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer active:scale-90"
                aria-label="Copy email"
                title={copied ? "Copied!" : "Copy email address"}
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}

                {/* Copied Feedback Badge */}
                {copied && (
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-mono font-bold text-white bg-emerald-600 rounded shadow-md whitespace-nowrap z-30">
                    Copied!
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-emerald-600" />
                  </span>
                )}
              </button>
            </div>

            {/* Elite Social Media Links */}
            <div className="pt-2">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Social Presence
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {SOCIAL_LINKS.map((social) => {
                  const isExternal = social.href.startsWith("http");
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      title={social.label}
                      className={`group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-500 shadow-2xs hover:-translate-y-1 transition-all duration-300 ease-out active:scale-95 ${social.hoverStyles}`}
                    >
                      {/* Premium Tooltip */}
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-200 px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide text-white bg-slate-900 rounded shadow-md whitespace-nowrap z-20">
                        {social.name}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-slate-900" />
                      </span>

                      {/* Icon */}
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AhmadBilal AI Agency. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
