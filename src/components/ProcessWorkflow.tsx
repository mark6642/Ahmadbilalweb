"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Rocket, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Zap, 
  ChevronRight 
} from "lucide-react";

export default function ProcessWorkflow() {
  const steps = [
    {
      step: "01",
      timeframe: "Days 1 – 3",
      icon: Search,
      title: "Discovery & Strategy Blueprint",
      description:
        "We audit your current offers, target market, and competitor dynamics to architect high-converting technical specs and verified ICP buyer matrices.",
      highlights: [
        "In-depth Offer & Competitor Audit",
        "High-Ticket ICP Data Enrichment",
        "Technical Roadmap & Sprint Milestones",
      ],
      deliverable: "Custom Go-To-Market Blueprint + ICP Matrix",
      badgeClass: "bg-blue-50/90 text-blue-700 border-blue-200/80",
      iconClass: "bg-blue-600 text-white shadow-blue-600/30",
      glowClass: "from-blue-600/20",
      hoverBorder: "hover:border-blue-300",
      tagColor: "text-blue-600",
    },
    {
      step: "02",
      timeframe: "Days 4 – 10",
      icon: Rocket,
      title: "Full-Stack Build & Engine Launch",
      description:
        "Our team codes your ultra-fast Next.js platform, configures multi-inbox domain warmup for 100% deliverability, and hooks up automated acquisition pipelines.",
      highlights: [
        "Production-Grade Next.js Platform",
        "Multi-Inbox Domain Infrastructure",
        "Multichannel Automated Outreach Loops",
      ],
      deliverable: "Live Production Platform + Automated Lead Funnels",
      badgeClass: "bg-indigo-50/90 text-indigo-700 border-indigo-200/80",
      iconClass: "bg-indigo-600 text-white shadow-indigo-600/30",
      glowClass: "from-indigo-600/20",
      hoverBorder: "hover:border-indigo-300",
      tagColor: "text-indigo-600",
    },
    {
      step: "03",
      timeframe: "Days 11 – 30+",
      icon: BarChart3,
      title: "Live Deal Flow & Autonomous Scaling",
      description:
        "Campaigns go live and verified decision-makers book calls directly into your calendar. Algorithmic loops test creative angles to aggressively scale pipeline ROI.",
      highlights: [
        "Pre-Qualified Meetings Synced to Calendar",
        "Algorithmic Ad & Copy Testing Loops",
        "Weekly Transparent Growth & KPI Dashboard",
      ],
      deliverable: "Predictable Sales Pipeline + Real-Time Dashboard",
      badgeClass: "bg-purple-50/90 text-purple-700 border-purple-200/80",
      iconClass: "bg-purple-600 text-white shadow-purple-600/30",
      glowClass: "from-purple-600/20",
      hoverBorder: "hover:border-purple-300",
      tagColor: "text-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 14 },
    },
  };

  return (
    <section 
      id="process" 
      className="relative pt-6 sm:pt-8 lg:pt-10 pb-20 lg:pb-28 bg-[#f8fafc] overflow-hidden selection:bg-blue-500/20"
    >
      <div id="how-it-works" className="absolute -top-24" />
      {/* Background Ornaments (matching Hero & ServicesBento) */}
      <div className="absolute top-[5%] right-[-5%] w-[35vw] h-[35vw] bg-blue-400/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[35vw] h-[35vw] bg-purple-400/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 lg:mb-14"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-4 lg:mb-5 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Execution Roadmap</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] lg:leading-[1.1] mb-4 lg:mb-6">
            From Zero to Scale in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              14 Days
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-xl lg:max-w-2xl text-slate-600 text-sm sm:text-lg leading-relaxed font-medium">
            No endless months of onboarding. We work in transparent, high-velocity sprints with clear weekly deliverables to get your client acquisition flying fast.
          </p>
        </motion.div>

        {/* Desktop Trajectory Connector Line */}
        <div className="relative">
          <div 
            className="hidden lg:block absolute top-[5.25rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 -z-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-40 blur-[1px]" />
          </div>

          {/* 3 Step Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10"
          >
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className={`group relative flex flex-col justify-between p-6 sm:p-8 lg:p-9 rounded-[1.75rem] bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_48px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden ${item.hoverBorder}`}
                >
                  {/* Internal Glow Gradient on hover */}
                  <div
                    className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${item.glowClass} to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700`}
                  />

                  {/* Top content */}
                  <div>
                    {/* Top Row: Icon + Step & Timeframe */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl shadow-md ${item.iconClass} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100/80 border border-slate-200/80 px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {item.timeframe}
                        </span>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-mono font-bold tracking-wider ${item.badgeClass}`}
                        >
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2.5 pt-4 pb-6 border-t border-slate-100">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${item.tagColor}`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Deliverable Box */}
                  <div className="mt-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition-all duration-300 group-hover:bg-blue-50/30 group-hover:border-blue-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1 text-slate-500 group-hover:text-blue-700 transition-colors">
                      <Zap className="h-3.5 w-3.5 text-amber-500" />
                      <span>Key Deliverable</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item.deliverable}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Banner / Callout linking to Strategy Call */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-[1.75rem] bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-purple-50/90 border border-blue-200/60 shadow-sm"
        >
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Ready to accelerate your revenue pipeline?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Reserve your 14-day execution slot and start seeing pre-qualified meetings on your calendar.
              </p>
            </div>
          </div>

          <a
            href="#book-call"
            className="btn-primary-glow btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
