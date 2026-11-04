import React, { useState, useEffect } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Link2, FileText, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const [forceEmbedded, setForceEmbedded] = useState<boolean>(false);

  const resumePdfUrl = `${import.meta.env.BASE_URL}Praveen_resume.pdf`;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      const ua = navigator.userAgent || '';
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const isNarrowScreen = window.innerWidth < 768;
      // In modern browsers, navigator.pdfViewerEnabled indicates native inline PDF rendering
      const hasNativePdfViewer = 'pdfViewerEnabled' in navigator ? Boolean(navigator.pdfViewerEnabled) : !isMobileUA;

      // Mobile engines (especially Android Chrome) do not support inline PDF plugins in frames/objects
      setIsMobileDevice(isMobileUA || isNarrowScreen || !hasNativePdfViewer);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handlePrint = () => {
    // Open the official Praveen_resume.pdf in a new tab with browser vector print controls
    window.open(resumePdfUrl, '_blank');
  };

  const handleCopyLink = () => {
    const fullUrl = typeof window !== 'undefined'
      ? new URL(resumePdfUrl, window.location.href).href
      : resumePdfUrl;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
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
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  const showMobileView = isMobileDevice && !forceEmbedded;

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
                <span className="font-space font-bold text-sm sm:text-lg text-[var(--text-primary)] truncate max-w-[200px] sm:max-w-none">
                  Praveenkumar Mokashi — Official Resume
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[var(--surface)] text-[var(--neon-cyan)] border border-[var(--border)] font-semibold hidden md:inline">
                  Praveen_resume.pdf
                </span>
              </div>

              {/* Action Buttons: Download PDF, Open PDF, Print, Copy Link, Copy Text, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* 1. Direct Download Button */}
                <a
                  href={resumePdfUrl}
                  download="Praveen_resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl font-sans text-xs font-bold text-white bg-[var(--electric-blue)] hover:brightness-110 shadow-sm transition-all"
                  title="Download Praveen_resume.pdf"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Download</span>
                  <span className="hidden sm:inline">PDF</span>
                </a>

                {/* 2. Open in New Tab Button */}
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-colors"
                  title="Open Praveen_resume.pdf in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                  <span className="hidden sm:inline">Open PDF</span>
                </a>

                {/* 3. Print PDF Button */}
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--electric-blue)] transition-colors cursor-pointer"
                  title="Print Praveen_resume.pdf"
                >
                  <Printer className="w-3.5 h-3.5 text-[var(--electric-blue)]" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                {/* 4. Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-colors cursor-pointer"
                  title="Copy Direct Link to Resume PDF"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                      <span className="text-[var(--green)] hidden sm:inline">Copied Link</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                      <span className="hidden sm:inline">Copy Link</span>
                    </>
                  )}
                </button>

                {/* 5. Copy Text Button */}
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--green)] transition-colors cursor-pointer"
                  title="Copy Plain Text Resume"
                >
                  {copiedText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                      <span className="text-[var(--green)] hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy Text</span>
                    </>
                  )}
                </button>

                {/* 6. Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer ml-1"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF or Mobile-Friendly Interactive Card */}
            <div className="w-full flex-1 p-2 sm:p-3 bg-neutral-900/60 flex flex-col overflow-hidden relative">
              {showMobileView ? (
                /* Mobile & Fallback View: Graceful, high-visibility layout */
                <div className="w-full h-full overflow-y-auto px-2 py-3 flex flex-col gap-3.5">
                  {/* Hero Notice Card */}
                  <div
                    className="p-4 sm:p-5 rounded-2xl border flex flex-col gap-3 shadow-lg"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center">
                          <FileText className="w-4 h-4 text-[var(--neon-cyan)]" />
                        </div>
                        <div>
                          <div className="font-space font-bold text-sm text-[var(--text-primary)]">
                            Praveen_resume.pdf
                          </div>
                          <div className="font-mono text-[10px] text-[var(--green)] font-semibold">
                            Official Verified PDF &bull; Same-Origin
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[var(--secondary)] text-[var(--text-muted)] border border-[var(--border)]">
                        Mobile Mode
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0">
                      Mobile browsers use your device's native PDF reader for full pinch-to-zoom, search, and crisp vector rendering.
                    </p>

                    {/* Primary Big Touch Buttons for Mobile */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 pt-1">
                      <a
                        href={resumePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-sans text-xs font-bold text-white bg-[var(--electric-blue)] hover:brightness-110 shadow-md transition-all active:scale-[0.98]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Fullscreen PDF</span>
                      </a>

                      <a
                        href={resumePdfUrl}
                        download="Praveen_resume.pdf"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] bg-[var(--secondary)] hover:bg-white/10 border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-all active:scale-[0.98]"
                      >
                        <Download className="w-4 h-4 text-[var(--neon-cyan)]" />
                        <span>Download to Device</span>
                      </a>
                    </div>
                  </div>

                  {/* Immediate Readable Resume Summary Card */}
                  <div
                    className="p-4 sm:p-5 rounded-2xl border flex flex-col gap-3.5 text-left shadow-lg"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div>
                      <h3 className="font-space font-bold text-base text-[var(--text-primary)] tracking-wide">
                        PRAVEENKUMAR MOKASHI
                      </h3>
                      <p className="font-mono text-xs text-[var(--neon-cyan)] font-semibold mt-0.5">
                        ECE UNDERGRADUATE | CYBERSECURITY & CLOUD SECURITY
                      </p>
                      <p className="font-sans text-[11px] text-[var(--text-muted)] mt-1">
                        Bengaluru, India &bull; East West Institute of Technology (EWIT)
                      </p>
                    </div>

                    <div className="border-t border-[var(--border)] pt-3">
                      <div className="font-mono text-[10px] uppercase font-bold text-[var(--electric-blue)] tracking-wider">
                        Professional Summary
                      </div>
                      <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed mt-1 m-0">
                        Electronics and Communication Engineering undergraduate with a focused interest in cybersecurity, cloud infrastructure and secure systems. Building foundational skills in Linux, Python, networking and cloud technologies through coursework, independent learning and hands-on practice.
                      </p>
                    </div>

                    <div className="border-t border-[var(--border)] pt-3">
                      <div className="font-mono text-[10px] uppercase font-bold text-[var(--neon-cyan)] tracking-wider">
                        Technical Skills
                      </div>
                      <div className="flex flex-col gap-1.5 mt-1.5 text-xs">
                        <div>
                          <span className="text-[var(--text-primary)] font-medium">Cybersecurity: </span>
                          <span className="text-[var(--text-secondary)]">Information security, cryptography fundamentals, security risk awareness</span>
                        </div>
                        <div>
                          <span className="text-[var(--text-primary)] font-medium">Systems & Networking: </span>
                          <span className="text-[var(--text-secondary)]">Linux, Windows, computer networking fundamentals, CLI</span>
                        </div>
                        <div>
                          <span className="text-[var(--text-primary)] font-medium">Programming & Cloud: </span>
                          <span className="text-[var(--text-secondary)]">Python, C, AWS fundamentals, Oracle VirtualBox, Kali Linux</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[var(--border)] pt-3 flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() => setForceEmbedded(true)}
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--neon-cyan)] hover:underline cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Force embedded viewer anyway</span>
                      </button>
                      <button
                        onClick={handleCopyText}
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-white cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedText ? 'Copied Full Text' : 'Copy Full Text'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Desktop Native Vector PDF Viewer with in-tag fallback */
                <div className="w-full h-full flex flex-col relative">
                  {forceEmbedded && (
                    <div className="pb-2 flex justify-end">
                      <button
                        onClick={() => setForceEmbedded(false)}
                        className="text-xs text-[var(--neon-cyan)] hover:underline flex items-center gap-1 cursor-pointer bg-[var(--secondary)] px-3 py-1 rounded-lg border border-[var(--border)]"
                      >
                        &larr; Return to mobile view
                      </button>
                    </div>
                  )}
                  <object
                    data={`${resumePdfUrl}#toolbar=1&navpanes=0`}
                    type="application/pdf"
                    className="w-full h-full rounded-2xl border border-[var(--border)] bg-white shadow-inner"
                    title="Praveen_resume.pdf"
                  >
                    {/* Fallback displayed automatically if native PDF plugin is disabled or unavailable */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[var(--surface)] rounded-2xl border border-[var(--border)]">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center mb-3">
                        <FileText className="w-7 h-7 text-[var(--neon-cyan)]" />
                      </div>
                      <h3 className="font-space font-bold text-lg text-[var(--text-primary)] mb-1">
                        Praveen_resume.pdf
                      </h3>
                      <p className="font-sans text-xs text-[var(--text-secondary)] max-w-md mb-5 leading-relaxed">
                        Your browser did not render the inline PDF plugin. Use the buttons below to open or download the vector PDF directly.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={resumePdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[var(--electric-blue)] hover:brightness-110 shadow-sm transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Open Fullscreen PDF</span>
                        </a>
                        <a
                          href={resumePdfUrl}
                          download="Praveen_resume.pdf"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[var(--text-primary)] bg-[var(--secondary)] hover:bg-white/10 border border-[var(--border)] transition-all"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download PDF</span>
                        </a>
                      </div>
                    </div>
                  </object>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer Bar */}
            <div
              className="px-4 sm:px-6 py-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)] select-none shrink-0"
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
                  <span>Download Official PDF</span>
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
