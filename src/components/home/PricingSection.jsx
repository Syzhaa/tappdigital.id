import { motion } from 'framer-motion'
import { pricing } from '../../data/home.js'

export default function PricingSection() {
  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            PICK YOUR LEVEL.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`border-4 border-primary-dark p-8 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-xs transition-all ${
                plan.highlighted ? 'bg-accent-purple scale-105 md:scale-105' : 'bg-white'
              }`}
            >
              {plan.badge && (
                <div className="inline-block bg-primary-dark text-white font-black text-xs px-3 py-1 mb-4 uppercase">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-8">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-2 bg-primary-dark shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full border-4 border-primary-dark px-8 py-4 font-black uppercase shadow-neo hover:shadow-neo-xxs hover:translate-x-[3px] hover:translate-y-[3px] transition-all ${
                plan.highlighted ? 'bg-primary-dark text-white' : 'bg-white'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
