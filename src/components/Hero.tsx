import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10 animate-float" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-[var(--shadow-elegant)]">
              <img 
                src="https://jesusvelazquez01.github.io/PortfolioSoftVelazquezJesus.github.io/fotos/foto-portfolio.jpg" 
                alt="Jesús Velázquez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Hola, soy <span className="gradient-text">Jesús</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Desarrollador de Software
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estudiante y freelancer especializado en crear soluciones prácticas, limpias y bien pensadas. 
            Me apasiona aprender nuevas tecnologías y trabajar en equipo para resolver problemas reales.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button size="lg" className="group shadow-[var(--shadow-elegant)]">
              <a href="#proyectos" className="flex items-center gap-2">
                Ver Proyectos
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group">
              <a href="#contacto" className="flex items-center gap-2">
                Contactar
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/jesusvelazquez01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jesús-edgar-velázquez-cardozo-6b4b7b29a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jesusvelazquez7014@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
