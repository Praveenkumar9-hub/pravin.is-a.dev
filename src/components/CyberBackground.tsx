import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  char?: string;
  isGlyph: boolean;
}

const CYBER_GLYPHS = ['0', '1', 'λ', '::', '0x', '§', '◈', '[', ']', '+', '_', '⚡', '443', '⬡', '01'];

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const particleCount = Math.min(Math.floor((width * height) / 20000), 65);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isGlyph = Math.random() < 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: isGlyph ? Math.random() * 0.35 + 0.15 : (Math.random() - 0.5) * 0.35,
        size: isGlyph ? Math.random() * 3 + 10 : Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.4 + 0.15,
        char: isGlyph ? CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)] : undefined,
        isGlyph,
      });
    }

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      // Specific prompt colors in RGB:
      // Electric blue: #536DFF -> 83, 109, 255
      // Neon cyan: #00E5FF -> 0, 229, 255
      // Violet: #A66BFF -> 166, 107, 255
      // Green: #00F5A0 -> 0, 245, 160
      const blueRgb = isDark ? '83, 109, 255' : '68, 93, 232';
      const violetRgb = isDark ? '166, 107, 255' : '143, 82, 230';
      const cyanRgb = isDark ? '0, 229, 255' : '0, 179, 204';
      const greenRgb = isDark ? '0, 245, 160' : '0, 199, 130';

      // 1. Constellation network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 135;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.14 * (isDark ? 1 : 0.65);
            ctx.strokeStyle = `rgba(${blueRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Cyber glyphs and particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.isGlyph && p.char) {
          ctx.font = `600 ${Math.round(p.size)}px 'JetBrains Mono', monospace`;
          const tone = i % 4 === 0 ? cyanRgb : i % 4 === 1 ? violetRgb : i % 4 === 2 ? greenRgb : blueRgb;
          ctx.fillStyle = `rgba(${tone}, ${p.alpha * (isDark ? 0.35 : 0.25)})`;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.fillStyle = `rgba(${i % 2 === 0 ? cyanRgb : blueRgb}, ${p.alpha * (isDark ? 0.65 : 0.45)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Drift motion
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -30) p.x = width + 30;
          else if (p.x > width + 30) p.x = -30;
          if (p.y < -30) p.y = height + 30;
          else if (p.y > height + 30) p.y = -30;
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [theme]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Animated Digital Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-soft) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-soft) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.65,
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] opacity-25"
        style={{ background: 'radial-gradient(circle, var(--electric-blue) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[35%] -right-[15%] w-[45vw] h-[45vw] rounded-full filter blur-[130px] opacity-20"
        style={{ background: 'radial-gradient(circle, var(--violet) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full filter blur-[120px] opacity-15"
        style={{ background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)' }}
      />

      {/* Cyber Security Session Tag (Strictly Privacy Compliant: NO location, NO coordinates) */}
      <div
        style={{
          position: 'absolute',
          top: 72,
          right: 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          color: 'var(--text-muted)',
          opacity: 0.4,
          letterSpacing: '0.12em',
          userSelect: 'none',
        }}
      >
        SYS_NODE // CYBERFUNK_WORKSPACE · ENCRYPTED_SESSION
      </div>

      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.9 }} />
    </div>
  );
};

export default CyberBackground;
