"use client";

import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Quote
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "OmniFlow AI",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content:
        "AhmadBilal AI completely revamped our client acquisition. Within 3 weeks of deploying their automated outbound and Next.js platform, our calendar went from empty to 38 qualified enterprise demos every single month.",
      result: "+$340K New Pipeline",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "VP of Growth",
      company: "Stratum Cloud",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      content:
        "The speed and technical quality blew us away. They engineered our web infrastructure with 100/100 Core Web Vitals and scaled our paid campaigns to a consistent 5.4x ROAS without wasting ad spend.",
      result: "5.4x ROAS on Ads",
      rating: 5,
    },
    {
      name: "Tariq Malik",
      role: "Co-Founder",
      company: "Vektor Logistics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content:
        "Unlike typical agencies that promise the moon and disappear, their sprint model gave us weekly milestones and complete transparency. The automated system cuts our sales cycle in half.",
      result: "3.2x Faster Sales Cycle",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Marketing",
      company: "Lumina SaaS",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      content:
        "Our previous conversion rate was stagnant at 1.4%. After Ahmad's team redesigned our landing page and connected an automated email warmup engine, our conversion rate jumped straight to 4.9%.",
      result: "4.9% Landing Page Conv.",
      rating: 5,
    },
    {
      name: "Alex Rivera",
      role: "Managing Director",
      company: "Apex Capital",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content:
        "Extremely reliable and communicative team. They set up our cold outreach domains with 100% deliverability and built our client portal on time and within budget. Highly recommend their sprints.",
      result: "100% Inbox Deliverability",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "NextScale Digital",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      content:
        "The code cleanliness in their Next.js stack is top tier. They delivered a fully scalable web platform in under two weeks. If you want high-velocity engineering and predictable results, work with them.",
      result: "Live in 12 Days",
      rating: 5,
    },
  ];

  // Duplicating list to create infinite seamless loop
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section 
      id="reviews" 
      className="relative py-20 lg:py-28 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div id="testimonials" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        
        {/* Centered Clean Header */}
        <div className="flex flex-col items-center text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-700 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#653897]" />
            <span>Client Testimonials</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            What Founders Say About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#653897] via-violet-600 to-[#431D70]">
              Working With Us
            </span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
            Verified feedback and tangible outcomes from fast-growing businesses who scaled with our 14-day execution model.
          </p>

          {/* Clean Rating Bar */}
          <div className="inline-flex items-center gap-2.5 border border-slate-200 rounded-full px-5 py-2 bg-slate-50/70 text-xs font-semibold text-slate-700">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-slate-300">•</span>
            <span>50+ Verified Sprints Completed</span>
          </div>
        </div>

      </div>

      {/* Infinite Auto-Smooth Sliding Track with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left & Right Smooth Edge Fade Masks */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" 
          aria-hidden="true" 
        />

        {/* Silky Smooth 60fps Scrolling Track */}
        <div 
          className="flex animate-marquee hover:[animation-play-state:paused] gap-6 w-max cursor-default"
          style={{ animationDuration: "36s" }}
        >
          {infiniteTestimonials.map((item, idx) => (
            <div 
              key={idx}
              className="w-[340px] sm:w-[400px] shrink-0"
            >
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:border-violet-300/80 transition-all duration-300">
                
                <div>
                  {/* Stars + Result Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#653897] bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3 text-[#653897]" />
                      {item.result}
                    </span>
                  </div>

                  {/* Quote text */}
                  <div className="relative mb-6">
                    <Quote className="w-6 h-6 text-slate-100 absolute -top-1 -left-1 -z-0" />
                    <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-medium relative z-10 pt-1">
                      &ldquo;{item.content}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium leading-snug">
                        {item.role}, <span className="text-slate-700 font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  <div 
                    className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-50 border border-emerald-200"
                    title="Verified Client"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
