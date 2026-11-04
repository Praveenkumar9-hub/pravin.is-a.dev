import React from 'react';
import { motion } from 'framer-motion';

export type BrandLogoVariant = 'symbol' | 'horizontal' | 'compact' | 'monochrome';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  size?: number | 'sm' | 'md' | 'lg';
  className?: string;
  color?: string;
  showTag?: boolean;
  tagText?: string;
}

export const BrandSymbol: React.FC<{
  size?: number;
  className?: string;
  color?: string;
  monochrome?: boolean;
}> = ({ size = 28, className = '', color, monochrome = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="praveenBrandGradClean"
          x1="4"
          y1="4"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#5865F2" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient
          id="praveenSpineGradClean"
          x1="6"
          y1="4"
          x2="11"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#5865F2" />
        </linearGradient>
      </defs>

      {monochrome ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4H18L25 11L19 17H11V24.5L8.5 27.5L6 24.5V4ZM11 8H15.5L18 10.5L15.5 13H11V8Z"
          fill={color || 'currentColor'}
        />
      ) : (
        <>
          {/* Vertical Infrastructure Spine */}
          <path
            d="M6 4H11V24.5L8.5 27.5L6 24.5V4Z"
            fill="url(#praveenSpineGradClean)"
          />
          {/* Shield Monogram & Chevron Lobe */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4H18L25 11L19 17H11V13H15.5L18 10.5L15.5 8H11V4Z"
            fill="url(#praveenBrandGradClean)"
          />
        </>
      )}
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  color,
  showTag = false,
  tagText = 'NODE',
}) => {
  const pixelSize =
    typeof size === 'number'
      ? size
      : size === 'sm'
      ? 22
      : size === 'lg'
      ? 34
      : 28;

  if (variant === 'symbol') {
    return <BrandSymbol size={pixelSize} className={className} />;
  }

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center select-none ${className}`}
        role="img"
        aria-label="Praveen.exe logo"
      >
        <BrandSymbol size={pixelSize} />
      </div>
    );
  }

  if (variant === 'monochrome') {
    return (
      <div
        className={`inline-flex items-center gap-2 select-none ${className}`}
        role="img"
        aria-label="Praveen.exe logo"
      >
        <BrandSymbol size={pixelSize} monochrome color={color || 'currentColor'} />
        <span
          className="font-space font-extrabold tracking-tight leading-none text-left"
          style={{ fontSize: pixelSize * 0.72 }}
        >
          Praveen<span className="font-mono font-bold text-xs opacity-80">.exe</span>
        </span>
      </div>
    );
  }

  // Default: 'horizontal' (Sleek, seamless, zero awkward gaps)
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}
      role="img"
      aria-label="Praveen.exe brand logo"
    >
      {/* Sleek Vector Symbol Badge */}
      <div
        style={{
          width: pixelSize + 4,
          height: pixelSize + 4,
        }}
        className="rounded-lg flex items-center justify-center relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] group-hover:border-[var(--neon-cyan)]/50 group-hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)] transition-all duration-300 shrink-0"
      >
        <BrandSymbol size={pixelSize - 2} />
      </div>

      {/* Typography: Praveen.exe in one seamless locked typographic unit */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className="font-space font-bold tracking-tight text-base sm:text-lg text-[var(--text-primary)] group-hover:text-white transition-colors">
          Praveen<span className="font-mono font-bold text-[var(--neon-cyan)]">.exe</span>
        </span>

        {showTag && (
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[var(--surface)] text-[var(--neon-cyan)] border border-[var(--border)] font-semibold uppercase tracking-wider hidden lg:inline">
            {tagText}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default BrandLogo;
