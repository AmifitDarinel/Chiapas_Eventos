import { Button } from "@/components/ui/button"
import test from "@/assets/images/test.jpg"

export default function Goals() {
  return (
    <section
      className="py-20 px-4 bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: `url(${test})`,
      }}
    >
      <div className=" backdrop-blur-sm rounded-lg p-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight mb-6">
          TE AYUDAMOS<br />CON TUS METAS
        </h2>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl">
          VER
        </Button>
      </div>
    </section>
  )
}
