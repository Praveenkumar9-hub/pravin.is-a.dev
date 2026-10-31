import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { TopNavBar } from './components/workspace/TopNavBar';
import { SideShortcuts } from './components/workspace/SideShortcuts';
import { CentralWindow } from './components/workspace/CentralWindow';
import { BottomTaskbar } from './components/workspace/BottomTaskbar';
import { CommandPalette } from './components/workspace/CommandPalette';
import { QuickLauncher } from './components/workspace/QuickLauncher';
import type { SectionId, WindowState } from './components/workspace/types';
import { Maximize2, Terminal } from 'lucide-react';
import { playCyberClick } from './utils/cyberAudio';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(() => {
    const hash = window.location.hash.replace('#', '') as SectionId;
    const valid: SectionId[] = ['home', 'projects', 'about', 'experience', 'certificates', 'toolbox', 'contact'];
    return valid.includes(hash) ? hash : 'home';
  });

  const [windowState, setWindowState] = useState<WindowState>('normal');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // Sync section with URL hash
  const navigateTo = (section: SectionId) => {
    setActiveSection(section);
    if (windowState === 'minimized') {
      setWindowState('normal');
    }
    window.location.hash = section;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      const valid: SectionId[] = ['home', 'projects', 'about', 'experience', 'certificates', 'toolbox', 'contact'];
      if (valid.includes(hash)) {
        setActiveSection(hash);
        if (windowState === 'minimized') {
          setWindowState('normal');
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [windowState]);

  const toggleWindowState = () => {
    setWindowState((prev) => (prev === 'minimized' ? 'normal' : 'minimized'));
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
      }}
      className="flex flex-col font-sans relative overflow-x-hidden select-none"
    >
      {/* Animated Cyber Grid, Nodes & Ambient Lights */}
      <CyberBackground />

      {/* 1. TOP NAVIGATION */}
      <TopNavBar
        activeSection={activeSection}
        onNavigate={navigateTo}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* 2. MAIN DESKTOP WORKSPACE CANVAS */}
      <main className="flex-1 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 lg:gap-6 p-3 sm:p-5 lg:p-6 pb-16 relative z-10 w-full max-w-7xl mx-auto">
        {/* 2a. SIDE DESKTOP SHORTCUTS */}
        <SideShortcuts activeSection={activeSection} onNavigate={navigateTo} />

        {/* 2b. CENTRAL APPLICATION WINDOW */}
        {windowState !== 'minimized' ? (
          <CentralWindow
            activeSection={activeSection}
            onNavigate={navigateTo}
            windowState={windowState}
            onSetWindowState={setWindowState}
          />
        ) : (
          /* Minimized State Placeholder on Desktop Wallpaper */
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center z-10 min-h-[460px]">
            <div
              className="clay p-6 rounded-2xl flex flex-col items-center gap-3.5 max-w-md"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-bright)',
                boxShadow: 'var(--shadow-lg), 0 0 25px -5px color-mix(in srgb, var(--electric-blue) 35%, transparent)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--electric-blue)',
                  color: 'var(--electric-blue)',
                }}
              >
                <Terminal className="w-6 h-6" />
              </div>

              <div>
                <div className="font-space font-extrabold text-base text-[var(--text-primary)]">
                  Praveen.exe IS MINIMIZED
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)] mt-1">
                  Active in background: [{activeSection.toUpperCase()}.EXE]
                </div>
              </div>

              <button
                onClick={() => {
                  playCyberClick(840, 0.04);
                  setWindowState('normal');
                }}
                className="clay-btn clay-btn-primary py-2 px-4 text-xs mt-1 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>RESTORE WORKSPACE WINDOW</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 3. BOTTOM TASKBAR */}
      <BottomTaskbar
        activeSection={activeSection}
        windowState={windowState}
        onToggleWindowState={toggleWindowState}
        onOpenStartMenu={() => setStartMenuOpen(!startMenuOpen)}
        isStartMenuOpen={startMenuOpen}
        onNavigate={navigateTo}
      />

      {/* 4. FLYOUT START MENU */}
      <QuickLauncher
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onNavigate={navigateTo}
        activeSection={activeSection}
      />

      {/* 5. SEARCH & COMMAND PALETTE MODAL (CTRL+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
};

export default App;
