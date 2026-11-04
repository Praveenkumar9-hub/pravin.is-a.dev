import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Copy, Check, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandOutput {
  command: string;
  response: Array<{
    type: 'text' | 'success' | 'highlight' | 'accent' | 'dim' | 'badge';
    text: string;
  }>;
}

const PRESET_COMMANDS: Record<string, CommandOutput> = {
  whoami: {
    command: 'whoami',
    response: [
      { type: 'accent', text: 'Praveenkumar Mokashi' },
      { type: 'text', text: 'ECE Student & Systems Developer @ East West Institute of Technology (EWIT, Class of 2028)' },
      { type: 'success', text: 'Focus: Linux POSIX, ANSI C, Python Automation & Defensive Security' },
      { type: 'dim', text: 'Location: Bengaluru, Karnataka, India • Status: Ready for technical internships' },
    ],
  },
  stack: {
    command: 'echo $CORE_STACK',
    response: [
      { type: 'accent', text: '• LINUX  : Ubuntu / Debian, POSIX Shell (bash, awk, sed, grep), GNU GCC' },
      { type: 'highlight', text: '• C LANG : ANSI C / C99, pointers, dynamic memory allocation & valgrind' },
      { type: 'success', text: '• PYTHON : Automation scripts, network telemetry analysis, predictive ML' },
      { type: 'dim', text: 'Three focused technologies: fast, deterministic, low-level.' },
    ],
  },
  experience: {
    command: 'cat experience.log',
    response: [
      { type: 'accent', text: '★ GDG on Campus UVCE  -> Community Member (Oct 2026 — Present)' },
      { type: 'highlight', text: '★ Google Cloud Arcade -> Facilitator Program Participant (Jul 2026 — Sep 2026)' },
      { type: 'success', text: '★ Yuva Intern         -> Virtual Data Science with Python Trainee (Jul 2026 — Sep 2026)' },
      { type: 'dim', text: 'Hands-on community learning, cloud facilitator labs, and real-world Python workflows.' },
    ],
  },
  certs: {
    command: 'ls ./credentials/',
    response: [
      { type: 'highlight', text: '✔ google/         Foundations of Cybersecurity & Risk Management (2 Badges)' },
      { type: 'accent', text: '✔ cisco/          Introduction to Cyber Security' },
      { type: 'highlight', text: '✔ infosys/        InfoSec, Cryptography & Defensive Architecture (3 Badges)' },
      { type: 'success', text: '✔ ethnotech/      Python Programming I & II with Linux (2 Badges)' },
      { type: 'dim', text: 'Total: 8 verified course completion credentials authenticated.' },
    ],
  },
  projects: {
    command: 'find ./projects -maxdepth 1 -type d',
    response: [
      { type: 'accent', text: '├── ai-network-attack-forecasting/  [Python / ML / Network Telemetry]' },
      { type: 'highlight', text: '├── fake-account-detection/         [ML Classification / Feature Extraction]' },
      { type: 'success', text: '├── online-fraud-detection/          [Transaction Anomaly Detection]' },
      { type: 'accent', text: '├── smart-bharat-ai/                 [AI Problem-Solving Architecture]' },
      { type: 'highlight', text: '└── hospital-management-system/     [ANSI C / Modular Record Structs]' },
      { type: 'dim', text: '5 featured academic & systems engineering projects.' },
    ],
  },
  uptime: {
    command: 'uptime && uname -a',
    response: [
      { type: 'success', text: 'Linux praveen-workstation 6.8.0-generic #42-Ubuntu SMP x86_64 GNU/Linux' },
      { type: 'text', text: '17:45:00 up 42 days, 3 users, load average: 0.14, 0.08, 0.05' },
      { type: 'accent', text: 'Network Latency: 16ms (ap-south-1) • Memory: 2.1GiB / 15.8GiB (13.2%)' },
      { type: 'dim', text: 'System integrity nominal. 0 degraded units.' },
    ],
  },
  contact: {
    command: 'cat contact.json',
    response: [
      { type: 'accent', text: 'Email   : thepraveenm09@gmail.com' },
      { type: 'highlight', text: 'GitHub  : github.com/Praveenkumar9-hub' },
      { type: 'success', text: 'LinkedIn: linkedin.com/in/try-to-hack-praveen/' },
      { type: 'dim', text: 'Open for cybersecurity discussions, systems programming, and internship roles.' },
    ],
  },
};

