import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import diaMuertos from "@/assets/images/diaMuertos.jpg"
import piramid from "@/assets/images/piramid.jpg"
import jaguar from "@/assets/images/jaguar.jpg"
import jaguar2 from "@/assets/images/jaguar2.jpg"
import panoramic from "@/assets/images/panoramic.jpg"

export default function Gallery() {
  const images = [jaguar2, diaMuertos, piramid, jaguar, panoramic]
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleClose = () => setSelectedIndex(null)
  const handleNext = () => selectedIndex !== null && setSelectedIndex((selectedIndex + 1) % images.length)
  const handlePrev = () => selectedIndex !== null && setSelectedIndex((selectedIndex - 1 + images.length) % images.length)

  return (
    <section className="py-20 px-4 bg-[#EA4326]">
      <div className="container mx-auto max-w-screen-xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-14 tracking-wide uppercase"
        >
          Galería
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={image}
                alt={`Imagen de galería ${index + 1}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              className="relative max-w-4xl w-full flex items-center justify-center rounded-2xl"
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
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-auto h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              <button
                onClick={handleNext}
                className="absolute right-0 text-white hover:text-gray-300 transition-colors p-2"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
