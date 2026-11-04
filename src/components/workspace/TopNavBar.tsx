import React, { useState } from 'react';
import { Search, Sun, Moon, Volume2, VolumeX, Menu, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { isSoundEnabled, toggleSound, playCyberClick, playCyberHover } from '../../utils/cyberAudio';
import { useDigitalClock } from '../../utils/digitalClock';
import { WORKSPACE_SECTIONS } from './types';
import type { SectionId } from './types';
import { BrandLogo } from '../common/BrandLogo';

interface TopNavBarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenCommandPalette: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeSection,
  onNavigate,
  onOpenCommandPalette,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { timeStr, dateStr } = useDigitalClock();

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const handleNavClick = (id: SectionId) => {
    playCyberClick(840, 0.04);
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm), var(--clay-specular)',
      }}
      className="sticky top-0 z-40 w-full h-14 select-none"
    >
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-5 flex items-center justify-between gap-3">
        {/* Left: Brand Identity & Online Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <BrandLogo variant="horizontal" showTag={true} tagText="WORKSPACE" />
          </button>

          {/* Animated Online Status Indicator */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full"
            style={{
              background: 'var(--mint-dim)',
              border: '1px solid var(--green)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--green)',
              fontWeight: 700,
            }}
          >
            <span
              style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)' }}
              className="animate-pulse-terminal"
            />
            <span>SYS_ONLINE</span>
          </div>
        </div>

        {/* Center: Desktop Top Navigation Links */}
        <nav
          aria-label="Desktop Workspace Navigation"
          className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full"
          style={{
            background: 'var(--secondary)',
            border: '1px solid var(--border)',
          }}
        >
          {WORKSPACE_SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={playCyberHover}
                className="relative px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer focus:outline-none"
                style={{
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="topNavPill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, var(--electric-blue), var(--violet))',
                      boxShadow: '0 2px 10px color-mix(in srgb, var(--electric-blue) 45%, transparent)',
                    }}
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.badge && (
                    <span
                      className="text-[9px] px-1 py-0.2 rounded"
                      style={{
                        background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--border)',
                        color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Tools: Search / Command Palette, Theme, Sound, Digital Clock */}
        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playCyberClick(750, 0.03);
              onOpenCommandPalette();
            }}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            style={{
              background: 'var(--secondary)',
              border: '1px solid var(--border)',
            }}
            title="Search / Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[9px] bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]">
              <Command className="w-2.5 h-2.5" />K
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playCyberHover}
            className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            style={{
              background: 'var(--secondary)',
              border: '1px solid var(--border)',
            }}
            title={soundOn ? 'Mute Cyber Audio' : 'Unmute Cyber Audio'}
            aria-label="Toggle audio feedback"
          >
            {soundOn ? (
              <Volume2 className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              playCyberClick(820, 0.04);
              toggleTheme();
            }}
            onMouseEnter={playCyberHover}
            className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            style={{
              background: 'var(--secondary)',
              border: '1px solid var(--border)',
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-[#FFE052]" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[var(--electric-blue)]" />
            )}
          </button>

          {/* Live Digital Clock (Strict Privacy: NO Location, NO Timezone string) */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-xs"
            style={{
              background: 'var(--secondary)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              letterSpacing: '0.04em',
            }}
            title="Live System Clock"
          >
            <span className="text-[var(--neon-cyan)] font-bold">{timeStr || '00:00:00'}</span>
            <span className="hidden xl:inline text-[var(--text-muted)] text-[10px]">({dateStr})</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              playCyberClick(700, 0.03);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[var(--border)] overflow-hidden"
            style={{ background: 'var(--surface)' }}
          >
            <div className="p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between py-1 px-2 mb-1 border-b border-[var(--border)] font-mono text-[11px] text-[var(--text-muted)]">
                <span>DIGITAL CLOCK</span>
                <span className="text-[var(--neon-cyan)] font-bold">{timeStr}</span>
              </div>

              {WORKSPACE_SECTIONS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg font-mono text-xs font-bold text-left transition-colors cursor-pointer"
                    style={{
                      background: isActive ? 'var(--secondary)' : 'transparent',
                      color: isActive ? 'var(--neon-cyan)' : 'var(--text-primary)',
                      border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                    }}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--text-muted)]">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopNavBar;
