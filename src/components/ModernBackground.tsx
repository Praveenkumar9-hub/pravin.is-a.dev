import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ModernBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: theme === 'light' ? '#F4F7FC' : '#080B16',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Ambient Top Light Beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] opacity-40 blur-[120px]"
        style={{
          background:
            theme === 'light'
              ? 'radial-gradient(ellipse at 50% 0%, rgba(88, 101, 242, 0.25), rgba(0, 229, 255, 0.15), transparent 70%)'
              : 'radial-gradient(ellipse at 50% 0%, rgba(88, 101, 242, 0.35), rgba(0, 229, 255, 0.2), transparent 70%)',
        }}
      />

      {/* Ambient Subtle Accent Glow on Left */}
      <div
        className="absolute top-[35%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            theme === 'light'
              ? 'rgba(0, 179, 204, 0.2)'
              : 'rgba(0, 229, 255, 0.15)',
        }}
      />

      {/* Ambient Subtle Accent Glow on Right */}
      <div
        className="absolute top-[65%] -right-[10%] w-[550px] h-[550px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            theme === 'light'
              ? 'rgba(143, 82, 230, 0.18)'
              : 'rgba(139, 92, 246, 0.16)',
        }}
      />

      {/* Minimal Tech Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            theme === 'light'
              ? 'radial-gradient(rgba(12, 16, 29, 0.08) 1px, transparent 1px)'
              : 'radial-gradient(rgba(245, 247, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Subtle Infrastructure Laser Scan Beam */}
      <div
        className="absolute left-0 right-0 h-[1.5px] pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--neon-cyan), var(--electric-blue), transparent)',
          animation: 'scanLine 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        }}
      />
    </div>
  );
};

export default ModernBackground;

