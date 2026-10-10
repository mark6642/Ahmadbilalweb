import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Multi-Channel B2B Outreach & Appointment Setting | AhmadBilal AI",
  description:
    "End-to-end cold email and LinkedIn outreach systems that consistently book 15 to 25 qualified sales meetings directly into your calendar.",
};

export default function B2bOutreachPage() {
  return (
    <ServicePageLayout
      badge="Cold Outreach & Appointment Setting"
      metricBadge="15–25 Qualified Sales Calls / Month Guaranteed"
      headline="Predictable B2B Sales Meetings Booked Straight Into Your Executive Calendar."
      subheadline="We design, build, and operate automated multi-channel cold email and LinkedIn acquisition pipelines. You stop worrying about prospecting and focus solely on closing deals."
      problems={[
        {
          title: "The Inbound 'Feast-or-Famine' Revenue Rollercoaster",
          description:
            "Relying entirely on referrals or word-of-mouth creates volatile months where revenue swings wildly and cash flow forecasting becomes impossible.",
          impact: "Constant operational anxiety and inability to hire or invest with confidence.",
        },
        {
          title: "Generic Cold Emails Land in Spam or Get Ignored",
          description:
            "Sending cookie-cutter templates from your primary business domain burns domain reputation and triggers immediate spam placement by Outlook and Gmail.",
          impact: "Zero replies, flagged brand reputation, and complete waste of outbound efforts.",
        },
        {
          title: "Hiring In-House SDRs Costs $80k+ With High Churn",
          description:
            "Recruiting, training, managing, and equipping a full-time Sales Development Representative takes 3 to 6 months with an unpredictable success rate.",
          impact: "Heavy upfront overhead, high churn rate, and lost pipeline momentum.",
        },
      ]}
      deliverables={[
        {
          title: "Secondary Inboxing Infrastructure & Domain Isolation",
          description:
            "Setup of 5 to 10 secondary domains with SPF, DKIM, DMARC, custom tracking domains, and automated gradual warmup protocols to ensure 98%+ inbox placement.",
          tag: "Deliverability",
        },
        {
          title: "High-Converting Persuasive Copywriting & Offer Engineering",
          description:
            "Conversion-tested, pain-oriented 3-to-4 step cold email and LinkedIn message sequences crafted specifically to provoke curiosity and high-intent responses.",
          tag: "Messaging",
        },
        {
          title: "LinkedIn Executive Profile Social Selling Sequence",
          description:
            "Synced LinkedIn connection requests, voice notes, and contextual direct messages coordinated alongside cold email touches for maximum multi-touch impact.",
          tag: "Multi-Channel",
        },
        {
          title: "Continuous A/B Variant Testing & Angles Iteration",
          description:
            "Rigorous split-testing of subject lines, opening hooks, case study proofs, and call-to-actions to systematically double reply rates over time.",
          tag: "Optimization",
        },
        {
          title: "Dedicated Inbox Management & Lead Qualification",
          description:
            "Our team monitors every inbound reply in real time, handles objections, weeds out tire-kickers, and schedules qualified buyers onto your calendar.",
          tag: "Appointment Setting",
        },
        {
          title: "Live KPI Dashboard & Weekly Pipeline Reviews",
          description:
            "Transparent real-time visibility into emails sent, open rates, positive response rates, meetings booked, and qualified pipeline value.",
          tag: "Reporting",
        },
      ]}
      roadmap={[
        {
          step: "Phase 01",
          title: "Technical Infrastructure & DNS Warmup",
          duration: "Days 1 – 5",
          description:
            "We purchase secondary domains, configure authentication records, and initiate algorithmic mailbox warmup routines to protect your primary domain.",
          points: [
            "Purchase and DNS provisioning of 5+ dedicated outreach domains",
            "Full SPF, DKIM, DMARC, and MX record validation",
            "Initiation of automated AI-driven peer mailbox warmup",
          ],
        },
        {
          step: "Phase 02",
          title: "Offer Crafting & Campaign Blueprint",
          duration: "Days 6 – 10",
          description:
            "We write your personalized email and LinkedIn sequences, build target contact lists, and set up dynamic personalization merge tags.",
          points: [
            "Development of 3 distinct messaging angles & value propositions",
            "Prospect list curation matching verified buyer criteria",
            "Client review and formal approval of outreach scripts",
          ],
        },
        {
          step: "Phase 03",
          title: "Launch, Active Booking & Optimization",
          duration: "Days 11 – 30+",
          description:
            "We begin sending campaign batches, actively triage and manage incoming replies, handle prospect queries, and place booked meetings on your calendar.",
          points: [
            "Staggered volume ramp-up across all warmed mailboxes",
            "Real-time objection handling and calendar link routing",
            "Weekly performance optimization and angle refinement",
          ],
        },
      ]}
      qualification={{
        forWhom: [
          "B2B service companies, agencies, and SaaS founders with a customer lifetime value (LTV) of $3,000+.",
          "Companies with a proven offer and existing case studies that want to scale outbound predictably.",
          "Founders and executives who have closing capacity but lack an automated meeting generation engine.",
          "Teams looking for a turnkey outbound partner instead of managing internal SDR turnover.",
        ],
        notForWhom: [
          "Brand new startups without proof of concept, case studies, or validated offers.",
          "Low-margin commodity businesses where average deal sizes are below $1,000.",
          "Companies unable to attend or follow up promptly with booked discovery calls.",
        ],
      }}
      finalCta={{
        headline: "Fill Your Sales Pipeline with Qualified Decision-Makers.",
        subheadline:
          "Book an outbound strategy call to see the exact messaging angles and technical infrastructure we will deploy to book 15 to 25 calls a month for your business.",
        primaryButton: "Book an Outbound Strategy Call",
        secondaryButton: "Explore Other Services",
      }}
    />
  );
}
