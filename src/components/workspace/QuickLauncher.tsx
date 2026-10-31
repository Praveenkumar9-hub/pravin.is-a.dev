import React from 'react';
import { Terminal, Shield, FolderCode, Briefcase, Award, Cpu, Mail, X, Sun, Moon, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { playCyberClick, playCyberHover, toggleSound } from '../../utils/cyberAudio';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import type { SectionId } from './types';

interface QuickLauncherProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: SectionId) => void;
  activeSection: SectionId;
}

export const QuickLauncher: React.FC<QuickLauncherProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeSection,
}) => {
  const { theme, toggleTheme } = useTheme();

  const handleSelect = (sec: SectionId) => {
    playCyberClick(840, 0.04);
    onNavigate(sec);
    onClose();
  };

  const navItems: { id: SectionId; label: string; desc: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home Node', desc: 'Praveenkumar Mokashi // Operator identity', icon: Terminal },
    { id: 'projects', label: 'Projects Archive', desc: '6 Verified software & AI engineering missions', icon: FolderCode },
    { id: 'about', label: 'About & Identity', desc: 'ECE undergraduate at EWIT (Class of 2028)', icon: Shield },
    { id: 'experience', label: 'Experience & Programs', desc: 'Yuva Intern & Google Cloud Arcade Facilitator', icon: Briefcase },
    { id: 'certificates', label: 'Certificates Archive', desc: '8 genuine credentials (Google, Cisco, Infosys, Ethnotech)', icon: Award },
    { id: 'toolbox', label: 'Technology Arena', desc: 'Linux, Python, Cloud Computing, C Programming', icon: Cpu },
    { id: 'contact', label: 'Transmit / Contact', desc: 'thepraveenm09@gmail.com', icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'transparent' }}
          />

          {/* Start Menu Flyout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            className="clay fixed bottom-14 left-3 sm:left-6 z-50 w-80 sm:w-96 overflow-hidden select-none"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-bright)',
              borderRadius: '1rem',
              boxShadow: 'var(--shadow-lg), 0 0 25px -5px color-mix(in srgb, var(--electric-blue) 40%, transparent)',
            }}
          >
            {/* Header: User Profile Card */}
            <div
              className="p-3.5 border-b border-[var(--border)] flex items-center justify-between"
              style={{ background: 'var(--secondary)' }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-10 h-10 rounded-lg overflow-hidden border border-[var(--neon-cyan)] shrink-0"
                  style={{ background: 'var(--surface)' }}
                >
                  <img
                    src="./assets/profile-photo.jpg"
                    alt="Praveenkumar Mokashi"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-space font-extrabold text-sm text-[var(--text-primary)] leading-tight">
                    Praveenkumar Mokashi
                  </div>
                  <div className="font-mono text-[10px] text-[var(--neon-cyan)] font-bold">
                    OPERATOR // EWIT 2028
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                aria-label="Close start menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Programs / Sections List */}
            <div className="p-2 flex flex-col gap-1 max-h-72 overflow-y-auto">
              <div className="px-2 py-1 font-mono text-[9px] font-bold text-[var(--text-muted)] tracking-wider">
                CORE WORKSPACE APPLICATIONS
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    onMouseEnter={playCyberHover}
                    className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer group"
                    style={{
                      background: isActive ? 'var(--secondary)' : 'transparent',
                      border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{
                        background: isActive ? 'var(--electric-blue)' : 'var(--secondary)',
                        color: isActive ? '#FFFFFF' : 'var(--neon-cyan)',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-space font-bold text-xs text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">
                        {item.label}
                      </div>
                      <div className="font-mono text-[9px] text-[var(--text-muted)] truncate">
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Quick Controls */}
            <div
              className="p-2.5 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs"
              style={{ background: 'var(--secondary)' }}
            >
              <div className="flex items-center gap-1.5">
                <a
                  href="https://github.com/Praveenkumar9-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/try-to-hack-praveen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={toggleSound}
                  className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors cursor-pointer"
                  title="Toggle Audio"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors cursor-pointer"
                  title="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-[var(--green)] font-bold">
                <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-terminal" />
                <span>ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickLauncher;
