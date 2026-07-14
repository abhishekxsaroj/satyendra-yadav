import type {
  Certificate,
  ContactInfo,
  ContactItem,
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
  role: "Team Leader – Logistics Operations",
  subtitle: "Warehouse Operations | Supply Chain | Fulfillment Operations",
  title:
    "Satyendra Kumar Yadav | Team Leader | Warehouse Operations | Logistics",
  tagline:
    "Leading high-performing warehouse teams, optimizing fulfillment operations, and delivering operational excellence through data-driven decision making.",
  description:
    "Experienced Logistics Team Leader specializing in warehouse operations, fulfillment management, inventory control, supply chain coordination, and operational excellence in UAE logistics environments.",
  url: "https://satyendra-yadav.vercel.app",
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
  phone: "+971 56 237 6589",
  email: "skyp372@gmail.com",
  location: "Dubai, United Arab Emirates",
  nationality: "Indian",
  visaStatus: "Residence Visa",
  resumeUrl: "/resume.pdf",
};

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "phone",
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "mail",
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: "map",
    label: "Location",
    value: CONTACT.location,
  },
  {
    icon: "visa",
    label: "Visa Status",
    value: CONTACT.visaStatus,
  },
  {
    icon: "nationality",
    label: "Nationality",
    value: CONTACT.nationality,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "EMX (Amazon Now)",
    role: "Team Leader – Operations",
    location: "Dubai, United Arab Emirates",
    period: "December 2025 — Present",
    current: true,
    logoInitials: "EMX",
    summary:
      "Leading warehouse and fulfillment operations within a fast-paced e-commerce environment, driving operational excellence through effective leadership, process optimization, and data-driven decision making.",
    responsibilities: [
      "Lead and supervise a team of 20+ warehouse associates.",
      "Plan daily workflows and allocate operational tasks efficiently.",
      "Monitor KPIs, productivity, and service performance.",
      "Coordinate with inventory, dispatch, and quality control teams.",
      "Train and mentor new team members while ensuring SOP and safety compliance.",
      "Resolve operational challenges to maintain seamless warehouse operations.",
    ],
    achievement:
      "Improved warehouse productivity, reduced fulfillment errors, increased inventory accuracy, and consistently achieved operational KPIs through continuous process improvements.",
  },
  {
    id: "exp-2",
    company: "Noon in Minutes",
    role: "Shift Lead – Operations",
    location: "Dubai, United Arab Emirates",
    period: "July 2024 — November 2025",
    logoInitials: "NM",
    summary:
      "Managed daily dark store operations, ensuring efficient order fulfillment, inventory accuracy, and smooth coordination between warehouse teams in a high-volume e-commerce environment.",
    responsibilities: [
      "Supervised daily warehouse operations and shift activities.",
      "Coordinated inventory movement and order fulfillment.",
      "Maintained operational KPIs and productivity targets.",
      "Supported continuous process improvements across warehouse operations.",
      "Assisted in workforce planning and shift coordination.",
    ],
  },
  {
    id: "exp-3",
    company: "Caesars Confectionery LLC",
    role: "Shop Assistant",
    location: "United Arab Emirates",
    period: "October 2018 — June 2024",
    logoInitials: "CC",
    summary:
      "Supported daily retail operations by delivering exceptional customer service, managing transactions, processing online orders, and contributing to overall store performance.",
    responsibilities: [
      "Assisted customers with product selection and purchases.",
      "Managed POS transactions, refunds, and payment processing.",
      "Processed online orders and customer reservations.",
      "Supported inventory organization and daily store operations.",
      "Helped achieve store sales targets and customer satisfaction goals.",
    ],
  },
  {
    id: "exp-4",
    company: "The Yellow Chilli",
    role: "Customer Service Assistant",
    location: "India",
    period: "May 2018 — September 2018",
    logoInitials: "YC",
    summary:
      "Delivered responsive customer support by managing inquiries, processing orders, resolving service issues, and maintaining accurate operational records.",
    responsibilities: [
      "Responded to customer inquiries via phone and email.",
      "Processed customer orders accurately.",
      "Resolved complaints professionally.",
      "Maintained customer records and prepared operational reports.",
    ],
  },
  {
    id: "exp-5",
    company: "Aalishan Zaika Restaurant",
    role: "Cashier",
    location: "India",
    period: "May 2015 — April 2018",
    logoInitials: "AZ",
    summary:
      "Managed front-end cash operations while ensuring transaction accuracy and providing excellent customer service in a fast-paced restaurant environment.",
    responsibilities: [
      "Processed cash and card transactions.",
      "Maintained accurate financial records.",
      "Assisted customers with billing and payments.",
      "Supported smooth day-to-day restaurant operations.",
    ],
  },
];

