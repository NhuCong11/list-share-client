'use client';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { usePathname } from '@/i18n/routing';

function LayoutProvider({ children }: { children: Readonly<React.ReactNode> }) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme" disableTransitionOnChange>
      <AnimatePresence mode="wait">
        <div key={pathname}>{children}</div>
        <Toaster
          gutter={8}
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            removeDelay: 1000,
            // style: {
            //   borderRadius: '12px',
            //   background: 'var(--white)',
            //   color: 'var(--coffee-color-v2)',
            //   border: '1px solid var(--primary-bg)',
            // },
          }}
        />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default LayoutProvider;
