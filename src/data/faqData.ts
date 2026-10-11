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
      count: 7,
    },
    {
      key: "instagram",
      label: "Instagram FAQs",
      description: "DM outreach, account management & creative content",
      count: 5,
    },
    {
      key: "email",
      label: "Email FAQs",
      description: "Cold outreach, deliverability & campaign sequences",
      count: 5,
    },
    {
      key: "web",
      label: "Web Development FAQs",
      description: "Next.js websites, funnels, integrations & support",
      count: 6,
    },
  ],
  items: [
    // ==========================================
    // LINKEDIN SERVICES FAQS (7 Items)
    // ==========================================
    {
      id: "li-faq-1",
      category: "linkedin",
      categoryLabel: "LinkedIn Outreach",
      question: "What LinkedIn services does AISMA provide?",
      answer:
        "AISMA offers LinkedIn lead generation, personalized outreach, profile optimization, content marketing, marketing and branding, and reply and follow-up management to help businesses reach relevant professionals and create sales opportunities.",
      keyTakeaway:
        "End-to-end LinkedIn ecosystem: from lead identification to booking qualified sales meetings.",
    },
    {
      id: "li-faq-2",
      category: "linkedin",
      categoryLabel: "Lead Generation",
      question: "How does LinkedIn lead generation help my business?",
      answer:
        "LinkedIn lead generation helps identify companies and decision-makers who match your target audience, giving your business a more focused way to find potential customers and develop relevant sales opportunities.",
      keyTakeaway:
        "Eliminates wasted prospecting time by connecting directly with verified C-suite and VP buyers.",
    },
    {
      id: "li-faq-3",
      category: "linkedin",
      categoryLabel: "Outreach Process",
      question: "How does your LinkedIn outreach process work?",
      answer:
        "We start by understanding your business, ideal customer profile, and goals. We then research relevant prospects and prepare personalized connection requests and messages designed to initiate meaningful professional conversations.",
      keyTakeaway:
        "100% human-written, personalized connection notes and conversation starters—never mass templates.",
    },
    {
      id: "li-faq-4",
      category: "linkedin",
      categoryLabel: "Profile Optimization",
      question: "Can you optimize my LinkedIn profile to attract potential clients?",
      answer:
        "Yes. We can improve your headline, About section, experience, positioning, and relevant keywords so visitors can better understand your services, expertise, and value proposition.",
      keyTakeaway:
        "Turns your personal profile into a high-converting B2B landing page.",
    },
    {
      id: "li-faq-5",
      category: "linkedin",
      categoryLabel: "Content Marketing",
      question: "Do you provide LinkedIn content creation and marketing?",
      answer:
        "Yes. We support LinkedIn content planning, professional post writing, content calendars, thought leadership content, and related branding activities to help communicate your expertise and maintain a consistent presence.",
      keyTakeaway:
        "Builds organic authority and inbound trust while outbound campaigns are actively running.",
    },
    {
      id: "li-faq-6",
      category: "linkedin",
      categoryLabel: "Inbox Management",
      question: "Can AISMA manage LinkedIn replies and follow-ups?",
      answer:
        "Yes. Depending on the agreed scope, we can help organize prospect replies, manage appropriate follow-ups, track conversations, and identify relevant next steps with interested contacts.",
      keyTakeaway:
        "Ensures no interested decision-maker slips through the cracks while keeping communication respectful.",
    },
    {
      id: "li-faq-7",
      category: "linkedin",
      categoryLabel: "Results & Expectations",
      question: "Can LinkedIn services guarantee leads or booked meetings?",
      answer:
        "Yes, Results depend on your offer, target audience, messaging, market conditions, and prospect responses. Our focus is on relevant research, personalized outreach, and a structured process designed to create opportunities for meaningful conversations.",
      keyTakeaway:
        "Predictable opportunities generated through disciplined, high-relevance targeting rather than vanity metrics.",
    },

    // ==========================================
    // INSTAGRAM SERVICES FAQS (5 Items)
    // ==========================================
    {
      id: "ig-faq-1",
      category: "instagram",
      categoryLabel: "Instagram Services",
      question: "What Instagram services does AISMA provide?",
      answer:
        "Our Instagram services include outreach and lead generation, profile and account management, content marketing and creation, audience engagement, growth support, and partnership outreach.",
      keyTakeaway:
        "Full-funnel Instagram presence: strategic direct messaging, aesthetic branding, and organic audience development.",
    },
    {
      id: "ig-faq-2",
      category: "instagram",
      categoryLabel: "Outreach Value",
      question: "How can Instagram outreach help my business?",
      answer:
        "Instagram outreach can help businesses discover relevant brands, professionals, and potential customers, then initiate appropriate conversations when the platform suits their target audience.",
      keyTakeaway:
        "Unlocks direct access to founders, creators, ecommerce brands, and lifestyle decision-makers.",
    },
    {
      id: "ig-faq-3",
      category: "instagram",
      categoryLabel: "Content Creation",
      question: "Do you create Instagram posts, Reels, Stories, and captions?",
      answer:
        "Yes. Depending on your requirements, we can support content strategy, post and carousel design, Reels creation, Story design, caption writing, and content calendar planning.",
      keyTakeaway:
        "High-aesthetic multi-slide carousels and short-form video content aligned with your brand identity.",
    },
    {
      id: "ig-faq-4",
      category: "instagram",
      categoryLabel: "Account Management",
      question: "Can you manage my Instagram profile and account?",
      answer:
        "We can help improve your profile presentation, maintain a consistent brand identity, organize account activities, and support agreed reply and community management tasks.",
      keyTakeaway:
        "Hands-off routine management so you stay consistently active without spending hours on the app.",
    },
    {
      id: "ig-faq-5",
      category: "instagram",
      categoryLabel: "Growth Expectations",
      question: "Can AISMA guarantee Instagram growth or leads?",
      answer:
        "Yes, Organic growth and lead generation depend on your audience, content, offer, market, and engagement. We focus on relevant content, thoughtful outreach, and genuine audience relationships rather than guaranteed numbers.",
      keyTakeaway:
        "Focuses on genuine, qualified commercial connections rather than artificial follower spikes.",
    },

    // ==========================================
    // EMAIL SERVICES FAQS (5 Items)
    // ==========================================
    {
      id: "em-faq-1",
      category: "email",
      categoryLabel: "Email Services",
      question: "What email services does AISMA provide?",
      answer:
        "AISMA offers B2B email outreach, email lead generation, business contact research, email list building, email sequences, follow-up management, email reply management, email campaign management, and email marketing.",
      keyTakeaway:
        "Comprehensive email infrastructure covering cold outbound campaigns, list verification, and subscriber newsletters.",
    },
    {
      id: "em-faq-2",
      category: "email",
      categoryLabel: "Outreach vs Marketing",
      question: "What is the difference between email outreach and email marketing?",
      answer:
        "Email outreach generally focuses on initiating conversations with selected business prospects. Email marketing usually involves communicating with subscribers or existing contacts through newsletters, promotional campaigns, and relationship-building emails.",
      keyTakeaway:
        "Outreach hunts new cold prospects; Marketing nurtures your existing warm subscriber base.",
    },
    {
      id: "em-faq-3",
      category: "email",
      categoryLabel: "List Building & Verification",
      question: "Can you build a targeted email list for my business?",
      answer:
        "Yes. We research relevant companies and decision-makers based on your ideal customer profile and organize available business contact information according to your requirements. Verification can be included when agreed and supported by the process used.",
      keyTakeaway:
        "Zero generic directories: customized lists verified via SMTP ping to protect sender deliverability.",
    },
    {
      id: "em-faq-4",
      category: "email",
      categoryLabel: "Personalized Copy & Follow-Ups",
      question: "Do you write personalized emails and manage follow-ups?",
      answer:
        "Yes. We can help prepare human-written emails, organize follow-up sequences, and manage replies according to your campaign goals and agreed scope. The aim is to keep communication relevant, professional, and respectful.",
      keyTakeaway:
        "Natural, concise value propositions with respectful multi-touch follow-up cadence.",
    },
    {
      id: "em-faq-5",
      category: "email",
      categoryLabel: "Outreach Results",
      question: "Can email outreach guarantee leads, replies, or meetings?",
      answer:
        "Yes, Email results depend on your offer, targeting, message relevance, contact quality, and recipient response. We focus on careful research and personalized communication rather than promising guaranteed outcomes.",
      keyTakeaway:
        "Sustainable pipeline growth founded on clean data, inbox deliverability, and compelling offer positioning.",
    },

    // ==========================================
    // WEB DEVELOPMENT FAQS (6 Items)
    // ==========================================
    {
      id: "web-faq-1",
      category: "web",
      categoryLabel: "Web Development",
      question: "What web development services does AISMA provide?",
      answer:
        "AISMA designs and builds fast, modern business websites, landing pages, and conversion-focused funnels using Next.js. This includes UI/UX design, responsive development, SEO-ready structure, lead capture forms, CRM integrations, and ongoing support.",
      keyTakeaway:
        "From design to launch: a complete website built to turn visitors into booked clients.",
    },
    {
      id: "web-faq-2",
      category: "web",
      categoryLabel: "Technology",
      question: "Why do you build websites with Next.js?",
      answer:
        "Next.js delivers fast page loads, strong SEO foundations, secure architecture, and a smooth user experience across devices. It also scales easily as your business grows, without needing to rebuild your site.",
      keyTakeaway:
        "Speed, SEO, and scalability out of the box, so your website works as a growth asset.",
    },
    {
      id: "web-faq-3",
      category: "web",
      categoryLabel: "Timeline",
      question: "How long does it take to build a website?",
      answer:
        "Timelines depend on scope. A focused landing page can typically be delivered within a few days to a week, while a multi-page business website or custom funnel usually takes two to four weeks, including feedback and revisions.",
      keyTakeaway:
        "Clear milestones and a defined timeline agreed before development starts.",
    },
    {
      id: "web-faq-4",
      category: "web",
      categoryLabel: "Design & Mobile",
      question: "Will my website be mobile-friendly and conversion-focused?",
      answer:
        "Yes. Every website is designed mobile-first and tested across phones, tablets, and desktops. We focus on clear messaging, strong calls-to-action, and simple navigation so visitors know exactly what to do next.",
      keyTakeaway:
        "Pixel-perfect on every screen, with a layout built around booking calls and capturing leads.",
    },
    {
      id: "web-faq-5",
      category: "web",
      categoryLabel: "Integrations & SEO",
      question: "Can you connect my website to my CRM, email tools, and analytics?",
      answer:
        "Yes. We can integrate contact forms, booking calendars, CRM platforms, email marketing tools, and analytics so leads are captured, routed, and tracked automatically. We also set up SEO fundamentals like metadata, sitemaps, and performance optimization.",
      keyTakeaway:
        "Every enquiry lands where your team can act on it, with tracking in place from day one.",
    },
    {
      id: "web-faq-6",
      category: "web",
      categoryLabel: "Support & Ownership",
      question: "Do you offer post-launch support, and who owns the website?",
      answer:
        "Yes. After launch we can provide maintenance, updates, and improvements depending on the agreed scope. You own your website, content, and assets once the project is completed and paid for.",
      keyTakeaway:
        "No lock-in: you own your website, with optional support whenever you need it.",
    },
  ],
};
