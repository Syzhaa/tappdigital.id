import { useState, useEffect, useCallback } from 'react'
import { navigation } from '../../data/home.js'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')
  const location = useLocation()

  const determineActiveSection = useCallback(() => {
    if (location.pathname !== '/') return ''

    const scrollY = window.scrollY + 140
    const sections = ['faq', 'harga', 'fitur', 'produk']

    for (const sec of sections) {
      const el = document.getElementById(sec)
      if (el && scrollY >= el.offsetTop) {
        return sec
      }
    }

    return 'beranda'
  }, [location.pathname])

  // Scroll listener for section spy
  useEffect(() => {
    if (location.pathname !== '/') return

    const handleScroll = () => {
      const current = determineActiveSection()
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname, determineActiveSection])

  const handleNavClick = (item) => {
    setMobileOpen(false)
    if (item.isHash && location.pathname === '/') {
      const id = item.href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const isLinkActive = (item) => {
    if (item.href === '/') {
      return location.pathname === '/' && activeSection === 'beranda'
    }
    if (item.isHash) {
      const sectionId = item.href.replace('/#', '')
      return location.pathname === '/' && activeSection === sectionId
    }
    return location.pathname === item.href
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-primary-bg/95 backdrop-blur-md border-b-3 border-primary-dark transition-all">
        <div className="max-w-7xl mx-auto px-6 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1.5 group">
              <span className="font-display font-black uppercase tracking-tight text-2xl text-primary-dark">
                TAPPDIGITAL<span className="text-primary-indigo">.ID</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navigation.map((item) => {
                const active = isLinkActive(item)
                return item.isHash && location.pathname === '/' ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                      active
                        ? 'bg-primary-yellow text-primary-dark border-2 border-primary-dark font-black shadow-neo-xxs'
                        : 'text-slate-700 hover:text-primary-indigo hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                      active
                        ? 'bg-primary-yellow text-primary-dark border-2 border-primary-dark font-black shadow-neo-xxs'
                        : 'text-slate-700 hover:text-primary-indigo hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/toko"
                className="border-2 border-primary-dark bg-white px-4 py-2 font-mono font-bold text-xs uppercase hover:bg-primary-yellow hover:shadow-neo-xs hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all"
              >
                KATALOG
              </Link>
              <a
                href="https://wa.me/6281234567890?text=Halo%20TappDigital,%20saya%20mau%20konsultasi%20pembuatan%20website/produk%20digital"
                target="_blank"
                rel="noreferrer"
                className="bg-primary-indigo text-white border-2 border-primary-dark px-4 py-2 font-mono font-black text-xs uppercase shadow-neo-xxs hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                HUBUNGI KAMI
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden border-2 border-primary-dark p-2 bg-white shadow-neo-xxs cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              <div className="w-5 h-0.5 bg-primary-dark mb-1"></div>
              <div className="w-5 h-0.5 bg-primary-dark mb-1"></div>
              <div className="w-5 h-0.5 bg-primary-dark"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="md:hidden bg-primary-bg border-b-3 border-primary-dark overflow-hidden shadow-neo"
          >
            <div className="px-6 py-5">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const active = isLinkActive(item)
                  return item.isHash && location.pathname === '/' ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className={`text-left py-2.5 px-3 font-bold text-xs uppercase border-b border-primary-dark/10 ${
                        active ? 'bg-primary-yellow font-black border-2 border-primary-dark' : 'text-slate-800'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => handleNavClick(item)}
                      className={`py-2.5 px-3 font-bold text-xs uppercase border-b border-primary-dark/10 ${
                        active ? 'bg-primary-yellow font-black border-2 border-primary-dark' : 'text-slate-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="flex flex-col gap-2 pt-3">
                  <Link
                    to="/toko"
                    onClick={() => setMobileOpen(false)}
                    className="border-2 border-primary-dark px-4 py-2.5 font-bold text-xs uppercase text-center bg-white"
                  >
                    KATALOG PRODUK
                  </Link>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20TappDigital,%20saya%20mau%20konsultasi%20pembuatan%20website/produk%20digital"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary-indigo text-white border-2 border-primary-dark px-4 py-2.5 font-black text-xs uppercase shadow-neo-xxs text-center"
                  >
                    CHAT WHATSAPP RESMI
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
