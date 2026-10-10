import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Social Media Marketing & Executive Authority | AhmadBilal AI",
  description:
    "Strategic B2B social media marketing and thought leadership content that turns company executives into industry authorities and drives qualified inbound pipeline.",
};

export default function SocialMediaMarketingPage() {
  return (
    <ServicePageLayout
      badge="Social Media Marketing & Authority"
      metricBadge="Compounding Inbound Reach • 3x Faster Trust Cycle"
      headline="Turn Executive Social Presence into an Inbound Demand-Generation Machine."
      subheadline="We architect and manage high-impact thought leadership content across LinkedIn, X (Twitter), and Meta. Transform your executive profile from an inactive resume into a magnet for high-ticket clients and strategic partnerships."
      problems={[
        {
          title: "Inconsistent Posting Yields Zero Social Momentum",
          description:
            "Posting sporadic company updates once a month signals stagnation and fails to trigger algorithmic distribution to your target buyers.",
          impact: "Invisible brand presence while competitors capture key industry conversations.",
        },
        {
          title: "Corporate Fluff That Nobody Reads or Resonates With",
          description:
            "Sharing generic press releases and stock imagery garners zero engagement from real buyers and paints your firm as outdated.",
          impact: "Wasted time and negative perception among high-caliber decision-makers.",
        },
        {
          title: "Vanity Metrics That Fail to Produce Actual Revenue",
          description:
            "Accumulating cheap bot likes and superficial comments from irrelevant audiences produces zero qualified inbound sales inquiries.",
          impact: "Marketing vanity that provides no measurable return on investment.",
        },
      ]}
      deliverables={[
        {
          title: "Executive Voice & Brand Positioning Blueprint",
          description:
            "We extract your unique proprietary insights, contrarian market viewpoints, and tactical methodologies through bi-weekly 30-minute founder interviews.",
          tag: "Brand Architecture",
        },
        {
          title: "High-Engagement LinkedIn Thought Leadership Content",
          description:
            "12 to 16 monthly long-form posts, actionable frameworks, slide decks/carousels, and visual breakdown assets engineered for executive resonance.",
          tag: "Content Engine",
        },
        {
          title: "Short-Form Video & Visual Creative Production",
          description:
            "Polished video editing for reels, shorts, and video snippets featuring dynamic captions, brand color palettes, and motion graphics.",
          tag: "Multimedia",
        },
        {
          title: "Targeted Inbound Comment & Network Engagement",
          description:
            "Proactive daily engagement on top industry creators, strategic prospect posts, and partner company threads to pull high-intent traffic to your profile.",
          tag: "Audience Growth",
        },
        {
          title: "Conversion-Engineered Social Profile Optimization",
          description:
            "Complete overhaul of executive LinkedIn and Twitter banners, headlines, featured section assets, and clear inbound lead magnet funnels.",
          tag: "Profile Funnel",
        },
        {
          title: "Monthly Inbound Attribution & Growth Analytics",
          description:
            "Transparent monthly reporting tracking profile impressions, follower demographic quality, direct message conversations started, and pipeline attributed.",
          tag: "Attribution",
        },
      ]}
      roadmap={[
        {
          step: "Phase 01",
          title: "Profile Audit & Narrative Extraction",
          duration: "Week 1",
          description:
            "We audit current social footprints, conduct a deep-dive founder interview, and formulate your core content pillars and executive tone of voice.",
          points: [
            "Executive profile makeover and visual banner design",
            "Definition of 4 core content pillars and target ICP topics",
            "Editorial content calendar scheduling and review",
          ],
        },
        {
          step: "Phase 02",
          title: "Production Sprint & Publishing Engine",
          duration: "Weeks 2 – 3",
          description:
            "Our creative team writes, designs, and formats your initial 30-day content reserve, submitting all deliverables for single-batch approval.",
          points: [
            "Writing 12-16 high-impact thought leadership pieces",
            "Design of custom branded infographics and PDF carousels",
            "Automated scheduling across optimal posting windows",
          ],
        },
        {
          step: "Phase 03",
          title: "Engagement, Inbound Nurturing & Scaling",
          duration: "Week 4+",
          description:
            "We execute systematic community engagement, monitor incoming profile traffic, initiate direct message conversations with interested leads, and review metrics.",
          points: [
            "Proactive daily interaction with high-value prospects",
            "Converting profile views and comments into calendar bookings",
            "Monthly content performance iteration and optimization",
          ],
        },
      ]}
      qualification={{
        forWhom: [
          "B2B Founders, CEOs, and agency owners who recognize personal brand drives trust and enterprise sales.",
          "Companies selling premium advisory, software, or agency services where credibility is the decisive buying factor.",
          "Executives who want a dominant social presence but lack the 10+ hours a week required to produce content.",
          "Brands with unique proprietary frameworks and insights ready to be amplified.",
        ],
        notForWhom: [
          "Individuals looking for quick viral TikTok dances or superficial entertainment content.",
          "Founders unwilling to participate in a 30-minute monthly strategy interview.",
          "Companies expecting instant sales from day one without allowing authority to compound.",
        ],
      }}
      finalCta={{
        headline: "Position Yourself as the Undisputed Category Leader.",
        subheadline:
          "Schedule a 15-minute authority strategy session. We'll audit your current executive profiles and show you the exact content blueprint to generate inbound client demand.",
        primaryButton: "Book an Authority Strategy Call",
        secondaryButton: "Explore Other Services",
      }}
    />
  );
}