const COMMAND_KEYS = ['whoami', 'stack', 'experience', 'certs', 'projects', 'uptime', 'contact'] as const;

export const InteractiveTerminal: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeKey, setActiveKey] = useState<string>('whoami');
  const [typedCommand, setTypedCommand] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [showResponse, setShowResponse] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');
  const [customResponse, setCustomResponse] = useState<Array<{ type: string; text: string }> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeData = PRESET_COMMANDS[activeKey] || PRESET_COMMANDS.whoami;

  // Typewriter effect simulation when preset changes
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setIsTyping(true);
    setShowResponse(false);
    setTypedCommand('');
    setCustomResponse(null);

    const fullCommand = activeData.command;
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, charIndex));
        charIndex++;
        const delay = Math.floor(Math.random() * 20) + 25;
        timerRef.current = setTimeout(typeNextChar, delay);
      } else {
        setIsTyping(false);
        timerRef.current = setTimeout(() => {
          setShowResponse(true);
        }, 120);
      }
    };

    timerRef.current = setTimeout(typeNextChar, 60);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeKey, activeData.command]);

  const handleSelectCommand = (key: string) => {
    setActiveKey(key);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setCustomResponse([]);
      setTypedCommand('clear');
      setShowResponse(true);
      setInputVal('');
      return;
    }

    if (cmd === 'help') {
      setTypedCommand('help');
      setCustomResponse([
        { type: 'accent', text: 'Available interactive commands:' },
        { type: 'text', text: '  whoami, stack, experience, certs, projects, uptime, contact, clear, date, uname' },
        { type: 'dim', text: 'Tip: Click any tab above or type directly into this console.' },
      ]);
      setShowResponse(true);
      setInputVal('');
      return;
    }

    if (cmd === 'date') {
      setTypedCommand('date');
      setCustomResponse([
        { type: 'success', text: new Date().toUTCString() },
        { type: 'dim', text: 'UTC Time synchronized with NTP.' },
      ]);
      setShowResponse(true);
      setInputVal('');
      return;
    }

    if (cmd.startsWith('uname')) {
      setTypedCommand(cmd);
      setCustomResponse([
        { type: 'success', text: 'Linux praveen-workstation 6.8.0-generic #42-Ubuntu SMP x86_64 GNU/Linux' },
      ]);
      setShowResponse(true);
      setInputVal('');
      return;
    }

    // Check if matched preset
    const matchedKey = COMMAND_KEYS.find((k) => k === cmd || PRESET_COMMANDS[k].command.toLowerCase() === cmd);
    if (matchedKey) {
      setActiveKey(matchedKey);
      setInputVal('');
      return;
    }

    // Default unknown command
    setTypedCommand(inputVal);
    setCustomResponse([
      { type: 'accent', text: `bash: command not found: ${inputVal}` },
      { type: 'dim', text: "Type 'help' or click any of the tabs above to run system queries." },
    ]);
    setShowResponse(true);
    setInputVal('');
  };

  const currentDisplayResponse = customResponse || activeData.response;

  const handleCopy = () => {
    const textToCopy = `$ ${typedCommand || activeData.command}\n` + currentDisplayResponse.map((r) => r.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(8, 11, 20, 0.96)',
        border: '1px solid rgba(0, 240, 255, 0.22)',
        boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(0, 240, 255, 0.12)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Terminal Title Bar */}
      <div
        className="px-4 py-3 flex items-center justify-between border-b select-none gap-2 flex-wrap"
        style={{
          background: 'rgba(14, 20, 36, 0.9)',
          borderColor: 'rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Left: Window Controls & Shell Identity */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80 hover:opacity-100 transition-opacity" />
          <span className="ml-2 font-mono text-xs text-[var(--text-muted)] hidden sm:inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
            <span>praveen@workstation:~ (zsh)</span>
          </span>
        </div>

        {/* Center: Interactive Preset Tabs with Gliding Pill */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5 no-scrollbar">
          {COMMAND_KEYS.map((k) => {
            const isTabActive = activeKey === k && !customResponse;
            return (
              <button
                key={k}
                onClick={() => handleSelectCommand(k)}
                className={`relative px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold transition-all cursor-pointer focus:outline-none ${
                  isTabActive
                    ? 'text-white'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5'
                }`}
              >
                {isTabActive && (
                  <motion.div
                    layoutId="terminalTabIndicator"
                    className="absolute inset-0 rounded-lg bg-[var(--electric-blue)] shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{k}</span>
              </button>
            );
          })}
        </div>

        {/* Right Tools: Copy Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer flex items-center gap-1 text-[11px] font-mono"
            title="Copy Command & Output"
            aria-label="Copy terminal text"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                <span className="text-[var(--green)] hidden sm:inline">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-left min-h-[220px] sm:min-h-[210px] flex flex-col justify-start">
        {/* Active Command Prompt Line */}
        <div className="flex items-center flex-wrap gap-1 text-[var(--text-primary)] mb-3">
          <span className="text-[var(--neon-cyan)] font-bold">praveen@workstation</span>
          <span className="text-[var(--text-muted)]">:</span>
          <span className="text-[var(--electric-blue)] font-bold">~</span>
          <span className="text-[var(--neon-cyan)] font-bold">$</span>
          <span className="ml-1 text-white font-medium">{typedCommand}</span>
          {/* Animated Blinking Caret */}
          <span
            className={`inline-block w-2 h-4 bg-[var(--neon-cyan)] ml-0.5 ${
              isTyping ? 'opacity-100' : 'animate-pulse'
            }`}
          />
        </div>

        {/* Response Lines with Staggered Fade */}
        <AnimatePresence mode="wait">
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-1.5 pl-2 border-l-2 border-[var(--electric-blue)]/50 mt-1"
            >
              {currentDisplayResponse.map((line, idx) => {
                let colorClass = 'text-[var(--text-secondary)]';
                if (line.type === 'accent') colorClass = 'text-[var(--neon-cyan)] font-bold';
                if (line.type === 'success') colorClass = 'text-[var(--green)] font-semibold';
                if (line.type === 'highlight') colorClass = 'text-[var(--electric-blue)] font-semibold';
                if (line.type === 'dim') colorClass = 'text-[var(--text-muted)] italic text-[11px]';

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.12, delay: idx * 0.035 }}
                    className={`${colorClass} leading-relaxed font-mono`}
                  >
                    {line.text}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Interactive Live Input Form */}
      <form
        onSubmit={handleCustomSubmit}
        className="px-4 py-2 border-t flex items-center gap-2 font-mono text-xs"
        style={{
          background: 'rgba(11, 16, 28, 0.95)',
          borderColor: 'rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="flex items-center gap-1 text-[var(--neon-cyan)] font-bold select-none shrink-0">
          <span>$&gt;</span>
        </div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type a command (help, whoami, stack, certs, uptime, clear)..."
          className="flex-1 bg-transparent border-0 text-white font-mono text-xs focus:outline-none placeholder:text-[var(--text-muted)]/60"
        />
        <button
          type="submit"
          className="px-2.5 py-1 rounded-md bg-[var(--surface)] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--neon-cyan)] text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
        >
          <Play className="w-3 h-3 text-[var(--neon-cyan)]" />
          <span className="hidden sm:inline">Exec</span>
        </button>
      </form>

      {/* Terminal Telemetry Footer Bar */}
      <div
        className="px-4 py-2 border-t flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] select-none"
        style={{
          background: 'rgba(6, 9, 16, 0.98)',
          borderColor: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-ping" />
          <span className="text-[var(--text-secondary)]">STATUS: 200 OK</span>
          <span>·</span>
          <span className="text-[var(--green)]">EXIT: 0</span>
          <span>·</span>
          <span>LATENCY: 14ms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">TTY: /dev/pts/1</span>
          <span>·</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
