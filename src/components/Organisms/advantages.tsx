import { Lightbulb, ThumbsUp, Clock, Users, MessageSquare } from "lucide-react"

export default function Advantages() {
  const advantages = [
    { icon: <Lightbulb className="h-10 w-10 text-green-800" />, title: "INNOVACIÓN" },
    { icon: <ThumbsUp className="h-10 w-10 text-green-800" />, title: "CALIDAD" },
    { icon: <Clock className="h-10 w-10 text-green-800" />, title: "EXPERIENCIA" },
    { icon: <Users className="h-10 w-10 text-green-800" />, title: "CLIENTES FELICES" },
    { icon: <MessageSquare className="h-10 w-10 text-green-800" />, title: "SOPORTE" },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-green-800">NUESTRAS </span>
          <span className="text-orange-600">VENTAJAS</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 opacity-100 animate-fadeIn"
            >
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-green-900">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
