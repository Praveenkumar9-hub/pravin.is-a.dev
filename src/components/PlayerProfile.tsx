import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Calendar, Shield, Terminal } from 'lucide-react';
import { playCyberHover } from '../utils/cyberAudio';

export const PlayerProfile: React.FC = () => {
  const stats = [
    {
      label: 'PLAYER',
      value: 'Praveenkumar Mokashi',
      sub: 'VERIFIED OPERATOR',
      icon: User,
      color: 'var(--neon-cyan)',
      bg: 'var(--cyan-dim)',
    },
    {
      label: 'CLASS',
      value: 'Developer / Cybersecurity Student',
      sub: 'SPECIALIZATION',
      icon: Terminal,
      color: 'var(--electric-blue)',
      bg: 'var(--accent-dim)',
    },
    {
      label: 'LOCATION',
      value: 'Bengaluru, India',
      sub: 'SYS_TIMEZONE UTC+05:30',
      icon: MapPin,
      color: 'var(--cyber-violet)',
      bg: 'var(--accent-2-dim)',
    },
    {
      label: 'EDUCATION',
      value: 'ECE — EWIT',
      sub: 'EAST WEST INST. OF TECHNOLOGY',
      icon: GraduationCap,
      color: 'var(--neon-cyan)',
      bg: 'var(--cyan-dim)',
    },
    {
      label: 'GRADUATION',
      value: '2028',
      sub: 'UNDERGRADUATE COHORT',
      icon: Calendar,
      color: 'var(--terminal-green)',
      bg: 'var(--mint-dim)',
    },
    {
      label: 'CURRENT FOCUS',
      value: 'Cybersecurity / Cloud / Linux',
      sub: 'ACTIVE CURRICULUM',
      icon: Shield,
      color: 'var(--electric-blue)',
      bg: 'var(--accent-dim)',
    },
  ];

  return (
    <section
      id="profile"
      style={{
        padding: '4rem 0',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-alt, var(--bg))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--neon-cyan)',
                boxShadow: '0 0 10px var(--neon-cyan)',
              }}
            />
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              PROFILE // OPERATOR IDENTITY
            </h2>
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>TELEMETRY FEED</span>
            <span style={{ color: 'var(--terminal-green)', fontWeight: 700 }}>● SYNCED</span>
          </div>
        </motion.div>

        {/* 6-Grid Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onMouseEnter={playCyberHover}
                className="clay clay-hover relative"
                style={{
                  padding: '1.4rem 1.5rem',
                  borderRadius: '1.25rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.15rem',
                }}
              >
                {/* HUD Corner Brackets */}
                <div className="hud-corner-tl" />

                {/* Icon Container */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: item.bg,
                    border: `1px solid color-mix(in srgb, ${item.color} 40%, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    flexShrink: 0,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 800,
                      color: item.color,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      wordBreak: 'break-word',
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em',
                      marginTop: 2,
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile;
