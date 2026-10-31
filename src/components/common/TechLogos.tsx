import React from 'react';

export type TechKey = 'linux' | 'python' | 'cloud' | 'c';

// 1. Official Linux Tux Penguin SVG
export const LinuxLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    viewBox="0 0 340 395"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Tux Body */}
    <path
      d="M167.3 2.1C136.2 3.9 122.9 29.5 120.7 54.1C118.8 74.9 120.8 97.4 116.7 117.8C113 136.1 98.7 151.7 89.2 167C69.3 199.1 52.4 233.7 48.9 271.8C46.1 302.5 56.4 330.1 79.4 349.5C98.4 365.5 127.3 369.3 151.8 370C181.8 370.9 216 366.1 241.6 348.6C265.8 332.1 278.4 303.4 278.1 273.7C277.8 238.1 264.4 204.6 248.8 173.3C239.5 154.5 224.9 137.9 222.7 117C219.8 89.4 223.1 57.7 210.8 32.5C199.9 10.3 182.2 1.2 167.3 2.1Z"
      fill="#1A1C23"
    />
    {/* White Belly */}
    <path
      d="M170.1 144.1C142.5 144.3 121.7 167.6 112.5 192.5C99.8 227 101.9 266.3 111.4 301.2C118.7 328.1 138.8 350.8 167.2 353.4C192.3 355.7 217.4 341.3 227.6 318.5C239.3 292.3 240.2 261.3 234.3 233.2C228.6 206.1 217.9 177.3 196.2 158.4C188.7 151.9 179.3 144 170.1 144.1Z"
      fill="#F5F7FF"
    />
    {/* Golden Beak */}
    <path
      d="M141.2 88.5C139.7 101.8 152.1 113.6 164.8 116.7C177.5 119.8 193.3 118.2 201.2 107.5C207.2 99.3 203.8 89.2 194.5 85.5C178.6 79.2 158.1 79.9 141.2 88.5Z"
      fill="#FFB703"
    />
    {/* Feet */}
    <path
      d="M102.7 334.2C79.8 335.5 56.2 344.9 44.4 365.8C38.6 376.1 43.7 387.6 54.4 391.8C75.2 399.9 101.4 390.6 120.3 380.1C132.8 373.2 143.2 360.2 144.2 345.8C130.6 339.8 116.4 335.7 102.7 334.2Z"
      fill="#FFA500"
    />
    <path
      d="M234.5 334.2C257.4 335.5 281 344.9 292.8 365.8C298.6 376.1 293.5 387.6 282.8 391.8C262 399.9 235.8 390.6 216.9 380.1C204.4 373.2 194 360.2 193 345.8C206.6 339.8 220.8 335.7 234.5 334.2Z"
      fill="#FFA500"
    />
    {/* Eyes */}
    <ellipse cx="147.5" cy="56.2" rx="13.2" ry="19.5" fill="#F5F7FF" />
    <ellipse cx="152.5" cy="57.2" rx="6.5" ry="9.5" fill="#1A1C23" />
    <ellipse cx="188.5" cy="56.2" rx="13.2" ry="19.5" fill="#F5F7FF" />
    <ellipse cx="183.5" cy="57.2" rx="6.5" ry="9.5" fill="#1A1C23" />
  </svg>
);

// 2. Official Python Dual-Snake SVG
export const PythonLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    viewBox="0 0 256 255"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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

// 3. Generic Cloud Computing Infrastructure SVG
export const CloudLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    viewBox="0 0 120 120"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="nexusCloudGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E5FF" />
        <stop offset="1" stopColor="#4263FF" />
      </linearGradient>
    </defs>
    <path
      d="M84 76H38C26.9543 76 18 67.0457 18 56C18 45.4952 26.0966 36.8837 36.4387 36.0697C39.4678 24.5768 49.9836 16 62.5 16C76.8407 16 88.6657 26.9634 90.2524 41.0506C97.1068 42.6644 102 48.7844 102 56C102 67.0457 93.0457 76 82 76"
      stroke="url(#nexusCloudGrad)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="62" cy="50" r="5" fill="#00E5FF" />
    <circle cx="45" cy="58" r="4" fill="#4263FF" />
    <circle cx="78" cy="58" r="4" fill="#9747FF" />
    <line x1="45" y1="58" x2="62" y2="50" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="62" y1="50" x2="78" y2="58" stroke="#9747FF" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="38" y1="92" x2="84" y2="92" stroke="#4263FF" strokeWidth="3" strokeLinecap="round" />
    <line x1="62" y1="76" x2="62" y2="92" stroke="#00E5FF" strokeWidth="3" />
    <circle cx="38" cy="92" r="3" fill="#00E5FF" />
    <circle cx="84" cy="92" r="3" fill="#00E5FF" />
  </svg>
);

