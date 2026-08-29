import { useState, useEffect } from 'react';
import { GlassSettings } from '../types';

export const useGlassSettings = () => {
  const [settings, setSettings] = useState<GlassSettings>({
    opacity: 0.45,
    blur: 20,
    refraction: 1.05,
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--glass-opacity', settings.opacity.toString());
    root.style.setProperty('--glass-blur', `${settings.blur}px`);
    root.style.setProperty('--glass-refraction', settings.refraction.toString());
  }, [settings]);

  return { settings, setSettings };
};

