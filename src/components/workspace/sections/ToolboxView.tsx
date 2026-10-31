import React from 'react';
import { motion } from 'framer-motion';
import { playCyberHover } from '../../../utils/cyberAudio';
import { TECH_ITEMS_CONFIG } from '../../common/TechLogos';
import { GoogleLogo } from '../../common/ProviderLogos';

export const ToolboxView: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Header */}
      <div className="border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
          <span className="font-mono text-xs font-bold text-[var(--green)] tracking-wider uppercase">
            Praveen.exe // 04 CORE DISCIPLINES
          </span>
        </div>
        <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] m-0">
          TECHNOLOGY TOOLBOX
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl leading-relaxed">
          The four foundational technical pillars powering every software architecture, low-level systems project, and defensive cybersecurity mission.
        </p>
      </div>

      {/* 4 Interactive 3D Showcase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TECH_ITEMS_CONFIG.map((item, idx) => {
          const Logo = item.logo;
          const isCloud = item.key === 'cloud';

          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseEnter={playCyberHover}
              className="clay relative flex flex-col justify-between p-5 rounded-2xl cursor-default transition-all"
              style={{
                background: 'var(--cards)',
                border: isCloud ? '1.5px solid var(--neon-cyan)' : '1px solid var(--border)',
                boxShadow: isCloud
                  ? 'var(--shadow-md), 0 0 20px -6px rgba(0, 229, 255, 0.25), var(--clay-specular)'
                  : 'var(--shadow-md), var(--clay-specular)',
              }}
            >
              {/* HUD Corner Brackets */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                {/* Badge & Number */}
                <div className="flex items-center justify-between mb-4 font-mono text-[10px]">
                  <span
                    className="px-2 py-0.5 rounded font-extrabold tracking-wider"
                    style={{
                      background: item.colorDim,
                      color: item.color,
                      border: `1px solid color-mix(in srgb, ${item.color} 40%, transparent)`,
                    }}
                  >
                    {item.badge}
                  </span>
                  <span className="text-[var(--text-muted)] font-bold">
                    [ 0{idx + 1} ]
                  </span>
                </div>

                {/* 3D Animated Logo Container */}
                <motion.div
                  whileHover={{ rotateY: 16, rotateX: -8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="flex items-center justify-center h-28 mb-4"
                  style={{ perspective: 500 }}
                >
                  <div
                    className="p-4 rounded-2xl flex items-center justify-center transition-all"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      boxShadow: `0 8px 24px -4px color-mix(in srgb, ${item.color} 30%, transparent)`,
                    }}
                  >
                    <Logo size={56} className="drop-shadow-lg" />
                  </div>
                </motion.div>

                {/* Title & Technical Subtitle */}
                <div className="text-center mb-2">
                  <div
                    className="font-mono text-[10px] font-bold tracking-wider uppercase mb-1"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </div>
                  <h3 className="font-space font-extrabold text-lg text-[var(--text-primary)] m-0">
                    {item.name}
                  </h3>
                  <div className="font-mono text-[10px] text-[var(--text-muted)] mt-0.5">
                    {item.sublabel}
                  </div>
                </div>

                {/* Descriptive Label */}
                <p className="font-sans text-xs text-[var(--text-secondary)] text-center leading-relaxed m-0 mt-2">
                  {item.desc}
                </p>

                {/* Dedicated Google Cloud Category Sub-Card for Cloud Computing */}
                {isCloud && (
                  <div className="mt-4 p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-2.5 text-left shadow-inner">
                    <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-1.5">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--neon-cyan)] font-extrabold">
                        <GoogleLogo size={14} />
                        <span>Google Cloud</span>
                      </div>
                      <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-[var(--cyan-dim)] text-[var(--neon-cyan)] border border-[var(--neon-cyan)] font-bold">
                        CORE CLOUD
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="font-space font-bold text-xs text-[var(--text-primary)] leading-tight">
                        Google Cloud Arcade Facilitator Program 2026
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[var(--text-muted)]">
                          Hands-on Skill Labs Track
                        </span>
                        <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-[var(--accent-dim)] text-[var(--electric-blue)] font-bold">
                          PROGRAM
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Indicator */}
              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-center gap-1.5 font-mono text-[9px] text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                <span>LOADOUT OPERATIONAL</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Engineering Foundations Notice */}
      <div
        className="p-4 rounded-xl flex items-center justify-between gap-3 font-mono text-xs"
        style={{
          background: 'var(--secondary)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[var(--neon-cyan)] font-bold">SYSTEM NOTICE:</span>
          <span className="text-[var(--text-secondary)]">
            Core 4-pillar loadout adhering to genuine systems, scripting, and cloud architecture capabilities without inflated proficiency percentages.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToolboxView;
