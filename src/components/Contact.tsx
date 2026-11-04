import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './common/SocialIcons';
import { SpotlightCard } from './common/SpotlightCard';

const EMAIL_ADDRESS = 'thepraveenm09@gmail.com';
const GITHUB_URL = 'https://github.com/Praveenkumar9-hub';
const LINKEDIN_URL = 'https://www.linkedin.com/in/try-to-hack-praveen/';

const TEMPLATES = [
  {
    label: 'Cybersecurity Discussion',
    body: "Hi Praveen, I saw your network attack forecasting research and cybersecurity projects. I'd love to exchange ideas on defensive AI and threat modeling.",
  },
  {
    label: 'Project Collaboration',
    body: "Hello Praveen! Your Smart Bharat AI platform and systems programming projects caught my eye. Let's discuss potential collaboration.",
  },
  {
    label: 'Internship / Opportunity',
    body: "Hi Praveen, we are impressed by your systems and security background at East West Institute of Technology. Let's connect regarding opportunities.",
  },
];

export const Contact: React.FC = () => {
  const [draftMessage, setDraftMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyDraft = () => {
    if (!draftMessage.trim()) return;
    navigator.clipboard.writeText(draftMessage);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2400);
  };

  return (
    <section id="contact" className="py-20 border-t border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 mb-12 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)]" />
            <span className="font-mono text-xs font-bold text-[var(--neon-cyan)] uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] m-0">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mt-1">
            Open for software internships, systems engineering discussions, and cybersecurity collaborations.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Direct Links & Email Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Email Card with Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.15)"
                className="p-6 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:shadow-xl hover:border-[var(--neon-cyan)]"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--neon-cyan)]">
                  <Mail className="w-4 h-4" />
                  <span>PRIMARY EMAIL</span>
                </div>

                <div className="font-space font-bold text-lg sm:text-xl text-[var(--text-primary)] break-all">
                  {EMAIL_ADDRESS}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[var(--electric-blue)] hover:brightness-110 transition-all cursor-pointer shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-[var(--border)] bg-[var(--secondary)] text-[var(--text-primary)] hover:border-[var(--neon-cyan)] transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                        <span className="text-[var(--green)] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Social Grid Cards */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl flex flex-col gap-1.5 transition-all hover:-translate-y-1"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="w-5 h-5 text-[var(--text-primary)]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </div>
                <div className="font-space font-bold text-sm text-[var(--text-primary)] mt-1">
                  GitHub
                </div>
                <div className="font-mono text-[11px] text-[var(--text-muted)] truncate">
                  Praveenkumar9-hub
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl flex flex-col gap-1.5 transition-all hover:-translate-y-1"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-center justify-between">
                  <LinkedinIcon className="w-5 h-5 text-[var(--neon-cyan)]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </div>
                <div className="font-space font-bold text-sm text-[var(--text-primary)] mt-1">
                  LinkedIn
                </div>
                <div className="font-mono text-[11px] text-[var(--text-muted)] truncate">
                  try-to-hack-praveen
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Quick Message Generator with Spotlight */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <SpotlightCard
                spotlightColor="rgba(83, 109, 255, 0.14)"
                className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:border-[var(--electric-blue)]"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--electric-blue)]">
                    <MessageSquare className="w-4 h-4" />
                    <span>QUICK MESSAGE GENERATOR</span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
                    Select a starter
                  </span>
                </div>

                {/* Starter Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {TEMPLATES.map((tpl) => (
                    <button
                      key={tpl.label}
                      onClick={() => setDraftMessage(tpl.body)}
                      className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold transition-all cursor-pointer"
                      style={{
                        background: draftMessage === tpl.body ? 'var(--accent-dim)' : 'var(--secondary)',
                        color: draftMessage === tpl.body ? 'var(--electric-blue)' : 'var(--text-secondary)',
                        border: draftMessage === tpl.body ? '1px solid var(--electric-blue)' : '1px solid var(--border)',
                      }}
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>

                {/* Textarea */}
                <div className="flex flex-col gap-3">
                  <textarea
                    value={draftMessage}
                    onChange={(e) => setDraftMessage(e.target.value)}
                    placeholder="Click a starter above or type your custom message..."
                    rows={4}
                    maxLength={2000}
                    className="w-full p-3.5 rounded-xl font-sans text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none resize-none transition-colors"
                    style={{
                      background: 'var(--secondary)',
                      border: '1px solid var(--border)',
                    }}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      onClick={handleCopyDraft}
                      disabled={!draftMessage.trim()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                          <span className="text-[var(--green)] font-semibold">Message Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                        'Portfolio Inquiry // Collaboration'
                      )}&body=${encodeURIComponent(draftMessage)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[var(--electric-blue)] hover:brightness-110 transition-all cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email Client</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
