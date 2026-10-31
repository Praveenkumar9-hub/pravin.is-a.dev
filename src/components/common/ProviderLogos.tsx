import React from 'react';

export interface ProviderLogoProps {
  className?: string;
  size?: number;
}

// 1. Official Google "G" Vector
export const GoogleLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 20 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

// 2. Official Cisco Networking Academy Bridge Bars Vector
export const CiscoLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 20 }) => (
  <svg viewBox="0 0 100 60" width={size} height={Math.round((size * 60) / 100)} className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="#00BCEB">
      {/* 9 Bridge vertical bars */}
      <rect x="8" y="24" width="5" height="28" rx="2.5" />
      <rect x="18" y="16" width="5" height="36" rx="2.5" />
      <rect x="28" y="28" width="5" height="24" rx="2.5" />
      <rect x="38" y="10" width="5" height="42" rx="2.5" />
      <rect x="48" y="4" width="5" height="48" rx="2.5" />
      <rect x="58" y="10" width="5" height="42" rx="2.5" />
      <rect x="68" y="28" width="5" height="24" rx="2.5" />
      <rect x="78" y="16" width="5" height="36" rx="2.5" />
      <rect x="88" y="24" width="5" height="28" rx="2.5" />
    </g>
  </svg>
);

// 3. Official Infosys Springboard Logo Vector
export const InfosysLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 20 }) => (
  <svg viewBox="0 0 120 40" width={size * 2} height={(size * 2 * 40) / 120} className={className} xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="28" fill="#007CC3" fontFamily="'Space Grotesk', system-ui, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-1px">
      Infosys
    </text>
    <circle cx="106" cy="14" r="3.5" fill="#FF8200" />
  </svg>
);

// 4. Official Ethnotech Academy Logo Vector
export const EthnotechLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 20 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Geometric Hex/Crest with tech circuits */}
    <polygon points="24,2 44,13 44,35 24,46 4,35 4,13" fill="#0D1B2A" stroke="#00F5A0" strokeWidth="2.5" />
    <path d="M16 16 H32 V21 H21 V24 H29 V28 H21 V32 H32" stroke="#00F5A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="33" cy="16" r="2" fill="#536DFF" />
    <circle cx="33" cy="32" r="2" fill="#00E5FF" />
  </svg>
);

// 5. Yuva Intern Logo / Emblem Vector
export const YuvaInternLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 20 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#1C2539" stroke="#387EB8" strokeWidth="2" />
    {/* Stylized 'Y' flame with Python yellow/blue hues */}
    <path d="M14 12 L24 26 L34 12 M24 26 V36" stroke="#FFE052" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="24" cy="24" r="3" fill="#387EB8" />
  </svg>
);

