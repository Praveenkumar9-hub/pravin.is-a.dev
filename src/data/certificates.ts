export interface CertificateCredential {
  id: string;
  title: string;
  provider: 'Google' | 'Cisco Networking Academy' | 'Infosys Springboard' | 'Ethnotech Academy';
  credentialType: 'Course Completion Credential';
  completionDate?: string;
  hasSpecificDate: boolean;
  summary: string;
  topics: string[];
}

export const CERTIFICATES_DATA: CertificateCredential[] = [
  // Google (2)
  {
    id: 'google-foundations',
    title: 'Foundations of Cybersecurity',
    provider: 'Google',
    credentialType: 'Course Completion Credential',
    completionDate: 'July 2026',
    hasSpecificDate: true,
    summary: 'Core cybersecurity concepts, security domains, threat actor motivations, security ethics, and risk management.',
    topics: ['Cybersecurity Ethics', 'Threat Actor Analysis', 'Security Domains', 'Risk Mitigation'],
  },
  {
    id: 'google-play-it-safe',
    title: 'Play It Safe: Manage Security Risks',
    provider: 'Google',
    credentialType: 'Course Completion Credential',
    completionDate: 'October 2026',
    hasSpecificDate: true,
    summary: 'Threat identification, vulnerability analysis, NIST Cybersecurity Framework application, and incident response.',
    topics: ['NIST Framework', 'Vulnerability Assessment', 'Incident Response', 'Threat Modeling'],
  },

  // Cisco Networking Academy (1)
  {
    id: 'cisco-intro',
    title: 'Introduction to Cyber Security',
    provider: 'Cisco Networking Academy',
    credentialType: 'Course Completion Credential',
    completionDate: 'Date Unspecified',
    hasSpecificDate: false,
    summary: 'Global cyber threats, network vulnerabilities, social engineering defense, confidentiality, and security hygiene.',
    topics: ['Network Vulnerabilities', 'Social Engineering', 'Confidentiality & Integrity', 'Cyber Hygiene'],
  },

  // Infosys Springboard (3)
  {
    id: 'infosys-infosec',
    title: 'Fundamentals of Information Security',
    provider: 'Infosys Springboard',
    credentialType: 'Course Completion Credential',
    completionDate: 'October 2026',
    hasSpecificDate: true,
    summary: 'The CIA Triad, authentication mechanisms, access control architecture, and organizational security policies.',
    topics: ['CIA Triad', 'Access Control Models', 'Authentication', 'Security Governance'],
  },
  {
    id: 'infosys-crypto',
    title: 'Fundamentals of Cryptography',
    provider: 'Infosys Springboard',
    credentialType: 'Course Completion Credential',
    completionDate: 'October 2026',
    hasSpecificDate: true,
    summary: 'Symmetric & asymmetric ciphers, cryptographic hash algorithms (SHA-256), PKI, and digital signature verification.',
    topics: ['Symmetric & Asymmetric Ciphers', 'SHA-256 Hashing', 'PKI', 'Digital Signatures'],
  },
  {
    id: 'infosys-cyber',
    title: 'Introduction to Cyber Security',
    provider: 'Infosys Springboard',
    credentialType: 'Course Completion Credential',
    completionDate: 'October 2026',
    hasSpecificDate: true,
    summary: 'Malware vectors, attack surface minimization, network security controls, and defensive perimeter strategies.',
    topics: ['Malware Vectors', 'Attack Surface Analysis', 'Defensive Architecture', 'Security Controls'],
  },

  // Ethnotech Academy (2)
  {
    id: 'ethnotech-python-1',
    title: 'Python Programming-I with Linux',
    provider: 'Ethnotech Academy',
    credentialType: 'Course Completion Credential',
    completionDate: 'February 2025',
    hasSpecificDate: true,
    summary: 'Core programming foundations in Python combined with Linux terminal navigation, file permissions, and piping.',
    topics: ['Python Data Structures', 'Linux CLI Navigation', 'File Permissions', 'Command Pipelines'],
  },
  {
    id: 'ethnotech-python-2',
    title: 'Python Programming-II with Linux',
    provider: 'Ethnotech Academy',
    credentialType: 'Course Completion Credential',
    completionDate: 'July 2025',
    hasSpecificDate: true,
    summary: 'Advanced Python paradigms including modular architecture, object-oriented concepts, and Linux process management.',
    topics: ['Object-Oriented Programming', 'Linux Processes', 'Modular Code Design', 'Automation Scripting'],
  },
];
