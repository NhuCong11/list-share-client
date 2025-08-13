'use client';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from '@/i18n/routing';

function LayoutProvider({ children }: { children: Readonly<React.ReactNode> }) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme" disableTransitionOnChange>
      <AnimatePresence mode="wait">
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default LayoutProvider;
