import { motion } from 'framer-motion'
import { products } from '../../data/home.js'

export default function ProductCatalog() {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            EXPLORE OUR PRODUCTS.
          </h2>
          <p className="text-xl text-slate-400">
            Pilih produk yang sesuai dengan kebutuhanmu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white border-4 border-primary-dark shadow-neo p-8 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all"
            >
              <div className="inline-block bg-primary-indigo text-white font-black text-sm px-3 py-1 mb-4">
                {product.badge}
              </div>
              <h3 className="text-3xl font-black mb-3">{product.title}</h3>
              <p className="text-slate-500 mb-6">{product.description}</p>
              <ul className="space-y-2 mb-8">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-primary-indigo shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={product.href}
                className="block text-center bg-primary-dark text-white border-4 border-primary-dark px-8 py-3 font-black uppercase shadow-neo hover:shadow-neo-xxs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                {product.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
