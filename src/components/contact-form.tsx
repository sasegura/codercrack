'use client';

import { useState, useRef, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" className="w-full" size="lg" disabled={isPending}>
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const contactSchema = z.object({
      name: z.string().min(2, 'Name must be at least 2 characters long.'),
      email: z.string().email('Please enter a valid email address.'),
      message: z.string().min(10, 'Message must be at least 10 characters long.'),
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
            title: 'Error',
            description: firstError ?? 'Validation error.',
            variant: 'destructive',
          });
          return;
      }
      
      console.log('Contact form submitted:', validatedFields.data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: 'Message Sent',
        description: 'Thank you for your message! I will get back to you soon.',
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
            <Input id="name" name="name" placeholder="Your name" required className="bg-background/50" disabled={isPending} />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="bg-background/50"
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
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
