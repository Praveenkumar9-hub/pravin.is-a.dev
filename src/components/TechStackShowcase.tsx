import React from 'react';
import { motion } from 'framer-motion';
import { playCyberHover } from '../utils/cyberAudio';

// 1. Official Linux Tux SVG Logo
const LinuxLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 340 395" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tux Body Silhouette */}
    <path
      d="M167.3 2.1C136.2 3.9 122.9 29.5 120.7 54.1C118.8 74.9 120.8 97.4 116.7 117.8C113 136.1 98.7 151.7 89.2 167C69.3 199.1 52.4 233.7 48.9 271.8C46.1 302.5 56.4 330.1 79.4 349.5C98.4 365.5 127.3 369.3 151.8 370C181.8 370.9 216 366.1 241.6 348.6C265.8 332.1 278.4 303.4 278.1 273.7C277.8 238.1 264.4 204.6 248.8 173.3C239.5 154.5 224.9 137.9 222.7 117C219.8 89.4 223.1 57.7 210.8 32.5C199.9 10.3 182.2 1.2 167.3 2.1Z"
      fill="#1A1C23"
    />
    {/* White Belly */}
    <path
      d="M170.1 144.1C142.5 144.3 121.7 167.6 112.5 192.5C99.8 227 101.9 266.3 111.4 301.2C118.7 328.1 138.8 350.8 167.2 353.4C192.3 355.7 217.4 341.3 227.6 318.5C239.3 292.3 240.2 261.3 234.3 233.2C228.6 206.1 217.9 177.3 196.2 158.4C188.7 151.9 179.3 144 170.1 144.1Z"
      fill="#F5F7FF"
    />
    {/* Left Foot (Golden Orange) */}
    <path
      d="M102.7 334.2C79.8 335.5 56.2 344.9 44.4 365.8C38.6 376.1 43.7 387.6 54.4 391.8C75.2 399.9 101.4 390.6 120.3 380.1C132.8 373.2 143.2 360.2 144.2 345.8C130.6 339.8 116.4 335.7 102.7 334.2Z"
      fill="#FFA500"
    />
    {/* Right Foot (Golden Orange) */}
    <path
      d="M234.5 334.2C257.4 335.5 281 344.9 292.8 365.8C298.6 376.1 293.5 387.6 282.8 391.8C262 399.9 235.8 390.6 216.9 380.1C204.4 373.2 194 360.2 193 345.8C206.6 339.8 220.8 335.7 234.5 334.2Z"
      fill="#FFA500"
    />
    {/* Beak (Golden Orange) */}
    <path
      d="M141.2 88.5C139.7 101.8 152.1 113.6 164.8 116.7C177.5 119.8 193.3 118.2 201.2 107.5C207.2 99.3 203.8 89.2 194.5 85.5C178.6 79.2 158.1 79.9 141.2 88.5Z"
      fill="#FFB703"
    />
    {/* Left Eye */}
    <ellipse cx="147.5" cy="56.2" rx="13.2" ry="19.5" fill="#F5F7FF" />
    <ellipse cx="152.5" cy="57.2" rx="6.5" ry="9.5" fill="#1A1C23" />
    {/* Right Eye */}
    <ellipse cx="188.5" cy="56.2" rx="13.2" ry="19.5" fill="#F5F7FF" />
    <ellipse cx="183.5" cy="57.2" rx="6.5" ry="9.5" fill="#1A1C23" />
  </svg>
);

// 2. Official Python SVG Logo
const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 256 255" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.58 34.475-33.319V28.187s4.634-28.115-62.518-28.115zm-33.896 18.536a10.065 10.065 0 0 1 10.065 10.065 10.065 10.065 0 0 1-10.065 10.065 10.065 10.065 0 0 1-10.065-10.065 10.065 10.065 0 0 1 10.065-10.065z"
      fill="#387EB8"
    />
    <path
      d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.71c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.58-34.475 33.32v61.434s-4.633 28.115 62.519 28.115zm33.896-18.536a10.065 10.065 0 0 1-10.065-10.065 10.065 10.065 0 0 1 10.065-10.065 10.065 10.065 0 0 1 10.065 10.065 10.065 10.065 0 0 1-10.065 10.065z"
      fill="#FFE052"
    />
  </svg>
);

// 3. Generic Cloud Computing SVG Logo (Not a vendor-specific certification)
const CloudLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloudGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E5FF" />
        <stop offset="1" stopColor="#4263FF" />
      </linearGradient>
    </defs>
    {/* Stylized Cloud Outline with Telemetry Nodes */}
    <path
      d="M84 76H38C26.9543 76 18 67.0457 18 56C18 45.4952 26.0966 36.8837 36.4387 36.0697C39.4678 24.5768 49.9836 16 62.5 16C76.8407 16 88.6657 26.9634 90.2524 41.0506C97.1068 42.6644 102 48.7844 102 56C102 67.0457 93.0457 76 82 76"
      stroke="url(#cloudGrad)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Central Interconnected Data Rays */}
    <circle cx="62" cy="50" r="5" fill="#00E5FF" />
    <circle cx="45" cy="58" r="4" fill="#4263FF" />
    <circle cx="78" cy="58" r="4" fill="#9747FF" />
    <line x1="45" y1="58" x2="62" y2="50" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="62" y1="50" x2="78" y2="58" stroke="#9747FF" strokeWidth="2" strokeDasharray="3 3" />
    {/* Base Network Bus */}
    <line x1="38" y1="92" x2="84" y2="92" stroke="#4263FF" strokeWidth="3" strokeLinecap="round" />
    <line x1="62" y1="76" x2="62" y2="92" stroke="#00E5FF" strokeWidth="3" />
    <circle cx="38" cy="92" r="3" fill="#00E5FF" />
    <circle cx="84" cy="92" r="3" fill="#00E5FF" />
  </svg>
);

