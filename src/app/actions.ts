'use server';

import { generatePerformanceReport } from '@/ai/flows/generate-performance-report';
import { z } from 'zod';

// Contact Form
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long.'),
    email: z.string().email('Please enter a valid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters long.'),
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
            message: validatedFields.error.flatten().fieldErrors.message?.[0] ?? 'Validation error.',
            success: false,
        };
    }
    
    console.log('Contact form submitted:', validatedFields.data);

    return {
        message: 'Thank you for your message! I will get back to you soon.',
        success: true,
    };
}


// Performance Audit Form
const auditUrlSchema = z.object({
  url: z.string().url("Please enter a valid URL."),
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
            message: "Please enter a valid URL.",
            report: null,
            success: false,
        };
    }

    try {
        const { report } = await generatePerformanceReport({ url: validatedFields.data.url });
        return {
            message: "Report generated successfully.",
            report: report,
            success: true,
        };
    } catch (e: any) {
        console.error(e);
        return {
            message: "An error occurred while generating the report. Please try again.",
            report: null,
            success: false,
        };
    }
}
