"use client";

import { useState } from "react";
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
  Send
} from "lucide-react";
import { FAQ_DATA, FaqCategory } from "@/data/faqData";

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
  { key: "all", label: "All Questions" },
  { key: "linkedin", label: "LinkedIn FAQs", icon: LinkedInIcon },
  { key: "instagram", label: "Instagram FAQs", icon: InstagramIcon },
  { key: "email", label: "Cold Email FAQs", icon: Mail },
  { key: "web", label: "Web Development FAQs", icon: Globe },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const [openId, setOpenId] = useState<string | null>("li-faq-1");

  const filteredFaqs = FAQ_DATA.items.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

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
      className="relative py-20 sm:py-32 bg-[#fafbfd] border-t border-slate-200/70 overflow-hidden selection:bg-blue-500/20"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-4 py-1.5 text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-4 shadow-2xs backdrop-blur-sm">
            <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
            <span>Official Agency FAQs • {FAQ_DATA.items.length} Direct Answers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-medium">
            {FAQ_DATA.subheadline}
          </p>

          {/* Interactive 3-Tab Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-white/95 rounded-2xl border border-slate-200/90 shadow-2xs backdrop-blur-md">
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
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  {TabIcon && <TabIcon className="w-3.5 h-3.5 shrink-0" />}
                  <span>{tab.label}</span>
                  <span
                    className={`inline-flex items-center justify-center px-1.5 py-0.5 text-[10.5px] font-mono rounded-md ${
                      isActive
                        ? "bg-slate-800 text-slate-200"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const displayIndex = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={faq.id}
                className={`group rounded-2xl sm:rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-500/40 shadow-[0_8px_30px_-6px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/10"
                    : "bg-white/95 border-slate-200/80 hover:border-slate-300 hover:shadow-2xs"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-4.5 sm:p-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 pr-3 min-w-0">
                    {/* Index Badge */}
                    <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                      <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/60">
                        {displayIndex}
                      </span>
                    </div>

                    <div className="min-w-0">
                      {/* Category Label Pill */}
                      <span className="inline-block text-[10.5px] font-mono font-bold uppercase tracking-wider text-blue-600/90 mb-1">
                        {faq.categoryLabel}
                      </span>
                      {/* Question Text */}
                      <h3 className={`text-sm sm:text-base lg:text-lg font-bold transition-colors leading-snug ${
                        isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Morphing Toggle Icon */}
                  <div
                    className={`shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 ml-2 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-45 shadow-sm shadow-blue-600/30"
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 border border-slate-200/60"
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
                      <div className="px-4.5 sm:px-6 pb-5 sm:pb-6 pt-1">
                        <div className="h-px w-full bg-slate-100 mb-4" />

                        {/* Answer paragraph */}
                        <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </p>

                        {/* Key takeaway highlight box */}
                        <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-blue-50/70 border border-blue-100 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>
                            <strong className="text-blue-700 font-bold">Key takeaway:</strong>{" "}
                            {faq.keyTakeaway}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Box */}
        <div className="mt-12 sm:mt-16 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
              <Zap className="w-6 h-6 text-blue-600" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Have a specific question about your market or audience?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Speak directly with Ahmad Bilal. No generic sales pitches, straight strategic advice.
              </p>
            </div>
          </div>

          <a
            href="#book-call"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 group cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
}
