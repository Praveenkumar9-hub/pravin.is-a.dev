import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, GraduationCap, Sparkles, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './common/SocialIcons';
import { LinuxLogo, PythonLogo, CLogo } from './common/TechLogos';
import { InteractiveTerminal } from './InteractiveTerminal';
import { SpotlightCard } from './common/SpotlightCard';

const TYPED_TITLES = [
  'Systems & C Programmer',
  'Linux & Terminal Explorer',
  'Defensive Security Learner',
  'ECE Student at EWIT (2028)',
  'Python & Automation Builder',
];

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [imgError, setImgError] = useState(false);

  // Typewriter effect for hero headline
  useEffect(() => {
    const targetTitle = TYPED_TITLES[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(targetTitle.slice(0, currentText.length + 1));
        setTypingSpeed(80 + Math.random() * 40);

        if (currentText.length + 1 === targetTitle.length) {
          // Pause at complete word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setCurrentText(targetTitle.slice(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col gap-12">
        {/* Top Split Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Introduction, Typewriter & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Live Availability Status Pill & DevOps Telemetry */}
            <div className="flex flex-wrap items-center gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full w-fit"
                style={{
                  background: 'rgba(18, 24, 41, 0.75)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  boxShadow: '0 0 20px -3px rgba(0, 240, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]" />
                </span>
                <span className="font-mono text-xs font-semibold text-[var(--text-secondary)]">
                  AVAILABLE FOR INTERNSHIPS
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px] text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border)]"
              >
                <span className="text-[var(--neon-cyan)] font-bold">LATENCY:</span>
                <span>~16ms</span>
                <span>&bull;</span>
                <span className="text-[var(--electric-blue)] font-bold">KERNEL:</span>
                <span>Linux 6.8.0</span>
              </motion.div>
            </div>

            {/* Main Greeting & Animated Typewriter Heading */}
            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="font-space font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.1] m-0"
              >
                Hey there, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--electric-blue)] to-[var(--violet)]">
                  Praveenkumar Mokashi
                </span>
              </motion.h1>

              {/* Animated Typing Terminal Header */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="flex items-center gap-2 min-h-[36px] mt-1"
              >
                <span className="font-mono text-xs sm:text-sm text-[var(--neon-cyan)] font-bold">
                  $&gt;
                </span>
                <span className="font-space font-bold text-lg sm:text-2xl text-[var(--text-primary)]">
                  {currentText}
                </span>
                <span className="w-2.5 h-5 bg-[var(--neon-cyan)] animate-pulse inline-block ml-0.5" />
              </motion.div>
            </div>

            {/* Clear, Simple Value-Add Bio */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl m-0"
            >
              I am an <strong className="text-[var(--text-primary)] font-semibold">ECE student</strong> passionate about{' '}
              <strong className="text-[var(--text-primary)] font-semibold">self-learning cybersecurity</strong> and systems.
              I love exploring <strong className="text-[var(--text-primary)] font-semibold">Linux &amp; C</strong>, writing automation in{' '}
              <strong className="text-[var(--text-primary)] font-semibold">Python</strong>, and building projects from the ground up.
            </motion.p>

            {/* Primary Action Buttons (Projects, Resume & Contact) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-cyan)] shadow-lg hover:shadow-[0_0_20px_-3px_rgba(0,240,255,0.45)] hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold text-white bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--electric-blue)] hover:shadow-[0_0_15px_-3px_rgba(88,101,242,0.4)] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[var(--electric-blue)]" />
                  <span>View Resume</span>
                </button>
              )}

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold text-[var(--text-secondary)] hover:text-white bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--neon-cyan)] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Social Profiles */}
              <div className="flex items-center gap-2 pl-2 sm:border-l border-[var(--border)]">
                <a
                  href="https://github.com/Praveenkumar9-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-white hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-all"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/try-to-hack-praveen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-[var(--neon-cyan)] hover:brightness-125 hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--neon-cyan)] transition-all"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Exclusive Core Stack: LINUX, C, and PYTHON ONLY */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="pt-2 flex flex-col gap-2.5"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                <span className="font-mono text-xs font-bold text-[var(--text-muted)] tracking-wider uppercase">
                  CORE TECH TRILOGY:
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* 1. Linux */}
                <SpotlightCard
                  spotlightColor="rgba(255, 165, 0, 0.16)"
                  className="p-3 rounded-xl flex items-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#FFA500] cursor-pointer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="shrink-0">
                    <LinuxLogo size={32} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-space font-bold text-sm text-[var(--text-primary)]">
                      Linux
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      Ubuntu &amp; Shell CLI
                    </span>
                  </div>
                </SpotlightCard>

                {/* 2. C Programming */}
                <SpotlightCard
                  spotlightColor="rgba(0, 89, 156, 0.2)"
                  className="p-3 rounded-xl flex items-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#00599C] cursor-pointer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="shrink-0">
                    <CLogo size={32} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-space font-bold text-sm text-[var(--text-primary)]">
                      C Language
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      ANSI C &amp; Memory
                    </span>
                  </div>
                </SpotlightCard>

                {/* 3. Python */}
                <SpotlightCard
                  spotlightColor="rgba(255, 224, 82, 0.16)"
                  className="p-3 rounded-xl flex items-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#FFE052] cursor-pointer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="shrink-0">
                    <PythonLogo size={32} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-space font-bold text-sm text-[var(--text-primary)]">
                      Python
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      Automation &amp; ML
                    </span>
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Professional Portrait Card with Spotlight */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="w-full max-w-sm"
            >
              <SpotlightCard
                spotlightColor="rgba(88, 101, 242, 0.18)"
                className="w-full rounded-3xl p-4 sm:p-5 flex flex-col gap-4 relative transition-all duration-300 hover:shadow-2xl hover:border-[var(--electric-blue)]"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.5), 0 0 30px -5px rgba(88, 101, 242, 0.2)',
                }}
              >
                {/* Profile Image Frame */}
                <div
                  className="relative w-full aspect-square rounded-2xl overflow-hidden"
                  style={{
                    background: 'var(--secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {!imgError ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile.png`}
                      alt="Praveenkumar Mokashi - ECE Student & Developer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-space font-extrabold text-3xl text-[var(--electric-blue)]">
                      PKM
                    </div>
                  )}

                  {/* Verified Identity Badge Overlay */}
                  <div
                    className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-md text-[11px] font-mono font-bold select-none"
                    style={{
                      background: 'rgba(8, 11, 22, 0.88)',
                      border: '1px solid var(--border)',
                      color: 'var(--neon-cyan)',
                    }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Name & Academic Meta */}
                <div className="flex flex-col gap-1 text-left px-1">
                  <div className="font-space font-bold text-xl text-[var(--text-primary)]">
                    Praveenkumar Mokashi
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                    <GraduationCap className="w-3.5 h-3.5 text-[var(--electric-blue)] shrink-0" />
                    <span>East West Institute of Technology</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Bottom Hero Element: Interactive Animated Typing Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-ping" />
              <span className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                Live Interactive Terminal Console
              </span>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)] hidden sm:inline">
              Interactive session · click tabs to run queries
            </span>
          </div>
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
