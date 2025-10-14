import type { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, getTranslations} from 'next-intl/server';
import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${inter.variable} dark !scroll-smooth`}>
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
