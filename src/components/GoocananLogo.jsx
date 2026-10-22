import React from 'react';
import { 
  GOOCANAN_MARK_PATH, 
  GOOCANAN_MARK_VIEWBOX,
  GOOCANAN_WORDMARK_PATH, 
  GOOCANAN_WORDMARK_VIEWBOX,
  GOOCANAN_FULL_PATH, 
  GOOCANAN_FULL_VIEWBOX 
} from '../data/logoData';

/**
 * Official GOOCANAN Vector Logo Component
 * 
 * Supports:
 * - variant: 'mark' | 'wordmark' | 'full' | 'horizontal'
 * - size: 'sm' | 'md' | 'lg' | 'xl' | custom className
 * - gradient: boolean (applies cyan-emerald brand gradient)
 * - withGlow: boolean
 */
export function GoocananMark({ 
  className = "w-8 h-8", 
  gradient = false, 
  gradientId = "gooMarkGrad",
  ...props 
}) {
  return (
    <svg 
      viewBox={GOOCANAN_MARK_VIEWBOX} 
      className={`inline-block ${className}`}
      fill={gradient ? `url(#${gradientId})` : "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      )}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={GOOCANAN_MARK_PATH} 
      />
    </svg>
  );
}

export function GoocananWordmark({ 
  className = "h-5 w-auto", 
  gradient = false, 
  gradientId = "gooWordGrad",
  ...props 
}) {
  return (
    <svg 
      viewBox={GOOCANAN_WORDMARK_VIEWBOX} 
      className={`inline-block ${className}`}
      fill={gradient ? `url(#${gradientId})` : "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      )}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={GOOCANAN_WORDMARK_PATH} 
      />
    </svg>
  );
}

export function GoocananFullLogo({ 
  className = "w-44 h-auto", 
  gradient = false, 
  gradientId = "gooFullGrad",
  ...props 
}) {
  return (
    <svg 
      viewBox={GOOCANAN_FULL_VIEWBOX} 
      className={`inline-block ${className}`}
      fill={gradient ? `url(#${gradientId})` : "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      )}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={GOOCANAN_FULL_PATH} 
      />
    </svg>
  );
}

export default function GoocananLogo({ 
  variant = 'horizontal', 
  className = '',
  markClassName = '',
  textClassName = '',
  gradientMark = true,
  withGlow = false,
  subtitle = '3D PRINT & GooOS'
}) {
  if (variant === 'mark') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        {withGlow && (
          <div className="absolute inset-0 bg-brand-500/30 blur-md rounded-full -z-10" />
        )}
        <GoocananMark className={markClassName || className || "w-8 h-8"} gradient={gradientMark} />
      </div>
    );
  }

  if (variant === 'wordmark') {
    return <GoocananWordmark className={textClassName || className || "h-5 w-auto"} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        {withGlow && (
          <div className="absolute w-24 h-24 bg-brand-500/20 blur-xl rounded-full -z-10" />
        )}
        <GoocananMark 
          className={markClassName || "w-16 h-16"} 
          gradient={gradientMark} 
        />
        <GoocananWordmark 
          className={textClassName || "h-5 w-auto text-slate-900 dark:text-white"} 
        />
        {subtitle && (
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400">
            {subtitle}
          </span>
        )}
      </div>
    );
  }

  // Default: 'horizontal' (Ideal for Navbar & Header)
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Mark in high-tech container */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 border border-slate-700/60 p-2 shadow-sm group-hover:border-brand-500/50 group-hover:shadow-glow-cyan transition-all duration-300">
        <GoocananMark 
          className="w-full h-full text-brand-400 group-hover:scale-105 transition-transform duration-300" 
          gradient={gradientMark} 
        />
        {withGlow && (
          <div className="absolute inset-0 bg-brand-500/20 blur-md rounded-xl -z-10" />
        )}
      </div>

      {/* Official Typography */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <GoocananWordmark 
            className="h-4 sm:h-[18px] w-auto text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors" 
          />
        </div>
        {subtitle && (
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-slate-500 dark:text-slate-400 mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
