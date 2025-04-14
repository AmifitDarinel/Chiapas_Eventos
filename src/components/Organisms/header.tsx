import { Link } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ReactSVG from "@/assets/images/logo.png"

export default function Header({ visible }: { visible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            className="absolute top-0 left-0 right-0 z-40 bg-white text-green-800 py-3 px-4 md:px-8 shadow-md pointer-events-auto"
          >
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold">
                <Link to="/Page2" className="hover:opacity-80 transition-opacity">
                  <img src={ReactSVG} alt="React Logo" className="h-8 w-auto" />
                </Link>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link to="/Page2" className="hover:underline transition-all">Inicio</Link>
                <Link to="/Page2" className="hover:underline transition-all">Carreras</Link>
                <Link to="/Page2" className="hover:underline transition-all">Noticias</Link>
                <Link to="/Page2" className="hover:underline transition-all">Contacto</Link>
              </nav>
              <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 18
            }}
            className="md:hidden absolute top-14 left-0 right-0 bg-white shadow-md z-30 px-4 py-4 text-green-800 space-y-3"
          >
            <Link to="/Page2" className="block" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/Page2" className="block" onClick={() => setMenuOpen(false)}>Carreras</Link>
            <Link to="/Page2" className="block" onClick={() => setMenuOpen(false)}>Noticias</Link>
            <Link to="/Page2" className="block" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
