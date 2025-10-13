'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {Menu, Code} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet';
import {cn} from '@/lib/utils';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from '@/components/locale-switcher';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('Header');

  const navLinks = [
    {href: '#servicios', label: t('services')},
    {href: '#proyectos', label: t('projects')},
    {href: '#sobre-mi', label: t('about')},
    {href: '#contacto', label: t('contact')},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg shadow-primary/5' : 'bg-transparent'
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
          <Code className="h-7 w-7" />
          React Edge
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="#lead-form">{t('freeConsultation')}</Link>
          </Button>
          <LocaleSwitcher />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LocaleSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 flex flex-col">
              <div className="flex items-center justify-between border-b pb-4 -mt-2">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
                  <Code className="h-6 w-6" />
                  React Edge
                </Link>
              </div>
              <nav className="flex flex-col gap-6 py-6">
                {navLinks.map(link => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t pt-6">
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full">
                    <Link href="#lead-form">{t('freeConsultation')}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
