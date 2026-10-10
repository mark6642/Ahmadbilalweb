import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Conversion Web Development | High-Speed Architecture | AhmadBilal AI",
  description:
    "Next.js web applications engineered for sub-second load times, flawless responsiveness, and maximum visitor-to-client conversion rates.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web Development"
      metricBadge="Sub-1.0s Speed • 100% Core Web Vitals"
      headline="High-Performance Web Platforms Built to Convert Traffic into High-Ticket Clients."
      subheadline="We architect modern, sub-second web experiences and conversion funnels that position your firm as an undeniable market leader and systematically multiply inbound demos."
      problems={[
        {
          title: "Sluggish Loading Kills 53% of Buyer Intent",
          description:
            "Bloated WordPress plugins and sluggish page loads cause enterprise decision-makers to bounce before your value proposition even renders on screen.",
          impact: "Wasted ad budget and lost high-ticket client trust within the first 3 seconds.",
        },
        {
          title: "Vague Messaging & High-Friction UX",
          description:
            "Most agency websites look pretty but confuse prospects with convoluted navigation, broken mobile layouts, and buried call-to-actions.",
          impact: "Visitors scroll, get overwhelmed, and leave for competitors with clearer value.",
        },
        {
          title: "Fragile Architecture with Zero SEO Velocity",
          description:
            "Outdated templates lacking server-side rendering fail to rank for critical buyer searches and collapse under paid advertising spikes.",
          impact: "Zero organic authority, zero compounding inbound pipeline.",
        },
      ]}
      deliverables={[
        {
          title: "Production Next.js & React 19 Frontend Architecture",
          description:
            "Custom component engineering using TypeScript and Tailwind CSS. Built without sluggish page builders for instant screen transitions and rock-solid stability.",
          tag: "Core Framework",
        },
        {
          title: "Sub-Second Global Edge Performance Optimization",
          description:
            "Dynamic asset compression, edge caching, server-side rendering, and responsive WebP image pipelines ensuring 95+ Google Lighthouse scores across all devices.",
          tag: "Core Web Vitals",
        },
        {
          title: "Direct B2B Conversion Funnel & Lead Routing Engine",
          description:
            "Integrated multi-step booking forms, instant proposal request logic, custom webhook integrations to your CRM, and direct automated notifications.",
          tag: "Lead Capture",
        },
        {
          title: "Responsive Cross-Platform & Device Precision",
          description:
            "Pixel-perfect responsive design calibrated across ultra-wide monitors, executive laptops, tablets, and smartphones with native app-like interactions.",
          tag: "Mobile UX",
        },
        {
          title: "Enterprise SEO Foundations & Dynamic Metadata",
          description:
            "Semantic HTML5 tags, JSON-LD Schema markup, dynamic OpenGraph preview cards, automated sitemaps, and robots configuration for maximum search indexation.",
          tag: "Organic Growth",
        },
        {
          title: "Conversion Analytics & Real-Time Tracking Stack",
          description:
            "Clean setup of Google Tag Manager, GA4 event triggers, meta pixel tracking, and heatmapping tools to monitor every scroll, click, and drop-off.",
          tag: "Measurement",
        },
      ]}
      roadmap={[
        {
          step: "Phase 01",
          title: "Audit & Wireframe Discovery",
          duration: "Days 1 – 3",
          description:
            "We dissect your existing assets, analyze top competitors, map buyer conversion journeys, and finalize the structural wireframe blueprint.",
          points: [
            "Comprehensive conversion and UX friction audit",
            "Information architecture & site hierarchy",
            "Copywriting wireframe & messaging hierarchy approval",
          ],
        },
        {
          step: "Phase 02",
          title: "Infrastructure & UI Build",
          duration: "Days 4 – 10",
          description:
            "Our engineering team develops the full-stack codebase, sets up interactive elements, integrates database endpoints, and connects booking flows.",
          points: [
            "Next.js App Router codebase development",
            "Interactive form logic and email deliverability test",
            "Cross-browser testing across Safari, Chrome, and iOS",
          ],
        },
        {
          step: "Phase 03",
          title: "Optimization, QA & Live Deployment",
          duration: "Days 11 – 14",
          description:
            "We run speed benchmarking, verify DNS / SSL routing on global CDNs, configure custom domains, and hand over complete source control access.",
          points: [
            "Google Lighthouse 95+ verification",
            "Production CDN deployment & zero-downtime cutover",
            "Post-launch telemetry & monitoring check",
          ],
        },
      ]}
      qualification={{
        forWhom: [
          "B2B service firms, consultants, and agencies selling high-ticket solutions ($3k–$50k+).",
          "Founders who recognize their current website looks dated and is actively costing them client deals.",
          "Companies running paid traffic or outbound campaigns that need an ironclad landing page to convert clicks.",
          "Teams demanding bespoke Next.js performance rather than sluggish cookie-cutter templates.",
        ],
        notForWhom: [
          "Businesses looking for an ultra-cheap $150 WordPress or Wix quick-fix.",
          "Low-ticket drop-shipping or generic commodity ecommerce stores.",
          "Companies unwilling to provide brand assets and prompt feedback during sprint milestones.",
        ],
      }}
      finalCta={{
        headline: "Ready for a Web Platform That Converts Traffic Into Revenue?",
        subheadline:
          "Schedule a 15-minute engineering and conversion teardown. We will analyze your current site and show you the exact roadmap to a sub-second, client-generating web presence.",
        primaryButton: "Book a Strategy Call",
        secondaryButton: "Explore Other Services",
      }}
    />
  );
}
