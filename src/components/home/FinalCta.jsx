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
          <div className="inline-block bg-white border-2 border-primary-dark px-3 py-1 font-black text-xs uppercase tracking-wider mb-6 shadow-neo-xxs">
            LANGKAH AWAL
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            SIAP WUJUDKAN PRODUK DIGITALMU
            <br />
            <span className="text-primary-indigo">LEBIH CEPAT & HEMAT?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-10 font-bold">
            Konsultasikan kebutuhan website, undangan digital, atau akun premium kamu sekarang juga. Gratis tanpa komitmen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-primary-dark text-white border-4 border-primary-dark px-10 py-5 font-black uppercase shadow-neo hover:shadow-neo-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-base md:text-lg cursor-pointer"
            >
              CHAT WHATSAPP SEKARANG →
            </motion.a>
            <motion.a
              href="/toko"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-white text-primary-dark border-4 border-primary-dark px-10 py-5 font-black uppercase shadow-neo hover:shadow-neo-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-base md:text-lg cursor-pointer"
            >
              LIHAT SEMUA PRODUK
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
