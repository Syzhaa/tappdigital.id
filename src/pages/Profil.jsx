import { motion } from 'framer-motion'
import { useEffect } from 'react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

function Eyebrow({ children }) {
  return (
    <p className="font-black uppercase tracking-widest text-sm text-primary-indigo mb-4">
      {children}
    </p>
  )
}

function SectionHeading({ number, eyebrow, title, desc }) {
  return (
    <motion.div {...fadeUp} className="mb-14">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-6xl md:text-7xl font-black text-primary-dark/10">{number}</span>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-5">
        {title}
      </h2>
      {desc && <p className="max-w-2xl text-lg text-slate-600">{desc}</p>}
    </motion.div>
  )
}

function Card({ children, className = '', ...rest }) {
  return (
    <motion.div
      {...fadeUp}
      {...rest}
      className={`bg-white border-4 border-primary-dark shadow-neo-sm hover:shadow-neo hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const missions = [
  {
    title: 'Democratize Web Access',
    desc: 'Sarana publikasi web yang cepat dan siap pakai tanpa keahlian coding dari sisi pengguna.',
  },
  {
    title: 'Empower Local Business',
    desc: 'Akselerasi transformasi digital bisnis lokal melalui website cepat, responsif, dan terintegrasi.',
  },
  {
    title: 'Improve Digital Productivity',
    desc: 'Tools dan layanan digital untuk mahasiswa, creator, profesional, dan pengguna umum.',
  },
  {
    title: 'Build Reliable Infrastructure',
    desc: 'Performa tinggi, keamanan sejak awal, dan infrastruktur yang stabil.',
  },
]

const values = [
  {
    title: 'Simplicity by Design',
    desc: 'Mengurangi kompleksitas visual dan teknis tanpa mengorbankan fungsi utama.',
  },
  {
    title: 'Speed & Efficiency',
    desc: 'Sistem yang cepat, ringan, responsif, dan efisien.',
  },
  {
    title: 'Transparency & Integrity',
    desc: 'Alur kerja jelas dan bertanggung jawab terhadap data pengguna.',
  },
  {
    title: 'Reliability',
    desc: 'Sistem yang dapat diandalkan dalam penggunaan nyata.',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Produk berkembang mengikuti kebutuhan pengguna dan teknologi.',
  },
]

const ecosystem = [
  {
    title: 'DIGITAL PRODUCTS',
    items: ['SaaS / Platforms', 'Event Products', 'Web Applications'],
    accent: 'text-accent-purple',
  },
  {
    title: 'WEB SOLUTIONS',
    items: ['Custom Web', 'Landing Page', 'Web Systems'],
    accent: 'text-accent-cyan',
  },
  {
    title: 'DIGITAL TOOLS',
    items: ['Extensions', 'Productivity', 'Utilities'],
    accent: 'text-accent-green',
  },
]

const webSolutions = [
  { title: 'High-Conversion Landing Page', desc: 'Struktur informasi dirancang agar pengunjung mengambil tindakan yang jelas.' },
  { title: 'Business Website', desc: 'Website profesional untuk perusahaan, UMKM, organisasi, dan personal brand.' },
  { title: 'Custom Web Application', desc: 'Sistem web sesuai kebutuhan proses bisnis Anda.' },
  { title: 'WhatsApp Integration', desc: 'Integrasi form dan alur pemesanan dengan WhatsApp.' },
  { title: 'SEO Baseline', desc: 'Struktur teknis dasar siap dioptimalkan untuk mesin pencari.' },
  { title: 'Mobile Optimization', desc: 'Pengalaman mobile-first di semua ukuran layar.' },
  { title: 'Deployment', desc: 'Setup domain, SSL, server, dan deployment end-to-end.' },
]

const devProcess = [
  { num: '01', title: 'Discovery', desc: 'Memahami kebutuhan, masalah, target pengguna, dan tujuan produk.' },
  { num: '02', title: 'Research & Planning', desc: 'Requirement, struktur sistem, prioritas fitur, technical approach.' },
  { num: '03', title: 'UX / UI Design', desc: 'Pengalaman dan interface yang mudah digunakan.' },
  { num: '04', title: 'Development', desc: 'Implementasi frontend, backend, database, API, dan integrasi.' },
  { num: '05', title: 'Quality Assurance', desc: 'Fungsi, responsive, compatibility, security baseline, performance.' },
  { num: '06', title: 'Deployment', desc: 'Infrastructure, domain, SSL, DNS, monitoring.' },
  { num: '07', title: 'Support & Improvement', desc: 'Bug fix, maintenance, monitoring, pengembangan lanjutan.' },
]

const techStack = [
  { layer: 'Frontend', items: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { layer: 'Backend', items: ['Node.js', 'Python'] },
  { layer: 'Infrastructure', items: ['Linux', 'Nginx', 'VPS', 'Cloudflare'] },
  { layer: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis'] },
]

const infraFlow = ['USERS', 'CLOUDFLARE — DNS / SECURITY', 'NGINX / PROXY', 'APPLICATION SERVER']
const infraLeaf = ['DATABASE', 'STORAGE', 'SERVICES', 'BACKUP']

const securityLayers = [
  {
    title: 'Application Security',
    items: ['Input validation', 'Sanitization', 'Authentication', 'Authorization', 'Secure session'],
  },
  {
    title: 'Infrastructure Security',
    items: ['SSL/TLS', 'Firewall', 'Cloudflare protection', 'Server hardening', 'Access control'],
  },
  {
    title: 'Data Protection',
    items: ['Data minimization', 'Controlled access', 'Secure storage', 'Backup'],
  },
  {
    title: 'Operational Security',
    items: ['Dependency updates', 'Logging', 'Monitoring', 'Incident response'],
  },
]

const quality = [
  { title: 'Fast', desc: 'Resource yang tidak diperlukan dikurangi.', bg: 'bg-accent-cyan' },
  { title: 'Responsive', desc: 'Optimal di mobile, tablet, desktop.', bg: 'bg-white' },
  { title: 'Accessible', desc: 'Interface mudah dipahami dan digunakan.', bg: 'bg-white' },
  { title: 'SEO-Ready', desc: 'HTML, metadata, performance baseline.', bg: 'bg-accent-green' },
  { title: 'Tested', desc: 'Pengujian sebelum deployment.', bg: 'bg-white' },
]

const partnerships = [
  { title: 'Technology Partnership', desc: 'Pengembangan dan integrasi teknologi.', bg: 'bg-white' },
  { title: 'Development Partnership', desc: 'Kolaborasi pengembangan produk digital.', bg: 'bg-white' },
  { title: 'White-label Partnership', desc: 'Produk white-label apabila tersedia.', bg: 'bg-accent-purple' },
  { title: 'Agency Partnership', desc: 'Kolaborasi dengan agency dan digital consultant.', bg: 'bg-white' },
  { title: 'Business Partnership', desc: 'Kolaborasi produk dan layanan.', bg: 'bg-white' },
  { title: 'Institutional Partnership', desc: 'Organisasi, pendidikan, komunitas, institusi.', bg: 'bg-accent-pink' },
]

const roadmap = [
  { phase: 'Today', items: ['Web Solutions', 'Digital Products', 'Digital Tools'] },
  { phase: 'Next', items: ['SaaS Platforms', 'Productized Services', 'Automation'] },
  { phase: 'Expansion', items: ['Business Platforms', 'Education Technology', 'Product Ecosystem'] },
  { phase: 'Long Term', items: ['Integrated Digital Ecosystem'] },
]

export default function Profil() {
  useEffect(() => {
    document.title = 'Tentang Kami — TappDigital'
  }, [])

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="bg-primary-bg border-b-4 border-primary-dark">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div {...fadeUp}>
            <Eyebrow>TappDigital.id — Indonesia</Eyebrow>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl">
              Building Digital Products for a{' '}
              <span className="text-primary-indigo">Simpler Digital World.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 max-w-2xl font-medium">
              TappDigital adalah studio produk digital modern — riset, pengembangan,
              dan publikasi platform web inovatif di Indonesia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontak"
                className="bg-primary-indigo text-white border-4 border-primary-dark px-8 py-4 font-black uppercase shadow-neo hover:shadow-neo-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                HUBUNGI KAMI
              </a>
              <a
                href="/#fitur"
                className="border-4 border-primary-dark px-8 py-4 font-black uppercase hover:bg-primary-yellow transition-colors"
              >
                LIHAT LAYANAN
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="01"
            eyebrow="About Us"
            title="Studio Produk Digital Modern"
            desc="TappDigital berfokus pada penghapusan kompleksitas teknis bagi pengguna akhir — individu, UMKM, mahasiswa, creator, profesional, dan organisasi dapat memanfaatkan ekosistem digital secara lebih mudah dan efisien."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Digital Products', d: 'Produk digital yang dapat digunakan secara luas.' },
              { t: 'Web Solutions', d: 'Website dan sistem web sesuai kebutuhan bisnis.' },
              { t: 'Digital Tools', d: 'Tools dan extension untuk produktivitas.' },
            ].map((c, i) => (
              <Card key={c.t}>
                <span className={`font-black ${['text-accent-purple', 'text-accent-cyan', 'text-accent-green'][i]}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-black uppercase mt-2 mb-3">{c.t}</h3>
                <p className="text-slate-600 font-medium">{c.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section id="visi" className="py-24 border-y-4 border-primary-dark bg-accent-pink/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="02"
            eyebrow="Vision & Mission"
            title="Arah Jelas. Eksekusi Terukur."
          />
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <Eyebrow>Our Vision</Eyebrow>
              <p className="text-lg leading-relaxed font-medium">
                Menjadi studio produk digital dan penyedia solusi web terdepan di
                Indonesia yang dikenal atas keandalan sistem, kebebasan dari
                arsitektur rumit (anti-bloatware), serta aksesibilitas harga yang
                mendukung inklusivitas digital nasional.
              </p>
              <p className="mt-8 text-sm italic border-l-4 border-primary-indigo pl-4 text-slate-600">
                "Technology should solve problems, not create new complexity."
              </p>
            </Card>
            <div className="grid sm:grid-cols-2 gap-6">
              {missions.map((m, i) => (
                <Card key={m.title}>
                  <span className="text-primary-indigo font-black">M{i + 1}</span>
                  <h4 className="font-black uppercase mt-2 mb-2 leading-snug">{m.title}</h4>
                  <p className="text-sm text-slate-600 font-medium">{m.desc}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="!p-6">
                <h4 className="font-black text-xs uppercase tracking-wide mb-2">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="03"
            eyebrow="Our Digital Ecosystem"
            title="One Studio. Multiple Experiences."
            desc="Berbagai bentuk produk dan solusi digital dengan satu tujuan: membuat teknologi lebih mudah digunakan dalam kehidupan nyata."
          />
          <motion.div {...fadeUp} className="max-w-5xl mx-auto">
            {/* Hub */}
            <div className="flex justify-center">
              <div className="bg-primary-dark text-white font-black text-xl uppercase px-10 py-5 shadow-neo">
                TAPPDIGITAL
              </div>
            </div>

            {/* Connector: hub -> rail -> 3 stems (desktop) */}
            <div className="hidden md:block relative h-10" aria-hidden="true">
              <span className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-1 bg-primary-dark" />
              <span className="absolute top-4 left-[16.66%] right-[16.66%] h-1 bg-primary-dark" />
              {[ '16.66%', '50%', '83.33%' ].map((x) => (
                <span
                  key={x}
                  className="absolute -translate-x-1/2 top-4 h-6 w-1 bg-primary-dark"
                  style={{ left: x }}
                />
              ))}
            </div>
            {/* Connector mobile */}
            <div className="md:hidden w-1 h-6 bg-primary-dark mx-auto" aria-hidden="true" />

            {/* Pillars */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {ecosystem.map((e, i) => (
                <div key={e.title} className="bg-white border-4 border-primary-dark shadow-neo-sm p-7">
                  <span className={`font-black ${e.accent}`}>{String(i + 1).padStart(2, '0')}</span>
                  <h4 className={`font-black uppercase tracking-wide text-base mt-1 mb-4 ${e.accent}`}>{e.title}</h4>
                  <ul className="space-y-2.5">
                    {e.items.map((it) => (
                      <li key={it} className="text-sm font-medium flex items-start gap-2 pb-2.5 border-b-2 border-primary-dark/10 last:border-0 last:pb-0">
                        <span className="font-black">—</span> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Users */}
            <div className="mt-8 md:mt-10 bg-primary-indigo text-white font-black uppercase px-8 py-5 shadow-neo text-sm tracking-wide text-center leading-relaxed">
              Digital Users — Individuals · UMKM · Creator · Student · Professional · Organization
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WEB SOLUTIONS ===== */}
      <section id="solusi" className="py-24 border-y-4 border-primary-dark bg-accent-cyan/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="04"
            eyebrow="Web Solutions"
            title="Custom Web & Landing Page."
            desc="TappDigital membantu bisnis dan organisasi membangun presence digital yang cepat, profesional, dan mudah dikembangkan."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webSolutions.map((s, i) => (
              <Card key={s.title} className={i === 0 ? 'bg-accent-purple' : ''}>
                <span className="font-black">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="font-black uppercase mt-2 mb-2 leading-snug">{s.title}</h4>
                <p className="text-sm text-slate-700 font-medium">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEVELOPMENT SYSTEM ===== */}
      <section id="proses" className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="05"
            eyebrow="How We Work"
            title="Our Development System"
          />
          <ol className="relative border-l-4 border-primary-dark ml-4 space-y-8">
            {devProcess.map((p) => (
              <motion.li key={p.num} {...fadeUp} className="ml-8 relative">
                <span className="absolute -left-[52px] top-0 w-9 h-9 bg-primary-indigo text-white text-xs font-black border-2 border-primary-dark flex items-center justify-center">
                  {p.num}
                </span>
                <h4 className="font-black uppercase text-lg">{p.title}</h4>
                <p className="text-slate-600 mt-1 max-w-2xl font-medium">{p.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TECHNOLOGY + INFRASTRUCTURE ===== */}
      <section className="py-24 bg-primary-dark text-white border-y-4 border-primary-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-14">
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-6xl md:text-7xl font-black text-white/15">06</span>
              <Eyebrow>Technology & Infrastructure</Eyebrow>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-5">
              Built for Reliability.
            </h2>
            <p className="max-w-2xl text-lg text-slate-400">
              Technology should serve the product, not become the product.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              {techStack.map((t) => (
                <div key={t.layer} className="border-2 border-white/20 bg-white/5 p-6">
                  <h4 className="text-accent-cyan font-black uppercase tracking-wide text-sm mb-4">{t.layer}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t.items.map((it) => (
                      <span key={it} className="text-sm font-bold bg-white/10 border border-white/10 rounded-md px-3 py-1.5">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              {infraFlow.map((f, i) => (
                <div key={f} className="w-full flex flex-col items-center">
                  <div className={`w-full max-w-sm px-5 py-3.5 text-center text-sm font-black uppercase tracking-wide border-2 ${
                    i === 0 ? 'bg-primary-yellow text-primary-dark border-primary-dark' : 'bg-white/5 border-white/25'
                  }`}>
                    {f}
                  </div>
                  {i === infraFlow.length - 1 ? (
                    <>
                      <span className="my-1 text-white/40 font-black">▼</span>
                      <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
                        {infraLeaf.map((l) => (
                          <div key={l} className="bg-accent-cyan text-primary-dark px-2 py-2.5 text-center text-[10px] font-black border-2 border-primary-dark">
                            {l}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <span className="my-1 text-white/40 font-black">▼</span>
                  )}
                </div>
              ))}
              <p className="mt-8 text-slate-400 text-sm text-center font-medium">
                High availability · Secure communication · Monitoring · Backup · Controlled access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECURITY ===== */}
      <section id="keamanan" className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="07"
            eyebrow="Security & Privacy"
            title="Security by Design."
            desc="Security bukan fitur tambahan. Dipertimbangkan sejak architecture, development, deployment, sampai maintenance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {securityLayers.map((s, i) => (
              <Card key={s.title} className={[ 'bg-accent-green/60', 'bg-white', 'bg-white', 'bg-accent-cyan/50' ][i]}>
                <h4 className="font-black text-sm uppercase tracking-wide mb-4 pb-3 border-b-2 border-primary-dark/20">{s.title}</h4>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-slate-700 font-medium flex items-start gap-2">
                      <span className="font-black">✓</span> {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <motion.p {...fadeUp} className="max-w-3xl text-xl font-bold border-l-4 border-primary-indigo pl-6">
            TappDigital berkomitmen membangun sistem dengan mempertimbangkan
            keamanan, privasi, dan reliability sebagai bagian dari proses pengembangan.
          </motion.p>
        </div>
      </section>

      {/* ===== QUALITY ===== */}
      <section className="py-24 border-y-4 border-primary-dark bg-accent-green/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="08"
            eyebrow="Quality & Performance"
            title="Built to Perform."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
            {quality.map((q) => (
              <Card key={q.title} className={`${q.bg} !p-6`}>
                <h4 className="font-black uppercase tracking-wide text-sm mb-2">{q.title}</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{q.desc}</p>
              </Card>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-2xl font-black uppercase tracking-tight">
            "A beautiful interface means little if users have to wait for it."
          </motion.p>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section id="roadmap" className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="09"
            eyebrow="Future Roadmap"
            title="Where We Are Going."
            desc="Roadmap menggambarkan arah, bukan janji angka yang belum pasti."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {roadmap.map((r, i) => (
              <Card key={r.phase} className={`${[ 'bg-white', 'bg-white', 'bg-white', 'bg-primary-indigo !text-white' ][i]} !p-7 relative pt-10`}>
                <span className={`absolute -top-4 left-5 text-xs font-black uppercase px-4 py-1.5 border-2 border-primary-dark ${
                  i === roadmap.length - 1 ? 'bg-primary-dark text-white' : 'bg-primary-yellow text-primary-dark'
                }`}>
                  {r.phase}
                </span>
                <ul className={`space-y-2 ${i === roadmap.length - 1 ? 'text-white' : ''}`}>
                  {r.items.map((it) => (
                    <li key={it} className="text-sm font-medium flex items-start gap-2">
                      <span className="font-black">→</span> {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { t: 'Productization', d: 'Solusi custom menjadi produk yang digunakan lebih luas.' },
              { t: 'Automation', d: 'Mengurangi pekerjaan manual melalui automation.' },
              { t: 'Platform', d: 'Platform digital dengan recurring value.' },
              { t: 'Ecosystem', d: 'Produk TappDigital terhubung dalam satu ecosystem.' },
            ].map((s) => (
              <motion.div key={s.t} {...fadeUp} className="border-l-4 border-primary-indigo pl-4">
                <h5 className="font-black uppercase text-sm">{s.t}</h5>
                <p className="text-xs text-slate-600 mt-1 font-medium">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP ===== */}
      <section className="py-24 border-y-4 border-primary-dark bg-accent-purple/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="10"
            eyebrow="Partnership"
            title="Let's Build Together."
            desc="TappDigital terbuka untuk berbagai bentuk kolaborasi."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partnerships.map((p) => (
              <Card key={p.title} className={p.bg}>
                <h4 className="font-black uppercase mb-2 leading-snug">{p.title}</h4>
                <p className="text-sm text-slate-700 font-medium">{p.desc}</p>
              </Card>
            ))}
          </div>
          <motion.blockquote {...fadeUp} className="max-w-3xl text-2xl font-black uppercase tracking-tight leading-snug">
            "Produk digital terbaik lahir dari kolaborasi antara teknologi,
            kebutuhan pengguna, dan pemahaman terhadap masalah nyata."
          </motion.blockquote>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="kontak" className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="11"
            eyebrow="Contact"
            title="Start a Conversation."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <a href="https://wa.me/628593510424" target="_blank" rel="noreferrer" className="group">
              <Card className="h-full">
                <p className="text-primary-indigo text-xs font-black uppercase tracking-wide mb-3">WhatsApp</p>
                <p className="font-black text-lg group-hover:text-primary-indigo transition">+62 859-3510-424</p>
              </Card>
            </a>
            <a href="mailto:hello@tappdigital.id" className="group">
              <Card className="h-full">
                <p className="text-primary-indigo text-xs font-black uppercase tracking-wide mb-3">Email</p>
                <p className="font-black text-lg group-hover:text-primary-indigo transition break-all">hello@tappdigital.id</p>
              </Card>
            </a>
            <a href="https://tappdigital.id" className="group">
              <Card className="h-full">
                <p className="text-primary-indigo text-xs font-black uppercase tracking-wide mb-3">Website</p>
                <p className="font-black text-lg group-hover:text-primary-indigo transition">tappdigital.id</p>
              </Card>
            </a>
          </div>
          <motion.div {...fadeUp} className="mt-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-12">
              Have an idea or<br />
              <span className="text-primary-indigo">a digital product in mind?</span>
              <br />
              LET'S BUILD IT.
            </h2>
            <a
              href="https://wa.me/628593510424"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary-dark text-white border-4 border-primary-dark px-12 py-5 font-black uppercase shadow-neo hover:shadow-neo-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              MULAI SEKARANG
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
