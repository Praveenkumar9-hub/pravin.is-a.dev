import React, { useState } from 'react';
import { Copy, Check, Play, Terminal, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinuxLogo, CLogo, PythonLogo } from './common/TechLogos';
import { SpotlightCard } from './common/SpotlightCard';

type CoreTechKey = 'linux' | 'c' | 'python';

interface CoreTechData {
  key: CoreTechKey;
  name: string;
  badge: string;
  tagline: string;
  accentColor: string;
  borderColor: string;
  logo: React.ReactNode;
  summary: string;
  capabilities: string[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  simulatedOutput: {
    command: string;
    lines: string[];
  };
}

const CORE_TRILOGY: Record<CoreTechKey, CoreTechData> = {
  linux: {
    key: 'linux',
    name: 'Linux',
    badge: 'CORE_OPERATING_SYSTEM',
    tagline: 'Ubuntu POSIX & Systems Architecture',
    accentColor: '#FFA500',
    borderColor: 'rgba(255, 165, 0, 0.4)',
    logo: <LinuxLogo size={36} />,
    summary:
      'Daily driver operating system and foundational deployment target. Deep experience in POSIX shell scripting, process management, file permissions, pipe redirection, and GNU toolchains.',
    capabilities: [
      'Ubuntu & Debian server environment configuration',
      'POSIX shell scripting (Bash, awk, sed, grep)',
      'GCC compilation, Makefiles, and dynamic linking',
      'Process signals, memory maps, and file descriptors',
    ],
    codeSnippet: {
      filename: 'sys_audit.sh',
      language: 'bash',
      code: `#!/usr/bin/env bash
# Automated Linux Host Telemetry Audit
set -euo pipefail

echo "[+] Auditing Active Network Sockets..."
ss -tulwn | grep -E "(LISTEN|ESTAB)"

echo "[+] Checking Memory Allocations..."
free -h | awk '/Mem:/ {printf "RAM Usage: %s / %s (%.1f%%)\\n", $3, $2, ($3/$2)*100}'

echo "[+] Scanning System Processes for High CPU..."
ps -eo pid,user,%cpu,%mem,comm --sort=-%cpu | head -n 5`,
    },
    simulatedOutput: {
      command: 'chmod +x sys_audit.sh && ./sys_audit.sh',
      lines: [
        '[+] Auditing Active Network Sockets...',
        'LISTEN   0   128   0.0.0.0:22        0.0.0.0:*      users:(("sshd",pid=1142,fd=3))',
        'LISTEN   0   512   0.0.0.0:443       0.0.0.0:*      users:(("nginx",pid=2401,fd=6))',
        'ESTAB    0   0     192.168.1.15:5231 142.250.190.46:443',
        '[+] Checking Memory Allocations...',
        'RAM Usage: 2.1Gi / 15.8Gi (13.3%)',
        '[+] Scanning System Processes for High CPU...',
        'PID   USER     %CPU  %MEM  COMMAND',
        '1142  root      1.2   0.8  dockerd',
        '2401  www-data  0.9   1.1  nginx: worker',
        '3104  praveen   0.6   2.4  python3 telemetry.py',
        '[STATUS: OK] 0 degraded daemon units. Host baseline secure.',
      ],
    },
  },
  c: {
    key: 'c',
    name: 'C Programming',
    badge: 'SYSTEMS_COMPILATION',
    tagline: 'ANSI C / C99 Low-Level Systems',
    accentColor: '#00599C',
    borderColor: 'rgba(0, 89, 156, 0.45)',
    logo: <CLogo size={36} />,
    summary:
      'Writing performant, deterministic code close to hardware. Focused on dynamic memory management, pointer arithmetic, struct memory alignment, and modular multi-file header architecture.',
    capabilities: [
      'Manual dynamic memory management (malloc, free, valgrind)',
      'Pointer arithmetic, function pointers, and linked structures',
      'Binary and text file I/O operations with persistent state',
      'Modular compilation with header guards (#ifndef)',
    ],
    codeSnippet: {
      filename: 'records_engine.c',
      language: 'c',
      code: `// ANSI C / C99 Modular Patient Memory Record Manager
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct PatientNode {
    unsigned int id;
    char name[64];
    float billing_balance;
    struct PatientNode* next;
} PatientNode;

PatientNode* create_node(unsigned int id, const char* name, float balance) {
    PatientNode* node = (PatientNode*)malloc(sizeof(PatientNode));
    if (!node) return NULL;
    node->id = id;
    strncpy(node->name, name, 63);
    node->name[63] = '\\0';
    node->billing_balance = balance;
    node->next = NULL;
    return node;
}`,
    },
    simulatedOutput: {
      command: 'gcc -O2 -Wall -Wextra records_engine.c -o records && valgrind ./records',
      lines: [
        '==38192== Memcheck, a memory error detector',
        '==38192== Compiling records_engine.c with ANSI C / C99 flags: -O2 -Wall',
        '[ALLOC] struct PatientNode: 80 bytes heap allocated at 0x55a82ef1a240',
        '[INIT] Record Created: ID: 1042 | Name: "Arjun Verma" | Balance: $3,450.00',
        '[VERIFY] node->next == NULL (Clean tail invariant verified)',
        '[FREE] Deallocating node memory via free(node)... OK',
        '==38192== HEAP SUMMARY:',
        '==38192==   total heap usage: 1 allocs, 1 frees, 80 bytes allocated',
        '==38192== All heap blocks were freed -- no leaks are possible',
        '==38192== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)',
      ],
    },
  },
  python: {
    key: 'python',
    name: 'Python',
    badge: 'AUTOMATION_AND_AI',
    tagline: 'Data Science, Security & Defense ML',
    accentColor: '#FFE052',
    borderColor: 'rgba(255, 224, 82, 0.45)',
    logo: <PythonLogo size={36} />,
    summary:
      'High-level automation, machine learning prototyping, network traffic telemetry parsing, and predictive cyber defense modeling mapped to MITRE ATT&CK enterprise tactics.',
    capabilities: [
      'Algorithmic programming & object-oriented architecture',
      'Temporal network telemetry parsing & delta feature extraction',
      'Scikit-Learn, NumPy, and Pandas data pipelines',
      'Automated security tooling and REST API integrations',
    ],
    codeSnippet: {
      filename: 'anomaly_forecaster.py',
      language: 'python',
      code: `# Temporal Network Telemetry Delta Feature Engine
import numpy as np

def compute_temporal_rate_of_change(window_telemetry: list[float]) -> float:
    """Calculates sliding 15-minute telemetry slope delta."""
    if len(window_telemetry) < 2:
        return 0.0
    x = np.arange(len(window_telemetry))
    y = np.array(window_telemetry)
    # Fit linear trend slope
    slope, _ = np.polyfit(x, y, deg=1)
    return float(slope)

# Forecast attack probability threshold
anomaly_vector = compute_temporal_rate_of_change([14.2, 18.5, 29.1, 84.7])
print(f"[+] 5-Minute Forecast Threat Metric: {anomaly_vector:.3f}")`,
    },
    simulatedOutput: {
      command: 'python3 anomaly_forecaster.py --dataset=network_stream.pcap',
      lines: [
        '[INIT] Initializing Temporal Anomaly Telemetry Engine...',
        '[DATA] Ingesting sliding window: [14.2, 18.5, 29.1, 84.7] (pkt/sec delta)',
        '[MATH] Linear regression polyfit (deg=1): slope = 22.840',
        '[ALERT] 5-Minute Forecast Threat Metric: 22.840 (Rapid rate-of-change detected)',
        '[HEURISTIC] Anomaly vector exceeds baseline delta (> 15.0)',
        '[ACTION] Triggering defensive socket throttler & firewall logging rule.',
        '[STATUS: EXECUTION SUCCESS] Execution completed in 18.4ms (exit code: 0)',
      ],
    },
  },
};

export const Skills: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<CoreTechKey>('linux');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  const activeTechData = CORE_TRILOGY[selectedTech];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTechData.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunScript = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  return (
    <section id="skills" className="py-20 border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 mb-12 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--electric-blue)]" />
            <span className="font-mono text-xs font-bold text-[var(--electric-blue)] uppercase tracking-wider">
              Core Technical Trilogy
            </span>
          </div>
          <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] m-0">
            Linux · C · Python
          </h2>
          <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mt-1">
            Focusing deeply on the three fundamental technologies that power operating systems, high-performance computing, and cybersecurity automation.
          </p>
        </motion.div>

