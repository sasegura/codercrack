'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2, ArrowRight, PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const step1Schema = z.object({
  projectType: z.string().min(1, 'Debes seleccionar un tipo de proyecto.'),
});

const step2Schema = z.object({
  hasDesign: z.enum(['si', 'no'], { required_error: 'Debes seleccionar una opción.' }),
  deadline: z.string().min(1, 'Debes seleccionar un plazo.'),
  budget: z.string().min(1, 'Debes seleccionar un presupuesto.'),
});

const step3Schema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  company: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type FormData = z.infer<typeof step1Schema> & z.infer<typeof step2Schema> & z.infer<typeof step3Schema>;

const steps = [
  { id: '01', name: 'Tipo de proyecto', fields: ['projectType'] },
  { id: '02', name: 'Detalles', fields: ['hasDesign', 'deadline', 'budget'] },
  { id: '03', name: 'Contacto', fields: ['name', 'email', 'company', 'message'] },
];

export function LeadFormStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);
  const { toast } = useToast();

  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      currentStep === 0 ? step1Schema : currentStep === 1 ? step2Schema : step3Schema
    ),
    mode: 'onChange',
    defaultValues: {
      projectType: '',
      hasDesign: undefined,
      deadline: '',
      budget: '',
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // In a real app, you'd send this to your backend, Formspree, etc.
    console.log('Lead submitted:', data);
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setDirection(1);
    setCurrentStep(prev => prev + 1);

    toast({
      title: '¡Formulario enviado!',
      description: 'Gracias por tu interés. Me pondré en contacto contigo pronto.',
    });
  };

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as any, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };
  
  const stepVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    }),
  };


  if (isSubmitted) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-secondary rounded-lg min-h-[500px]">
            <PartyPopper className="h-16 w-16 text-primary mb-4" />
            <h2 className="font-headline text-2xl font-semibold text-foreground mb-2">¡Gracias por tu interés!</h2>
            <p className="text-muted-foreground max-w-md">He recibido tu solicitud y me pondré en contacto contigo en menos de 24 horas para hablar sobre tu proyecto.</p>
        </div>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl shadow-primary/10 overflow-hidden">
      <CardHeader>
        <nav aria-label="Progress">
          <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex-1">
                {currentStep > index ? (
                  <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-primary transition-colors ">{step.id}</span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
                    <span className="text-sm font-medium text-primary">{step.id}</span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : (
                  <div className="group flex w-full flex-col border-l-4 border-border py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-muted-foreground transition-colors">{step.id}</span>
                    <span className="text-sm font-medium text-muted-foreground">{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="py-6 min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
              {currentStep === 0 && (
                <motion.div
                  key={0}
                  custom={direction}
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Controller
                    name="projectType"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} onValueChange={field.onChange} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <h3 className="sm:col-span-2 font-semibold text-lg">¿Qué tipo de proyecto tienes en mente?</h3>
                        {[
                          { value: "web-corporativa", label: "Sitio web corporativo" },
                          { value: "tienda-online", label: "Tienda online" },
                          { value: "webapp", label: "Web app personalizada" },
                          { value: "landing-page", label: "Landing page" },
                          { value: "otro", label: "Otro" }
                        ].map(option => (
                          <Label key={option.value} htmlFor={option.value} className={cn(
                            "flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                            field.value === option.value && "border-primary bg-primary/10"
                          )}>
                            <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                            <span className="text-base font-medium">{option.label}</span>
                          </Label>
                        ))}
                        {errors.projectType && <p className="text-destructive sm:col-span-2">{errors.projectType.message}</p>}
                      </RadioGroup>
                    )}
                  />
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key={1}
                  custom={direction}
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="space-y-8">
                    <Controller
                      name="hasDesign"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field} onValueChange={field.onChange} className="space-y-2">
                          <Label className="text-lg">¿Tienes un diseño UI/UX ya hecho?</Label>
                          <div className="flex gap-4">
                              <Label htmlFor="design-yes" className="flex items-center gap-2 border border-border rounded-md p-3 px-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                                  <RadioGroupItem value="si" id="design-yes" /> Sí
                              </Label>
                              <Label htmlFor="design-no" className="flex items-center gap-2 border border-border rounded-md p-3 px-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                                  <RadioGroupItem value="no" id="design-no" /> No
                              </Label>
                          </div>
                          {errors.hasDesign && <p className="text-destructive">{errors.hasDesign.message}</p>}
                        </RadioGroup>
                      )}
                    />
                    <Controller
                      name="deadline"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field} onValueChange={field.onChange} className="space-y-2">
                          <Label className="text-lg">¿Cuál es tu plazo estimado?</Label>
                          <div className="flex flex-wrap gap-4">
                            {["~1 mes", "2-3 meses", "Flexible"].map(val => (
                              <Label key={val} htmlFor={`deadline-${val}`} className="flex items-center gap-2 border border-border rounded-md p-3 px-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                                <RadioGroupItem value={val} id={`deadline-${val}`} /> {val}
                              </Label>
                            ))}
                          </div>
                          {errors.deadline && <p className="text-destructive">{errors.deadline.message}</p>}
                        </RadioGroup>
                      )}
                    />
                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                          <RadioGroup {...field} onValueChange={field.onChange} className="space-y-2">
                              <Label className="text-lg">¿Cuál es tu presupuesto aproximado?</Label>
                              <div className="flex flex-wrap gap-4">
                                  {["<$2k", "$2k-$5k", "$5k-$10k", ">$10k"].map(val => (
                                      <Label key={val} htmlFor={`budget-${val}`} className="flex items-center gap-2 border border-border rounded-md p-3 px-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                                          <RadioGroupItem value={val} id={`budget-${val}`} /> {val}
                                      </Label>
                                  ))}
                              </div>
                              {errors.budget && <p className="text-destructive">{errors.budget.message}</p>}
                          </RadioGroup>
                      )}
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key={2}
                  custom={direction}
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Controller name="name" control={control} render={({ field }) => (
                          <div className="space-y-2">
                              <Label htmlFor="name">Nombre</Label>
                              <Input id="name" {...field} />
                              {errors.name && <p className="text-destructive">{errors.name.message}</p>}
                          </div>
                      )}/>
                      <Controller name="email" control={control} render={({ field }) => (
                          <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" {...field} />
                              {errors.email && <p className="text-destructive">{errors.email.message}</p>}
                          </div>
                      )}/>
                      <Controller name="company" control={control} render={({ field }) => (
                          <div className="space-y-2 sm:col-span-2">
                              <Label htmlFor="company">Empresa (Opcional)</Label>
                              <Input id="company" {...field} />
                          </div>
                      )}/>
                      <Controller name="message" control={control} render={({ field }) => (
                          <div className="space-y-2 sm:col-span-2">
                              <Label htmlFor="message">Mensaje o descripción adicional</Label>
                              <Textarea id="message" rows={4} {...field} />
                              {errors.message && <p className="text-destructive">{errors.message.message}</p>}
                          </div>
                      )}/>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            Anterior
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Siguiente <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : "Enviar Solicitud"}
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

    