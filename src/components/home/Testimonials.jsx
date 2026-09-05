import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/home.js'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-yellow border-2 border-white px-3 py-1 font-black text-xs uppercase tracking-wider mb-4 text-primary-dark">
            TESTIMONI KLIEN
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            KATA MEREKA TENTANG
            <br />
            <span className="text-primary-yellow">TAPPDIGITAL.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.35 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white border-4 border-primary-yellow p-8 md:p-10 shadow-neo">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-medium mb-8 min-h-24 leading-relaxed text-slate-800">
                    "{testimonials[current].text}"
                  </p>
                  <div className="border-t-2 border-slate-200 pt-4">
                    <div className="font-black text-lg text-primary-dark">— {testimonials[current].author}</div>
                    <div className="text-sm font-bold text-primary-indigo">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-center items-center mt-12">
            <button
              onClick={prev}
              className="border-4 border-white bg-transparent text-white w-12 h-12 flex items-center justify-center font-black text-xl hover:bg-primary-yellow hover:text-primary-dark hover:border-primary-yellow transition-all cursor-pointer"
              aria-label="Testimoni sebelumnya"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-3 rounded-full transition-all cursor-pointer ${
                    i === current ? 'bg-primary-yellow w-8' : 'bg-white/40 w-3'
                  }`}
                  aria-label={`Lihat testimoni ke-${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="border-4 border-white bg-transparent text-white w-12 h-12 flex items-center justify-center font-black text-xl hover:bg-primary-yellow hover:text-primary-dark hover:border-primary-yellow transition-all cursor-pointer"
              aria-label="Testimoni selanjutnya"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
