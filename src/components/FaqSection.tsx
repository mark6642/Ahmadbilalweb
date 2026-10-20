"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  ArrowRight,
  Zap, 
  Mail, 
  Globe, 
  Search,
  X,
  MessageCircle,
  Layers,
  ChevronRight
} from "lucide-react";
import { FAQ_DATA, FaqCategory, FaqItem } from "@/data/faqData";

type FilterKey = "all" | FaqCategory;

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.55-.7 1.55-1.55a1.55 1.55 0 0 0-3.1 0c0 .85.69 1.55 1.55 1.55m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const TABS: { key: FilterKey; label: string; icon?: React.ComponentType<{ className?: string }> }[] = [
  { key: "all", label: "All Questions", icon: Layers },
  { key: "linkedin", label: "LinkedIn", icon: LinkedInIcon },
  { key: "instagram", label: "Instagram", icon: InstagramIcon },
  { key: "email", label: "Cold Email", icon: Mail },
  { key: "web", label: "Web Dev", icon: Globe },
];

const CATEGORY_STYLES: Record<
  FaqCategory,
  {
    badgeBg: string;
    badgeText: string;
    borderHover: string;
    glowBg: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  linkedin: {
    badgeBg: "bg-blue-50/90 text-blue-700 border-blue-200/80",
    badgeText: "text-blue-700",
    borderHover: "hover:border-blue-300",
    glowBg: "rgba(37, 99, 235, 0.08)",
    icon: LinkedInIcon,
  },
  instagram: {
    badgeBg: "bg-pink-50/90 text-pink-700 border-pink-200/80",
    badgeText: "text-pink-700",
    borderHover: "hover:border-pink-300",
    glowBg: "rgba(219, 39, 119, 0.08)",
    icon: InstagramIcon,
  },
  email: {
    badgeBg: "bg-emerald-50/90 text-emerald-800 border-emerald-200/80",
    badgeText: "text-emerald-800",
    borderHover: "hover:border-emerald-300",
    glowBg: "rgba(5, 150, 105, 0.08)",
    icon: Mail,
  },
  web: {
    badgeBg: "bg-violet-50/90 text-[#653897] border-violet-200/80",
    badgeText: "text-[#653897]",
    borderHover: "hover:border-violet-300",
    glowBg: "rgba(101, 56, 151, 0.08)",
    icon: Globe,
  },
};

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openId, setOpenId] = useState<string | null>("li-faq-1");

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.items.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.keyTakeaway.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (cat: FilterKey) => {
    setActiveCategory(cat);
    const matching = FAQ_DATA.items.filter((i) => cat === "all" || i.category === cat);
    if (matching.length > 0 && !matching.some((m) => m.id === openId)) {
      setOpenId(matching[0].id);
    }
  };

  return (
    <section 
      id="faq" 
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-[#fbfaff] to-[#f8f9fe] border-t border-slate-200/70 overflow-hidden"
    >
      {/* Dynamic ambient gradients */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#653897]/8 to-violet-400/5 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-16 right-5 w-[420px] h-[420px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-50/90 px-4 py-1.5 text-xs font-mono font-bold text-[#653897] uppercase tracking-wider mb-5 shadow-xs backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#653897] animate-pulse" />
            <span>Curated Knowledge Base • {FAQ_DATA.items.length} Direct Answers</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#653897] via-violet-600 to-[#431D70]">
              Questions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal">
            Everything you need to know about our outreach systems, Next.js architecture, deliverability protocols, and expected outcomes.
          </p>

          {/* Search Bar & Instant Filter */}
          <div className="mt-7 w-full max-w-lg relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. Next.js, deliverability, guarantee, timeline)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#653897]/25 focus:border-[#653897] transition-all backdrop-blur-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="mt-2 text-left px-2 text-xs text-slate-500 font-medium">
                Found {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"} for &ldquo;{searchQuery}&rdquo;
              </div>
            )}
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-white/90 rounded-2xl border border-slate-200/80 shadow-xs backdrop-blur-md">
            {TABS.map((tab) => {
              const isActive = activeCategory === tab.key;
              const count = tab.key === "all" 
                ? FAQ_DATA.items.length 
                : FAQ_DATA.items.filter((f) => f.category === tab.key).length;
              const TabIcon = tab.icon;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleCategoryChange(tab.key)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#653897] text-white shadow-sm shadow-[#653897]/20 scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {TabIcon && <TabIcon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />}
                  <span>{tab.label}</span>
                  <span
                    className={`inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-mono rounded-md ${
                      isActive
                        ? "bg-white/20 text-white font-bold"
                        : "bg-slate-100 text-slate-500 font-medium"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              const style = CATEGORY_STYLES[faq.category];
              const CategoryIcon = style.icon;
              const displayIndex = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={faq.id}
                  className={`group rounded-2xl sm:rounded-3xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? "bg-white border-violet-500/40 shadow-[0_12px_32px_-8px_rgba(101,56,151,0.12)] ring-1 ring-violet-500/15"
                      : "bg-white/95 border-slate-200/80 hover:border-violet-300/80 hover:shadow-sm"
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => handleToggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 pr-3 min-w-0">
                      {/* Index Badge */}
                      <div className="flex items-center shrink-0 pt-0.5 sm:pt-0">
                        <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                          isOpen 
                            ? "bg-[#653897] text-white border-[#653897]" 
                            : "bg-slate-100/90 text-slate-500 border-slate-200/70 group-hover:border-violet-200 group-hover:text-[#653897]"
                        }`}>
                          {displayIndex}
                        </span>
                      </div>

                      <div className="min-w-0">
                        {/* Category Label Pill with Icon */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${style.badgeBg}`}>
                            <CategoryIcon className="w-2.5 h-2.5" />
                            {faq.categoryLabel}
                          </span>
                        </div>

                        {/* Question Text */}
                        <h3 className={`text-sm sm:text-base lg:text-lg font-bold transition-colors leading-snug ${
                          isOpen ? "text-[#653897]" : "text-slate-900 group-hover:text-[#653897]"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Morphing Toggle Icon Button */}
                    <div
                      className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-300 ml-2 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#653897] to-[#431D70] text-white rotate-45 shadow-sm shadow-[#653897]/30"
                          : "bg-slate-100 text-slate-500 group-hover:bg-violet-50 group-hover:text-[#653897] border border-slate-200/70"
                      }`}
                    >
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Animated Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1">
                          {/* Subtle purple gradient separator */}
                          <div className="h-px w-full bg-gradient-to-r from-violet-200/60 via-slate-200 to-transparent mb-4" />

                          {/* Answer text */}
                          <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {/* Key Takeaway Highlight Card */}
                          <div className="mt-4 flex items-start gap-3 rounded-2xl bg-gradient-to-r from-violet-50/90 via-purple-50/50 to-indigo-50/40 border border-violet-200/60 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-800 shadow-2xs">
                            <div className="shrink-0 w-6 h-6 rounded-lg bg-[#653897]/10 flex items-center justify-center text-[#653897] mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-[#653897]" />
                            </div>
                            <div className="min-w-0">
                              <span className="block font-bold text-[#653897] text-xs uppercase tracking-wider mb-0.5 font-mono">
                                Executive Takeaway
                              </span>
                              <span className="text-slate-700 font-medium">
                                {faq.keyTakeaway}
                              </span>
                            </div>
                          </div>

                          {/* Micro-CTA link */}
                          <div className="mt-3.5 flex items-center justify-end">
                            <a 
                              href="#book-call"
                              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#653897] hover:text-[#431D70] transition-colors group/link"
                            >
                              <span>Discuss this strategy for your business</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            /* Search empty state */
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-50 text-[#653897] mb-3">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                No questions found matching &ldquo;{searchQuery}&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                Try searching with different keywords like &quot;Next.js&quot;, &quot;deliverability&quot;, &quot;leads&quot;, or reach out directly.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
                >
                  Clear Search
                </button>
                <a
                  href="#book-call"
                  className="px-4 py-2 rounded-xl bg-[#653897] hover:bg-[#431D70] text-xs font-bold text-white transition-colors"
                >
                  Ask Ahmad Directly
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Bottom Strategy Callout Box */}
        <div className="mt-14 sm:mt-18 rounded-3xl border border-violet-200/80 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/40 p-6 sm:p-9 shadow-sm relative overflow-hidden">
          {/* Subtle glow circle */}
          <div 
            className="absolute -top-12 -right-12 w-48 h-48 bg-[#653897]/10 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 text-left">
              <div className="relative shrink-0 flex items-center justify-center w-13 h-13 rounded-2xl bg-gradient-to-br from-[#653897] to-[#431D70] text-white shadow-md shadow-[#653897]/25">
                <Zap className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                </span>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                    Ahmad Bilal is available
                  </span>
                  <span className="text-slate-400 text-xs">• 1-on-1 Strategic Consulting</span>
                </div>
                <h4 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
                  Have a specific question about your niche or offer?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Get direct answers tailored to your specific audience. Zero fluff, 100% transparent growth roadmap.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#book-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#653897] to-[#431D70] hover:from-[#542d80] hover:to-[#36165b] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold transition-all duration-200 shadow-md shadow-[#653897]/20 active:scale-95 group cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-violet-200 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
