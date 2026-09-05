import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '../../data/home.js'

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-24 bg-primary-dark" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-yellow border-2 border-white px-3 py-1 font-mono font-bold text-xs uppercase tracking-wider mb-4 text-primary-dark shadow-neo-xxs">
            PERTANYAAN UMUM
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 font-display">
            ADA PERTANYAAN?
            <br />
            <span className="text-primary-yellow">KAMI SIAP BANTU.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-3 border-primary-yellow bg-white shadow-neo-xs overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left cursor-pointer"
                aria-expanded={openIdx === i}
              >
                <span className="font-black text-base md:text-lg text-primary-dark font-display">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg shrink-0 font-bold ml-4"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t-2 border-slate-200 px-6 py-4 bg-slate-50"
                  >
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
