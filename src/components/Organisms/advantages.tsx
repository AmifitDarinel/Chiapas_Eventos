import { Lightbulb, ThumbsUp, Clock, Users, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-green-800">NUESTRAS </span>
          <span className="text-orange-600">VENTAJAS</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center"
              >
                {item.icon}
              </motion.div>
              <span className="text-sm font-semibold text-green-900">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
