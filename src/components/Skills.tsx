import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Lock, Key, Cloud, BrainCircuit, Code2 } from 'lucide-react';
import { playCyberClick, playCyberHover } from '../utils/cyberAudio';
import { LinuxLogo, PythonLogo, CloudLogo, CLogo } from './common/TechLogos';

type FilterType = 'all' | 'demonstrated' | 'learning';

interface SkillChip {
  name: string;
  note: string;
  status: 'demonstrated' | 'learning';
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
  badge: string;
  skills: SkillChip[];
}

const LOADOUT_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'var(--electric-blue)',
    bg: 'var(--accent-dim)',
    badge: 'LANGUAGES',
    skills: [
      { name: 'C Language', note: 'ANSI C / C99, pointers, dynamic memory, file I/O', status: 'demonstrated' },
      { name: 'Python', note: 'Core syntax, automation scripts, NumPy, Pandas, Scikit-Learn', status: 'demonstrated' },
      { name: 'TypeScript', note: 'Strongly typed web application engineering', status: 'demonstrated' },
      { name: 'Bash Scripting', note: 'CLI pipelines, automation, environment setup', status: 'demonstrated' },
    ],
  },
  {
    title: 'Linux',
    icon: Terminal,
    color: 'var(--neon-cyan)',
    bg: 'var(--cyan-dim)',
    badge: 'SYSTEMS',
    skills: [
      { name: 'Ubuntu Linux', note: 'Primary terminal development workstation', status: 'demonstrated' },
      { name: 'POSIX Terminal', note: 'grep, awk, sed, file system hierarchies, permissions', status: 'demonstrated' },
      { name: 'GCC Toolchain', note: 'Compiling, linking, header file modularity, Makefiles', status: 'demonstrated' },
      { name: 'Git & GitHub', note: 'Branching, code versioning, commit hygiene', status: 'demonstrated' },
    ],
  },
  {
    title: 'Cybersecurity Fundamentals',
    icon: Shield,
    color: 'var(--cyber-violet)',
    bg: 'var(--accent-2-dim)',
    badge: 'DEFENSE',
    skills: [
      { name: 'Threat Surface Analysis', note: 'Identifying entry points and exposed vectors', status: 'demonstrated' },
      { name: 'NIST CSF', note: 'Identify, Protect, Detect, Respond, Recover framework', status: 'demonstrated' },
      { name: 'MITRE ATT&CK', note: 'Mapping adversarial tactics, techniques, and procedures', status: 'demonstrated' },
      { name: 'Network Defense', note: 'Packet telemetry, anomaly monitoring, IDS concepts', status: 'demonstrated' },
    ],
  },
  {
    title: 'Information Security',
    icon: Lock,
    color: 'var(--terminal-green)',
    bg: 'var(--mint-dim)',
    badge: 'GOVERNANCE',
    skills: [
      { name: 'CIA Triad', note: 'Confidentiality, Integrity, and Availability principles', status: 'demonstrated' },
      { name: 'Access Control', note: 'Least Privilege, RBAC, identity governance', status: 'demonstrated' },
      { name: 'Security Hygiene', note: 'Vulnerability mitigation and risk assessments', status: 'demonstrated' },
      { name: 'Incident Response', note: 'Detection triage, containment protocols, reporting', status: 'learning' },
    ],
  },
  {
    title: 'Cryptography',
    icon: Key,
    color: 'var(--neon-cyan)',
    bg: 'var(--cyan-dim)',
    badge: 'CIPHERS',
    skills: [
      { name: 'Cryptographic Hashing', note: 'SHA-256 data integrity checks and rainbow resistance', status: 'demonstrated' },
      { name: 'Symmetric Encryption', note: 'AES primitives, block cipher modes, secret sharing', status: 'learning' },
      { name: 'Asymmetric Cryptography', note: 'RSA & ECC public/private key fundamentals', status: 'learning' },
      { name: 'PKI & TLS', note: 'Digital certificates, certificate authorities, TLS handshake', status: 'learning' },
    ],
  },
  {
    title: 'Cloud Computing',
    icon: Cloud,
    color: 'var(--electric-blue)',
    bg: 'var(--accent-dim)',
    badge: 'INFRASTRUCTURE',
    skills: [
      { name: 'Cloud Architecture Concepts', note: 'Decoupled services, object storage, compute clusters', status: 'demonstrated' },
      { name: 'IAM Security', note: 'Identity and Access Management policies, role boundaries', status: 'demonstrated' },
      { name: 'Cloud Infrastructure Fundamentals', note: 'Foundational virtualization, containerization, and compute concepts', status: 'learning' },
      { name: 'Cloud Threat Surfaces', note: 'Misconfiguration prevention, storage bucket policies', status: 'learning' },
    ],
  },
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
    color: 'var(--cyber-violet)',
    bg: 'var(--accent-2-dim)',
    badge: 'ANALYTICS',
    skills: [
      { name: 'Temporal Forecasting', note: 'Time-window delta features for attack prediction', status: 'demonstrated' },
      { name: 'Classification Algorithms', note: 'Random Forest, Decision Trees, Logistic Regression', status: 'demonstrated' },
      { name: 'Feature Engineering', note: 'Preprocessing, scaling, categorical encoding, telemetry', status: 'demonstrated' },
      { name: 'Scikit-Learn', note: 'Building end-to-end ML evaluation pipelines', status: 'demonstrated' },
    ],
  },
];

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 0',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost Number */}
      <span
        className="ghost-num"
        style={{
          position: 'absolute',
          right: '3%',
          top: '6%',
          fontSize: 'clamp(7rem, 18vw, 14rem)',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.35,
        }}
      >
        04
      </span>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)', marginBottom: '3.5rem' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: 'var(--terminal-green)',
                  boxShadow: '0 0 10px var(--terminal-green)',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--terminal-green)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                COMPETENCIES // 004
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              MY TECHNICAL LOADOUT
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginTop: '0.75rem',
                maxWidth: 580,
                lineHeight: 1.6,
              }}
            >
              Interactive text-based skill chips across foundational systems, defensive security, infrastructure, and applied machine learning.
            </p>
          </div>

          {/* Status Filter Toggle */}
          <div
            className="flex gap-1.5 p-1.5 rounded-2xl self-start md:self-auto"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm), var(--clay-specular)',
            }}
          >
            {(['all', 'demonstrated', 'learning'] as FilterType[]).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    playCyberClick(780, 0.03);
                    setFilter(tab);
                  }}
                  onMouseEnter={playCyberHover}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: active ? 800 : 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: active
                      ? tab === 'demonstrated'
                        ? '#080A12'
                        : '#FFFFFF'
                      : 'var(--text-secondary)',
                    background: active
                      ? tab === 'demonstrated'
                        ? 'var(--terminal-green)'
                        : tab === 'learning'
                        ? 'var(--cyber-violet)'
                        : 'var(--electric-blue)'
                      : 'transparent',
                    border: 'none',
                    borderRadius: 12,
                    padding: '0.45rem 0.85rem',
                    cursor: 'pointer',
                    boxShadow: active ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOADOUT_CATEGORIES.map((cat, idx) => {
            const filteredSkills = cat.skills.filter((s) => {
              if (filter === 'all') return true;
              return s.status === filter;
            });

            if (filteredSkills.length === 0) return null;

            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
                onMouseEnter={playCyberHover}
                className="clay clay-hover relative"
                style={{
                  background: 'var(--surface)',
                  borderRadius: '1.4rem',
                  padding: '1.6rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* HUD Corner Brackets */}
                <div className="hud-corner-tl" />

                {/* Category Header */}
                <div style={{ paddingBottom: '0.85rem', borderBottom: '1px solid var(--border)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          padding: '0.4rem',
                          borderRadius: 8,
                          background: cat.bg,
                          color: cat.color,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 800,
                          fontSize: '1.1rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {cat.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {cat.title === 'Programming' && (
                        <div className="flex items-center gap-1.5" title="Core Languages: Python & C">
                          <PythonLogo size={16} />
                          <CLogo size={16} />
                        </div>
                      )}
                      {cat.title === 'Linux' && (
                        <div title="Linux POSIX Environment">
                          <LinuxLogo size={16} />
                        </div>
                      )}
                      {cat.title === 'Cloud Computing' && (
                        <div title="Cloud Computing Infrastructure">
                          <CloudLogo size={16} />
                        </div>
                      )}
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9,
                          color: cat.color,
                          background: cat.bg,
                          padding: '0.15rem 0.5rem',
                          borderRadius: 4,
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                        }}
                      >
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Text-based Skill Chips (No fake percentage bars) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {filteredSkills.map((skill, sIdx) => {
                    const isDem = skill.status === 'demonstrated';
                    return (
                      <div
                        key={sIdx}
                        style={{
                          padding: '0.75rem 0.9rem',
                          borderRadius: 12,
                          background: 'var(--surface-alt, var(--bg))',
                          border: '1px solid var(--border)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 700,
                              fontSize: '0.92rem',
                              color: 'var(--text-primary)',
                            }}
                          >
                            {skill.name}
                          </span>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 9,
                              fontWeight: 800,
                              letterSpacing: '0.05em',
                              padding: '0.15rem 0.45rem',
                              borderRadius: 4,
                              color: isDem ? 'var(--terminal-green)' : 'var(--cyber-violet)',
                              background: isDem ? 'var(--mint-dim)' : 'var(--accent-2-dim)',
                              border: `1px solid ${isDem ? 'var(--terminal-green)' : 'var(--cyber-violet)'}`,
                            }}
                          >
                            {isDem ? 'DEMONSTRATED' : 'LEARNING'}
                          </span>
                        </div>

                        {skill.note && (
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '0.78rem',
                              color: 'var(--text-secondary)',
                              margin: 0,
                              lineHeight: 1.45,
                            }}
                          >
                            {skill.note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
