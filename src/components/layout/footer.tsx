'use client';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
                <Code className="h-6 w-6" />
                React Edge
            </Link>
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} React Edge. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="GitHub" className="text-secondary-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-secondary-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
