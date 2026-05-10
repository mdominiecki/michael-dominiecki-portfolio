import {
  BriefcaseBusiness,
  Camera,
  Crown,
  FilePenLine,
  GraduationCap,
  MessageCircle,
  Presentation,
  type LucideIcon
} from "lucide-react";

export type HudIconModule = {
  title: string;
  subtitle: string;
  color: string;
  side: "left" | "right";
  positionClass: string;
  icon: "ks" | "microsoft" | "chess" | "editing" | "writer" | "communication";
};

export type Skill = {
  title: string;
  copy: string;
  icon: LucideIcon;
  glow: string;
};

export const hudModules: HudIconModule[] = [
  {
    title: "KENNESAW STATE UNIVERSITY",
    subtitle: "Business Marketing Student",
    color: "#f5c74f",
    side: "left",
    positionClass: "left-[6%] top-[22%]",
    icon: "ks"
  },
  {
    title: "MICROSOFT PROFICIENCY",
    subtitle: "Excel. PowerPoint. Word.",
    color: "#4bbf73",
    side: "left",
    positionClass: "left-[2%] top-[46%]",
    icon: "microsoft"
  },
  {
    title: "1000 RATED ELO CHESS",
    subtitle: "Strategic thinking and discipline",
    color: "#a78bfa",
    side: "left",
    positionClass: "left-[8%] top-[70%]",
    icon: "chess"
  },
  {
    title: "PHOTO EDITING EXPERIENCE",
    subtitle: "Photoshop. Canva. Enhancing visuals.",
    color: "#fb7185",
    side: "right",
    positionClass: "right-[6%] top-[22%]",
    icon: "editing"
  },
  {
    title: "CREATIVE WRITER",
    subtitle: "Crafting stories. Inspiring ideas.",
    color: "#a3e635",
    side: "right",
    positionClass: "right-[2%] top-[46%]",
    icon: "writer"
  },
  {
    title: "COMMUNICATION",
    subtitle: "Connecting people. Sharing ideas clearly.",
    color: "#f59e0b",
    side: "right",
    positionClass: "right-[8%] top-[70%]",
    icon: "communication"
  }
];

export const skills: Skill[] = [
  {
    title: "Marketing Strategy",
    copy: "Positioning, audience thinking, and practical campaign structure.",
    icon: Presentation,
    glow: "rgba(121, 184, 255, 0.28)"
  },
  {
    title: "Microsoft Office",
    copy: "Excel, PowerPoint, and Word for analysis, planning, and presentation.",
    icon: BriefcaseBusiness,
    glow: "rgba(75, 191, 115, 0.26)"
  },
  {
    title: "Photo Editing",
    copy: "Visual polish, creative direction, and brand-focused presentation.",
    icon: Camera,
    glow: "rgba(251, 113, 133, 0.25)"
  },
  {
    title: "Communication",
    copy: "Clear messaging, collaboration, and audience-aware storytelling.",
    icon: MessageCircle,
    glow: "rgba(245, 158, 11, 0.26)"
  },
  {
    title: "Creative Writing",
    copy: "Concepting, narrative structure, and memorable brand language.",
    icon: FilePenLine,
    glow: "rgba(163, 230, 53, 0.22)"
  },
  {
    title: "Leadership",
    copy: "Team coordination, ownership, and organized follow-through.",
    icon: Crown,
    glow: "rgba(167, 139, 250, 0.24)"
  }
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    copy: "A polished personal brand site built around interaction, clarity, and professional presentation.",
    tags: ["React", "Branding", "UX"]
  },
  {
    title: "Marketing Campaign Concept",
    copy: "A strategic campaign framework with audience insight, positioning, and channel planning.",
    tags: ["Marketing", "Strategy", "Creative"]
  },
  {
    title: "Event Planning / Coordination Project",
    copy: "A coordination-focused project centered on planning, communication, and smooth execution.",
    tags: ["Events", "Leadership", "KSU"]
  }
];

export const timeline = [
  {
    title: "Event Coordinator",
    org: "KSU",
    detail: "Supporting event planning, coordination, and communication across campus-focused work.",
    icon: BriefcaseBusiness
  },
  {
    title: "Business Marketing Student",
    org: "Kennesaw State University",
    detail: "Studying marketing, business strategy, branding, and digital communication.",
    icon: GraduationCap
  },
  {
    title: "Future Internship / Project",
    org: "Open to opportunities",
    detail: "Seeking hands-on experience in branding, product strategy, marketing, and business development.",
    icon: Presentation
  }
];
