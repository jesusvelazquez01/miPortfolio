import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Administración de Salas y Elementos",
    description: "Sistema para la gestión de elementos y salas del IES Nuevo Horizonte.",
    features: [
      "Gestión multigabinete",
      "Validación de usuarios",
      "Envío automático de reservas con Google Calendar usando N8N"
    ],
    stack: ["Laravel 12","React 19 + Typescript","N8N", "MySQL"],
    image: "/IES-GESTION.png",
    github: "https://github.com/jesusvelazquez01/EasyTurno"
  },
  {
    title: "Sistema para Carpinteria",
    description: "Sistema integral de gestión para una Carpitenia local.",
    features: [
      "Control de inventario",
      "Gestión de ventas",
      "Generacion de reportes",
    ],
    stack: ["Java 21", "Java Server Pages", "MySQL"],
    image: "https://jesusvelazquez01.github.io/PortfolioSoftVelazquezJesus.github.io/fotos/SistemaMuebleria.jpg",
    github: "https://github.com/jesusvelazquez01/muebleriaSoft"
  },
  {
    title: "Sistema de Reservas Internas Ministerio de Planificación Estratégica y Modernización Gob|Jujuy",
    description: "Sistema integral de Reservas.",
    features: [
      "Control de reservas",
      "Gestión de de capacitadores, jefes de area y equipos informaticos",
      "Roles y permisos segun usuario",
      "Reportes detallados",
      "Automatizacion de correos y reservas con Google calendar con N8N",
    ],
    stack: ["Laravel 12","Inertia.js", "React + Typescript", "MySQL","N8N"],
    image: "/MPEYM.png",
    github: "https://github.com/jesusvelazquez01/Sistema_MPEyM"
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones que he desarrollado para resolver problemas de clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover border-border/50 shadow-[var(--shadow-card)] overflow-hidden group animate-fade-in bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Funcionalidades:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button asChild className="flex-1 shadow-[var(--shadow-elegant)]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Ver en GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
