import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { CERTIFICATES_DATA } from '../../../data/certificates';
import { playCyberClick, playCyberHover } from '../../../utils/cyberAudio';
import { GoogleLogo, CiscoLogo, InfosysLogo, EthnotechLogo } from '../../common/ProviderLogos';

type ProviderFilter = 'all' | 'Google' | 'Cisco Networking Academy' | 'Infosys Springboard' | 'Ethnotech Academy';

export const CertificatesView: React.FC = () => {
  const [filter, setFilter] = useState<ProviderFilter>('all');

  const getProviderLogo = (provider: string) => {
    switch (provider) {
      case 'Google':
        return <GoogleLogo size={22} />;
      case 'Cisco Networking Academy':
        return <CiscoLogo size={24} />;
      case 'Infosys Springboard':
        return <InfosysLogo size={22} />;
      case 'Ethnotech Academy':
        return <EthnotechLogo size={24} />;
      default:
        return <Award className="w-5 h-5 text-[var(--neon-cyan)]" />;
    }
  };

  const providerStyles: Record<string, { badgeBg: string; textTone: string; border: string }> = {
    Google: { badgeBg: 'var(--accent-dim)', textTone: 'var(--electric-blue)', border: 'var(--electric-blue)' },
    'Cisco Networking Academy': { badgeBg: 'var(--cyan-dim)', textTone: 'var(--neon-cyan)', border: 'var(--neon-cyan)' },
    'Infosys Springboard': { badgeBg: 'var(--accent-2-dim)', textTone: 'var(--violet)', border: 'var(--violet)' },
    'Ethnotech Academy': { badgeBg: 'rgba(5, 102, 160, 0.15)', textTone: '#0084D1', border: '#0566A0' },
  };

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (filter === 'all') return true;
    return cert.provider === filter;
  });

  const filterOptions: { label: string; value: ProviderFilter; count: number }[] = [
    { label: 'ALL CREDENTIALS', value: 'all', count: CERTIFICATES_DATA.length },
    { label: 'GOOGLE', value: 'Google', count: CERTIFICATES_DATA.filter((c) => c.provider === 'Google').length },
    { label: 'CISCO', value: 'Cisco Networking Academy', count: CERTIFICATES_DATA.filter((c) => c.provider === 'Cisco Networking Academy').length },
    { label: 'INFOSYS', value: 'Infosys Springboard', count: CERTIFICATES_DATA.filter((c) => c.provider === 'Infosys Springboard').length },
    { label: 'ETHNOTECH', value: 'Ethnotech Academy', count: CERTIFICATES_DATA.filter((c) => c.provider === 'Ethnotech Academy').length },
  ];

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Header */}
      <div className="border-b border-[var(--border)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--violet)]" />
            <span className="font-mono text-xs font-bold text-[var(--violet)] tracking-wider uppercase">
              Praveen.exe // CREDENTIALS ARCHIVE
            </span>
          </div>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] m-0">
            CERTIFICATES
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl leading-relaxed">
            Eight verified course completion credentials across Google, Cisco Networking Academy, Infosys Springboard, and Ethnotech Academy.
          </p>
        </div>

        {/* Verification Status Pill */}
        <div className="flex items-center gap-2 font-mono text-[10px] shrink-0">
          <span className="px-3 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--green)] font-bold flex items-center gap-1.5 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green)]" />
            <span>08 VERIFIED CREDENTIALS</span>
          </span>
        </div>
      </div>

      {/* Filter Strip */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
        <div
          className="flex flex-wrap gap-1 p-1 rounded-xl shrink-0"
          style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
        >
          {filterOptions.map((opt) => {
            const active = filter === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => {
                  playCyberClick(760, 0.03);
                  setFilter(opt.value);
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
                {opt.label} [{opt.count}]
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
          <span>OFFICIAL COURSE COMPLETIONS</span>
        </div>
      </div>

      {/* 8 Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCerts.map((cert) => {
          const style = providerStyles[cert.provider] || {
            badgeBg: 'var(--secondary)',
            textTone: 'var(--text-primary)',
            border: 'var(--border)',
          };

          return (
            <motion.div
              key={cert.id}
              whileHover={{ y: -3 }}
              onMouseEnter={playCyberHover}
              className="clay p-4 sm:p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all"
              style={{
                background: 'var(--cards)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm), var(--clay-specular)',
              }}
            >
              {/* HUD Corner Brackets */}
              <div className="hud-corner-tl" />

              <div>
                {/* Card Header: Provider Name + Provider Logo in Top Corner */}
                <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] pb-3 mb-3">
                  <div>
                    <span
                      className="font-mono text-[11px] font-extrabold px-2.5 py-0.5 rounded inline-block"
                      style={{
                        background: style.badgeBg,
                        color: style.textTone,
                        border: `1px solid ${style.border}`,
                      }}
                    >
                      {cert.provider}
                    </span>
                    <div className="font-mono text-[10px] text-[var(--text-muted)] mt-1">
                      {cert.credentialType}
                    </div>
                  </div>

                  {/* Accurate Provider Logo in Top Corner */}
                  <div
                    className="p-2 rounded-xl flex items-center justify-center shrink-0 border border-[var(--border)] transition-transform hover:scale-105"
                    style={{ background: 'var(--surface)' }}
                    title={`${cert.provider} Official Logo`}
                  >
                    {getProviderLogo(cert.provider)}
                  </div>
                </div>

                {/* Certificate/Course Title */}
                <h4 className="font-space font-extrabold text-base sm:text-lg text-[var(--text-primary)] leading-tight mb-2">
                  {cert.title}
                </h4>

                {/* Summary */}
                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed m-0 mb-3">
                  {cert.summary}
                </p>

                {/* Covered Topics */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.topics.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Completion Date */}
              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between font-mono text-[10px]">
                <span className="text-[var(--text-muted)]">COMPLETION:</span>
                <span
                  className="font-bold px-2 py-0.5 rounded"
                  style={{
                    background: cert.hasSpecificDate ? 'var(--mint-dim)' : 'var(--secondary)',
                    color: cert.hasSpecificDate ? 'var(--green)' : 'var(--text-muted)',
                    border: `1px solid ${cert.hasSpecificDate ? 'var(--green)' : 'var(--border)'}`,
                  }}
                >
                  {cert.completionDate}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificatesView;
