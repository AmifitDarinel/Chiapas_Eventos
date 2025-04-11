import logo1 from "@/assets/images/logo1.png"
import logo2 from "@/assets/images/logo2.png"
import logo3 from "@/assets/images/logo3.png"
import logo4 from "@/assets/images/logo4.png"
import logo5 from "@/assets/images/logo5.png"

export default function Partners() {
  const logos = [logo1, logo2, logo3, logo4, logo5]

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 tracking-wide">
          Trusted by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="w-32 md:w-40 grayscale hover:grayscale-0 transition duration-300">
              <img src={logo} alt={`Partner logo ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
