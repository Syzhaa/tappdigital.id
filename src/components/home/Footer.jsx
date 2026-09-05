import { footerLinks } from '../../data/home.js'

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t-4 border-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-black uppercase tracking-tight text-3xl mb-4">
              TAPPDIGITAL<span className="text-primary-indigo">.ID</span>
            </div>
            <p className="text-slate-400 font-medium">
              Solusi produk digital, website, undangan kustom, dan akun hemat untuk kemudahan aktivitas harianmu.
            </p>
          </div>

          {/* Navigasi Produk */}
          <div>
            <h4 className="font-black uppercase tracking-wider mb-6 text-sm text-primary-yellow">Navigasi</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-yellow transition-colors font-medium text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h4 className="font-black uppercase tracking-wider mb-6 text-sm text-primary-yellow">Kontak & Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-yellow transition-colors font-medium text-sm flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} TappDigital. Hak Cipta Dilindungi. Dibuat dengan dedikasi penuh.
        </div>
      </div>
    </footer>
  )
}
