import { motion } from 'framer-motion'

export default function ProblemSolution() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            DARI BERANTAKAN
            <br />
            <span className="text-primary-indigo">JADI TERATUR.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Terlalu banyak tools bukan berarti produktif.
            <br />
            TappDigital membantu menyederhanakan workflow digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* BEFORE Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-accent-pink border-4 border-primary-dark p-8 shadow-neo"
          >
            <div className="font-black uppercase tracking-wide text-sm mb-4">
              BEFORE
            </div>
            <h3 className="text-3xl font-black mb-4">BRAIN FOG</h3>
            <p className="mb-8">
              Too many tabs.
              <br />
              Too many tools.
              <br />
              Too many distractions.
            </p>
            <div className="space-y-4">
              {/* Visual: Chaotic browser */}
              <div className="border-2 border-primary-dark p-4 bg-white">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-6 bg-primary-dark/20 flex-1"></div>
                  ))}
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-4 bg-primary-dark/30"></div>
                  <div className="h-4 bg-primary-dark/30"></div>
                  <div className="h-4 bg-primary-dark/30"></div>
                  <div className="h-4 bg-primary-dark/30"></div>
                </div>
              </div>
              <div className="text-center text-sm font-medium">
                <span className="inline-block bg-primary-dark text-white px-3 py-1">20+</span>
                <span className="ml-2">tabs · notifications · windows · documents</span>
              </div>
            </div>
          </motion.div>

          {/* AFTER Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-accent-green border-4 border-primary-dark p-8 shadow-neo"
          >
            <div className="font-black uppercase tracking-wide text-sm mb-4">
              AFTER
            </div>
            <h3 className="text-3xl font-black mb-4">LASER FOCUS</h3>
            <p className="mb-8">
              Satu workspace bersih.
              <br />
              Semua rapi dalam satu tempat.
            </p>
            <div className="space-y-4">
              {/* Visual: Clean workspace */}
              <div className="border-2 border-primary-dark p-4 bg-white">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="text-sm font-black">WORKSPACE</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-primary-dark p-3">
                    <div className="font-black text-sm mb-1">Projects</div>
                    <div className="h-2 bg-accent-purple"></div>
                  </div>
                  <div className="border border-primary-dark p-3">
                    <div className="font-black text-sm mb-1">Tasks</div>
                    <div className="h-2 bg-accent-cyan"></div>
                  </div>
                  <div className="border border-primary-dark p-3">
                    <div className="font-black text-sm mb-1">Documents</div>
                    <div className="h-2 bg-primary-yellow"></div>
                  </div>
                  <div className="border border-primary-dark p-3">
                    <div className="font-black text-sm mb-1">Apps</div>
                    <div className="h-2 bg-primary-indigo"></div>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm font-medium">
                <span className="inline-block bg-primary-dark text-white px-3 py-1">1</span>
                <span className="ml-2">workspace · organized · efficient</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
