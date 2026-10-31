import React from 'react';
import { Briefcase, Cloud, Sparkles, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { playCyberHover } from '../../../utils/cyberAudio';
import { PythonLogo } from '../../common/TechLogos';
import { GoogleLogo } from '../../common/ProviderLogos';
import { TIMELINE_DATA } from '../../../data/timeline';

export const ExperienceView: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 py-2">
      {/* Header */}
      <div className="border-b border-[var(--border)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--electric-blue)]" />
            <span className="font-mono text-xs font-bold text-[var(--electric-blue)] tracking-wider uppercase">
              Praveen.exe // EXPERIENCE ARCHIVE
            </span>
          </div>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] m-0">
            EXPERIENCE &amp; PROGRAMS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl leading-relaxed">
            Practical industry internship and verified Google Cloud developer learning initiatives, alongside undergraduate engineering evolution.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-muted)] shrink-0">
          <span className="px-2.5 py-1 rounded-md bg-[var(--cards)] border border-[var(--border)]">
            01 INTERNSHIP
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[var(--cards)] border border-[var(--border)]">
            01 CLOUD PROGRAM
          </span>
        </div>
      </div>

      {/* 1. PRACTICAL INDUSTRY INTERNSHIP & CLOUD PROGRAM CARDS */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[var(--electric-blue)]" />
            <h3 className="font-space font-bold text-base text-[var(--text-primary)] m-0 tracking-tight">
              PRACTICAL INTERNSHIP &amp; LEARNING PROGRAMS
            </h3>
          </div>
          <span className="font-mono text-[10px] text-[var(--neon-cyan)] font-bold">
            VERIFIED TRACKS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Yuva Intern — Python Programming Internship */}
          <motion.div
            whileHover={{ y: -3 }}
            onMouseEnter={playCyberHover}
            className="clay p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between transition-all"
            style={{
              background: 'var(--cards)',
              border: '1.5px solid rgba(56, 126, 184, 0.45)',
              boxShadow: 'var(--shadow-md), 0 0 20px -6px rgba(56, 126, 184, 0.25), var(--clay-specular)',
            }}
          >
            {/* HUD Corner Brackets */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div>
              {/* Top Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-[var(--border)]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(56, 126, 184, 0.2), rgba(255, 224, 82, 0.15))',
                    }}
                  >
                    <PythonLogo size={26} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-extrabold text-[#387EB8] tracking-wider uppercase">
                      YUVA INTERN
                    </div>
                    <div className="font-mono text-[10px] text-[var(--text-muted)]">
                      Industry Internship
                    </div>
                  </div>
                </div>

                <span
                  className="px-2 py-0.5 rounded font-mono text-[10px] font-extrabold flex items-center gap-1 shrink-0"
                  style={{
                    background: 'rgba(56, 126, 184, 0.16)',
                    color: '#FFE052',
                    border: '1px solid rgba(255, 224, 82, 0.35)',
                  }}
                >
                  <Sparkles className="w-3 h-3 text-[#FFE052]" />
                  <span>INTERNSHIP</span>
                </span>
              </div>

              {/* Title */}
              <h4 className="font-space font-extrabold text-lg text-[var(--text-primary)] leading-tight mb-2">
                Python Programming Internship
              </h4>

              {/* Description */}
              <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0 mb-3">
                Applied Python programming experience focusing on core algorithmic problem solving, scripting automation, and structured software development practices.
              </p>

              {/* Focus Topics */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Python Scripting', 'Algorithmic Logic', 'Data Structures', 'Code Architecture'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[9px] px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between font-mono text-[10px]">
              <span className="text-[var(--text-muted)]">ORGANISATION:</span>
              <span className="font-bold text-[#387EB8]">Yuva Intern</span>
            </div>
          </motion.div>

          {/* Card 2: Google Cloud Arcade Facilitator Program 2026 */}
          <motion.div
            whileHover={{ y: -3 }}
            onMouseEnter={playCyberHover}
            className="clay p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between transition-all"
            style={{
              background: 'var(--cards)',
              border: '1.5px solid rgba(0, 229, 255, 0.45)',
              boxShadow: 'var(--shadow-md), 0 0 20px -6px rgba(0, 229, 255, 0.25), var(--clay-specular)',
            }}
          >
            {/* HUD Corner Brackets */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div>
              {/* Top Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-[var(--border)] bg-[var(--surface)]"
                    style={{
                      boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)',
                    }}
                  >
                    <GoogleLogo size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-extrabold text-[var(--neon-cyan)] tracking-wider uppercase">
                      GOOGLE CLOUD
                    </div>
                    <div className="font-mono text-[10px] text-[var(--text-muted)]">
                      Developer Learning Program
                    </div>
                  </div>
                </div>

                <span
                  className="px-2 py-0.5 rounded font-mono text-[10px] font-extrabold flex items-center gap-1 shrink-0"
                  style={{
                    background: 'var(--cyan-dim)',
                    color: 'var(--neon-cyan)',
                    border: '1px solid var(--neon-cyan)',
                  }}
                >
                  <Cloud className="w-3 h-3 text-[var(--neon-cyan)]" />
                  <span>2026 COHORT</span>
                </span>
              </div>

              {/* Title */}
              <h4 className="font-space font-extrabold text-lg text-[var(--text-primary)] leading-tight mb-2">
                Google Cloud Arcade Facilitator Program 2026
              </h4>

              {/* Description (Explicit: Program, Not a Certificate) */}
              <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0 mb-3">
                Active hands-on participation in the Google Cloud skill-building curriculum, exploring cloud architecture fundamentals, IAM governance, and infrastructure configurations through guided challenge labs.
              </p>

              {/* Focus Topics */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Google Cloud Platform', 'Cloud Security & IAM', 'Hands-on Labs', 'Architecture Foundations'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[9px] px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between font-mono text-[10px]">
              <span className="text-[var(--text-muted)]">TRACK TYPE:</span>
              <span className="font-bold text-[var(--neon-cyan)]">Cloud Learning Initiative (Program)</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. ACADEMIC & SYSTEMS EVOLUTION TIMELINE */}
      <div>
        <div className="flex items-center justify-between mb-3 border-t border-[var(--border)] pt-5">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[var(--electric-blue)]" />
            <h3 className="font-space font-bold text-base text-[var(--text-primary)] m-0 tracking-tight">
              ACADEMIC &amp; SYSTEMS EVOLUTION
            </h3>
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] font-bold">
            TIMELINE ARCHIVE
          </span>
        </div>

        <div className="relative border-l-2 border-[var(--border)] ml-3 pl-5 flex flex-col gap-3.5 py-1">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <div
                className="absolute -left-[27px] top-2 w-3 h-3 rounded-full border-2 border-[var(--surface)] transition-transform group-hover:scale-125"
                style={{
                  background:
                    item.type === 'academic'
                      ? 'var(--green)'
                      : item.type === 'project'
                      ? 'var(--electric-blue)'
                      : 'var(--violet)',
                }}
              />

              <div
                onMouseEnter={playCyberHover}
                className="clay p-3.5 rounded-xl flex flex-col gap-1.5"
                style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-1 font-mono text-[10px]">
                  <span className="text-[var(--neon-cyan)] font-extrabold tracking-wider">
                    {item.date}
                  </span>
                  <span className="text-[var(--text-muted)] font-bold">
                    {item.organization}
                  </span>
                </div>

                <div className="font-space font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                  {item.title}
                </div>

                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0">
                  {item.description}
                </p>

                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1 pt-1.5 border-t border-[var(--border-soft)]">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;
