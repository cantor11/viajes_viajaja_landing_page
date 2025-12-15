import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiWhatsapp } from "react-icons/si";
import { FaAddressCard, FaFutbol, FaIdCard } from "react-icons/fa";

const procedures = [
  {
    icon: FaAddressCard,
    title: "Asesoría para trámite de Visa",
    description: "Te guiamos en el proceso de obtención de visa para tus viajes internacionales.",
  },
  {
    icon: FaFutbol,
    title: "Documentación para el Mundial 2026",
    description: "Asistencia en la preparación de documentos para asistir al Mundial de Fútbol 2026.",
  },
  {
    icon: FaIdCard,
    title: "Trámite de cédulas de extranjería para venezolanos",
    description: "Ayuda en el proceso de obtención de cédula de extranjería para ciudadanos venezolanos.",
  },
];

export default function ProceduresSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trámites especiales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Te ayudamos con tus trámites y documentación para viajar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <Card
              key={procedure.title}
              className="hover-elevate bg-gradient-to-br from-customPrimary/10 to-customSecondary/30 shadow-md"
              data-testid={`card-procedure-${index}`}
            >
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-lg bg-customPrimary/10 flex items-center justify-center mb-4">
                  <procedure.icon className="h-6 w-6 text-customPrimary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {procedure.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {procedure.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-customPrimary text-white hover:bg-customSecondary"
            asChild
          >
            <a
              href="https://api.whatsapp.com/send/?phone=573215167983&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Consulta tu trámite
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}