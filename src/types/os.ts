export type AppId =
  | 'home'
  | 'projects'
  | 'about'
  | 'experience'
  | 'certificates'
  | 'toolbox'
  | 'contact'
  | 'terminal'
  | 'resume';

export type PortfolioSectionId =
  | 'home'
  | 'projects'
  | 'about'
  | 'experience'
  | 'toolbox'
  | 'contact';

export type WindowState = {
  id: AppId;
  title: string;
  filename: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minSize: { width: number; height: number };
  zIndex: number;
};

export type ThemeMode = 'dark' | 'light';

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'Cybersecurity & AI' | 'Full-Stack & Systems' | 'Academic Machine Learning' | 'Academic Application';
  filterTag: 'all' | 'cyber' | 'systems' | 'ml';
  isAcademicOnly: boolean;
  academicBadge?: string;
  repoUrl?: string;
  description: string;
  overview: string;
  architecture?: string[];
  technologies: string[];
  keyHighlights: string[];
  status: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: 'Google' | 'Cisco Networking Academy' | 'Infosys Springboard' | 'Ethnotech Academy';
  credentialType: 'Course Completion Credential';
  completionDate: string;
  verificationStatus: 'Verified Coursework' | 'Verified Credential' | 'Institutional Completion';
  verificationUrl?: string;
  description: string;
  skills: string[];
  accentColor: string;
}

export interface SkillItem {
  name: string;
  level: string;
  status: 'demonstrated' | 'learning';
  context: string;
  icon?: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  id: string;
  date: string;
  displayYear: string;
  title: string;
  issuerOrCategory: string;
  type: 'coursework' | 'project' | 'academic';
  description: string;
  keyTakeaways: string[];
}
