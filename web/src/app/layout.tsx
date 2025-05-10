import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Providers } from '@/components/layout/providers';
import { ReactNode } from 'react';
import Header from '@/components/layout/header/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { getLocale } from 'next-intl/server';
import { clsx } from 'clsx';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Store',
  description: 'Demo app for lab 3 of MTSD course',
};

type Props = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default async function RootLayout ({ children }: Props) {
  const locale = await getLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body
        className={clsx(
          inter.className,
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <Providers locale={locale} messages={messages}>
          <Header />
          <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4 mt-10">
            {children}
          </div>
        </Providers>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
