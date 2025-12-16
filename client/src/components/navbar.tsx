import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-heading font-bold text-xl text-primary cursor-pointer hover:opacity-90 transition-opacity">
            <ShieldCheck className="h-8 w-8" strokeWidth={2.5} />
            <span className="text-foreground tracking-tight">SecureGuard</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <a className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Log in
            </a>
          </Link>
          <Button size="sm" className="font-semibold shadow-lg hover:shadow-xl transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
