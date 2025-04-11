import { useState } from "react"
import { X } from "lucide-react"
import test1 from "@/assets/images/test3.jpg"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const images = Array(4).fill(test1)

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
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Imagen de galería ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  )
}
