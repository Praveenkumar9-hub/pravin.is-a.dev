import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, User, FolderCode, Briefcase, Award, Cpu, Mail, Copy, Check, Sun, Moon, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { playCyberClick, playCyberHover, toggleSound } from '../../utils/cyberAudio';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import type { SectionId } from './types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: SectionId) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playCyberClick(750, 0.03);
          // Handled by parent or trigger
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    playCyberClick(880, 0.04);
    navigator.clipboard.writeText('thepraveenm09@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actions = [
    {
      category: 'NAVIGATION',
      items: [
        { id: 'home', label: 'Go to Home Screen', icon: User, action: () => onNavigate('home') },
        { id: 'projects', label: 'Go to Projects (6 Missions)', icon: FolderCode, action: () => onNavigate('projects') },
        { id: 'about', label: 'Go to About Me & Telemetry', icon: User, action: () => onNavigate('about') },
        { id: 'experience', label: 'Go to Experience (Internship & Cloud Program)', icon: Briefcase, action: () => onNavigate('experience') },
        { id: 'certificates', label: 'Go to Certificates (8 Course Completions)', icon: Award, action: () => onNavigate('certificates') },
        { id: 'toolbox', label: 'Go to Toolbox (Linux / Python / Cloud / C)', icon: Cpu, action: () => onNavigate('toolbox') },
        { id: 'contact', label: 'Go to Contact', icon: Mail, action: () => onNavigate('contact') },
      ],
    },
    {
      category: 'ACTIONS & SYSTEM',
      items: [
        {
          id: 'copy-email',
          label: copied ? 'Email Copied!' : 'Copy Email Address (thepraveenm09@gmail.com)',
          icon: copied ? Check : Copy,
          action: handleCopyEmail,
        },
        {
          id: 'toggle-theme',
          label: `Switch Theme to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
          icon: theme === 'dark' ? Sun : Moon,
          action: () => {
            playCyberClick(800, 0.04);
            toggleTheme();
          },
        },
        {
          id: 'toggle-sound',
          label: 'Toggle Cyber Audio Effects',
          icon: Volume2,
          action: () => {
            toggleSound();
          },
        },
        {
          id: 'github',
          label: 'Open GitHub Profile',
          icon: GithubIcon,
          action: () => window.open('https://github.com/Praveenkumar9-hub', '_blank'),
        },
        {
          id: 'linkedin',
          label: 'Open LinkedIn Profile',
          icon: LinkedinIcon,
          action: () => window.open('https://www.linkedin.com/in/try-to-hack-praveen/', '_blank'),
        },
      ],
    },
  ];

  const filtered = actions
    .map((grp) => ({
      ...grp,
      items: grp.items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    }))
    .filter((grp) => grp.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="clay relative w-full max-w-xl overflow-hidden z-10"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-bright)',
              borderRadius: '1rem',
              boxShadow: 'var(--shadow-lg), 0 0 30px -5px color-mix(in srgb, var(--electric-blue) 35%, transparent)',
            }}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)]">
              <Search className="w-4 h-4 text-[var(--neon-cyan)] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-3">
              {filtered.map((grp) => (
                <div key={grp.category} className="flex flex-col gap-1">
                  <div className="px-3 py-1 font-mono text-[10px] font-bold text-[var(--text-muted)] tracking-wider">
                    {grp.category}
                  </div>
                  {grp.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          item.action();
                          if (item.id !== 'copy-email') onClose();
                        }}
                        onMouseEnter={playCyberHover}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-mono text-[var(--text-primary)] hover:bg-[var(--secondary)] hover:text-[var(--neon-cyan)] transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--neon-cyan)]" />
                          <span>{item.label}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--neon-cyan)]" />
                      </button>
                    );
                  })}
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="py-8 text-center font-mono text-xs text-[var(--text-muted)]">
                  No commands matched "{query}"
                </div>
              )}
            </div>

            {/* Modal Footer Key Hints */}
            <div className="px-4 py-2 border-t border-[var(--border)] bg-[var(--secondary)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
              <span>USE ESC TO CLOSE</span>
              <span>Praveen.exe PALETTE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
