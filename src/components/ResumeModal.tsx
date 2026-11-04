import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const resumePdfUrl = `${import.meta.env.BASE_URL}Praveen_resume.pdf`;

  const handlePrint = () => {
    // Open the official Praveen_resume.pdf in a new tab with browser vector print controls
    window.open(resumePdfUrl, '_blank');
  };

  const handleCopyText = () => {
    const resumeText = `PRAVEENKUMAR MOKASHI | RESUME
PRAVEENKUMAR MOKASHI
ECE UNDERGRADUATE | CYBERSECURITY & CLOUD SECURITY
Bengaluru, India • thepraveenm09@gmail.com
LinkedIn: https://www.linkedin.com/in/try-to-hack-praveen/
GitHub: https://github.com/Praveenkumar9-hub
Portfolio: https://pravin.is-a.dev

PROFESSIONAL SUMMARY
Electronics and Communication Engineering undergraduate with a focused interest in cybersecurity, cloud infrastructure and secure systems. Building foundational skills in Linux, Python, networking and cloud technologies through coursework, independent learning and hands-on practice. Interested in internship opportunities that offer practical exposure to security operations, infrastructure security and cloud environments.

TECHNICAL SKILLS
- Cybersecurity: Cybersecurity fundamentals, information security, cryptography fundamentals, security risk awareness
- Systems & Networking: Linux, Windows, computer networking fundamentals, command-line environments
- Programming: Python, C programming fundamentals
- Cloud & Tools: AWS fundamentals, Oracle VirtualBox, Ubuntu, Kali Linux

SELECTED ACADEMIC PROJECTS
- AI-Based Network Attack Forecasting: Academic project exploring the use of AI/ML concepts to identify patterns associated with potential network attacks.
- Fake Social Media Account Detection: Academic project focused on identifying suspicious or inauthentic social media profiles using data-driven techniques.
- Online Payment Fraud Detection Using AI: Academic project investigating AI-based approaches for recognizing potentially fraudulent online payment activity.
- Smart Bharat AI: Academic project exploring an AI-based solution concept for a real-world problem.
- Hospital Management System: Academic software project focused on organizing and managing hospital-related information and workflows.

CERTIFICATIONS & LEARNING
• Google — Foundations of Cybersecurity
• Google — Play It Safe: Manage Security Risks
• Cisco Networking Academy — Introduction to Cybersecurity
• Infosys Springboard — Fundamentals of Cryptography
• Infosys Springboard — Foundations of Cybersecurity
• Infosys Springboard — Fundamentals of Information Security
• Ethnotech Academy — Python Programming I & II with Linux

ACTIVITIES & PARTICIPATION
Learn with Community — GDG on Campus, UVCE: Participated in the community learning initiative. Interested in collaborative learning, technical communities and peer knowledge-sharing.

EDUCATION
B.E. — Electronics & Communication Engineering (Expected 2028)
East West Institute of Technology (EWIT), Bengaluru
Autonomous institution affiliated with Visvesvaraya Technological University (VTU)`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl rounded-3xl flex flex-col h-[90vh] max-h-[90vh] overflow-hidden relative shadow-2xl"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px -5px rgba(0, 240, 255, 0.2)',
            }}
          >
            {/* Modal Top Controls Bar */}
            <div
              className="px-4 sm:px-6 py-3.5 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3 select-none shrink-0"
              style={{ background: 'var(--secondary)' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)] animate-ping" />
                <span className="font-space font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  Praveenkumar Mokashi — Official Resume
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[var(--surface)] text-[var(--neon-cyan)] border border-[var(--border)] font-semibold hidden sm:inline">
                  Praveen_resume.pdf
                </span>
              </div>

              {/* Action Buttons: Download PDF, Open PDF, Print, Copy Text, Close */}
              <div className="flex items-center gap-2">
                {/* Direct Download Button for Praveen_resume.pdf */}
                <a
                  href={resumePdfUrl}
                  download="Praveen_resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-sans text-xs font-bold text-white bg-[var(--electric-blue)] hover:brightness-110 shadow-sm transition-all"
                  title="Download Praveen_resume.pdf"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-colors"
                  title="Open Praveen_resume.pdf in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                  <span className="hidden sm:inline">Open PDF</span>
                </a>

                {/* Print PDF Button */}
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--electric-blue)] transition-colors cursor-pointer"
                  title="Print Praveen_resume.pdf"
                >
                  <Printer className="w-3.5 h-3.5 text-[var(--electric-blue)]" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                {/* Copy Text Button */}
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--green)] transition-colors cursor-pointer"
                  title="Copy Plain Text"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                      <span className="text-[var(--green)]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy Text</span>
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Pure Dedicated Embedded PDF Viewer */}
            <div className="w-full flex-1 p-2 sm:p-3 bg-neutral-900/60 flex flex-col overflow-hidden">
              <iframe
                src={`${resumePdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full rounded-2xl border border-[var(--border)] bg-white shadow-inner"
                title="Praveen_resume.pdf"
              />
            </div>

            {/* Modal Bottom Footer Bar */}
            <div
              className="px-6 py-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)] select-none shrink-0"
              style={{ background: 'var(--secondary)' }}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[var(--neon-cyan)] font-semibold">Praveen_resume.pdf</span>
                <span className="text-[var(--text-muted)]">&bull;</span>
                <span className="text-[var(--green)] font-medium">Official Vector PDF</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={resumePdfUrl}
                  download="Praveen_resume.pdf"
                  className="px-4 py-2 rounded-xl font-sans text-xs font-bold text-white bg-[var(--electric-blue)] hover:brightness-110 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Download Praveen_resume.pdf"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Praveen_resume.pdf</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