// 4. Official C Programming Hexagon Emblem SVG
export const CLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M115.4 30L64 0.3L12.6 30V89.5L64 119.2L115.4 89.5V30Z" fill="#00599C" />
    <path d="M107.8 34.4L64 9.1L20.2 34.4V85.1L64 110.4L107.8 85.1V34.4Z" fill="#004482" />
    <path
      d="M89.7 78.5C84.3 84.4 76.5 88 67.5 88C52.3 88 40 75.7 40 60.5C40 45.3 52.3 33 67.5 33C76.2 33 83.8 36.4 89.2 42.1L78.6 51.5C75.8 47.9 71.9 45.7 67.5 45.7C59.3 45.7 52.7 52.3 52.7 60.5C52.7 68.7 59.3 75.3 67.5 75.3C72 75.3 76 73 78.8 69.3L89.7 78.5Z"
      fill="#FFFFFF"
    />
    <circle cx="94" cy="60.5" r="4" fill="#00E5FF" />
  </svg>
);

export const TECH_ITEMS_CONFIG = [
  {
    key: 'linux' as TechKey,
    name: 'Linux',
    label: 'SYSTEM ENVIRONMENT',
    sublabel: 'Ubuntu POSIX & CLI',
    desc: 'Ubuntu Linux kernel, POSIX CLI tooling, Bash scripting, and GCC compilation pipelines.',
    color: '#FFA500',
    colorDim: 'rgba(255, 165, 0, 0.14)',
    logo: LinuxLogo,
    badge: 'CORE_OS',
  },
  {
    key: 'python' as TechKey,
    name: 'Python',
    label: 'AUTOMATION & ML',
    sublabel: 'Data Science & Defense',
    desc: 'Algorithmic systems, machine learning pipelines (Scikit-Learn), and threat analysis tools.',
    color: '#387EB8',
    colorDim: 'rgba(56, 126, 184, 0.16)',
    logo: PythonLogo,
    badge: 'INTERPRETED',
  },
  {
    key: 'cloud' as TechKey,
    name: 'Cloud Computing',
    label: 'INFRASTRUCTURE',
    sublabel: 'IAM & Distributed Security',
    desc: 'Cloud security fundamentals, IAM access policies, decoupled services, and secure architectures.',
    color: '#00E5FF',
    colorDim: 'rgba(0, 229, 255, 0.16)',
    logo: CloudLogo,
    badge: 'DISTRIBUTED',
  },
  {
    key: 'c' as TechKey,
    name: 'C Programming',
    label: 'PROCEDURAL SYSTEMS',
    sublabel: 'Low-Level GCC Architecture',
    desc: 'Low-level memory management, pointers, ANSI C file I/O, and foundational systems programming.',
    color: '#00599C',
    colorDim: 'rgba(0, 89, 156, 0.16)',
    logo: CLogo,
    badge: 'COMPILED',
  },
];

// Reusable Tech Badge/Pill with Logo
export const TechPill: React.FC<{
  tech: TechKey;
  variant?: 'minimal' | 'full';
  className?: string;
}> = ({ tech, variant = 'minimal', className = '' }) => {
  const item = TECH_ITEMS_CONFIG.find((t) => t.key === tech);
  if (!item) return null;
  const Logo = item.logo;

  if (variant === 'minimal') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold ${className}`}
        style={{
          background: item.colorDim,
          color: 'var(--text-primary)',
          border: `1px solid color-mix(in srgb, ${item.color} 35%, transparent)`,
        }}
      >
        <Logo size={14} className="shrink-0" />
        <span>{item.name}</span>
      </span>
    );
  }

  return (
    <div
      className={`clay clay-hover flex items-center gap-3 p-3 rounded-xl ${className}`}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      <div
        className="p-2 rounded-lg shrink-0 flex items-center justify-center"
        style={{ background: item.colorDim }}
      >
        <Logo size={24} />
      </div>
      <div>
        <div className="font-space font-bold text-sm text-[var(--text-primary)]">{item.name}</div>
        <div className="font-mono text-[10px] text-[var(--text-muted)]">{item.sublabel}</div>
      </div>
    </div>
  );
};
