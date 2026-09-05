import { motion } from 'framer-motion'
import { pricing } from '../../data/home.js'

export default function PricingSection() {
  return (
    <section className="py-24 bg-primary-bg border-b-4 border-primary-dark" id="harga">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-yellow border-2 border-primary-dark px-3 py-1 font-mono font-bold text-xs uppercase tracking-wider mb-4 shadow-neo-xxs">
            PAKET & HARGA
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 font-display tracking-tight">
            PILIH SESUAI KEBUTUHAN.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto font-medium">
            Investasi hemat dengan dampak nyata untuk bisnis dan aktivitasmu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border-3 border-primary-dark p-7 shadow-neo hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-xs transition-all flex flex-col justify-between ${
                plan.highlighted 
                  ? 'bg-primary-indigo text-white shadow-neo-lg scale-105 z-10' 
                  : 'bg-white text-primary-dark'
              }`}
            >
              <div>
                {plan.badge && (
                  <div className={`inline-block font-mono font-black text-[10px] px-2.5 py-1 mb-4 uppercase border-2 ${
                    plan.highlighted 
                      ? 'bg-primary-yellow text-primary-dark border-primary-dark shadow-neo-xxs' 
                      : 'bg-primary-dark text-white border-primary-dark'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-black mb-2 font-display uppercase tracking-wide">
                  {plan.name}
                </h3>
                <div className={`text-3xl font-black mb-6 font-mono tracking-tight ${
                  plan.highlighted ? 'text-primary-yellow' : 'text-primary-indigo'
                }`}>
                  {plan.price}
                </div>

                <div className={`border-t-2 border-dashed ${plan.highlighted ? 'border-indigo-400' : 'border-slate-200'} pt-4 mb-6`}>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5 items-start text-xs sm:text-sm font-semibold">
                        <span className={`shrink-0 text-sm ${plan.highlighted ? 'text-primary-yellow' : 'text-emerald-600'}`}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="/toko"
                className={`block text-center border-3 border-primary-dark px-6 py-3.5 font-black uppercase text-xs tracking-wider shadow-neo-xxs hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-display ${
                  plan.highlighted 
                    ? 'bg-primary-yellow text-primary-dark hover:bg-amber-400' 
                    : 'bg-primary-dark text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
