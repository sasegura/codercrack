import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'HomePage'});
 
  return {
    title: 'React Edge | ' + t('metaTitle'),
    description: t('metaDescription'),
    keywords: t('metaKeywords').split(','),
  };
}

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = useMessages();

  return (
    <html lang={locale} className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="bg-background">
            {children}
          </main>
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
