"use client";

import { ArrowRight, Mail, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";

function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.55-.7 1.55-1.55a1.55 1.55 0 0 0-3.1 0c0 .85.69 1.55 1.55 1.55m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function ServicesBento() {
  const services = [
    {
      pillar: "Pillar 01",
      title: "LinkedIn Engine",
      tagline: "Connect with Verified B2B Decision-Makers",
      description:
        "Personalized, human-led LinkedIn messaging systems that bypass gatekeepers, start meaningful high-ticket conversations, and book discovery meetings.",
      icon: LinkedInIcon,
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
      iconClass: "bg-[#0077b5] text-white shadow-blue-600/30",
      glowClass: "from-blue-600/20",
      hoverBorder: "hover:border-blue-300",
      subServiceTags: [
        "Personalized Outreach",
        "Decision-Maker Targeting",
        "InMail Campaigns",
        "Profile Authority"
      ],
      features: [
        "100% Bespoke, Non-Template Messaging",
        "Direct Outreach to Founders, CEOs & VPs",
        "Profile Authority & Social Proof Optimization",
        "20–40+ Qualified Calendar Meetings / Month",
      ],
      ctaText: "Explore LinkedIn Engine",
      href: "/services/linkedin-outreach",
    },
    {
      pillar: "Pillar 02",
      title: "Instagram Engine",
      tagline: "Build Organic Influence & High-Converting DM Funnels",
      description:
        "Human-driven organic engagement and targeted DM outreach funnels designed to turn followers, prospects, and creators into active paying clients.",
      icon: InstagramIcon,
      badgeClass: "bg-pink-50 text-pink-700 border-pink-200",
      iconClass: "bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white shadow-pink-600/30",
      glowClass: "from-pink-500/20",
      hoverBorder: "hover:border-pink-300",
      subServiceTags: [
        "Organic DM Outreach",
        "Audience Nurturing",
        "Creator & B2C Funnels",
        "Campaign Tracking"
      ],
      features: [
        "Relationship-First Conversions (Zero Bots)",
        "Targeted ICP Audience & Creator Profiling",
        "Custom Brand Voice & Tone Alignment",
        "Consistent Pipeline for B2C & High-Ticket Offers",
      ],
      ctaText: "Explore Instagram Engine",
      href: "/services/instagram-outreach-lead-generation",
    },
    {
      pillar: "Pillar 03",
      title: "Cold Email Engine",
      tagline: "Predictable Pipeline with 99% Deliverability",
      description:
        "End-to-end technical email infrastructure with SPF/DKIM/DMARC protocols and human-crafted copywriting that consistently lands in the primary inbox.",
      icon: Mail,
      badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconClass: "bg-indigo-600 text-white shadow-indigo-600/30",
      glowClass: "from-indigo-600/20",
      hoverBorder: "hover:border-indigo-300",
      subServiceTags: [
        "Technical Warmup & Shield",
        "ICP List Verification",
        "A/B Copy Testing",
        "Multi-Touch Sequences"
      ],
      features: [
        "99%+ Primary Inbox Placement Guaranteed",
        "Triple-Verified B2B Contact Databases",
        "Hyper-Personalized Multi-Touch Follow-Ups",
        "Predictable Flow of Sales-Ready Discovery Calls",
      ],
      ctaText: "Explore Cold Email Engine",
      href: "/services/email-outreach",
    },
    {
      pillar: "Pillar 04",
      title: "Web Development",
      tagline: "High-Performance Next.js Web Platforms & Funnels",
      description:
        "Sub-second, conversion-engineered digital storefronts built with modern Next.js architecture that turn high-intent visitors into booked clients.",
      icon: Globe,
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconClass: "bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-emerald-600/30",
      glowClass: "from-emerald-500/20",
      hoverBorder: "hover:border-emerald-300",
      subServiceTags: [
        "Next.js Architecture",
        "Sub-1.0s Speed",
        "B2B Conversion UX",
        "Custom Funnels"
      ],
      features: [
        "Sub-1.0s Loading & 95+ Core Web Vitals",
        "Engineered for High-Ticket B2B Conversion",
        "Pixel-Perfect Mobile & Executive UX",
        "Seamless Automated CRM & Lead Routing",
      ],
      ctaText: "Explore Web Development",
      href: "/services/web-development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60 } },
  };

  return (
    <section id="services" className="relative py-16 lg:py-28 bg-slate-50 overflow-hidden">
      {/* Single soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl lg:px-6 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 lg:mb-14 px-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            4 Core Growth &amp; Conversion Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Next-Gen Architectures Engineered to <br className="hidden sm:inline" />
            <span className="text-blue-600">Turn Cold Attention Into Paying Clients</span>
          </h2>
          <p className="max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed">
            Combining sub-second, conversion-optimized web platforms with human-led LinkedIn, Instagram, and cold email outreach systems to flood your pipeline with qualified buyers.
          </p>
        </motion.div>

        {/* Compact Cards: swipe on mobile, grid on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-6 md:pb-0 px-5 lg:px-0 scroll-pl-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.pillar}
                href={service.href}
                variants={itemVariants}
                className={`w-[78vw] sm:w-[300px] md:w-auto shrink-0 snap-start group relative flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${service.hoverBorder}`}
              >
                {/* Accent line on top, grows on hover */}
                <span
                  className={`absolute top-0 left-0 h-[3px] w-10 group-hover:w-full transition-all duration-500 ${service.iconClass.split(" shadow")[0]}`}
                />

                {/* Icon + index */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-md ${service.iconClass} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-slate-400 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title & tagline */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-2 line-clamp-2">
                  {service.tagline}
                </p>
                <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-3 mb-4">
                  {service.description}
                </p>

                {/* Capability tags (compact) */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.subServiceTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span>{service.ctaText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
          <div className="w-2 md:hidden shrink-0" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
