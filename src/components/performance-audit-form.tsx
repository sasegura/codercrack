"use client";

import { useFormState, useFormStatus } from "react-dom";
import { runPerformanceAudit, type PerformanceAuditState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analizando...
        </>
      ) : (
        "Generar Reporte"
      )}
    </Button>
  );
}

export default function PerformanceAuditForm() {
  const initialState: PerformanceAuditState = { message: null, report: null, success: false };
  const [state, dispatch] = useFormState(runPerformanceAudit, initialState);

  return (
    <div className="space-y-6">
      <Card className="max-w-3xl mx-auto bg-secondary border-accent shadow-lg shadow-accent/10">
        <form action={dispatch}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-4">
                <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">Auditoría de Rendimiento Gratuita</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Introduce la URL de tu sitio web para obtener un análisis de rendimiento detallado, identificando cuellos de botella y oportunidades de mejora.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
                <Input name="url" placeholder="https://ejemplo.com" required className="flex-grow text-base bg-background/50" />
                <SubmitButton />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground w-full text-center">Potenciado por IA Generativa</p>
          </CardFooter>
        </form>
      </Card>
      
      {!state.success && state.message && (
        <Alert variant="destructive" className="max-w-3xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      
      {state.report && (
        <Card className="max-w-3xl mx-auto bg-secondary">
          <CardHeader>
            <CardTitle>Resultados del Análisis</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-background p-4 rounded-md text-sm text-secondary-foreground whitespace-pre-wrap font-code">{state.report}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