// 4. Official C Programming Hexagon SVG Logo
const CLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hexagon Shield */}
    <path
      d="M115.4 30L64 0.3L12.6 30V89.5L64 119.2L115.4 89.5V30Z"
      fill="#00599C"
    />
    <path
      d="M107.8 34.4L64 9.1L20.2 34.4V85.1L64 110.4L107.8 85.1V34.4Z"
      fill="#004482"
    />
    {/* Bold Stylized 'C' Emblem */}
    <path
      d="M89.7 78.5C84.3 84.4 76.5 88 67.5 88C52.3 88 40 75.7 40 60.5C40 45.3 52.3 33 67.5 33C76.2 33 83.8 36.4 89.2 42.1L78.6 51.5C75.8 47.9 71.9 45.7 67.5 45.7C59.3 45.7 52.7 52.3 52.7 60.5C52.7 68.7 59.3 75.3 67.5 75.3C72 75.3 76 73 78.8 69.3L89.7 78.5Z"
      fill="#FFFFFF"
    />
    {/* Cyber Accent Notch */}
    <circle cx="94" cy="60.5" r="4" fill="#00E5FF" />
  </svg>
);

const TECH_ITEMS = [
  {
    id: 'linux',
    name: 'Linux',
    label: 'SYSTEM ENVIRONMENT',
    desc: 'Ubuntu Linux kernel, POSIX CLI tooling, Bash scripting, and GCC compilation pipelines.',
    color: '#FFA500',
    colorDim: 'rgba(255, 165, 0, 0.12)',
    logo: LinuxLogo,
    badge: 'CORE_OS',
  },
  {
    id: 'python',
    name: 'Python',
    label: 'AUTOMATION & ML',
    desc: 'Algorithmic systems, machine learning pipelines (Scikit-Learn), and threat analysis tools.',
    color: '#387EB8',
    colorDim: 'rgba(56, 126, 184, 0.14)',
    logo: PythonLogo,
    badge: 'INTERPRETED',
  },
  {
    id: 'cloud',
    name: 'Cloud',
    label: 'INFRASTRUCTURE',
    desc: 'Cloud security fundamentals, IAM access policies, decoupled services, and secure architectures.',
    color: '#00E5FF',
    colorDim: 'rgba(0, 229, 255, 0.14)',
    logo: CloudLogo,
    badge: 'DISTRIBUTED',
  },
  {
    id: 'c',
    name: 'C Programming',
    label: 'PROCEDURAL SYSTEMS',
    desc: 'Low-level memory management, pointers, ANSI C file I/O, and foundational systems programming.',
    color: '#00599C',
    colorDim: 'rgba(0, 89, 156, 0.14)',
    logo: CLogo,
    badge: 'COMPILED',
  },
];

export const TechStackShowcase: React.FC = () => {
  return (
    <section
      id="tech-stack"
      style={{
        padding: '5rem 0',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: 'var(--neon-cyan)',
                  boxShadow: '0 0 10px var(--neon-cyan)',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--neon-cyan)',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                CORE DISCIPLINES // TECH ARENA
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              TECH ARENA
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
              Four foundational technology pillars powering every software architecture, low-level systems project, and defensive cybersecurity mission.
            </p>
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--neon-cyan)',
              background: 'var(--surface)',
              border: '1px solid var(--neon-cyan)',
              borderRadius: 8,
              padding: '0.45rem 0.85rem',
              letterSpacing: '0.05em',
              fontWeight: 700,
            }}
          >
            INTERACTIVE 3D ARENA
          </div>
        </motion.div>

        {/* 4 Large Interactive 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_ITEMS.map((item, idx) => {
            const Logo = item.logo;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={playCyberHover}
                className="clay relative flex flex-col justify-between"
                style={{
                  background: 'var(--surface)',
                  borderRadius: '1.4rem',
                  border: '1px solid var(--border)',
                  padding: '2rem 1.6rem',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-md), var(--clay-specular)',
                }}
              >
                {/* HUD Corner Brackets */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                {/* Top Badge & Number */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.75rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                    }}
                  >
                    <span
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: 6,
                        background: item.colorDim,
                        color: item.color,
                        fontWeight: 800,
                        border: `1px solid color-mix(in srgb, ${item.color} 35%, transparent)`,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {item.badge}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 800 }}>
                      [ 0{idx + 1} ]
                    </span>
                  </div>

                  {/* Centered Large 3D Interactive Logo */}
                  <motion.div
                    whileHover={{ rotateY: 18, rotateX: -8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 110,
                      marginBottom: '1.75rem',
                      perspective: 600,
                    }}
                  >
                    <div
                      style={{
                        padding: '1.25rem',
                        borderRadius: '1.25rem',
                        background: 'var(--surface-alt, var(--bg))',
                        border: '1px solid var(--border)',
                        boxShadow: `0 8px 24px -4px color-mix(in srgb, ${item.color} 30%, transparent)`,
                      }}
                    >
                      <Logo className="w-16 h-16 drop-shadow-lg" />
                    </div>
                  </motion.div>

                  {/* Titles & Descriptive Label */}
                  <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: item.color,
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.45rem',
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      textAlign: 'center',
                      margin: '0.75rem 0 0',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Footer Accent Indicator */}
                <div
                  style={{
                    marginTop: '1.75rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.color }} />
                  <span>LOADOUT READY</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;

