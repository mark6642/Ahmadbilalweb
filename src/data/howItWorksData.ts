export interface ProcessStep {
  stepNumber: string;
  stepId: string;
  title: string;
  tagline: string;
  description: string;
  whatThisIncludes: string[];
  benefit: string;
  badge?: string;
}

export interface HowItWorksData {
  title: string;
  headline: string;
  subheadline: string;
  introDescription: string[];
  steps: ProcessStep[];
  philosophy: {
    heading: string;
    subheading: string;
    description: string[];
    pillars: {
      title: string;
      description: string;
    }[];
  };
  cta: {
    heading: string;
    subtext: string;
    buttonText: string;
    badge: string;
  };
}

export const HOW_IT_WORKS_DATA: HowItWorksData = {
  title: "How It Works",
  headline: "A Clear, Human-Led Process for Finding the Right Prospects",
  subheadline:
    "From understanding your ideal customer to starting meaningful conversations, every step has a purpose.",
  introDescription: [
    "At AI Sales Marketing Agency (AISMA), we don't believe in sending mass messages or chasing numbers without a strategy.",
    "We take a research-led, personalized approach to help B2B businesses connect with relevant decision-makers, develop qualified prospect lists, and create opportunities for genuine sales conversations.",
    "Our process is built around your goals, your target audience, and the people most relevant to your business.",
  ],
  steps: [
    {
      stepNumber: "01",
      stepId: "understand-your-business",
      badge: "Foundation",
      title: "Understand Your Business",
      tagline: "Before reaching out, we understand what makes your business valuable.",
      description:
        "We begin by learning about your services, ideal customers, target industries, and business objectives. We discuss the types of companies you want to reach, the decision-makers you need to connect with, and what makes a prospect a suitable fit. This gives us a clear direction before research and outreach begin.",
      whatThisIncludes: [
        "Understanding your services and value proposition",
        "Defining your ideal customer profile (ICP)",
        "Identifying target industries, company types, and decision-makers",
        "Establishing lead qualification criteria and campaign objectives",
      ],
      benefit:
        "A focused starting point, so outreach is aligned with your business rather than based on guesswork.",
    },
    {
      stepNumber: "02",
      stepId: "research-and-identify",
      badge: "Research & Verification",
      title: "Research and Identify Relevant Prospects",
      tagline: "Better conversations begin with better prospect research.",
      description:
        "We identify potential customers based on your agreed targeting criteria. Rather than collecting contacts without context, we focus on finding relevant businesses and identifying the people who are most appropriate to approach. Depending on your requirements, this can include LinkedIn prospect research, business email research, decision-maker identification, and targeted lead list building.",
      whatThisIncludes: [
        "B2B lead generation and prospect research",
        "LinkedIn and business contact research",
        "Targeted lead list building",
        "Lead qualification based on your criteria",
        "Organizing prospect information for outreach",
      ],
      benefit:
        "A more relevant, organized prospect list that helps you focus your efforts on potential customers who fit your business.",
    },
    {
      stepNumber: "03",
      stepId: "personalized-outreach",
      badge: "Personalized Copy",
      title: "Create Personalized Outreach",
      tagline: "No generic scripts. No robotic conversations. Every message needs a reason.",
      description:
        "Once suitable prospects have been identified, we develop personalized outreach for the appropriate channel. We consider the prospect's role, business context, and potential relevance to your offer to make communication more thoughtful and purposeful. Our outreach services can include LinkedIn connection requests and messaging, personalized email outreach, and Instagram outreach where appropriate for your audience.",
      whatThisIncludes: [
        "Personalized LinkedIn outreach",
        "Targeted cold email outreach",
        "Instagram outreach for relevant businesses and audiences",
        "Outreach message writing and campaign preparation",
        "Channel selection based on your target market",
      ],
      benefit:
        "More relevant first impressions and a stronger foundation for genuine business conversations.",
    },
    {
      stepNumber: "04",
      stepId: "manage-replies-followups",
      badge: "Engagement Triage",
      title: "Manage Replies and Follow-Ups",
      tagline: "Opportunities can be missed when conversations are left unattended.",
      description:
        "Outreach doesn't end after the first message. We help manage follow-ups and responses according to the agreed process, keeping communication organized and giving interested prospects an appropriate next step. We focus on relevant timing, professional replies, and respectful follow-up rather than repeatedly contacting people without a clear reason.",
      whatThisIncludes: [
        "LinkedIn reply and follow-up management",
        "Email sequences and follow-up management",
        "Lead nurturing and conversation tracking",
        "Email reply management",
        "Organizing prospect responses and next steps",
      ],
      benefit:
        "A more consistent prospecting process, with fewer conversations overlooked and clearer visibility into potential opportunities.",
    },
    {
      stepNumber: "05",
      stepId: "qualify-and-arrange-meetings",
      badge: "Conversion Handover",
      title: "Qualify Prospects and Arrange Meetings",
      tagline:
        "The goal isn't simply to fill a calendar. It's to connect your business with relevant opportunities.",
      description:
        "When prospects show interest, we help assess their suitability against the qualification criteria agreed with you. Where appropriate, we coordinate meeting times, manage scheduling, and organize the information needed for a productive handover to your sales team.",
      whatThisIncludes: [
        "Prospect qualification based on agreed criteria",
        "Appointment setting and meeting booking",
        "Meeting coordination and calendar scheduling",
        "Recording relevant prospect details and conversation context",
        "Passing qualified opportunities to your sales process",
      ],
      benefit:
        "Your team can spend more time speaking with relevant potential customers and less time handling the administrative work involved in arranging meetings.",
    },
    {
      stepNumber: "06",
      stepId: "review-learn-refine",
      badge: "Continuous Optimization",
      title: "Review, Learn, and Refine",
      tagline: "A good process should improve through careful review.",
      description:
        "We review the work within the agreed scope, looking at factors such as prospect relevance, outreach engagement, replies, follow-up progress, and meeting outcomes where that information is available. These observations help identify what may need adjustment, whether that means refining the target audience, improving messaging, or changing the outreach approach.",
      whatThisIncludes: [
        "Reviewing prospect and campaign quality",
        "Assessing replies and engagement",
        "Identifying areas for improvement",
        "Refining targeting and messaging",
        "Sharing progress and next steps",
      ],
      benefit:
        "A more informed approach that evolves around your audience and business objectives rather than relying on assumptions.",
    },
  ],
  philosophy: {
    heading: "More Than Sending Messages. A Process Built Around People.",
    subheading: "At AISMA, our work is human-led, research-driven, and focused on relevance.",
    description: [
      "We use organic outreach methods to identify and approach suitable prospects, with personalization and careful qualification guiding the process.",
      "We don't claim every prospect will become a customer, and we don't believe every business needs the same solution. Before starting, we want to understand your requirements and determine whether our services are the right fit.",
    ],
    pillars: [
      {
        title: "Lead Generation",
        description:
          "LinkedIn lead generation, email lead generation, B2B prospect research, and lead list building.",
      },
      {
        title: "Outreach & Appointment Setting",
        description:
          "LinkedIn outreach, email outreach, Instagram outreach, reply management, follow-ups, lead qualification, and meeting booking.",
      },
      {
        title: "LinkedIn Presence & Marketing",
        description:
          "LinkedIn profile optimization, content marketing, and professional branding.",
      },
      {
        title: "Email Marketing",
        description:
          "Email sequences, follow-up management, email campaign management, and customer email communication.",
      },
      {
        title: "Instagram Marketing",
        description:
          "Profile and account management, content creation, audience engagement, growth support, and partnership outreach.",
      },
    ],
  },
  cta: {
    heading: "Ready to Find the Right Prospects?",
    subtext:
      "You don't need to reach everyone. You need a thoughtful approach to reaching the people who matter to your business. Let's discuss your goals and explore how AISMA can support your lead generation and outreach process.",
    buttonText: "Book a Strategy Meeting",
    badge: "Human-led outreach • Carefully researched prospects • Meaningful conversations",
  },
};
