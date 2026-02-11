import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/", type: "internal" },
    { name: "Tentang Kami", href: "#about", type: "anchor" },
    { name: "Katalog", href: "https://store.haebot.com", type: "external" },
    { name: "Project", href: "https://project.haebot.com", type: "external" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-border/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1 bg-white rounded-lg transition-colors overflow-hidden">
              <img src="/logo.webp" alt="Haebot Teknologi" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-display font-bold text-2xl text-foreground tracking-tight">
              Haebot Teknologi<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === "external" ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a href="#contact">
              <Button className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                Hubungi Kami
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5">
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                link.type === "external" ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-muted-foreground hover:text-primary flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.type === "anchor" ? link.href : "/"}
                    className="text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-border">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full text-lg py-6 shadow-md">
                    Hubungi Kami
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
