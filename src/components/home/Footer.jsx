import { footerLinks } from '../../data/home.js'

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t-4 border-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-black uppercase tracking-tight text-3xl mb-4">
              TAPPDIGITAL
            </div>
            <p className="text-slate-400">
              Digital products and tools for modern work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black uppercase tracking-wide mb-6 text-sm">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black uppercase tracking-wide mb-6 text-sm">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-dark/30 pt-8 text-center text-slate-500 text-sm">
          © 2026 TappDigital. Built with raw energy.
        </div>
      </div>
    </footer>
  )
}
