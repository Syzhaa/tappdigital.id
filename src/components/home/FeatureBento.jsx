import { motion } from 'framer-motion'
import { features } from '../../data/home.js'

export default function FeatureBento() {
  return (
    <section className="py-24 bg-primary-bg" id="fitur">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-cyan border-2 border-primary-dark px-3 py-1 font-black text-xs uppercase tracking-wider mb-4 shadow-neo-xxs">
            KEUNGGULAN UTAMA
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            DIRANCANG UNTUK
            <br />
            <span className="text-primary-indigo">MEMUDAHKAN HIDUPMU.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Large Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${features[0].bg} border-4 border-primary-dark p-8 shadow-neo md:col-span-2 md:row-span-2 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all`}
          >
            <h3 className="text-3xl font-black mb-4">{features[0].title}</h3>
            <p className="text-lg mb-8 text-slate-800 font-medium">{features[0].description}</p>
            <div className="relative h-64">
              {/* Animated workspace visual */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-4 border-2 border-primary-dark bg-white p-4 w-36 shadow-neo-xxs"
              >
                <div className="text-xs font-black">WEBSITE & TOKO</div>
                <div className="text-[10px] text-slate-500 mt-1">Siap jualan online</div>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [1, -1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-12 right-8 border-2 border-primary-dark bg-white p-4 w-44 shadow-neo-xxs"
              >
                <div className="text-xs font-black">UNDANGAN ACARA</div>
                <div className="text-[10px] text-slate-500 mt-1">Desain kustom eksklusif</div>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 border-2 border-primary-dark bg-white p-4 w-52 shadow-neo-xxs text-center"
              >
                <div className="text-xs font-black text-primary-indigo">AKUN PREMIUM HEMAT</div>
                <div className="text-[10px] text-slate-500 mt-1">Akses cepat & anti ribet</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Medium Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${features[1].bg} border-4 border-primary-dark p-8 shadow-neo md:col-span-2 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all`}
          >
            <h3 className="text-2xl font-black mb-4">{features[1].title}</h3>
            <p className="mb-6 text-slate-600 font-medium">{features[1].description}</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-black">
                <span>Tingkat Kepuasan Klien Kami:</span>
                <span className="text-primary-indigo font-black text-sm">99.8%</span>
              </div>
              <div className="h-6 bg-slate-200 border-2 border-primary-dark overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '99.8%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-accent-green"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span>Revisi Sampai Cocok</span>
                <span>Garansi 100% Puas</span>
              </div>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`${features[2].bg} border-4 border-primary-dark p-6 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all`}
          >
            <div className="text-4xl mb-4">💰✨</div>
            <h4 className="text-xl font-black mb-2">{features[2].title}</h4>
            <p className="text-sm text-slate-600 font-medium">{features[2].description}</p>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${features[3].bg} border-4 border-primary-dark p-6 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all`}
          >
            <div className="text-4xl mb-4">⚡💬</div>
            <h4 className="text-xl font-black mb-2">{features[3].title}</h4>
            <p className="text-sm text-slate-600 font-medium">{features[3].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
