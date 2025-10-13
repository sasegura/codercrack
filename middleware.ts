import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './src/navigation';
 
export default createMiddleware({
  defaultLocale: 'es',
  locales,
  localePrefix,
  pathnames: {}
});
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};