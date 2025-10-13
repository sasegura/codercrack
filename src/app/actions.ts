"use server";

import { generatePerformanceReport } from "@/ai/flows/generate-performance-report";
import { z } from "zod";

const performanceAuditSchema = z.object({
  url: z.string().url({ message: "Por favor, introduce una URL válida." }),
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
    url: formData.get("url"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.url?.[0] || 'Error de validación.',
      report: null,
      success: false,
    };
  }

  try {
    const result = await generatePerformanceReport({ url: validatedFields.data.url });
    return {
      message: "Reporte generado con éxito.",
      report: result.report,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Ha ocurrido un error al generar el reporte. Por favor, inténtalo de nuevo.",
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
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        const errorMessages = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(errorMessages).flat()[0] || "Error de validación.";
        return {
            message: firstError,
            success: false,
        };
    }
    
    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it to the console.
    console.log("New contact form submission:", validatedFields.data);

    return {
        message: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.",
        success: true,
    };
}
