import type { Metadata } from 'next';
import './globals.css';
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

export const metadata: Metadata = {
  title: 'React Edge | Desarrollo Frontend de Alto Impacto',
  description: 'Creamos aplicaciones web rápidas, fiables y con una experiencia de usuario excepcional que impulsan el crecimiento de tu negocio.',
  keywords: ['Desarrollador React', 'rendimiento frontend React', 'aplicaciones web React', 'desarrollador Next.js', 'desarrollador freelance'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} dark !scroll-smooth`}>
      <body className="font-body antialiased">
          <Header />
          <main className="bg-background">
            {children}
          </main>
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
