import React from 'react';
import { motion } from 'framer-motion';

export interface StickyNoteProps {
  children: React.ReactNode;
  color?: 'yellow' | 'mint' | 'coral' | 'lavender' | 'blue';
  tilt?: number; // degrees, e.g. -2, 1, 2
  hasTape?: boolean;
  hasPin?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  children,
  color = 'yellow',
  tilt = -1.5,
  hasTape = false,
  hasPin = false,
  className = '',
  style = {},
}) => {
  const colorMap = {
    yellow: {
      bg: 'var(--yellow-note)',
      text: 'var(--yellow-text)',
      border: 'color-mix(in srgb, var(--yellow-text) 25%, transparent)',
    },
    mint: {
      bg: 'var(--mint-dim)',
      text: 'var(--mint)',
      border: 'color-mix(in srgb, var(--mint) 40%, transparent)',
    },
    coral: {
      bg: 'var(--coral-dim)',
      text: 'var(--coral)',
      border: 'color-mix(in srgb, var(--coral) 40%, transparent)',
    },
    lavender: {
      bg: 'var(--accent-2-dim)',
      text: 'var(--accent-2)',
      border: 'color-mix(in srgb, var(--accent-2) 40%, transparent)',
    },
    blue: {
      bg: 'var(--accent-dim)',
      text: 'var(--accent)',
      border: 'color-mix(in srgb, var(--accent) 35%, transparent)',
    },
  };

  const scheme = colorMap[color];

  return (
    <motion.div
      whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`sticky-note cursor-default ${className}`}
      style={{
        transform: `rotate(${tilt}deg)`,
        backgroundColor: scheme.bg,
        color: scheme.text,
        border: `1px solid ${scheme.border}`,
        ...style,
      }}
    >
      {hasTape && <div className="sticky-tape" />}
      {hasPin && (
        <span
          style={{
            position: 'absolute',
            top: -6,
            left: 12,
            fontSize: '12px',
            lineHeight: 1,
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))',
          }}
        >
          📌
        </span>
      )}
      {children}
    </motion.div>
  );
};

export const GameBadge: React.FC<{
  label: string;
  variant?: 'blue' | 'mint' | 'coral' | 'lavender';
  icon?: React.ReactNode;
  className?: string;
}> = ({ label, variant = 'blue', icon, className = '' }) => {
  const styles = {
    blue: { bg: 'var(--accent-dim)', text: 'var(--accent)', border: 'var(--accent)' },
    mint: { bg: 'var(--mint-dim)', text: 'var(--mint)', border: 'var(--mint)' },
    coral: { bg: 'var(--coral-dim)', text: 'var(--coral)', border: 'var(--coral)' },
    lavender: { bg: 'var(--accent-2-dim)', text: 'var(--accent-2)', border: 'var(--accent-2)' },
  };

  const st = styles[variant];

  return (
    <span
      className={`game-badge ${className}`}
      style={{
        backgroundColor: st.bg,
        color: st.text,
        border: `1px solid color-mix(in srgb, ${st.border} 45%, transparent)`,
      }}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
    </span>
  );
};

