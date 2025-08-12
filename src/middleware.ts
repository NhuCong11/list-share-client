import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { defaultLocale, locales } from './i18n/config';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
  });
  const response = handleI18nRouting(request);

  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: ['/', '/(vi|en|zh|ko)/:path*'],
};
