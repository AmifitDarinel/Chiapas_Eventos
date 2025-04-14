import { Facebook, Twitter, Instagram, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function SocialBar() {
  return (
    <div className="sticky top-0 z-50 bg-red-700 text-white py-1 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-2">
          <Link to="https://facebook.com" className="hover:opacity-80 transition-opacity bg-white rounded-full p-1">
            <Facebook size={13} className="text-red-700" />
          </Link>
          <Link to="https://twitter.com" className="hover:opacity-80 transition-opacity bg-white rounded-full p-1">
            <Twitter size={13} className="text-red-700" />
          </Link>
          <Link to="https://instagram.com" className="hover:opacity-80 transition-opacity bg-white rounded-full p-1">
            <Instagram size={13} className="text-red-700" />
          </Link>
        </div>
        <div className="flex items-center">
          <Phone size={13} className="mr-2 text-white" />
          <span className="text-sm">(961) 295 4500</span>
        </div>
      </div>
    </div>
  )
}
