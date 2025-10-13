'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations('ContactForm');
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('sendingButton')}
        </>
      ) : (
        t('sendButton')
      )}
    </Button>
  );
}

export function ContactForm() {
  const t = useTranslations('ContactForm');
  const initialState: ContactFormState = { message: null, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t('successTitle') : t('errorTitle'),
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast, t]);

  return (
    <Card className="bg-background/50 border-primary/20">
      <CardContent className="p-6">
        <form ref={formRef} action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Input id="name" name="name" placeholder={t('namePlaceholder')} required className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              required
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder={t('messagePlaceholder')}
              required
              rows={5}
              className="bg-background/50"
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
