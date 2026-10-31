import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../data/projects';
import { GithubIcon } from './common/SocialIcons';
import { playCyberClick, playCyberHover } from '../utils/cyberAudio';
import { LinuxLogo, PythonLogo, CloudLogo, CLogo } from './common/TechLogos';

type FilterTag = 'all' | 'security' | 'systems' | 'ml';

const FILTERS: { label: string; value: FilterTag }[] = [
  { label: 'ALL MISSIONS [06]', value: 'all' },
  { label: 'SECURITY & AI', value: 'security' },
  { label: 'SYSTEMS & WEB', value: 'systems' },
  { label: 'ACADEMIC ML', value: 'ml' },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterTag>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.filterTag === filter;
  });

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-alt, var(--bg))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost Number */}
      <span
        className="ghost-num"
        style={{
          position: 'absolute',
          right: '3%',
          top: '6%',
          fontSize: 'clamp(7rem, 18vw, 14rem)',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.35,
        }}
      >
        02
      </span>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)', marginBottom: '3.5rem' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: 'var(--electric-blue)',
                  boxShadow: '0 0 10px var(--electric-blue)',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--electric-blue)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                MISSION CONTROL // PROJECTS
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              MISSION CONTROL // PROJECTS
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginTop: '0.75rem',
                maxWidth: 580,
                lineHeight: 1.6,
              }}
            >
              Six genuine engineering systems spanning defensive network AI, full-stack civic platforms, and low-level Linux systems programming.
            </p>
          </div>

          {/* Interactive Mission Filter Tabs */}
          <div
            className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm), var(--clay-specular)',
            }}
          >
            {FILTERS.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => {
                    playCyberClick(760, 0.03);
                    setFilter(f.value);
                  }}
                  onMouseEnter={playCyberHover}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: active ? 800 : 600,
                    letterSpacing: '0.04em',
                    color: active ? '#FFFFFF' : 'var(--text-secondary)',
                    background: active
                      ? 'linear-gradient(135deg, var(--electric-blue), var(--cyber-violet))'
                      : 'transparent',
                    border: 'none',
                    borderRadius: 12,
                    padding: '0.45rem 0.85rem',
                    cursor: 'pointer',
                    boxShadow: active ? '0 4px 14px color-mix(in srgb, var(--electric-blue) 45%, transparent)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Grid with 3D Cyber Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                onMouseEnter={playCyberHover}
                className="clay clay-hover relative flex flex-col justify-between p-7 sm:p-8"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '1.4rem',
                }}
              >
                {/* HUD Corner Brackets */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                <div>
                  {/* Card Meta Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '1rem',
                      marginBottom: '1.25rem',
                      borderBottom: '1px solid var(--border)',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--neon-cyan)',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        letterSpacing: '0.06em',
                      }}
                    >
                      MISSION // {project.number}
                    </span>

                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: '0.05em',
                        padding: '0.2rem 0.65rem',
                        borderRadius: 6,
                        border: `1px solid ${
                          project.isAcademicOnly ? 'var(--cyber-violet)' : 'var(--terminal-green)'
                        }`,
                        color: project.isAcademicOnly ? 'var(--cyber-violet)' : 'var(--terminal-green)',
                        background: project.isAcademicOnly ? 'var(--accent-2-dim)' : 'var(--mint-dim)',
                      }}
                    >
                      {project.academicBadge || project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* 1-2 Line Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Core 4-Tech Pillar Integrations */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {project.technologies.some((t) => t.toLowerCase().includes('python')) && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                        style={{
                          background: 'rgba(56, 126, 184, 0.14)',
                          color: '#387EB8',
                          border: '1px solid rgba(56, 126, 184, 0.35)',
                        }}
                        title="Python Architecture"
                      >
                        <PythonLogo size={12} />
                        <span>PYTHON</span>
                      </span>
                    )}
                    {(project.technologies.some((t) => t.toLowerCase().includes('linux')) ||
                      project.id === 'hospital-management-c') && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                        style={{
                          background: 'rgba(255, 165, 0, 0.12)',
                          color: '#FFA500',
                          border: '1px solid rgba(255, 165, 0, 0.35)',
                        }}
                        title="Linux Environment"
                      >
                        <LinuxLogo size={12} />
                        <span>LINUX</span>
                      </span>
                    )}
                    {(project.technologies.some((t) => t.includes('C (ANSI') || t === 'C') ||
                      project.id === 'hospital-management-c') && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                        style={{
                          background: 'rgba(0, 89, 156, 0.14)',
                          color: '#5294E2',
                          border: '1px solid rgba(0, 89, 156, 0.35)',
                        }}
                        title="C Procedural Systems"
                      >
                        <CLogo size={12} />
                        <span>C PROGRAMMING</span>
                      </span>
                    )}
                    {(project.id === 'sih-attack-forecasting' || project.id === 'smart-bharat-ai') && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                        style={{
                          background: 'rgba(0, 229, 255, 0.12)',
                          color: 'var(--neon-cyan)',
                          border: '1px solid rgba(0, 229, 255, 0.35)',
                        }}
                        title="Cloud Computing &amp; API Layer"
                      >
                        <CloudLogo size={12} />
                        <span>CLOUD</span>
                      </span>
                    )}
                  </div>

                  {/* Technology Text Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          background: 'var(--surface-alt, var(--bg))',
                          border: '1px solid var(--border)',
                          borderRadius: 6,
                          padding: '0.2rem 0.55rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <button
                    onClick={() => {
                      playCyberClick(840, 0.04);
                      setActiveProject(project);
                    }}
                    onMouseEnter={playCyberHover}
                    className="clay-btn clay-btn-ghost"
                    style={{ padding: '0.6rem 1.15rem' }}
                  >
                    <span>VIEW ARCHITECTURE</span>
                    <Layers className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                  </button>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playCyberHover}
                      className="clay-btn clay-btn-primary"
                      style={{ padding: '0.6rem 1.15rem' }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: 'var(--text-muted)',
                        padding: '0.5rem 0',
                        letterSpacing: '0.04em',
                      }}
                    >
                      ACADEMIC ARCHIVE // EWIT
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Architecture Pipeline Specification Modal */}
      <AnimatePresence>
        {activeProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(8, 10, 18, 0.85)',
                backdropFilter: 'blur(8px)',
              }}
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="clay relative"
              style={{
                width: '100%',
                maxWidth: 680,
                maxHeight: '90vh',
                overflowY: 'auto',
                background: 'var(--surface)',
                borderRadius: '1.4rem',
                border: '1px solid var(--neon-cyan)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-lg), 0 0 25px -5px color-mix(in srgb, var(--neon-cyan) 35%, transparent)',
                zIndex: 101,
              }}
            >
              {/* HUD Corner Brackets */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--neon-cyan)', fontWeight: 800 }}>
                    MISSION // {activeProject.number} ARCHITECTURE
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.6rem',
                      color: 'var(--text-primary)',
                      margin: '0.25rem 0 0',
                    }}
                  >
                    {activeProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  style={{
                    background: 'var(--surface-alt, var(--bg))',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '0.45rem',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                  className="hover:text-[var(--neon-cyan)]"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overview */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                {activeProject.overview}
              </p>

              {/* Execution Pipeline Stages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  <Layers className="w-4 h-4" style={{ color: 'var(--electric-blue)' }} />
                  <span>EXECUTION PIPELINE STAGES</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.architecture.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.9rem 1rem',
                        borderRadius: 12,
                        background: 'var(--surface-alt, var(--bg))',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: 'var(--neon-cyan)',
                          fontWeight: 800,
                        }}
                      >
                        STAGE 0{i + 1}
                      </span>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.85rem',
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Security Posture */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--terminal-green)' }} />
                  <span>KEY SYSTEM HIGHLIGHTS</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeProject.keyHighlights.map((hl, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: 12,
                        background: 'var(--surface-alt, var(--bg))',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: 'var(--terminal-green)',
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>
                  {activeProject.isAcademicOnly ? 'ACADEMIC COURSEWORK' : 'OPEN SOURCE REPOSITORY'}
                </span>

                {activeProject.repoUrl && (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn clay-btn-primary"
                    style={{ padding: '0.55rem 1.15rem' }}
                  >
                    <span>VIEW ON GITHUB</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
