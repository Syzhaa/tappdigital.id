import { useState } from 'react'
import { navigation } from '../../data/home.js'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-primary-bg border-b-4 border-primary-dark">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="font-black uppercase tracking-tight text-2xl">
              TAPPDIGITAL
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium hover:text-primary-indigo transition"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4">
                <button className="border-4 border-primary-dark px-6 py-2 font-black uppercase hover:shadow-neo hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all">
                  LOGIN
                </button>
                <button className="bg-primary-indigo text-white border-4 border-primary-dark px-6 py-2 font-black uppercase shadow-neo hover:shadow-neo-xxs hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                  HUBUNGI KAMI
                </button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden border-4 border-primary-dark p-2"
              aria-label="Buka menu"
            >
              <div className="w-6 h-0.5 bg-primary-dark mb-1"></div>
              <div className="w-6 h-0.5 bg-primary-dark mb-1"></div>
              <div className="w-6 h-0.5 bg-primary-dark"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden bg-primary-bg border-b-4 border-primary-dark overflow-hidden"
          >
            <div className="px-6 py-6">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium py-3 border-b border-primary-dark/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4">
                  <button className="border-4 border-primary-dark px-6 py-3 font-black uppercase text-center">
                    LOGIN
                  </button>
                  <button className="bg-primary-indigo text-white border-4 border-primary-dark px-6 py-3 font-black uppercase shadow-neo text-center">
                    HUBUNGI KAMI
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
