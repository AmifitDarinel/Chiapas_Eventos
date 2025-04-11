import { Facebook, Twitter, Instagram, Phone } from "lucide-react"
import { Link } from "react-router-dom"


export default function SocialBar() {
  return (
    <div className="sticky top-0 z-50 bg-red-700 text-white py-2 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
            <Facebook size={18} />
          </Link>
          <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
            <Twitter size={18} />
          </Link>
          <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
            <Instagram size={18} />
          </Link>
        </div>
        <div className="flex items-center">
          <Phone size={18} className="mr-2" />
          <span className="text-sm">(961) 295 4500</span>
        </div>
      </div>
    </div>
  )
}
