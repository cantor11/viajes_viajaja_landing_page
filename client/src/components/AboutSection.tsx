import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Leaf, FileCheck } from "lucide-react";

const values = [
  {
    icon: Briefcase,
    title: "Profesional",
    description: "Destinos, estadías y trámites pensados para lo que buscas: calidad y claridad.",
  },
  {
    icon: Heart,
    title: "Cercana",
    description: "Acompañamos cada paso de tu viaje para que tomes decisiones con respaldo.",
  },
  {
    icon: FileCheck,
    title: "Transparente",
    description: "Cotizaciones en tiempo real, procesos claros y asesoría sin complicaciones",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            Confianza, seguridad y experiencia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-description">
            Somos una agencia con años de experiencia ayudando a viajeros/as a tomar la
            mejor decisión. Gestionamos tu viaje con información clara, acompañamiento
            responsable y atención personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className="text-center" data-testid={`card-value-${index}`}>
              <CardContent className="pt-6 pb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-customPrimary hover:text-customSecondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
