import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon, Volume2, VolumeX, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { isSoundEnabled, toggleSound, playCyberClick, playCyberHover } from '../utils/cyberAudio';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'profile', label: 'PROFILE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'tech-stack', label: 'TECH STACK' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'contact', label: 'CONTACT' },
];

function useISTClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Formatted in Asia/Kolkata timezone: 31 OCT 2026 // 04:30:25 PM IST
      const dateStr = now
        .toLocaleDateString('en-GB', {
          timeZone: 'Asia/Kolkata',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
        .toUpperCase();

      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      setTime(`${dateStr} // ${timeStr} IST`);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());
  const time = useISTClock();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const scrollTo = useCallback((id: string) => {
    playCyberClick(900, 0.04);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled
          ? theme === 'light'
            ? 'rgba(245, 244, 240, 0.92)'
            : 'rgba(8, 10, 18, 0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}
        className="flex items-center justify-between h-16 sm:h-[4.5rem]"
      >
        {/* Left: PRAVEEN.EXE Brand */}
        <button
          onClick={() => scrollTo('home')}
          onMouseEnter={playCyberHover}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          {/* Futuristic Hex/Notch Icon */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: 'linear-gradient(135deg, var(--electric-blue), var(--cyber-violet))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px -2px color-mix(in srgb, var(--electric-blue) 60%, transparent)',
              flexShrink: 0,
              border: '1px solid var(--neon-cyan)',
              transition: 'transform 0.2s ease',
            }}
            className="group-hover:scale-105"
          >
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-1">
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                transition: 'color 0.2s',
              }}
              className="group-hover:text-[var(--neon-cyan)]"
            >
              PRAVEEN.NEXUS
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links with Animated Pill Indicator */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 999,
            padding: '0.35rem 0.6rem',
            boxShadow: 'var(--shadow-sm), var(--clay-specular)',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                onMouseEnter={playCyberHover}
                className="relative px-4 py-1.5 rounded-full cursor-pointer focus:outline-none"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  background: 'none',
                  border: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 999,
                      background: 'linear-gradient(135deg, var(--electric-blue), var(--cyber-violet))',
                      boxShadow: '0 4px 14px color-mix(in srgb, var(--electric-blue) 45%, transparent)',
                    }}
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Tools: Live Clock, Status, Sound & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Live IST clock (31 OCT 2026 // 04:30:25 PM IST) */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.35rem 0.75rem',
              boxShadow: 'var(--shadow-sm)',
              userSelect: 'none',
            }}
          >
            {time || 'CONNECTING...'}
          </div>

          {/* Animated System Status (Terminal Green) */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--terminal-green)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'var(--mint-dim)',
              border: '1px solid var(--terminal-green)',
              borderRadius: 8,
              padding: '0.35rem 0.65rem',
              letterSpacing: '0.04em',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--terminal-green)',
                display: 'inline-block',
              }}
              className="animate-pulse-terminal"
            />
            NEXUS_ACTIVE
          </div>

          {/* Subtle Audio Toggle (Web Audio API) */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playCyberHover}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem',
              cursor: 'pointer',
              color: soundOn ? 'var(--neon-cyan)' : 'var(--text-secondary)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            className="hover:border-[var(--neon-cyan)] focus:outline-none"
            aria-label={soundOn ? 'Mute Interface Sound' : 'Enable Cyber Interface Sound'}
            title={soundOn ? 'Sound FX Enabled (Click to Mute)' : 'Sound FX Muted (Click to Enable)'}
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-60" />}
          </button>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            onMouseEnter={playCyberHover}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            className="hover:border-[var(--electric-blue)] hover:text-[var(--electric-blue)] focus:outline-none"
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to Dark Cyber Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#FFB800]" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={handleSoundToggle}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem',
              cursor: 'pointer',
              color: soundOn ? 'var(--neon-cyan)' : 'var(--text-secondary)',
            }}
            aria-label="Toggle sound"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-60" />}
          </button>

          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#FFB800]" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              overflow: 'hidden',
            }}
            className="lg:hidden px-6 py-4 flex flex-col gap-3"
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: 'var(--text-muted)',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {time}
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    fontWeight: 700,
                    textAlign: 'left',
                    padding: '0.55rem 0',
                    color: isActive ? 'var(--neon-cyan)' : 'var(--text-primary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--neon-cyan)' }} />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
