"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronRight, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AismaLogo from "./AismaLogo";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Industries", href: "/industries", hasDropdown: true },
  { name: "How It Works", href: "/#process" },
  { name: "About Us", href: "/#about" },
  { name: "Reviews", href: "/#reviews" },
];

const industryCategories = [
  { name: "Tech & AI", desc: "SaaS, AI Tools, IT Services" },
  { name: "Corporate & Finance", desc: "Wealth, Real Estate, Consulting" },
  { name: "Industrial & Logistics", desc: "Manufacturing, Supply Chain" },
  { name: "Creative & Agency", desc: "Agencies, Media & Design" },
  { name: "Consumer & Lifestyle", desc: "Healthcare, Retail & Brands" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

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
            href="/"
            className="flex items-center gap-2 group transition-transform duration-200 active:scale-95 shrink-0"
          >
            <AismaLogo size="sm" />
          </a>

          {/* Desktop iOS Segmented Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[12.5px] xl:text-[13px] font-medium text-slate-600 bg-slate-100/60 p-1 rounded-full border border-white/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIndustriesDropdownOpen(true)}
                    onMouseLeave={() => setIndustriesDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-slate-900 hover:bg-white/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-95 text-slate-600 whitespace-nowrap inline-flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                          industriesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </a>

                    <AnimatePresence>
                      {industriesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-64"
                        >
                          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2.5 ring-1 ring-slate-900/5">
                            <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                              <span>Vertical Sectors</span>
                              <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.2 rounded font-mono">
                                44
                              </span>
                            </div>

                            <div className="space-y-0.5 mt-1">
                              {industryCategories.map((cat) => (
                                <a
                                  key={cat.name}
                                  href="/industries"
                                  className="flex flex-col px-2.5 py-1.5 rounded-xl hover:bg-indigo-50/70 transition-colors group"
                                >
                                  <span className="text-xs font-semibold text-slate-800 group-hover:text-indigo-600">
                                    {cat.name}
                                  </span>
                                  <span className="text-[10px] text-slate-500">
                                    {cat.desc}
                                  </span>
                                </a>
                              ))}
                            </div>

                            <div className="mt-2 pt-2 border-t border-slate-100">
                              <a
                                href="/industries"
                                className="flex items-center justify-between px-2.5 py-2 rounded-xl bg-slate-50 hover:bg-indigo-600 hover:text-white text-[11.5px] font-bold text-slate-700 transition-all group"
                              >
                                <span>Explore All 44 Verticals</span>
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-slate-900 hover:bg-white/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-95 text-slate-600 whitespace-nowrap"
                >
                  {link.name}
                </a>
              );
            })}
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
              href="/#book-call"
              className="group relative flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#653897] via-[#7c3aed] to-[#431D70] bg-[length:200%_auto] hover:bg-right px-4 xl:px-4.5 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(101,56,151,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer overflow-hidden border border-white/20 whitespace-nowrap"
            >
              <span>Book a Meeting</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Compact CTA & Menu Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="/#book-call"
              className="rounded-full bg-[#653897] hover:bg-[#532d7e] px-3 py-1.5 text-xs font-semibold text-white shadow-sm active:scale-95 transition-transform whitespace-nowrap"
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
                  href="/#book-call"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#653897] to-[#431D70] py-3 text-center text-sm font-semibold text-white shadow-[0_8px_20px_rgba(101,56,151,0.3)] active:scale-95 transition-all"
                >
                  <Sparkles className="h-4 w-4 text-purple-200" />
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
