import React from 'react';
import { User, FolderCode, Briefcase, Award, Cpu, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { playCyberClick, playCyberHover } from '../../utils/cyberAudio';
import { GithubIcon } from '../common/SocialIcons';
import type { SectionId } from './types';

interface SideShortcutsProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

interface ShortcutItem {
  id?: SectionId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgDim: string;
  isExternal?: boolean;
  href?: string;
  badge?: string;
}

const SHORTCUTS: ShortcutItem[] = [
  {
    id: 'about',
    label: 'About Me',
    icon: User,
    color: 'var(--neon-cyan)',
    bgDim: 'rgba(0, 229, 255, 0.14)',
    badge: 'PKM',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: FolderCode,
    color: 'var(--electric-blue)',
    bgDim: 'rgba(83, 109, 255, 0.14)',
    badge: '06',
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: Briefcase,
    color: 'var(--green)',
    bgDim: 'rgba(0, 245, 160, 0.14)',
    badge: 'EXP',
  },
  {
    id: 'certificates',
    label: 'Certificates',
    icon: Award,
    color: 'var(--violet)',
    bgDim: 'rgba(166, 107, 255, 0.14)',
    badge: '08',
  },
  {
    id: 'toolbox',
    label: 'Toolbox',
    icon: Cpu,
    color: 'var(--neon-cyan)',
    bgDim: 'rgba(0, 229, 255, 0.14)',
    badge: '4 LOGOS',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Mail,
    color: 'var(--electric-blue)',
    bgDim: 'rgba(83, 109, 255, 0.14)',
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    color: '#F5F7FF',
    bgDim: 'rgba(245, 247, 255, 0.12)',
    isExternal: true,
    href: 'https://github.com/Praveenkumar9-hub',
  },
];

export const SideShortcuts: React.FC<SideShortcutsProps> = ({ activeSection, onNavigate }) => {
  const handleClick = (item: ShortcutItem) => {
    playCyberClick(840, 0.04);
    if (item.isExternal && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (item.id) {
      onNavigate(item.id);
    }
  };

  return (
    <aside
      aria-label="Desktop Side Shortcuts"
      className="hidden md:flex flex-col gap-3 shrink-0 py-2 select-none z-20"
      style={{ width: '84px' }}
    >
      <div className="font-mono text-[9px] font-bold text-[var(--text-muted)] tracking-wider px-1 text-center">
        SHORTCUTS
      </div>

      <div className="flex flex-col gap-2.5">
        {SHORTCUTS.map((item) => {
          const isActive = !item.isExternal && item.id === activeSection;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.label}
              onClick={() => handleClick(item)}
              onMouseEnter={playCyberHover}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group flex flex-col items-center justify-center p-2 rounded-xl transition-all cursor-pointer relative focus:outline-none"
              style={{
                background: isActive ? 'var(--surface)' : 'rgba(21, 27, 43, 0.45)',
                border: isActive
                  ? `1px solid ${item.color}`
                  : '1px solid var(--border)',
                boxShadow: isActive
                  ? `0 0 16px -2px color-mix(in srgb, ${item.color} 40%, transparent), var(--clay-specular)`
                  : 'var(--shadow-sm)',
              }}
              title={item.label}
            >
              {/* Active Indicator Notch */}
              {isActive && (
                <div
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full"
                  style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }}
                />
              )}

              {/* 3D Icon Container */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-1 transition-transform group-hover:scale-110"
                style={{
                  background: item.bgDim,
                  border: `1px solid color-mix(in srgb, ${item.color} 30%, transparent)`,
                  color: item.color,
                }}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Label */}
              <span
                className="font-mono text-[10px] font-bold tracking-tight text-center leading-tight transition-colors"
                style={{
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {item.label}
              </span>

              {/* External Link or Badge */}
              {item.isExternal ? (
                <span className="text-[8px] font-mono text-[var(--text-muted)] flex items-center gap-0.5 mt-0.5">
                  <ExternalLink className="w-2.5 h-2.5" /> EXT
                </span>
              ) : item.badge ? (
                <span
                  className="text-[8px] font-mono font-bold px-1 rounded mt-0.5"
                  style={{
                    background: 'var(--secondary)',
                    color: item.color,
                    border: '1px solid var(--border)',
                  }}
                >
                  {item.badge}
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
};

export default SideShortcuts;
