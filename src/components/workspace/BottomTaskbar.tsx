import React from 'react';
import { Terminal, Shield, FolderCode, Briefcase, Award, Cpu, Mail, Sparkles, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { playCyberClick, playCyberHover } from '../../utils/cyberAudio';
import { useDigitalClock } from '../../utils/digitalClock';
import type { SectionId, WindowState } from './types';

interface BottomTaskbarProps {
  activeSection: SectionId;
  windowState: WindowState;
  onToggleWindowState: () => void;
  onOpenStartMenu: () => void;
  isStartMenuOpen: boolean;
  onNavigate: (section: SectionId) => void;
}

export const BottomTaskbar: React.FC<BottomTaskbarProps> = ({
  activeSection,
  windowState,
  onToggleWindowState,
  onOpenStartMenu,
  isStartMenuOpen,
  onNavigate,
}) => {
  const { timeStr } = useDigitalClock();

  const sectionNameMap: Record<SectionId, string> = {
    home: 'HOME.EXE',
    projects: 'PROJECTS.EXE',
    about: 'ABOUT.EXE',
    experience: 'EXPERIENCE.EXE',
    certificates: 'CERTIFICATES.EXE',
    toolbox: 'TOOLBOX.EXE',
    contact: 'CONTACT.EXE',
  };

  const mobileShortcuts: { id: SectionId; icon: React.ComponentType<{ className?: string }>; label: string }[] = [
    { id: 'home', icon: Terminal, label: 'Home' },
    { id: 'projects', icon: FolderCode, label: 'Projects' },
    { id: 'about', icon: Shield, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Exp' },
    { id: 'certificates', icon: Award, label: 'Certs' },
    { id: 'toolbox', icon: Cpu, label: 'Toolbox' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <footer
      aria-label="Desktop Taskbar"
      className="fixed bottom-0 left-0 right-0 z-40 h-11 select-none flex items-center justify-between px-2 sm:px-4"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.4), var(--clay-specular)',
      }}
    >
      {/* Left: Start Button & Active Task Item */}
      <div className="flex items-center gap-2">
        {/* Start Button */}
        <motion.button
          onClick={() => {
            playCyberClick(860, 0.04);
            onOpenStartMenu();
          }}
          onMouseEnter={playCyberHover}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-bold transition-all cursor-pointer focus:outline-none"
          style={{
            background: isStartMenuOpen
              ? 'linear-gradient(135deg, var(--electric-blue), var(--violet))'
              : 'var(--secondary)',
            color: isStartMenuOpen ? '#FFFFFF' : 'var(--text-primary)',
            border: isStartMenuOpen
              ? '1px solid var(--neon-cyan)'
              : '1px solid var(--border)',
            boxShadow: isStartMenuOpen
              ? '0 0 12px color-mix(in srgb, var(--electric-blue) 60%, transparent)'
              : 'var(--shadow-sm)',
          }}
          title="Open System Start Menu"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--neon-cyan)] shrink-0" />
          <span className="tracking-wide">START</span>
          <ChevronUp className={`w-3 h-3 transition-transform ${isStartMenuOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* Central Window Active Tab Pill */}
        <button
          onClick={() => {
            playCyberClick(800, 0.03);
            onToggleWindowState();
          }}
          onMouseEnter={playCyberHover}
          className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md font-mono text-xs transition-all cursor-pointer"
          style={{
            background: windowState === 'minimized' ? 'var(--secondary)' : 'var(--cards)',
            border: windowState === 'minimized' ? '1px dashed var(--border)' : '1px solid var(--border-bright)',
            color: windowState === 'minimized' ? 'var(--text-muted)' : 'var(--text-primary)',
            boxShadow: windowState === 'minimized' ? 'none' : '0 0 10px -2px color-mix(in srgb, var(--electric-blue) 35%, transparent)',
          }}
          title={windowState === 'minimized' ? 'Restore Workspace Window' : 'Minimize to Taskbar'}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              windowState === 'minimized' ? 'bg-[var(--text-muted)]' : 'bg-[var(--neon-cyan)] animate-pulse'
            }`}
          />
          <span className="font-bold">Praveen.exe</span>
          <span className="text-[var(--neon-cyan)] text-[10px]">[{sectionNameMap[activeSection]}]</span>
        </button>
      </div>

      {/* Mobile-Only Compact Navigation Shortcuts */}
      <div className="flex md:hidden items-center gap-1 overflow-x-auto py-0.5">
        {mobileShortcuts.map((sc) => {
          const isActive = activeSection === sc.id;
          const Icon = sc.icon;
          return (
            <button
              key={sc.id}
              onClick={() => {
                playCyberClick(800, 0.03);
                onNavigate(sc.id);
              }}
              className="p-1.5 rounded-md flex items-center justify-center cursor-pointer transition-colors"
              style={{
                background: isActive ? 'var(--secondary)' : 'transparent',
                color: isActive ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                border: isActive ? '1px solid var(--border)' : '1px solid transparent',
              }}
              title={sc.label}
            >
              <Icon className="w-3.5 h-3.5" />
            </button>
          );
        })}
      </div>

      {/* Right: Short System Status & Digital Clock */}
      <div className="flex items-center gap-3">
        {/* Short System Status */}
        <div
          className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-[var(--text-muted)] px-2.5 py-0.5 rounded"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <span className="flex items-center gap-1 text-[var(--green)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse-terminal" />
            <span>CPU: NOMINAL</span>
          </span>
          <span className="text-[var(--border)]">|</span>
          <span className="text-[var(--text-secondary)]">MEM: SECURE</span>
        </div>

        {/* Live Digital Clock (Strict Privacy: NO Location, NO Timezone string) */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-xs font-bold"
          style={{
            background: 'var(--secondary)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
          }}
          title="System Clock"
        >
          <span className="text-[var(--neon-cyan)]">{timeStr || '00:00:00'}</span>
        </div>
      </div>
    </footer>
  );
};

export default BottomTaskbar;
