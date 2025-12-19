import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoTransparent from '@assets/logos/Transparent_Logo.png';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all"></div>
            <img 

              src={logoTransparent} 
              alt="PageNTRA Logo" 
              className="h-26 w-auto relative z-10 group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {["Products", "About", "Why Us", "Team", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="relative hover:text-white transition-colors group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
            LOG IN
          </Link>
          <Button size="sm" className="bg-primary text-background font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(61,186,235,0.4)] transition-all border-none">
            GET ACCESS
          </Button>
        </div>
      </div>
    </nav>
  );
}
