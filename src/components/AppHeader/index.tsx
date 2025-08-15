import { useMemo, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Check, EllipsisVertical, Moon, Sun } from 'lucide-react';

import { NAME_BRAND } from '@/constants';
import { Locale, locales } from '@/i18n/config';
import { Link, usePathname } from '@/i18n/routing';
import { Button } from '../ui/button';
import { listItems, logoIcon } from './constants';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

function AppHeader() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { theme, setTheme } = useTheme();

  const isActive = useCallback(
    (path: string) => {
      if (path === '/' && pathname === '/') return true;
      if (path !== '/' && pathname.startsWith(path)) return true;
      return false;
    },
    [pathname],
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const handleLocaleChange = useCallback(
    (lang: Locale) => {
      const segments = pathname.split('/').filter(Boolean);
      if (locales.includes(segments[0] as Locale)) {
        segments[0] = lang;
      } else {
        segments.unshift(lang);
      }
      const newPath = `/${segments.join('/')}`;
      router.replace(newPath);
    },
    [pathname, router],
  );

  const menuItems = useMemo(
    () =>
      listItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              isActive(item.href)
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {t(item.label)}
          </span>
        </Link>
      )),
    [isActive, t],
  );

  const localeMenu = useMemo(
    () =>
      locales.map((lang) => (
        <div
          key={lang}
          className={`w-full justify-between flex items-center px-3 py-2 my-2 rounded-md text-sm transition-colors
            ${locale === lang ? 'font-bold bg-primary/10 text-primary' : 'hover:bg-muted/40 cursor-pointer'}
          `}
          onClick={() => handleLocaleChange(lang)}
        >
          <span>{t(`languages.${lang}`)}</span>
          {locale === lang && <Check className="w-4 h-4 text-primary" />}
        </div>
      )),
    [locale, handleLocaleChange, t],
  );

  return (
    <nav className="glass-effect border-b border-border/50 sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={'/'} className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {logoIcon}
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {NAME_BRAND}
              </h1>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-1">{menuItems}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 premium-shadow hover:scale-105 transition-all cursor-pointer"
            >
              {t('nav.start')}
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform cursor-pointer">
                  <EllipsisVertical className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={20}
                className="w-44 p-1 gap-1 rounded-lg shadow-md border border-border-sm bg-popover glass-effect"
              >
                {localeMenu}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppHeader;
