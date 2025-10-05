import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Jesús Velázquez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
