import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, Lock, Activity, Globe, CheckCircle2, ArrowRight, Server, Zap, ShieldCheck, Users, Lightbulb, Target, MapPin, Mail, Phone, Linkedin, Cpu, Network } from "lucide-react";
import heroImage from '@assets/generated_images/futuristic_glowing_neon_cyber_shield_on_dark_background.png';
import team1 from '@assets/stock_images/professional_busines_83a9284a.jpg';
import team2 from '@assets/stock_images/professional_busines_de1a8db3.jpg';
import team3 from '@assets/stock_images/professional_busines_c3fbcd0a.jpg';
import mapImage from '@assets/stock_images/abstract_blue_world__7c0dd005.jpg';
import { BackgroundAnimation } from "@/components/background-animation";

import { motion, useScroll, useTransform, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary text-sm font-bold tracking-wide mb-8 hover:border-primary/50 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                SYSTEM SECURE // V.2.0 LIVE
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] text-white mb-8 text-glow">
                FUTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">READY</span><br />
                CYBER DEFENSE
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
                Protecting your digital assets with innovative, client-centric, and adaptable security solutions.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="h-14 px-8 text-base font-bold bg-primary text-background hover:bg-white hover:text-black transition-all hover:scale-105 rounded-none skew-x-[-10deg]">
                  <span className="skew-x-[10deg] flex items-center">START FREE TRIAL <ArrowRight className="ml-2 h-5 w-5" /></span>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-white/20 hover:bg-white/10 hover:border-white transition-all rounded-none skew-x-[-10deg] text-white">
                  <span className="skew-x-[10deg]">VIEW LIVE DEMO</span>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-3xl font-heading font-bold text-white">99.9%</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Threat Block Rate</p>
                </div>
                <div>
                  <h4 className="text-3xl font-heading font-bold text-white">24/7</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Active Monitoring</p>
                </div>
                <div>
                  <h4 className="text-3xl font-heading font-bold text-white">500+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Enterprise Clients</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              style={{ opacity, scale }}
              className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
              <motion.img 
                src={heroImage} 
                alt="Cyber Security Shield" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-20 -right-10 bg-black/80 backdrop-blur-md border border-primary/30 p-4 rounded-lg shadow-2xl z-20"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-red-400">THREAT DETECTED</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">IP: 192.168.1.105 BLOCKED</div>
              </motion.div>

              <motion.div 
                className="absolute bottom-40 -left-10 bg-black/80 backdrop-blur-md border border-primary/30 p-4 rounded-lg shadow-2xl z-20"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                 <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="font-mono text-xs text-green-400">SYSTEM SECURE</span>
                </div>
                <div className="mt-2 w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                    className="h-full bg-green-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                   />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach (Products) */}
      <section id="products" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">// OUR SOLUTIONS</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">PROTECTING DIGITAL ASSETS<br/>ACROSS ALL VECTORS</h2>
            </div>
            <p className="text-slate-400 max-w-md text-right md:text-left">
              Comprehensive defense mechanisms designed to secure every layer of your digital infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard 
              title="SiteWALL WAF"
              description="Advanced filtering and monitoring of HTTP traffic. Protects against SQL injection, XSS, and zero-day exploits."
              icon={<Shield className="h-10 w-10 text-primary" />}
              index={0}
            />
            <ProductCard 
              title="VULNERABILITY SCAN"
              description="Comprehensive vulnerability scanning and penetration testing to identify weaknesses before attackers do."
              icon={<Activity className="h-10 w-10 text-secondary" />}
              index={1}
            />
            <ProductCard 
              title="BREACH REMEDIATION"
              description="Rapid incident response and remediation services to clean up compromised sites and patch security holes."
              icon={<Lock className="h-10 w-10 text-white" />}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-32 bg-black/30 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              <div className="relative glass-card p-12 rounded-xl">
                <ShieldCheck className="h-20 w-20 text-primary mb-8" />
                <h3 className="text-4xl font-bold font-heading text-white mb-6">PAGENTRA<br/>INFOSEC</h3>
                <div className="space-y-4">
                  <div className="h-1 w-20 bg-primary"></div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Founded in 2018, we have evolved from a stealth startup into a global leader in offensive security and defensive strategy.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 block">// WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">DRIVEN BY PASSION,<br/>DEFINED BY EXCELLENCE</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                At PageNTRA Infosec, we believe that security is not a product, but a process. We are driven by a commitment to making the digital world safer for everyone.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Known for our innovative solutions, exceptional customer service, and dedication to excellence, we strive to secure the digital future for businesses of all sizes.
              </p>
              <Button variant="link" className="text-primary p-0 h-auto text-lg hover:text-white transition-colors">
                READ OUR STORY <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">WHY CHOOSE US</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Excellence is not just a goal, it's our standard operating procedure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <WhyUsCard 
              icon={<Lightbulb className="h-8 w-8 text-black" />}
              title="INNOVATION & QUALITY"
              description="We constantly push the boundaries of what's possible in cybersecurity."
              delay={0}
            />
            <WhyUsCard 
              icon={<Target className="h-8 w-8 text-black" />}
              title="CLIENT CENTRIC"
              description="Your security needs are unique, and our solutions are tailored to fit you perfectly."
              delay={0.2}
            />
            <WhyUsCard 
              icon={<Zap className="h-8 w-8 text-black" />}
              title="ADAPTABILITY"
              description="In a rapidly changing threat landscape, we evolve faster than the attackers."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-white/5 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-3 text-white"><Globe className="h-8 w-8 text-primary"/> GlobalTech</span>
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-3 text-white"><Server className="h-8 w-8 text-primary"/> DataCorp</span>
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-3 text-white"><Shield className="h-8 w-8 text-primary"/> SecureNet</span>
            <span className="text-2xl md:text-3xl font-heading font-bold flex items-center gap-3 text-white"><Activity className="h-8 w-8 text-primary"/> FinGuard</span>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">// THE SQUAD</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">MEET THE EXPERTS</h2>
            </div>
            <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-black">JOIN OUR TEAM</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamCard 
              image={team1} 
              name="SARAH JENKINS" 
              role="Chief Technology Officer" 
              linkedin="#"
            />
             <TeamCard 
              image={team2} 
              name="DAVID CHEN" 
              role="Head of Security Ops" 
              linkedin="#"
            />
             <TeamCard 
              image={team3} 
              name="MICHAEL ROSS" 
              role="Lead Penetration Tester" 
              linkedin="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-background to-black border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 block">// CONTACT</span>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">LET'S SECURE<br/>YOUR FUTURE</h2>
              <p className="text-xl text-slate-400 mb-12">
                Ready to secure your digital assets? Contact us for a consultation or quote.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <MapPin className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">HQ LOCATION</h4>
                    <p className="text-slate-400">123 Cyber Park Blvd, Suite 400<br/>Tech City, CA 94000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <Mail className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">EMAIL US</h4>
                    <p className="text-slate-400">contact@pagentra.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <Phone className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">CALL US</h4>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                 <Cpu className="h-24 w-24 text-white/5" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SEND MESSAGE</h3>
              <p className="text-slate-400 mb-8">We usually respond within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-slate-300">First name</Label>
                    <Input id="first-name" placeholder="John" className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-slate-300">Last name</Label>
                    <Input id="last-name" placeholder="Doe" className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 resize-none" />
                </div>
                <Button className="w-full h-14 text-base font-bold bg-white text-black hover:bg-primary hover:text-black transition-all">SEND TRANSMISSION</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 text-slate-400 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-white">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>PAGENTRA</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} PageNTRA Infosec. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5"/></a>
              <a href="#" className="hover:text-primary transition-colors"><Globe className="h-5 w-5"/></a>
              <a href="#" className="hover:text-primary transition-colors"><Network className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative glass-card p-8 rounded-lg h-full flex flex-col">
        <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 font-heading text-white">{title}</h3>
        <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-primary font-bold text-sm tracking-widest uppercase group-hover:translate-x-2 transition-transform">
          View Specs <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </motion.div>
  )
}

function WhyUsCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="p-8 rounded-none border-l-4 border-primary bg-gradient-to-br from-white/10 to-transparent hover:bg-white/15 transition-all"
    >
      <div className="inline-flex p-4 rounded-full bg-primary mb-6 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 font-heading text-white">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  )
}

function TeamCard({ image, name, role, linkedin }: { image: string, name: string, role: string, linkedin: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold font-heading text-white mb-1">{name}</h3>
        <p className="text-primary font-medium tracking-wider text-sm mb-4">{role}</p>
        <a href={linkedin} className="inline-flex items-center text-white/70 hover:text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          <Linkedin className="h-4 w-4 mr-2" /> Connect
        </a>
      </div>
    </div>
  )
}
