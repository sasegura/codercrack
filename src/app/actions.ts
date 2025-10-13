'use server';

import { generatePerformanceReport } from '@/ai/flows/generate-performance-report';
import { z } from 'zod';

// Contact Form
const contactSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
    email: z.string().email('Por favor, introduce un email válido.'),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export interface ContactFormState {
    message: string | null;
    success: boolean;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.message?.[0] ?? 'Error de validación.',
            success: false,
        };
    }
    
    console.log('Contact form submitted:', validatedFields.data);

    return {
        message: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
        success: true,
    };
}


// Performance Audit Form
const auditUrlSchema = z.object({
  url: z.string().url("Por favor, introduce una URL válida."),
});

export interface PerformanceAuditState {
    message: string | null;
    report: string | null;
    success: boolean;
}

export async function runPerformanceAudit(prevState: PerformanceAuditState, formData: FormData): Promise<PerformanceAuditState> {
    const validatedFields = auditUrlSchema.safeParse({
        url: formData.get('url'),
    });

    if (!validatedFields.success) {
        return {
            message: "Por favor, introduce una URL válida.",
            report: null,
            success: false,
        };
    }

    try {
        const { report } = await generatePerformanceReport({ url: validatedFields.data.url });
        return {
            message: "Reporte generado exitosamente.",
            report: report,
            success: true,
        };
    } catch (e: any) {
        console.error(e);
        return {
            message: "Ha ocurrido un error al generar el reporte. Por favor, inténtalo de nuevo.",
            report: null,
            success: false,
        };
    }
}
