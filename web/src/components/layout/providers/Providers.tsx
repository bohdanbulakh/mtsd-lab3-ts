'use client';

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/api/queryClient';
import AuthenticationProvider from '@/lib/providers/authentication/AuthenticationProvider';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: ReactNode;
  locale: string;
  messages: any;
};

export function Providers ({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
}
