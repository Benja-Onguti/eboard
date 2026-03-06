export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do we need technical expertise to get started?",
    answer:
      "No. EBoard is cloud-based and ready to use from day one — no installation or IT setup required. Our onboarding team and help center ensure your board transitions smoothly [citation:8].",
    category: "general",
  },
  {
    id: "2",
    question: "How long does it take to set up our first board meeting?",
    answer:
      "Most organizations are ready to hold their first digital board meeting within days. Upload your materials, build an agenda, and invite directors in just a few clicks [citation:8].",
    category: "general",
  },
  {
    id: "3",
    question: "Will our board members need training?",
    answer:
      "Not necessarily. EBoard is designed for all experience levels — most directors feel comfortable after their first login. We also offer product walkthroughs and onboarding sessions for extra confidence.",
    category: "general",
  },
  {
    id: "4",
    question: "What about security and compliance?",
    answer:
      "EBoard provides enterprise-grade protection backed by ISO 27001, SOC 2, and GDPR compliance. All data is encrypted with AES-256 both in transit and at rest [citation:8].",
    category: "security",
  },
  {
    id: "5",
    question: "Can we access EBoard from any device?",
    answer:
      "Yes. EBoard works across desktop, tablet, and mobile, and integrates with Zoom and Teams so your board can collaborate securely from anywhere [citation:8].",
    category: "technical",
  },
];
