import { motion } from 'framer-motion'
import { steps } from '../../data/home.js'

export default function HowItWorks() {
  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-pink border-2 border-primary-dark px-3 py-1 font-black text-xs uppercase tracking-wider mb-4 shadow-neo-xxs">
            ALUR KERJA
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            TIGA LANGKAH MUDAH.
            <br />
            <span className="text-primary-indigo">BEBAS RIBET.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">
            Mulai dari pilih produk sampai produk aktif dan siap pakai dalam hitungan waktu singkat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`${step.bg} border-4 border-primary-dark p-8 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="text-6xl font-black mb-4 opacity-40">{step.number}</div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-base text-slate-800 font-medium leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
