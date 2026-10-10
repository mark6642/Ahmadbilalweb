"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Layers, 
  ChevronRight,
  Sparkles,
  LucideIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export interface DeliverableCard {
  title: string;
  description: string;
  tag?: string;
  icon?: LucideIcon;
}

export interface RoadmapStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  points: string[];
}

export interface ServicePageProps {
  badge: string;
  headline: string;
  subheadline: string;
  metricBadge: string;
  problems: {
    title: string;
    description: string;
    impact: string;
  }[];
  deliverables: DeliverableCard[];
  roadmap: RoadmapStep[];
  qualification: {
    forWhom: string[];
    notForWhom: string[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export default function ServicePageLayout(props: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-700">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* =================================================================
            1. HERO SECTION
            ================================================================= */}
        <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/70">
          {/* Subtle Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-transparent pointer-events-none -z-10 blur-3xl" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <Link href="/#services" className="hover:text-blue-600 transition-colors">Services</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="text-slate-800 font-semibold">{props.badge}</span>
            </div>

            {/* Performance Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>{props.metricBadge}</span>
            </div>

            {/* Outcome-Driven H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              {props.headline}
            </h1>

            {/* Solution Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
              {props.subheadline}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/#book-call"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base transition-all active:scale-95"
              >
                <Layers className="h-4 w-4 text-slate-500" />
                <span>View Deliverables</span>
              </a>
            </div>

            {/* Trust Pill Bar */}
            <div className="pt-10 mt-10 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Strict Non-Disclosure Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Dedicated Slack/WhatsApp Channel</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Weekly KPI Performance Audits</span>
              </div>
            </div>

          </div>
        </section>

        {/* =================================================================
            2. THE PROBLEM / PAIN POINTS
            ================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-rose-600 font-bold mb-2">
                The Reality Check
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                The Cost of Running Sub-Optimal Systems
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Most businesses don&apos;t fail from lack of effort. They fail from relying on broken workflows and outdated playbooks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {props.problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-red-200/70 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-mono font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {prob.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {prob.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-red-100 text-xs font-semibold text-red-700 bg-red-50/50 p-2.5 rounded-lg">
                    <span className="font-bold">Business Impact:</span> {prob.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            3. SCOPE OF DELIVERABLES
            ================================================================= */}
        <section id="deliverables" className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold mb-2">
                Complete Scope
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Engineered Deliverables &amp; Management
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                No hand-waving or vague consulting hours. Here is the concrete technical and operational infrastructure we deploy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {props.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-white p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                        Module 0{idx + 1}
                      </span>
                      {item.tag && (
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            4. EXECUTION ROADMAP (3 STEPS)
            ================================================================= */}
        <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2">
                Execution Blueprint
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our 3-Phase Execution Roadmap
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                A predictable, repeatable process designed to get you from initial briefing to revenue-generating operational velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {props.roadmap.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 relative flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {step.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {step.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            5. QUALIFICATION MATRIX ("Who this is for" vs "Who this is not for")
            ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
                Mutual Fit Criteria
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Is This The Right Growth Partner For You?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                We protect our client track record by only taking on engagements where we are confident of delivering outsized ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* WHO THIS IS FOR */}
              <div className="rounded-2xl border-2 border-emerald-200/80 bg-emerald-50/20 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-950">
                      Who This Is For
                    </h3>
                    <p className="text-xs text-emerald-700">High-fit client profiles</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {props.qualification.forWhom.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHO THIS IS NOT FOR */}
              <div className="rounded-2xl border-2 border-rose-200/80 bg-rose-50/20 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-rose-950">
                      Who This Is Not For
                    </h3>
                    <p className="text-xs text-rose-700">We politely decline these requests</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {props.qualification.notForWhom.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            6. FINAL CTA SECTION
            ================================================================= */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-radial-[at_50%_0%] from-blue-600/15 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Discovery Schedule Open for Q4</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              {props.finalCta.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {props.finalCta.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#book-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-[0_12px_28px_rgba(37,99,235,0.4)] transition-all active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>{props.finalCta.primaryButton}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all active:scale-95"
              >
                <span>{props.finalCta.secondaryButton}</span>
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              No pushy sales calls • Receive a concrete strategic roadmap during the call • 100% confidential
            </p>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
