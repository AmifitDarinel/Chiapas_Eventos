import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import chiapas from "@/assets/images/chiapas.jpg"
import diaMuertos from "@/assets/images/diaMuertos.jpg"
import piramid from "@/assets/images/piramid.jpg"
import jaguar from "@/assets/images/jaguar.jpg"
import panoramic from "@/assets/images/panoramic.jpg"

const slides = [chiapas, diaMuertos, piramid, jaguar, panoramic]


export default function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Stack */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full object-cover ${
              currentSlide === index ? "z-10" : "z-0"
            }`}
          />
        ))}
      </div>

      {/* Static Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 bg-black/30 px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold italic font-gramona tracking-wide mb-6 leading-tight drop-shadow-lg"
        >
          Descubre los próximos<br className="hidden md:block" /> eventos en Chiapas
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Button className="bg-orange-600 hover:bg-orange-700 text-white uppercase text-sm font-semibold px-6 py-3 rounded-2xl shadow-lg">
            Ver eventos
          </Button>
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-30"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-110" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  )
}
