export type SectionId = 'home' | 'projects' | 'about' | 'experience' | 'certificates' | 'toolbox' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  badge?: string;
  icon?: string;
}

export const WORKSPACE_SECTIONS: NavItem[] = [
  { id: 'home', label: 'HOME' },
  { id: 'projects', label: 'PROJECTS', badge: '06' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE', badge: '02' },
  { id: 'certificates', label: 'CERTIFICATES', badge: '08' },
  { id: 'toolbox', label: 'TOOLBOX', badge: '04' },
  { id: 'contact', label: 'CONTACT' },
];

export type WindowState = 'normal' | 'minimized';
