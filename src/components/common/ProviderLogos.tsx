import React from 'react';

export interface ProviderLogoProps {
  className?: string;
  size?: number;
}

// 1. Official Google "G" Vector (4-color)
export const GoogleLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 24 }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google"
  >
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

// 2. Official Cisco Networking Academy Bridge Bars Vector
export const CiscoLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 26 }) => (
  <svg
    viewBox="0 0 100 60"
    width={size}
    height={Math.round((size * 60) / 100)}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Cisco"
  >
    <g fill="#00BCEB">
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
export const InfosysLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 24 }) => (
  <svg
    viewBox="0 0 160 48"
    width={Math.round((size * 160) / 48)}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Infosys Springboard"
  >
    <text
      x="2"
      y="26"
      fill="#007CC3"
      fontFamily="'Space Grotesk', system-ui, sans-serif"
      fontWeight="800"
      fontSize="24"
      letterSpacing="-0.5px"
    >
      Infosys
    </text>
    <circle cx="94" cy="14" r="3.5" fill="#FF8200" />
    <text
      x="2"
      y="42"
      fill="#FF8200"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="700"
      fontSize="12"
      letterSpacing="1.5px"
    >
      SPRINGBOARD
    </text>
  </svg>
);

// 4. Official Ethnotech Academy Logo (10-Petal Royal Blue Star Emblem)
export const EthnotechLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 26 }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Ethnotech Academy"
  >
    <defs>
      <linearGradient id="ethnotech-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B7CC6" />
        <stop offset="100%" stopColor="#0566A0" />
      </linearGradient>
    </defs>
    <path
      d="M 40.14 8.32 L 38.66 10.28 L 36.99 14.29 L 36.04 20.07 L 36.47 28.08 L 38.41 36.98 L 29.46 31.19 L 21.45 28.45 L 16.56 28.06 L 11.34 28.53 L 11.30 29.41 L 12.11 30.64 L 15.67 34.63 L 22.79 39.42 L 29.91 42.34 L 36.13 43.42 L 43.38 43.21 L 46.43 36.09 L 47.26 31.64 L 47.33 26.75 L 45.47 17.85 L 43.70 13.71 L 40.14 8.32 Z M 58.83 8.27 L 54.73 14.29 L 52.46 20.96 L 51.60 26.75 L 52.22 35.20 L 54.22 42.32 L 54.82 43.01 L 58.38 43.74 L 65.06 43.72 L 69.50 42.86 L 75.73 40.36 L 82.85 35.33 L 86.41 31.80 L 87.06 30.30 L 83.74 29.25 L 76.18 29.39 L 69.06 31.59 L 59.72 36.83 L 59.29 36.53 L 62.05 28.08 L 62.87 20.96 L 62.48 16.96 L 60.74 10.73 L 59.67 8.50 L 58.83 8.27 Z M 10.77 44.97 L 6.79 45.88 L 6.00 46.77 L 8.55 49.95 L 12.11 52.57 L 15.67 54.42 L 21.45 56.15 L 31.93 57.89 L 24.60 63.23 L 19.88 68.57 L 17.45 72.59 L 15.54 77.47 L 15.32 80.14 L 17.00 80.33 L 23.68 77.32 L 27.26 74.80 L 31.33 70.79 L 36.59 63.68 L 39.34 55.67 L 37.74 53.44 L 33.32 49.88 L 25.90 46.23 L 19.67 44.85 L 10.77 44.97 Z M 76.18 46.30 L 69.06 48.49 L 65.50 50.50 L 61.50 53.44 L 59.99 55.22 L 60.02 56.56 L 62.31 63.68 L 68.33 72.57 L 72.62 76.77 L 75.98 79.25 L 80.24 81.47 L 82.78 81.92 L 82.89 80.14 L 81.96 76.53 L 79.21 70.35 L 75.22 65.01 L 67.19 57.89 L 77.96 57.10 L 82.85 55.86 L 89.97 52.58 L 94.00 48.55 L 92.52 47.66 L 86.41 46.20 L 76.18 46.30 Z M 48.59 62.25 L 45.92 63.66 L 41.27 67.23 L 38.78 69.90 L 35.62 74.80 L 32.13 84.66 L 31.76 91.26 L 33.02 91.75 L 36.58 89.94 L 41.72 85.03 L 44.18 81.47 L 49.48 69.84 L 53.01 78.36 L 56.60 83.69 L 61.58 88.59 L 65.06 90.87 L 67.45 91.71 L 67.79 89.04 L 66.27 81.92 L 62.15 73.91 L 57.99 68.57 L 54.38 65.26 L 50.82 62.82 L 48.59 62.25 Z"
      fill="url(#ethnotech-star-grad)"
      fillRule="evenodd"
    />
  </svg>
);

