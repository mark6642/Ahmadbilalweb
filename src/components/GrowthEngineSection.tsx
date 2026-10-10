"use client";

import Link from "next/link";
import { 
  Code2, 
  Target, 
  SendHorizontal, 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

interface GrowthCardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: {
    badge: string;
    iconBg: string;
    iconColor: string;
    glow: string;
    borderHover: string;
    pillBg: string;
  };
}

const GROWTH_ENGINES: GrowthCardItem[] = [
  {
    id: "web-development",
    badge: "< 1.0s Speed",
    title: "Conversion Web Development",
    description: "High-performance websites and web applications built to turn traffic into paying clients.",
    href: "/services/web-development",
    icon: Code2,
    accentColor: {
      badge: "bg-blue-50 text-blue-700 border-blue-200/80",
      iconBg: "bg-blue-50 group-hover:bg-blue-600",
      iconColor: "text-blue-600 group-hover:text-white",
      glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.18)]",
      borderHover: "hover:border-blue-300",
      pillBg: "bg-blue-500/10",
    },
  },
  {
    id: "lead-generation",
    badge: "99% Verified",
    title: "Targeted Lead Generation",
    description: "Hand-curated, zero-bounce lists of high-intent B2B decision-makers matching your exact ICP.",
    href: "/services/lead-generation",
    icon: Target,
    accentColor: {
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      iconBg: "bg-indigo-50 group-hover:bg-indigo-600",
      iconColor: "text-indigo-600 group-hover:text-white",
      glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.18)]",
      borderHover: "hover:border-indigo-300",
      pillBg: "bg-indigo-500/10",
    },
  },
  {
    id: "b2b-outreach",
    badge: "15-25 Calls/Mo",
    title: "Multi-Channel B2B Outreach",
    description: "Human-led cold email and LinkedIn sequences that reliably book qualified discovery meetings.",
    href: "/services/b2b-outreach",
    icon: SendHorizontal,
    accentColor: {
      badge: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
      iconBg: "bg-cyan-50 group-hover:bg-cyan-600",
      iconColor: "text-cyan-700 group-hover:text-white",
      glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.18)]",
      borderHover: "hover:border-cyan-300",
      pillBg: "bg-cyan-500/10",
    },
  },
  {
    id: "social-media-marketing",
    badge: "Organic Reach",
    title: "Thought Leadership & Marketing",
    description: "Strategic executive content and branding that transforms social presence into inbound trust.",
    href: "/services/social-media-marketing",
    icon: TrendingUp,
    accentColor: {
      badge: "bg-violet-50 text-violet-700 border-violet-200/80",
      iconBg: "bg-violet-50 group-hover:bg-violet-600",
      iconColor: "text-violet-600 group-hover:text-white",
      glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.18)]",
      borderHover: "hover:border-violet-300",
      pillBg: "bg-violet-500/10",
    },
  },
];

export default function GrowthEngineSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-white/70 border-b border-slate-200/70 overflow-hidden">
      {/* Background Decorative Mesh Tint */}
      <div className="absolute inset-0 bg-radial-[at_50%_0%] from-slate-100/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3 shadow-xs">
              <Zap className="h-3 w-3 text-blue-600 fill-blue-600" />
              <span>Dedicated Execution Tracks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Modular Growth Engines
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Select an individual acquisition channel or deploy an integrated full-stack growth program.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Click any card to explore deep-dive deliverables</span>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {GROWTH_ENGINES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className={`group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${item.accentColor.borderHover} ${item.accentColor.glow} shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:outline-hidden focus:ring-2 focus:ring-blue-500/40`}
                >
                  {/* Top Bar: Icon + Metric Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${item.accentColor.iconBg} ${item.accentColor.iconColor} shadow-xs`}>
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className={`inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.accentColor.badge}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug mb-2">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors duration-200">
                      Explore Track
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 group-hover:rotate-45">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
