import React from 'react';
import { GraduationCap, MapPin, Calendar, Shield, Cloud, Terminal, Lock, Key, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { playCyberHover } from '../utils/cyberAudio';

const INTERESTS = [
  {
    title: 'Cybersecurity',
    icon: Shield,
    badge: 'DEFENSE',
    note: 'NIST CSF & MITRE ATT&CK',
    color: 'var(--neon-cyan)',
    bg: 'var(--cyan-dim)',
    desc: 'Threat surface analysis, defensive modeling, and NIST risk mitigation frameworks.',
  },
  {
    title: 'Cloud Security',
    icon: Cloud,
    badge: 'INFRA',
    note: 'IAM & Cloud Threat Surface',
    color: 'var(--electric-blue)',
    bg: 'var(--accent-dim)',
    desc: 'IAM architecture, cloud vulnerability reduction, and access policies.',
  },
  {
    title: 'Linux & Systems',
    icon: Terminal,
    badge: 'KERNEL',
    note: 'POSIX CLI & GCC Internals',
    color: 'var(--cyber-violet)',
    bg: 'var(--accent-2-dim)',
    desc: 'POSIX environments, procedural C programming, shell pipelines, and system internals.',
  },
  {
    title: 'Information Security',
    icon: Lock,
    badge: 'GOVERNANCE',
    note: 'CIA Triad & Access Control',
    color: 'var(--terminal-green)',
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
    desc: 'Symmetric & asymmetric encryption, cryptographic hashing (SHA-256), and PKI.',
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    badge: 'PREDICTIVE',
    note: 'Temporal Anomaly Forecasting',
    color: 'var(--electric-blue)',
    bg: 'var(--accent-dim)',
    desc: 'Supervised classification, anomaly modeling, and predictive attack forecasting.',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
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
        01
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
                  background: 'var(--cyber-violet)',
                  boxShadow: '0 0 10px var(--cyber-violet)',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--cyber-violet)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                PLAYER BACKGROUND // 001
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
              BEHIND THE CODE.
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                marginTop: '1rem',
                maxWidth: 620,
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              "I'm an Electronics and Communication Engineering student interested in programming, Linux, cybersecurity and cloud technologies."
            </p>
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--text-muted)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem 0.85rem',
              letterSpacing: '0.05em',
            }}
          >
            EWIT // BENGALURU // 2028
          </div>
        </motion.div>

        {/* Visually Interesting Split Layout with Portrait & Technical Annotations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* Left: Compact Portrait Card with Technical HUD Annotations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div
              className="clay relative p-6 w-full max-w-sm"
              style={{
                background: 'var(--surface)',
                borderRadius: '1.4rem',
                border: '1px solid var(--border)',
              }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                <span>OPERATOR_ID</span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 800 }}>PKM // 2028</span>
              </div>

              {/* Portrait Image */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '2px solid var(--electric-blue)',
                  marginBottom: '1rem',
                  boxShadow: '0 8px 24px -4px color-mix(in srgb, var(--electric-blue) 35%, transparent)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(to right, transparent, var(--neon-cyan), transparent)',
                    zIndex: 10,
                    animation: 'scanLine 3.5s linear infinite',
                  }}
                />
                <img
                  src="./assets/profile-photo.jpg"
                  alt="Praveenkumar Mokashi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>

              {/* Name & Academic Status */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Praveenkumar Mokashi
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: 'var(--neon-cyan)',
                    marginTop: 3,
                    fontWeight: 700,
                  }}
                >
                  EAST WEST INSTITUTE OF TECHNOLOGY
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Academic Specifications & Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {/* Institution Badge Card */}
            <div
              className="clay p-6"
              style={{
                background: 'var(--surface)',
                borderRadius: '1.25rem',
                border: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--electric-blue)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  marginBottom: 8,
                }}
              >
                ACADEMIC INSTITUTION
              </div>

              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                }}
              >
                East West Institute of Technology
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '0.85rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--text-secondary)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--cyber-violet)]" />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                  <span>Department of ECE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--terminal-green)]" />
                  <span>Expected Graduation: 2028</span>
                </div>
              </div>
            </div>

            {/* Core Philosophy Card */}
            <div
              className="clay p-6"
              style={{
                background: 'var(--surface)',
                borderRadius: '1.25rem',
                border: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--terminal-green)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  marginBottom: 8,
                }}
              >
                ENGINEERING APPROACH
              </div>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Approaching technology through hands-on system building. From writing procedural C programs in Linux terminal environments to designing AI-driven network attack forecasting models, every project is a deliberate step toward mastering cybersecurity architecture and cloud defense.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 6 Technical Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTERESTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onMouseEnter={playCyberHover}
                className="clay clay-hover relative p-6"
                style={{
                  background: 'var(--surface)',
                  borderRadius: '1.25rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        padding: '0.55rem',
                        borderRadius: 10,
                        background: item.bg,
                        color: item.color,
                        border: `1px solid color-mix(in srgb, ${item.color} 30%, transparent)`,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9,
                        fontWeight: 800,
                        color: item.color,
                        letterSpacing: '0.06em',
                        padding: '0.15rem 0.45rem',
                        borderRadius: 4,
                        background: item.bg,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.4rem',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: 'var(--text-muted)',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '0.65rem',
                  }}
                >
                  {item.note}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
