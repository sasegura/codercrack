'use server';

import {generatePerformanceReport} from '@/ai/flows/generate-performance-report';
import {z} from 'zod';
import {getTranslations} from 'next-intl/server';

export type PerformanceAuditState = {
  message?: string | null;
  report?: string | null;
  success: boolean;
};

export async function runPerformanceAudit(
  prevState: PerformanceAuditState,
  formData: FormData
): Promise<PerformanceAuditState> {
  const t = await getTranslations('AuditForm');

  const performanceAuditSchema = z.object({
    url: z.string().url({ message: t('errorInvalidURL') }),
  });

  const validatedFields = performanceAuditSchema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.url?.[0],
      report: null,
      success: false,
    };
  }

  try {
    const result = await generatePerformanceReport({url: validatedFields.data.url});
    return {
      message: 'Reporte generado con éxito.', // This is not shown to the user
      report: result.report,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: t('errorGeneric'),
      report: null,
      success: false,
    };
  }
}


export type ContactFormState = {
  message: string | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const t = await getTranslations('ContactForm');
  
  const contactSchema = z.object({
    name: z.string().min(2, { message: t('nameTooShort') }),
    email: z.string().email({ message: t('invalidEmail') }),
    message: z.string().min(10, { message: t('messageTooShort') }),
  });

  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMap = validatedFields.error.flatten().fieldErrors;
    let message = t('validationError');
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
    message: t('successMessage'),
    success: true,
  };
}
