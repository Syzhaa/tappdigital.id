import { motion } from 'framer-motion'
import { whyChoose } from '../../data/home.js'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-y-4 border-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-green border-2 border-primary-dark px-3 py-1 font-black text-xs uppercase tracking-wider mb-4 shadow-neo-xxs">
            NILAI LEBIH
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">KENAPA MEMILIH KAMI?</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">
            Komitmen kami memberikan hasil terbaik, transparan, dan selalu mengutamakan kepuasan kamu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-4 border-primary-dark p-8 shadow-neo-xs hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm bg-primary-bg transition-all"
            >
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
