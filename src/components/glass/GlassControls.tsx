import React from 'react';
import { GlassCard } from './GlassCard';
import { GlassSettings } from '../../types';

interface Props {
  settings: GlassSettings;
  setSettings: React.Dispatch<React.SetStateAction<GlassSettings>>;
}

export const GlassControls: React.FC<Props> = ({ settings, setSettings }) => {
  return (
    <GlassCard className="p-5 text-slate-800">
      <h3 className="text-sm font-semibold mb-4 text-slate-900/80 tracking-wide uppercase">液态玻璃视觉调节</h3>
      
      <div className="space-y-4 text-xs">
        <div>
          <div className="flex justify-between mb-1 font-medium">
            <span>透明度 (Opacity)</span>
            <span>{Math.round(settings.opacity * 100)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="0.8"
            step="0.05"
            value={settings.opacity}
            onChange={(e) => setSettings({ ...settings, opacity: parseFloat(e.target.value) })}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1 font-medium">
            <span>模糊度 (Blur)</span>
            <span>{settings.blur}px</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={settings.blur}
            onChange={(e) => setSettings({ ...settings, blur: parseInt(e.target.value) })}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>
      </div>
    </GlassCard>
  );
};

