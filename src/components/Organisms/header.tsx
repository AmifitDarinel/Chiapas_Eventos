import { Link } from "react-router-dom"
import ReactSVG from "@/assets/images/logo.png"

export default function Header() {
  return (
    <header className="bg-white text-green-800 bold py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/Page2" className="hover:opacity-80 transition-opacity">
            <img src={ReactSVG} alt="React Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/Page2" className="hover:underline transition-all">
            Inicio
          </Link>
          <Link to="/Page2" className="hover:underline transition-all">
            Carreras
          </Link>
          <Link to="/Page2" className="hover:underline transition-all">
            Noticias
          </Link>
          <Link to="/Page2" className="hover:underline transition-all">
            Contacto
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  )
}
