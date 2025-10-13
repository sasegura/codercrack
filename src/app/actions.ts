'use client';

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
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
        // Simular delay de procesamiento
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generar reporte simulado
        const mockReport = `# Performance Audit Report for ${validatedFields.data.url}

## Overview
This is a simulated performance audit report. In a real implementation, this would analyze:
- Page load times
- Core Web Vitals
- Resource optimization opportunities
- Mobile performance
- SEO factors

## Key Findings
- **Lighthouse Score**: 85/100
- **First Contentful Paint**: 1.2s
- **Largest Contentful Paint**: 2.1s
- **Cumulative Layout Shift**: 0.05

## Recommendations
1. Optimize images (WebP format, lazy loading)
2. Minimize CSS and JavaScript
3. Enable compression
4. Use a CDN
5. Implement caching strategies

## Next Steps
Consider implementing these optimizations to improve your site's performance and user experience.`;

        return {
            message: "Report generated successfully.",
            report: mockReport,
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