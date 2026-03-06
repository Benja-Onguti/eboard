import { Feature } from "../types/feature.types";

export const features: Feature[] = [
  {
    id: "meeting-management",
    name: "Meeting Management",
    tagline: "Streamline your entire meeting workflow",
    description:
      "From scheduling to minutes, manage every aspect of your board meetings in one secure platform.",
    icon: "Calendar",
    image: "/images/features/meeting-management.jpg",
    benefits: [
      "Automated scheduling with calendar integration",
      "Digital agenda builder with collaborative editing",
      "Board pack assembly with one-click distribution",
      "Real-time collaboration during meetings",
      "Automated minute taking with action item tracking",
    ],
    features: [
      {
        title: "Smart Scheduling",
        description:
          "AI-powered scheduling that finds the perfect time for all members across time zones",
      },
      {
        title: "Agenda Builder",
        description:
          "Drag-and-drop interface for building comprehensive agendas with time allocations",
      },
      {
        title: "Board Pack Assembly",
        description:
          "Automatically compile documents, reports, and presentations into a single board book",
      },
      {
        title: "Real-time Collaboration",
        description:
          "Live document editing, annotations, and discussions during meetings",
      },
      {
        title: "Minutes & Actions",
        description:
          "Automated minute generation with AI-powered summaries and assigned action items",
      },
    ],
    audience: ["education", "government", "ngo", "corporate"],
  },
  {
    id: "document-management",
    name: "Document Management",
    tagline: "Secure, centralized document hub",
    description:
      "Store, manage, and share board documents with enterprise-grade encryption and version control.",
    icon: "FileText",
    image: "/images/features/document-management.jpg",
    benefits: [
      "Centralized encrypted document repository",
      "Version control with complete audit trail",
      "Granular access permissions and roles",
      "Full-text search across all documents",
      "Secure file sharing with expiration dates",
    ],
    features: [
      {
        title: "Secure Storage",
        description:
          "AES-256 encryption for all stored documents with ISO 27001 certification [citation:8]",
      },
      {
        title: "Version Control",
        description:
          "Track every change with complete version history and restore previous versions",
      },
      {
        title: "Access Control",
        description:
          "Role-based permissions at folder and document level with granular controls",
      },
      {
        title: "Advanced Search",
        description:
          "Full-text search with filters, saved searches, and optical character recognition (OCR)",
      },
      {
        title: "Secure Sharing",
        description:
          "Password-protected links with expiration dates and view-only access",
      },
    ],
    audience: ["education", "government", "ngo", "corporate"],
  },
  {
    id: "ai-minutes",
    name: "AI-Powered Minutes",
    tagline: "Never miss a moment with AI assistance",
    description:
      "Boardable's AI captures key takeaways, generates instant minutes, and provides searchable transcripts [citation:2].",
    icon: "Brain",
    image: "/images/features/ai-minutes.jpg",
    benefits: [
      "Auto-generated minutes that adapt to your agenda",
      "Searchable, speaker-tagged transcripts",
      "Meeting recordings for asynchronous review",
      "Key decision extraction and summarization",
      "Action item identification and tracking",
    ],
    features: [
      {
        title: "AI Minutes Generation",
        description:
          "Save hours with auto-generated minutes that adapt to your agenda structure",
      },
      {
        title: "Meeting Transcripts",
        description:
          "Instantly searchable, speaker-tagged transcripts for easy review and compliance",
      },
      {
        title: "Meeting Recordings",
        description:
          "Record important meetings to preserve institutional knowledge",
      },
      {
        title: "Key Takeaways",
        description:
          "AI automatically extracts decisions, action items, and key discussion points",
      },
    ],
    audience: ["education", "government", "ngo", "corporate"],
  },
  {
    id: "surveys-forms",
    name: "Surveys & Forms",
    tagline: "Quickly gather input and track disclosures",
    description:
      "Use built-in templates or create custom forms for conflict of interest, evaluations, and more [citation:2].",
    icon: "ClipboardList",
    image: "/images/features/surveys.jpg",
    benefits: [
      "Pre-built templates for common board needs",
      "Custom form builder with conditional logic",
      "Automated data collection and reporting",
      "Anonymous polling options",
      "Secure response tracking",
    ],
    features: [
      {
        title: "Template Library",
        description:
          "Ready-to-use templates for conflict of interest, board evaluations, and check-ins",
      },
      {
        title: "Custom Forms",
        description: "Build custom forms with drag-and-drop simplicity",
      },
      {
        title: "Anonymous Polling",
        description: "Gather honest feedback with anonymous response options",
      },
      {
        title: "Automated Reports",
        description: "Generate insights from form responses automatically",
      },
    ],
    audience: ["education", "government", "ngo", "corporate"],
  },
  {
    id: "public-sites",
    name: "Public Meeting Sites",
    tagline: "Boost transparency and accountability",
    description:
      "Publish agendas, documents, and minutes to a public-facing archive in just a few clicks [citation:2].",
    icon: "Globe",
    image: "/images/features/public-sites.jpg",
    benefits: [
      "Public meeting archives with one-click publishing",
      "FOI-compliant record keeping",
      "Customizable public portals",
      "Automated document redaction tools",
      "Meeting live-streaming integration",
    ],
    features: [
      {
        title: "Public Archives",
        description:
          "Create transparent public records of all board meetings and decisions",
      },
      {
        title: "FOI Compliance",
        description:
          "Meet freedom of information requirements with automated record keeping",
      },
      {
        title: "Custom Portals",
        description: "Branded public portals that reflect your organization",
      },
      {
        title: "Redaction Tools",
        description:
          "Easily redact sensitive information before public publishing",
      },
    ],
    audience: ["education", "government"],
  },
  {
    id: "e-signatures",
    name: "E-Signatures",
    tagline: "Legally binding signatures, fully digital",
    description:
      "Execute documents with legally binding electronic signatures that comply with global standards.",
    icon: "PenTool",
    image: "/images/features/esignatures.jpg",
    benefits: [
      "Legally binding e-signatures worldwide",
      "Multi-party signing workflows",
      "Audit-ready signing records",
      "Mobile-friendly signing experience",
      "Integration with document management",
    ],
    features: [
      {
        title: "Legal Compliance",
        description: "Compliant with ESIGN, UETA, and eIDAS regulations",
      },
      {
        title: "Workflow Automation",
        description: "Automated signing order and reminder sequences",
      },
      {
        title: "Audit Trail",
        description: "Complete audit trail of every signature and action",
      },
      {
        title: "Mobile Ready",
        description: "Optimized signing experience on any device",
      },
    ],
    audience: ["education", "government", "ngo", "corporate"],
  },
];
