import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { BrandLogo } from './common/BrandLogo';
import { GithubIcon, LinkedinIcon } from './common/SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t border-[var(--border)] py-12 relative z-10 text-left"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        {/* Top Footer Row: Brand, Nav & Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          {/* Brand Lockup */}
          <div className="flex flex-col gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
            >
              <BrandLogo variant="horizontal" size="md" />
            </button>
            <p className="font-sans text-xs text-[var(--text-secondary)] m-0 max-w-sm">
              Electronics &amp; Communication Engineering student, systems developer, and cybersecurity enthusiast at East West Institute of Technology.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-sans text-[var(--text-secondary)]">
            <button onClick={() => scrollTo('home')} className="hover:text-[var(--text-primary)] transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-[var(--text-primary)] transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-[var(--text-primary)] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo('experience')} className="hover:text-[var(--text-primary)] transition-colors">
              Experience
            </button>
            <button onClick={() => scrollTo('certificates')} className="hover:text-[var(--text-primary)] transition-colors">
              Certificates
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-[var(--text-primary)] transition-colors">
              Skills
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[var(--text-primary)] transition-colors">
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Footer Row: Meta & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {CURRENT_YEAR} Praveenkumar Mokashi.</span>
            <span>·</span>
            <span>EWIT Bengaluru, Class of 2028</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Praveenkumar9-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/try-to-hack-praveen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:thepraveenm09@gmail.com"
              className="text-[var(--text-secondary)] hover:text-[var(--electric-blue)] transition-colors"
              aria-label="Email Praveenkumar"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--secondary)] text-[var(--text-primary)] hover:border-[var(--electric-blue)] transition-all cursor-pointer font-sans text-xs ml-2"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
