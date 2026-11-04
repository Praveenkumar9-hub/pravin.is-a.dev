export interface TimelineEvent {
  id: string;
  date: string;
  isDateUnspecified?: boolean;
  title: string;
  organization: string;
  type: 'experience' | 'internship' | 'community' | 'project' | 'coursework' | 'academic';
  location?: string;
  description: string;
  skills: string[];
}

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'exp-gdg-uvce',
    date: 'Oct 2026 — Present (2 mos)',
    title: 'Community Member – Learn with Community',
    organization: 'GDG on Campus UVCE',
    type: 'community',
    location: 'Bengaluru, India',
    description:
      'Participating in the Learn with Community initiative by GDG on Campus UVCE. Engaging in community-driven learning, developer workshops, and technical activities.',
    skills: ['Community Learning', 'Developer Ecosystem', 'Open Source', 'Technical Collaboration'],
  },
  {
    id: 'exp-google-cloud-arcade',
    date: 'Jul 2026 — Sep 2026 (3 mos)',
    title: 'Participant',
    organization: 'Google Cloud Arcade Facilitator Program',
    type: 'experience',
    location: 'India · Remote',
    description:
      'Selected as a participant in the Google Cloud Arcade Facilitator Program 2026, gaining hands-on experience with Google Cloud technologies through practical labs, cloud infrastructure, and generative AI learning paths.',
    skills: ['Google Cloud Platform (GCP)', 'Artificial Intelligence (AI)', 'Cloud Infrastructure', 'IAM Security'],
  },
  {
    id: 'exp-yuva-intern',
    date: 'Jul 2026 — Sep 2026 (3 mos)',
    title: 'Virtual Data Science with Python Trainee',
    organization: 'Yuva Intern by Henry Harvin · Internship',
    type: 'internship',
    location: 'India · Remote',
    description:
      'Worked on practical data science tasks and projects using Python. Gained hands-on experience with data cleaning, manipulation, analysis, visualization, and working with real-world datasets.',
    skills: ['Python', 'Data Science', 'Data Cleaning', 'Data Visualization', 'NumPy & Pandas'],
  },
  {
    id: 't-2024-hms',
    date: '2024 — 2025',
    title: 'Hospital Management System (C / Linux)',
    organization: 'Academic Systems Project',
    type: 'project',
    location: 'Bengaluru, India',
    description:
      'Engineered a modular, procedural terminal-based hospital records and billing management system in ANSI C on Ubuntu Linux using file handling for persistent data storage.',
    skills: ['C (ANSI C)', 'Ubuntu Linux', 'File Handling', 'GCC Toolchain', 'Pointers'],
  },
];
