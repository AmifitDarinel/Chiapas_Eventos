import logo1 from "@/assets/images/logo1.png"
import logo2 from "@/assets/images/logo2.png"
import logo3 from "@/assets/images/logo3.png"
import logo4 from "@/assets/images/logo4.png"
import logo5 from "@/assets/images/logo5.png"

export default function Partners() {
  const logos = [logo1, logo2, logo3, logo4, logo5]

  return (
    <section className="bg-black py-16 px-6">
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-screen-xl mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="w-36 md:w-40 flex items-center justify-center">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-20 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
