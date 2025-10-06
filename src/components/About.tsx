import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Wrench, Users, Globe, BookOpen } from "lucide-react";

const skills = [
  {
    category: "Lenguajes",
    icon: Code2,
    items: ["Java", "JavaScript", "PHP"]
  },
  {
    category: "Frameworks",
    icon: Database,
    items: ["Laravel", "Spring Boot"]
  },
  {
    category: "Base de Datos",
    icon: Database,
    items: ["MySQL"," PostgreSQL","Supabase"]
  },
  {
    category: "Herramientas",
    icon: Wrench,
    items: ["Git", "Postman", "VS Code","Cursor", "IntelliJ","Claude AI"]
  },
  {
    category: "Metodologías",
    icon: Users,
    items: ["Scrum"]
  },
  {
    category: "Idiomas",
    icon: Globe,
    items: ["Español (nativo)", "Inglés (intermedio)"]
  }
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Habilidades</span> & Tecnologías
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi stack tecnológico y herramientas con las que trabajo día a día
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.category} 
              className="card-hover border-border/50 shadow-[var(--shadow-card)] bg-[var(--gradient-card)] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
