import { Link } from "react-router-dom"
import { Facebook, Instagram } from "lucide-react"
import logo from "@/assets/images/logo7.png"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Chiapas logo" className="h-10 w-auto object-contain" />
          <div className="leading-tight">
            <span className="text-lg font-serif font-semibold block">Chiapas</span>
            <span className="text-green-300 text-xs">eventos.com</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-center md:text-left">
          <Link to="/privacidad" className="hover:underline transition-all">
            Aviso de privacidad
          </Link>
          <Link to="/terminos" className="hover:underline transition-all">
            Términos y condiciones
          </Link>
          <Link to="/faq" className="hover:underline transition-all">
            Preguntas frecuentes
          </Link>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <span className="text-sm">Síguenos en</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-6 text-center text-xs text-green-200">
        © {new Date().getFullYear()} Chiapas Eventos. Todos los derechos reservados.
      </div>
    </footer>
  )
}
