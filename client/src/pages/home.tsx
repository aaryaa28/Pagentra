import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, Lock, Activity, Globe, CheckCircle2, ArrowRight, Server, Zap, ShieldCheck, Users, Lightbulb, Target, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import heroImage from '@assets/generated_images/abstract_high-tech_blue_cyber_security_shield_waves_on_white.png';
import team1 from '@assets/stock_images/professional_busines_83a9284a.jpg';
import team2 from '@assets/stock_images/professional_busines_de1a8db3.jpg';
import team3 from '@assets/stock_images/professional_busines_c3fbcd0a.jpg';
import mapImage from '@assets/stock_images/abstract_blue_world__7c0dd005.jpg';

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                PageNTRA Infosec: Next Gen Security
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-foreground mb-6">
                FUTURE READY <br />
                <span className="text-primary">CYBER ATTACK</span> <br />
                PROTECTION
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Protecting your digital assets with innovative, client-centric, and adaptable security solutions.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 text-base shadow-primary/25 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base border-2">
                  View Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="Cyber Security Shield" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach (Products) */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Unique Approach to Protect Digital Assets</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions designed to secure every layer of your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard 
              title="SiteWALL Web Application Firewall"
              description="Advanced filtering and monitoring of HTTP traffic to and from a web application. Protects against malicious SQL injection, XSS, and more."
              icon={<Shield className="h-12 w-12 text-primary mb-4" />}
            />
            <ProductCard 
              title="WEBSITE ASSESSMENT"
              description="Comprehensive vulnerability scanning and penetration testing to identify weaknesses in your web infrastructure before attackers do."
              icon={<Activity className="h-12 w-12 text-primary mb-4" />}
            />
            <ProductCard 
              title="Website Breach Fix"
              description="Rapid incident response and remediation services to clean up compromised sites, restore data, and patch security holes immediately."
              icon={<Lock className="h-12 w-12 text-primary mb-4" />}
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-xl transform -rotate-3"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl border">
                <ShieldCheck className="h-16 w-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-heading mb-4">PageNTRA Infosec</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2018, our company has grown from a small startup into a leading player in the tech industry.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At PageNTRA Infosec we're driven by a passion for technology and a commitment to making a positive impact on the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Known for our innovative solutions, exceptional customer service, and dedication to excellence, we strive to secure the digital future for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Us</h2>
            <p className="text-blue-100 text-lg">Excellence is not just a goal, it's our standard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation and Quality</h3>
              <p className="text-blue-100">We constantly push the boundaries of what's possible in cybersecurity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
               <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">CLIENT CENTRIC</h3>
              <p className="text-blue-100">Your security needs are unique, and our solutions are tailored to fit you perfectly.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
               <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">ADAPTABILITY</h3>
              <p className="text-blue-100">In a rapidly changing threat landscape, we evolve faster than the attackers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-xl font-heading font-bold text-muted-foreground uppercase tracking-wider">Trusted By Clients & Partners</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
            {/* Placeholder Logos */}
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-2"><Globe className="h-8 w-8"/> GlobalTech</span>
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-2"><Server className="h-8 w-8"/> DataCorp</span>
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-2"><Shield className="h-8 w-8"/> SecureNet</span>
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-2"><Activity className="h-8 w-8"/> FinGuard</span>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">The experts behind your security.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamCard 
              image={team1} 
              name="Sarah Jenkins" 
              role="Chief Technology Officer" 
              linkedin="#"
            />
             <TeamCard 
              image={team2} 
              name="David Chen" 
              role="Head of Security Operations" 
              linkedin="#"
            />
             <TeamCard 
              image={team3} 
              name="Michael Ross" 
              role="Lead Penetration Tester" 
              linkedin="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to secure your digital assets? Contact us for a consultation or quote.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-muted-foreground">123 Cyber Park Blvd, Suite 400<br/>Tech City, CA 94000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-muted-foreground">contact@pagentra.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Map Illustration */}
              <div className="rounded-xl overflow-hidden shadow-lg border h-64 relative">
                 <img 
                  src={mapImage} 
                  alt="Office Location Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <Button variant="secondary" className="shadow-lg pointer-events-none">
                    <MapPin className="mr-2 h-4 w-4" /> View on Google Maps
                  </Button>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-11 text-base">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-white">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>PageNTRA Infosec</span>
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} PageNTRA Infosec. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5"/></a>
              <a href="#" className="hover:text-primary transition-colors"><Globe className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 group border-t-4 border-t-primary">
      <CardHeader>
        <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
          {icon}
        </div>
        <CardTitle className="font-heading text-xl uppercase tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 h-20">
          {description}
        </p>
        <Button className="w-full group-hover:bg-primary/90" asChild>
          <a href="#">Learn More <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </CardContent>
    </Card>
  )
}

function TeamCard({ image, name, role, linkedin }: { image: string, name: string, role: string, linkedin: string }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg group">
      <div className="h-64 overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <a href={linkedin} className="text-white hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <Linkedin className="h-5 w-5" /> Connect on LinkedIn
          </a>
        </div>
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold font-heading mb-1">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
      </CardContent>
    </Card>
  )
}
