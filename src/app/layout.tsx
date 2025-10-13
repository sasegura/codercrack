import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="es" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
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
