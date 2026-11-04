import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { BrandLogo } from './common/BrandLogo';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection?: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll spy: Update active tab based on viewport scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const sectionId = NAV_ITEMS[i].id;
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false);
    setActiveTab(id);
    const el = document.getElementById(id);
    if (!el) {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 backdrop-blur-xl border-b shadow-sm'
          : 'py-4 bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled
          ? theme === 'light'
            ? 'rgba(255, 255, 255, 0.88)'
            : 'rgba(8, 11, 22, 0.88)'
          : 'transparent',
        borderColor: isScrolled ? 'var(--border)' : 'transparent',
      }}
    >
      {/* Precision Scroll Progress Laser Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--electric-blue)] to-[var(--violet)] z-50 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Brand Logo Lockup */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Praveen.exe home"
        >
          <BrandLogo variant="horizontal" size="md" />
        </button>

        {/* Center: Desktop Navigation Tabs */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 rounded-full"
          style={{
            background:
              theme === 'light'
                ? 'rgba(235, 241, 251, 0.75)'
                : 'rgba(21, 27, 43, 0.75)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        theme === 'light'
                          ? '#FFFFFF'
                          : 'var(--cards)',
                      border: '1px solid var(--border)',
                      boxShadow: '0 2px 8px -2px rgba(0, 229, 255, 0.25)',
                    }}
                    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Resume, Theme Toggle & Contact CTA) */}
        <div className="flex items-center gap-2">
          {/* Resume Viewer / Download Button */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-semibold text-[var(--text-primary)] hover:text-white bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--electric-blue)] transition-all cursor-pointer shadow-sm hover:shadow-[0_0_12px_-2px_rgba(88,101,242,0.4)]"
              title="View / Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--electric-blue)]" />
              <span>Resume</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl transition-all cursor-pointer focus:outline-none"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[var(--electric-blue)]" />
            ) : (
              <Sun className="w-4 h-4 text-[#FFB800]" />
            )}
          </button>

          {/* Quick Contact CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-sans text-xs font-semibold cursor-pointer transition-all"
            style={{
              background: 'linear-gradient(135deg, var(--electric-blue), var(--violet))',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px -3px rgba(88, 101, 242, 0.45)',
            }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[var(--text-primary)] focus:outline-none"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b overflow-hidden"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-[var(--accent-dim)] text-[var(--neon-cyan)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[var(--electric-blue)] hover:bg-[var(--secondary)] flex items-center gap-2 border border-[var(--border)]"
                >
                  <FileText className="w-4 h-4" />
                  <span>View / Download Resume</span>
                </button>
              )}

              <div className="pt-2 border-t border-[var(--border)] mt-1 flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  Theme: {theme === 'light' ? 'Light' : 'Dark'}
                </span>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[var(--electric-blue)]"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
