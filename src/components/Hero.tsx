import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './common/SocialIcons';
import { playCyberClick, playCyberHover } from '../utils/cyberAudio';
import { LinuxLogo, PythonLogo, CloudLogo, CLogo } from './common/TechLogos';

const CYCLING_KEYWORDS = [
  'Cybersecurity',
  'Cloud Security',
  'Linux',
  'Programming',
  'Infrastructure',
];

function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 35, pauseTime = 1500) {
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

export const Hero: React.FC = () => {
  const currentKeyword = useTypewriter(CYCLING_KEYWORDS);
  const [imgError, setImgError] = useState(false);

  // 3D Card Tilt mechanics for desktop portrait
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 200 });

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

  const scrollTo = (id: string) => {
    playCyberClick(840, 0.04);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Top Technical Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--border)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: 'var(--neon-cyan)',
                display: 'inline-block',
                boxShadow: '0 0 8px var(--neon-cyan)',
              }}
            />
            <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>PRAVEEN // NEXUS</span>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>EAST WEST INSTITUTE OF TECHNOLOGY</span>
          </div>

          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: 'var(--terminal-green)',
                background: 'var(--mint-dim)',
                border: '1px solid var(--terminal-green)',
                padding: '0.2rem 0.6rem',
                borderRadius: 6,
                fontWeight: 700,
              }}
            >
              SYS_NODE // 2028
            </span>
            <span style={{ color: 'var(--text-muted)' }}>BENGALURU, INDIA</span>
          </div>
        </motion.div>

        {/* Hero Asymmetric Composition: Left Typography + Right Futuristic Portrait HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center flex-1">
          {/* Left Column: Oversized Typography & Animated Headline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Identity Role Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 800,
                  color: 'var(--electric-blue)',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--electric-blue)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 6,
                  letterSpacing: '0.06em',
                }}
              >
                DEVELOPER / PROGRAMMER
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 800,
                  color: 'var(--cyber-violet)',
                  background: 'var(--accent-2-dim)',
                  border: '1px solid var(--cyber-violet)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 6,
                  letterSpacing: '0.06em',
                }}
              >
                CYBERSECURITY STUDENT
              </span>
            </motion.div>

            {/* Oversized Name Typography: PRAVEENKUMAR MOKASHI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex flex-col gap-1"
            >
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(2.8rem, 6.2vw, 4.8rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
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

              {/* Sub-label Oversized Typography */}
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginTop: '0.25rem',
                }}
              >
                DEVELOPER. PROGRAMMER. CYBERSECURITY STUDENT.
              </div>
            </motion.div>

            {/* Animated Headline: BUILD / CODE / SECURE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                color: 'var(--text-primary)',
              }}
            >
              <span style={{ color: 'var(--electric-blue)' }}>BUILD</span>
              <span style={{ color: 'var(--border)' }}>/</span>
              <span style={{ color: 'var(--cyber-violet)' }}>CODE</span>
              <span style={{ color: 'var(--border)' }}>/</span>
              <span style={{ color: 'var(--neon-cyan)' }}>SECURE</span>
            </motion.div>

            {/* Typing Animation Cycling Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '0.55rem 1.15rem',
                  boxShadow: 'var(--shadow-sm), var(--clay-specular)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Terminal className="w-4 h-4 shrink-0" style={{ color: 'var(--neon-cyan)' }} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                    color: 'var(--text-primary)',
                    minWidth: '20ch',
                    display: 'inline-block',
                  }}
                >
                  {currentKeyword}
                  <span
                    style={{
                      display: 'inline-block',
                      width: 2,
                      height: '1.1em',
                      backgroundColor: 'var(--neon-cyan)',
                      marginLeft: 4,
                      verticalAlign: 'middle',
                      animation: 'blink 1s step-end infinite',
                    }}
                  />
                </span>
              </div>
            </motion.div>

            {/* Short Introduction Only (Strictly 1 Sentence) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                margin: 0,
              }}
            >
              "Building projects. Exploring systems. Learning cybersecurity."
            </motion.p>

            {/* Tactile Cyber Buttons & Direct Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.25rem' }}
            >
              <button
                onClick={() => scrollTo('projects')}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-primary"
              >
                <span>[ EXPLORE PROJECTS ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-ghost"
              >
                <span>[ CONTACT ]</span>
              </button>

              {/* GitHub and LinkedIn Quick Icons */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  paddingLeft: '0.5rem',
                  borderLeft: '1px solid var(--border)',
                }}
              >
                <a
                  href="https://github.com/Praveenkumar9-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  className="clay-btn clay-btn-ghost"
                  style={{ padding: '0.7rem' }}
                  aria-label="GitHub Profile"
                  title="GitHub: Praveenkumar9-hub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/try-to-hack-praveen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  className="clay-btn clay-btn-ghost"
                  style={{ padding: '0.7rem', color: 'var(--neon-cyan)' }}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Praveenkumar Mokashi"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* HERO TECHNOLOGY STRIP: 4 Technology Logos */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              style={{
                marginTop: '0.75rem',
                padding: '0.85rem 1.15rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                boxShadow: 'var(--shadow-sm), var(--clay-specular)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                maxWidth: 560,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>CORE TECHNOLOGY PILLARS // 04</span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>VERIFIED LOADOUT</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {/* 1. Linux */}
                <div
                  onMouseEnter={playCyberHover}
                  className="clay clay-hover flex items-center gap-2 p-2 rounded-lg cursor-default"
                  style={{
                    background: 'var(--surface-alt, var(--bg))',
                    border: '1px solid var(--border)',
                  }}
                  title="Linux // System Environment"
                >
                  <LinuxLogo size={20} className="shrink-0" />
                  <div className="overflow-hidden">
                    <div className="font-space font-bold text-xs text-[var(--text-primary)] truncate">LINUX</div>
                    <div className="font-mono text-[9px] text-[var(--text-muted)] truncate hidden sm:block">POSIX CLI</div>
                  </div>
                </div>

                {/* 2. Python */}
                <div
                  onMouseEnter={playCyberHover}
                  className="clay clay-hover flex items-center gap-2 p-2 rounded-lg cursor-default"
                  style={{
                    background: 'var(--surface-alt, var(--bg))',
                    border: '1px solid var(--border)',
                  }}
                  title="Python // Automation & Machine Learning"
                >
                  <PythonLogo size={20} className="shrink-0" />
                  <div className="overflow-hidden">
                    <div className="font-space font-bold text-xs text-[var(--text-primary)] truncate">PYTHON</div>
                    <div className="font-mono text-[9px] text-[var(--text-muted)] truncate hidden sm:block">DATA & ML</div>
                  </div>
                </div>

                {/* 3. Cloud */}
                <div
                  onMouseEnter={playCyberHover}
                  className="clay clay-hover flex items-center gap-2 p-2 rounded-lg cursor-default"
                  style={{
                    background: 'var(--surface-alt, var(--bg))',
                    border: '1px solid var(--border)',
                  }}
                  title="Cloud Computing // Infrastructure & Security"
                >
                  <CloudLogo size={20} className="shrink-0" />
                  <div className="overflow-hidden">
                    <div className="font-space font-bold text-xs text-[var(--text-primary)] truncate">CLOUD</div>
                    <div className="font-mono text-[9px] text-[var(--text-muted)] truncate hidden sm:block">SECURITY</div>
                  </div>
                </div>

                {/* 4. C Programming */}
                <div
                  onMouseEnter={playCyberHover}
                  className="clay clay-hover flex items-center gap-2 p-2 rounded-lg cursor-default"
                  style={{
                    background: 'var(--surface-alt, var(--bg))',
                    border: '1px solid var(--border)',
                  }}
                  title="C Programming // Procedural Systems & GCC"
                >
                  <CLogo size={20} className="shrink-0" />
                  <div className="overflow-hidden">
                    <div className="font-space font-bold text-xs text-[var(--text-primary)] truncate">C LANG</div>
                    <div className="font-mono text-[9px] text-[var(--text-muted)] truncate hidden sm:block">SYSTEMS</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Portrait 3D Frame & Telemetry HUD */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{ perspective: 1000 }}
          >
            {/* Interactive Floating Technical Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: -18,
                right: 0,
                zIndex: 20,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '0.65rem 0.85rem',
                boxShadow: 'var(--shadow-md), 0 0 16px -4px var(--neon-cyan)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                pointerEvents: 'none',
              }}
              className="hidden sm:flex"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--terminal-green)', fontWeight: 800 }}>
                <span
                  style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--terminal-green)' }}
                  className="animate-pulse-terminal"
                />
                SYSTEM STATUS: NEXUS_ACTIVE
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                IDENTITY: <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>PKM</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                ROLE: <span style={{ color: 'var(--electric-blue)', fontWeight: 700 }}>DEVELOPER</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                FOCUS: <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>CYBERSECURITY</span>
              </div>
            </motion.div>

            {/* 3D Tilt Portrait Frame Container */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                width: '100%',
                maxWidth: 420,
                position: 'relative',
              }}
              className="cursor-default"
            >
              {/* Outer Neon Glow Aura */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '1.75rem',
                  background: 'radial-gradient(circle, color-mix(in srgb, var(--electric-blue) 25%, transparent), transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Cyber Frame Container */}
              <div
                className="clay"
                style={{
                  borderRadius: '1.35rem',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: 'var(--shadow-lg), var(--clay-specular)',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                }}
              >
                {/* HUD Corner Brackets */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                {/* Card HUD Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.15rem',
                    borderBottom: '1px solid var(--border)',
                    background: 'var(--surface-alt, var(--bg))',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--neon-cyan)', display: 'inline-block' }} />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      OPERATOR_NODE // PKM
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'var(--terminal-green)',
                      background: 'var(--mint-dim)',
                      border: '1px solid var(--terminal-green)',
                      borderRadius: 999,
                      padding: '0.15rem 0.55rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'var(--terminal-green)',
                        display: 'inline-block',
                      }}
                      className="animate-pulse-terminal"
                    />
                    NEXUS_ACTIVE
                  </span>
                </div>

                {/* Portrait Frame & Details */}
                <div style={{ padding: '1.25rem 1.25rem 0.85rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Portrait with Laser Scanning Beam */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 260,
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: '2px solid var(--neon-cyan)',
                      boxShadow: '0 0 20px -4px color-mix(in srgb, var(--neon-cyan) 40%, transparent)',
                      background: 'var(--surface-alt, var(--bg))',
                    }}
                  >
                    {/* Laser Scanning Line */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'linear-gradient(to right, transparent, var(--neon-cyan), transparent)',
                        zIndex: 10,
                        animation: 'scanLine 3s linear infinite',
                      }}
                    />

                    {!imgError ? (
                      <img
                        src="/images/profile.png"
                        alt="Praveenkumar Mokashi"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 20%',
                          display: 'block',
                        }}
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--accent-dim)',
                          color: 'var(--electric-blue)',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 800,
                          fontSize: '1.6rem',
                        }}
                      >
                        PKM
                      </div>
                    )}
                  </div>

                  {/* Full Name Display: Praveenkumar Mokashi (NEVER TRUNCATED) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                        whiteSpace: 'normal',
                      }}
                    >
                      Praveenkumar Mokashi
                    </div>

                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: 'var(--neon-cyan)',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      ECE // EAST WEST INST. OF TECHNOLOGY
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9,
                          fontWeight: 700,
                          background: 'var(--surface-alt, var(--bg))',
                          border: '1px solid var(--border)',
                          borderRadius: 6,
                          padding: '0.2rem 0.5rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        B.E. ECE // CLASS OF 2028
                      </span>

                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9,
                          fontWeight: 700,
                          background: 'var(--accent-dim)',
                          border: '1px solid var(--electric-blue)',
                          borderRadius: 6,
                          padding: '0.2rem 0.5rem',
                          color: 'var(--electric-blue)',
                        }}
                      >
                        VERIFIED_OPERATOR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Identity Metadata Footer */}
                <div
                  style={{
                    padding: '0.9rem 1.25rem',
                    margin: '0 0.85rem 0.85rem',
                    borderRadius: 12,
                    background: 'var(--surface-alt, var(--bg))',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
                    <span style={{ color: 'var(--text-muted)' }}>CORE FOCUS</span>
                    <span style={{ color: 'var(--electric-blue)', fontWeight: 700 }}>Cyber &amp; Cloud Security</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
                    <span style={{ color: 'var(--text-muted)' }}>LOCATION</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Bengaluru, India (IST)</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
                    <span style={{ color: 'var(--text-muted)' }}>GRADUATION</span>
                    <span style={{ color: 'var(--terminal-green)', fontWeight: 800 }}>Class of 2028</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
