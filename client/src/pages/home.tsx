import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Activity, Globe, CheckCircle2, ArrowRight, Server, Zap, ShieldCheck } from "lucide-react";
import heroImage from '@assets/generated_images/abstract_high-tech_blue_cyber_security_shield_waves_on_white.png';
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
                New: AI-Powered Threat Detection 2.0
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-foreground mb-6">
                FUTURE READY <br />
                <span className="text-primary">CYBER ATTACK</span> <br />
                PROTECTION
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                SecureGuard provides enterprise-grade security infrastructure for the modern web. 
                Stop threats before they reach your data.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 text-base shadow-primary/25 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base border-2">
                  View Demo
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>SOC2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>99.99% Uptime</span>
                </div>
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

      {/* Trusted By */}
      <section className="py-12 border-y bg-slate-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">Trusted by security teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            {/* Placeholder Logos using Text for specific style */}
            <span className="text-2xl font-heading font-bold">ACME Corp</span>
            <span className="text-2xl font-heading font-bold">Globex</span>
            <span className="text-2xl font-heading font-bold">Soylent</span>
            <span className="text-2xl font-heading font-bold">Umbrella</span>
            <span className="text-2xl font-heading font-bold">Massive</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Comprehensive Protection Layer</h2>
            <p className="text-lg text-muted-foreground">
              Our unified platform provides end-to-end security for your entire infrastructure, 
              from cloud endpoints to user devices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Real-time Threat Prevention"
              description="AI-driven engine that detects and blocks zero-day attacks in milliseconds, before they execute."
            />
            <FeatureCard 
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Global Network Security"
              description="Secure your network edge with our distributed firewall spanning 200+ global points of presence."
            />
            <FeatureCard 
              icon={<Activity className="h-10 w-10 text-primary" />}
              title="Advanced Analytics"
              description="Deep insights into your security posture with actionable intelligence and automated reporting."
            />
             <FeatureCard 
              icon={<Lock className="h-10 w-10 text-primary" />}
              title="Zero Trust Access"
              description="Implement strict identity verification for every person and device trying to access resources."
            />
            <FeatureCard 
              icon={<Server className="h-10 w-10 text-primary" />}
              title="Cloud Workload Protection"
              description="Secure your containers, serverless functions, and VMs across any cloud provider."
            />
             <FeatureCard 
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Automated Response"
              description="Instantly isolate compromised assets and remediate threats without manual intervention."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to secure your future?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of companies that trust SecureGuard for their enterprise security needs.
            Get started with a 14-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold text-primary">
              Start Free Trial
            </Button>
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-transparent border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-white mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span>SecureGuard</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Next-generation cybersecurity platform for the modern enterprise.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Integrations</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} SecureGuard Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
