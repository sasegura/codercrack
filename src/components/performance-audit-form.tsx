'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { runPerformanceAudit, type PerformanceAuditState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations('HomePage');

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('auditLoading')}
        </>
      ) : (
        t('auditButton')
      )}
    </Button>
  );
}

export default function PerformanceAuditForm() {
  const t = useTranslations('HomePage');
  const initialState: PerformanceAuditState = { message: null, report: null, success: false };
  const [state, dispatch] = useActionState(runPerformanceAudit, initialState);

  return (
    <div className="space-y-6">
      <Card className="max-w-3xl mx-auto bg-card shadow-2xl shadow-primary/10">
        <form action={dispatch}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">{t('auditTitle')}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">{t('auditSubtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                name="url"
                placeholder="https://example.com"
                required
                className="flex-grow text-base"
              />
              <SubmitButton />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground w-full text-center">{t('auditAiNotice')}</p>
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
            <CardTitle>{t('auditResultsTitle')}</CardTitle>
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
