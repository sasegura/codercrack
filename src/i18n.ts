import { getRequestConfig } from 'next-intl/server';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, localePrefix });

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
