'use client';
import { ArrowRight, Codepen, Gauge, LayoutDashboard, Library, Plug, Rocket, Replace, Users, Wrench, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PerformanceAuditForm from '@/components/performance-audit-form';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import { LeadFormStepper } from '@/components/lead-form-stepper';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { id: "web_portfolio", icon: Codepen },
    { id: "landing_pages", icon: Rocket },
    { id: "web_apps", icon: LayoutDashboard },
    { id: "performance", icon: Gauge },
    { id: "migrations", icon: Replace },
    { id: "design_systems", icon: Library },
    { id: "integrations", icon: Plug },
    { id: "white_label", icon: Users },
    { id: "maintenance", icon: Wrench },
  ];

  const projects = [
    { id: "portfolio-1", titleKey: "project1_title", descriptionKey: "project1_description", tags: ["Next.js", "Tailwind CSS", "Recharts", "Firebase"] },
    { id: "portfolio-2", titleKey: "project2_title", descriptionKey: "project2_description", tags: ["React", "Gatsby", "Contentful", "Framer Motion"] },
    { id: "portfolio-3", titleKey: "project3_title", descriptionKey: "project3_description", tags: ["Next.js", "Shopify API", "Stripe", "Vercel"] },
  ];

  const testimonials = [
    { name: "Ana Perez", company: "CEO of TechFlow", quoteKey: "testimonial1_quote" },
    { name: "Carlos Ruiz", company: "Marketing Director at Innovate", quoteKey: "testimonial2_quote" },
    { name: "Laura Gomez", company: "Founder of Creative Co.", quoteKey: "testimonial3_quote" },
  ];

  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 text-center bg-background">
         <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 z-0"></div>
        <div className="container px-4 md:px-6 z-10 relative">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary font-medium">
            {t('HomePage.hero_badge')}
          </Badge>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            {t('HomePage.hero_title')}
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            {t('HomePage.hero_subtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#proyectos">
                {t('HomePage.hero_cta_projects')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#lead-form">{t('HomePage.hero_cta_consultation')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('Services.title')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('Services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col text-center items-center bg-background/50 hover:bg-background/80 transition-all duration-300 hover:-translate-y-1 border-primary/10">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{t(`Services.${service.id}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t(`Services.${service.id}.description`)}</p>
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('LeadForm.title')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('LeadForm.subtitle')}
            </p>
          </div>
          <LeadFormStepper />
        </div>
      </section>

      {/* Performance Audit Section */}
      <section id="auditoria" className="py-20 md:py-28 bg-secondary">
          <div className="container px-4 md:px-6">
              <PerformanceAuditForm />
          </div>
      </section>

      {/* Portfolio Section */}
      <section id="proyectos" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('Projects.title')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('Projects.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const image = PlaceHolderImages.find(p => p.id === project.id);
              return (
              <Card key={project.id} className="overflow-hidden group bg-secondary/50 border-primary/10">
                {image && <div className="overflow-hidden"><Image src={image.imageUrl} alt={t(`Projects.${project.titleKey}`)} width={600} height={400} data-ai-hint={image.imageHint} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"/></div>}
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-semibold mb-2">{t(`Projects.${project.titleKey}`)}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{t(`Projects.${project.descriptionKey}`)}</p>
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
      <section id="testimonios" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('Testimonials.title')}</h2>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-background">
                    <CardContent className="p-8 text-center">
                      <p className="text-lg italic mb-6 text-foreground/80">"{t(`Testimonials.${testimonial.quoteKey}`)}"</p>
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
      <section id="sobre-mi" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto">
              {aboutMeImage && <Image src={aboutMeImage.imageUrl} alt={t('AboutMe.image_alt')} data-ai-hint={aboutMeImage.imageHint} fill className="rounded-lg object-cover shadow-lg shadow-primary/10"/>}
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">{t('AboutMe.title')}</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('AboutMe.paragraph')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('AboutMe.feature1_title')}</span> {t('AboutMe.feature1_text')}</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('AboutMe.feature2_title')}</span> {t('AboutMe.feature2_text')}</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('AboutMe.feature3_title')}</span> {t('AboutMe.feature3_text')}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('Contact.title')}</h2>
              <p className="max-w-2xl mx-auto mt-4 mb-8 text-muted-foreground">
                {t('Contact.subtitle')}
              </p>
              <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
