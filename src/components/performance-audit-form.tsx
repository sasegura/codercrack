'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles } from 'lucide-react';
import { z } from 'zod';
import { generatePerformanceReport } from '@/ai/flows/generate-performance-report';
import { useLanguage } from '@/context/language-context';

interface PerformanceAuditState {
    message: string | null;
    report: string | null;
    success: boolean;
}

function SubmitButton({ isPending, text }: { isPending: boolean, text: string }) {
  const { t } = useLanguage();
  return (
    <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('audit.analyzing')}...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default function PerformanceAuditForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<PerformanceAuditState>({ message: null, report: null, success: false });
  const { t } = useLanguage();
  
  const auditUrlSchema = z.object({
    url: z.string().url(t('validation.url_invalid')),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
        const validatedFields = auditUrlSchema.safeParse({
            url: formData.get('url'),
        });

        if (!validatedFields.success) {
            setState({
                message: t('validation.url_invalid'),
                report: null,
                success: false,
            });
            return;
        }

        try {
            const result = await generatePerformanceReport(validatedFields.data);

            setState({
                message: t('toast.audit_success_title'),
                report: result.report,
                success: true,
            });
        } catch (e: any) {
            console.error(e);
            setState({
                message: t('toast.audit_error_description'),
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
            <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">{t('audit.title')}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">{t('audit.description')}</CardDescription>
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
              <SubmitButton isPending={isPending} text={t('audit.button_text')} />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground w-full text-center">{t('audit.powered_by')}</p>
          </CardFooter>
        </form>
      </Card>

      {!state.success && state.message && (
        <Alert variant="destructive" className="max-w-3xl mx-auto">
          <AlertTitle>{t('toast.error_title')}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state.report && (
        <Card className="max-w-3xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>{t('audit.results_title')}</CardTitle>
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
