'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update the DOM class
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);

      // Update your CSS variables
      document.documentElement.style.setProperty(
        '--background',
        theme === 'light' ? '#ffffff' : '#000000'
      );
      document.documentElement.style.setProperty(
        '--foreground',
        theme === 'light' ? '#171717' : '#ededed'
      );

      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme, mounted };
};
