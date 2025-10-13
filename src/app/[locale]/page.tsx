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
import { LeadFormStepper } from '@/components/lead-form-stepper';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const tServices = useTranslations('Services');
  const tProjects = useTranslations('Projects');
  const tTestimonials = useTranslations('Testimonials');

  const services = [
    { icon: Codepen, title: tServices("service1Title"), description: tServices("service1Desc") },
    { icon: Rocket, title: tServices("service2Title"), description: tServices("service2Desc") },
    { icon: LayoutDashboard, title: tServices("service3Title"), description: tServices("service3Desc") },
    { icon: Gauge, title: tServices("service4Title"), description: tServices("service4Desc") },
    { icon: Replace, title: tServices("service5Title"), description: tServices("service5Desc") },
    { icon: Library, title: tServices("service6Title"), description: tServices("service6Desc") },
    { icon: Plug, title: tServices("service7Title"), description: tServices("service7Desc") },
    { icon: Users, title: tServices("service8Title"), description: tServices("service8Desc") },
    { icon: Wrench, title: tServices("service9Title"), description: tServices("service9Desc") },
  ];

  const projects = [
    { id: "portfolio-1", title: tProjects("project1Title"), description: tProjects("project1Desc"), tags: ["Next.js", "Tailwind CSS", "Recharts", "Firebase"] },
    { id: "portfolio-2", title: tProjects("project2Title"), description: tProjects("project2Desc"), tags: ["React", "Gatsby", "Contentful", "Framer Motion"] },
    { id: "portfolio-3", title: tProjects("project3Title"), description: tProjects("project3Desc"), tags: ["Next.js", "Shopify API", "Stripe", "Vercel"] },
  ];

  const testimonials = [
    { name: tTestimonials("testimonial1Name"), company: tTestimonials("testimonial1Company"), quote: tTestimonials("testimonial1Quote") },
    { name: tTestimonials("testimonial2Name"), company: tTestimonials("testimonial2Company"), quote: tTestimonials("testimonial2Quote") },
    { name: tTestimonials("testimonial3Name"), company: tTestimonials("testimonial3Company"), quote: tTestimonials("testimonial3Quote") },
  ];

  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 text-center bg-background">
         <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 z-0"></div>
        <div className="container px-4 md:px-6 z-10 relative">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary font-medium">
            {t('badge')}
          </Badge>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            {t('title')}
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#proyectos">
                {t('viewProjects')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#lead-form">{useTranslations('Header')('freeConsultation')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('servicesTitle')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('servicesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center bg-background/50 hover:bg-background/80 transition-all duration-300 hover:-translate-y-1 border-primary/10">
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('leadFormTitle')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('leadFormSubtitle')}
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('portfolioTitle')}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t('portfolioSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const image = PlaceHolderImages.find(p => p.id === project.id);
              return (
              <Card key={project.title} className="overflow-hidden group bg-secondary/50 border-primary/10">
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
      <section id="testimonios" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('testimonialsTitle')}</h2>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-background">
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
      <section id="sobre-mi" className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto">
              {aboutMeImage && <Image src={aboutMeImage.imageUrl} alt="Frontend Developer" data-ai-hint={aboutMeImage.imageHint} fill className="rounded-lg object-cover shadow-lg shadow-primary/10"/>}
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">{t('aboutTitle')}</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('aboutSubtitle')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('aboutPoint1Title')}</span> {t('aboutPoint1')}</p></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('aboutPoint2Title')}</span> {t('aboutPoint2')}</p></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">{t('aboutPoint3Title')}</span> {t('aboutPoint3')}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{t('contactTitle')}</h2>
              <p className="max-w-2xl mx-auto mt-4 mb-8 text-muted-foreground">
                {t('contactSubtitle')}
              </p>
              <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
