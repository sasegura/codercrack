'use client';

import {useActionState} from 'react';
import {useFormStatus} from 'react-dom';
import {submitContactForm, type ContactFormState} from '@/app/actions';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useEffect, useRef} from 'react';
import {useToast} from '@/hooks/use-toast';
import {Card, CardContent} from '@/components/ui/card';
import {Loader2} from 'lucide-react';

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        'Enviar Mensaje'
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = {message: null, success: false};
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const {toast} = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Mensaje Enviado' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <Card className="bg-secondary border-primary/20">
      <CardContent className="p-6">
        <form ref={formRef} action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Input id="name" name="name" placeholder="Tu nombre" required className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Tu email"
              required
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder="¿En qué puedo ayudarte?"
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
