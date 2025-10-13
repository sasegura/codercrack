'use server';

import {generatePerformanceReport} from '@/ai/flows/generate-performance-report';
import {z} from 'zod';
import {getTranslations} from 'next-intl/server';

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
  const t = await getTranslations('PerformanceAudit');

  const validatedFields = performanceAuditSchema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      message: t('invalidURL'),
      report: null,
      success: false,
    };
  }

  try {
    const result = await generatePerformanceReport({url: validatedFields.data.url});
    return {
      message: t('reportSuccess'),
      report: result.report,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: t('reportError'),
      report: null,
      success: false,
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormState = {
  message: string | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const t = await getTranslations('ContactForm');
  
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMap = validatedFields.error.flatten().fieldErrors;
    let message = t('validationError');
    if (errorMap.name) message = t('nameError');
    else if (errorMap.email) message = t('emailError');
    else if (errorMap.message) message = t('messageError');
    
    return {
      message: message,
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log('New contact form submission:', validatedFields.data);

  return {
    message: t('submitSuccess'),
    success: true,
  };
}
