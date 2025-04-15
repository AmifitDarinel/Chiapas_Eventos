import { motion } from "framer-motion"

import logo1 from "@/assets/images/logo1.png"
import logo2 from "@/assets/images/logo2.png"
import logo3 from "@/assets/images/logo3.png"
import logo4 from "@/assets/images/logo4.png"
import logo5 from "@/assets/images/logo5.png"

export default function Partners() {
  const logos = [logo1, logo2, logo3, logo4, logo5]

  return (
    <section className="bg-black py-16 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
          hidden: {},
        }}
        className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-screen-xl mx-auto"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-36 md:w-40 flex items-center justify-center"
          >
            <motion.img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-20 w-auto opacity-50 object-contain"
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
