import React from 'react';
import { Calendar, Briefcase, GraduationCap, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../data/timeline';
import { CERTIFICATES_DATA, type CertificateCredential } from '../data/certificates';
import { GoogleLogo, CiscoLogo, InfosysLogo, EthnotechLogo, getProviderLogo } from './common/ProviderLogos';
import { SpotlightCard } from './common/SpotlightCard';

interface ProviderConfig {
  name: string;
  logo: React.ReactNode;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  tagline: string;
}

const PROVIDER_METADATA: Record<string, ProviderConfig> = {
  Google: {
    name: 'Google',
    logo: <GoogleLogo size={26} />,
    accentColor: '#4285F4',
    borderColor: 'rgba(66, 133, 244, 0.35)',
    badgeBg: 'rgba(66, 133, 244, 0.1)',
    tagline: 'Cybersecurity Professional Programs',
  },
  'Cisco Networking Academy': {
    name: 'Cisco Networking Academy',
    logo: <CiscoLogo size={32} />,
    accentColor: '#00BCEB',
    borderColor: 'rgba(0, 188, 235, 0.35)',
    badgeBg: 'rgba(0, 188, 235, 0.1)',
    tagline: 'Network & Defense Academy',
  },
  'Infosys Springboard': {
    name: 'Infosys Springboard',
    logo: <InfosysLogo size={24} />,
    accentColor: '#FF8200',
    borderColor: 'rgba(255, 130, 0, 0.35)',
    badgeBg: 'rgba(255, 130, 0, 0.1)',
    tagline: 'Enterprise Technology & Security',
  },
  'Ethnotech Academy': {
    name: 'Ethnotech Academy',
    logo: <EthnotechLogo size={28} />,
    accentColor: '#0566A0',
    borderColor: 'rgba(5, 102, 160, 0.4)',
    badgeBg: 'rgba(5, 102, 160, 0.12)',
    tagline: 'Ethnotech Academic Solutions • Python & Linux',
  },
};

export const Journey: React.FC = () => {
  // Group certificates by provider
  const groupedCerts: Record<string, CertificateCredential[]> = {
    Google: CERTIFICATES_DATA.filter((c) => c.provider === 'Google'),
    'Cisco Networking Academy': CERTIFICATES_DATA.filter((c) => c.provider === 'Cisco Networking Academy'),
    'Infosys Springboard': CERTIFICATES_DATA.filter((c) => c.provider === 'Infosys Springboard'),
    'Ethnotech Academy': CERTIFICATES_DATA.filter((c) => c.provider === 'Ethnotech Academy'),
  };

  return (
    <>
      {/* 1. EXPERIENCE & MILESTONES SECTION */}
      <section id="experience" className="py-20 border-t border-[var(--border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-2 mb-12 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--violet)]" />
              <span className="font-mono text-xs font-bold text-[var(--violet)] uppercase tracking-wider">
                Experience &amp; Community
              </span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] m-0">
              Professional Experience
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mt-1">
              Internships, developer community contributions, and technical facilitator programs.
            </p>
          </motion.div>

          {/* Timeline Cards Grid */}
          <div className="flex flex-col gap-6 max-w-4xl text-left">
            {TIMELINE_DATA.map((item, idx) => {
              const orgLogo = getProviderLogo(item.organization, 28);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(0, 229, 255, 0.12)"
                    className="p-6 rounded-2xl flex flex-col gap-3.5 relative transition-all duration-300 hover:shadow-xl hover:border-[var(--electric-blue)]"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      {/* Organization Logo or Type Icon */}
                      <div className="p-2.5 rounded-xl bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center shrink-0 mt-0.5">
                        {orgLogo ? (
                          orgLogo
                        ) : item.type === 'academic' || item.type === 'project' ? (
                          <GraduationCap className="w-5 h-5 text-[var(--electric-blue)]" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-[var(--neon-cyan)]" />
                        )}
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-space font-bold text-base sm:text-lg text-[var(--text-primary)] m-0">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <span className="font-mono text-xs text-[var(--neon-cyan)] font-semibold">
                            {item.organization}
                          </span>
                          {item.location && (
                            <>
                              <span className="text-[var(--text-muted)] text-xs">·</span>
                              <span className="font-mono text-[11px] text-[var(--text-muted)] flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{item.location}</span>
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-[var(--text-muted)] px-3 py-1 rounded-full bg-[var(--secondary)] border border-[var(--border)] flex items-center gap-1.5 shrink-0">
                      <Calendar className="w-3 h-3 text-[var(--electric-blue)]" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed m-0 pt-0.5">
                    {item.description}
                  </p>

                  {item.skills && item.skills.length > 0 && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md font-mono text-[11px] bg-[var(--secondary)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--electric-blue)] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. VERIFIED CERTIFICATIONS WITH AUTHENTIC LOGOS (Google, Cisco, Infosys Springboard, Ethnotech) */}
      <section id="certificates" className="py-20 border-t border-[var(--border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-2 mb-12 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
              <span className="font-mono text-xs font-bold text-[var(--green)] uppercase tracking-wider">
                Industry Credentials
              </span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] m-0">
              Verified Certifications
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mt-1">
              8 verified credentials authenticated by industry leaders:{' '}
              <strong className="text-[var(--text-primary)]">Google</strong>,{' '}
              <strong className="text-[var(--text-primary)]">Cisco Networking Academy</strong>,{' '}
              <strong className="text-[var(--text-primary)]">Infosys Springboard</strong>, and{' '}
              <strong className="text-[var(--text-primary)]">Ethnotech Academy</strong>.
            </p>
          </motion.div>

          {/* Grouped Certificates Grid by Provider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {Object.entries(groupedCerts).map(([providerKey, certs], groupIdx) => {
              const meta = PROVIDER_METADATA[providerKey] || {
                name: providerKey,
                logo: null,
                accentColor: 'var(--electric-blue)',
                borderColor: 'var(--border)',
                badgeBg: 'var(--secondary)',
                tagline: 'Professional Accreditation',
              };

              return (
                <motion.div
                  key={providerKey}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: groupIdx * 0.08 }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor={`${meta.accentColor}25`}
                    className="p-6 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full"
                    style={{
                      background: 'var(--surface)',
                      border: `1px solid var(--border)`,
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                  {/* Subtle Ambient Glow corresponding to Provider Accent */}
                  <div
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ background: meta.accentColor }}
                  />

                  {/* Provider Header with Official Logo */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <div className="flex items-center gap-3">
                      {/* Logo Icon Container */}
                      <div
                        className="p-2 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: meta.badgeBg,
                          border: `1px solid ${meta.borderColor}`,
                        }}
                      >
                        {meta.logo}
                      </div>

                      <div className="flex flex-col">
                        <span className="font-space font-bold text-base text-[var(--text-primary)] leading-tight">
                          {meta.name}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--text-muted)]">
                          {meta.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-xs font-semibold bg-[var(--secondary)] text-[var(--text-secondary)] border border-[var(--border)]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--green)]" />
                      <span>{certs.length} {certs.length === 1 ? 'Badge' : 'Badges'}</span>
                    </div>
                  </div>

                  {/* Provider's Certificate Cards */}
                  <div className="flex flex-col gap-3">
                    {certs.map((cert) => (
                      <motion.div
                        key={cert.id}
                        whileHover={{ x: 3 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        className="p-4 rounded-xl flex flex-col gap-2 transition-all duration-200"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-space font-bold text-sm sm:text-base text-[var(--text-primary)] leading-snug m-0">
                            {cert.title}
                          </h4>
                          {cert.completionDate && (
                            <span className="font-mono text-[10px] text-[var(--text-muted)] shrink-0 px-2 py-0.5 rounded bg-[var(--secondary)] border border-[var(--border)]">
                              {cert.completionDate}
                            </span>
                          )}
                        </div>

                        <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0">
                          {cert.summary}
                        </p>

                        {/* Verified Topics Tags */}
                        {cert.topics && cert.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {cert.topics.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded font-mono text-[10px] text-[var(--text-muted)] bg-[var(--secondary)] border border-[var(--border)] flex items-center gap-1"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-[var(--green)]" />
                                <span>{t}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