        {/* 3 Interactive Tech Selection Tabs with Gliding Spring Pill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {(Object.keys(CORE_TRILOGY) as CoreTechKey[]).map((key) => {
            const item = CORE_TRILOGY[key];
            const isSelected = selectedTech === key;

            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedTech(key);
                  setShowOutput(true);
                }}
                className={`relative p-5 rounded-2xl flex items-center justify-between text-left transition-all duration-300 cursor-pointer focus:outline-none overflow-hidden ${
                  isSelected ? 'shadow-lg border-2' : 'hover:border-[var(--text-muted)] border opacity-80 hover:opacity-100'
                }`}
                style={{
                  background: isSelected ? 'var(--surface)' : 'rgba(255, 255, 255, 0.02)',
                  borderColor: isSelected ? item.accentColor : 'var(--border)',
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTrilogyGlow"
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20"
                    style={{ background: item.accentColor }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}

                <div className="flex items-center gap-4 relative z-10">
                  <div className="shrink-0 p-2 rounded-xl bg-[var(--secondary)] border border-[var(--border)]">
                    {item.logo}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-space font-bold text-lg text-[var(--text-primary)] leading-tight">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {item.tagline}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping relative z-10"
                    style={{ background: item.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Technology Deep Dive & Interactive Code Inspection */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <SpotlightCard
              spotlightColor="rgba(83, 109, 255, 0.12)"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl text-left"
              style={{
                background: 'var(--surface)',
                border: `1px solid ${activeTechData.borderColor}`,
                boxShadow: 'var(--shadow-lg), 0 0 35px -10px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* Left: Technology Profile & Capabilities */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[var(--secondary)] border border-[var(--border)] shrink-0">
                      {activeTechData.logo}
                    </div>
                    <div>
                      <span
                        className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider"
                        style={{
                          color: activeTechData.accentColor,
                          borderColor: activeTechData.borderColor,
                          background: 'rgba(255, 255, 255, 0.03)',
                        }}
                      >
                        {activeTechData.badge}
                      </span>
                      <h3 className="font-space font-extrabold text-2xl text-[var(--text-primary)] mt-1 mb-0">
                        {activeTechData.name}
                      </h3>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed m-0">
                    {activeTechData.summary}
                  </p>
                </div>

                {/* Core Capabilities Checklist */}
                <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Technical Competencies:
                  </span>
                  <div className="flex flex-col gap-2">
                    {activeTechData.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ background: activeTechData.accentColor }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Live Interactive Code & Simulated Terminal Runner */}
              <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] bg-[#0A0E18]">
                {/* Code Window Header */}
                <div className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--border)] bg-[#0D1220]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
                    </div>
                    <span className="font-mono text-xs text-[var(--text-secondary)] ml-2">
                      {activeTechData.codeSnippet.filename}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Live Run Script Button */}
                    <button
                      onClick={handleRunScript}
                      disabled={isRunning}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold text-white bg-[var(--electric-blue)] hover:brightness-110 shadow-xs transition-all cursor-pointer disabled:opacity-50"
                      title="Run Script & Inspect Live Output"
                    >
                      {isRunning ? (
                        <>
                          <RotateCw className="w-3.5 h-3.5 animate-spin text-white" />
                          <span>Running...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 text-[var(--green)]" />
                          <span>Run Script</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
                      title="Copy snippet"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[var(--green)]" />
                          <span className="text-[var(--green)]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code Snippet Display with Syntax Cadence */}
                <div className="p-4 sm:p-5 overflow-x-auto text-xs font-mono leading-relaxed text-left max-h-[260px] overflow-y-auto">
                  <pre className="m-0 text-[var(--text-secondary)]">
                    <code>{activeTechData.codeSnippet.code}</code>
                  </pre>
                </div>

                {/* Simulated Output Terminal Drawer */}
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-[var(--border)] bg-[#070A12] flex flex-col"
                  >
                    <div className="px-4 py-1.5 border-b border-white/5 flex items-center justify-between text-[10px] font-mono select-none">
                      <div className="flex items-center gap-1.5 text-[var(--neon-cyan)]">
                        <Terminal className="w-3 h-3" />
                        <span>OUTPUT STREAM: {activeTechData.simulatedOutput.command}</span>
                      </div>
                      <span className="text-[var(--green)] font-semibold">EXIT: 0</span>
                    </div>

                    <div className="p-4 font-mono text-[11px] text-left leading-relaxed flex flex-col gap-1 max-h-[190px] overflow-y-auto text-[var(--text-secondary)]">
                      {activeTechData.simulatedOutput.lines.map((line, idx) => {
                        let color = 'text-[var(--text-secondary)]';
                        if (line.includes('[+]') || line.includes('[INIT]')) color = 'text-[var(--electric-blue)] font-semibold';
                        if (line.includes('RAM Usage') || line.includes('[ALLOC]')) color = 'text-[var(--neon-cyan)]';
                        if (line.includes('STATUS: OK') || line.includes('0 errors') || line.includes('SUCCESS')) color = 'text-[var(--green)] font-bold';
                        if (line.includes('[ALERT]')) color = 'text-amber-400 font-bold';

                        return (
                          <div key={idx} className={color}>
                            {line}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Code Window Footer */}
                <div className="px-4 py-2 border-t border-[var(--border)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] bg-[#0D1220]">
                  <span>Language: {activeTechData.codeSnippet.language.toUpperCase()}</span>
                  <span>Tested &amp; compiled on Linux x86_64</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
