import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();

  const title =
    typeof messages['title'] === 'string'
      ? messages['title']
      : 'ListShare | Tạo & Chia sẻ Checklist Online Nhanh, Miễn phí';
  const description =
    typeof messages['description'] === 'string'
      ? messages['description']
      : 'ListShare giúp bạn tạo checklist trực tuyến và chia sẻ dễ dàng qua link hoặc QR. Hỗ trợ tick real-time, không cần đăng ký, dùng ngay miễn phí.';

  return {
    title,
    description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
