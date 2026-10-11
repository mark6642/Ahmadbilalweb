"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Building2,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  X,
  Target,
  Layers,
} from "lucide-react";
import {
  INDUSTRIES_DATA,
  IndustryCategory,
  IndustryItem,
} from "@/data/industriesData";

const INITIAL_DISPLAY_LIMIT = 9;

export default function IndustriesSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<IndustryCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter industries based on category and search query
  const filteredIndustries = useMemo(() => {
    return INDUSTRIES_DATA.industries.filter((item: IndustryItem) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.targetFocus.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Determine displayed items (if search or non-All category is active, show all matches, otherwise limit until expanded)
  const isFilteringActive =
    searchQuery.trim().length > 0 || selectedCategory !== "All";
  const displayedIndustries =
    isFilteringActive || isExpanded
      ? filteredIndustries
      : filteredIndustries.slice(0, INITIAL_DISPLAY_LIMIT);

  return (
    <section
      id="industries"
      className="relative py-20 lg:py-32 bg-slate-50/70 border-t border-slate-200/60 overflow-hidden selection:bg-indigo-500/20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[5%] left-[-10%] w-[45vw] h-[45vw] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-indigo-700 mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{INDUSTRIES_DATA.title}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Specialized B2B Prospecting Across{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              44 Industry Verticals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            {INDUSTRIES_DATA.subheadline}
          </motion.p>
        </div>

        {/* ========================================================
            INTERACTIVE CONTROLS (SEARCH & CATEGORY FILTERS)
            ======================================================== */}
        <div className="max-w-4xl mx-auto mb-12 space-y-5">
          {/* Live Instant Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 44 industries (e.g., 'SaaS', 'Real Estate', 'Logistics', 'Healthcare', 'Fintech')..."
              className="w-full pl-12 pr-11 py-3.5 sm:py-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Clear search"
              >
                <div className="p-1 rounded-full hover:bg-slate-100">
                  <X className="h-4 w-4" />
                </div>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:justify-center">
            {INDUSTRIES_DATA.categories.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === "All"
                  ? INDUSTRIES_DATA.industries.length
                  : INDUSTRIES_DATA.industries.filter(
                      (ind) => ind.category === category
                    ).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 ring-1 ring-indigo-600"
                      : "bg-white/80 text-slate-600 border border-slate-200/80 hover:bg-white hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Results Summary */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
              Showing <strong>{displayedIndustries.length}</strong> of{" "}
              <strong>{filteredIndustries.length}</strong> matching verticals
              {searchQuery && (
                <span>
                  {" "}
                  for &ldquo;<strong>{searchQuery}</strong>&rdquo;
                </span>
              )}
            </span>

            {isFilteringActive && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-indigo-600 hover:text-indigo-700 font-semibold underline underline-offset-2"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            INDUSTRY CARDS GRID
            ======================================================== */}
        {filteredIndustries.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200/80 max-w-xl mx-auto shadow-sm">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              No matching industry found
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              We provide tailored prospect research for custom verticals beyond
              these 44 sectors as well.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Clear Search & View All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {displayedIndustries.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
                  className="group relative bg-white/95 rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(79,70,229,0.12)] hover:border-indigo-300/80 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Header & Badges */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-mono">
                        #{String(item.id).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                        <span className="text-[11px] text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full hidden sm:inline-block">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Industry Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2.5">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Target Focus Box & CTA */}
                  <div className="pt-4 border-t border-slate-100 space-y-3.5">
                    <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-200/60 group-hover:bg-indigo-50/40 group-hover:border-indigo-100 transition-colors">
                      <div className="flex items-start gap-2">
                        <Target className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                            Target Decision-Makers
                          </span>
                          <span className="text-xs font-medium text-slate-600 leading-snug">
                            {item.targetFocus}
                          </span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#booking"
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors group/btn pt-1"
                    >
                      <span>Discuss {item.tag} Outreach</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 text-slate-400 group-hover/btn:text-indigo-600 transition-all" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* ========================================================
            VIEW ALL / SHOW LESS TOGGLE
            ======================================================== */}
        {!isFilteringActive && filteredIndustries.length > INITIAL_DISPLAY_LIMIT && (
          <div className="text-center mb-16">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200 active:scale-95"
            >
              {isExpanded ? (
                <>
                  <span>Show Fewer Industries</span>
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                </>
              ) : (
                <>
                  <span>
                    Explore All {INDUSTRIES_DATA.industries.length} Industries
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </>
              )}
            </button>
          </div>
        )}

        {/* ========================================================
            5 OUTREACH PILLARS (HOW WE TARGET ANY INDUSTRY)
            ======================================================== */}
        <div className="mt-16 pt-16 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Cycle Execution</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How AISMA Adapts to Your Industry Verticals
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Every vertical requires tailored positioning, decision-maker
              mapping, and nuanced outreach strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700 mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            BOTTOM INDUSTRY CONSULTATION BANNER
            ======================================================== */}
        <div className="mt-12 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/80 border border-indigo-800/80 px-3 py-1 rounded-full mb-3">
                {INDUSTRIES_DATA.cta.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                {INDUSTRIES_DATA.cta.headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {INDUSTRIES_DATA.cta.subtext}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#booking"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-95"
              >
                <span>{INDUSTRIES_DATA.cta.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
