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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            PEOPLE
            <br />
            <span className="text-primary-yellow">GET IT.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white border-4 border-primary-yellow p-8 shadow-neo">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-xl font-medium mb-8 min-h-24">
                    "{testimonials[current].text}"
                  </p>
                  <div>
                    <div className="font-black text-lg">— {testimonials[current].author}</div>
                    <div className="text-slate-500">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-center mt-12">
            <button
              onClick={prev}
              className="border-4 border-white bg-transparent text-white p-4 font-black text-xl hover:bg-primary-yellow hover:text-primary-dark hover:border-primary-yellow transition-all"
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? 'bg-primary-yellow w-8' : 'bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="border-4 border-white bg-transparent text-white p-4 font-black text-xl hover:bg-primary-yellow hover:text-primary-dark hover:border-primary-yellow transition-all"
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
