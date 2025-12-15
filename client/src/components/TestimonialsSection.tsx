import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    name: "Jorge Ceballos",
    tripType: "Aventura familiar en Costa Rica",
    rating: 5,
    review: "Una experiencia inolvidable. Viajes Viajaja se encargó de organizar absolutamente todo, permitiéndonos disfrutar en familia sin ninguna preocupación. Los hoteles que nos reservaron fueron perfectos y muy cómodos para los niños.",
  },
  {
    name: "Sofía Linares",
    tripType: "Mochilera por Sudamérica",
    rating: 5,
    review: "La mejor inversión que pude hacer fue contactar a Viajes Viajaja. Me ayudaron a diseñar un itinerario económico, pero sumamente completo y lleno de experiencias auténticas. El acompañamiento y las guías de viaje fueron invaluables.",
  },
  {
    name: "Andrés y Elena",
    tripType: "Luna de miel en las Islas San Andrés y Providencia",
    rating: 5,
    review: "Planificaron hasta el más mínimo detalle de nuestra luna de miel: desde los restaurantes más románticos, tours privados exclusivos y los hoteles de ensueño. Superaron por completo todas nuestras expectativas.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-[#F5C316] fill-[#F5C316]" : "text-muted"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Historias reales de personas que confiaron en nosotros para hacer realidad sus viajes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6 pb-6">
                <StarRating rating={testimonial.rating} />
                <p className="text-sm text-muted-foreground mt-4 mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.tripType}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
