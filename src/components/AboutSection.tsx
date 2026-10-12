"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Target, 
  ShieldCheck, 
  MessageSquareText, 
  Building2, 
  Briefcase, 
  Zap,
  Award
} from "lucide-react";
import { ABOUT_DATA } from "@/data/aboutData";

const WHY_CHOOSE_ICONS = [
  MessageSquareText,
  Target,
  Award,
  ShieldCheck,
];

const CLIENT_ICONS = [
  Briefcase,
  Building2,
  Users,
  Zap,
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-32 bg-white overflow-hidden selection:bg-violet-500/20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-[#653897]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14 lg:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50/80 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#653897] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#653897]" />
            <span>{ABOUT_DATA.title} • {ABOUT_DATA.agencyFullName} ({ABOUT_DATA.agencyName})</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] lg:leading-[1.1] mb-5 max-w-4xl">
            Helping Businesses Find the Right Leads Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#653897] via-violet-600 to-[#431D70]">
              Human-Led Outreach
            </span>
          </h2>

          {/* Intro Description */}
          <p className="max-w-3xl text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            {ABOUT_DATA.introDescription[0]}
          </p>
        </motion.div>

        {/* ========================================================
            CORE PHILOSOPHY CARD
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-7 sm:p-10 lg:p-12 mb-16 lg:mb-24 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#653897]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-violet-300 bg-white/10 px-3 py-1 rounded-full mb-3 border border-white/15">
                Our Core Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                {ABOUT_DATA.philosophy.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {ABOUT_DATA.introDescription[1]}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {ABOUT_DATA.philosophy.description.map((para, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 bg-white/[0.07] backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            WHY CHOOSE AISMA (4 VALUE PROPOSITIONS)
            ======================================================== */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-10 lg:mb-14">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Forward-Thinking Businesses Choose AISMA
            </h3>
            <p className="text-xs sm:text-base text-slate-500 mt-2 max-w-xl mx-auto font-normal">
              Built on intentional communication, verified data, and direct partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {ABOUT_DATA.whyChooseUs.map((item, idx) => {
              const Icon = WHY_CHOOSE_ICONS[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-violet-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-violet-50 text-[#653897] flex items-center justify-center mb-5 group-hover:bg-[#653897] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#653897] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#653897]">
                    <span>Guaranteed Standard</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            WHO WE WORK WITH (CLIENT PERSONAS)
            ======================================================== */}
        <div className="mb-16 lg:mb-20 rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#653897] bg-violet-50 border border-violet-200 px-3 py-1 rounded-full mb-3 inline-block">
                Target Fit
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Who We Work With
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {ABOUT_DATA.whoWeWorkWith.description[0]}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {ABOUT_DATA.whoWeWorkWith.description[1]}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ABOUT_DATA.whoWeWorkWith.idealClients.map((client, cIdx) => {
                const ClientIcon = CLIENT_ICONS[cIdx % CLIENT_ICONS.length];
                return (
                  <div 
                    key={cIdx}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-violet-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-50 text-[#653897] flex items-center justify-center shrink-0">
                      <ClientIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {client}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM INTRODUCTION CALL CTA
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-violet-50 via-purple-50/60 to-violet-50 border border-violet-200/80 shadow-sm"
        >
          <div className="text-center sm:text-left max-w-xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#653897] bg-white/80 border border-violet-200 px-3 py-1 rounded-full mb-2.5">
              {ABOUT_DATA.cta.badge}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-1.5">
              {ABOUT_DATA.cta.headline}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {ABOUT_DATA.cta.subheadline}
            </p>
          </div>

          <a
            href="#book-call"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-[#653897] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{ABOUT_DATA.cta.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
