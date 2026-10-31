import React from 'react';
import { Calendar, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../data/timeline';
import { CERTIFICATES_DATA, type CertificateCredential } from '../data/certificates';
import { playCyberHover } from '../utils/cyberAudio';

export const Journey: React.FC = () => {
  // Group certificates by provider strictly preserving all 8 verified credentials
  const groupedCerts: Record<string, CertificateCredential[]> = {
    Google: CERTIFICATES_DATA.filter((c) => c.provider === 'Google'),
    'Cisco Networking Academy': CERTIFICATES_DATA.filter((c) => c.provider === 'Cisco Networking Academy'),
    'Infosys Springboard': CERTIFICATES_DATA.filter((c) => c.provider === 'Infosys Springboard'),
    'Ethnotech Academy': CERTIFICATES_DATA.filter((c) => c.provider === 'Ethnotech Academy'),
  };

  const providerStyles: Record<string, { badgeBg: string; textTone: string; border: string }> = {
    Google: { badgeBg: 'var(--accent-dim)', textTone: 'var(--electric-blue)', border: 'var(--electric-blue)' },
    'Cisco Networking Academy': { badgeBg: 'var(--cyan-dim)', textTone: 'var(--neon-cyan)', border: 'var(--neon-cyan)' },
    'Infosys Springboard': { badgeBg: 'var(--accent-2-dim)', textTone: 'var(--cyber-violet)', border: 'var(--cyber-violet)' },
    'Ethnotech Academy': { badgeBg: 'var(--mint-dim)', textTone: 'var(--terminal-green)', border: 'var(--terminal-green)' },
  };

  return (
    <section
      id="journey"
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
        03
      </span>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
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
                  background: 'var(--neon-cyan)',
                  boxShadow: '0 0 10px var(--neon-cyan)',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--neon-cyan)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                CHRONOLOGY &amp; CREDENTIALS // 003
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
              SYSTEM EVOLUTION // JOURNEY
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
              An authentic student chronology documenting academic milestones, systems engineering progression, and verified course-completion credentials.
            </p>
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--terminal-green)',
              background: 'var(--mint-dim)',
              border: '1px solid var(--terminal-green)',
              borderRadius: 8,
              padding: '0.45rem 0.85rem',
              letterSpacing: '0.05em',
              fontWeight: 700,
            }}
          >
            08 CREDENTIALS VERIFIED
          </div>
        </motion.div>

        {/* Part 1: SYSTEM EVOLUTION Timeline */}
        <div style={{ marginBottom: '5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2.5rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--electric-blue)' }} />
            <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>TIMELINE MILESTONES //</span>
          </div>

          <div
            style={{
              position: 'relative',
              borderLeft: '2px solid var(--border)',
              marginLeft: '1.25rem',
              paddingLeft: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
          >
            {TIMELINE_DATA.map((event, idx) => {
              const isGrad = event.type === 'academic';
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                  onMouseEnter={playCyberHover}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Bullet Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 'calc(-2rem - 9px)',
                      top: '1.25rem',
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: isGrad ? 'var(--neon-cyan)' : 'var(--surface)',
                      border: `3px solid ${isGrad ? 'var(--neon-cyan)' : 'var(--text-primary)'}`,
                      boxShadow: isGrad ? '0 0 12px var(--neon-cyan)' : 'var(--shadow-sm)',
                    }}
                  />

                  {/* 3D Timeline Card */}
                  <div
                    className="clay clay-hover relative"
                    style={{
                      padding: '1.5rem 1.75rem',
                      background: 'var(--surface)',
                      borderRadius: '1.25rem',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    <div className="hud-corner-tl" />

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid var(--border)',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{event.date}</span>
                      </div>

                      <span style={{ color: 'var(--text-secondary)' }}>
                        {event.organization}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      {event.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {event.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            color: 'var(--text-primary)',
                            background: 'var(--surface-alt, var(--bg))',
                            border: '1px solid var(--border)',
                            borderRadius: 6,
                            padding: '0.2rem 0.55rem',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: UNLOCKED KNOWLEDGE // CERTIFICATES */}
        <div id="certifications" style={{ paddingTop: '3.5rem', borderTop: '1px solid var(--border)', scrollMarginTop: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: 'var(--terminal-green)',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <Award className="w-4 h-4" />
              <span>UNLOCKED KNOWLEDGE // CERTIFICATES (08 TOTAL)</span>
            </div>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              UNLOCKED KNOWLEDGE // CERTIFICATES
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              Eight genuine course completions across Google (2), Cisco Networking Academy (1), Infosys Springboard (3), and Ethnotech Academy (2).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedCerts).map(([provider, certs], pIdx) => {
              const style = providerStyles[provider] || {
                badgeBg: 'var(--accent-dim)',
                textTone: 'var(--electric-blue)',
                border: 'var(--electric-blue)',
              };

              return (
                <motion.div
                  key={provider}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: pIdx * 0.1, ease: 'easeOut' }}
                  onMouseEnter={playCyberHover}
                  className="clay relative"
                  style={{
                    padding: '1.75rem',
                    background: 'var(--surface)',
                    borderRadius: '1.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div className="hud-corner-tl" />

                  <div>
                    {/* Provider Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div
                          style={{
                            padding: '0.45rem',
                            borderRadius: 10,
                            background: style.badgeBg,
                            color: style.textTone,
                          }}
                        >
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h4
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: '1.15rem',
                            color: 'var(--text-primary)',
                            margin: 0,
                          }}
                        >
                          {provider}
                        </h4>
                      </div>

                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          fontWeight: 800,
                          color: style.textTone,
                          background: style.badgeBg,
                          border: `1px solid ${style.border}`,
                          borderRadius: 999,
                          padding: '0.2rem 0.6rem',
                        }}
                      >
                        {certs.length} {certs.length === 1 ? 'CREDENTIAL' : 'CREDENTIALS'}
                      </span>
                    </div>

                    {/* Certifications List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.25rem' }}>
                      {certs.map((cert) => (
                        <div
                          key={cert.id}
                          style={{
                            padding: '1rem',
                            borderRadius: 12,
                            background: 'var(--surface-alt, var(--bg))',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                            <div
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: '0.98rem',
                                color: 'var(--text-primary)',
                                lineHeight: 1.3,
                              }}
                            >
                              {cert.title}
                            </div>
                            <span
                              style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 9,
                                color: style.textTone,
                                background: style.badgeBg,
                                padding: '0.15rem 0.45rem',
                                borderRadius: 4,
                                fontWeight: 800,
                                whiteSpace: 'nowrap',
                              }}
                            >
                              VERIFIED
                            </span>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 10,
                              color: 'var(--text-muted)',
                            }}
                          >
                            <span>COMPLETED: {cert.completionDate || 'Date Unspecified'}</span>
                            <span>{cert.credentialType}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
