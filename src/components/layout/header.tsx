'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {Menu, Code} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet';
import {cn} from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    {href: '#servicios', label: 'Services'},
    {href: '#proyectos', label: 'Projects'},
    {href: '#sobre-mi', label: 'About Me'},
    {href: '#contacto', label: 'Contact'},
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
          CoderCrack
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
            <Link href="#lead-form">Free Consultation</Link>
          </Button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 flex flex-col">
              <div className="flex items-center justify-between border-b pb-4 -mt-2">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
                  <Code className="h-6 w-6" />
                  CoderCrack
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
                    <Link href="#lead-form">Free Consultation</Link>
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
