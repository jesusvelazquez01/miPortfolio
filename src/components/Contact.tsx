import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jv176118@gmail.com",
    href: "mailto:jv176118@gmail.com"
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 388 547-4266",
    href: "tel:+543885474266"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "San Salvador de Jujuy, Argentina",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jesusvelazquez01",
    color: "hover:text-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jesus-velazquez-09076a209/",
    color: "hover:text-primary"
  }
];

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estoy disponible para colaboraciones y nuevos proyectos. ¡No dudes en contactarme!
          </p>
        </div>
        
        <Card className="border-border/50 shadow-[var(--shadow-card)] bg-card animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Podes encontrarme tambien en:
                </p>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="lg"
                      asChild
                      className="group"
                    >
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className={`w-5 h-5 transition-colors ${social.color}`} />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
