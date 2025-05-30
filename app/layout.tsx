import type { Metadata } from 'next';
import { Delius } from 'next/font/google';
import './globals.css';

const delius = Delius({
  variable: '--font-delius',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Lightbulb',
  description: 'Toggle between Dark Mode and Light Mode',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='bg-white dark:bg-black transition-colors duration-200'
    >
      <body
        className={`${delius.variable} antialiased bg-white dark:bg-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
