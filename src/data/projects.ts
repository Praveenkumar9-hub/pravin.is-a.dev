export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: 'Security & AI' | 'Systems & Web' | 'Academic Machine Learning' | 'Academic Application';
  filterTag: 'all' | 'security' | 'systems' | 'ml';
  isAcademicOnly: boolean;
  academicBadge?: string;
  repoUrl?: string;
  description: string;
  overview: string;
  architecture: string[];
  technologies: string[];
  keyHighlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sih-attack-forecasting',
    number: '01',
    title: 'AI-Based Network Attack Forecasting',
    slug: 'SIH26153-AI-Network-Attack-Forecasting',
    category: 'Security & AI',
    filterTag: 'security',
    isAcademicOnly: false,
    repoUrl: 'https://github.com/Praveenkumar9-hub/SIH26153-AI-Network-Attack-Forecasting',
    description:
      'AI-powered network attack forecasting prototype designed to forecast malicious network activity before it occurs in the upcoming 5-minute time window using temporal traffic telemetry, behavioral trend delta features, and MITRE ATT&CK mapping.',
    overview:
      'Unlike traditional intrusion detection systems that primarily identify attacks after suspicious activity is observed, this prototype introduces a proactive forecasting layer that analyzes recent network telemetry and estimates the likelihood of malicious activity in the upcoming 5-minute window.',
    architecture: [
      'Raw Network Traffic Telemetry Preprocessing',
      'Temporal Network States (15-Minute Historical Context)',
      'Behavioral Delta & Trend Feature Extraction',
      'AI Forecasting Model & Attack Probability Estimation',
      'Risk Assessment & Automated MITRE ATT&CK Mapping',
      'Explainable Model Insights & SOC Telemetry Dashboard',
    ],
    technologies: ['Python', 'Machine Learning', 'Temporal Analysis', 'MITRE ATT&CK', 'Network Telemetry', 'Explainable AI'],
    keyHighlights: [
      'Forecasts malicious activity in the upcoming 5-minute window rather than reactive detection',
      'Engineers rate-of-change and delta features across sliding 15-minute time horizons',
      'Maps forecast vectors directly to standard MITRE ATT&CK enterprise tactics',
      'Provides security analysts contextual early runway before breach execution',
    ],
  },
  {
    id: 'smart-bharat-ai',
    number: '02',
    title: 'Smart Bharat AI — Civic Companion',
    slug: 'smart-bharat-ai-companion',
    category: 'Systems & Web',
    filterTag: 'systems',
    isAcademicOnly: false,
    repoUrl: 'https://github.com/Praveenkumar9-hub/smart-bharat-ai-companion',
    description:
      'Enterprise-grade civic companion platform designed for Indian citizens to access government services, match welfare yojanas, file public utility complaints, and receive automated civic advice through an intelligent conversational interface.',
    overview:
      'A decoupled full-stack civic platform integrating Google Gemini 1.5 Flash with Supabase PostgreSQL to democratize access to public welfare schemes, municipal complaint tracking, and automated advisory.',
    architecture: [
      'Frontend: React 19, TypeScript, Vite, Tailwind CSS',
      'Backend Server: Node.js, Express REST API, TypeScript router middleware',
      'Database: Supabase PostgreSQL with Row Level Security (RLS)',
      'AI Layer: Google Gemini 1.5 Flash model for citizen advisory',
      'Civic Modules: Grievance management, yojana matching, timeline resolution',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'Gemini API'],
    keyHighlights: [
      'Dynamic Yojana matching engine tailored to demographic criteria',
      'Citizen grievance workflow with automated priority assessment and tracking logs',
      'Modern responsive interface built on React 19 and scalable component architecture',
      'End-to-end type safety across backend and client communication layers',
    ],
  },
  {
    id: 'hospital-management-c',
    number: '03',
    title: 'Hospital Management System (C / Linux)',
    slug: 'hospital-management-system-c',
    category: 'Systems & Web',
    filterTag: 'systems',
    isAcademicOnly: false,
    repoUrl: 'https://github.com/Praveenkumar9-hub/hospital-management-system-c',
    description:
      'A terminal-based procedural Hospital Management System developed in ANSI C on Ubuntu Linux for managing patient profiles, doctor records, appointment scheduling, and billing simulations using file handling and modular architecture.',
    overview:
      'Built to explore low-level systems programming, memory safety, modular architecture, and file-based data persistence in a native Linux terminal environment using GCC.',
    architecture: [
      'Presentation: Terminal CLI interactive navigation menu',
      'Patient Module: Structured records (ID, name, age, triage details)',
      'Doctor Module: Medical staff scheduling and specialty registry',
      'Appointment Engine: Cross-referencing patient slots with doctor rosters',
      'Billing Engine: Procedural financial calculations and invoice receipt generation',
      'Storage: Disk persistence using standard C I/O (<stdio.h>, <stdlib.h>, <string.h>)',
    ],
    technologies: ['C (ANSI C / C99)', 'Ubuntu Linux', 'GCC Compiler', 'File Handling', 'Modular Architecture', 'POSIX CLI'],
    keyHighlights: [
      'Pure C implementation with zero third-party external dependencies',
      'File handling ensures robust data persistence across terminal execution sessions',
      'Structured modular header design separating business logic from storage',
      'Compiled with GCC on Linux targeting POSIX terminal compliance',
    ],
  },
  {
    id: 'fake-social-media-detection',
    number: '04',
    title: 'Fake Social Media Account Detection',
    slug: 'fake-social-media-account-detection',
    category: 'Academic Machine Learning',
    filterTag: 'ml',
    isAcademicOnly: true,
    academicBadge: 'Academic Project',
    description:
      'Machine Learning model using Random Forest to classify social media accounts as fake or genuine based on profile metadata and user activity features.',
    overview:
      'Academic project tackling online impersonation, bot syndicates, and fraudulent social profiles by analyzing metadata attributes, follower-to-following ratios, engagement patterns, and posting frequencies.',
    architecture: [
      'Dataset Preprocessing & Missing Value Imputation',
      'Feature Engineering: Metadata, engagement ratios, temporal activity signals',
      'Model Training: Random Forest Classifier with Hyperparameter Tuning',
      'Evaluation: Confusion Matrix, ROC-AUC, Precision, and Recall optimization',
    ],
    technologies: ['Python', 'Random Forest Classifier', 'Machine Learning', 'Scikit-Learn', 'Feature Engineering'],
    keyHighlights: [
      'Trained ensemble model capable of capturing non-linear relationships across user profiles',
      'Feature importance analysis highlights follower ratios and profile bio completeness as key predictors',
      'Designed to reduce malicious bot activity and social engineering risks in cyber ecosystems',
      'Academic ML project developed as part of undergraduate coursework',
    ],
  },
  {
    id: 'payment-fraud-detection',
    number: '05',
    title: 'Online Payment Fraud Detection Using AI',
    slug: 'online-payment-fraud-detection-using-ai',
    category: 'Academic Machine Learning',
    filterTag: 'ml',
    isAcademicOnly: true,
    academicBadge: 'Academic Project',
    description:
      'Machine Learning system designed to identify potentially fraudulent online payment transactions by analyzing transaction patterns and anomalous financial behavior.',
    overview:
      'Academic machine learning solution addressing fraud vectors in digital transactions. Analyzes historical transaction records to detect anomalous deviation from established spending behavior.',
    architecture: [
      'Transaction Stream Cleaning & Outlier Removal',
      'Feature Extraction: Velocity checks, geo-distance anomalies, transaction amount z-scores',
      'Supervised Anomaly Detection and Classification Pipeline',
      'Threshold Tuning for minimizing False Positives in payment flows',
    ],
    technologies: ['Python', 'Machine Learning', 'Anomaly Detection', 'Fraud Analytics', 'Scikit-Learn'],
    keyHighlights: [
      'Targets high-risk transaction anomalies in real-time simulated payment gateways',
      'Balanced sampling techniques applied to address heavy dataset class imbalances',
      'Focuses on protecting financial integrity through automated risk tagging',
      'Academic project developed as part of undergraduate studies',
    ],
  },
  {
    id: 'online-student-portal',
    number: '06',
    title: 'Online Student Portal',
    slug: 'online-student-portal',
    category: 'Academic Application',
    filterTag: 'systems',
    isAcademicOnly: true,
    academicBadge: 'Academic Project',
    description:
      'Desktop administrative system for managing student records, grade tracking, and departmental admissions with an interactive Python Tkinter GUI and MySQL database.',
    overview:
      'Academic software application integrating an intuitive desktop user interface with structured relational database storage to facilitate educational administrative workflows.',
    architecture: [
      'Frontend Desktop UI: Python Tkinter graphical layout and form validators',
      'Controller Logic: Python CRUD event handlers and student registration routines',
      'Database Engine: MySQL relational database schema with indexed student records',
      'Data Integrity: Foreign key constraints for courses, departments, and enrollments',
    ],
    technologies: ['Python', 'Tkinter GUI', 'MySQL', 'Database Design', 'CRUD Architecture'],
    keyHighlights: [
      'Interactive desktop interface for student registration and departmental management',
      'Direct integration with MySQL database via Python database connectors',
      'Modular form validations preventing erroneous student record entry',
      'Academic engineering project demonstrating end-to-end GUI-to-database workflows',
    ],
  },
];
