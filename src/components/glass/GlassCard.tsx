import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-3xl transition-all duration-300 border border-white/30 
        bg-white/[var(--glass-opacity,0.45)] backdrop-blur-[var(--glass-blur,20px)] backdrop-saturate-[180%]
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15),inset_0_1px_0_0_rgba(255,255,255,0.6)]
        hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.25),inset_0_1px_0_0_rgba(255,255,255,0.8)]
        hover:-translate-y-0.5 overflow-hidden ${className}`}
    >
      {/* 模拟高折射率光泽边缘 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
      {children}
    </div>
  );
};

