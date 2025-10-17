import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { Space_Grotesk, Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/language-context';

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

export const metadata: Metadata = {
  title: "CoderCrack | High-Impact Frontend Development",
  description: "We create fast, reliable web applications with exceptional user experiences that help businesses grow and succeed online.",
  keywords: ["React Developer", "frontend performance React", "React web applications", "Next.js developer", "freelance developer", "coder crack"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark !scroll-smooth`}>
      <body className="font-body antialiased">
        <LanguageProvider>
          <div className='max-w-7xl mx-auto'>
            <Header />
            <main className="bg-background">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
