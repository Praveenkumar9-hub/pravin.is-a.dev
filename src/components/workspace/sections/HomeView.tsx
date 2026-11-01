import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { playCyberClick, playCyberHover } from '../../../utils/cyberAudio';
import { GithubIcon, LinkedinIcon } from '../../common/SocialIcons';
import { LinuxLogo, PythonLogo, CloudLogo, CLogo } from '../../common/TechLogos';
import type { SectionId } from '../types';

interface HomeViewProps {
  onNavigate: (section: SectionId) => void;
}

const CYCLING_WORDS = [
  'CYBERSECURITY',
  'CLOUD SECURITY',
  'LINUX',
  'PROGRAMMING',
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return words[index].substring(0, subIndex);
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const currentKeyword = useTypewriter(CYCLING_WORDS);
  const [imgError, setImgError] = useState(false);

  // 3D Card Tilt mechanics for desktop portrait
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="flex flex-col gap-8 py-2">
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          <span className="font-mono text-xs font-bold text-[var(--neon-cyan)] tracking-wider uppercase">
            Praveen.exe // OPERATOR WORKSPACE
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-[var(--text-muted)] tracking-wider ml-1">
            [SYS_v2.0]
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      {/* Hero Layout: Typography & 3D Profile Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Bold Minimal Cyber Content */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Subtitle Identity Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-md font-mono text-[11px] font-extrabold tracking-wider"
              style={{
                background: 'var(--accent-dim)',
                color: 'var(--electric-blue)',
                border: '1px solid var(--electric-blue)',
              }}
            >
              ECE STUDENT / DEVELOPER
            </span>
            <span
              className="px-2.5 py-1 rounded-md font-mono text-[11px] font-extrabold tracking-wider"
              style={{
                background: 'var(--accent-2-dim)',
                color: 'var(--violet)',
                border: '1px solid var(--violet)',
              }}
            >
              CYBERSECURITY ENTHUSIAST
            </span>
          </div>

          {/* Full Name (Never Truncated) */}
          <div className="flex flex-col gap-1">
            <h1
              className="font-space font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight leading-none"
              style={{ color: 'var(--text-primary)' }}
            >
              PRAVEENKUMAR<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--electric-blue))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                MOKASHI
              </span>
            </h1>
            <div className="font-space font-bold text-xs sm:text-sm text-[var(--text-secondary)] tracking-wider uppercase mt-1">
              ECE STUDENT / DEVELOPER / CYBERSECURITY ENTHUSIAST
            </div>
          </div>

          {/* Main Action Text: BUILD. CODE. SECURE. */}
          <div className="flex flex-col gap-1">
            <div className="font-space font-black text-2xl sm:text-3xl tracking-tight flex items-center gap-2">
              <span style={{ color: 'var(--electric-blue)' }}>BUILD.</span>
              <span style={{ color: 'var(--violet)' }}>CODE.</span>
              <span style={{ color: 'var(--neon-cyan)' }}>SECURE.</span>
            </div>
          </div>

          {/* Animated Typing Box */}
          <div className="flex items-center gap-2">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl"
              style={{
                background: 'var(--cards)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm), var(--clay-specular)',
              }}
            >
              <Terminal className="w-4 h-4 text-[var(--neon-cyan)] shrink-0" />
              <span className="font-mono text-sm sm:text-base font-bold text-[var(--text-primary)] min-w-[20ch]">
                {currentKeyword}
                <span className="animate-cursor" />
              </span>
            </div>
          </div>

          {/* Short Introduction (Strict 1 sentence) */}
          <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg m-0">
            "Building projects. Exploring systems. Learning cybersecurity."
          </p>

          {/* Action Buttons & Direct Profiles */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={() => {
                playCyberClick(840, 0.04);
                onNavigate('projects');
              }}
              onMouseEnter={playCyberHover}
              className="clay-btn clay-btn-primary"
            >
              <span>[ EXPLORE PROJECTS ]</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                playCyberClick(840, 0.04);
                onNavigate('experience');
              }}
              onMouseEnter={playCyberHover}
              className="clay-btn clay-btn-ghost text-[var(--electric-blue)]"
            >
              <span>[ EXPERIENCE ]</span>
            </button>

            <button
              onClick={() => {
                playCyberClick(840, 0.04);
                onNavigate('certificates');
              }}
              onMouseEnter={playCyberHover}
              className="clay-btn clay-btn-ghost text-[var(--neon-cyan)]"
            >
              <span>[ CERTIFICATES ]</span>
            </button>

            <button
              onClick={() => {
                playCyberClick(840, 0.04);
                onNavigate('contact');
              }}
              onMouseEnter={playCyberHover}
              className="clay-btn clay-btn-ghost"
            >
              <span>[ CONTACT ]</span>
            </button>

            <div className="flex items-center gap-1.5 pl-2 border-l border-[var(--border)]">
              <a
                href="https://github.com/Praveenkumar9-hub"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-ghost p-2.5"
                title="GitHub: Praveenkumar9-hub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/try-to-hack-praveen/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-ghost p-2.5 text-[var(--neon-cyan)]"
                title="LinkedIn: Praveenkumar Mokashi"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Redesigned 3D Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              width: '100%',
              maxWidth: 390,
            }}
            className="cursor-default group"
          >
            <div
              className="clay animated-cyber-border relative overflow-hidden rounded-2xl transition-all duration-300"
              style={{
                background: 'var(--cards)',
                boxShadow: 'var(--shadow-lg), var(--clay-specular)',
              }}
            >
              {/* HUD Corner Brackets */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              {/* Card Header Bar */}
              <div className="px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface)] flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
                  <span>OPERATOR_NODE // PKM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[9px] text-[var(--neon-cyan)] font-bold tracking-wider">VERIFIED_NODE</span>
                  <span className="text-[var(--green)] font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-[var(--mint-dim)] border border-[var(--green)]">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Portrait & Identity Composition */}
              <div className="p-4 sm:p-5 flex flex-col gap-4">
                {/* Smaller, Professionally Cropped Portrait Frame */}
                <div className="relative mx-auto">
                  {/* Outer Glowing Gradient Ring */}
                  <div
                    className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 animated-cyber-border overflow-hidden shadow-xl bg-[var(--secondary)]"
                    style={{
                      boxShadow: '0 0 24px -2px rgba(0, 229, 255, 0.45), 0 0 12px 0 rgba(0, 229, 255, 0.25)',
                    }}
                  >
                    {/* Laser Scanning Line */}
                    <div
                      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent z-10 pointer-events-none"
                      style={{ animation: 'scanLine 3s linear infinite' }}
                    />

                    {!imgError ? (
                      <img
                        src="./images/profile-cyber.png"
                        alt="Praveenkumar Mokashi"
                        className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-space font-extrabold text-2xl text-[var(--electric-blue)]">
                        PKM
                      </div>
                    )}
                  </div>

                  {/* Corner Accent Badge */}
                  <div
                    className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold border flex items-center gap-1 shadow-md"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--green)',
                      color: 'var(--green)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                    <span>SYS_ACT</span>
                  </div>
                </div>

                {/* Identity Information (Full Name Never Truncated) */}
                <div className="flex flex-col items-center text-center gap-1">
                  <div className="font-space font-black text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight leading-tight">
                    Praveenkumar Mokashi
                  </div>
                  <div className="font-mono text-xs text-[var(--electric-blue)] font-bold tracking-wide">
                    ECE Student / Developer / Cybersecurity Enthusiast
                  </div>
                  <div className="font-sans text-xs text-[var(--text-muted)] mt-0.5">
                    Systems Architecture &amp; Defensive Security
                  </div>
                </div>

                {/* Metadata Specifications (Strict Privacy: NO Location details) */}
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-2 font-mono text-[11px] shadow-inner">
                  <div className="flex justify-between items-center border-b border-[var(--border-soft)] pb-1.5">
                    <span className="text-[var(--text-muted)] text-[10px] tracking-wider uppercase">ACADEMIC COHORT</span>
                    <span className="text-[var(--text-primary)] font-bold">ECE // EWIT</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[var(--border-soft)] pb-1.5">
                    <span className="text-[var(--text-muted)] text-[10px] tracking-wider uppercase">GRADUATION</span>
                    <span className="text-[var(--green)] font-bold">CLASS OF 2028</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-muted)] text-[10px] tracking-wider uppercase">SPECIALIZATION</span>
                    <span className="text-[var(--neon-cyan)] font-bold">CYBER &amp; CLOUD SECURITY</span>
                  </div>
                </div>

                {/* Quick Interactive Status Pill / Action Bar */}
                <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)]" />
                    AUTHENTICATED
                  </span>
                  <button
                    onClick={() => {
                      playCyberClick(820, 0.03);
                      onNavigate('certificates');
                    }}
                    className="text-[var(--neon-cyan)] font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>08 CREDENTIALS</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Strip: Exactly the 4 Logos */}
      <div
        className="p-3.5 rounded-xl flex flex-col gap-2.5"
        style={{
          background: 'var(--cards)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span>CORE TECHNICAL PILLARS // 04</span>
          </div>
          <button
            onClick={() => onNavigate('toolbox')}
            className="text-[var(--neon-cyan)] font-bold hover:underline cursor-pointer"
          >
            VIEW FULL TOOLBOX →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* 1. Linux */}
          <div
            onMouseEnter={playCyberHover}
            className="clay clay-hover flex items-center gap-2.5 p-2 rounded-lg cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={() => onNavigate('toolbox')}
            title="Linux // System Environment"
          >
            <LinuxLogo size={22} className="shrink-0" />
            <div className="overflow-hidden">
              <div className="font-space font-bold text-xs text-[var(--text-primary)]">LINUX</div>
              <div className="font-mono text-[9px] text-[var(--text-muted)]">POSIX CLI</div>
            </div>
          </div>

          {/* 2. Python */}
          <div
            onMouseEnter={playCyberHover}
            className="clay clay-hover flex items-center gap-2.5 p-2 rounded-lg cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={() => onNavigate('toolbox')}
            title="Python // Automation & Machine Learning"
          >
            <PythonLogo size={22} className="shrink-0" />
            <div className="overflow-hidden">
              <div className="font-space font-bold text-xs text-[var(--text-primary)]">PYTHON</div>
              <div className="font-mono text-[9px] text-[var(--text-muted)]">AUTOMATION & ML</div>
            </div>
          </div>

          {/* 3. Cloud Computing */}
          <div
            onMouseEnter={playCyberHover}
            className="clay clay-hover flex items-center gap-2.5 p-2 rounded-lg cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={() => onNavigate('toolbox')}
            title="Cloud Computing // Infrastructure & IAM"
          >
            <CloudLogo size={22} className="shrink-0" />
            <div className="overflow-hidden">
              <div className="font-space font-bold text-xs text-[var(--text-primary)]">CLOUD</div>
              <div className="font-mono text-[9px] text-[var(--text-muted)]">SECURITY & IAM</div>
            </div>
          </div>

          {/* 4. C Programming */}
          <div
            onMouseEnter={playCyberHover}
            className="clay clay-hover flex items-center gap-2.5 p-2 rounded-lg cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={() => onNavigate('toolbox')}
            title="C Programming // Procedural Systems"
          >
            <CLogo size={22} className="shrink-0" />
            <div className="overflow-hidden">
              <div className="font-space font-bold text-xs text-[var(--text-primary)]">C LANG</div>
              <div className="font-mono text-[9px] text-[var(--text-muted)]">PROCEDURAL SYS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
