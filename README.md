# CoderCrack - Frontend Developer Portfolio

This is the repository for the "CoderCrack" project, a professional portfolio template for frontend developers specializing in React and Next.js. The website is designed to showcase services, featured projects, client testimonials, and capture leads through interactive forms.

Additionally, it includes a free web performance audit tool powered by generative AI (Genkit) as a lead magnet to attract potential clients.

## Technologies Used

The project is built with a stack of modern and efficient technologies:

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Framework:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for validation
- **Icons:** [Lucide React](https://lucide.dev/)
- **Generative AI:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit) for the performance audit feature.

## Main Features

- **Modern and Responsive Design:** A clean and professional interface that adapts to any device.
- **Key Portfolio Sections:**
  - **Services:** Displays the services offered with clear icons and descriptions.
  - **Projects:** Project gallery with images, descriptions, and technology tags.
  - **Testimonials:** Interactive carousel to display client feedback.
  - **About Me:** A personal section to introduce yourself professionally.
- **Advanced Lead Capture:**
  - **Step-by-Step Form:** An interactive stepper to guide potential clients through requesting a quote.
  - **Simple Contact Form:** For quick and direct inquiries.
- **AI-Powered Performance Audit:** A tool that uses Genkit to analyze a URL and generate a performance report, acting as a powerful lead magnet.
- **SEO Optimized:** Built with Next.js and best practices for better search engine rankings.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:9002`.

3.  **Run the Genkit development environment (for the AI):**
    In a separate terminal, run:
    ```bash
    npm run genkit:dev
    ```
    This will start the Genkit flow inspector.

4.  **Build for production:**
    ```bash
    npm run build
    ```
