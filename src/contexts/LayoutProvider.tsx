'use client';
import { ThemeProvider } from 'next-themes';

function LayoutProvider({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export default LayoutProvider;
