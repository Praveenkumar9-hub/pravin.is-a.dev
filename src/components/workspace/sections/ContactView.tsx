import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../common/SocialIcons';
import { playCyberClick, playCyberHover } from '../../../utils/cyberAudio';

const EMAIL_ADDRESS = 'thepraveenm09@gmail.com';
const GITHUB_URL = 'https://github.com/Praveenkumar9-hub';
const LINKEDIN_URL = 'https://www.linkedin.com/in/try-to-hack-praveen/';

const TEMPLATES = [
  {
    label: 'Cybersecurity Discussion',
    body: "Hi Praveen, I saw your network attack forecasting research and cybersecurity loadout. Let's discuss defensive AI and threat modeling.",
  },
  {
    label: 'Project Collaboration',
    body: "Hello Praveen! Your Smart Bharat AI companion platform and systems projects caught my eye. Let's discuss potential collaboration.",
  },
  {
    label: 'Internship / Opportunity',
    body: "Hi Praveen, we are impressed by your systems and security background at East West Institute of Technology. Let's connect regarding opportunities.",
  },
];

export const ContactView: React.FC = () => {
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
    <div className="flex flex-col gap-6 py-2">
      {/* Header */}
      <div className="border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)]" />
          <span className="font-mono text-xs font-bold text-[var(--neon-cyan)] tracking-wider uppercase">
            Praveen.exe // TRANSMISSION TERMINAL
          </span>
        </div>
        <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] m-0">
          INITIALIZE CONTACT
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
          Direct communication channels for engineering collaborations, cybersecurity discussions, and project inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Communication Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Primary Email Card */}
          <div
            className="clay p-5 rounded-2xl flex flex-col gap-3 relative"
            style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
          >
            <div className="hud-corner-tl" />
            <div className="flex items-center gap-2.5 font-mono text-xs text-[var(--neon-cyan)] font-bold">
              <Mail className="w-4 h-4" />
              <span>PRIMARY TRANSMISSION ADDRESS</span>
            </div>

            <div className="font-space font-extrabold text-lg sm:text-xl text-[var(--text-primary)] break-all">
              {EMAIL_ADDRESS}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-primary flex-1 py-2 text-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>OPEN EMAIL</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={playCyberHover}
                className="clay-btn clay-btn-ghost py-2 px-3 text-xs"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                    <span className="text-[var(--green)]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCyberHover}
              className="clay clay-hover p-4 rounded-xl flex flex-col gap-1.5 transition-all text-left"
              style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center justify-between">
                <GithubIcon className="w-5 h-5 text-[var(--text-primary)]" />
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </div>
              <div className="font-space font-bold text-sm text-[var(--text-primary)] mt-1">
                GitHub
              </div>
              <div className="font-mono text-[10px] text-[var(--text-muted)] truncate">
                Praveenkumar9-hub
              </div>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCyberHover}
              className="clay clay-hover p-4 rounded-xl flex flex-col gap-1.5 transition-all text-left"
              style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center justify-between">
                <LinkedinIcon className="w-5 h-5 text-[var(--neon-cyan)]" />
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </div>
              <div className="font-space font-bold text-sm text-[var(--text-primary)] mt-1">
                LinkedIn
              </div>
              <div className="font-mono text-[10px] text-[var(--text-muted)] truncate">
                try-to-hack-praveen
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Message Generator */}
        <div className="lg:col-span-7">
          <div
            className="clay p-5 rounded-2xl flex flex-col gap-4"
            style={{ background: 'var(--cards)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--electric-blue)]">
                <MessageSquare className="w-4 h-4" />
                <span>QUICK MESSAGE GENERATOR</span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                SELECT TEMPLATE
              </span>
            </div>

            {/* Template Selector Chips */}
            <div className="flex flex-wrap gap-1.5">
              {TEMPLATES.map((tpl) => (
                <button
                  key={tpl.label}
                  onClick={() => {
                    playCyberClick(740, 0.03);
                    setDraftMessage(tpl.body);
                  }}
                  onMouseEnter={playCyberHover}
                  className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer"
                  style={{
                    background: draftMessage === tpl.body ? 'var(--accent-dim)' : 'var(--surface)',
                    color: draftMessage === tpl.body ? 'var(--electric-blue)' : 'var(--text-secondary)',
                    border: draftMessage === tpl.body ? '1px solid var(--electric-blue)' : '1px solid var(--border)',
                  }}
                >
                  {tpl.label}
                </button>
              ))}
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <textarea
                value={draftMessage}
                onChange={(e) => setDraftMessage(e.target.value)}
                placeholder="Click a template above or draft your custom message..."
                rows={4}
                className="w-full p-3 rounded-xl font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none resize-none"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              />

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <button
                  onClick={handleCopyDraft}
                  disabled={!draftMessage.trim()}
                  onMouseEnter={playCyberHover}
                  className="clay-btn clay-btn-ghost py-1.5 px-3 text-xs disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                      <span className="text-[var(--green)]">MESSAGE COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY MESSAGE</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                    'Portfolio Inquiry // Collaboration'
                  )}&body=${encodeURIComponent(draftMessage)}`}
                  className="clay-btn clay-btn-primary py-1.5 px-3 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT IN CLIENT</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
