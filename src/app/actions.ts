'use server';

import {generatePerformanceReport} from '@/ai/flows/generate-performance-report';
import {z} from 'zod';

const performanceAuditSchema = z.object({
  url: z.string().url(),
});

export type PerformanceAuditState = {
  message?: string | null;
  report?: string | null;
  success: boolean;
};

export async function runPerformanceAudit(
  prevState: PerformanceAuditState,
  formData: FormData
): Promise<PerformanceAuditState> {

  const validatedFields = performanceAuditSchema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Por favor, introduce una URL válida.',
      report: null,
      success: false,
    };
  }

  try {
    const result = await generatePerformanceReport({url: validatedFields.data.url});
    return {
      message: 'Reporte generado con éxito.',
      report: result.report,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Ha ocurrido un error al generar el reporte. Por favor, inténtalo de nuevo.',
      report: null,
      success: false,
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormState = {
  message: string | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMap = validatedFields.error.flatten().fieldErrors;
    let message = 'Error de validación.';
    if (errorMap.name) message = errorMap.name[0];
    else if (errorMap.email) message = errorMap.email[0];
    else if (errorMap.message) message = errorMap.message[0];
    
    return {
      message: message,
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log('New contact form submission:', validatedFields.data);

  return {
    message: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
    success: true,
  };
}
