import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectItem } from '../data/projects';
import { GithubIcon } from './common/SocialIcons';
import { SpotlightCard } from './common/SpotlightCard';

type FilterTag = 'all' | 'security' | 'systems' | 'ml';

const FILTERS: { label: string; value: FilterTag }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Security & AI', value: 'security' },
  { label: 'Systems & C', value: 'systems' },
  { label: 'Machine Learning', value: 'ml' },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterTag>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.filterTag === filter;
  });

  return (
    <section id="projects" className="py-20 border-t border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--electric-blue)]" />
              <span className="font-mono text-xs font-bold text-[var(--electric-blue)] uppercase tracking-wider">
                Showcase
              </span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] m-0">
              Featured Projects
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mt-1">
              Practical software engineering, systems programming, and cybersecurity research projects.
            </p>
          </div>

          {/* Filter Chips with Gliding Spring Pill */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl w-fit"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {FILTERS.map((f) => {
              const isSelected = filter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'text-white font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="projectFilterPill"
                      className="absolute inset-0 rounded-lg bg-[var(--electric-blue)] shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Card Grid with Cursor Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(83, 109, 255, 0.15)"
                className="h-full p-6 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 hover:shadow-xl hover:border-[var(--electric-blue)]"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Card Header & Badges */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[var(--accent-dim)] text-[var(--electric-blue)] border border-[var(--electric-blue)] uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)] font-medium">
                      {project.academicBadge ? project.academicBadge : (project.repoUrl ? 'Open Source' : 'Research')}
                    </span>
                  </div>

                  <h3 className="font-space font-bold text-lg text-[var(--text-primary)] leading-snug m-0">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 m-0">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer: Tech Tags & Links */}
                <div className="pt-5 mt-5 border-t border-[var(--border)] flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md font-mono text-[10px] text-[var(--text-muted)] bg-[var(--secondary)] border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--electric-blue)] hover:text-[var(--neon-cyan)] transition-colors cursor-pointer"
                    >
                      <span>Read Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--secondary)] transition-colors"
                        title="View GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full p-6 sm:p-8 rounded-2xl flex flex-col gap-5 text-left max-h-[85vh] overflow-y-auto relative"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="font-mono text-xs text-[var(--electric-blue)] font-bold uppercase tracking-wider">
                  {activeProject.category}
                </span>
                <h3 className="font-space font-extrabold text-2xl text-[var(--text-primary)] mt-1 mb-0">
                  {activeProject.title}
                </h3>
              </div>

              <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed m-0">
                {activeProject.overview || activeProject.description}
              </p>

              {activeProject.keyHighlights && activeProject.keyHighlights.length > 0 && (
                <div>
                  <h4 className="font-space font-bold text-sm text-[var(--text-primary)] mb-2">
                    Key Highlights &amp; Architecture:
                  </h4>
                  <ul className="flex flex-col gap-2 p-0 m-0 list-none text-xs text-[var(--text-secondary)]">
                    {activeProject.keyHighlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--green)] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="font-space font-bold text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg font-mono text-xs bg-[var(--secondary)] text-[var(--text-primary)] border border-[var(--border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {activeProject.repoUrl && (
                <div className="pt-3 border-t border-[var(--border)] flex justify-end">
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-sans text-xs font-semibold text-white bg-[var(--electric-blue)] hover:brightness-110 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
