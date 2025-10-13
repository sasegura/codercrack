import { ArrowRight, Codepen, Gauge, LayoutDashboard, Library, Plug, Rocket, Replace, Users, Wrench, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PerformanceAuditForm from '@/components/performance-audit-form';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import { LeadFormStepper } from '@/components/lead-form-stepper';
import Link from 'next/link';

export default function Home() {

  const services = [
    { icon: Codepen, title: "Websites & Portfolios", description: "Professional online presence with high-performance static or dynamic sites." },
    { icon: Rocket, title: "High-Conversion Landing Pages", description: "Landing pages optimized for speed and conversion in marketing campaigns." },
    { icon: LayoutDashboard, title: "Web Applications (SPAs)", description: "Internal tools, dashboards, and admin panels with React and Next.js." },
    { icon: Gauge, title: "Performance Optimization", description: "Improving speed, accessibility, and overall performance of existing websites." },
    { icon: Replace, title: "Migrations & Refactoring", description: "Updating slow sites to modern technologies like React and Next.js." },
    { icon: Library, title: "UI Design Systems", description: "Reusable component libraries to standardize styles and accelerate development." },
    { icon: Plug, title: "Complex Integrations", description: "Connection with APIs, e-commerce, payment gateways, and authentication systems." },
    { icon: Users, title: "White Label Services", description: "Collaboration and outsourcing of frontend development for digital agencies." },
    { icon: Wrench, title: "Maintenance & Support", description: "Incremental improvements, support, and post-delivery updates." },
  ];

  const projects = [
    { id: "portfolio-1", title: "SaaS Dashboard", description: "A data analytics platform for startups, with interactive visualizations and real-time performance.", tags: ["Next.js", "Tailwind CSS", "Recharts", "Firebase"] },
    { id: "portfolio-2", title: "Landing Page for Mobile App", description: "A high-conversion landing page for a new mobile app, achieving a 40% increase in downloads.", tags: ["React", "Gatsby", "Contentful", "Framer Motion"] },
    { id: "portfolio-3", title: "Fashion E-commerce", description: "Online store with a minimalist design, Stripe integration, and a smooth shopping experience.", tags: ["Next.js", "Shopify API", "Stripe", "Vercel"] },
  ];

  const testimonials = [
    { name: "Ana Perez", company: "CEO of TechFlow", quote: "The React Edge team transformed our idea into a functional and scalable web application. Their expertise in React is unmatched." },
    { name: "Carlos Ruiz", company: "Marketing Director at Innovate", quote: "The new landing page has exceeded all our expectations. The loading speed is incredible, and conversions have skyrocketed." },
    { name: "Laura Gomez", company: "Founder of Creative Co.", quote: "Working with them was a pleasure. They understood our vision perfectly and delivered a flawless and professional website." },
  ];

  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 text-center bg-background">
         <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 z-0"></div>
        <div className="container px-4 md:px-6 z-10 relative">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary font-medium">
            Frontend Development with React.js and Next.js
          </Badge>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            High-Impact Frontend Development
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
            We create fast, reliable web applications with an exceptional user experience that drive your business growth.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#lead-form">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Custom solutions to take your digital presence to the next level.
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Tell me about your Project</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Complete these short steps so I can better understand your needs.
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              A showcase of our work and the impact we create.
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">What our clients say</h2>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                I am a passionate frontend developer dedicated to building modern, intuitive, and high-performance user interfaces. With years of experience in the React ecosystem, I specialize in transforming complex ideas into digital realities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Expertise in React.js & Next.js:</span> Development of robust and SEO-optimized applications.</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Focus on UX/UI:</span> Close collaboration with designers to create memorable user experiences.</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Performance Optimization:</span> Obsessed with loading speed and frontend efficiency.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Ready to start your project?</h2>
              <p className="max-w-2xl mx-auto mt-4 mb-8 text-muted-foreground">
                Contact me for a free consultation. Let's talk about how I can help you achieve your goals.
              </p>
              <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
