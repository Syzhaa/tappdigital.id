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
            <span className="text-primary-indigo">JADI RAPI & TERATUR.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Terlalu banyak aplikasi dan urusan teknis bikin pusing.
            <br />
            TappDigital hadir menyederhanakan kebutuhan digital kamu dalam satu tempat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* SEBELUMNYA Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-accent-pink border-4 border-primary-dark p-8 shadow-neo"
          >
            <div className="font-black uppercase tracking-wide text-sm mb-4 inline-block bg-primary-dark text-white px-2 py-1">
              SEBELUMNYA
            </div>
            <h3 className="text-3xl font-black mb-4">SERBA RIBET & MAHAL</h3>
            <p className="mb-8 font-medium text-slate-800">
              Biaya langganan resmi mahal.
              <br />
              Bikin website kodingnya rumit.
              <br />
              Revisi desain dibatas-batasi.
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
              <div className="text-center text-sm font-bold">
                <span className="inline-block bg-primary-dark text-white px-3 py-1">Biaya Membengkak</span>
                <span className="ml-2 text-slate-700">Waktu terbuang · Desain kaku · Pengeluaran boros</span>
              </div>
            </div>
          </motion.div>

          {/* SESUDAHNYA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-accent-green border-4 border-primary-dark p-8 shadow-neo"
          >
            <div className="font-black uppercase tracking-wide text-sm mb-4 inline-block bg-primary-dark text-white px-2 py-1">
              SESUDAHNYA BERSAMA KAMI
            </div>
            <h3 className="text-3xl font-black mb-4">HEMAT, CEPAT & PRAKTIS</h3>
            <p className="mb-8 font-medium text-slate-800">
              Tinggal terima beres.
              <br />
              Revisi bebas tanpa batas sampai puas.
              <br />
              Hemat anggaran hingga 80%.
            </p>
            <div className="space-y-4">
              {/* Visual: Clean workspace */}
              <div className="border-2 border-primary-dark p-4 bg-white">
                <div className="flex gap-2 mb-4 items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="text-xs font-black">SOLUSI DIGITAL TERPADU</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-primary-dark p-3 bg-slate-50">
                    <div className="font-black text-xs mb-1">Website UMKM</div>
                    <div className="h-2 bg-accent-purple"></div>
                  </div>
                  <div className="border border-primary-dark p-3 bg-slate-50">
                    <div className="font-black text-xs mb-1">Undangan Acara</div>
                    <div className="h-2 bg-accent-cyan"></div>
                  </div>
                  <div className="border border-primary-dark p-3 bg-slate-50">
                    <div className="font-black text-xs mb-1">Akun Premium</div>
                    <div className="h-2 bg-primary-yellow"></div>
                  </div>
                  <div className="border border-primary-dark p-3 bg-slate-50">
                    <div className="font-black text-xs mb-1">Layanan Bantuan</div>
                    <div className="h-2 bg-primary-indigo"></div>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm font-bold">
                <span className="inline-block bg-primary-dark text-white px-3 py-1">1 Solusi Lengkap</span>
                <span className="ml-2 text-slate-700">Praktis · Murah · Terpercaya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
