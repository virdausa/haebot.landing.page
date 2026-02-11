import { ArrowRight } from "lucide-react";

interface ProductCategoryProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProductCategory({ title, description, image, link }: ProductCategoryProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted isolate"
    >
      {/* Background Image with Zoom Effect */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold font-display mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-white/80 text-sm mb-4 line-clamp-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          Lihat Produk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}
