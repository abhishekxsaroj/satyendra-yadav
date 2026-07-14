import type {
  Certificate,
  ContactInfo,
  Education,
  Experience,
  KPI,
  Language,
  NavLink,
  Skill,
} from "@/types";

export const SITE = {
  name: "Satyendra Kumar Yadav",
  shortName: "SKY",
  title: "Team Leader · Warehouse Operations · Supply Chain Management",
  tagline:
    "Driving operational excellence across high-volume fulfillment networks with precision, safety, and people-first leadership.",
  description:
    "Portfolio of Satyendra Kumar Yadav — Team Leader in Warehouse Operations and Supply Chain Management. Specializing in fulfillment excellence, team leadership, and logistics optimization.",
  url: "https://satyendra-portfolio.vercel.app",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Impact", href: "#impact" },
  { label: "Certificates", href: "#certificates" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT: ContactInfo = {
  phone: "+971 XX XXX XXXX",
  email: "satyendra.yadav@email.com",
  location: "United Arab Emirates",
  linkedin: "https://linkedin.com/in/satyendra-kumar-yadav",
  resumeUrl: "/resume.pdf",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Global Fulfillment Network",
    role: "Team Leader — Warehouse Operations",
    location: "Dubai, UAE",
    period: "2022 — Present",
    description: [
      "Lead cross-functional warehouse teams of 20+ associates across inbound, pick, pack, and dispatch.",
      "Drove fulfillment SLAs above 98% through process standardization and real-time KPI dashboards.",
      "Reduced safety incidents by embedding daily Gemba walks and proactive risk controls.",
      "Partnered with planning and transport to improve dock-to-stock cycle times.",
    ],
  },
  {
    id: "exp-2",
    company: "Regional Supply Chain Hub",
    role: "Senior Warehouse Supervisor",
    location: "Abu Dhabi, UAE",
    period: "2019 — 2022",
    description: [
      "Supervised multi-shift operations for high-volume e-commerce and B2B fulfillment.",
      "Implemented slotting and wave planning improvements that cut travel time by 15%.",
      "Mentored floor leads and built structured onboarding for seasonal workforce peaks.",
      "Maintained inventory accuracy above 99.5% through disciplined cycle counting.",
    ],
  },
  {
    id: "exp-3",
    company: "Logistics & Distribution Co.",
    role: "Warehouse Operations Associate → Lead",
    location: "UAE",
    period: "2016 — 2019",
    description: [
      "Progressed from floor operations to team lead across receiving and outbound.",
      "Coordinated last-mile handoffs with carriers including DHL and regional partners.",
      "Supported WMS rollout and trained teams on new scanning and packing SOPs.",
      "Contributed to continuous improvement kaizens focused on waste reduction.",
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    id: "sk-1",
    name: "Warehouse Operations",
    category: "operations",
    level: 95,
    icon: "warehouse",
  },
  {
    id: "sk-2",
    name: "Fulfillment Excellence",
    category: "operations",
    level: 92,
    icon: "package",
  },
  {
    id: "sk-3",
    name: "Inventory Management",
    category: "operations",
    level: 90,
    icon: "boxes",
  },
  {
    id: "sk-4",
    name: "Team Leadership",
    category: "leadership",
    level: 94,
    icon: "users",
  },
  {
    id: "sk-5",
    name: "People Development",
    category: "leadership",
    level: 88,
    icon: "user-check",
  },
  {
    id: "sk-6",
    name: "WMS & Systems",
    category: "systems",
    level: 85,
    icon: "monitor",
  },
  {
    id: "sk-7",
    name: "KPI & Analytics",
    category: "systems",
    level: 87,
    icon: "chart",
  },
  {
    id: "sk-8",
    name: "Safety Compliance",
    category: "compliance",
    level: 93,
    icon: "shield",
  },
  {
    id: "sk-9",
    name: "Process Improvement",
    category: "operations",
    level: 89,
    icon: "workflow",
  },
  {
    id: "sk-10",
    name: "Supply Chain Coordination",
    category: "operations",
    level: 86,
    icon: "truck",
  },
];

export const KPIS: KPI[] = [
  {
    id: "kpi-1",
    value: 20,
    suffix: "+",
    label: "Team Members Managed",
    description: "Cross-functional warehouse associates led daily",
  },
  {
    id: "kpi-2",
    value: 98,
    suffix: "%",
    label: "Fulfillment Excellence",
    description: "On-time SLA performance sustained",
  },
  {
    id: "kpi-3",
    value: 99,
    suffix: "%+",
    label: "Inventory Accuracy",
    description: "Cycle-count driven stock integrity",
  },
  {
    id: "kpi-4",
    value: 8,
    suffix: "+",
    label: "Years in Operations",
    description: "Hands-on logistics leadership experience",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Warehouse Operations Excellence",
    organization: "Supply Chain Academy",
    year: "2024",
    image: "/certificates/warehouse-ops.svg",
    description: "Advanced warehouse processes, flow design, and productivity systems.",
  },
  {
    id: "cert-2",
    title: "Occupational Health & Safety",
    organization: "International Safety Institute",
    year: "2023",
    image: "/certificates/safety.svg",
    description: "Workplace safety leadership, hazard control, and compliance frameworks.",
  },
  {
    id: "cert-3",
    title: "Lean Six Sigma Yellow Belt",
    organization: "Process Excellence Council",
    year: "2023",
    image: "/certificates/lean.svg",
    description: "Continuous improvement methods for reducing waste and variation.",
  },
  {
    id: "cert-4",
    title: "Leadership in Logistics",
    organization: "Global Logistics Forum",
    year: "2022",
    image: "/certificates/leadership.svg",
    description: "People leadership, shift management, and operational communication.",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Business Administration",
    institution: "University Program",
    period: "2012 — 2015",
    location: "India",
    description: "Focus on operations management and organizational leadership.",
  },
  {
    id: "edu-2",
    degree: "Professional Development — Supply Chain",
    institution: "Industry Training Programs",
    period: "2016 — Present",
    location: "UAE",
    description: "Ongoing certifications in warehouse systems, safety, and lean methods.",
  },
];

export const LANGUAGES: Language[] = [
  { id: "lang-1", name: "English", level: 90, proficiency: "Professional" },
  { id: "lang-2", name: "Hindi", level: 100, proficiency: "Native" },
  { id: "lang-3", name: "Arabic", level: 55, proficiency: "Conversational" },
];

export const ABOUT = {
  paragraphs: [
    "I am a warehouse operations leader with a deep focus on fulfillment excellence, people development, and safe, scalable processes.",
    "Across high-volume environments, I translate strategy into floor-ready execution — aligning teams, systems, and daily rhythms so every outbound commitment is met with consistency.",
    "My approach blends operational discipline with empathy: clear standards, measurable KPIs, and coaching that elevates both performance and culture.",
  ],
  highlights: [
    "High-volume fulfillment leadership",
    "Safety-first operational culture",
    "WMS-enabled process control",
    "Cross-functional supply chain partner",
  ],
};
