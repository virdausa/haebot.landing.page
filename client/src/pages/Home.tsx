import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCategory } from "@/components/ProductCategory";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Wrench, 
  MessageSquare, 
  ShoppingCart, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Cpu,
  Cog,
  Zap
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Solusi CNC Terpercaya di Indonesia
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Pusat Sparepart CNC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Berkualitas & Terpercaya
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Kami menyediakan solusi lengkap untuk kebutuhan mesin CNC Anda. 
              Mulai dari sparepart berkualitas, konsultasi teknis, hingga perbaikan dan pengadaan mesin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <a href="https://store.haebot.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Lihat Katalog <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 border-2 hover:bg-muted transition-all">
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">Layanan Unggulan Kami</h2>
            <p className="text-muted-foreground text-lg">
              Kami tidak hanya menjual sparepart, tetapi memberikan solusi komprehensif untuk mendukung produktivitas bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Settings className="w-8 h-8" />}
              title="Sparepart CNC"
              description="Penyedia komponen CNC terlengkap dan original dengan kualitas terjamin untuk berbagai jenis mesin."
            />
            <ServiceCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="Konsultasi Ahli"
              description="Diskusi teknis dengan tim berpengalaman untuk menemukan solusi terbaik bagi kebutuhan mesin Anda."
            />
            <ServiceCard
              icon={<Wrench className="w-8 h-8" />}
              title="Perbaikan & Optimasi"
              description="Layanan servis dan upgrade performa mesin CNC untuk mengembalikan kinerja maksimal."
            />
            <ServiceCard
              icon={<Cpu className="w-8 h-8" />}
              title="Pengadaan Mesin"
              description="Jasa pengadaan mesin CNC custom sesuai spesifikasi dan kebutuhan produksi Anda."
            />
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">Kategori Produk</h2>
              <p className="text-muted-foreground text-lg">
                Temukan berbagai komponen berkualitas tinggi untuk mesin CNC Anda.
              </p>
            </div>
            <a href="https://store.haebot.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-primary hover:text-primary/80 group">
                Lihat Semua Produk <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Unsplash images used as placeholders for industrial parts */}
            <ProductCategory
              title="Linear Motion"
              description="Bearings, blocks (SCS Series), dan rails presisi tinggi."
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              link="https://store.haebot.com"
            />
            <ProductCategory
              title="Fasteners"
              description="Berbagai jenis baut dan mur spesifikasi industri."
              image="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=800&q=80"
              link="https://store.haebot.com"
            />
            <ProductCategory
              title="Electronics"
              description="Controller DSP, Modul IoT, Driver Motor, dan Sensor."
              image="https://images.unsplash.com/photo-1555664424-778a6902201b?w=800&q=80"
              link="https://store.haebot.com"
            />
            <ProductCategory
              title="Mechanical"
              description="Komponen mekanik struktural alumunium dan aksesoris."
              image="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
              link="https://store.haebot.com"
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="mb-4 inline-flex p-4 bg-white/10 rounded-full text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100% Original</h3>
              <p className="text-primary-foreground/80">Semua sparepart terjamin keaslian dan kualitasnya.</p>
            </div>
            <div className="p-6">
              <div className="mb-4 inline-flex p-4 bg-white/10 rounded-full text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pengiriman Cepat</h3>
              <p className="text-primary-foreground/80">Proses pesanan cepat dan pengiriman aman ke seluruh Indonesia.</p>
            </div>
            <div className="p-6">
              <div className="mb-4 inline-flex p-4 bg-white/10 rounded-full text-white">
                <Cog className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Technical Support</h3>
              <p className="text-primary-foreground/80">Dukungan teknis penuh untuk pemasangan dan troubleshooting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-12 rounded-3xl border border-border/50 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold font-display mb-8">Haebot Project Platform</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Platform yang menghubungkan pemilik ide proyek robot, IoT, dan otomasi dengan eksekutor berbakat. 
              Temukan proyek yang sesuai skill kamu dan mulai berkarya!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://project.haebot.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-10 shadow-xl transition-all hover:-translate-y-1">
                  Lihat Proyek Tersedia
                </Button>
              </a>
              <a href="https://project.haebot.com/teknisi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-10 border-2 hover:bg-muted transition-all">
                  Cari Teknisi
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="sticky top-24">
                <h2 className="text-3xl lg:text-4xl font-bold font-display mb-6">Hubungi Kami</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Punya pertanyaan tentang spesifikasi produk atau butuh konsultasi untuk mesin CNC Anda? 
                  Tim kami siap membantu.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Alamat Workshop</h4>
                      <p className="text-muted-foreground">
                        Jl. Kolonel Sugiono No.22, Gedog,<br />
                        Kec. Sananwetan, Kota Blitar,<br />
                        Jawa Timur 66137
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Telepon / WhatsApp</h4>
                      <p className="text-muted-foreground font-mono mb-4">+62 852-4642-8746</p>
                      <a 
                        href="https://wa.me/6285246428746" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-0">
                          Chat di WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold font-display mb-6">Kirim Pesan</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-1 bg-white rounded-lg overflow-hidden">
                  <img src="/logo.webp" alt="Haebot Teknologi" className="w-8 h-8 object-contain" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  Haebot Teknologi<span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-secondary-foreground/70 max-w-sm">
                Mitra terpercaya untuk kebutuhan industri CNC Anda. 
                Menyediakan sparepart berkualitas dan layanan profesional sejak 2020.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Tautan Cepat</h4>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                <li><a href="https://store.haebot.com" className="hover:text-primary transition-colors">Katalog</a></li>
                <li><a href="https://project.haebot.com" className="hover:text-primary transition-colors">Project</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} PT Haebot Teknologi Indonesia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
