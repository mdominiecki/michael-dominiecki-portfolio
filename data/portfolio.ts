import {
  BarChart3,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FileText,
  Flag,
  Globe2,
  Handshake,
  Megaphone,
  MessageSquareText,
  PanelsTopLeft,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const profileHighlights = [
  "Marketing Strategy",
  "Problem Solver",
  "Quick Learner",
  "Clear Communicator"
];

export const experienceItems = [
  {
    title: "Golf Course & Cart Barn Experience",
    eyebrow: "Operations + service",
    period: "Current foundation",
    icon: Flag,
    description:
      "Built dependable customer-facing habits through daily operations, pace-of-play support, equipment coordination, and hospitality-focused problem solving.",
    points: ["Customer experience", "Operations detail", "Fast prioritization"]
  },
  {
    title: "Leadership & Teamwork",
    eyebrow: "Collaboration",
    period: "Campus + work",
    icon: UsersRound,
    description:
      "Comfortable stepping into team environments, aligning people around a shared outcome, and keeping communication clear under time pressure.",
    points: ["Team coordination", "Clear communication", "Shared accountability"]
  },
  {
    title: "Internship Interests",
    eyebrow: "Growth target",
    period: "Seeking opportunities",
    icon: BriefcaseBusiness,
    description:
      "Focused on opportunities in marketing, product strategy, brand development, market research, and go-to-market planning.",
    points: ["Product marketing", "Brand strategy", "Market research"]
  },
  {
    title: "Organizational & Project Work",
    eyebrow: "Execution",
    period: "Academic projects",
    icon: PanelsTopLeft,
    description:
      "Experience turning broad business prompts into organized research, polished presentations, and clear strategic recommendations.",
    points: ["Research synthesis", "Presentation design", "Strategic framing"]
  }
];

export const skills = [
  { title: "Marketing", icon: Megaphone, accent: "from-electric/[0.35] to-cyan/30" },
  { title: "Branding", icon: Sparkles, accent: "from-violet/[0.35] to-electric/25" },
  { title: "Product Strategy", icon: Target, accent: "from-teal/[0.35] to-cyan/25" },
  { title: "Communication", icon: MessageSquareText, accent: "from-electric/30 to-violet/25" },
  { title: "Data Analysis", icon: BarChart3, accent: "from-cyan/[0.35] to-electric/25" },
  { title: "Team Leadership", icon: Handshake, accent: "from-teal/[0.35] to-violet/25" },
  { title: "Microsoft Office", icon: FileText, accent: "from-silver to-electric/20" },
  { title: "Social Media", icon: Globe2, accent: "from-violet/30 to-teal/25" },
  { title: "Presentation Skills", icon: Presentation, accent: "from-electric/30 to-cyan/25" }
];

export const projects = [
  {
    title: "Market Research Project",
    category: "Research",
    icon: ChartNoAxesCombined,
    description:
      "A structured analysis of customer segments, market signals, and positioning opportunities for a developing business concept.",
    tags: ["Research", "Segmentation", "Insights"]
  },
  {
    title: "Branding Strategy Case Study",
    category: "Brand",
    icon: Sparkles,
    description:
      "A brand strategy exploration covering audience, messaging, competitive context, and a sharper value proposition.",
    tags: ["Positioning", "Messaging", "Identity"]
  },
  {
    title: "Product Analysis Project",
    category: "Product",
    icon: ShieldCheck,
    description:
      "A product-focused evaluation of user value, feature decisions, business model fit, and opportunities for differentiation.",
    tags: ["Product", "UX thinking", "Strategy"]
  },
  {
    title: "International Marketing Presentation",
    category: "Global",
    icon: Globe2,
    description:
      "A polished presentation studying cultural context, market entry considerations, and brand communication across regions.",
    tags: ["Global markets", "Culture", "Presentation"]
  }
];

export const resumeSnapshot = [
  {
    heading: "Education",
    copy: "Business Marketing Student with coursework focused on marketing, strategy, communication, and business development."
  },
  {
    heading: "Focus",
    copy: "Brand strategy, product positioning, market research, customer experience, and technology-driven business growth."
  },
  {
    heading: "Strengths",
    copy: "Professional communication, teamwork, organized project execution, presentation development, and analytical thinking."
  }
];
