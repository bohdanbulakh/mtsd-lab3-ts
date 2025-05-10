import { getRequestConfig } from 'next-intl/server';
import Negotiator from 'negotiator';
import { headers } from 'next/headers';

const supportedLocales = ['en', 'uk'];
const defaultLocale = 'en';

async function detectLocale (): Promise<string> {
  const negotiatorHeaders: Record<string, string> = {};
  const headersList = await headers();
  for (const [key, value] of headersList.entries()) {
    negotiatorHeaders[key] = value;
  }

  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const languages = negotiator.languages();

  for (const lang of languages) {
    const baseLang = lang.split('-')[0];
    if (supportedLocales.includes(baseLang)) {
      return baseLang;
    }
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = await detectLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
