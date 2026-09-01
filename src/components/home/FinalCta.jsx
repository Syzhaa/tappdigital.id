import { motion } from 'framer-motion'

export default function FinalCta() {
  return (
    <section className="py-24 bg-primary-yellow border-y-4 border-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            SIAP BIKIN
            <br />
            WORKSPACE LU
            <br />
            <span className="text-primary-dark">MAKIN BRUTAL</span>
            &amp; RAPI?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-dark text-white border-4 border-primary-dark px-12 py-5 font-black uppercase shadow-neo hover:shadow-neo-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            MULAI SEKARANG
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
