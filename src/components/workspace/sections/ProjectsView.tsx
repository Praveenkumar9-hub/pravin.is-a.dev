import React, { useState } from 'react';
import { ExternalLink, Layers, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectItem } from '../../../data/projects';
import { GithubIcon } from '../../common/SocialIcons';
import { playCyberClick, playCyberHover } from '../../../utils/cyberAudio';
import { LinuxLogo, PythonLogo, CloudLogo, CLogo } from '../../common/TechLogos';

type FilterTag = 'all' | 'security' | 'systems' | 'ml';

export const ProjectsView: React.FC = () => {
  const [filter, setFilter] = useState<FilterTag>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters: { label: string; value: FilterTag; count: number }[] = [
    { label: 'ALL MISSIONS', value: 'all', count: PROJECTS_DATA.length },
    { label: 'SECURITY & AI', value: 'security', count: PROJECTS_DATA.filter((p) => p.filterTag === 'security').length },
    { label: 'SYSTEMS & WEB', value: 'systems', count: PROJECTS_DATA.filter((p) => p.filterTag === 'systems').length },
    { label: 'ACADEMIC ML', value: 'ml', count: PROJECTS_DATA.filter((p) => p.filterTag === 'ml').length },
  ];

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.filterTag === filter;
  });

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--electric-blue)]" />
            <span className="font-mono text-xs font-bold text-[var(--electric-blue)] tracking-wider uppercase">
              Praveen.exe // 06 VERIFIED MISSIONS
            </span>
          </div>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] m-0">
            ENGINEERING PROJECTS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
            Software architectures spanning predictive network defense, full-stack civic platforms, and low-level Linux systems programming.
          </p>
        </div>

        {/* Filter Badges */}
        <div
          className="flex flex-wrap gap-1 p-1 rounded-xl shrink-0"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          {filters.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => {
                  playCyberClick(760, 0.03);
                  setFilter(f.value);
                }}
                onMouseEnter={playCyberHover}
                className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer"
                style={{
                  background: active
                    ? 'linear-gradient(135deg, var(--electric-blue), var(--violet))'
                    : 'transparent',
                  color: active ? '#FFFFFF' : 'var(--text-secondary)',
                  border: active ? '1px solid var(--border-bright)' : '1px solid transparent',
                  boxShadow: active ? '0 2px 8px color-mix(in srgb, var(--electric-blue) 40%, transparent)' : 'none',
                }}
              >
                {f.label} [{f.count}]
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: 6 Interactive Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="clay clay-hover flex flex-col justify-between p-5 rounded-2xl relative"
            style={{
              background: 'var(--cards)',
              border: '1px solid var(--border)',
            }}
          >
            {/* HUD Corner Brackets */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div>
              {/* Mission Header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5 mb-3 font-mono text-xs">
                <span className="font-extrabold text-[var(--neon-cyan)] tracking-wider">
                  MISSION // {project.number}
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    background: project.isAcademicOnly ? 'var(--accent-2-dim)' : 'var(--mint-dim)',
                    color: project.isAcademicOnly ? 'var(--violet)' : 'var(--green)',
                    border: `1px solid ${project.isAcademicOnly ? 'var(--violet)' : 'var(--green)'}`,
                  }}
                >
                  {project.academicBadge || project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space font-extrabold text-lg sm:text-xl text-[var(--text-primary)] leading-tight mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Four-Pillars Tech Indicators on Card */}
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
                    title="Linux POSIX Environment"
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
                    title="Cloud Computing & API"
                  >
                    <CloudLogo size={12} />
                    <span>CLOUD</span>
                  </span>
                )}
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-mono text-[10px] font-bold"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] gap-2">
              <button
                onClick={() => {
                  playCyberClick(840, 0.04);
                  setActiveProject(project);
                }}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-ghost py-1.5 px-3 text-[11px]"
              >
                <span>ARCHITECTURE</span>
                <Layers className="w-3 h-3 text-[var(--neon-cyan)]" />
              </button>

              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playCyberHover}
                  className="clay-btn clay-btn-primary py-1.5 px-3 text-[11px]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>REPO</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="font-mono text-[10px] text-[var(--text-muted)] italic">
                  ACADEMIC ARCHIVE
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expandable Architecture Specification Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="clay relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 z-10 rounded-2xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--neon-cyan)',
                boxShadow: 'var(--shadow-lg), 0 0 35px -5px color-mix(in srgb, var(--neon-cyan) 35%, transparent)',
              }}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[var(--border)] pb-3 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-[var(--neon-cyan)]">
                    MISSION // {activeProject.number} — SYSTEM ARCHITECTURE
                  </div>
                  <h3 className="font-space font-extrabold text-xl text-[var(--text-primary)] mt-1">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overview */}
              <div className="flex flex-col gap-4 font-sans text-xs sm:text-sm">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[var(--electric-blue)] uppercase tracking-wider mb-1">
                    PROJECT OVERVIEW
                  </h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed m-0">
                    {activeProject.overview}
                  </p>
                </div>

                {/* Architecture Pipeline Stages */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[var(--electric-blue)] uppercase tracking-wider mb-2">
                    ARCHITECTURE PIPELINE STAGES
                  </h4>
                  <div className="flex flex-col gap-2">
                    {activeProject.architecture.map((stage, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-[var(--cards)] border border-[var(--border)]"
                      >
                        <span className="font-mono text-xs font-bold text-[var(--neon-cyan)] shrink-0">
                          [0{i + 1}]
                        </span>
                        <span className="text-[var(--text-primary)] font-medium text-xs">
                          {stage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Technical Highlights */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[var(--electric-blue)] uppercase tracking-wider mb-2">
                    VERIFIED TECHNICAL HIGHLIGHTS
                  </h4>
                  <ul className="space-y-1.5 p-0 m-0 list-none">
                    {activeProject.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green)] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-[var(--border)] pt-4 mt-6">
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  EAST WEST INST. OF TECHNOLOGY
                </span>
                {activeProject.repoUrl && (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-btn clay-btn-primary py-1.5 px-3 text-xs"
                  >
                    <span>VIEW GITHUB REPO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsView;