export const SKILLS: Skill[] = [
  // Operations
  { id: "sk-o1", name: "Warehouse Operations", category: "operations", level: 95, icon: "warehouse" },
  { id: "sk-o2", name: "Inventory Management", category: "operations", level: 92, icon: "boxes" },
  { id: "sk-o3", name: "Fulfillment Operations", category: "operations", level: 94, icon: "package" },
  { id: "sk-o4", name: "Logistics Coordination", category: "operations", level: 90, icon: "truck" },
  { id: "sk-o5", name: "Process Improvement", category: "operations", level: 88, icon: "workflow" },
  { id: "sk-o6", name: "Vendor Management", category: "operations", level: 82, icon: "handshake" },
  { id: "sk-o7", name: "Safety Compliance", category: "operations", level: 93, icon: "shield" },
  { id: "sk-o8", name: "Warehouse Management Systems", category: "operations", level: 86, icon: "monitor" },
  // Leadership
  { id: "sk-l1", name: "Team Management", category: "leadership", level: 95, icon: "users" },
  { id: "sk-l2", name: "Project Management", category: "leadership", level: 85, icon: "clipboard" },
  { id: "sk-l3", name: "Problem Solving", category: "leadership", level: 90, icon: "lightbulb" },
  { id: "sk-l4", name: "Adaptability", category: "leadership", level: 92, icon: "refresh" },
  { id: "sk-l5", name: "Time Management", category: "leadership", level: 90, icon: "clock" },
  { id: "sk-l6", name: "Active Listening", category: "leadership", level: 88, icon: "ear" },
  { id: "sk-l7", name: "Customer Service", category: "leadership", level: 91, icon: "heart" },
  // Technology
  { id: "sk-t1", name: "Microsoft Office 365", category: "technology", level: 88, icon: "monitor" },
  { id: "sk-t2", name: "Microsoft Excel", category: "technology", level: 90, icon: "sheet" },
  { id: "sk-t3", name: "Google Sheets", category: "technology", level: 88, icon: "sheet" },
  { id: "sk-t4", name: "Google Docs", category: "technology", level: 86, icon: "file" },
  { id: "sk-t5", name: "Microsoft Word", category: "technology", level: 85, icon: "file" },
  { id: "sk-t6", name: "Outlook", category: "technology", level: 87, icon: "mail" },
  { id: "sk-t7", name: "PowerPoint", category: "technology", level: 84, icon: "presentation" },
  { id: "sk-t8", name: "Google Slides", category: "technology", level: 84, icon: "presentation" },
  { id: "sk-t9", name: "Canva", category: "technology", level: 80, icon: "palette" },
  { id: "sk-t10", name: "LMS", category: "technology", level: 82, icon: "book" },
  { id: "sk-t11", name: "WMS", category: "technology", level: 88, icon: "warehouse" },
  { id: "sk-t12", name: "VMS", category: "technology", level: 80, icon: "monitor" },
  { id: "sk-t13", name: "RO", category: "technology", level: 78, icon: "chart" },
  { id: "sk-t14", name: "DSMA", category: "technology", level: 80, icon: "store" },
];

export const SKILL_CATEGORIES: { key: Skill["category"]; label: string }[] = [
  { key: "operations", label: "Operations" },
  { key: "leadership", label: "Leadership" },
  { key: "technology", label: "Technology" },
];

export const KPIS: KPI[] = [
  {
    id: "kpi-1",
    value: 20,
    suffix: "+",
    label: "Team Members Managed",
    description: "Daily leadership of warehouse operations teams",
  },
  {
    id: "kpi-2",
    value: 100,
    suffix: "%",
    label: "SOP Compliance Focus",
    description: "Committed to process discipline and safety standards",
  },
  {
    id: "kpi-3",
    value: 2,
    suffix: "+",
    label: "Leading UAE Logistics Companies",
    description: "Hands-on leadership at EMX (Amazon Now) and Noon",
  },
  {
    id: "kpi-4",
    value: 7,
    suffix: "+",
    label: "Years of Professional Experience",
    description: "Operations, fulfillment, and customer-facing excellence",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Diploma in Computer Applications",
    organization: "Varanasi Institute",
    year: "A+",
    image: "/certificates/computer-applications.svg",
    description: "Diploma in Computer Applications with Grade A+.",
  },
  {
    id: "cert-2",
    title: "Basic Food Safety and Hygiene Training",
    organization: "Dubai Municipality",
    year: "Certified",
    image: "/certificates/food-safety.svg",
    description: "Basic Food Safety and Hygiene Training issued by Dubai Municipality.",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Arts",
    institution: "MGKV University, Varanasi",
    period: "2012 — 2015",
    location: "India",
  },
  {
    id: "edu-2",
    degree: "Intermediate (12th)",
    institution: "Allahabad UP Board",
    period: "2010 — 2012",
    location: "India",
  },
  {
    id: "edu-3",
    degree: "High School (10th)",
    institution: "Allahabad UP Board",
    period: "2009 — 2010",
    location: "India",
  },
];

export const LANGUAGES: Language[] = [
  { id: "lang-1", name: "English", level: 90, proficiency: "Professional" },
  { id: "lang-2", name: "Hindi", level: 95, proficiency: "Professional" },
  { id: "lang-3", name: "Arabic", level: 35, proficiency: "Beginner" },
];

export const ABOUT = {
  title: "Experienced Team Leader driving fulfillment excellence.",
  description:
    "Warehouse operations, inventory control, and people leadership in fast-paced UAE logistics environments.",
  paragraphs: [
    "Experienced Team Leader with a proven track record of leading high-performing teams, optimizing e-commerce fulfillment operations, and driving data-based process improvements. Skilled in warehouse operations, inventory management, shift planning, logistics coordination, safety compliance, and team development within fast-paced environments.",
    "Committed to operational excellence through effective leadership, continuous process improvement, and delivering exceptional customer satisfaction while maintaining the highest standards of safety and efficiency.",
  ],
  highlights: [
    "Team Leader – Logistics Operations",
    "Warehouse & Fulfillment Leadership",
    "SOP & Safety Compliance Focus",
    "Based in Dubai, UAE · Residence Visa",
  ],
};
