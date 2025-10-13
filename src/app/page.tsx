import { ArrowRight, Codepen, Gauge, LayoutDashboard, Library, Plug, Rocket, Replace, Users, Wrench, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PerformanceAuditForm from '@/components/performance-audit-form';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';

const services = [
  { icon: Codepen, title: "Sitios Web y Portfolios", description: "Presencia online profesional con sitios estáticos o dinámicos de alto rendimiento." },
  { icon: Rocket, title: "Landing Pages de Alta Conversión", description: "Páginas de destino optimizadas para velocidad y conversión en campañas de marketing." },
  { icon: LayoutDashboard, title: "Aplicaciones Web (SPAs)", description: "Herramientas internas, dashboards y paneles de administración con React y Next.js." },
  { icon: Gauge, title: "Optimización de Rendimiento", description: "Mejora de velocidad, accesibilidad y rendimiento general de sitios web existentes." },
  { icon: Replace, title: "Migraciones y Refactorización", description: "Actualización de sitios lentos a tecnologías modernas como React y Next.js." },
  { icon: Library, title: "Sistemas de Diseño UI", description: "Librerías de componentes reutilizables para estandarizar estilos y acelerar el desarrollo." },
  { icon: Plug, title: "Integraciones Complejas", description: "Conexión con APIs, e-commerce, pasarelas de pago y sistemas de autenticación." },
  { icon: Users, title: "Servicios White Label", description: "Colaboración y subcontratación de desarrollo frontend para agencias digitales." },
  { icon: Wrench, title: "Mantenimiento y Soporte", description: "Mejoras incrementales, soporte y actualizaciones post-entrega." },
];

const projects = [
  { id: "portfolio-1", title: "Dashboard SaaS", description: "Una plataforma de análisis de datos para startups, con visualizaciones interactivas y rendimiento en tiempo real.", tags: ["Next.js", "Tailwind CSS", "Recharts", "Firebase"] },
  { id: "portfolio-2", title: "Landing Page para App Móvil", description: "Página de destino de alta conversión para una nueva aplicación móvil, logrando un aumento del 40% en descargas.", tags: ["React", "Gatsby", "Contentful", "Framer Motion"] },
  { id: "portfolio-3", title: "E-commerce de Moda", description: "Tienda online con un diseño minimalista, integración con Stripe y una experiencia de compra fluida.", tags: ["Next.js", "Shopify API", "Stripe", "Vercel"] },
];

const testimonials = [
  { name: "Ana Pérez", company: "CEO de TechFlow", quote: "El equipo de React Edge transformó nuestra idea en una aplicación web funcional y escalable. Su experiencia en React es inigualable." },
  { name: "Carlos Ruiz", company: "Director de Marketing en Innovate", quote: "La nueva landing page ha superado todas nuestras expectativas. La velocidad de carga es increíble y las conversiones se han disparado." },
  { name: "Laura Gómez", company: "Fundadora de Creative Co.", quote: "Trabajar con ellos fue un placer. Entendieron nuestra visión a la perfección y entregaron un sitio web impecable y profesional." },
];

const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 text-center bg-secondary/50">
        <div className="container px-4 md:px-6 z-10 relative">
          <Badge variant="outline" className="mb-4 text-accent-foreground bg-accent/20 border-accent/50">
            Desarrollo Frontend con React.js y Next.js
          </Badge>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
            Desarrollo Frontend de Alto Impacto
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            Creamos aplicaciones web rápidas, fiables y con una experiencia de usuario excepcional que impulsan el crecimiento de tu negocio.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#proyectos">
                Ver Proyectos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contacto">Consulta Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Nuestros Servicios</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Soluciones a medida para llevar tu presencia digital al siguiente nivel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Audit Section */}
      <section id="auditoria" className="py-20 md:py-28 bg-secondary/50">
          <div className="container px-4 md:px-6">
              <PerformanceAuditForm />
          </div>
      </section>

      {/* Portfolio Section */}
      <section id="proyectos" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Proyectos Destacados</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Una muestra de nuestro trabajo y el impacto que generamos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const image = PlaceHolderImages.find(p => p.id === project.id);
              return (
              <Card key={project.title} className="overflow-hidden group">
                {image && <Image src={image.imageUrl} alt={project.title} width={600} height={400} data-ai-hint={image.imageHint} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"/>}
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 md:py-28 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Lo que dicen nuestros clientes</h2>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-8 text-center">
                      <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={`https://picsum.photos/seed/t${index+1}/100/100`} data-ai-hint="person" alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto">
              {aboutMeImage && <Image src={aboutMeImage.imageUrl} alt="Desarrollador Frontend" data-ai-hint={aboutMeImage.imageHint} fill className="rounded-lg object-cover shadow-lg"/>}
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Sobre Mí</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Soy un desarrollador frontend apasionado por construir interfaces de usuario modernas, intuitivas y de alto rendimiento. Con años de experiencia en el ecosistema de React, me especializo en transformar ideas complejas en realidades digitales.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Experiencia en React.js y Next.js:</span> Desarrollo de aplicaciones robustas y optimizadas para SEO.</p></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Enfoque en UX/UI:</span> Colaboración estrecha con diseñadores para crear experiencias de usuario memorables.</p></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Optimización de Rendimiento:</span> Obsesionado con la velocidad de carga y la eficiencia del frontend.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">¿Listo para empezar tu proyecto?</h2>
              <p className="max-w-2xl mx-auto mt-4 mb-8 text-muted-foreground">
                Contáctame para una consulta gratuita. Hablemos de cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
              <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
