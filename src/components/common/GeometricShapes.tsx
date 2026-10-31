import React from 'react';
import { motion } from 'framer-motion';

export const FloatingCube: React.FC<{
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  duration?: number;
}> = ({ size = 32, className = '', style = {}, color = 'var(--accent)', duration = 6 }) => {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        position: 'absolute',
        ...style,
      }}
    >
      <svg viewBox="0 0 40 40" width="100%" height="100%" fill="none">
        {/* Isometric 3D Cube with dual gradient / tone */}
        <path d="M20 2 L38 12 L20 22 L2 12 Z" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.2" />
        <path d="M2 12 L20 22 L20 38 L2 28 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.2" />
        <path d="M38 12 L20 22 L20 38 L38 28 Z" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.2" />
      </svg>
    </motion.div>
  );
};

export const CyberCrosshair: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}> = ({ className = '', style = {}, label }) => (
  <div
    className={`pointer-events-none select-none font-mono text-[9px] tracking-wider text-[var(--text-muted)] flex items-center gap-1.5 ${className}`}
    style={style}
  >
    <span className="text-[var(--accent)] font-bold">+</span>
    {label && <span>{label}</span>}
  </div>
);

