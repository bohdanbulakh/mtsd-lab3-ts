import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Providers } from '@/components/layout/providers';
import { ReactNode } from 'react';
import Header from '@/components/layout/header/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

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

export default function RootLayout ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4 mt-10">
            {children}
          </div>
        </Providers>
        <Toaster closeButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
