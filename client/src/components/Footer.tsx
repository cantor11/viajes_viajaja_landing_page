import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="flex flex-col items-center text-xl font-bold text-foreground" data-testid="link-footer-logo">
              <img src="/assets/viajaja_logo.webp" alt="Viajaja Logo" className="h-28 w-auto" />
            </a>
            <p className="text-sm flex items-center justify-center text-muted-foreground mt-4">
              Viaja con confianza.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-customPrimary hover:text-customSecondary flex-shrink-0" />
                <span>Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-customPrimary hover:text-customSecondary flex-shrink-0" />
                <span>+57 321 516 7983</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-customPrimary hover:text-customSecondary flex-shrink-0" />
                <span>viajesviajaja@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Horario</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-customPrimary hover:text-customSecondary flex-shrink-0" />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-customPrimary hover:text-customSecondary flex-shrink-0" />
                <span>Sáb: 9:00 - 12:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-customPrimary hover:text-customSecondary flex-shrink-0" />
                <span>Dom: No disponible</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=573215167983&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-customPrimary flex items-center justify-center text-white hover:bg-customSecondary"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/viajes_viajaja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-customPrimary flex items-center justify-center text-white hover:bg-customSecondary"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100083138990444"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-customPrimary flex items-center justify-center text-white hover:bg-customSecondary"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Viajes Viajaja. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            La información proporcionada será utilizada únicamente para contactarte sobre nuestros servicios de viajes.
          </p>
        </div>
      </div>
    </footer>
  );
}
