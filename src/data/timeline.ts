export interface TimelineEvent {
  id: string;
  date: string;
  isDateUnspecified?: boolean;
  title: string;
  organization: string;
  type: 'coursework' | 'project' | 'academic';
  description: string;
  skills: string[];
}

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 't-2024-hms',
    date: '2024 — 2025',
    title: 'Hospital Management System (C / Linux)',
    organization: 'Academic Systems Project',
    type: 'project',
    description:
      'Engineered a modular, procedural terminal-based hospital records and billing management system in ANSI C on Ubuntu Linux using file handling for persistent data storage.',
    skills: ['C (ANSI C)', 'Ubuntu Linux', 'File Handling', 'GCC Toolchain', 'Pointers'],
  },
  {
    id: 't-2025-02-ethno1',
    date: 'February 2025',
    title: 'Python Programming-I with Linux',
    organization: 'Ethnotech Academy',
    type: 'coursework',
    description:
      'Completed foundational training in Python syntax, core algorithms, data structures, and fundamental Linux terminal operations including directory structures and command piping.',
    skills: ['Python Fundamentals', 'Linux CLI', 'File Permissions', 'Command Piping'],
  },
  {
    id: 't-2025-07-ethno2',
    date: 'July 2025',
    title: 'Python Programming-II with Linux',
    organization: 'Ethnotech Academy',
    type: 'coursework',
    description:
      'Advanced Python coursework focusing on modular program architecture, object-oriented concepts, error handling, system processes, and shell automation scripts.',
    skills: ['Object-Oriented Python', 'Linux Processes', 'Modular Code', 'Shell Automation'],
  },
  {
    id: 't-2025-smart-bharat',
    date: '2025 — 2026',
    title: 'Smart Bharat AI Civic Platform Development',
    organization: 'Full-Stack & AI Project',
    type: 'project',
    description:
      'Architected and implemented a civic companion web platform connecting citizens with government welfare schemes and grievance tracking using React 19, TypeScript, and Google Gemini API.',
    skills: ['React 19', 'TypeScript', 'Express REST API', 'Supabase PostgreSQL', 'Gemini API'],
  },
  {
    id: 't-2026-07-google1',
    date: 'July 2026',
    title: 'Google Foundations of Cybersecurity',
    organization: 'Google (Coursera)',
    type: 'coursework',
    description:
      'Explored core cybersecurity concepts, security domains, threat actor classifications, the CIA Triad, security ethics, and foundational risk management frameworks.',
    skills: ['CIA Triad', 'Threat Actor Profiling', 'Security Ethics', 'Defense-in-Depth'],
  },
  {
    id: 't-2026-sih',
    date: '2026',
    title: 'AI-Based Network Attack Forecasting (SIH26153)',
    organization: 'Cybersecurity Innovation Prototype',
    type: 'project',
    description:
      'Researched and built a predictive network defense prototype that analyzes temporal telemetry over a 15-minute sliding window to forecast malicious traffic in the next 5-minute window, mapped to MITRE ATT&CK.',
    skills: ['Python', 'Temporal Analysis', 'MITRE ATT&CK', 'Attack Forecasting', 'Explainable ML'],
  },
  {
    id: 't-2026-10-google2',
    date: 'October 2026',
    title: 'Google Play It Safe: Manage Security Risks',
    organization: 'Google (Coursera)',
    type: 'coursework',
    description:
      'Coursework focused on identifying threats, analyzing vulnerabilities, implementing the NIST Cybersecurity Framework, and standard incident response lifecycle protocols.',
    skills: ['NIST Framework', 'Vulnerability Assessment', 'Incident Response', 'Threat Mitigation'],
  },
  {
    id: 't-2026-10-infosys-infosec',
    date: 'October 2026',
    title: 'Fundamentals of Information Security',
    organization: 'Infosys Springboard',
    type: 'coursework',
    description:
      'Curriculum covering the CIA Triad (Confidentiality, Integrity, Availability), authentication protocols, access control mechanisms, and organizational security policies.',
    skills: ['Information Security Principles', 'Access Control Models', 'Authentication', 'Security Policies'],
  },
  {
    id: 't-2026-10-infosys-crypto',
    date: 'October 2026',
    title: 'Fundamentals of Cryptography',
    organization: 'Infosys Springboard',
    type: 'coursework',
    description:
      'Study of symmetric and asymmetric encryption algorithms, cryptographic hash functions (SHA-256), digital signatures, and public key infrastructure (PKI).',
    skills: ['Symmetric & Asymmetric Ciphers', 'SHA-256 Hashing', 'PKI', 'Digital Signatures'],
  },
  {
    id: 't-2026-10-infosys-cyber',
    date: 'October 2026',
    title: 'Introduction to Cyber Security',
    organization: 'Infosys Springboard',
    type: 'coursework',
    description:
      'Comprehensive module examining malware topologies, attack surface analysis, network security fundamentals, and defensive countermeasures.',
    skills: ['Malware Vectors', 'Attack Surface Analysis', 'Defensive Architecture', 'Cyber Hygiene'],
  },
  {
    id: 't-cisco-cyber',
    date: 'Date Unspecified',
    isDateUnspecified: true,
    title: 'Introduction to Cyber Security',
    organization: 'Cisco Networking Academy',
    type: 'coursework',
    description:
      'Foundational exploration of cyber threats, social engineering vectors, data confidentiality, network defenses, and legal/ethical practices in modern cybersecurity.',
    skills: ['Network Vulnerabilities', 'Social Engineering Defense', 'Confidentiality & Integrity', 'Security Hygiene'],
  },
  {
    id: 't-2028-grad',
    date: 'Expected 2028',
    title: 'B.E. in Electronics & Communication Engineering',
    organization: 'East West Institute of Technology (EWIT)',
    type: 'academic',
    description:
      'Target graduation for Bachelor of Engineering degree, integrating hardware electronic fundamentals with specialized technical coursework in cybersecurity, cloud defense, and systems engineering.',
    skills: ['Electronics & Communication', 'Embedded Systems', 'Network Protocols', 'Systems Engineering'],
  },
];
