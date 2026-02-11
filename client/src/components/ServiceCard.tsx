import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative p-8 bg-card rounded-2xl border border-border/50",
      "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
      "transition-all duration-300 ease-out",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-foreground font-display group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
