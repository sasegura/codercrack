'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Determine the preferred language from the browser
    const browserLang = navigator.language.split('-')[0];
    const preferredLocale = ['en', 'es'].includes(browserLang) ? browserLang : 'en';
    
    // Redirect to the localized homepage
    router.replace(`/${preferredLocale}`);
  }, [router]);

  // You can show a loading state here if you want
  return null;
}
