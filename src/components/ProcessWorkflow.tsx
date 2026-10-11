"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Target,
  MessageSquare,
  Clock,
  CalendarCheck,
  TrendingUp,
  Check,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import { HOW_IT_WORKS_DATA } from "@/data/howItWorksData";

const STEP_ICONS = [
  Search,
  Target,
  MessageSquare,
  Clock,
  CalendarCheck,
  TrendingUp,
];

export default function ProcessWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = HOW_IT_WORKS_DATA.steps;
  const total = steps.length;
  const activeStep = steps[activeIndex];
  const ActiveIcon = STEP_ICONS[activeIndex];
  const isLast = activeIndex === total - 1;

  return (
    <section
      id="process"
      className="relative pt-12 sm:pt-16 lg:pt-24 pb-20 lg:pb-28 bg-slate-50 overflow-hidden"
    >
      <div id="how-it-works" className="absolute -top-24" />

      {/* Single soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-5 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Human-Led {total}-Step Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4 max-w-3xl">
            A Clear, Human-Led Process for{" "}
            <span className="text-blue-600">Finding the Right Prospects</span>
          </h2>

          <p className="max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed">
            {HOW_IT_WORKS_DATA.subheadline}
          </p>
        </motion.div>

        {/* Stepper + Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 lg:mb-20">
          {/* Stepper */}
          <nav
            aria-label="Process steps"
            className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar"
          >
            {steps.map((step, idx) => {
              const selected = idx === activeIndex;
              const done = idx < activeIndex;
              return (
                <button
                  key={step.stepId}
                  onClick={() => setActiveIndex(idx)}
                  aria-current={selected ? "step" : undefined}
                  className={`group shrink-0 flex items-center gap-3 text-left rounded-xl border px-3.5 py-3 transition-all duration-200 cursor-pointer ${
                    selected
                      ? "bg-white border-blue-200 shadow-md ring-1 ring-blue-500/10"
                      : "bg-transparent border-transparent hover:bg-white/70"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0 transition-colors ${
                      selected
                        ? "bg-blue-600 text-white"
                        : done
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-200/70 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    {done ? <Check className="w-4 h-4" /> : step.stepNumber}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span
                      className={`text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-colors ${
                        selected ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {step.badge}
                    </span>
                    <span className="hidden lg:block text-xs text-slate-500 truncate">
                      {step.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.stepId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.06)] p-6 sm:p-8 lg:p-10"
              >
                {/* Title row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
                    <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                      Step {activeStep.stepNumber} of {total}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                {/* Tagline + description */}
                <p className="text-base font-medium text-slate-800 mb-2">
                  &ldquo;{activeStep.tagline}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7">
                  {activeStep.description}
                </p>

                {/* Includes */}
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  What this step includes
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-7">
                  {activeStep.whatThisIncludes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Benefit */}
                <div className="flex items-start gap-3 rounded-2xl bg-blue-50/70 border border-blue-100 p-4 sm:p-5">
                  <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
                      Strategic value &amp; outcome
                    </p>
                    <p className="text-sm text-slate-800 leading-relaxed">
                      {activeStep.benefit}
                    </p>
                  </div>
                </div>

                {/* Footer nav */}
                <div className="flex items-center justify-between mt-7 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}
                    disabled={activeIndex === 0}
                    className="text-sm font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-0 disabled:pointer-events-none transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((p) => (isLast ? 0 : p + 1))
                    }
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors cursor-pointer"
                  >
                    {isLast ? "Start Over" : "Next Step"}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900 text-white shadow-xl"
        >
          <div className="absolute -top-1/2 -right-[10%] w-96 h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-300 bg-white/10 px-3 py-1 rounded-full mb-3 border border-white/10">
              <Sparkles className="w-3 h-3" />
              {HOW_IT_WORKS_DATA.cta.badge}
            </span>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              {HOW_IT_WORKS_DATA.cta.heading}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {HOW_IT_WORKS_DATA.cta.subtext}
            </p>
          </div>

          <a
            href="#book-call"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-lg hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>{HOW_IT_WORKS_DATA.cta.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
