export type FaqCategory = "linkedin" | "instagram" | "email" | "web";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  categoryLabel: string;
  question: string;
  answer: string;
  keyTakeaway: string;
}

export interface FaqSectionData {
  title: string;
  headline: string;
  subheadline: string;
  categories: {
    key: FaqCategory;
    label: string;
    description: string;
    count: number;
  }[];
  items: FaqItem[];
}

export const FAQ_DATA: FaqSectionData = {
  title: "Frequently Asked Questions",
  headline: "Clear Answers to Everything About Our Outreach & Growth Systems",
  subheadline:
    "Explore transparent insights into our human-led outreach methodology, deliverability protocols, and expected campaign outcomes.",
  categories: [
    {
      key: "linkedin",
      label: "LinkedIn FAQs",
      description: "Direct outreach, profile optimization & B2B networking",
      count: 2,
    },
    {
      key: "instagram",
      label: "Instagram FAQs",
      description: "DM outreach, account management & creative content",
      count: 2,
    },
    {
      key: "email",
      label: "Email FAQs",
      description: "Cold outreach, deliverability & campaign sequences",
      count: 2,
    },
    {
      key: "web",
      label: "Web Development FAQs",
      description: "Next.js websites, funnels, integrations & support",
      count: 2,
    },
  ],
  items: [
    // ==========================================
    // LINKEDIN SERVICES FAQS (2 Items)
    // ==========================================
    {
      id: "li-faq-1",
      category: "linkedin",
      categoryLabel: "LinkedIn Outreach",
      question: "What LinkedIn services does AISMA provide?",
      answer:
        "AISMA offers end-to-end LinkedIn lead generation, personalized 1-on-1 outreach, profile authority optimization, content marketing, and full reply and appointment management to connect directly with verified decision-makers.",
      keyTakeaway:
        "End-to-end LinkedIn ecosystem: from lead identification to booking qualified sales meetings.",
    },
    {
      id: "li-faq-2",
      category: "linkedin",
      categoryLabel: "Results & Safety",
      question: "Can LinkedIn services guarantee leads while protecting my account?",
      answer:
        "Yes. We maintain strict compliance with LinkedIn safety limits using dedicated cloud setups, human-crafted personalized messaging, and verified ICP targeting. Our process prioritizes genuine relationship building rather than spammy mass templates.",
      keyTakeaway:
        "100% human-written, secure outreach that protects your account while generating high-value sales pipeline.",
    },

    // ==========================================
    // INSTAGRAM SERVICES FAQS (2 Items)
    // ==========================================
    {
      id: "ig-faq-1",
      category: "instagram",
      categoryLabel: "Instagram Outreach",
      question: "What Instagram services does AISMA provide?",
      answer:
        "Our Instagram services combine strategic conversational DM outreach, high-converting profile optimization, branded visual content (carousels & Reels), active audience engagement, and influencer & B2B partnership outreach.",
      keyTakeaway:
        "Full-funnel Instagram presence: strategic direct messaging, aesthetic branding, and organic audience development.",
    },
    {
      id: "ig-faq-2",
      category: "instagram",
      categoryLabel: "Growth Strategy",
      question: "How does Instagram outreach generate qualified business clients?",
      answer:
        "We identify verified founders, creators, and ecommerce leaders engaging within your target niche. Through conversational relationship-building and personalized value propositions, we transition interested followers into booked client calls.",
      keyTakeaway:
        "High-touch conversational outreach unlocking direct access to key lifestyle and commercial decision-makers.",
    },

    // ==========================================
    // EMAIL SERVICES FAQS (2 Items)
    // ==========================================
    {
      id: "em-faq-1",
      category: "email",
      categoryLabel: "List Verification",
      question: "How do you source and verify targeted cold email lists?",
      answer:
        "We research relevant companies and decision-makers based on your ideal customer profile (ICP). Every contact is verified using multi-step SMTP pings and spam-trap filtering to keep bounce rates strictly below 2% and protect your sender reputation.",
      keyTakeaway:
        "Zero generic directories: customized lists verified via SMTP ping to protect sender deliverability.",
    },
    {
      id: "em-faq-2",
      category: "email",
      categoryLabel: "Deliverability & Copy",
      question: "How do you ensure cold emails land in primary inboxes and get replies?",
      answer:
        "We configure dedicated secondary domains with full SPF, DKIM, DMARC records, apply automated warm-up routines, and write concise, value-first copy designed to start genuine conversations rather than trigger spam filters.",
      keyTakeaway:
        "Bulletproof deliverability infrastructure paired with natural, human-written copy for maximum reply rates.",
    },

    // ==========================================
    // WEB DEVELOPMENT FAQS (2 Items)
    // ==========================================
    {
      id: "web-faq-1",
      category: "web",
      categoryLabel: "Web & Funnels",
      question: "What web development services does AISMA provide?",
      answer:
        "AISMA designs and builds fast, modern business websites, landing pages, and conversion-focused funnels using Next.js. This includes UI/UX design, responsive development, SEO-ready structure, lead capture forms, CRM integrations, and ongoing support.",
      keyTakeaway:
        "From design to launch: a complete website built to turn visitors into booked clients.",
    },
    {
      id: "web-faq-2",
      category: "web",
      categoryLabel: "Timeline & Ownership",
      question: "What is your turnaround timeline, and do I own the website?",
      answer:
        "A focused landing page is typically delivered within 5 to 7 days, while full multi-page business websites take 2 to 4 weeks. You retain 100% intellectual property, code, and asset ownership with zero vendor lock-in.",
      keyTakeaway:
        "Fast sprint delivery with 100% complete ownership and transparent milestone reviews.",
    },
  ],
};
