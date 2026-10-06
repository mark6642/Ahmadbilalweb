"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Zap
} from "lucide-react";

type CategoryKey = "all" | "hunting" | "web" | "sprints" | "integrations";

interface FaqItem {
  id: string;
  category: CategoryKey;
  tag: string;
  q: string;
  a: string;
  takeaway: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "spam-prevention",
    category: "hunting",
    tag: "Deliverability Engine",
    q: "How does your AI B2B Client Hunting avoid landing in spam?",
    a: "We never spray-and-pray. We engineer isolated, secondary authenticated sending domains with custom SPF, DKIM, DMARC, and dedicated custom tracking domains. Every inbox completes an automated 21-day algorithmic warmup before launching. We verify direct work emails via Clay and Apollo, and use specialized LLMs to inject deep individual research into every email—ensuring 100% human-level personalization that hits primary inboxes.",
    takeaway: "Zero risk to your primary domain with 100% authenticated sender reputation.",
  },
  {
    id: "tech-stack",
    category: "web",
    tag: "Modern Architecture",
    q: "What tech stack do you use for your Web Development pillar?",
    a: "Our core production stack is Next.js 16 (App Router), TypeScript, and Tailwind CSS v4, backed by Supabase / PostgreSQL and Stripe for billing. On the AI layer, we integrate OpenAI, Anthropic Claude 3.5, and low-latency custom vector search agents to deliver real-time, responsive experiences with 98+ Core Web Vitals.",
    takeaway: "Sub-second load times and enterprise-grade code cleanliness.",
  },
  {
    id: "launch-speed",
    category: "sprints",
    tag: "14-Day Sprint",
    q: "How quickly can we launch our custom website and client hunting engine?",
    a: "Our signature sprint runs in 14 days from kickoff to live deployment. Days 1–3 are dedicated to audit, offer positioning, and ICP specifications. Days 4–10 are focused on coding your platform and configuring inbox infrastructure. By Days 11–14, we launch live outbound campaigns and sync initial qualified meetings directly to your calendar.",
    takeaway: "Zero fluff: complete deployment and live meetings in exactly 14 days.",
  },
  {
    id: "crm-integration",
    category: "integrations",
    tag: "Automated Data Flow",
    q: "Can you integrate the lead pipeline into our existing CRM like HubSpot or Salesforce?",
    a: "Yes, seamlessly. Every positive response and scheduled discovery call automatically enriches into your CRM (HubSpot, Salesforce, Pipedrive, or Notion). We capture company firmographics, verified contact emails, phone numbers, and full conversation history with zero manual copy-pasting.",
    takeaway: "Real-time, bi-directional sync with your current sales infrastructure.",
  },
  {
    id: "modular-services",
    category: "sprints",
    tag: "Modular Scope",
    q: "What if we only need one of the services (e.g. only Web Dev or only Client Hunting)?",
    a: "While our 3-pillar ecosystem delivers the strongest compounding growth, our services are completely modular. You can partner with us strictly for high-speed Next.js Web Development, dedicated B2B Client Hunting, or AI Marketing systems depending on where your current bottleneck lies.",
    takeaway: "Flexible sprint scopes tailored to your immediate business stage.",
  },
  {
    id: "founder-bandwidth",
    category: "sprints",
    tag: "Minimal Overhead",
    q: "How much time is required from our internal team during the sprint?",
    a: "Under 2 hours total. We conduct a focused 45-minute kickoff strategy session to capture your ICP specs, value proposition, and brand voice. From that point on, our team handles 100% of the engineering, domain warmup, copywriting, and pipeline architecture with clear async check-ins.",
    takeaway: "Complete technical execution with zero micromanagement needed.",
  },
  {
    id: "brand-protection",
    category: "hunting",
    tag: "Brand Protection",
    q: "What safeguards exist to protect our corporate domain reputation?",
    a: "We never initiate cold outbound from your primary corporate email domain. We purchase, configure, and authenticate look-alike domains dedicated exclusively to prospecting. We maintain strict sending velocity caps (under 35 emails/inbox/day) to safeguard domain health and guarantee pristine deliverability.",
    takeaway: "Total isolation for your primary domain and zero blacklist risk.",
  },
];

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Questions" },
  { key: "hunting", label: "Client Hunting & AI" },
  { key: "web", label: "Web Engineering" },
  { key: "sprints", label: "14-Day Sprints" },
  { key: "integrations", label: "Integrations & CRM" },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [openId, setOpenId] = useState<string | null>("spam-prevention");

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (cat: CategoryKey) => {
    setActiveCategory(cat);
    const matching = FAQ_DATA.filter((i) => cat === "all" || i.category === cat);
    if (matching.length > 0 && !matching.some((m) => m.id === openId)) {
      setOpenId(matching[0].id);
    }
  };

  return (
    <section 
      id="faq" 
      className="relative py-24 sm:py-32 bg-[#fafbfd] border-t border-slate-200/70 overflow-hidden"
    >
      {/* Subtle Background Glow Orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Elite Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-4 py-1.5 text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-4 shadow-2xs backdrop-blur-sm">
            <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
            <span>Clear Answers • Zero Guesswork</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['var(--font-space-grotesk)']">
            Frequently Asked <span className="gradient-text-ai">Questions</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Everything you need to know about our automated outbound pipelines, Next.js engineering sprints, and technical deliverability.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/90 rounded-2xl border border-slate-200/80 shadow-2xs backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              const count = cat.key === "all" 
                ? FAQ_DATA.length 
                : FAQ_DATA.filter((f) => f.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-mono rounded-md ${
                      isActive
                        ? "bg-slate-800 text-slate-300"
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

        {/* Elite Clean Accordion */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const displayIndex = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={faq.id}
                className={`group rounded-2xl sm:rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-500/40 shadow-[0_8px_30px_-6px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/10"
                    : "bg-white/95 border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 pr-3">
                    {/* Index + Category Badge */}
                    <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                      <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/60">
                        {displayIndex}
                      </span>
                    </div>

                    <div>
                      {/* Sub-tag badge */}
                      <span className="hidden sm:inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600/90 mb-1">
                        {faq.tag}
                      </span>
                      {/* Question */}
                      <h3 className={`text-base sm:text-lg font-bold font-['var(--font-space-grotesk)'] transition-colors ${
                        isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                  </div>

                  {/* Clean Elite Morphing Toggle Icon Button */}
                  <div
                    className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-45 shadow-sm shadow-blue-600/30"
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 border border-slate-200/60"
                    }`}
                  >
                    <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Animated Body Container */}
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
                      <div className="px-5 sm:px-6 pb-6 pt-1">
                        {/* Thin clean separator line */}
                        <div className="h-px w-full bg-slate-100 mb-4" />

                        {/* Answer text */}
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>

                        {/* Elite Key Takeaway Pill */}
                        <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-blue-50/70 border border-blue-100/90 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>
                            <strong className="text-blue-700 font-semibold">Key takeaway:</strong>{" "}
                            {faq.takeaway}
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

        {/* Elite Clean Bottom Help Card ("Still have questions?") */}
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
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['var(--font-space-grotesk)']">
                Have a unique project or custom requirement?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Speak directly with Ahmad Bilal. No sales reps, straight technical evaluation.
              </p>
            </div>
          </div>

          <a
            href="#book-call"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 group"
          >
            <span>Book a 15-Min Discovery Call</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
}
