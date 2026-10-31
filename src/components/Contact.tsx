import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './common/SocialIcons';
import { playCyberClick, playCyberHover } from '../utils/cyberAudio';

const EMAIL_ADDRESS = 'thepraveenm09@gmail.com';
const GITHUB_URL = 'https://github.com/Praveenkumar9-hub';
const LINKEDIN_URL = 'https://www.linkedin.com/in/try-to-hack-praveen/';

const TEMPLATES = [
  {
    label: 'Cybersecurity Discussion',
    body: "Hi Praveen, I saw your network attack forecasting research and cybersecurity loadout. I'd love to exchange ideas on defensive AI.",
  },
  {
    label: 'Project Collaboration',
    body: "Hello Praveen! Your portfolio caught my eye, especially your Smart Bharat AI companion platform. Let's discuss potential collaboration.",
  },
  {
    label: 'Internship / Opportunity',
    body: "Hi Praveen, we are impressed by your systems and security background at EWIT Bengaluru. Let's connect regarding opportunities.",
  },
];

export const Contact: React.FC = () => {
  const [draftMessage, setDraftMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    playCyberClick(880, 0.04);
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyDraft = () => {
    if (!draftMessage.trim()) return;
    playCyberClick(880, 0.04);
    navigator.clipboard.writeText(draftMessage);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2400);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'var(--bg)',
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
        05
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
                DIRECT CONNECTION // 005
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              LET'S CONNECT.
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginTop: '0.75rem',
                maxWidth: 580,
                lineHeight: 1.6,
              }}
            >
              "Have an idea, project or opportunity? Let's talk."
            </p>
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--text-muted)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.45rem 0.85rem',
              letterSpacing: '0.05em',
            }}
          >
            OPEN TO DISCUSSIONS &amp; COLLABORATION
          </div>
        </motion.div>

        {/* 3 Prominent Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 1. Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            onMouseEnter={playCyberHover}
            className="clay clay-hover relative p-7 flex flex-col justify-between"
            style={{
              background: 'var(--surface)',
              borderRadius: '1.4rem',
              border: '1px solid var(--border)',
            }}
          >
            <div className="hud-corner-tl" />
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--electric-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--electric-blue)',
                  marginBottom: '1.25rem',
                }}
              >
                <Mail className="w-5 h-5" />
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--electric-blue)', fontWeight: 800, marginBottom: 4 }}>
                PRIMARY INBOX // DIRECT EMAIL
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
                Email Praveen
              </h3>

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  wordBreak: 'break-all',
                  marginBottom: '1.5rem',
                }}
              >
                {EMAIL_ADDRESS}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-primary"
                style={{ flex: 1, padding: '0.65rem 0.95rem' }}
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND EMAIL</span>
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-ghost"
                style={{ padding: '0.65rem 0.85rem' }}
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[var(--terminal-green)]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* 2. GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            onMouseEnter={playCyberHover}
            className="clay clay-hover relative p-7 flex flex-col justify-between"
            style={{
              background: 'var(--surface)',
              borderRadius: '1.4rem',
              border: '1px solid var(--border)',
            }}
          >
            <div className="hud-corner-tl" />
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--surface-alt, var(--bg))',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                <GithubIcon className="w-5 h-5" />
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--neon-cyan)', fontWeight: 800, marginBottom: 4 }}>
                CODEBASE &amp; ARCHIVES
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
                GitHub Profile
              </h3>

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}
              >
                @Praveenkumar9-hub
              </div>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCyberHover}
              className="clay-btn clay-btn-primary"
              style={{ width: '100%', padding: '0.65rem 0.95rem' }}
            >
              <GithubIcon className="w-4 h-4" />
              <span>EXPLORE GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* 3. LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            onMouseEnter={playCyberHover}
            className="clay clay-hover relative p-7 flex flex-col justify-between"
            style={{
              background: 'var(--surface)',
              borderRadius: '1.4rem',
              border: '1px solid var(--border)',
            }}
          >
            <div className="hud-corner-tl" />
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--cyan-dim)',
                  border: '1px solid var(--neon-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--neon-cyan)',
                  marginBottom: '1.25rem',
                }}
              >
                <LinkedinIcon className="w-5 h-5" />
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--cyber-violet)', fontWeight: 800, marginBottom: 4 }}>
                PROFESSIONAL NETWORK
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
                LinkedIn Network
              </h3>

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}
              >
                /in/try-to-hack-praveen/
              </div>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCyberHover}
              className="clay-btn clay-btn-primary"
              style={{ width: '100%', padding: '0.65rem 0.95rem' }}
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>CONNECT ON LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Interactive Quick-Message Note Drafter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clay p-6 sm:p-8"
          style={{
            background: 'var(--surface)',
            borderRadius: '1.4rem',
            border: '1px solid var(--border)',
          }}
        >
          <div className="hud-corner-tl" />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--neon-cyan)', fontWeight: 800, textTransform: 'uppercase' }}>
            <MessageSquare className="w-4 h-4" />
            <span>QUICK-NOTE DRAFTER // FAST MESSAGE GENERATOR</span>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Select a conversation starter below to automatically generate a tailored outreach note, ready to copy for LinkedIn or email:
          </p>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.label}
                onClick={() => {
                  playCyberClick(740, 0.03);
                  setDraftMessage(tmpl.body);
                }}
                onMouseEnter={playCyberHover}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '0.35rem 0.75rem',
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  background: 'var(--surface-alt, var(--bg))',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                className="hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]"
              >
                + {tmpl.label}
              </button>
            ))}
          </div>

          {/* Textarea */}
          <textarea
            value={draftMessage}
            onChange={(e) => setDraftMessage(e.target.value)}
            placeholder="Click a starter above or write a message here..."
            rows={3}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: 12,
              background: 'var(--surface-alt, var(--bg))',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.92rem',
              resize: 'vertical',
              outline: 'none',
              marginBottom: '1rem',
            }}
            className="focus:border-[var(--neon-cyan)]"
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)' }}>
              LOCATION: BENGALURU, INDIA · UTC+05:30
            </span>

            <button
              onClick={handleCopyDraft}
              onMouseEnter={playCyberHover}
              disabled={!draftMessage.trim()}
              className="clay-btn clay-btn-primary"
              style={{
                opacity: draftMessage.trim() ? 1 : 0.45,
                cursor: draftMessage.trim() ? 'pointer' : 'not-allowed',
              }}
            >
              {copiedDraft ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copiedDraft ? 'COPIED TO CLIPBOARD' : 'COPY DRAFT MESSAGE'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