// 5. Official GDG (Google Developer Groups) On Campus Vector
export const GdgLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 26 }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="GDG on Campus"
  >
    {/* GDG Brackets in Official 4 Google Colors */}
    <g transform="translate(4, 8)">
      {/* Left Bracket: Blue & Red */}
      <path d="M12 4 L4 16 L12 28" stroke="#4285F4" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="4" cy="16" r="3" fill="#EA4335" />
      {/* Right Bracket: Yellow & Green */}
      <path d="M28 4 L36 16 L28 28" stroke="#34A853" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="36" cy="16" r="3" fill="#FBBC05" />
    </g>
  </svg>
);

// 6. Google Cloud Arcade Facilitator Program Vector
export const GoogleCloudArcadeLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 26 }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google Cloud Arcade"
  >
    <circle cx="24" cy="24" r="22" fill="#0C1322" stroke="#4285F4" strokeWidth="2" />
    {/* Glowing Arcade Pixel Joystick / Cloud Crest */}
    <path
      d="M17 19 C17 15.5 20.5 13 24 13 C27.5 13 31 15.5 31 19 C34 19.5 36 22 36 25 C36 28.5 33 31 29 31 H17 C13.5 31 11 28.5 11 25 C11 22 13.5 19.5 17 19 Z"
      fill="#4285F4"
      opacity="0.9"
    />
    <circle cx="20" cy="23" r="2" fill="#EA4335" />
    <circle cx="24" cy="23" r="2" fill="#FBBC05" />
    <circle cx="28" cy="23" r="2" fill="#34A853" />
    <text x="24" y="40" textAnchor="middle" fill="#00E5FF" fontSize="7" fontFamily="'JetBrains Mono', monospace" fontWeight="800">
      ARCADE
    </text>
  </svg>
);

// 7. Yuva Intern by Henry Harvin Vector
export const YuvaInternLogo: React.FC<ProviderLogoProps> = ({ className = '', size = 26 }) => (
  <svg
    viewBox="0 0 72 36"
    width={Math.round((size * 72) / 36)}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Yuva Intern"
  >
    <rect width="72" height="36" rx="8" fill="#FFFFFF" />
    {/* Yuva Text */}
    <text x="6" y="20" fill="#FF5722" fontFamily="'Space Grotesk', system-ui, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.5px">
      yuva
    </text>
    {/* Intern Subtitle */}
    <text x="6" y="30" fill="#37474F" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="8" letterSpacing="1px">
      INTERN
    </text>
    <circle cx="62" cy="18" r="4.5" fill="#FF5722" />
  </svg>
);

// 8. Provider Logo Mapper Helper
export const getProviderLogo = (providerName: string, size = 24) => {
  if (providerName.toLowerCase().includes('gdg') || providerName.toLowerCase().includes('uvce')) {
    return <GdgLogo size={size} />;
  }
  if (providerName.toLowerCase().includes('arcade') || providerName.toLowerCase().includes('facilitator')) {
    return <GoogleCloudArcadeLogo size={size} />;
  }
  if (providerName.toLowerCase().includes('yuva')) {
    return <YuvaInternLogo size={size} />;
  }
  if (providerName.toLowerCase().includes('google')) {
    return <GoogleLogo size={size} />;
  }
  if (providerName.toLowerCase().includes('cisco')) {
    return <CiscoLogo size={size + 4} />;
  }
  if (providerName.toLowerCase().includes('infosys') || providerName.toLowerCase().includes('springboard')) {
    return <InfosysLogo size={size} />;
  }
  if (providerName.toLowerCase().includes('ethnotech')) {
    return <EthnotechLogo size={size} />;
  }
  return null;
};
