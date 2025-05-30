'use client';

import { useTheme } from '@/app/hooks/useTheme';
import Image from 'next/image';

// Import your images directly
import bulbOff from '@/public/images/bulb-off.png';
import bulbOn from '@/public/images/bulb-on.png';

export const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className='w-20 h-24'></div>;
  }

  return (
    <div className='p-5 flex justify-end'>
      <button
        onClick={toggleTheme}
        className='p-1 rounded-full hover:scale-130'
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Image
            src={bulbOn}
            alt='Switch to dark mode'
            className='w-14 h-18'
            priority
          />
        ) : (
          <Image
            src={bulbOff}
            alt='Switch to light mode'
            className='w-14 h-18'
            priority
          />
        )}
      </button>
    </div>
  );
};
