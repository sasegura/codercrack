'use client';

import { useState, useRef, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

function SubmitButton({ isPending }: { isPending: boolean }) {
  const t = useTranslations('ContactForm');
  return (
    <Button type="submit" className="w-full" size="lg" disabled={isPending}>
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('sending')}
        </>
      ) : (
        t('send_message')
      )}
    </Button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('ContactForm');

  const contactSchema = z.object({
      name: z.string().min(2, t('validation_name')),
      email: z.string().email(t('validation_email')),
      message: z.string().min(10, t('validation_message')),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
      const validatedFields = contactSchema.safeParse({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
      });

      if (!validatedFields.success) {
          const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
          toast({
            title: t('toast_error_title'),
            description: firstError ?? t('toast_validation_error'),
            variant: 'destructive',
          });
          return;
      }
      
      console.log('Contact form submitted:', validatedFields.data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: t('toast_success_title'),
        description: t('toast_success_description'),
        variant: 'default',
      });
      formRef.current?.reset();
    });
  };

  return (
    <Card className="bg-background/50 border-primary/20">
      <CardContent className="p-6">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input id="name" name="name" placeholder={t('placeholder_name')} required className="bg-background/50" disabled={isPending} />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('placeholder_email')}
              required
              className="bg-background/50"
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder={t('placeholder_message')}
              required
              rows={5}
              className="bg-background/50"
              disabled={isPending}
            />
          </div>
          <SubmitButton isPending={isPending} />
        </form>
      </CardContent>
    </Card>
  );
}
