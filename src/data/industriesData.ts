export type IndustryCategory =
  | "All"
  | "Tech & AI"
  | "Corporate & Finance"
  | "Industrial & Supply Chain"
  | "Creative & Agency"
  | "Consumer & Lifestyle";

export interface IndustryItem {
  id: number;
  name: string;
  category: IndustryCategory;
  description: string;
  targetFocus: string;
  tag: string;
}

export interface IndustriesPageData {
  title: string;
  headline: string;
  subheadline: string;
  introDescription: string[];
  categories: IndustryCategory[];
  industries: IndustryItem[];
  pillars: {
    title: string;
    description: string;
  }[];
  cta: {
    headline: string;
    subtext: string;
    buttonText: string;
    badge: string;
  };
}

export const INDUSTRIES_DATA: IndustriesPageData = {
  title: "Industries We Serve",
  headline: "Specialized B2B Prospecting Tailored to 44 Unique Industry Verticals",
  subheadline:
    "We don't use one-size-fits-all templates. Every sector has unique buying cycles, decision-makers, and pain points.",
  introDescription: [
    "Reaching the right prospect starts with deep industry context. Whether you sell enterprise SaaS, industrial machinery, professional consulting, or healthcare tech, AISMA creates hyper-targeted prospect lists and personalized outreach designed for your exact market.",
  ],
  categories: [
    "All",
    "Tech & AI",
    "Corporate & Finance",
    "Industrial & Supply Chain",
    "Creative & Agency",
    "Consumer & Lifestyle",
  ],
  industries: [
    {
      id: 1,
      name: "SaaS & Software",
      category: "Tech & AI",
      description:
        "Identify businesses that fit your ideal customer profile and connect with decision-makers who may benefit from your software or platform.",
      targetFocus: "CTOs, VPs of Engineering, Product Leaders & SaaS Founders",
      tag: "Software",
    },
    {
      id: 2,
      name: "Manufacturing & Industrial",
      category: "Industrial & Supply Chain",
      description:
        "Reach relevant manufacturers, industrial buyers, distributors, and business decision-makers through targeted prospect research.",
      targetFocus: "Plant Managers, Procurement Directors & Operations Heads",
      tag: "Manufacturing",
    },
    {
      id: 3,
      name: "Financial Services & Wealth Management",
      category: "Corporate & Finance",
      description:
        "Identify suitable business prospects and professional contacts aligned with your financial services and target market.",
      targetFocus: "CFOs, Wealth Advisors & Managing Partners",
      tag: "Finance",
    },
    {
      id: 4,
      name: "Real Estate & Commercial Real Estate",
      category: "Corporate & Finance",
      description:
        "Connect with relevant property businesses, commercial clients, investors, and potential business partners.",
      targetFocus: "Property Developers, Asset Managers & Commercial Brokers",
      tag: "Real Estate",
    },
    {
      id: 5,
      name: "Technology & IT Services",
      category: "Tech & AI",
      description:
        "Find organizations that may need IT support, technology consulting, software solutions, or managed services.",
      targetFocus: "CIOs, IT Directors & Infrastructure Managers",
      tag: "IT Services",
    },
    {
      id: 6,
      name: "Marketing & Advertising Agencies",
      category: "Creative & Agency",
      description:
        "Help agencies identify potential clients, research marketing decision-makers, and initiate personalized business conversations.",
      targetFocus: "Agency Owners, Chief Marketing Officers & Brand Directors",
      tag: "Agencies",
    },
    {
      id: 7,
      name: "B2B Business Services",
      category: "Corporate & Finance",
      description:
        "Build targeted prospect lists and connect with companies that align with your services and business objectives.",
      targetFocus: "COOs, General Managers & Operations Executives",
      tag: "B2B Services",
    },
    {
      id: 8,
      name: "Consulting & Professional Services",
      category: "Corporate & Finance",
      description:
        "Identify organizations that may benefit from your expertise and reach relevant decision-makers through thoughtful outreach.",
      targetFocus: "Managing Directors, Strategy Partners & Practice Heads",
      tag: "Consulting",
    },
    {
      id: 9,
      name: "Healthcare & Life Sciences",
      category: "Consumer & Lifestyle",
      description:
        "Research relevant healthcare organizations, life sciences businesses, and appropriate professional contacts for B2B outreach.",
      targetFocus: "Medical Directors, Clinic Owners & Healthcare Administrators",
      tag: "Healthcare",
    },
    {
      id: 10,
      name: "Construction & Engineering",
      category: "Industrial & Supply Chain",
      description:
        "Connect with potential commercial clients, contractors, developers, and project-related decision-makers.",
      targetFocus: "General Contractors, Project Executives & Chief Engineers",
      tag: "Construction",
    },
    {
      id: 11,
      name: "Recruitment & Staffing",
      category: "Corporate & Finance",
      description:
        "Identify businesses with potentially relevant hiring needs and connect with decision-makers responsible for recruitment and staffing.",
      targetFocus: "Heads of Talent, HR VPs & Hiring Managers",
      tag: "Staffing",
    },
    {
      id: 12,
      name: "Logistics & Supply Chain",
      category: "Industrial & Supply Chain",
      description:
        "Find businesses that may need freight, logistics, distribution, or supply chain services.",
      targetFocus: "Supply Chain VPs, Fleet Managers & Logistics Directors",
      tag: "Logistics",
    },
    {
      id: 13,
      name: "FinTech & Payments",
      category: "Tech & AI",
      description:
        "Identify businesses that may benefit from financial technology, payment platforms, or related B2B solutions.",
      targetFocus: "FinTech Founders, Heads of Payments & Compliance Officers",
      tag: "FinTech",
    },
    {
      id: 14,
      name: "Cybersecurity",
      category: "Tech & AI",
      description:
        "Research organizations that may need cybersecurity solutions and identify relevant IT, security, and business decision-makers.",
      targetFocus: "CISOs, Security Directors & Network Administrators",
      tag: "Security",
    },
    {
      id: 15,
      name: "AI & Automation",
      category: "Tech & AI",
      description:
        "Connect AI solution providers with businesses whose operational needs may align with their AI-powered products or services.",
      targetFocus: "Chief Digital Officers, Innovation Leads & Automation VPs",
      tag: "AI Tech",
    },
    {
      id: 16,
      name: "Telecommunications",
      category: "Tech & AI",
      description:
        "Identify organizations that may benefit from business communication, connectivity, and telecommunications solutions.",
      targetFocus: "Telecom Directors, Network Buyers & Enterprise Accounts",
      tag: "Telecom",
    },
    {
      id: 17,
      name: "Education & Coaching",
      category: "Consumer & Lifestyle",
      description:
        "Reach suitable organizations and potential customers for educational programs, coaching services, and professional learning.",
      targetFocus: "Learning & Development Directors, School Heads & Coaches",
      tag: "Education",
    },
    {
      id: 18,
      name: "E-commerce & Retail",
      category: "Consumer & Lifestyle",
      description:
        "Identify potential business partners, distributors, retail buyers, and commercial opportunities relevant to your offering.",
      targetFocus: "E-commerce Directors, Category Buyers & Retail Owners",
      tag: "E-Commerce",
    },
    {
      id: 19,
      name: "Insurance",
      category: "Corporate & Finance",
      description:
        "Research businesses that fit your target market and identify relevant contacts for commercial insurance-related services.",
      targetFocus: "Underwriters, Risk Officers & Corporate Brokerages",
      tag: "Insurance",
    },
    {
      id: 20,
      name: "Legal Services",
      category: "Corporate & Finance",
      description:
        "Help legal service providers identify suitable organizations and business contacts aligned with their practice areas.",
      targetFocus: "General Counsels, Law Firm Partners & Legal Admins",
      tag: "Legal",
    },
    {
      id: 21,
      name: "Accounting & Tax Services",
      category: "Corporate & Finance",
      description:
        "Connect accounting firms and tax professionals with businesses that may need bookkeeping, accounting, or tax-related support.",
      targetFocus: "Finance Controllers, CPA Partners & Corporate Treasurers",
      tag: "Accounting",
    },
    {
      id: 22,
      name: "Environmental & Sustainability",
      category: "Industrial & Supply Chain",
      description:
        "Identify organizations whose environmental priorities may align with your sustainability services or solutions.",
      targetFocus: "Chief Sustainability Officers, ESG Leads & Compliance Managers",
      tag: "Sustainability",
    },
    {
      id: 23,
      name: "Climate & Net-Zero",
      category: "Industrial & Supply Chain",
      description:
        "Research businesses with relevant climate, emissions reduction, or net-zero objectives and identify potential decision-makers.",
      targetFocus: "Carbon Offset Managers, Environmental VPs & Climate Tech Buyers",
      tag: "Climate",
    },
    {
      id: 24,
      name: "Energy & Renewable Energy",
      category: "Industrial & Supply Chain",
      description:
        "Find commercial prospects and organizations that may benefit from energy solutions, renewable technologies, or related services.",
      targetFocus: "Solar Project Developers, Utility Buyers & Energy Directors",
      tag: "Renewable Energy",
    },
    {
      id: 25,
      name: "Events & Conferences",
      category: "Creative & Agency",
      description:
        "Identify potential sponsors, exhibitors, corporate participants, and business partners relevant to your events.",
      targetFocus: "Sponsorship Heads, Event Organizers & Corporate Marketers",
      tag: "Events",
    },
    {
      id: 26,
      name: "Event Marketing",
      category: "Creative & Agency",
      description:
        "Connect event marketing providers with businesses that may need event promotion, campaign support, or audience engagement services.",
      targetFocus: "Marketing Directors & Brand Activation Leads",
      tag: "Event Marketing",
    },
    {
      id: 27,
      name: "PR & Media Technology",
      category: "Creative & Agency",
      description:
        "Identify organizations that may benefit from public relations, media technology, and communications solutions.",
      targetFocus: "Communications Directors & PR Agency Founders",
      tag: "PR Tech",
    },
    {
      id: 28,
      name: "PR & Podcasting",
      category: "Creative & Agency",
      description:
        "Research potential clients, brands, and collaboration partners for PR agencies and podcast service providers.",
      targetFocus: "Podcast Producers, Media Hosts & Guest Talent Buyers",
      tag: "Podcasting",
    },
    {
      id: 29,
      name: "Media & Entertainment",
      category: "Creative & Agency",
      description:
        "Find relevant commercial prospects, potential brand partners, and businesses aligned with your media or entertainment services.",
      targetFocus: "Production Executives, Talent Agencies & Studio Heads",
      tag: "Entertainment",
    },
    {
      id: 30,
      name: "Design Studios",
      category: "Creative & Agency",
      description:
        "Connect design studios with businesses that may need branding, graphic design, creative production, or design support.",
      targetFocus: "Creative Directors, Studio Owners & Art Executives",
      tag: "Design",
    },
    {
      id: 31,
      name: "Architecture & Design",
      category: "Creative & Agency",
      description:
        "Identify potential commercial clients, developers, property businesses, and organizations relevant to your architectural or design services.",
      targetFocus: "Principal Architects, Interior Leads & Real Estate Developers",
      tag: "Architecture",
    },
    {
      id: 32,
      name: "Hospitality & Travel",
      category: "Consumer & Lifestyle",
      description:
        "Reach hospitality businesses, travel companies, corporate clients, and potential commercial partners.",
      targetFocus: "Hotel General Managers, Travel VPs & Procurement Heads",
      tag: "Hospitality",
    },
    {
      id: 33,
      name: "Automotive",
      category: "Industrial & Supply Chain",
      description:
        "Identify relevant automotive businesses, dealerships, distributors, suppliers, and potential commercial partners.",
      targetFocus: "Dealership Executives, Fleet Owners & Parts Distributors",
      tag: "Automotive",
    },
    {
      id: 34,
      name: "Engineering & Industrial Services",
      category: "Industrial & Supply Chain",
      description:
        "Research organizations that may need engineering expertise, technical support, industrial maintenance, or specialized services.",
      targetFocus: "Chief Engineers, Facility Directors & Maintenance VPs",
      tag: "Engineering",
    },
    {
      id: 35,
      name: "Wholesale & Distribution",
      category: "Industrial & Supply Chain",
      description:
        "Connect wholesalers and distributors with potential business buyers, retailers, resellers, and suitable commercial partners.",
      targetFocus: "Wholesale Directors, Import/Export Buyers & Merchants",
      tag: "Wholesale",
    },
    {
      id: 36,
      name: "Business Consulting",
      category: "Corporate & Finance",
      description:
        "Identify organizations that may benefit from business strategy, operational consulting, or specialized advisory services.",
      targetFocus: "Enterprise Executives, Board Members & Transformation VPs",
      tag: "Consulting",
    },
    {
      id: 37,
      name: "HR & Workforce Solutions",
      category: "Corporate & Finance",
      description:
        "Find businesses that may need workforce planning, HR support, recruitment solutions, or related professional services.",
      targetFocus: "Chief Human Resources Officers & People Operations VPs",
      tag: "Workforce",
    },
    {
      id: 38,
      name: "EdTech",
      category: "Tech & AI",
      description:
        "Identify educational institutions, training providers, and organizations that may benefit from education technology solutions.",
      targetFocus: "Deans, EdTech Procurement Leads & Learning Architects",
      tag: "EdTech",
    },
    {
      id: 39,
      name: "HealthTech",
      category: "Tech & AI",
      description:
        "Research healthcare organizations and relevant decision-makers who may be a fit for your healthcare technology solutions.",
      targetFocus: "Hospital CIOs, HealthTech Founders & Clinical Leaders",
      tag: "HealthTech",
    },
    {
      id: 40,
      name: "PropTech",
      category: "Tech & AI",
      description:
        "Connect property technology businesses with relevant real estate companies, property managers, developers, and industry professionals.",
      targetFocus: "Real Estate Tech Officers & Property Management VPs",
      tag: "PropTech",
    },
    {
      id: 41,
      name: "MarTech",
      category: "Tech & AI",
      description:
        "Identify marketing teams, agencies, and businesses that may benefit from marketing technology platforms and solutions.",
      targetFocus: "Marketing Operations Leads & Digital Growth VPs",
      tag: "MarTech",
    },
    {
      id: 42,
      name: "Professional Training & Development",
      category: "Corporate & Finance",
      description:
        "Reach organizations that may need employee training, leadership development, or professional skills programs.",
      targetFocus: "Corporate Trainers, Talent Development Heads & HR Directors",
      tag: "Training",
    },
    {
      id: 43,
      name: "Sports & Fitness",
      category: "Consumer & Lifestyle",
      description:
        "Identify potential commercial clients, fitness businesses, brand partners, and organizations relevant to your services.",
      targetFocus: "Gym Chain Executives, Sports Directors & Brand Sponsors",
      tag: "Fitness",
    },
    {
      id: 44,
      name: "Consumer & Lifestyle Brands",
      category: "Consumer & Lifestyle",
      description:
        "Connect with potential retail partners, distributors, agencies, and businesses aligned with your brand's target market.",
      targetFocus: "Brand Directors, Retail Buyers & Commercial Partners",
      tag: "Lifestyle",
    },
  ],
  pillars: [
    {
      title: "Targeted Prospect Research",
      description:
        "We research companies and decision-makers based on your ideal customer profile, helping you focus on relevant business opportunities.",
    },
    {
      title: "Personalized Outreach",
      description:
        "We create human-written LinkedIn and email messages tailored to your audience rather than relying on generic, robotic communication.",
    },
    {
      title: "Lead Qualification",
      description:
        "We assess prospects against agreed criteria to help identify businesses that are a better fit for your services.",
    },
    {
      title: "Follow-Up Management",
      description:
        "We help organize replies, follow-ups, and next steps to keep relevant conversations moving forward.",
    },
    {
      title: "Appointment Setting",
      description:
        "We coordinate meetings with suitable, interested prospects when there is a genuine opportunity to discuss your offering.",
    },
  ],
  cta: {
    headline: "Let's Find the Right Opportunities for Your Business",
    subtext:
      "Tell us what your business offers, who you want to reach, and what you want to achieve. We'll discuss your goals and explore how AISMA can support your prospecting and outreach process.",
    buttonText: "Schedule Industry Consultation",
    badge: "The right prospects • Personalized conversations • A more focused path to growth",
  },
};
