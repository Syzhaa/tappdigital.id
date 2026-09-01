import { motion } from 'framer-motion'
import { features } from '../../data/home.js'

export default function FeatureBento() {
  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            BUILT TO
            <br />
            <span className="text-primary-indigo">KEEP YOU MOVING.</span>
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
            <p className="text-lg mb-8">{features[0].description}</p>
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
                className="absolute top-4 left-4 border-2 border-primary-dark bg-white p-4 w-32"
              >
                <div className="text-sm font-black">BROWSER</div>
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
                className="absolute top-12 right-8 border-2 border-primary-dark bg-white p-4 w-40"
              >
                <div className="text-sm font-black">DASHBOARD</div>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 border-2 border-primary-dark bg-white p-4 w-48"
              >
                <div className="text-sm font-black">DOCUMENTS</div>
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
            <p className="mb-6">{features[1].description}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Before:</span>
                <span className="font-black">92%</span>
              </div>
              <div className="h-6 bg-primary-dark/20 rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-accent-pink"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="font-medium">After:</span>
                <span className="font-black">38%</span>
              </div>
              <div className="h-6 bg-primary-dark/20 rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '38%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-accent-green"
                />
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
            <div className="text-4xl mb-4">☁️🛡️</div>
            <h4 className="text-xl font-black mb-2">{features[2].title}</h4>
            <p className="text-sm">{features[2].description}</p>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${features[3].bg} border-4 border-primary-dark p-6 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all`}
          >
            <div className="text-4xl mb-4">⬇️💥</div>
            <h4 className="text-xl font-black mb-2">{features[3].title}</h4>
            <p className="text-sm">{features[3].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
