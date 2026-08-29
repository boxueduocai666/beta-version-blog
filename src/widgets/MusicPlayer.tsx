import React, { useState } from 'react';
import { GlassCard } from '../glass/GlassCard';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <GlassCard className="p-4 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
        🎵
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-800 truncate">Liquid Melodies</h4>
        <p className="text-xs text-slate-500 truncate">Ambient Glass Track</p>
      </div>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-md"
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </GlassCard>
  );
};
