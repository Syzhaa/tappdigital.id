import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary-bg">
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-primary-yellow border-2 border-primary-dark px-3 py-1.5 font-mono text-xs font-black uppercase tracking-wider mb-5 shadow-neo-xxs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SOLUSI DIGITAL BISNIS & PERSONAL
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.08] tracking-tight mb-6 font-display">
              Bikin Bisnis Naik Kelas dengan{' '}
              <span className="text-primary-indigo underline decoration-primary-yellow decoration-wavy decoration-2">Website & Produk Digital</span> Berkualitas.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl font-medium leading-relaxed">
              Dari pembuatan <strong>Website Toko UMKM</strong> siap order WA, <strong>Undangan Pernikahan Digital</strong> mewah, hingga <strong>Akun Premium Hemat</strong> bergaransi. Revisi sepuasnya tanpa biaya siluman!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a 
                href="/toko" 
                className="text-center bg-primary-indigo text-white border-3 border-primary-dark px-8 py-4 font-black uppercase shadow-neo hover:shadow-neo-xs hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-base sm:text-lg flex-1 sm:flex-none tracking-wide font-display"
              >
                KONSULTASI BISNIS GRATIS →
              </a>
              <a 
                href="#produk" 
                className="text-center bg-white border-3 border-primary-dark px-7 py-4 font-black uppercase hover:bg-slate-100 hover:shadow-neo-xs hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all text-base sm:text-lg flex-1 sm:flex-none tracking-wide"
              >
                LIHAT PRODUK
              </a>
            </div>

            {/* Micro badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 text-sm">✔</span> Revisi Tanpa Batas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 text-sm">✔</span> Siap Terima Order WA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 text-sm">✔</span> Garansi Aktif 100%
              </span>
            </div>
          </motion.div>

          {/* Right: Visual Showcase (Neobrutalism Interactive Windows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Window Stack */}
            <div className="relative max-w-md mx-auto">
              
              {/* Decorative Accent Background Box */}
              <div className="absolute -top-3 -right-3 w-full h-full bg-primary-yellow border-3 border-primary-dark rounded-none -z-10 shadow-neo" />

              {/* Main Card (UMKM Store Mockup) */}
              <div className="border-3 border-primary-dark bg-white p-5 shadow-neo">
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-primary-dark">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 border border-primary-dark" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-primary-dark" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-primary-dark" />
                  </div>
                  <span className="font-mono font-bold text-[11px] bg-slate-100 px-2 py-0.5 border border-primary-dark">tokokopi.tappdigital.id</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>

                {/* UMKM Live Header */}
                <div className="bg-primary-indigo text-white p-4 border-2 border-primary-dark mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-2 py-0.5 rounded">Toko Online UMKM</span>
                      <h4 className="font-black text-xl font-display mt-1">Warung Kopi Nusantara</h4>
                      <p className="text-xs text-indigo-100 mt-0.5">📍 Jl. Pemuda No. 45 • Buka Setiap Hari</p>
                    </div>
                    <span className="bg-primary-yellow text-primary-dark font-black text-xs px-2 py-1 border border-primary-dark">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Featured Products / Metrics */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 border-2 border-primary-dark text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-base">☕</span>
                      <div>
                        <div className="font-black text-slate-800">Kopi Susu Aren Spesial</div>
                        <div className="text-[10px] text-slate-500">Best Seller 200+ Terjual</div>
                      </div>
                    </div>
                    <span className="font-black font-mono text-primary-indigo text-sm">Rp 18.000</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-slate-50 border-2 border-primary-dark text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🥐</span>
                      <div>
                        <div className="font-black text-slate-800">Roti Panggang Cokelat Keju</div>
                        <div className="text-[10px] text-slate-500">Fresh from Oven</div>
                      </div>
                    </div>
                    <span className="font-black font-mono text-primary-indigo text-sm">Rp 15.000</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="bg-emerald-50 border-2 border-emerald-600 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-700 text-lg font-black">💬</span>
                    <div>
                      <div className="text-xs font-black text-emerald-900">Direct WhatsApp Checkout</div>
                      <div className="text-[10px] text-emerald-700">Pesanan langsung masuk ke WA kasir</div>
                    </div>
                  </div>
                  <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-1 border border-emerald-900 shadow-neo-xxs">
                    AKTIF
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
