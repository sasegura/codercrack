# React Edge - Portfolio de Desarrollador Frontend

Este es el repositorio del proyecto "React Edge", una plantilla de portfolio profesional para desarrolladores frontend especializados en React y Next.js. El sitio web está diseñado para mostrar servicios, proyectos destacados, testimonios de clientes y capturar leads a través de formularios interactivos.

Además, incluye una herramienta de auditoría de rendimiento web gratuita potenciada por IA generativa (Genkit) como un lead magnet para atraer a potenciales clientes.

## Tecnologías Utilizadas

El proyecto está construido con un stack de tecnologías modernas y eficientes:

- **Framework:** [Next.js](https://nextjs.org/) (con App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **UI Framework:** [React](https://react.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Formularios:** [React Hook Form](https://react-hook-form.com/) y [Zod](https://zod.dev/) para validación
- **Iconos:** [Lucide React](https://lucide.dev/)
- **IA Generativa:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit) para la función de auditoría de rendimiento.

## Características Principales

- **Diseño Moderno y Responsivo:** Una interfaz limpia y profesional que se adapta a cualquier dispositivo.
- **Secciones Clave del Portfolio:**
  - **Servicios:** Muestra los servicios ofrecidos con iconos y descripciones claras.
  - **Proyectos:** Galería de proyectos con imágenes, descripciones y etiquetas de tecnologías.
  - **Testimonios:** Carrusel interactivo para mostrar la opinión de los clientes.
  - **Sobre Mí:** Una sección personal para presentarte profesionalmente.
- **Captura de Leads Avanzada:**
  - **Formulario por Pasos:** Un stepper interactivo para guiar al cliente potencial a través de la solicitud de un presupuesto.
  - **Formulario de Contacto Simple:** Para consultas rápidas y directas.
- **Auditoría de Rendimiento con IA:** Una herramienta que utiliza Genkit para analizar una URL y generar un informe de rendimiento, actuando como un potente imán de prospectos.
- **Optimizado para SEO:** Construido con Next.js y buenas prácticas para un mejor posicionamiento en buscadores.

## Cómo Empezar

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:9002`.

3.  **Ejecutar el entorno de desarrollo de Genkit (para la IA):**
    En una terminal separada, ejecuta:
    ```bash
    npm run genkit:dev
    ```
    Esto iniciará el inspector de flujos de Genkit.

4.  **Construir para producción:**
    ```bash
    npm run build
    ```
