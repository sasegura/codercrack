'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles } from 'lucide-react';
import { z } from 'zod';

const auditUrlSchema = z.object({
  url: z.string().url("Please enter a valid URL."),
});

interface PerformanceAuditState {
    message: string | null;
    report: string | null;
    success: boolean;
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        'Generate Report'
      )}
    </Button>
  );
}

export default function PerformanceAuditForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<PerformanceAuditState>({ message: null, report: null, success: false });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
        const validatedFields = auditUrlSchema.safeParse({
            url: formData.get('url'),
        });

        if (!validatedFields.success) {
            setState({
                message: "Please enter a valid URL.",
                report: null,
                success: false,
            });
            return;
        }

        try {
            // Simular delay de procesamiento
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Generar reporte simulado for static export
            const mockReport = `# Performance Audit Report for ${validatedFields.data.url}

## Overview
This is a simulated performance audit report. For a real analysis, this site would need to be hosted on a platform with server capabilities.

This report would typically analyze:
- Page load times & Core Web Vitals
- Resource optimization opportunities
- Mobile performance & SEO factors

## Key Findings (Simulated)
- **Lighthouse Score**: 85/100
- **First Contentful Paint**: 1.2s
- **Largest Contentful Paint**: 2.1s
- **Cumulative Layout Shift**: 0.05

## Recommendations
1. Optimize images (WebP format, lazy loading)
2. Minimize CSS and JavaScript
3. Enable compression and use a CDN
4. Implement caching strategies

## Next Steps
Consider implementing these optimizations to improve your site's performance and user experience.`;

            setState({
                message: "Report generated successfully.",
                report: mockReport,
                success: true,
            });
        } catch (e: any) {
            console.error(e);
            setState({
                message: "An error occurred while generating the report. Please try again.",
                report: null,
                success: false,
            });
        }
    });
  }

  return (
    <div className="space-y-6">
      <Card className="max-w-3xl mx-auto bg-card shadow-2xl shadow-primary/10">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">Free Performance Audit</CardTitle>
            <CardDescription className="text-base text-muted-foreground">Enter your website's URL to get a detailed performance analysis, identifying bottlenecks and improvement opportunities.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                name="url"
                placeholder="https://example.com"
                required
                className="flex-grow text-base"
                disabled={isPending}
              />
              <SubmitButton isPending={isPending} />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground w-full text-center">Powered by Generative AI (Simulation)</p>
          </CardFooter>
        </form>
      </Card>

      {!state.success && state.message && (
        <Alert variant="destructive" className="max-w-3xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state.report && (
        <Card className="max-w-3xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground whitespace-pre-wrap">
              {state.report}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
