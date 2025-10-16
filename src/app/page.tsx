'use client';
import { ArrowRight, Codepen, Gauge, LayoutDashboard, Library, Plug, Rocket, Replace, Users, Wrench, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import { LeadFormStepper } from '@/components/lead-form-stepper';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { id: "web_portfolio", icon: Codepen, title: t('services.web_portfolio.title'), description: t('services.web_portfolio.description') },
    { id: "landing_pages", icon: Rocket, title: t('services.landing_pages.title'), description: t('services.landing_pages.description') },
    { id: "web_apps", icon: LayoutDashboard, title: t('services.web_apps.title'), description: t('services.web_apps.description') },
    { id: "performance", icon: Gauge, title: t('services.performance.title'), description: t('services.performance.description') },
    { id: "migrations", icon: Replace, title: t('services.migrations.title'), description: t('services.migrations.description') },
    { id: "design_systems", icon: Library, title: t('services.design_systems.title'), description: t('services.design_systems.description') },
    { id: "integrations", icon: Plug, title: t('services.integrations.title'), description: t('services.integrations.description') },
    { id: "white_label", icon: Users, title: t('services.white_label.title'), description: t('services.white_label.description') },
    { id: "maintenance", icon: Wrench, title: t('services.maintenance.title'), description: t('services.maintenance.description') },
  ];

  const projects = [
    { id: "portfolio-1", title: t('projects.portfolio_1.title'), description: t('projects.portfolio_1.description'), tags: ["Next.js", "Tailwind CSS", "Recharts", "Firebase"] },
    { id: "portfolio-2", title: t('projects.portfolio_2.title'), description: t('projects.portfolio_2.description'), tags: ["React", "Gatsby", "Contentful", "Framer Motion"] },
    { id: "portfolio-3", title: t('projects.portfolio_3.title'), description: t('projects.portfolio_3.description'), tags: ["Next.js", "Shopify API", "Stripe", "Vercel"] },
  ];

  const testimonials = [
    { name: "Ana Perez", company: "CEO of TechFlow", quote: t('testimonials.ana.quote') },
    { name: "Carlos Ruiz", company: "Marketing Director at Innovate", quote: t('testimonials.carlos.quote') },
    { name: "Laura Gomez", company: "Founder of Creative Co.", quote: t('testimonials.laura.quote') },
  ];

  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 text-center bg-background">
         <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 z-0"></div>
        <div className="container px-4 md:px-6 z-10 relative">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary font-medium">
            {t('hero.badge')}
          </Badge>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            {t('hero.title')}
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#proyectos">
                {t('hero.cta_projects')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#lead-form">{t('hero.cta_consultation')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('services.section_title')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('services.section_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col text-center items-center bg-background/50 hover:bg-background/80 transition-all duration-300 hover:-translate-y-1 border-primary/10">
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

      {/* Lead Form Stepper Section */}
      <section id="lead-form" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('lead_form.section_title')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('lead_form.section_subtitle')}
            </p>
          </div>
          <LeadFormStepper />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="proyectos" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('projects.section_title')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('projects.section_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const image = PlaceHolderImages.find(p => p.id === project.id);
              return (
              <Card key={project.id} className="overflow-hidden group bg-background/50 border-primary/10">
                {image && <div className="overflow-hidden"><Image src={image.imageUrl} alt={project.title} width={600} height={400} data-ai-hint={image.imageHint} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"/></div>}
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('testimonials.section_title')}</h2>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-secondary">
                    <CardContent className="p-8 text-center">
                      <p className="text-lg italic mb-6 text-foreground/80">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-center">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-primary/50">
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
      <section id="sobre-mi" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto">
              {aboutMeImage && <Image src={aboutMeImage.imageUrl} alt="Frontend Developer" data-ai-hint={aboutMeImage.imageHint} fill className="rounded-lg object-cover shadow-lg shadow-primary/10"/>}
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('about.paragraph')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('about.expertise.title')}</span> {t('about.expertise.description')}</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('about.ux_ui.title')}</span> {t('about.ux_ui.description')}</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('about.performance.title')}</span> {t('about.performance.description')}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('contact.title')}</h2>
              <p className="max-w-2xl mx-auto mt-4 mb-8 text-muted-foreground">
                {t('contact.subtitle')}
              </p>
              <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

    