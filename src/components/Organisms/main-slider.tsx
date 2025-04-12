import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import testImg from "@/assets/images/test.jpg"
import testImg2 from "@/assets/images/test6.png"
import chiapas from "@/assets/images/chiapas.jpg"
import diaMuertos from "@/assets/images/diaMuertos.jpg"
import flag from "@/assets/images/flag-mex.jpg"
import piramid from "@/assets/images/piramid.jpg"


export default function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [testImg, testImg2, chiapas, diaMuertos, flag, piramid]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 bg-black/30 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold italic font-gramona tracking-wide mb-6 leading-tight animate-fade-in drop-shadow-lg">
          Descubre los próximos<br className="hidden md:block" /> eventos en Chiapas
        </h2>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white uppercase text-sm font-semibold px-6 py-3 rounded-2xl">
          Ver eventos
        </Button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-20"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
