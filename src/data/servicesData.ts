export interface SubServiceItem {
  id: string;
  title: string;
  description?: string;
  whatWeDo: string[];
  benefit: string;
}

export interface ServiceDetail {
  slug: string;
  category: "linkedin" | "instagram" | "email";
  categoryLabel: string;
  badge: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overviewDescription: string[];
  image?: string;
  subServices: SubServiceItem[];
  approach: {
    heading: string;
    description: string[];
  };
  whoCanBenefit: string[];
  cta: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
}

export const SERVICES_DATA: ServiceDetail[] = [
  // ==========================================
  // LINKEDIN SERVICES (Pages 2 - 24)
  // ==========================================
  {
    slug: "linkedin-outreach",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "B2B LinkedIn Outreach",
    title: "LinkedIn Outreach",
    tagline: "Connect with the Right Decision-Makers on LinkedIn",
    image: "/images/linkedin-outreach.png",
    shortDescription:
      "Reach potential clients with personalized messages that start meaningful conversations and build high-ticket relationships.",
    overviewDescription: [
      "LinkedIn outreach is more than sending connection requests and messages. It's about identifying relevant professionals, understanding their business context, and starting conversations that feel personal, professional, and worth responding to.",
      "At AISMA, we help B2B businesses reach potential clients through targeted LinkedIn outreach. Our approach focuses on connecting with the right audience, personalizing communication, and building the foundation for meaningful business relationships.",
    ],
    subServices: [
      {
        id: "personalized-outreach",
        title: "1. Personalized LinkedIn Outreach",
        description:
          "Every prospect has different responsibilities, priorities, and business needs. We tailor outreach messages to the individual, their role, and their company rather than relying on generic templates.",
        whatWeDo: [
          "Personalize messages around relevant professional and business context.",
          "Align outreach with your offering and target audience.",
          "Use natural, professional language that encourages genuine conversation.",
          "Adapt messaging to your outreach goals.",
        ],
        benefit:
          "Make your outreach more relevant, create a stronger first impression, and give prospects a meaningful reason to engage.",
      },
      {
        id: "connection-management",
        title: "2. Connection Request Management",
        description:
          "Connecting with the right professionals starts with thoughtful targeting and a clear reason to connect. We help manage connection requests based on your ideal customer profile and outreach objectives.",
        whatWeDo: [
          "Identify relevant professionals to connect with.",
          "Prepare concise, personalized connection notes where appropriate.",
          "Organize and track connection request activity.",
          "Maintain a consistent, professional approach to connecting with prospects.",
        ],
        benefit:
          "Build a more relevant professional network and connect with people who align with your business goals.",
      },
      {
        id: "linkedin-messaging",
        title: "3. LinkedIn Messaging",
        description:
          "Once a connection is established, the next step is starting a conversation that feels natural rather than overly promotional. We help develop and manage relevant follow-up messages that reflect your offering and the prospect's context.",
        whatWeDo: [
          "Write personalized follow-up messages.",
          "Develop conversation flows based on your outreach goals.",
          "Respond professionally to prospect engagement, where included in the agreed scope.",
          "Keep messaging clear, relevant, and respectful of the recipient's time.",
        ],
        benefit:
          "Support more meaningful conversations with potential customers without relying on repetitive or pushy messaging.",
      },
      {
        id: "b2b-prospect-outreach",
        title: "4. B2B Prospect Outreach",
        description:
          "Effective B2B outreach requires a clear understanding of your ideal customers and a thoughtful plan for reaching them. We help businesses approach relevant decision-makers on LinkedIn with messaging aligned with their target market and business objectives.",
        whatWeDo: [
          "Define outreach criteria around your target audience.",
          "Research relevant companies and decision-makers.",
          "Align messaging with your products or services.",
          "Organize outreach activity and monitor responses to support ongoing improvement.",
        ],
        benefit:
          "Give your business a more structured way to reach potential clients, build relationships, and create opportunities for sales conversations.",
      },
    ],
    approach: {
      heading: "Our Approach to LinkedIn Outreach",
      description: [
        "We believe good outreach starts with relevance, not volume. We focus on understanding your target audience, researching prospects, and communicating with a clear purpose. Every interaction should feel professional and considerate—not like another mass message.",
        "Our goal is to help your business build relevant connections and open the door to genuine conversations with potential customers.",
      ],
    },
    whoCanBenefit: [
      "B2B founders and executive leaders.",
      "Small and growing businesses seeking corporate clients.",
      "Marketing and sales agencies needing predictable leads.",
      "Companies looking to connect with verified decision-makers in their target markets.",
    ],
    cta: {
      headline: "Let's Start the Right Conversations",
      subtext:
        "Connect with the right people. Start meaningful conversations. Build new opportunities.",
      buttonText: "Book an Outreach Strategy Call",
    },
  },

  {
    slug: "b2b-lead-generation",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "High-Intent Data",
    title: "B2B Lead Generation",
    tagline: "Find the Right Prospects for Your Business",
    shortDescription:
      "Find targeted prospects and connect with the right decision-makers on LinkedIn with verified data and zero guesswork.",
    overviewDescription: [
      "Generating quality leads starts with understanding who your ideal customers are and where to find them. At AISMA, we help B2B businesses identify relevant companies, research key decision-makers, and build targeted prospect lists that support a more focused sales process.",
      "Instead of collecting random contacts, we take a research-driven approach to finding prospects that align with your target market, industry, and business goals. This gives your sales and marketing team a clearer starting point for personalized outreach and meaningful business conversations.",
    ],
    subServices: [
      {
        id: "b2b-lead-research",
        title: "1. B2B Lead Research",
        description:
          "Finding potential customers requires more than searching for company names. It involves understanding which businesses are relevant to your offering and identifying prospects that match your ideal customer profile.",
        whatWeDo: [
          "Research companies that align with your target market.",
          "Identify businesses that may benefit from your products or services.",
          "Gather relevant company information to support prospecting.",
          "Organize research findings into structured, easy-to-use lists.",
        ],
        benefit:
          "Build a more focused prospect pipeline and spend less time sorting through businesses that may not be a good fit.",
      },
      {
        id: "decision-maker-research",
        title: "2. Decision-Maker Research",
        description:
          "Reaching the right person can make a meaningful difference in B2B prospecting. We help identify relevant decision-makers and key contacts within target companies based on their roles, responsibilities, and relevance to your offering.",
        whatWeDo: [
          "Identify relevant founders, executives, department heads, and key professionals.",
          "Research job titles and professional responsibilities.",
          "Match contacts to your target departments and buyer profiles.",
          "Collect available professional contact information where appropriate.",
        ],
        benefit:
          "Give your outreach a clearer direction by focusing on people who are more likely to be involved in purchasing decisions.",
      },
      {
        id: "target-audience-research",
        title: "3. Target Audience Research",
        description:
          "Effective lead generation begins with a clear understanding of your audience. We help define the types of companies and professionals most relevant to your business so your prospecting efforts have a clear focus.",
        whatWeDo: [
          "Define target industries, company sizes, locations, and business types.",
          "Identify relevant roles and decision-making positions.",
          "Help establish ideal customer profile (ICP) criteria.",
          "Refine prospecting criteria based on your services, goals, and market.",
        ],
        benefit:
          "Improve targeting, reduce irrelevant prospecting, and create a stronger foundation for lead generation and outreach campaigns.",
      },
      {
        id: "lead-list-building",
        title: "4. Lead List Building",
        description:
          "A useful lead list is more than a collection of names. It should be organized, relevant to your target audience, and practical for your sales team to use.",
        whatWeDo: [
          "Build prospect lists according to your target criteria.",
          "Compile relevant company and contact details.",
          "Organize available information into a clear, consistent format.",
          "Review lists for relevance, completeness, and potential duplicates.",
        ],
        benefit:
          "Give your team an organized starting point for outreach, with less time spent on manual prospect research and list preparation.",
      },
      {
        id: "lead-qualification",
        title: "5. Lead Qualification",
        description:
          "Not every prospect is the right fit for your business. Lead qualification helps assess whether potential customers align with your target market and the requirements you've established.",
        whatWeDo: [
          "Assess prospects against your ideal customer profile.",
          "Review company characteristics and relevant business information.",
          "Evaluate role and decision-making relevance.",
          "Categorize prospects according to agreed qualification criteria.",
        ],
        benefit:
          "Help your team prioritize relevant prospects, use its time more effectively, and focus outreach on businesses that better match your offering.",
      },
    ],
    approach: {
      heading: "Our Approach to B2B Lead Generation",
      description: [
        "We believe effective lead generation starts with research, clear targeting, and attention to detail. We first understand your business, offering, ideal customers, and prospecting goals. From there, we research relevant companies and contacts, organize the information, and qualify prospects according to your requirements.",
        "The result is a more structured approach to prospecting that supports personalized outreach and better-informed sales conversations.",
      ],
    },
    whoCanBenefit: [
      "B2B founders and small businesses looking to identify potential customers.",
      "Marketing and sales agencies that need targeted prospect lists.",
      "Businesses entering new industries or markets.",
      "Sales teams that want to improve prospect research and targeting.",
      "Companies that need organized lead lists to support outreach campaigns.",
    ],
    cta: {
      headline: "Let's Find Your Next Potential Customers",
      subtext:
        "The right prospects can make your sales process more focused. Build your pipeline today.",
      buttonText: "Request Verified Lead List",
    },
  },

  {
    slug: "b2b-appointment-setting",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "Meeting Booking Engine",
    title: "B2B Appointment Setting",
    tagline: "Turn Prospect Conversations into Meaningful Sales Meetings",
    shortDescription:
      "Book qualified sales meetings with relevant business decision-makers without filling your calendar with unqualified calls.",
    overviewDescription: [
      "Finding potential customers is an important first step, but turning their interest into a scheduled meeting is where the next opportunity begins.",
      "At AISMA, we help B2B businesses manage the process of engaging prospects, following up professionally, scheduling appointments, and coordinating calendars. Our focus is on creating a smoother path from initial interest to a meaningful conversation with your sales team.",
    ],
    subServices: [
      {
        id: "prospect-engagement",
        title: "1. Prospect Engagement",
        description:
          "Building a connection with potential clients takes thoughtful communication and timely follow-ups. We help maintain conversations with prospects who may be interested in your products or services.",
        whatWeDo: [
          "Engage prospects through agreed communication channels.",
          "Follow up on previous outreach and responses.",
          "Respond professionally to relevant prospect inquiries, where included in the agreed scope.",
          "Maintain clear communication to understand a prospect's interest and availability.",
        ],
        benefit:
          "Keep conversations moving and help identify opportunities to take the next step with potential customers.",
      },
      {
        id: "appointment-scheduling",
        title: "2. Appointment Scheduling",
        description:
          "Coordinating meetings shouldn't become another obstacle for your sales team. We help arrange appointments with interested prospects based on mutual availability and your preferred scheduling process.",
        whatWeDo: [
          "Coordinate suitable meeting dates and times.",
          "Communicate scheduling details with prospects.",
          "Send calendar invitations and meeting information.",
          "Handle rescheduling requests when necessary.",
        ],
        benefit:
          "Simplify meeting coordination and reduce the time your team spends managing scheduling conversations.",
      },
      {
        id: "qualified-meeting-booking",
        title: "3. Qualified Meeting Booking",
        description:
          "A productive sales meeting starts with a prospect who fits your target audience and has a relevant reason to talk. We help schedule meetings according to qualification criteria agreed upon with your business.",
        whatWeDo: [
          "Review prospects against your ideal customer profile and agreed criteria.",
          "Confirm their relevance and interest before scheduling, where applicable.",
          "Coordinate meetings with appropriate decision-makers or stakeholders.",
          "Share relevant prospect details and meeting context with your sales team.",
        ],
        benefit:
          "Help your sales team prioritize conversations with relevant prospects instead of spending valuable time on poorly matched meetings.",
      },
      {
        id: "calendar-management",
        title: "4. Calendar Management",
        description:
          "Keeping meetings organized helps create a smoother experience for both prospects and your sales team. We assist with calendar coordination to keep appointment details clear and up to date.",
        whatWeDo: [
          "Schedule meetings according to calendar availability.",
          "Send invitations and meeting reminders where agreed.",
          "Manage rescheduling and cancellations.",
          "Keep appointment details organized and communicate updates.",
        ],
        benefit:
          "Reduce scheduling confusion, stay organized, and help your team prepare for upcoming sales conversations.",
      },
    ],
    approach: {
      heading: "Our Approach to Appointment Setting",
      description: [
        "We believe successful appointment setting involves more than filling calendar slots. It requires relevant prospects, professional communication, appropriate follow-ups, and clear coordination.",
        "We work according to your target audience, qualification criteria, preferred communication style, and scheduling process to help make each meeting purposeful and relevant.",
      ],
    },
    whoCanBenefit: [
      "B2B founders and busy CEOs who need to focus on closing rather than chasing.",
      "Small businesses and sales teams wanting consistent calendar bookings.",
      "Marketing or sales agencies that want support converting prospect engagement into scheduled business conversations.",
    ],
    cta: {
      headline: "Let's Book More Relevant Conversations",
      subtext:
        "The right prospect. The right conversation. The right next step.",
      buttonText: "Start Booking Meetings",
    },
  },

  {
    slug: "linkedin-reply-follow-up-management",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "Inbox Pipeline",
    title: "LinkedIn Reply & Follow-Up Management",
    tagline: "Turn LinkedIn Conversations into Meaningful Opportunities",
    shortDescription:
      "Manage direct messages and incoming inquiries with timely, professional, human-led communication that never lets a lead go cold.",
    overviewDescription: [
      "Starting a conversation on LinkedIn is only the beginning. Responding at the right time, following up thoughtfully, and maintaining meaningful communication can help keep potential business opportunities moving forward.",
      "At AISMA, we help B2B businesses manage LinkedIn conversations, respond to prospect replies, and maintain consistent follow-ups. Our approach focuses on understanding the context of each conversation and communicating in a way that feels personal, professional, and relevant.",
    ],
    subServices: [
      {
        id: "reply-management",
        title: "1. Reply Management",
        description:
          "Timely, thoughtful responses help create a positive experience for potential clients. We help manage incoming LinkedIn replies and keep conversations moving in the right direction.",
        whatWeDo: [
          "Review and respond to prospect messages according to your communication guidelines.",
          "Provide relevant, professional replies based on the conversation.",
          "Identify responses that require your input or sales team's attention.",
          "Keep communication organized and consistent.",
        ],
        benefit:
          "Help you stay responsive to prospects without having to manage every LinkedIn conversation yourself.",
      },
      {
        id: "prospect-follow-ups",
        title: "2. Prospect Follow-Ups",
        description:
          "Not every prospect responds to the first message. Thoughtful follow-ups can reopen conversations and give interested prospects another opportunity to engage.",
        whatWeDo: [
          "Follow up with prospects who haven't responded, where appropriate.",
          "Personalize follow-up messages based on previous interactions.",
          "Adjust messaging to keep communication relevant and natural.",
          "Respect prospect preferences and stop contacting people who decline further communication.",
        ],
        benefit:
          "Maintain consistent communication without relying on repetitive, pushy, or generic messages.",
      },
      {
        id: "lead-nurturing",
        title: "3. Lead Nurturing",
        description:
          "Some prospects may not be ready to make a decision immediately. Lead nurturing helps maintain professional relationships with relevant contacts over time, so conversations can continue when the timing is right.",
        whatWeDo: [
          "Maintain communication with prospects who have expressed interest.",
          "Share relevant follow-up messages based on their needs and previous discussions.",
          "Track prospect responses, interests, and next steps.",
          "Identify opportunities to reconnect when appropriate.",
        ],
        benefit:
          "Help keep potential opportunities active while building trust through thoughtful, relevant communication.",
      },
      {
        id: "conversation-management",
        title: "4. Conversation Management",
        description:
          "Managing multiple LinkedIn conversations can become difficult without a clear process. We help organize prospect interactions so important replies, follow-ups, and next steps are easier to track.",
        whatWeDo: [
          "Monitor active prospect conversations within the agreed scope.",
          "Organize conversations according to their current stage.",
          "Track replies, follow-up dates, and next actions.",
          "Flag interested prospects and conversations that need your attention.",
        ],
        benefit:
          "Maintain a clearer view of prospect engagement and reduce the chance of overlooking important conversations.",
      },
    ],
    approach: {
      heading: "Our Approach",
      description: [
        "We believe good follow-up is about timing, context, and relevance—not sending more messages for the sake of activity. Every conversation deserves attention to what the prospect has actually said and whether further communication is appropriate.",
        "Our goal is to help your business maintain professional relationships, respond consistently, and recognize opportunities for meaningful sales conversations.",
      ],
    },
    whoCanBenefit: [
      "B2B founders, small businesses, and sales teams that want to manage LinkedIn conversations more efficiently.",
      "Marketing or sales agencies that want to maintain consistent communication with potential customers without manual burnout.",
    ],
    cta: {
      headline: "Let's Keep the Conversation Moving",
      subtext:
        "Better follow-ups. Stronger conversations. More organized prospect management.",
      buttonText: "Optimize Inbound Replies",
    },
  },

  {
    slug: "linkedin-profile-optimization",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "Personal Brand Authority",
    title: "LinkedIn Profile Optimization",
    tagline: "Turn Your LinkedIn Profile into a Professional First Impression",
    shortDescription:
      "Transform your personal and company profiles into high-converting landing pages that build trust, authority, and organic inbound leads.",
    overviewDescription: [
      "Your LinkedIn profile is often one of the first places potential clients, business partners, and decision-makers visit to learn about you. A clear, well-positioned profile helps them understand what you do, who you help, and why they should consider working with you.",
      "At AISMA, we help professionals and business owners present their experience, services, and value more effectively on LinkedIn. From refining your headline to improving your profile's overall messaging, we focus on making your profile professional, engaging, and aligned with your business goals.",
    ],
    subServices: [
      {
        id: "personal-profile-optimization",
        title: "1. Personal Profile Optimization",
        whatWeDo: [
          "Review your existing profile structure and content.",
          "Improve clarity, readability, and professional positioning.",
          "Align your profile messaging with your target audience.",
          "Identify areas that could be improved to create a stronger first impression.",
        ],
        benefit:
          "Present a more polished professional image and help the right people understand what you bring to the table.",
      },
      {
        id: "headline-about-writing",
        title: "2. Headline & About Section Writing",
        whatWeDo: [
          "Write a clear, keyword-relevant professional headline.",
          "Develop an engaging, client-focused About section.",
          "Highlight relevant services, strengths, and differentiators.",
          "Use natural language that reflects your professional identity.",
        ],
        benefit:
          "Help visitors quickly understand your value and give potential clients a reason to explore your profile further.",
      },
      {
        id: "profile-branding",
        title: "3. Profile Branding",
        whatWeDo: [
          "Provide guidance on profile photo and banner presentation.",
          "Recommend relevant banner messaging and visual direction.",
          "Align profile branding with your professional positioning.",
          "Ensure your visual presentation supports a consistent overall impression.",
        ],
        benefit:
          "Create a more cohesive profile that looks professional and communicates your expertise clearly.",
      },
      {
        id: "experience-optimization",
        title: "4. Experience Section Optimization",
        whatWeDo: [
          "Improve role descriptions for clarity and readability.",
          "Highlight relevant responsibilities, skills, and contributions.",
          "Incorporate appropriate industry keywords naturally.",
          "Structure information so visitors can understand your experience easily.",
        ],
        benefit:
          "Present your background more effectively and help potential clients understand the experience relevant to your services.",
      },
      {
        id: "cta-optimization",
        title: "5. Call-to-Action Optimization",
        whatWeDo: [
          "Refine profile messaging to invite relevant inquiries.",
          "Suggest suitable calls to action for your goals.",
          "Improve the wording of contact prompts and profile sections.",
          "Align calls to action with your services and target audience.",
        ],
        benefit:
          "Make the next step clearer for visitors who want to connect, ask questions, or discuss a potential business opportunity.",
      },
    ],
    approach: {
      heading: "Our Approach to LinkedIn Profile Optimization",
      description: [
        "We believe an effective profile starts with clear positioning—not simply adding keywords or rewriting a few sections. We first consider your professional background, target audience, goals, and services. Then we refine your messaging and presentation to create a profile that feels authentic, communicates value, and supports your professional objectives.",
        "Our focus is on clarity, credibility, relevant keywords, and a consistent personal brand rather than exaggerated claims or keyword stuffing.",
      ],
    },
    whoCanBenefit: [
      "B2B founders, consultants, freelancers, sales professionals, and agency owners.",
      "Business leaders who want to strengthen their professional presence and communicate their value more effectively.",
    ],
    cta: {
      headline: "Let's Improve Your LinkedIn Presence",
      subtext:
        "Build a stronger professional presence. Communicate your value. Make a better first impression.",
      buttonText: "Get Profile Audit",
    },
  },

  {
    slug: "linkedin-content-marketing",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "Thought Leadership",
    title: "LinkedIn Content Marketing",
    tagline: "Build Your Professional Presence Through Meaningful Content",
    shortDescription:
      "Strategic content calendars, thought leadership posts, and high-impact carousels that establish your industry authority.",
    overviewDescription: [
      "A strong LinkedIn presence is about more than posting regularly. It's about sharing relevant ideas, communicating your expertise, and creating content that gives the right audience a reason to pay attention.",
      "At AISMA, we help B2B businesses and professionals plan and create LinkedIn content that reflects their expertise, speaks to their target audience, and supports their business goals. From content strategy to professional posts and carousels, our focus is on creating useful, engaging content that sounds authentic—not generic or overly promotional.",
    ],
    subServices: [
      {
        id: "content-strategy",
        title: "1. LinkedIn Content Strategy",
        whatWeDo: [
          "Understand your business, services, and target audience.",
          "Identify relevant content themes and topics.",
          "Plan a balanced mix of educational, insightful, and promotional content.",
          "Align content ideas with your professional positioning and goals.",
        ],
        benefit:
          "Maintain a clearer content direction and share posts that are relevant to the people you want to reach.",
      },
      {
        id: "post-writing",
        title: "2. Professional Post Writing",
        whatWeDo: [
          "Write informative, engaging LinkedIn posts.",
          "Turn your ideas and industry knowledge into clear content.",
          "Structure posts with strong openings and readable formatting.",
          "Keep the tone natural, professional, and appropriate for your audience.",
        ],
        benefit:
          "Communicate your ideas more effectively and maintain a consistent, credible professional presence.",
      },
      {
        id: "calendar-planning",
        title: "3. Content Calendar Planning",
        whatWeDo: [
          "Create a content calendar around your goals and availability.",
          "Organize topics by content theme and purpose.",
          "Plan a suitable publishing frequency.",
          "Map out upcoming posts to simplify content preparation.",
        ],
        benefit:
          "Reduce last-minute content planning and make it easier to publish consistently.",
      },
      {
        id: "thought-leadership",
        title: "4. Thought Leadership Content",
        whatWeDo: [
          "Develop content ideas around your expertise and industry.",
          "Turn professional insights into clear, engaging posts.",
          "Explore relevant challenges, lessons, trends, and practical recommendations.",
          "Maintain a distinctive voice without relying on empty buzzwords.",
        ],
        benefit:
          "Communicate your perspective, demonstrate your knowledge, and build stronger connections with an audience interested in your expertise.",
      },
      {
        id: "carousel-content",
        title: "5. LinkedIn Carousel Content",
        whatWeDo: [
          "Develop carousel topics and concepts.",
          "Structure content into clear, logical slides.",
          "Write concise slide copy with a coherent flow.",
          "Include relevant opening slides and calls to action.",
          "Maintain consistency in messaging and visual direction.",
        ],
        benefit:
          "Present information in an easy-to-follow format and give your audience practical insights they can understand and revisit.",
      },
    ],
    approach: {
      heading: "Our Approach to LinkedIn Content",
      description: [
        "We believe good content starts with understanding the audience and having something worthwhile to say. Rather than producing posts simply to fill a calendar, we focus on relevance, clarity, originality, and a consistent professional voice.",
        "Every content plan is shaped around your goals, your expertise, and the conversations you want to contribute to.",
      ],
    },
    whoCanBenefit: [
      "B2B founders, consultants, business owners, and agency leaders.",
      "Professionals who want to communicate their expertise and maintain a stronger presence on LinkedIn.",
    ],
    cta: {
      headline: "Let's Build Your LinkedIn Content Strategy",
      subtext:
        "Share useful ideas. Communicate your expertise. Build a stronger professional presence.",
      buttonText: "Plan Content Strategy",
    },
  },

  {
    slug: "linkedin-marketing-branding",
    category: "linkedin",
    categoryLabel: "LinkedIn Services",
    badge: "Brand Authority",
    title: "LinkedIn Marketing & Branding",
    tagline: "Build a Stronger Brand and a More Recognizable LinkedIn Presence",
    shortDescription:
      "Company page management, branded graphics, video editing, and organic engagement tailored for enterprise credibility.",
    overviewDescription: [
      "A strong LinkedIn presence helps people understand your business, recognize your expertise, and connect with what you offer. But building that presence takes more than creating a company page or publishing occasional posts. It requires consistent branding, relevant content, and meaningful engagement with your audience.",
      "At AISMA, we help B2B businesses and professionals strengthen their LinkedIn presence through company page management, branded visuals, video content, personal branding, and organic engagement. Our approach focuses on presenting your brand consistently, communicating your value clearly, and building genuine connections with your target audience.",
    ],
    subServices: [
      {
        id: "company-page-mgmt",
        title: "1. Company Page Management",
        whatWeDo: [
          "Optimize company page information and descriptions.",
          "Maintain consistent brand messaging and presentation.",
          "Plan and publish relevant company updates, where included in the agreed scope.",
          "Organize page content around your services, expertise, and audience.",
        ],
        benefit:
          "Present a more professional company image and give potential clients a clearer understanding of your business.",
      },
      {
        id: "graphic-design",
        title: "2. LinkedIn Graphic Design",
        whatWeDo: [
          "Create branded graphics for LinkedIn posts.",
          "Design promotional and educational visuals.",
          "Develop consistent layouts, typography, and visual elements.",
          "Align designs with your messaging and target audience.",
        ],
        benefit:
          "Maintain a more consistent visual identity and present your ideas in a clear, professional format.",
      },
      {
        id: "video-editing",
        title: "3. LinkedIn Video Editing",
        whatWeDo: [
          "Edit supplied video footage for LinkedIn.",
          "Add captions, titles, and relevant on-screen text.",
          "Improve pacing and organize the flow of the content.",
          "Apply suitable branding elements for a consistent presentation.",
        ],
        benefit:
          "Present your message more clearly and create professional video content that fits your LinkedIn presence.",
      },
      {
        id: "personal-branding-mgmt",
        title: "4. Personal Branding",
        whatWeDo: [
          "Clarify personal brand positioning and messaging.",
          "Align profile presentation with professional goals.",
          "Develop content themes around expertise and industry knowledge.",
          "Maintain consistency across profile copy and published content.",
        ],
        benefit:
          "Communicate your professional value more clearly and build a recognizable presence with your target audience.",
      },
      {
        id: "organic-growth",
        title: "5. Organic Engagement & Growth",
        whatWeDo: [
          "Identify relevant industry conversations and posts.",
          "Engage thoughtfully with appropriate content and professionals.",
          "Support consistent publishing and audience interaction.",
          "Review engagement activity to identify opportunities for improvement.",
        ],
        benefit:
          "Build professional relationships, increase relevant audience interaction, and develop your LinkedIn presence without relying on paid advertising or artificial engagement.",
      },
    ],
    approach: {
      heading: "Our Approach to LinkedIn Marketing & Branding",
      description: [
        "We believe strong branding comes from consistency, clarity, and authenticity. Every visual, post, video, and interaction should contribute to a recognizable professional identity and communicate something meaningful to your audience.",
        "Rather than chasing visibility alone, we focus on helping your brand show up consistently, share relevant ideas, and build genuine connections with the people who matter to your business.",
      ],
    },
    whoCanBenefit: [
      "B2B founders, small businesses, consultants, agency owners, and professionals who want to strengthen their brand presence and communicate their expertise more effectively.",
    ],
    cta: {
      headline: "Let's Strengthen Your LinkedIn Brand",
      subtext:
        "Present your brand clearly. Share your expertise. Build meaningful connections.",
      buttonText: "Schedule Brand Consultation",
    },
  },

  // ==========================================
  // INSTAGRAM SERVICES (Pages 25 - 40)
  // ==========================================
  {
    slug: "instagram-outreach-lead-generation",
    category: "instagram",
    categoryLabel: "Instagram Services",
    badge: "Direct Outreach Engine",
    title: "Instagram Outreach & Lead Generation",
    tagline: "Reach the Right People and Turn Conversations into Business Opportunities",
    image: "/images/instagram-outreach.png",
    shortDescription:
      "Targeted DM outreach, lead research, appointment setting, and follow-up management tailored for commercial growth.",
    overviewDescription: [
      "Instagram is more than a platform for sharing content. For many businesses, it can also be a valuable way to discover potential customers, connect with relevant audiences, and start conversations that lead to new business opportunities.",
      "At AISMA, we help businesses identify relevant prospects, initiate personalized Instagram conversations, manage follow-ups, and arrange meetings with interested potential clients. Our approach focuses on thoughtful targeting, natural communication, and building genuine connections rather than sending generic messages.",
    ],
    subServices: [
      {
        id: "ig-outreach",
        title: "1. Instagram Outreach",
        whatWeDo: [
          "Identify relevant prospects based on your target audience.",
          "Develop personalized outreach messages.",
          "Tailor communication to your offering and outreach goals.",
          "Maintain a professional, conversational tone.",
        ],
        benefit:
          "Reach potential customers with more relevant communication and create opportunities to start meaningful conversations.",
      },
      {
        id: "ig-lead-research",
        title: "2. Instagram Lead Research",
        whatWeDo: [
          "Research relevant Instagram accounts and businesses.",
          "Identify prospects based on industry, niche, location, or other agreed criteria.",
          "Review available profile and business information.",
          "Organize prospect details for outreach and follow-up.",
        ],
        benefit:
          "Spend less time searching for potential customers and focus on prospects who are more relevant to your business.",
      },
      {
        id: "ig-lead-gen",
        title: "3. Instagram Lead Generation",
        whatWeDo: [
          "Define prospect criteria based on your ideal customer profile.",
          "Identify potential customers within relevant niches.",
          "Organize prospect information into structured lists.",
          "Support outreach efforts aimed at starting business conversations.",
        ],
        benefit:
          "Build a more organized prospect pipeline and create a foundation for consistent customer acquisition efforts.",
      },
      {
        id: "ig-dm-outreach",
        title: "4. Instagram DM Outreach",
        whatWeDo: [
          "Write personalized Instagram DMs.",
          "Tailor messages to your audience and service offering.",
          "Develop appropriate opening messages and follow-ups.",
          "Keep communication clear, natural, and respectful.",
        ],
        benefit:
          "Make your first contact feel more personal and less like a generic sales pitch.",
      },
      {
        id: "ig-appointment-setting",
        title: "5. Instagram Appointment Setting",
        whatWeDo: [
          "Engage with interested prospects.",
          "Confirm relevant details according to your qualification criteria.",
          "Coordinate suitable meeting times.",
          "Share appointment details with your team.",
        ],
        benefit:
          "Help move relevant prospect conversations toward scheduled business discussions.",
      },
      {
        id: "ig-meeting-booking",
        title: "6. Meeting Booking",
        whatWeDo: [
          "Communicate available meeting options.",
          "Coordinate dates and times with prospects.",
          "Send meeting invitations or booking links.",
          "Handle rescheduling requests where included in the agreed scope.",
        ],
        benefit:
          "Simplify scheduling and reduce the administrative work involved in arranging meetings.",
      },
      {
        id: "ig-follow-up-mgmt",
        title: "7. Follow-Up Management",
        whatWeDo: [
          "Follow up with prospects based on previous interactions.",
          "Personalize messages to reflect the conversation.",
          "Track replies and pending next steps.",
          "Respect prospects who decline or request no further contact.",
        ],
        benefit:
          "Maintain organized communication and help keep relevant conversations moving forward.",
      },
    ],
    approach: {
      heading: "Our Approach to Instagram Outreach",
      description: [
        "We believe successful outreach starts with the right audience and a genuine reason to connect. We focus on researching relevant prospects, personalizing communication, and following up thoughtfully rather than relying on mass messaging.",
        "Our process is shaped around your target audience, business goals, and preferred communication style, with the aim of creating opportunities for meaningful conversations.",
      ],
    },
    whoCanBenefit: [
      "Businesses, agencies, service providers, and brands that use Instagram to reach potential customers and develop professional relationships.",
    ],
    cta: {
      headline: "Let's Start Meaningful Conversations",
      subtext:
        "Find the right audience. Start genuine conversations. Create new opportunities.",
      buttonText: "Start Instagram Outreach",
    },
  },

  {
    slug: "instagram-profile-account-management",
    category: "instagram",
    categoryLabel: "Instagram Services",
    badge: "Account Excellence",
    title: "Instagram Profile & Account Management",
    tagline: "Build a Professional Instagram Presence That Connects with Your Audience",
    shortDescription:
      "Profile optimization, bio branding, community management, and direct message handling for consistent brand presence.",
    overviewDescription: [
      "Your Instagram profile is often the first place potential customers visit to learn about your business. A clear profile, consistent branding, timely responses, and thoughtful community engagement can help people understand what you offer and feel more confident interacting with your brand.",
      "At AISMA, we help businesses maintain a professional and organized Instagram presence through profile optimization, branding, account management, direct message handling, and community engagement. Our focus is on keeping your account aligned with your business goals while creating a welcoming and consistent experience for your audience.",
    ],
    subServices: [
      {
        id: "ig-profile-optimization",
        title: "1. Instagram Profile Optimization",
        whatWeDo: [
          "Review your profile structure and presentation.",
          "Improve profile information to communicate your services clearly.",
          "Refine relevant keywords and account details naturally.",
          "Recommend improvements to highlights, links, and calls to action.",
        ],
        benefit:
          "Make your profile easier to understand and help visitors find the information they need.",
      },
      {
        id: "bio-profile-branding",
        title: "2. Bio & Profile Branding",
        whatWeDo: [
          "Write a clear, audience-focused Instagram bio.",
          "Refine your profile name and description where appropriate.",
          "Recommend profile photo and visual branding improvements.",
          "Organize Story Highlights to showcase useful information.",
          "Align your profile messaging with your brand identity.",
        ],
        benefit:
          "Present a more recognizable brand and help potential customers understand your value at a glance.",
      },
      {
        id: "ig-account-mgmt",
        title: "3. Instagram Account Management",
        whatWeDo: [
          "Coordinate scheduled posts and account updates.",
          "Maintain profile information and brand consistency.",
          "Organize content publishing according to an agreed calendar.",
          "Monitor account activity and identify tasks requiring attention.",
        ],
        benefit:
          "Keep your account organized and reduce the time you spend managing routine Instagram activities.",
      },
      {
        id: "ig-dm-reply-mgmt",
        title: "4. Instagram DM & Reply Management",
        whatWeDo: [
          "Monitor and respond to relevant direct messages within the agreed scope.",
          "Answer routine inquiries using approved information.",
          "Identify potential customer inquiries and interested prospects.",
          "Escalate complex questions or sales opportunities to the appropriate person.",
          "Keep conversations organized and professional.",
        ],
        benefit:
          "Help your business stay responsive, maintain better communication, and avoid overlooking important inquiries.",
      },
      {
        id: "ig-community-mgmt",
        title: "5. Instagram Community Management",
        whatWeDo: [
          "Monitor relevant comments and audience interactions.",
          "Respond to routine comments according to your guidelines.",
          "Engage appropriately with relevant audience activity.",
          "Flag complaints, sensitive issues, and inquiries requiring your attention.",
          "Help maintain a respectful and professional community environment.",
        ],
        benefit:
          "Create a more engaging experience for your audience and help build stronger relationships with people interested in your business.",
      },
    ],
    approach: {
      heading: "Our Approach to Instagram Management",
      description: [
        "We believe effective account management is about more than keeping a profile active. It means presenting your business clearly, maintaining consistent communication, and making it easier for people to interact with your brand.",
        "We tailor our approach to your goals, audience, brand voice, and preferred workflow, with an emphasis on professionalism, responsiveness, and consistency.",
      ],
    },
    whoCanBenefit: [
      "Small businesses, B2B companies, agencies, service providers, and brands that want to maintain a professional Instagram presence without handling every routine task themselves.",
    ],
    cta: {
      headline: "Let's Strengthen Your Instagram Presence",
      subtext:
        "Present your brand clearly. Stay connected. Create a better audience experience.",
      buttonText: "Manage My Account",
    },
  },

  {
    slug: "instagram-content-marketing-creation",
    category: "instagram",
    categoryLabel: "Instagram Services",
    badge: "Creative Production",
    title: "Instagram Content Marketing & Creation",
    tagline: "Create Meaningful Instagram Content That Represents Your Brand",
    shortDescription:
      "Strategic content calendars, high-converting carousels, engaging Reels, Story sequences, and audience-first captions.",
    overviewDescription: [
      "Effective Instagram content is about more than posting regularly. It's about sharing the right message, presenting your brand consistently, and creating content that gives your audience a reason to pay attention.",
      "At AISMA, we help businesses plan, create, and organize Instagram content that reflects their brand identity and speaks to their target audience. From content strategy and copywriting to carousel designs, Reels, videos, and Stories, we bring the creative and planning elements together to support a consistent Instagram presence.",
    ],
    subServices: [
      {
        id: "ig-content-strategy",
        title: "1. Instagram Content Strategy",
        whatWeDo: [
          "Understand your business, audience, and content goals.",
          "Identify relevant content topics and themes.",
          "Plan content around your services, expertise, and brand message.",
          "Recommend suitable content formats for different topics.",
          "Develop content ideas that support awareness, engagement, and audience education.",
        ],
        benefit:
          "Give your content a clearer direction and help ensure that each post serves a purpose.",
      },
      {
        id: "ig-content-calendar",
        title: "2. Instagram Content Calendar",
        whatWeDo: [
          "Plan upcoming posts, Reels, and Stories.",
          "Organize content themes and publishing dates.",
          "Outline topics, formats, and key messages.",
          "Coordinate content around relevant campaigns, launches, or business updates.",
          "Adjust the calendar according to your priorities and feedback.",
        ],
        benefit:
          "Stay organized, maintain a more consistent posting schedule, and spend less time deciding what to publish next.",
      },
      {
        id: "ig-post-carousel",
        title: "3. Instagram Post & Carousel Design",
        whatWeDo: [
          "Design branded Instagram posts.",
          "Create multi-slide carousels to explain ideas, share tips, and present useful information.",
          "Use consistent fonts, colors, layouts, and visual elements.",
          "Organize information into clear, readable slides.",
          "Adapt designs to your brand identity and content objectives.",
        ],
        benefit:
          "Present your ideas professionally and make your content easier to understand and recognize.",
      },
      {
        id: "ig-reels-creation",
        title: "4. Instagram Reels Creation",
        whatWeDo: [
          "Develop relevant Reel concepts and content ideas.",
          "Structure short-form videos around a clear message.",
          "Create or assemble Reels using available footage and approved assets.",
          "Add text overlays, subtitles, and suitable visual elements where needed.",
          "Adapt the format and pacing to the content and intended audience.",
        ],
        benefit:
          "Communicate your message through engaging short-form video content that fits your brand and content strategy.",
      },
      {
        id: "ig-video-editing",
        title: "5. Instagram Video Editing",
        whatWeDo: [
          "Edit supplied video footage for Instagram.",
          "Trim clips and improve the flow of the content.",
          "Add captions, text overlays, transitions, and branding elements where appropriate.",
          "Format videos for suitable Instagram placements.",
          "Maintain a consistent visual style across your video content.",
        ],
        benefit:
          "Turn raw footage into polished, easy-to-follow videos that present your business professionally.",
      },
      {
        id: "ig-story-design",
        title: "6. Instagram Story Design",
        whatWeDo: [
          "Design branded Story graphics.",
          "Create Stories for announcements, tips, offers, and business updates.",
          "Develop interactive Story concepts using relevant platform features.",
          "Maintain consistency with your overall visual identity.",
          "Prepare Story sequences to communicate information step by step.",
        ],
        benefit:
          "Share timely information, keep your audience informed, and create more opportunities for interaction.",
      },
      {
        id: "ig-caption-writing",
        title: "7. Caption & Content Writing",
        whatWeDo: [
          "Write Instagram captions tailored to your audience and brand voice.",
          "Develop clear, useful, and engaging post copy.",
          "Write carousel slide text and Reel scripts where required.",
          "Incorporate relevant keywords and hashtags naturally when appropriate.",
          "Include calls to action that fit the content's purpose.",
        ],
        benefit:
          "Communicate your message more clearly and give your audience a meaningful reason to engage with your content.",
      },
    ],
    approach: {
      heading: "Our Approach to Instagram Content",
      description: [
        "At AISMA, we believe good content starts with understanding your business, not simply following trends. We focus on creating content that is relevant to your audience, consistent with your brand, and aligned with your goals.",
        "Our approach combines planning, thoughtful writing, purposeful design, and organized execution. Whether your priority is explaining your services, sharing your expertise, strengthening brand awareness, or maintaining a consistent presence, we tailor content to suit your needs.",
      ],
    },
    whoCanBenefit: [
      "Small and growing businesses looking to maintain a consistent online presence.",
      "B2B companies and service providers that need to explain their expertise clearly.",
      "Marketing and sales agencies seeking organized content support.",
      "Personal brands and consultants who want to communicate their knowledge and professional identity.",
      "Brands and online businesses that need creative, well-planned Instagram content.",
    ],
    cta: {
      headline: "Let's Create Content With Purpose",
      subtext:
        "Plan with purpose. Create with consistency. Communicate your brand clearly.",
      buttonText: "Order Content Engine",
    },
  },

  {
    slug: "instagram-growth-partnerships",
    category: "instagram",
    categoryLabel: "Instagram Services",
    badge: "Organic Scale",
    title: "Instagram Growth & Partnerships",
    tagline: "Grow Your Instagram Presence and Build Meaningful Brand Connections",
    shortDescription:
      "Organic growth, influencer outreach, strategic brand collaborations, and comprehensive performance analytics.",
    overviewDescription: [
      "Growing on Instagram takes more than frequent posting. It requires understanding your audience, encouraging genuine engagement, identifying relevant collaboration opportunities, and learning from your account's performance.",
      "At AISMA, we help businesses strengthen their Instagram presence through organic growth strategies, audience engagement, influencer outreach, brand partnerships, collaboration management, and performance reporting. Our focus is on helping you reach relevant audiences, build valuable relationships, and make informed decisions about your Instagram activities.",
    ],
    subServices: [
      {
        id: "ig-organic-growth",
        title: "1. Instagram Organic Growth",
        whatWeDo: [
          "Review your current Instagram presence and growth objectives.",
          "Identify relevant audience groups and niche communities.",
          "Recommend organic growth activities aligned with your brand.",
          "Suggest opportunities to improve profile discovery and audience relevance.",
          "Monitor growth patterns and adjust activities based on performance.",
        ],
        benefit:
          "Build a more relevant Instagram presence through consistent, audience-focused activities rather than relying on artificial followers or engagement shortcuts.",
      },
      {
        id: "ig-audience-engagement",
        title: "2. Audience Engagement",
        whatWeDo: [
          "Identify relevant conversations and audience interactions.",
          "Support engagement with comments and posts that relate to your brand.",
          "Encourage appropriate two-way communication.",
          "Help identify recurring audience interests and questions.",
          "Maintain a professional, consistent approach to community interaction.",
        ],
        benefit:
          "Strengthen relationships with your audience and gain a better understanding of the people engaging with your business.",
      },
      {
        id: "ig-influencer-outreach",
        title: "3. Influencer Outreach",
        whatWeDo: [
          "Research influencers whose content and audience align with your brand.",
          "Review public profile information and content relevance.",
          "Prepare personalized collaboration outreach messages.",
          "Introduce your brand and communicate potential partnership ideas.",
          "Organize responses and track outreach progress.",
        ],
        benefit:
          "Identify relevant creators and establish initial conversations about potential collaborations without relying on generic outreach.",
      },
      {
        id: "ig-brand-partnerships",
        title: "4. Brand Partnerships",
        whatWeDo: [
          "Research businesses and brands with complementary audiences.",
          "Identify potential collaboration opportunities.",
          "Prepare tailored partnership proposals and outreach messages.",
          "Communicate possible collaboration ideas based on shared interests.",
          "Organize partnership discussions and track next steps.",
        ],
        benefit:
          "Explore relationships with relevant brands that may create mutual value and support your wider marketing goals.",
      },
      {
        id: "ig-collab-mgmt",
        title: "5. Collaboration Management",
        whatWeDo: [
          "Coordinate communication with creators and potential partners.",
          "Track responses, agreed deliverables, and important dates.",
          "Help organize campaign timelines and collaboration details.",
          "Follow up on outstanding items where appropriate.",
          "Maintain clear records of collaboration progress.",
        ],
        benefit:
          "Keep partnership activities organized and make it easier to manage communication throughout the collaboration process.",
      },
      {
        id: "ig-performance-reporting",
        title: "6. Instagram Performance Reporting",
        whatWeDo: [
          "Review available Instagram Insights and relevant performance metrics.",
          "Track audience growth, reach, impressions, and engagement where available.",
          "Review content performance to identify useful patterns.",
          "Summarize progress over an agreed reporting period.",
          "Highlight observations and potential areas for improvement.",
        ],
        benefit:
          "Gain a clearer understanding of your Instagram performance and use available data to guide future decisions.",
      },
    ],
    approach: {
      heading: "Our Approach to Instagram Growth & Partnerships",
      description: [
        "At AISMA, we believe sustainable growth begins with relevance. We focus on understanding your audience, identifying appropriate engagement opportunities, and building relationships that make sense for your business.",
        "Our approach combines audience research, thoughtful communication, organized collaboration, and performance review. We prioritize genuine interactions and relevant partnerships rather than artificial engagement, indiscriminate outreach, or unsupported growth promises.",
      ],
    },
    whoCanBenefit: [
      "Small and growing businesses looking to reach a more relevant audience.",
      "B2B companies and service providers seeking industry connections and collaboration opportunities.",
      "Brands and online businesses interested in creator partnerships and audience development.",
      "Marketing agencies needing support with outreach and collaboration coordination.",
      "Personal brands and consultants looking to expand their professional presence.",
    ],
    cta: {
      headline: "Let's Build Meaningful Connections on Instagram",
      subtext:
        "Reach relevant audiences. Build valuable partnerships. Grow with purpose.",
      buttonText: "Explore Growth Partnerships",
    },
  },

  // ==========================================
  // EMAIL SERVICES (Pages 41 - 60)
  // ==========================================
  {
    slug: "email-outreach",
    category: "email",
    categoryLabel: "Email Services",
    badge: "Cold Email Outbound",
    title: "Email Outreach",
    tagline: "Reach the Right Decision-Makers Through Personalized Email Outreach",
    image: "/images/email-outreach.png",
    shortDescription:
      "Targeted cold email campaigns, deep prospect research, human-written copywriting, and structured follow-up sequences.",
    overviewDescription: [
      "Reaching potential customers by email takes more than sending messages to a long list of contacts. It requires identifying relevant prospects, understanding their business context, and communicating your value in a clear and personalized way.",
      "At AISMA, we help B2B businesses connect with potential customers through targeted cold email outreach, prospect research, email copywriting, and structured follow-up sequences. Our focus is on helping you reach relevant decision-makers with professional, purposeful emails that create opportunities for meaningful business conversations.",
    ],
    subServices: [
      {
        id: "b2b-cold-email",
        title: "1. B2B Cold Email Outreach",
        whatWeDo: [
          "Identify and organize prospects based on your target audience.",
          "Research relevant companies and decision-makers.",
          "Prepare outreach emails aligned with your offering and campaign goals.",
          "Personalize messages to reflect the prospect's business context.",
          "Organize outreach activities and track responses, where included in the agreed scope.",
        ],
        benefit:
          "Approach relevant businesses with a clear message and a more structured process for starting new sales conversations.",
      },
      {
        id: "personalized-email-outreach",
        title: "2. Personalized Email Outreach",
        whatWeDo: [
          "Tailor email messages to your target audience and ideal customer profile.",
          "Use relevant prospect or company research to inform personalization.",
          "Communicate your value proposition clearly and naturally.",
          "Adapt messaging to different industries, roles, or business needs.",
          "Maintain a professional tone that reflects your brand.",
        ],
        benefit:
          "Make your outreach more relevant and give prospects a clearer reason to consider your message.",
      },
      {
        id: "prospect-email-research",
        title: "3. Prospect Email Research",
        whatWeDo: [
          "Research companies that match your target market.",
          "Identify relevant decision-makers and professional roles.",
          "Find and organize business email addresses using appropriate research methods.",
          "Check available information for accuracy and relevance.",
          "Structure prospect data into organized lists for outreach.",
        ],
        benefit:
          "Spend less time searching for contacts and build a more organized prospect list for your email campaigns.",
      },
      {
        id: "email-copywriting",
        title: "4. Email Copywriting",
        whatWeDo: [
          "Write concise, audience-focused cold emails.",
          "Develop subject lines relevant to the message.",
          "Communicate your offering and value proposition clearly.",
          "Create different message variations for relevant audience segments.",
          "Include natural calls to action that invite an appropriate response.",
        ],
        benefit:
          "Communicate your value more clearly through emails designed around your audience and campaign objectives.",
      },
      {
        id: "follow-up-email-sequences",
        title: "5. Follow-Up Email Sequences",
        whatWeDo: [
          "Plan follow-up messages around your campaign goals.",
          "Write follow-ups that add context rather than simply repeat the first email.",
          "Set an appropriate sequence and timing based on your outreach strategy.",
          "Adapt follow-ups to previous interactions where relevant.",
          "Maintain organized records of replies and stop further contact when requested.",
        ],
        benefit:
          "Keep outreach organized and create additional opportunities for a response while respecting recipients' preferences.",
      },
    ],
    approach: {
      heading: "Our Approach to Email Outreach",
      description: [
        "At AISMA, we believe effective email outreach begins with relevance, not volume. We focus on understanding your target audience, researching suitable prospects, and writing messages that explain why your offering may matter to them.",
        "Our approach combines prospect research, personalized copywriting, structured follow-ups, and organized campaign execution. We aim to make every message purposeful rather than relying on generic templates or indiscriminate mass emailing.",
        "We also recognize the importance of responsible outreach, including appropriate contact sourcing, email deliverability practices, and compliance with applicable privacy and email marketing requirements.",
      ],
    },
    whoCanBenefit: [
      "B2B founders and small businesses looking to reach potential customers.",
      "Sales and marketing agencies that need support with prospecting and outreach campaigns.",
      "B2B service providers seeking to introduce their services to relevant companies.",
      "Growing businesses entering new industries or target markets.",
      "Sales teams that need help with prospect research, email writing, and follow-up execution.",
    ],
    cta: {
      headline: "Let's Start More Relevant Business Conversations",
      subtext:
        "Research the right prospects. Write with purpose. Start meaningful conversations.",
      buttonText: "Launch Cold Email Engine",
    },
  },

  {
    slug: "email-lead-generation",
    category: "email",
    categoryLabel: "Email Services",
    badge: "Verified Contact Discovery",
    title: "Email Lead Generation",
    tagline: "Find the Right Business Contacts for Your Next Sales Opportunity",
    shortDescription:
      "B2B email list building, verified business emails, decision-maker research, and rigorous lead qualification.",
    overviewDescription: [
      "Successful email campaigns begin with the right contacts. Before reaching out to potential customers, businesses need to identify relevant companies, find the right decision-makers, and build accurate contact lists that align with their target market.",
      "At AISMA, we help B2B businesses build targeted prospect lists through business research, decision-maker identification, business email finding, email verification, and lead qualification. Our focus is on organizing relevant contact information so your outreach efforts can start with a stronger foundation.",
    ],
    subServices: [
      {
        id: "b2b-email-lead-gen",
        title: "1. B2B Email Lead Generation",
        whatWeDo: [
          "Understand your ideal customer profile and target market.",
          "Research companies that match your business criteria.",
          "Identify relevant decision-makers and professional contacts.",
          "Gather available business contact information.",
          "Organize prospect data into a structured, usable list.",
        ],
        benefit:
          "Build a more focused prospect pipeline and make it easier to identify businesses that may be a good fit for your offering.",
      },
      {
        id: "email-list-building-mgmt",
        title: "2. Email List Building",
        whatWeDo: [
          "Build prospect lists based on your industry, location, company size, or other agreed criteria.",
          "Research relevant companies and potential customers.",
          "Collect available business contact details.",
          "Organize data into a consistent spreadsheet or agreed format.",
          "Review lists for duplicates, missing information, and relevance.",
        ],
        benefit:
          "Save time on manual research and receive organized prospect lists tailored to your campaign requirements.",
      },
      {
        id: "decision-maker-email-research",
        title: "3. Decision-Maker Research",
        whatWeDo: [
          "Research companies within your target market.",
          "Identify relevant job titles, departments, and professional roles.",
          "Find suitable contacts involved in purchasing or evaluating relevant services.",
          "Match prospects to your agreed targeting criteria.",
          "Organize contact details alongside relevant company information.",
        ],
        benefit:
          "Focus your prospecting on relevant people instead of relying on general company contact lists.",
      },
      {
        id: "business-email-finding",
        title: "4. Business Email Finding",
        whatWeDo: [
          "Research business email addresses for relevant professional contacts.",
          "Use appropriate sources and research methods.",
          "Match email addresses to the correct contact and company where possible.",
          "Organize findings alongside prospect information.",
          "Flag unavailable or uncertain contact details where identified.",
        ],
        benefit:
          "Build a more useful contact database for targeted B2B outreach while maintaining a clear record of your prospect research.",
      },
      {
        id: "email-verification-smtp",
        title: "5. Email Verification",
        whatWeDo: [
          "Check collected addresses using available verification methods or tools.",
          "Identify addresses flagged as invalid or potentially risky.",
          "Review duplicate and incomplete entries.",
          "Organize verification results alongside contact data.",
          "Flag uncertain results for review before campaign use.",
        ],
        benefit:
          "Improve the quality of your email lists and reduce the likelihood of avoidable sending errors.",
      },
      {
        id: "email-lead-qualification",
        title: "6. Lead Qualification",
        whatWeDo: [
          "Define qualification criteria with your team.",
          "Review company and contact information against your ideal customer profile.",
          "Assess relevant factors such as industry, role, company size, or service fit.",
          "Categorize prospects according to the agreed requirements.",
          "Organize qualified and unqualified records for easier review.",
        ],
        benefit:
          "Help your team prioritize relevant prospects and spend less time reviewing contacts that don't match your target market.",
      },
    ],
    approach: {
      heading: "Our Approach to Email Lead Generation",
      description: [
        "At AISMA, we believe a useful lead list is built on relevance and data quality, not simply the number of contacts collected.",
        "We start by understanding your ideal customer profile, then research suitable businesses, identify relevant decision-makers, gather available business contact information, and organize the results according to your requirements.",
        "Where email verification and lead qualification are included, we use them to help improve list quality and targeting. We also prioritize responsible data sourcing and respect applicable privacy and outreach requirements.",
      ],
    },
    whoCanBenefit: [
      "B2B founders and small businesses looking for relevant business contacts.",
      "Sales and marketing agencies that need prospect research and list-building support.",
      "B2B service providers targeting specific industries or decision-makers.",
      "Growing businesses exploring new markets or customer segments.",
      "Sales teams that need organized, research-based prospect data.",
    ],
    cta: {
      headline: "Build a Better Foundation for Your Outreach",
      subtext:
        "Find relevant businesses. Identify the right contacts. Build a stronger prospect list.",
      buttonText: "Request Verified Lead List",
    },
  },

  {
    slug: "email-campaign-management",
    category: "email",
    categoryLabel: "Email Services",
    badge: "Campaign Infrastructure",
    title: "Email Campaign Management",
    tagline: "Plan, Manage, and Improve Your Email Campaigns",
    shortDescription:
      "Campaign setup, sequence authoring, automated sending schedules, and deep deliverability and engagement reporting.",
    overviewDescription: [
      "An effective email campaign needs more than a well-written message. It requires clear objectives, a structured sequence, careful setup, appropriate scheduling, and regular performance review.",
      "At AISMA, we help businesses plan and manage email campaigns with an organized approach that keeps messaging, timing, and campaign goals aligned. From campaign planning and setup to email sequence creation, scheduling, and performance reporting, we help bring the key elements of your email campaigns together.",
    ],
    subServices: [
      {
        id: "campaign-planning",
        title: "1. Email Campaign Planning",
        whatWeDo: [
          "Understand your campaign objectives and target audience.",
          "Define the purpose and key message of each campaign.",
          "Plan campaign structure and email content.",
          "Identify relevant audience segments.",
          "Develop a campaign plan based on your goals and timeline.",
        ],
        benefit:
          "Give your email campaigns a clear direction and ensure that your messaging is aligned with your business objectives.",
      },
      {
        id: "campaign-setup-mgmt",
        title: "2. Campaign Setup & Management",
        whatWeDo: [
          "Organize campaign content and recipient segments.",
          "Assist with campaign configuration in your chosen email platform.",
          "Review subject lines, email copy, links, and calls to action.",
          "Check available campaign settings before sending.",
          "Manage agreed campaign activities and updates.",
        ],
        benefit:
          "Keep campaign execution organized and reduce avoidable errors before your emails reach their intended audience.",
      },
      {
        id: "email-sequence-creation",
        title: "3. Email Sequence Creation",
        whatWeDo: [
          "Develop email sequences based on your campaign goals.",
          "Write messages for different stages of the campaign.",
          "Create relevant follow-ups that add context or useful information.",
          "Maintain consistency in tone and messaging.",
          "Plan appropriate next steps for different audience responses.",
        ],
        benefit:
          "Create a more consistent communication journey that gives recipients useful context at each stage.",
      },
      {
        id: "campaign-scheduling",
        title: "4. Campaign Scheduling",
        whatWeDo: [
          "Plan campaign dates and sending schedules.",
          "Coordinate email timing with campaign objectives.",
          "Organize sequence timing and intervals.",
          "Review scheduling settings before launch.",
          "Adjust planned schedules when business priorities change.",
        ],
        benefit:
          "Maintain a more organized sending schedule and coordinate email activities with your wider marketing plans.",
      },
      {
        id: "campaign-reporting",
        title: "5. Campaign Performance Reporting",
        whatWeDo: [
          "Review available campaign performance metrics.",
          "Track delivery, bounce rates, opens, clicks, and replies where supported by the platform.",
          "Compare campaign performance across relevant reporting periods.",
          "Identify patterns and areas for improvement.",
          "Summarize findings and recommend practical next steps.",
        ],
        benefit:
          "Gain a clearer understanding of campaign performance and use available data to guide future email marketing decisions.",
      },
    ],
    approach: {
      heading: "Our Approach to Email Campaign Management",
      description: [
        "At AISMA, we believe that email campaigns work best when planning, messaging, execution, and measurement support one another.",
        "We begin by understanding your goals and audience, then organize the campaign structure, prepare the content, coordinate scheduling, and review available performance data. Our approach emphasizes clear communication, careful execution, and continuous improvement based on what the data indicates.",
        "We also recognize the importance of responsible email practices, including appropriate audience targeting, relevant messaging, unsubscribe handling where applicable, and compliance with relevant email marketing and privacy requirements.",
      ],
    },
    whoCanBenefit: [
      "B2B businesses looking to organize email marketing and sales campaigns.",
      "Small and growing companies that need support managing campaign activities.",
      "Marketing agencies seeking help with email campaign execution.",
      "Service providers communicating their offerings to relevant business audiences.",
      "Sales and marketing teams that want a more structured approach to email communication.",
    ],
    cta: {
      headline: "Let's Make Your Email Campaigns More Organized",
      subtext:
        "Plan with clarity. Execute with care. Improve with insight.",
      buttonText: "Set Up Campaigns",
    },
  },

  {
    slug: "email-marketing",
    category: "email",
    categoryLabel: "Email Services",
    badge: "Audience Retention & Nurturing",
    title: "Email Marketing",
    tagline: "Build Stronger Customer Relationships Through Meaningful Email Marketing",
    shortDescription:
      "Promotional broadcasts, editorial newsletters, copy development, and customer retention engagement sequences.",
    overviewDescription: [
      "Email marketing gives businesses a direct way to share useful information, communicate updates, promote their offerings, and stay connected with their audience. When the content is relevant and the message is well planned, email can support ongoing customer relationships beyond a single interaction.",
      "At AISMA, we help businesses plan and create email marketing content that reflects their brand, speaks to their audience, and supports their marketing objectives. From email marketing strategy and promotional campaigns to newsletters and customer engagement emails, we focus on clear messaging and purposeful communication.",
    ],
    subServices: [
      {
        id: "email-marketing-strategy",
        title: "1. Email Marketing Strategy",
        whatWeDo: [
          "Understand your business goals and target audience.",
          "Define email marketing objectives and key messages.",
          "Identify relevant email types and content themes.",
          "Plan communication around audience needs and business priorities.",
          "Recommend a consistent approach to email content and scheduling.",
        ],
        benefit:
          "Give your email marketing a clear direction and help ensure that your communications serve a meaningful purpose.",
      },
      {
        id: "promotional-campaigns",
        title: "2. Promotional Email Campaigns",
        whatWeDo: [
          "Plan promotional email messages around your campaign goals.",
          "Write clear subject lines and persuasive email copy.",
          "Highlight relevant products, services, offers, or announcements.",
          "Include calls to action suited to the campaign objective.",
          "Adapt messaging to different audience segments where appropriate.",
        ],
        benefit:
          "Communicate your offerings clearly and help recipients understand the value of taking the next step.",
      },
      {
        id: "newsletter-creation",
        title: "3. Newsletter Creation",
        whatWeDo: [
          "Plan newsletter topics and content structure.",
          "Write newsletter copy in your brand's voice.",
          "Organize updates, insights, announcements, and featured content.",
          "Create clear headings and calls to action.",
          "Help maintain a consistent newsletter format and publishing schedule.",
        ],
        benefit:
          "Keep your audience informed and provide useful reasons for subscribers to remain connected with your business.",
      },
      {
        id: "email-copy-writing",
        title: "4. Email Content Writing",
        whatWeDo: [
          "Write email copy tailored to your audience and objectives.",
          "Develop subject lines and preview text where needed.",
          "Structure content for clarity and readability.",
          "Adapt tone and messaging to your brand identity.",
          "Write calls to action that guide readers toward an appropriate next step.",
        ],
        benefit:
          "Communicate your message more effectively through email content that is purposeful, easy to follow, and consistent with your brand.",
      },
      {
        id: "customer-engagement-emails",
        title: "5. Customer Engagement Emails",
        whatWeDo: [
          "Develop emails for customer updates and announcements.",
          "Create welcome emails and introductory sequences where appropriate.",
          "Write follow-up messages after relevant customer interactions.",
          "Prepare educational emails that help customers understand your services or products.",
          "Plan re-engagement messages for eligible subscribers where suitable.",
        ],
        benefit:
          "Maintain more consistent communication, share relevant information, and support stronger long-term customer relationships.",
      },
    ],
    approach: {
      heading: "Our Approach to Email Marketing",
      description: [
        "At AISMA, we believe effective email marketing is built on relevance, consistency, and clear communication. Every email should have a purpose, whether that means informing subscribers, highlighting an offering, sharing useful insights, or helping customers take the next step.",
        "We focus on understanding your audience, developing a suitable content direction, and creating messages that reflect your brand's voice. Our approach prioritizes useful communication over unnecessary promotions and supports responsible practices, including appropriate subscriber consent, relevant targeting, and unsubscribe options where required.",
      ],
    },
    whoCanBenefit: [
      "B2B businesses looking to communicate updates, expertise, and service offerings.",
      "Small and growing companies that want a more consistent email marketing approach.",
      "Marketing agencies seeking support with email strategy and content creation.",
      "Service providers and consultants sharing insights and maintaining customer relationships.",
      "Online businesses and brands promoting products, announcements, and relevant offers.",
    ],
    cta: {
      headline: "Let's Make Every Email More Meaningful",
      subtext:
        "Share useful information. Communicate with purpose. Build lasting connections.",
      buttonText: "Design Email Strategy",
    },
  },

  {
    slug: "email-sequences-follow-up-management",
    category: "email",
    categoryLabel: "Email Services",
    badge: "Automation & Closing",
    title: "Email Sequences & Follow-Up Management",
    tagline: "Turn Email Conversations into Meaningful Business Opportunities",
    shortDescription:
      "Human-sounding email sequences, CRM integration, reply triage, and sales calendar scheduling.",
    overviewDescription: [
      "Sending the first email is only one part of the sales process. Following up thoughtfully, nurturing interested prospects, managing replies, and coordinating meetings can help businesses keep conversations moving toward a clear next step.",
      "At AISMA, we help B2B businesses manage email communication throughout the prospect journey. From natural-sounding email sequences and structured follow-ups to lead nurturing, CRM coordination, reply management, and appointment setting, our focus is on organized communication that supports genuine business relationships.",
    ],
    subServices: [
      {
        id: "human-sounding-sequences",
        title: "1. Human-Sounding Email Sequences",
        whatWeDo: [
          "Create personalized email sequences based on your audience and campaign goals.",
          "Write concise, conversational messages that reflect your brand's voice.",
          "Structure emails around relevant information, questions, or next steps.",
          "Adapt messaging to different prospect segments where appropriate.",
          "Keep communication professional, clear, and focused on the recipient's needs.",
        ],
        benefit:
          "Communicate in a more personal and thoughtful way while keeping your email sequences organized and consistent.",
      },
      {
        id: "follow-up-automation",
        title: "2. Follow-Up Automation",
        whatWeDo: [
          "Plan follow-up sequences and sending intervals.",
          "Configure agreed follow-up workflows using supported email tools.",
          "Organize follow-up conditions based on campaign requirements.",
          "Review available settings for replies and sequence stopping rules.",
          "Adjust workflows to align with your outreach process.",
        ],
        benefit:
          "Reduce repetitive manual tasks and maintain a more consistent follow-up process.",
      },
      {
        id: "lead-nurturing-emails",
        title: "3. Lead Nurturing Emails",
        whatWeDo: [
          "Develop nurturing sequences around prospect interests and business needs.",
          "Share relevant information about your services, expertise, or solutions.",
          "Plan follow-ups based on previous interactions and engagement.",
          "Adapt messages to different stages of the prospect journey.",
          "Identify when a prospect may be ready for a sales conversation.",
        ],
        benefit:
          "Keep communication useful and relevant while helping interested prospects understand your offering and decide on their next step.",
      },
      {
        id: "crm-email-integration",
        title: "4. CRM & Email Integration",
        whatWeDo: [
          "Help organize prospect records and email activity within your CRM.",
          "Coordinate contact fields and relevant lead information.",
          "Support available email-to-CRM integrations.",
          "Maintain records of replies, follow-ups, and next actions where supported.",
          "Help establish a clearer workflow for managing prospect communication.",
        ],
        benefit:
          "Improve visibility into prospect interactions and make it easier to keep track of conversations and follow-up responsibilities.",
      },
      {
        id: "email-reply-management",
        title: "5. Email Reply Management",
        whatWeDo: [
          "Review and categorize incoming email replies.",
          "Draft or manage responses according to your communication guidelines.",
          "Identify interested prospects and requests for further information.",
          "Flag objections, questions, and replies requiring your input.",
          "Update conversation status and next steps where included in the agreed workflow.",
        ],
        benefit:
          "Keep prospect conversations organized, respond more consistently, and reduce the risk of overlooking important replies.",
      },
      {
        id: "email-appointment-booking",
        title: "6. Appointment Setting & Meeting Booking",
        whatWeDo: [
          "Identify interested prospects who meet your agreed qualification criteria.",
          "Coordinate suitable meeting dates and times.",
          "Communicate scheduling details with prospects.",
          "Send booking links or calendar invitations where appropriate.",
          "Track confirmed meetings and communicate any changes or rescheduling requests.",
        ],
        benefit:
          "Make it easier to move relevant email conversations toward scheduled sales discussions while keeping the process organized.",
      },
    ],
    approach: {
      heading: "Our Approach to Email Follow-Up Management",
      description: [
        "At AISMA, we believe effective follow-up is about timing, context, and relevance—not simply sending more emails.",
        "We focus on understanding your sales process, creating natural-sounding messages, and organizing communication around each prospect's interactions. Where automation is used, workflows should support personalized communication rather than make every interaction feel automated.",
        "We also prioritize responsible email practices. Follow-ups should respect recipient preferences, stop when someone opts out or declines further contact, and follow applicable email marketing and privacy requirements.",
      ],
    },
    whoCanBenefit: [
      "B2B founders and small businesses that need an organized prospect follow-up process.",
      "Sales and marketing agencies seeking support with client outreach workflows.",
      "B2B service providers managing multiple prospect conversations.",
      "Sales teams that need help managing replies and coordinating meetings.",
      "Growing businesses looking to connect email activity with their CRM and sales process.",
    ],
    cta: {
      headline: "Keep Your Email Conversations Moving Forward",
      subtext:
        "Follow up thoughtfully. Manage conversations clearly. Move opportunities forward.",
      buttonText: "Connect Sequences & CRM",
    },
  },
];
