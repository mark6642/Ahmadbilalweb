"use client";

import { 
  Globe, 
  MousePointerClick, 
  Megaphone, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesBento() {
  const services = [
    {
      number: "01",
      title: "Lead Generation",
      description:
        "Automated B2B client acquisition systems that identify verified decision-makers and book qualified discovery calls straight into your calendar.",
      icon: MousePointerClick,
      badgeClass: "bg-blue-50/80 text-blue-700 border-blue-200",
      iconClass: "bg-blue-600 text-white shadow-blue-600/30",
      glowClass: "from-blue-600/20",
      hoverBorder: "hover:border-blue-300",
      features: [
        "High-Ticket ICP Prospecting",
        "Multi-Channel Cold Email & LinkedIn",
        "100% Inbox Deliverability & Warmup",
        "30+ Qualified Meetings / Month",
      ],
    },
    {
      number: "02",
      title: "Digital Marketing",
      description:
        "ROI-focused paid ad campaigns and organic growth strategies across Meta, Google, and LinkedIn that turn attention into paying customers.",
      icon: Megaphone,
      badgeClass: "bg-indigo-50/80 text-indigo-700 border-indigo-200",
      iconClass: "bg-indigo-500 text-white shadow-indigo-500/30",
      glowClass: "from-indigo-500/20",
      hoverBorder: "hover:border-indigo-300",
      features: [
        "High-ROAS Meta & Google Ad Campaigns",
        "Viral Video Creatives & Copywriting",
        "Full-Funnel Audience Retargeting",
        "Predictable Customer Acquisition",
      ],
    },
    {
      number: "03",
      title: "Web Development",
      description:
        "High-performance, modern websites and SaaS platforms built with Next.js and React. Engineered for lightning-fast speeds and high conversion rates.",
      icon: Globe,
      badgeClass: "bg-purple-50/80 text-purple-700 border-purple-200",
      iconClass: "bg-purple-500 text-white shadow-purple-500/30",
      glowClass: "from-purple-500/20",
      hoverBorder: "hover:border-purple-300",
      features: [
        "Full-Stack Next.js & React Apps",
        "100/100 Core Web Vitals & Speed",
        "Mobile-First Responsive Design",
        "Custom SaaS & E-Commerce Portals",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
  };

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-[#f8fafc] overflow-hidden">
      
      {/* Background Ornaments (matching hero) */}
      <div className="absolute top-[10%] left-[-5%] w-[30vw] h-[30vw] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl lg:px-6 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 lg:mb-20 px-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-5 lg:mb-6 shadow-sm">
            <span className="text-blue-500">✨</span>
            Our Core Services
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] lg:leading-[1.1] mb-4 lg:mb-6">
            Engineered for <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Predictable Growth
            </span>
          </h2>
          <p className="max-w-xl lg:max-w-2xl text-slate-600 text-sm sm:text-lg leading-relaxed font-medium">
            Everything your business needs to build digital authority, acquire high-value clients, and scale revenue consistently.
          </p>
        </motion.div>

        {/* Cards Slider / Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-row lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-12 lg:pb-0 px-5 lg:px-0 scroll-pl-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={itemVariants}
                className={`w-[82vw] sm:w-[360px] lg:w-auto shrink-0 snap-start group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-[1.75rem] bg-white/90 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 overflow-hidden ${service.hoverBorder}`}
              >
                {/* Subtle Hover Gradient Glow inside card */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${service.glowClass} to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <div
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl shadow-md ${service.iconClass} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 lg:px-4 lg:py-1.5 text-[10px] lg:text-xs font-bold uppercase tracking-wider ${service.badgeClass}`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2.5 lg:mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 font-medium">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-3 pt-5 lg:pt-6 border-t border-slate-100/80">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 lg:gap-3 text-xs sm:text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-emerald-500 shrink-0" />
                        <span className="leading-tight mt-[1px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 lg:pt-8 mt-6 lg:mt-8 relative z-10">
                  <a
                    href="#book-call"
                    className="inline-flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    <span>Explore Service</span>
                    <div className="flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-slate-100 group-hover:bg-blue-100 group-hover:translate-x-2 transition-all duration-300">
                      <ArrowRight className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                    </div>
                  </a>
                </div>
              </motion.div>
            );
          })}
          
          {/* Spacer to allow full scroll of the last card on mobile */}
          <div className="w-2 lg:hidden shrink-0" aria-hidden="true" />
        </motion.div>

      </div>
    </section>
  );
}



