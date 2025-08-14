import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { NAME_BRAND } from '@/constants';
import { listItems, logoIcon } from './constants';
import { Button } from '../ui/button';
import { EllipsisVertical, Moon, Sun } from 'lucide-react';

function AppHeader() {
  const t = useTranslations();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
              <div className="flex items-center space-x-1">
                {listItems.map((item) => (
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
                ))}
              </div>
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
            <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform cursor-pointer">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppHeader;
