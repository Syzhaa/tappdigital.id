import { motion } from 'framer-motion'
import { products } from '../data/home.js'

export default function Toko() {
  return (
    <div className="min-h-screen bg-primary-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-primary-yellow border-2 border-primary-dark px-3 py-1 font-mono font-bold text-xs uppercase tracking-wider mb-4 shadow-neo-xxs">
            KATALOG RESMI
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 font-display tracking-tight text-primary-dark">
            KATALOG & TOKO PRODUK
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Pilih produk digital berkualitas dari TappDigital. Konsultasikan langsung via WhatsApp dengan tim kami untuk pemesanan cepat dan mudah.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white border-3 border-primary-dark p-7 shadow-neo hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-xs transition-all flex flex-col justify-between ${
                i === 0 ? 'ring-4 ring-primary-yellow' : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-block font-mono font-bold text-[11px] px-2.5 py-1 border-2 border-primary-dark uppercase ${
                    i === 0 ? 'bg-primary-yellow text-primary-dark' : 'bg-accent-purple text-primary-dark'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-black mb-3 font-display text-primary-dark leading-snug">
                  {product.title}
                </h2>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
                  {product.description}
                </p>

                <div className="border-t-2 border-dashed border-slate-300 pt-4 mb-6">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 font-mono">
                    Termasuk Layanan:
                  </div>
                  <ul className="space-y-2.5">
                    {product.features.map((f) => (
                      <li key={f} className="flex gap-2.5 items-start text-xs font-bold text-slate-700">
                        <span className="text-emerald-600 text-sm leading-none shrink-0">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/6281234567890?text=Halo%20TappDigital,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noreferrer"
                className={`block text-center border-3 border-primary-dark px-6 py-3.5 font-black uppercase text-xs tracking-wider shadow-neo-xxs hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-display ${
                  i === 0
                    ? 'bg-primary-indigo text-white hover:bg-indigo-700'
                    : 'bg-primary-yellow text-primary-dark hover:bg-amber-400'
                }`}
              >
                Pesan via WhatsApp →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
