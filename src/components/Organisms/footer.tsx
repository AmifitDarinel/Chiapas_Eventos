import { Link } from "react-router-dom"
import { Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import logo from "@/assets/images/logo7.png"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-green-900 text-white py-10 px-6"
    >

      <div className="container mx-auto flex flex-col gap-10 sm:gap-8 sm:flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img src={logo} alt="Chiapas logo" className="h-10 w-auto object-contain" />
          <div className="leading-tight text-center sm:text-left">
            <span className="text-lg font-serif font-semibold block">Chiapas</span>
            <span className="text-green-300 text-xs">eventos.com</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm text-center md:text-left">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm">Síguenos en</span>
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
            >
              <Instagram size={18} />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-center text-xs text-green-200">
        © {new Date().getFullYear()} Chiapas Eventos. Todos los derechos reservados.
      </div>
    </motion.footer>
  )
}
