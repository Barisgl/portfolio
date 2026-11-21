export type Language = 'en' | 'de';

export interface LocalizedString {
  en: string;
  de: string;
}

export interface Profile {
  name: string;
  title: LocalizedString;
  location: LocalizedString;
  tagline: LocalizedString;
  bio: LocalizedString;
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  languages: {
    name: LocalizedString;
    level: LocalizedString;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  type?: LocalizedString;
  responsibilities: {
    en: string[];
    de: string[];
  };
  technologies: string[];
  highlight?: LocalizedString;
}

export interface Education {
  id: string;
  institution: string;
  degree: LocalizedString;
  period: string;
  location: string;
  details?: LocalizedString;
  topics?: {
    en: string[];
    de: string[];
  };
}

export interface Course {
  id: string;
  title: LocalizedString;
  issuer: string;
  year?: string;
  skills: string[];
  credentialUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export type ProjectCategory = 'all' | 'powerbi' | 'sql' | 'python' | 'tableau' | 'supply-chain';

export interface SqlSnippet {
  title: LocalizedString;
  explanation: LocalizedString;
  query: string;
  sampleResults?: {
    columns: string[];
    rows: (string | number)[][];
  };
}

export interface Project {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  category: 'powerbi' | 'sql' | 'python' | 'tableau' | 'supply-chain';
  technologies: string[];
  featured: boolean;
  businessProblem: LocalizedString;
  methodology: LocalizedString;
  insights: {
    en: string[];
    de: string[];
  };
  githubUrl?: string;
  embedType?: 'powerbi' | 'tableau' | 'iframe' | 'none';
  embedUrl?: string;
  sqlSnippets?: SqlSnippet[];
  pythonCode?: string;
  metrics?: {
    label: LocalizedString;
    value: string;
  }[];
}
