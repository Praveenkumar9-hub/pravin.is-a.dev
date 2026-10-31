import React from 'react';
import { Shield, Cloud, Terminal, Lock, Key, BrainCircuit, GraduationCap, Calendar, User, Code2, Award } from 'lucide-react';
import { playCyberHover } from '../../../utils/cyberAudio';

const DOMAINS = [
  {
    title: 'Cybersecurity',
    icon: Shield,
    badge: 'DEFENSE',
    note: 'NIST CSF & MITRE ATT&CK',
    color: 'var(--neon-cyan)',
    bg: 'var(--cyan-dim)',
    desc: 'Threat surface analysis, defensive security modeling, and NIST risk mitigation frameworks.',
  },
  {
    title: 'Cloud Security',
    icon: Cloud,
    badge: 'INFRA',
    note: 'IAM & Cloud Threat Surface',
    color: 'var(--electric-blue)',
    bg: 'var(--accent-dim)',
    desc: 'IAM architecture, cloud vulnerability reduction, and access control policies.',
  },
  {
    title: 'Linux & Systems',
    icon: Terminal,
    badge: 'KERNEL',
    note: 'POSIX CLI & GCC Internals',
    color: 'var(--violet)',
    bg: 'var(--accent-2-dim)',
    desc: 'POSIX environments, procedural C programming, shell pipelines, and system internals.',
  },
  {
    title: 'Information Security',
    icon: Lock,
    badge: 'GOVERNANCE',
    note: 'CIA Triad & Access Control',
    color: 'var(--green)',
    bg: 'var(--mint-dim)',
    desc: 'The CIA Triad, identity governance, access control models, and security hygiene.',
  },
  {
    title: 'Cryptography',
    icon: Key,
    badge: 'CIPHERS',
    note: 'SHA-256 & PKI Primitives',
    color: 'var(--neon-cyan)',
    bg: 'var(--cyan-dim)',
    desc: 'Symmetric & asymmetric encryption, cryptographic hashing (SHA-256), and PKI concepts.',
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    badge: 'PREDICTIVE',
    note: 'Temporal Anomaly Forecasting',
    color: 'var(--electric-blue)',
    bg: 'var(--accent-dim)',
    desc: 'Supervised classification, anomaly modeling, and predictive network attack forecasting.',
  },
];

export const AboutView: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Header */}
      <div className="border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)]" />
          <span className="font-mono text-xs font-bold text-[var(--neon-cyan)] tracking-wider uppercase">
            Praveen.exe // OPERATOR IDENTITY
          </span>
        </div>
        <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] m-0">
          ABOUT PRAVEENKUMAR MOKASHI
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
          Electronics &amp; Communication Engineering student at East West Institute of Technology (EWIT), focusing on programming, Linux, and cybersecurity foundations.
        </p>
      </div>

      {/* Identity Telemetry Card Grid (Strict Privacy: NO Location details) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <div
          className="clay p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--cyan-dim)] text-[var(--neon-cyan)] shrink-0">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[var(--neon-cyan)] font-bold uppercase">NAME</div>
            <div className="font-space font-bold text-sm text-[var(--text-primary)]">Praveenkumar Mokashi</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">Verified Operator</div>
          </div>
        </div>

        <div
          className="clay p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--accent-dim)] text-[var(--electric-blue)] shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[var(--electric-blue)] font-bold uppercase">EDUCATION</div>
            <div className="font-space font-bold text-sm text-[var(--text-primary)]">B.E. in ECE</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">East West Inst. of Technology</div>
          </div>
        </div>

        <div
          className="clay p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--mint-dim)] text-[var(--green)] shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[var(--green)] font-bold uppercase">COHORT</div>
            <div className="font-space font-bold text-sm text-[var(--text-primary)]">Class of 2028</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">Undergraduate Candidate</div>
          </div>
        </div>

        <div
          className="clay p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--accent-2-dim)] text-[var(--violet)] shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[var(--violet)] font-bold uppercase">ROLE &amp; FOCUS</div>
            <div className="font-space font-bold text-sm text-[var(--text-primary)]">Developer / Student</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">Cyber &amp; Cloud Security</div>
          </div>
        </div>

        <div
          className="clay p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--cyan-dim)] text-[var(--neon-cyan)] shrink-0">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[var(--neon-cyan)] font-bold uppercase">PROJECTS</div>
            <div className="font-space font-bold text-sm text-[var(--text-primary)]">06 Systems Built</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">AI, Linux &amp; Web</div>
          </div>
        </div>

        <div
          className="clay p-4 rounded-xl flex items-start gap-3"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--mint-dim)] text-[var(--green)] shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[var(--green)] font-bold uppercase">CREDENTIALS</div>
            <div className="font-space font-bold text-sm text-[var(--text-primary)]">08 Certifications</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">Google, Cisco, Infosys</div>
          </div>
        </div>
      </div>

      {/* Core Engineering Disciplines */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-space font-bold text-base text-[var(--text-primary)] m-0">
              CORE DISCIPLINES &amp; SPECIALIZATIONS
            </h3>
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)]">
            SYSTEM DOMAINS [06]
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.title}
                onMouseEnter={playCyberHover}
                className="clay clay-hover p-4 rounded-xl flex flex-col justify-between gap-2"
                style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: domain.bg, color: domain.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className="px-1.5 py-0.5 rounded font-mono text-[9px] font-bold"
                      style={{ background: domain.bg, color: domain.color, border: `1px solid ${domain.color}` }}
                    >
                      {domain.badge}
                    </span>
                  </div>
                  <div className="font-space font-bold text-sm text-[var(--text-primary)]">
                    {domain.title}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--neon-cyan)] mb-1">
                    {domain.note}
                  </div>
                  <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0">
                    {domain.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutView;
