"use client";

import { useState } from "react";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Clock, 
  HelpCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  priceMonthly: number;
  priceQuarterly: number; // Discounted monthly equivalent
  billingNote: string;
  deliveryTime: string;
  features: PlanFeature[];
  ctaText: string;
  ctaHref: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    popular: false,
    tagline: "Essential infrastructure for emerging firms ready to test outbound & convert traffic.",
    priceMonthly: 1997,
    priceQuarterly: 1597,
    billingNote: "Billed monthly • Pause or cancel anytime",
    deliveryTime: "7-10 Days Sprint Delivery",
    ctaText: "Get Started with Starter",
    ctaHref: "#book-call",
    features: [
      { text: "High-Converting Next.js Landing Page", included: true },
      { text: "500 Verified B2B Decision-Maker Leads", included: true },
      { text: "2 Cold Outreach Domains & Warmup Setup", included: true },
      { text: "Cold Email Copywriting (2 Sequence Variations)", included: true },
      { text: "Core Web Vitals & Sub-1s Speed Optimization", included: true },
      { text: "Weekly Async Slack Progress Updates", included: true },
      { text: "Full LinkedIn Multi-Channel Outreach", included: false },
      { text: "Dedicated Appointment Setter / Inbox Management", included: false },
      { text: "Social Authority Content Engine", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth Engine",
    badge: "Most Popular",
    popular: true,
    tagline: "End-to-end client acquisition system engineered for scaling B2B agencies and SaaS.",
    priceMonthly: 3997,
    priceQuarterly: 3197,
    billingNote: "Billed monthly • 14-Day Delivery Sprint",
    deliveryTime: "14-Day Full Deployment",
    ctaText: "Deploy Growth Engine",
    ctaHref: "#book-call",
    features: [
      { text: "Full Multi-Page Next.js Web Platform", included: true, highlight: true },
      { text: "1,500 Triple-Verified ICP Decision-Maker Leads/Mo", included: true, highlight: true },
      { text: "5 Dedicated Secondary Domains + SPF/DKIM/DMARC", included: true },
      { text: "Multi-Channel Cold Email & LinkedIn Inboxing", included: true, highlight: true },
      { text: "15 to 25 Qualified Discovery Calls / Month Target", included: true, highlight: true },
      { text: "Dedicated Daily Inbox Management & Scheduling", included: true },
      { text: "Private Shared Slack / WhatsApp Channel", included: true },
      { text: "Weekly KPI Teardown & Conversion Optimization", included: true },
      { text: "Executive Social Authority Content Engine", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Scale",
    badge: "Full Dominance",
    popular: false,
    tagline: "Complete turnkey revenue infrastructure with dedicated engineering and SDR team.",
    priceMonthly: 7497,
    priceQuarterly: 5997,
    billingNote: "Custom scope • Flexible quarterly agreement",
    deliveryTime: "Continuous Dedicated Sprint",
    ctaText: "Schedule Executive Briefing",
    ctaHref: "#book-call",
    features: [
      { text: "Bespoke Web Platform, Client Portals & Webhooks", included: true },
      { text: "Unlimited High-Intent Lead Scraping & Waterfall Data", included: true, highlight: true },
      { text: "15+ Dedicated Mailboxes with AI Warmup Network", included: true },
      { text: "Multi-Channel Outbound (Email, LinkedIn & Calling Data)", included: true },
      { text: "35+ Guaranteed Qualified Discovery Meetings / Month", included: true, highlight: true },
      { text: "Executive Thought Leadership (16 Monthly Posts)", included: true, highlight: true },
      { text: "Dedicated Full-Time Account Strategist", included: true },
      { text: "CRM Pipeline Architecture (HubSpot/Salesforce Sync)", included: true },
      { text: "1-on-1 Weekly Revenue Growth Consultation Calls", included: true },
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/70 overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#653897]/10 via-indigo-400/10 to-purple-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* =========================================================
            HEADER & VALUE PROPOSITION
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/90 px-4 py-1.5 text-xs font-semibold text-[#653897] mb-5 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#653897]" />
            <span>Transparent, High-ROI Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Predictable Growth Plans. Zero Surprises.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transparent sprint pricing tailored for B2B firms. No hidden agency retainers, no long lock-in contracts, and 100% full asset ownership.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200/70 border border-slate-300/60 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Retainer
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("quarterly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                billingCycle === "quarterly"
                  ? "bg-[#653897] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Sprint Package</span>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                billingCycle === "quarterly" ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
            3-TIER PRICING CARDS GRID
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const currentPrice = billingCycle === "monthly" ? plan.priceMonthly : plan.priceQuarterly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-white border-2 border-[#653897] shadow-[0_20px_50px_-10px_rgba(101,56,151,0.2)] lg:-translate-y-2 z-20"
                    : "bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] z-10"
                } p-6 sm:p-8`}
              >
                {/* Popular Pill Floating on Top */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-[#653897] to-[#431D70] text-white shadow-md">
                      <Zap className="h-3 w-3 fill-white" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Card Top: Name, Tagline & Price */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                    {!plan.popular && plan.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Box */}
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                        ${currentPrice.toLocaleString()}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">
                        / month
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5 text-[#653897]" />
                      <span>{plan.deliveryTime}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {plan.billingNote}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-3">
                      Included In This Plan:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-3 text-xs sm:text-sm ${
                          feature.included
                            ? feature.highlight
                              ? "font-semibold text-slate-900"
                              : "text-slate-700 font-medium"
                            : "text-slate-400 line-through"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feature.included
                              ? feature.highlight
                                ? "bg-[#653897] text-white"
                                : "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="leading-tight">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={plan.ctaHref}
                    className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                      plan.popular
                        ? "bg-[#653897] hover:bg-[#532d7e] text-white shadow-[0_8px_20px_rgba(101,56,151,0.3)] hover:shadow-[0_12px_24px_rgba(101,56,151,0.4)]"
                        : "bg-slate-900 hover:bg-slate-800 text-white hover:shadow-md"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM TRUST GUARANTEES BAR
            ========================================================= */}
        <div className="mt-14 sm:mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 md:pb-0 md:pr-6">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-[#653897] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Zero Lock-In Contracts
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Month-to-month flexibility. Pause, scale up, or end the agreement whenever your internal capacity demands it.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-4 md:py-0 md:px-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  100% Intellectual Property
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every line of code, domain, email list, and CRM sequence belongs entirely to your firm from day one.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Need a Custom Enterprise Scope?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have complex multi-brand or custom API requirements?{" "}
                  <a href="#book-call" className="text-[#653897] font-semibold hover:underline">
                    Talk with our architects
                  </a>.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
