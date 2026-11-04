import React from 'react';
import { Shield, Cloud, Terminal, Lock, Key, BrainCircuit, GraduationCap, Award, FolderGit2, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './common/SpotlightCard';

const PILLARS = [
  {
    title: 'Systems & Linux',
    icon: Terminal,
    badge: 'SYSTEMS',
    color: 'var(--electric-blue)',
    desc: 'Writing clean code in ANSI C, navigating POSIX shells, managing memory, and compiling with GCC.',
  },
  {
    title: 'Defensive Security',
    icon: Shield,
    badge: 'SECURITY',
    color: 'var(--neon-cyan)',
    desc: 'Analyzing attack surfaces, applying the NIST framework, and understanding how attackers think.',
  },
  {
    title: 'Python & Automation',
    icon: BrainCircuit,
    badge: 'AUTOMATION',
    color: 'var(--green)',
    desc: 'Building automated scripts, telemetry data parsing, and predictive threat scoring with ML.',
  },
  {
    title: 'Cryptography',
    icon: Key,
    badge: 'CIPHERS',
    color: 'var(--electric-blue)',
    desc: 'Symmetric and asymmetric encryption, SHA-256 cryptographic hashing, and security keys.',
  },
  {
    title: 'Cloud Foundations',
    icon: Cloud,
    badge: 'CLOUD',
    color: 'var(--violet)',
    desc: 'IAM access control, cloud fundamentals, decoupled services, and safe web deployment.',
  },
  {
    title: 'InfoSec Principles',
    icon: Lock,
    badge: 'GOVERNANCE',
    color: 'var(--neon-cyan)',
    desc: 'Applying the CIA Triad (Confidentiality, Integrity, Availability) to protect infrastructure.',
  },
];

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 border-t border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 mb-12 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)]" />
            <span className="font-mono text-xs font-bold text-[var(--neon-cyan)] uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] m-0">
            Background &amp; Focus
          </h2>
          <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mt-1">
            A quick overview of what I study, how I build software, and the areas I focus on.
          </p>
        </motion.div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl flex flex-col gap-4 text-left"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="flex items-center gap-2.5 font-space font-bold text-lg text-[var(--text-primary)]">
              <GraduationCap className="w-5 h-5 text-[var(--electric-blue)]" />
              <span>Engineering Journey</span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed m-0">
              I am an Electronics &amp; Communication Engineering student at{' '}
              <strong className="text-[var(--text-primary)] font-semibold">East West Institute of Technology (EWIT)</strong>{' '}
              in Bengaluru (graduating 2028). I like digging into how computers actually function — from how operating systems schedule tasks to how memory is managed in C.
            </p>

            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed m-0">
              Instead of just copying tutorials, I enjoy building projects that solve concrete problems: predicting network attacks before they occur, automating repetitive workflows in Python, and building clean full-stack web applications.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono font-medium">
              <span className="px-3 py-1 rounded-lg bg-[var(--accent-dim)] text-[var(--electric-blue)] border border-[var(--electric-blue)]">
                B.E. ECE (2024–2028)
              </span>
              <span className="px-3 py-1 rounded-lg bg-[var(--cyan-dim)] text-[var(--neon-cyan)] border border-[var(--neon-cyan)]">
                East West Institute of Technology
              </span>
              <span className="px-3 py-1 rounded-lg bg-[var(--mint-dim)] text-[var(--green)] border border-[var(--green)]">
                Bengaluru, India
              </span>
            </div>

            {onOpenResume && (
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[var(--electric-blue)] hover:text-white bg-[var(--surface)] hover:bg-[var(--electric-blue)] border border-[var(--electric-blue)] transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View / Print Full Resume</span>
                </button>
                <a
                  href={`${import.meta.env.BASE_URL}Praveen_resume.pdf`}
                  download="Praveen_resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-white bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-all cursor-pointer"
                  title="Download Praveen_resume.pdf"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                  <span>Download PDF</span>
                </a>
              </div>
            )}
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="p-5 rounded-2xl flex items-center gap-4 text-left"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent-dim)] text-[var(--electric-blue)] shrink-0">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-space font-extrabold text-2xl text-[var(--text-primary)]">
                  6+ Projects
                </div>
                <div className="font-sans text-xs text-[var(--text-secondary)]">
                  Systems, security &amp; full-stack software.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="p-5 rounded-2xl flex items-center gap-4 text-left"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--cyan-dim)] text-[var(--neon-cyan)] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-space font-extrabold text-2xl text-[var(--text-primary)]">
                  8 Credentials
                </div>
                <div className="font-sans text-xs text-[var(--text-secondary)]">
                  Verified certificates from Google, Cisco, Infosys &amp; Ethnotech.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 6 Core Competency Pillars with Dynamic Spotlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={`${p.color}25`}
                  className="p-5 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:shadow-xl hover:border-[var(--electric-blue)] h-full"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'var(--secondary)',
                        border: '1px solid var(--border)',
                        color: p.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                      style={{
                        color: p.color,
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <div className="font-space font-bold text-base text-[var(--text-primary)]">
                    {p.title}
                  </div>

                  <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0">
                    {p.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
