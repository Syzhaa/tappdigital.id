import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-black uppercase tracking-wide text-lg mb-4">
              PRODUK DIGITAL UNTUK UMKM & PERSONAL
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Website, Undangan,{' '}
              <span className="text-primary-indigo">Akun Premium.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl">
              TappDigital menyediakan produk digital berkualitas profesional dengan harga terjangkau. Undangan digital custom dengan revisi unlimited, hingga akun premium Netflix/Spotify dengan harga hemat.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-primary-indigo text-white border-4 border-primary-dark px-8 py-4 font-black uppercase shadow-neo hover:shadow-neo-xxs hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-lg flex-1 sm:flex-none">
                MULAI SEKARANG
              </button>
              <button className="border-4 border-primary-dark px-8 py-4 font-black uppercase hover:shadow-neo hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all text-lg flex-1 sm:flex-none">
                LIHAT PRODUK
              </button>
            </div>
            <p className="text-slate-500 text-sm">
              Konsultasi gratis • Revisi unlimited • Support responsif
            </p>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Window Stack */}
            <div className="relative">
              {/* Back Window */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-full max-w-md border-4 border-primary-dark bg-white p-4 shadow-neo"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-green"></div>
                </div>
                <div className="text-center py-8 font-black uppercase text-xl">
                  WORKSPACE
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-primary-dark/20 rounded"></div>
                  <div className="h-4 bg-primary-dark/20 rounded w-3/4"></div>
                  <div className="h-4 bg-primary-dark/20 rounded w-1/2"></div>
                </div>
              </motion.div>

              {/* Middle Window */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-2 -right-2 w-full max-w-md border-4 border-primary-dark bg-white p-4 shadow-neo"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-green"></div>
                </div>
                <div className="text-center py-6 font-black uppercase text-lg">
                  DASHBOARD
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-accent-cyan"></div>
                  <div className="h-16 bg-accent-purple"></div>
                  <div className="h-16 bg-primary-yellow"></div>
                </div>
              </motion.div>

              {/* Front Window */}
              <div className="relative border-4 border-primary-dark bg-white p-4 shadow-neo">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="font-black">TAPPDIGITAL</div>
                </div>
                <div className="text-center py-12">
                  <div className="text-4xl font-black mb-2">DIGITAL</div>
                  <div className="text-2xl font-bold text-primary-indigo">WORKSPACE</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-primary-indigo/20 flex items-center justify-center">
                    <span className="font-black">APPS</span>
                  </div>
                  <div className="h-20 bg-accent-pink/20 flex items-center justify-center">
                    <span className="font-black">TOOLS</span>
                  </div>
                  <div className="h-20 bg-accent-cyan/20 flex items-center justify-center">
                    <span className="font-black">DATA</span>
                  </div>
                  <div className="h-20 bg-accent-purple/20 flex items-center justify-center">
                    <span className="font-black">TEAM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
