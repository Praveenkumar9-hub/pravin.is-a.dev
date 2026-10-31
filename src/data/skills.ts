export interface SkillItem {
  name: string;
  status: 'demonstrated' | 'learning';
  note?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'PROGRAMMING',
    description: 'Core languages for procedural systems, automation, and algorithmic engineering.',
    skills: [
      { name: 'C', status: 'demonstrated', note: 'Hospital Management System (pointers, file handling, memory)' },
      { name: 'Python', status: 'demonstrated', note: 'AI attack forecasting, Tkinter GUI, ML pipelines' },
    ],
  },
  {
    category: 'DEVELOPMENT',
    description: 'Frontend web frameworks, typed application development, and relational databases.',
    skills: [
      { name: 'HTML/CSS', status: 'demonstrated', note: 'Semantic markup, Tailwind styling, modern layouts' },
      { name: 'React', status: 'demonstrated', note: 'React 19 component trees, hooks, client-side routing' },
      { name: 'TypeScript', status: 'demonstrated', note: 'Strict typing, interface definitions, full-stack safety' },
      { name: 'MySQL', status: 'demonstrated', note: 'Student Portal relational schemas, indexing, CRUD transactions' },
    ],
  },
  {
    category: 'SYSTEMS',
    description: 'Operating system environments, POSIX terminal utilities, and version control.',
    skills: [
      { name: 'Linux', status: 'demonstrated', note: 'Primary development environment, shell commands, process trees' },
      { name: 'Ubuntu', status: 'demonstrated', note: 'GCC compilation, package management, POSIX compliance' },
      { name: 'Git', status: 'demonstrated', note: 'Branching, semantic commits, version control workflows' },
      { name: 'GitHub', status: 'demonstrated', note: '8 public repositories, documentation, project tracking' },
    ],
  },
  {
    category: 'SECURITY',
    description: 'Defensive architecture, risk mitigation frameworks, and cryptographic fundamentals.',
    skills: [
      { name: 'Cybersecurity Fundamentals', status: 'demonstrated', note: 'Google & Cisco coursework: threat models, defense-in-depth' },
      { name: 'Information Security', status: 'demonstrated', note: 'CIA Triad, access control models, security governance' },
      { name: 'Cryptography', status: 'demonstrated', note: 'Infosys Springboard: symmetric/asymmetric ciphers, hashing, PKI' },
    ],
  },
  {
    category: 'CLOUD',
    description: 'Cloud infrastructure concepts, threat surfaces, and identity governance.',
    skills: [
      { name: 'Cloud Computing Fundamentals', status: 'learning', note: 'Active exploration of cloud deployment architectures' },
      { name: 'Cloud Security Learning', status: 'learning', note: 'Shared responsibility model, IAM policies, attack surfaces' },
    ],
  },
  {
    category: 'AI / ML',
    description: 'Supervised predictive algorithms, temporal telemetry analysis, and anomaly modeling.',
    skills: [
      { name: 'Machine Learning Fundamentals', status: 'demonstrated', note: 'Data preprocessing, feature engineering, model evaluation' },
      { name: 'Random Forest', status: 'demonstrated', note: 'Fake social media profile classification model' },
      { name: 'Logistic Regression', status: 'learning', note: 'Supervised binary classification & risk score calibration' },
    ],
  },
];
