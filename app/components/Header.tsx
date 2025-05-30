import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-white dark:bg-gray-900'>
      <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
        My App
      </h1>
      <ThemeToggle />
    </header>
  );
};
