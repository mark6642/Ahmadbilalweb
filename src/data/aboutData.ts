export interface AboutServiceSummary {
  title: string;
  description: string;
}

export interface WhyChoosePoint {
  title: string;
  description: string;
}

export interface AboutPageData {
  title: string;
  headline: string;
  agencyName: string;
  agencyFullName: string;
  introDescription: string[];
  whatWeDo: AboutServiceSummary[];
  philosophy: {
    heading: string;
    description: string[];
  };
  whyChooseUs: WhyChoosePoint[];
  whoWeWorkWith: {
    description: string[];
    idealClients: string[];
  };
  cta: {
    headline: string;
    subheadline: string;
    badge: string;
    buttonText: string;
  };
}

export const ABOUT_DATA: AboutPageData = {
  title: "About Us",
  headline: "Helping Businesses Find the Right Leads Through Human-Led Outreach",
  agencyName: "AISMA",
  agencyFullName: "AI Sales Marketing Agency",
  introDescription: [
    "At AI Sales Marketing Agency (AISMA), we believe successful business growth starts with connecting with the right people—not simply reaching more people.",
    "We help B2B businesses identify relevant prospects, reach decision-makers, and create opportunities for meaningful sales conversations through personalized outreach, careful research, and organic lead generation methods.",
    "Our approach is human-led, thoughtful, and focused on quality. We take the time to understand a business, its target audience, and its goals so we can focus on prospects who are more likely to be a relevant fit.",
  ],
  whatWeDo: [
    {
      title: "B2B Lead Generation",
      description:
        "Identify relevant businesses and potential customers who align with your target market.",
    },
    {
      title: "LinkedIn Outreach",
      description:
        "Connect with decision-makers through personalized, professional communication.",
    },
    {
      title: "Email Outreach",
      description:
        "Reach relevant prospects with thoughtful messages tailored to their business and needs.",
    },
    {
      title: "Lead Research & List Building",
      description:
        "Research companies and decision-makers to develop organized, targeted prospect lists.",
    },
    {
      title: "Appointment Setting",
      description:
        "Help move suitable prospect conversations toward scheduled sales meetings.",
    },
    {
      title: "LinkedIn Profile Optimization & Content Marketing",
      description:
        "Strengthen professional positioning and support a credible presence on LinkedIn.",
    },
  ],
  philosophy: {
    heading: "Human-Led, Organic, and Focused on Quality",
    description: [
      "We don't believe in mass messaging, generic communication, or chasing numbers just to make activity look impressive. We focus on understanding your audience, researching potential customers, and approaching relevant prospects with messages that feel personal and genuine.",
      "We use organic outreach and research-led methods to identify and engage potential customers. Our aim is to help businesses build a pipeline of relevant, qualified prospects and create opportunities for real business conversations.",
      "We also recognize that our services aren't right for every business. We want to work with businesses that genuinely need support with lead generation, outreach, or appointment setting and are ready to approach the process thoughtfully.",
    ],
  },
  whyChooseUs: [
    {
      title: "Personalized Communication",
      description:
        "We focus on relevant, human-written messages rather than robotic, one-size-fits-all outreach.",
    },
    {
      title: "Careful Prospect Research",
      description:
        "We pay attention to whether potential customers align with your target audience and business goals.",
    },
    {
      title: "Quality Over Quantity",
      description:
        "We prioritize relevant prospects and meaningful conversations instead of unnecessary outreach volume.",
    },
    {
      title: "An Honest, Practical Approach",
      description:
        "We aim to understand your needs, communicate clearly, and focus our efforts on work that serves a genuine business purpose.",
    },
  ],
  whoWeWorkWith: {
    description: [
      "We aim to support B2B founders, small businesses, sales agencies, and marketing agencies that want to reach relevant decision-makers, improve their prospecting process, and create more opportunities for sales conversations.",
      "Before starting, we want to understand your services, ideal customers, and goals to determine whether our approach fits your needs.",
    ],
    idealClients: [
      "B2B Founders & Tech CEOs",
      "Small & Growing Enterprises",
      "Sales & Marketing Agencies",
      "B2B Service Providers & Consultancies",
    ],
  },
  cta: {
    headline: "Let's Connect With the Right Prospects",
    subheadline:
      "You don't need to reach everyone. You need to reach the people who are relevant to your business. Let's identify your ideal prospects, start meaningful conversations, and work toward creating qualified sales opportunities.",
    badge: "Human-led outreach • Organic methods • Relevant leads",
    buttonText: "Book an Introduction Call",
  },
};
