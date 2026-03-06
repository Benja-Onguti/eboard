import { Solution } from "../types/feature.types";

export const solutions: Solution[] = [
  {
    id: "education",
    name: "Education",
    headline: "Streamlined Governance for Educational Institutions",
    description:
      "Empower school boards, university trustees, and academic committees with modern governance tools designed for education.",
    icon: "GraduationCap",
    image: "/images/solutions/education.jpg",
    painPoints: [
      "Coordinating busy faculty and administrator schedules across multiple campuses",
      "Managing accreditation and compliance requirements",
      "Engaging board members with varying technical expertise",
      "Maintaining transparency with parents and community stakeholders",
    ],
    benefits: [
      "Reduce meeting preparation time by up to 70%",
      "Ensure compliance with FERPA and education regulations",
      "Enable remote participation for all board members",
      "Improve stakeholder communication with public meeting archives [citation:2]",
    ],
    features: [
      "Multi-campus and district support",
      "Student privacy compliance (FERPA)",
      "Academic calendar integration",
      "Committee and sub-committee management",
      "Public meeting transparency tools",
    ],
    caseStudies: [
      {
        title: "Lincoln School District",
        quote:
          "EBoard reduced our board meeting prep time from two weeks to two days. Our members actually enjoy using the platform.",
        results: "70% time savings, 100% board participation",
      },
    ],
  },
  {
    id: "government",
    name: "Government",
    headline: "Secure, Transparent Governance for Public Sector",
    description:
      "Meet compliance requirements while improving efficiency and transparency in public sector governance.",
    icon: "Building2",
    image: "/images/solutions/government.jpg",
    painPoints: [
      "FOI and public records compliance requirements",
      "Security concerns for sensitive information",
      "Meeting public meeting accessibility laws",
      "Managing multiple committees, councils, and boards",
    ],
    benefits: [
      "FOI-compliant records with complete audit trails",
      "Military-grade security with ISO 27001 certification [citation:8]",
      "Accessible meetings with proper controls",
      "Streamlined multi-committee management",
    ],
    features: [
      "FOI-compliant record keeping with automated archiving",
      "Security certifications (ISO 27001, SOC 2)",
      "Public meeting support with live streaming",
      "Inter-agency collaboration tools",
      "Automated redaction for public records",
    ],
    caseStudies: [
      {
        title: "City of Riverside",
        quote:
          "EBoard helped us achieve 100% FOI compliance while reducing administrative workload by 50%.",
        results: "50% efficiency gain, 100% compliance",
      },
    ],
  },
  {
    id: "ngo",
    name: "NGOs & Nonprofits",
    headline: "Cost-Effective Governance for Mission-Driven Organizations",
    description:
      "Maximize your impact with affordable, easy-to-use governance tools designed for nonprofit boards and volunteer members.",
    icon: "Heart",
    image: "/images/solutions/ngos.jpg",
    painPoints: [
      "Volunteer board members with limited time and technical skills",
      "Tight budgets requiring cost-effective solutions",
      "Need for donor transparency and impact reporting",
      "Remote participation for geographically dispersed members",
    ],
    benefits: [
      "50% reduction in administrative costs",
      "Intuitive interface that volunteers can use immediately [citation:8]",
      "Build donor trust with transparent governance",
      "Enable global participation with mobile access",
    ],
    features: [
      "Nonprofit pricing with flexible plans",
      "Volunteer engagement tools",
      "Donor reporting and impact metrics",
      "Grant management integration",
      "Fundraising calendar integration",
    ],
    caseStudies: [
      {
        title: "Global Health Initiative",
        quote:
          "EBoard's nonprofit pricing made professional governance tools accessible to our volunteer board.",
        results: "60% cost savings, 90% board engagement",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    headline: "Strategic Decision Support for Corporate Boards",
    description:
      "Scale your corporate governance with enterprise-grade security, integrations, and analytics.",
    icon: "Building",
    image: "/images/solutions/enterprise.jpg",
    painPoints: [
      "Global board coordination across multiple time zones",
      "Integration with existing enterprise tools (Teams, Zoom, SharePoint)",
      "Regulatory compliance (SOX, GDPR, CCPA)",
      "Need for strategic insights from governance data",
    ],
    benefits: [
      "Seamless integration with your existing tech stack",
      "Enterprise-grade security with advanced compliance",
      "AI-powered insights from governance data",
      "Support for complex organizational structures",
    ],
    features: [
      "SSO and enterprise authentication (SAML, OAuth)",
      "Advanced analytics and executive dashboards",
      "API access for custom integrations",
      "Subsidiary and committee management",
      "Multi-language and multi-currency support",
    ],
    caseStudies: [
      {
        title: "Global Tech Corporation",
        quote:
          "EBoard integrated perfectly with our existing tools and scaled across 50+ subsidiaries worldwide.",
        results: "40% faster decision-making, global compliance",
      },
    ],
  },
];
