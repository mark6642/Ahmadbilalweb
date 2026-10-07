"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AismaLogo from "./AismaLogo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services & Solution", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "How It Works", href: "#process" },
  { name: "Our Team", href: "#team" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 md:px-8 transition-all duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Floating iOS Glass Capsule */}
        <div
          className={`relative flex items-center justify-between rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border border-slate-200/60 py-1 sm:py-1.5 px-3.5 sm:px-6 backdrop-blur-2xl shadow-[0_16px_36px_-6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-slate-900/5"
              : "bg-slate-100/90 border border-slate-200/80 py-1.5 sm:py-2 px-3.5 sm:px-6 backdrop-blur-xl shadow-[0_8px_30px_-5px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] ring-1 ring-slate-900/5"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-transform duration-200 active:scale-95 shrink-0"
          >
            <AismaLogo size="sm" />
          </a>

          {/* Desktop iOS Segmented Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[12.5px] xl:text-[13px] font-medium text-slate-600 bg-slate-100/60 p-1 rounded-full border border-white/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-slate-900 hover:bg-white/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-95 text-slate-600 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section: Status Indicator & CTA (Book a Meeting) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Live Client Status Pill */}
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-semibold text-emerald-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11.5px] tracking-tight">Accepting Q4 Clients</span>
            </div>

            {/* iOS Dynamic Glass Primary CTA - Book a Meeting */}
            <a
              href="#book-call"
              className="group relative flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right px-4 xl:px-4.5 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer overflow-hidden border border-white/20 whitespace-nowrap"
            >
              <span>Book a Meeting</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Compact CTA & Menu Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="#book-call"
              className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm active:scale-95 transition-transform whitespace-nowrap"
            >
              Book a Meeting
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 hover:bg-slate-200/80 border border-white/70 text-slate-700 transition-all duration-200 active:scale-90"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile iOS Floating Glass Card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="mt-2.5 overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-3.5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-slate-900/[0.06] lg:hidden"
            >
              {/* Live status badge inside mobile menu */}
              <div className="mb-2 flex items-center justify-between rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/20 px-3.5 py-2">
                <span className="text-xs font-semibold text-emerald-800 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Accepting Q4 Clients
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  Live
                </span>
              </div>

              {/* iOS List Navigation Items */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100/80 active:bg-slate-200/70 active:scale-[0.98]"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                ))}
              </div>

              {/* Mobile CTA Button - Book a Meeting */}
              <div className="mt-3 pt-2 border-t border-slate-100">
                <a
                  href="#book-call"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:scale-95 transition-all"
                >
                  <Sparkles className="h-4 w-4 text-blue-200" />
                  <span>Book a Meeting</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
