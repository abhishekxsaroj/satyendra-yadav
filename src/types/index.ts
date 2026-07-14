export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  achievement?: string;
  current?: boolean;
  logo?: string;
  logoInitials?: string;
}


export interface Skill {
  id: string;
  name: string;
  category: "operations" | "leadership" | "technology";
  level: number;
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  year: string;
  image: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface Language {
  id: string;
  name: string;
  level: number;
  proficiency: string;
}

export interface KPI {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  nationality: string;
  visaStatus: string;
  linkedin?: string;
  resumeUrl: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: "phone" | "mail" | "map" | "visa" | "nationality";
}
