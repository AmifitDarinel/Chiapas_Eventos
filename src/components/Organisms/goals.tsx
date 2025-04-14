import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import test from "@/assets/images/test6.png"

export default function Goals() {
  return (
    <section
      className="py-20 px-4 bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${test})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="backdrop-blur-sm  rounded-2xl p-10 max-w-2xl mx-auto text-center shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-green-900 leading-tight mb-6"
        >
          TE AYUDAMOS<br />CON TUS METAS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Button
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl transition-transform"
          >
            VER
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
