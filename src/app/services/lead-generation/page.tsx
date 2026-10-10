import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Targeted B2B Lead Generation | 99% Verified Decision Makers | AhmadBilal AI",
  description:
    "Zero-bounce, hand-curated prospect lists of verified C-suite and VP decision-makers tailored to your ideal customer profile.",
};

export default function LeadGenerationPage() {
  return (
    <ServicePageLayout
      badge="B2B Lead Generation"
      metricBadge="99% Data Accuracy • 0% Spam Bounce Guarantee"
      headline="Targeted B2B Prospect Data That Connects You Straight to Real Decision-Makers."
      subheadline="Stop burning your sales team's energy on generic info@ emails and outdated directories. We build proprietary, triple-verified lead lists of high-intent buyers ready for outbound activation."
      problems={[
        {
          title: "Scraped Databases Are 35%+ Obsolete",
          description:
            "Static subscription databases are plagued by outdated contact records, departed executives, and dead domains that trigger immediate spam filters.",
          impact: "Destroyed domain reputation and thousands wasted on unreachable contacts.",
        },
        {
          title: "Irrelevant Targeting Bleeds Sales Capital",
          description:
            "Reaching out to mid-level managers who have no signing authority or budget allocation turns your sales pipeline into an endless waiting room.",
          impact: "Lengthy sales cycles with zero closed-won deals at the finish line.",
        },
        {
          title: "Massive Hard Bounce Penalties From Email Providers",
          description:
            "Sending emails to unverified addresses pushes your bounce rate above 2%, triggering automatic domain blacklisting on Google Workspace and Outlook.",
          impact: "Legitimate client communication lands directly in the spam folder.",
        },
      ]}
      deliverables={[
        {
          title: "Precision ICP & Buyer Persona Matrix Calibration",
          description:
            "Deep alignment on company headcount, annual revenue, tech stack footprint, recent funding milestones, geographic density, and exact C-level titles.",
          tag: "Strategy",
        },
        {
          title: "Multi-Source Prospect Extraction & Enrichment",
          description:
            "Cross-referenced data pulls across LinkedIn Sales Navigator, corporate registers, Apollo, ZoomInfo, and bespoke web scrapers for maximum coverage.",
          tag: "Data Ingestion",
        },
        {
          title: "Triple-Layer Verification & Catch-All Filtering",
          description:
            "Every single email address is verified through SMTP handshakes and MX-record ping checks via MillionVerifier and NeverBounce to ensure <1% bounce rate.",
          tag: "Quality Control",
        },
        {
          title: "Verified Direct Dials & Mobile Phone Records",
          description:
            "Where cold calling is required, we enrich prospect profiles with verified direct desk phone numbers and mobile lines validated against carrier databases.",
          tag: "Multi-Channel",
        },
        {
          title: "Custom Trigger Events & Intent Signal Tagging",
          description:
            "Prospect lists tagged with active buying signals including recent job promotions, open hiring requisitions, tech changes, and corporate funding events.",
          tag: "Intent Signals",
        },
        {
          title: "Ready-to-Import CRM & Sequence Data Formatting",
          description:
            "Clean CSV/Sheets deliverables pre-mapped for instant 1-click import into HubSpot, Salesforce, Instantly, Smartlead, or Lemlist with zero manual formatting.",
          tag: "Integration",
        },
      ]}
      roadmap={[
        {
          step: "Phase 01",
          title: "ICP Calibration & Criteria Blueprint",
          duration: "Days 1 – 2",
          description:
            "We analyze your past closed-won deals, establish clear negative filters, and define the precise attributes of your highest-margin accounts.",
          points: [
            "Definition of primary and secondary decision-maker titles",
            "Exclusion criteria (competitors, low-margin geographies)",
            "Review and sign-off on 50-contact sample pilot list",
          ],
        },
        {
          step: "Phase 02",
          title: "Deep Scraping & Verification Sprints",
          duration: "Days 3 – 5",
          description:
            "Our data team runs algorithmic scrapers, executes programmatic waterfall enrichment, and conducts rigorous live verification protocols.",
          points: [
            "Waterfall enrichment across 4 top-tier data networks",
            "Catch-all email address filtering and elimination",
            "Verification of company active operational status",
          ],
        },
        {
          step: "Phase 03",
          title: "Quality Assurance & Batch Delivery",
          duration: "Days 6 – 7",
          description:
            "Manual spot-checking of every dataset by a senior analyst before formatting and uploading into your CRM or outreach platform.",
          points: [
            "Manual profile spot-check on LinkedIn",
            "CRM field mapping and deduplication against existing database",
            "Bi-weekly data refresh scheduled for ongoing pipeline",
          ],
        },
      ]}
      qualification={{
        forWhom: [
          "B2B service providers, agencies, SaaS platforms, and enterprise sales teams.",
          "Founders targeting defined company sizes ($1M–$50M+ ARR) with specific job titles.",
          "Teams with an existing outbound infrastructure needing clean, reliable fuel to scale.",
          "Sales leaders tired of paying thousands for bloated database subscriptions that deliver stale data.",
        ],
        notForWhom: [
          "B2C businesses looking for mass consumer consumer-level email blasts.",
          "Spammers wanting to blast 100,000 unverified contacts without proper deliverability setups.",
          "Companies without a defined offer or clear understanding of who their ideal customer is.",
        ],
      }}
      finalCta={{
        headline: "Stop Wasting Time on Bad Data. Fuel Your Sales Pipeline.",
        subheadline:
          "Schedule a discovery call today to receive 50 complimentary, verified test leads tailored to your exact ICP.",
        primaryButton: "Request Free 50-Lead Sample",
        secondaryButton: "Explore Other Services",
      }}
    />
  );
}
