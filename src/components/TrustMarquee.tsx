"use client";

export default function TrustMarquee() {
  const tools = [
    { name: "Next.js 16", category: "Full-Stack Web" },
    { name: "OpenAI", category: "Generative AI" },
    { name: "Clay.com", category: "Data Enrichment" },
    { name: "Apollo.io", category: "B2B Lead Intelligence" },
    { name: "Anthropic Claude", category: "AI Reasoning" },
    { name: "Stripe", category: "Payments & SaaS" },
    { name: "Supabase", category: "Realtime Database" },
    { name: "Meta Ads", category: "Algorithmic Media" },
    { name: "HubSpot", category: "CRM Automation" },
    { name: "Tailwind CSS", category: "Modern Styling" },
  ];

  return (
    <div id="industries" className="w-full border-y border-slate-200/80 bg-slate-50/80 py-8 overflow-hidden relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 text-center mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold font-mono">
          Powered By Industry-Leading AI, Web & Lead Generation Infrastructure
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite scrolling ticker */}
        <div className="flex animate-marquee whitespace-nowrap gap-10 items-center">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-2.5 shadow-sm hover:border-violet-400 hover:shadow-md transition-all"
            >
              <span className="h-2 w-2 rounded-full bg-[#653897]" />
              <span className="font-bold text-sm text-slate-900">{tool.name}</span>
              <span className="text-xs text-slate-500 font-mono">• {tool.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
