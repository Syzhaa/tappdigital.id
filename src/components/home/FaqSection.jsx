import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '../../data/home.js'

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-24 bg-primary-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            QUESTIONS?
            <br />
            <span className="text-primary-yellow">WE GOT YOU.</span>
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
              className="border-4 border-primary-yellow bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary-yellow/5 transition-colors text-left"
                aria-expanded={openIdx === i}
              >
                <span className="font-black text-lg">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl shrink-0"
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
                    className="border-t-2 border-primary-yellow/20 px-6 py-4 bg-primary-yellow/5"
                  >
                    <p className="text-slate-600">{item.answer}</p>
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
