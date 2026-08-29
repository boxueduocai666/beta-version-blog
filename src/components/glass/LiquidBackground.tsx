import React from 'react';

export const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      {/* 动态液态光斑 */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-indigo-500/40 to-rose-500/40 blur-[100px] animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/40 blur-[120px] animate-bounce" style={{ animationDuration: '15s' }} />
      <div className="absolute -bottom-[10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-purple-500/30 to-emerald-400/30 blur-[110px] animate-pulse" style={{ animationDuration: '8s' }} />
    </div>
  );
};

