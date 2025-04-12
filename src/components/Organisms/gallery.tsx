import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import testImg from "@/assets/images/test.jpg"
import testImg2 from "@/assets/images/test6.png"
import chiapas from "@/assets/images/chiapas.jpg"
import diaMuertos from "@/assets/images/diaMuertos.jpg"
import flag from "@/assets/images/flag-mex.jpg"
import piramid from "@/assets/images/piramid.jpg"

export default function Gallery() {
  const images = [
    testImg,
    testImg2,
    chiapas,
    diaMuertos,
    flag,
    piramid,
  ]
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleClose = () => setSelectedIndex(null)
  const handleNext = () => selectedIndex !== null && setSelectedIndex((selectedIndex + 1) % images.length)
  const handlePrev = () => selectedIndex !== null && setSelectedIndex((selectedIndex - 1 + images.length) % images.length)

  return (
    <section className="py-20 px-4 bg-[#EA4326]">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14 tracking-wide uppercase">
          Galería
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image}
                alt={`Imagen de galería ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={28} />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-0 text-white hover:text-gray-300 transition-colors p-2"
            >
              <ChevronLeft size={36} />
            </button>
            <img
              src={images[selectedIndex]}
              alt={`Imagen ampliada ${selectedIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <button
              onClick={handleNext}
              className="absolute right-0 text-white hover:text-gray-300 transition-colors p-2"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
