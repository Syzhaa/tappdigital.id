import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCases } from '../../data/home.js'

const visuals = {
  developer: (
    <div className="border-4 border-primary-dark bg-primary-dark p-6 font-mono text-green-400">
      <div className="mb-2 text-slate-400 text-sm">terminal</div>
      <div>$ npm run dev</div>
      <div className="text-green-400">▶ ready on localhost:5173</div>
      <div className="mt-4 text-slate-400 text-sm">dashboard</div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="bg-accent-cyan/20 p-2 text-white text-xs">Project A</div>
        <div className="bg-accent-purple/20 p-2 text-white text-xs">Docs</div>
        <div className="bg-primary-indigo/30 p-2 text-white text-xs">Tools</div>
      </div>
    </div>
  ),
  marketer: (
    <div className="border-4 border-primary-dark bg-white p-6">
      <div className="font-black text-sm mb-4">CAMPAIGN BOARD</div>
      <div className="space-y-3">
        <div className="flex gap-3 items-center">
          <div className="w-3 h-3 rounded-full bg-accent-pink"></div>
          <div className="flex-1 h-4 bg-accent-pink/40"></div>
          <span className="text-xs font-black">Content</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-3 h-3 rounded-full bg-accent-cyan"></div>
          <div className="flex-1 h-4 bg-accent-cyan/40"></div>
          <span className="text-xs font-black">Analytics</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-3 h-3 rounded-full bg-primary-yellow"></div>
          <div className="flex-1 h-4 bg-primary-yellow/60"></div>
          <span className="text-xs font-black">Calendar</span>
        </div>
      </div>
    </div>
  ),
  researcher: (
    <div className="border-4 border-primary-dark bg-white p-6">
      <div className="font-black text-sm mb-4">RESEARCH NOTES</div>
      <div className="space-y-2">
        {['Notes', 'Sources', 'Documents', 'References'].map((item) => (
          <div key={item} className="flex gap-3 border border-primary-dark/20 p-2">
            <div className="w-4 h-4 border-2 border-primary-dark flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-indigo"></div>
            </div>
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  business: (
    <div className="border-4 border-primary-dark bg-white p-6">
      <div className="font-black text-sm mb-4">TEAM WORKSPACE</div>
      <div className="grid grid-cols-2 gap-3">
        {['Team', 'Projects', 'Reports', 'Workflow'].map((item) => (
          <div key={item} className="border-2 border-primary-dark p-3 text-center">
            <div className="font-black text-sm">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function UseCases() {
  const [active, setActive] = useState('developer')
  const refs = useRef({})

  useEffect(() => {
    const observers = useCases.map((uc) => {
      const el = refs.current[uc.id]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(uc.id) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black">
            SATU EKOSISTEM.
            <br />
            <span className="text-primary-indigo">BANYAK CARA KERJA.</span>
          </h2>
        </motion.div>

        {/* Desktop: sticky left + scroll right */}
        <div className="hidden md:grid grid-cols-[1fr_1fr] gap-16">
          {/* Sticky Visual */}
          <div className="sticky top-[120px] self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {visuals[active]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scrollable Use Cases */}
          <div className="space-y-32 py-8">
            {useCases.map((uc) => (
              <div
                key={uc.id}
                id={uc.id}
                ref={(el) => (refs.current[uc.id] = el)}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                <div className={`font-black uppercase text-sm mb-2 ${active === uc.id ? 'text-primary-indigo' : 'text-slate-400'} transition-colors`}>
                  {uc.title}
                </div>
                <h3 className="text-4xl font-black mb-6">{uc.headline}</h3>
                <p className="text-lg text-slate-500 max-w-md">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: visual + content alternating */}
        <div className="md:hidden space-y-16">
          {useCases.map((uc) => (
            <div key={uc.id} className="space-y-6">
              {visuals[uc.id]}
              <div>
                <div className="font-black uppercase text-sm mb-2 text-primary-indigo">{uc.title}</div>
                <h3 className="text-3xl font-black mb-4">{uc.headline}</h3>
                <p className="text-slate-500">{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
