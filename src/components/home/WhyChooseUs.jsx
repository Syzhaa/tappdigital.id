import { motion } from 'framer-motion'
import { whyChoose } from '../../data/home.js'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">WHY CHOOSE US</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-4 border-primary-dark p-8 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all"
            >
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
