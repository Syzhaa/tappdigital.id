import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCases } from '../../data/home.js'

const visualComponents = {
  umkm: (
    <div className="bg-white border-4 border-primary-dark p-6 shadow-neo">
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-primary-dark/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent-pink border border-primary-dark" />
          <span className="w-3 h-3 rounded-full bg-primary-yellow border border-primary-dark" />
          <span className="w-3 h-3 rounded-full bg-accent-green border border-primary-dark" />
          <span className="font-black text-xs ml-2 tracking-wider">WARUNG_KOPI_POS.APP</span>
        </div>
        <span className="text-[10px] font-black bg-accent-green px-2 py-0.5 border border-primary-dark">LIVE ONLINE</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="border-2 border-primary-dark bg-primary-bg p-3">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Omzet Hari Ini</div>
          <div className="text-xl font-black text-primary-indigo">Rp 2.450.000</div>
          <div className="text-[10px] text-emerald-600 font-bold mt-1">↑ +28% vs kemarin</div>
        </div>
        <div className="border-2 border-primary-dark bg-primary-bg p-3">
          <div className="text-[11px] font-bold text-slate-500 uppercase">Pesanan Web</div>
          <div className="text-xl font-black text-primary-dark">34 Order</div>
          <div className="text-[10px] text-primary-indigo font-bold mt-1">Otomatis Masuk WA</div>
        </div>
      </div>

      <div className="border-2 border-primary-dark p-3 space-y-2 bg-white">
        <div className="flex justify-between items-center text-xs font-bold">
          <span>Katalog Produk Aktif</span>
          <span className="bg-primary-yellow px-2 py-0.5 border border-primary-dark text-[10px]">12 Menu</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs p-1.5 bg-slate-50 border border-slate-200">
            <span>☕ Kopi Susu Aren Gula Aren</span>
            <span className="font-black">Rp 18.000</span>
          </div>
          <div className="flex items-center justify-between text-xs p-1.5 bg-slate-50 border border-slate-200">
            <span>🥐 Croissant Butter Premium</span>
            <span className="font-black">Rp 22.000</span>
          </div>
        </div>
      </div>
    </div>
  ),
  wedding: (
    <div className="bg-white border-4 border-primary-dark p-6 shadow-neo">
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-primary-dark/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent-pink border border-primary-dark" />
          <span className="w-3 h-3 rounded-full bg-accent-purple border border-primary-dark" />
          <span className="font-black text-xs tracking-wider">THE WEDDING OF SARAH & RIZKY</span>
        </div>
        <span className="text-[10px] font-black bg-accent-pink px-2 py-0.5 border border-primary-dark">CUSTOM THEME</span>
      </div>

      <div className="border-2 border-primary-dark p-4 bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 text-center mb-4">
        <div className="text-[11px] uppercase tracking-widest font-black text-slate-600">Save Our Date</div>
        <div className="text-2xl font-black my-1 text-primary-dark font-serif">Sarah & Rizky</div>
        <div className="text-xs font-bold text-slate-600">Sabtu, 24 Oktober 2026 • Grand Ballroom</div>
        <div className="mt-3 inline-flex items-center gap-1.5 bg-white border border-primary-dark px-3 py-1 text-[11px] font-black shadow-neo-xxs">
          <span>📍 Buka Google Maps</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="border-2 border-primary-dark p-2 bg-white">
          <div className="font-black text-primary-indigo text-base">320</div>
          <div className="text-[10px] font-bold text-slate-500">RSVP Hadir</div>
        </div>
        <div className="border-2 border-primary-dark p-2 bg-white">
          <div className="font-black text-accent-pink text-base">48</div>
          <div className="text-[10px] font-bold text-slate-500">Ucapan Doa</div>
        </div>
        <div className="border-2 border-primary-dark p-2 bg-white">
          <div className="font-black text-emerald-600 text-base">100%</div>
          <div className="text-[10px] font-bold text-slate-500">Mobile Fast</div>
        </div>
      </div>
    </div>
  ),
  personal: (
    <div className="bg-white border-4 border-primary-dark p-6 shadow-neo">
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-primary-dark/20">
        <div className="font-black text-xs tracking-wider">HUB LANGGANAN PREMIUM</div>
        <span className="text-[10px] font-black bg-primary-yellow px-2 py-0.5 border border-primary-dark">HEMAT S/D 80%</span>
      </div>

      <div className="space-y-2.5 mb-4">
        <div className="flex items-center justify-between border-2 border-primary-dark p-2.5 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-black text-sm">NETFLIX</span>
            <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.5 font-bold">4K UHD</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-primary-yellow">Rp 28.000</span>
            <span className="text-[10px] text-slate-400 line-through ml-1.5">Rp 186rb</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-2 border-primary-dark p-2.5 bg-emerald-950 text-white">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-black text-sm">SPOTIFY</span>
            <span className="text-[10px] bg-emerald-400/20 text-emerald-300 px-1.5 py-0.5 font-bold">Individual</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-emerald-300">Rp 15.000</span>
            <span className="text-[10px] text-slate-400 line-through ml-1.5">Rp 55rb</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-2 border-primary-dark p-2.5 bg-cyan-950 text-white">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-black text-sm">CANVA PRO</span>
            <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 font-bold">Full Access</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-cyan-300">Rp 20.000</span>
            <span className="text-[10px] text-slate-400 line-through ml-1.5">Rp 95rb</span>
          </div>
        </div>
      </div>

      <div className="border-2 border-dashed border-primary-dark/40 p-2.5 text-center bg-slate-50">
        <span className="text-xs font-bold text-slate-600">⚡ Garansi ganti akun aktif 24/7 & anti hold</span>
      </div>
    </div>
  ),
  student: (
    <div className="bg-white border-4 border-primary-dark p-6 shadow-neo">
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-primary-dark/20">
        <div className="font-black text-xs tracking-wider">STUDENT & WORK TOOLKIT</div>
        <span className="text-[10px] font-black bg-accent-cyan px-2 py-0.5 border border-primary-dark">BOOST PRODUCTIVITY</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="border-2 border-primary-dark p-3 bg-accent-purple/20">
          <div className="font-black text-xs mb-1">🤖 AI Assistant</div>
          <div className="text-[11px] text-slate-600">ChatGPT Plus & Claude Pro buat riset skripsi/tugas</div>
        </div>
        <div className="border-2 border-primary-dark p-3 bg-accent-cyan/20">
          <div className="font-black text-xs mb-1">📊 Design & Slides</div>
          <div className="text-[11px] text-slate-600">Template premium & asset grafis tanpa watermark</div>
        </div>
      </div>

      <div className="border-2 border-primary-dark p-3 bg-white space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-black">Budget Mahasiswa</span>
          <span className="font-black text-primary-indigo">Mulai Rp 10.000-an</span>
        </div>
        <div className="w-full bg-slate-200 h-2 border border-primary-dark">
          <div className="bg-primary-indigo h-full w-4/5" />
        </div>
        <div className="flex justify-between text-[10px] font-bold text-slate-500">
          <span>Hemat uang jajan</span>
          <span>Output tugas maksimal</span>
        </div>
      </div>
    </div>
  )
}

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0]?.id || 'umkm')

  return (
    <section className="py-24 bg-primary-bg border-b-4 border-primary-dark relative overflow-hidden" id="use-cases">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-block bg-primary-yellow border-2 border-primary-dark px-3 py-1 font-black text-xs uppercase tracking-wider mb-4 shadow-neo-xxs">
            SOLUSI FLEKSIBEL
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            SATU EKOSISTEM.<br />
            <span className="text-primary-indigo">BANYAK CARA KERJA.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Dari kebutuhan bisnis UMKM, momen sakral pernikahan, sampai produktivitas harian — kami siapkan solusi digital yang presisi dan ramah kantong.
          </p>
        </motion.div>

        {/* Tab Buttons (Interactive Switcher) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {useCases.map((uc) => {
            const isActive = activeTab === uc.id
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`px-5 py-3 font-black text-xs md:text-sm uppercase tracking-wide border-3 border-primary-dark transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-primary-indigo text-white shadow-neo translate-x-[-2px] translate-y-[-2px]'
                    : 'bg-white text-primary-dark hover:bg-slate-100 hover:shadow-neo-xs'
                }`}
              >
                {uc.title}
              </button>
            )
          })}
        </div>

        {/* Dynamic Display Card (Interactive & Responsive) */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {useCases.map((uc) => {
              if (uc.id !== activeTab) return null
              return (
                <motion.div
                  key={uc.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border-4 border-primary-dark p-6 md:p-10 shadow-neo grid md:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Context & Copy */}
                  <div className="md:col-span-6 space-y-5">
                    <div className="inline-block bg-slate-100 border-2 border-primary-dark px-3 py-1 text-xs font-black uppercase text-primary-indigo">
                      {uc.title}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black leading-tight text-primary-dark">
                      {uc.headline}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {uc.description}
                    </p>
                    
                    <div className="pt-2 flex flex-wrap gap-3">
                      <a
                        href="/toko"
                        className="inline-block bg-primary-yellow text-primary-dark border-3 border-primary-dark px-6 py-3 font-black text-sm uppercase shadow-neo-xxs hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      >
                        Lihat Solusi Ini →
                      </a>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-white text-primary-dark border-3 border-primary-dark px-5 py-3 font-black text-sm uppercase hover:bg-slate-100 transition-all"
                      >
                        Konsultasi Gratis
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Realistic Visual */}
                  <div className="md:col-span-6">
                    {visualComponents[uc.id]}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Mini Highlights Footer in the section */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-primary-dark p-3 text-center shadow-neo-xxs">
            <div className="font-black text-lg text-primary-indigo">100%</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Garansi & Revisi</div>
          </div>
          <div className="bg-white border-2 border-primary-dark p-3 text-center shadow-neo-xxs">
            <div className="font-black text-lg text-emerald-600">Fast</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Proses Kilat</div>
          </div>
          <div className="bg-white border-2 border-primary-dark p-3 text-center shadow-neo-xxs">
            <div className="font-black text-lg text-accent-pink">Custom</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Sesuai Kebutuhan</div>
          </div>
          <div className="bg-white border-2 border-primary-dark p-3 text-center shadow-neo-xxs">
            <div className="font-black text-lg text-amber-500">Hemat</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Budget Friendly</div>
          </div>
        </div>

      </div>
    </section>
  )
}
