export type Theme = 'light' | 'dark' | 'system';

export interface AreaOfWork {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'HeartPulse' | 'GraduationCap' | 'Building2' | 'Users' | 'ShieldAlert' | 'Briefcase' | 'Scale';
  topics: string[];
  rights: {
    title: string;
    explanation: string;
    whereToSeekHelp: {
      name: string;
      description: string;
    }[];
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  subject: string;
  message: string;
  isVolunteer: boolean;
  isSocialActions: boolean;
  lgpdAccepted: boolean;
  _website_catch?: string; // Honeypot field
}

