import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { playCyberClick, playCyberHover } from '../utils/cyberAudio';
import { LinuxLogo, PythonLogo, CloudLogo, CLogo } from './common/TechLogos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playCyberClick(880, 0.04);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        padding: '3.5rem 0 2.5rem',
        borderTop: '1px solid var(--border)',
        background: 'var(--surface-alt, var(--bg))',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: 'var(--text-secondary)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* Technology Signature Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 10, letterSpacing: '0.08em' }}>
              TECHNOLOGY SIGNATURE:
            </span>
          </div>

          {/* 4 Official Technology Logos */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Linux */}
            <div
              onMouseEnter={playCyberHover}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md cursor-default"
              style={{
                background: 'rgba(255, 165, 0, 0.08)',
                border: '1px solid rgba(255, 165, 0, 0.25)',
              }}
              title="Linux System Environment"
            >
              <LinuxLogo size={16} />
              <span style={{ color: '#FFA500', fontWeight: 700, fontSize: 10 }}>LINUX</span>
            </div>

            {/* Python */}
            <div
              onMouseEnter={playCyberHover}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md cursor-default"
              style={{
                background: 'rgba(56, 126, 184, 0.08)',
                border: '1px solid rgba(56, 126, 184, 0.25)',
              }}
              title="Python Automation & ML"
            >
              <PythonLogo size={16} />
              <span style={{ color: '#387EB8', fontWeight: 700, fontSize: 10 }}>PYTHON</span>
            </div>

            {/* Cloud */}
            <div
              onMouseEnter={playCyberHover}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md cursor-default"
              style={{
                background: 'rgba(0, 229, 255, 0.08)',
                border: '1px solid rgba(0, 229, 255, 0.25)',
              }}
              title="Cloud Infrastructure & Security"
            >
              <CloudLogo size={16} />
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 700, fontSize: 10 }}>CLOUD</span>
            </div>

            {/* C Programming */}
            <div
              onMouseEnter={playCyberHover}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md cursor-default"
              style={{
                background: 'rgba(0, 89, 156, 0.08)',
                border: '1px solid rgba(0, 89, 156, 0.25)',
              }}
              title="C Procedural Systems"
            >
              <CLogo size={16} />
              <span style={{ color: '#5294E2', fontWeight: 700, fontSize: 10 }}>C LANG</span>
            </div>
          </div>
        </div>

        {/* Main Footer Metadata Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: 'linear-gradient(135deg, var(--electric-blue), var(--cyber-violet))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Terminal className="w-3.5 h-3.5 text-white" />
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
              }}
            >
              PRAVEEN // NEXUS
            </span>
            <span style={{ color: 'var(--neon-cyan)', fontWeight: 800 }}>
              © {new Date().getFullYear()}
            </span>
          </div>

          {/* Center Institution Info */}
          <div
            style={{
              textAlign: 'center',
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            PRAVEENKUMAR MOKASHI · EWIT BENGALURU · CLASS OF 2028
          </div>

          {/* Right Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: 11 }}>
            <a
              href="mailto:thepraveenm09@gmail.com"
              onMouseEnter={playCyberHover}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', fontWeight: 700 }}
              className="hover:text-[var(--neon-cyan)]"
            >
              EMAIL
            </a>

            <a
              href="https://github.com/Praveenkumar9-hub"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCyberHover}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', fontWeight: 700 }}
              className="hover:text-[var(--neon-cyan)]"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/try-to-hack-praveen/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCyberHover}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', fontWeight: 700 }}
              className="hover:text-[var(--neon-cyan)]"
            >
              LINKEDIN
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={playCyberHover}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                color: 'var(--neon-cyan)',
                fontWeight: 800,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
              }}
              className="hover:underline"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
