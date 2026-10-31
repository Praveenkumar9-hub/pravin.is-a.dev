import React, { useRef } from 'react';
import { Minus, X, Terminal, Shield, FolderCode, Briefcase, Award, Cpu, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playCyberClick, playCyberHover } from '../../utils/cyberAudio';
import { WORKSPACE_SECTIONS } from './types';
import type { SectionId, WindowState } from './types';
import { HomeView } from './sections/HomeView';
import { ProjectsView } from './sections/ProjectsView';
import { AboutView } from './sections/AboutView';
import { ExperienceView } from './sections/ExperienceView';
import { CertificatesView } from './sections/CertificatesView';
import { ToolboxView } from './sections/ToolboxView';
import { ContactView } from './sections/ContactView';

interface CentralWindowProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  windowState: WindowState;
  onSetWindowState: (state: WindowState) => void;
}

export const CentralWindow: React.FC<CentralWindowProps> = ({
  activeSection,
  onNavigate,
  windowState,
  onSetWindowState,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (id: SectionId) => {
    playCyberClick(820, 0.03);
    onNavigate(id);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClose = () => {
    playCyberClick(700, 0.04);
    // Reset to home and ensure window is visible
    onNavigate('home');
    if (windowState === 'minimized') {
      onSetWindowState('normal');
    }
  };

  const handleMinimize = () => {
    playCyberClick(650, 0.04);
    onSetWindowState('minimized');
  };

  const sectionIcons: Record<SectionId, React.ComponentType<{ className?: string }>> = {
    home: Terminal,
    projects: FolderCode,
    about: Shield,
    experience: Briefcase,
    certificates: Award,
    toolbox: Cpu,
    contact: Mail,
  };

  const ActiveIcon = sectionIcons[activeSection];

  return (
    <AnimatePresence>
      {windowState !== 'minimized' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="flex-1 flex flex-col z-10 transition-all duration-300 w-full max-w-5xl max-h-[84vh]"
          style={{ minHeight: '520px' }}
        >
          {/* Central Window Frame */}
          <div
            className="clay flex-1 flex flex-col rounded-2xl overflow-hidden relative"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-bright)',
              boxShadow: 'var(--shadow-lg), 0 0 35px -6px color-mix(in srgb, var(--electric-blue) 35%, transparent), var(--clay-specular)',
            }}
          >
            {/* Window Corner Brackets */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            {/* Custom Cyber Title Bar (Balanced without Maximize button) */}
            <div
              className="h-11 px-3.5 sm:px-4 border-b border-[var(--border)] flex items-center justify-between select-none shrink-0"
              style={{ background: 'var(--secondary)' }}
            >
              {/* Left Window Control Buttons: Close + Minimize */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-2">
                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#FF5F56] hover:brightness-110 text-black/70 cursor-pointer transition-all"
                    title="Reset to Home (Close)"
                    aria-label="Close window"
                  >
                    <X className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition-opacity" />
                  </button>

                  {/* Minimize Button */}
                  <button
                    onClick={handleMinimize}
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#FFBD2E] hover:brightness-110 text-black/70 cursor-pointer transition-all"
                    title="Minimize to Taskbar"
                    aria-label="Minimize window"
                  >
                    <Minus className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition-opacity" />
                  </button>
                </div>

                <div className="h-4 w-[1px] bg-[var(--border)] mx-1" />

                {/* Window App Title */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-primary)] font-bold">
                  <ActiveIcon className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                  <span className="hidden sm:inline">Praveen.exe</span>
                  <span className="text-[var(--text-muted)]">—</span>
                  <span className="text-[var(--neon-cyan)] uppercase font-extrabold">
                    [{activeSection}.exe]
                  </span>
                </div>
              </div>

              {/* Right: Window Status */}
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--green)] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                  <span>SECURE_SESSION</span>
                </div>
              </div>
            </div>

            {/* Internal Navigation Bar (Persistent Workspace Tab Bar) */}
            <div
              className="px-3 sm:px-4 py-2 border-b border-[var(--border)] flex items-center justify-between select-none shrink-0 overflow-x-auto gap-2"
              style={{ background: 'var(--surface)' }}
            >
              <div className="flex items-center gap-1">
                {WORKSPACE_SECTIONS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      onMouseEnter={playCyberHover}
                      className="relative px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer focus:outline-none shrink-0"
                      style={{
                        color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="internalNavPill"
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: 'linear-gradient(135deg, var(--electric-blue), var(--violet))',
                            boxShadow: '0 2px 10px color-mix(in srgb, var(--electric-blue) 45%, transparent)',
                          }}
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span
                            className="text-[9px] px-1 py-0.2 rounded"
                            style={{
                              background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--cards)',
                              color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                              border: isActive ? 'none' : '1px solid var(--border)',
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-[var(--text-muted)]">
                <span>TAB:</span>
                <span className="text-[var(--neon-cyan)] font-bold uppercase">{activeSection}</span>
              </div>
            </div>

            {/* Window Content Area (Professional Scrolling Container) */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 relative"
              style={{ background: 'var(--surface)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {activeSection === 'home' && <HomeView onNavigate={handleNavClick} />}
                  {activeSection === 'projects' && <ProjectsView />}
                  {activeSection === 'about' && <AboutView />}
                  {activeSection === 'experience' && <ExperienceView />}
                  {activeSection === 'certificates' && <CertificatesView />}
                  {activeSection === 'toolbox' && <ToolboxView />}
                  {activeSection === 'contact' && <ContactView />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CentralWindow;
