import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "Técnico en Informática Profesional y Personal",
    institution: 'E.T.P. N°1 "Gral. Aristobulo Vargas Belmonte"',
    location: "San Salvador de Jujuy, Jujuy, Argentina",
    logo: "https://jesusvelazquez01.github.io/PortfolioSoftVelazquezJesus.github.io/fotos/logo-ETP.png"
  },
  {
    degree: "Técnico Superior en Desarrollo de Software",
    institution: 'Instituto de Educación Superior "Nuevo Horizonte"',
    location: "San Salvador de Jujuy, Jujuy, Argentina",
    logo: "https://jesusvelazquez01.github.io/PortfolioSoftVelazquezJesus.github.io/fotos/logo-IESNH.jpg"
  }
];

const Education = () => {
  return (
    <section id="formacion" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Formación <span className="gradient-text">Académica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria educativa en el desarrollo de software
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree} 
              className="card-hover border-border/50 shadow-[var(--shadow-card)] bg-card animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 bg-background p-2">
                    <img 
                      src={edu.logo} 
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      <GraduationCap className="w-4 h-4" />
                      Título Técnico
                    </div>
                    
                    <h3 className="text-xl font-semibold leading-tight">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-muted-foreground font-medium">
                      {edu.institution}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
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

export default Education;
