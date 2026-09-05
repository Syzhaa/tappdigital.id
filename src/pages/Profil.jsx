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
    title: 'Demokratisasi Akses Web',
    desc: 'Sarana publikasi web yang cepat dan siap pakai tanpa keahlian coding dari sisi pengguna.',
  },
  {
    title: 'Pemberdayaan Bisnis Lokal',
    desc: 'Akselerasi transformasi digital bisnis lokal melalui website cepat, responsif, dan terintegrasi.',
  },
  {
    title: 'Tingkatkan Produktivitas Digital',
    desc: 'Tools dan layanan digital untuk mahasiswa, kreator, profesional, dan pengguna umum.',
  },
  {
    title: 'Bangun Infrastruktur Andal',
    desc: 'Performa tinggi, keamanan sejak awal, dan infrastruktur yang stabil.',
  },
]

const values = [
  {
    title: 'Kesederhanaan Desain',
    desc: 'Mengurangi kompleksitas visual dan teknis tanpa mengorbankan fungsi utama.',
  },
  {
    title: 'Kecepatan & Efisiensi',
    desc: 'Sistem yang cepat, ringan, responsif, dan efisien.',
  },
  {
    title: 'Transparansi & Integritas',
    desc: 'Alur kerja jelas dan bertanggung jawab terhadap data pengguna.',
  },
  {
    title: 'Keandalan',
    desc: 'Sistem yang dapat diandalkan dalam penggunaan nyata.',
  },
  {
    title: 'Pengembangan Berkelanjutan',
    desc: 'Produk berkembang mengikuti kebutuhan pengguna dan teknologi.',
  },
]

const ecosystem = [
  {
    title: 'PRODUK DIGITAL',
    items: ['SaaS / Platform', 'Produk Event', 'Aplikasi Web'],
    accent: 'text-accent-purple',
  },
  {
    title: 'SOLUSI WEB',
    items: ['Web Kustom', 'Landing Page', 'Sistem Web'],
    accent: 'text-accent-cyan',
  },
  {
    title: 'TOOLS DIGITAL',
    items: ['Ekstensi', 'Produktivitas', 'Utilitas'],
    accent: 'text-accent-green',
  },
]

const webSolutions = [
  { title: 'Landing Page Konversi Tinggi', desc: 'Struktur informasi dirancang agar pengunjung mengambil tindakan yang jelas.' },
  { title: 'Website Bisnis & Profil', desc: 'Website profesional untuk perusahaan, UMKM, organisasi, dan personal brand.' },
  { title: 'Aplikasi Web Kustom', desc: 'Sistem web sesuai kebutuhan alur dan proses bisnis Anda.' },
  { title: 'Integrasi WhatsApp', desc: 'Integrasi form, notifikasi, dan alur pemesanan langsung dengan WhatsApp.' },
  { title: 'Fondasi SEO Optimal', desc: 'Struktur teknis dasar siap dioptimalkan untuk mesin pencari.' },
  { title: 'Optimasi Mobile Penuh', desc: 'Pengalaman mobile-first yang mulus di semua ukuran layar.' },
  { title: 'Deployment & Setup', desc: 'Setup domain, SSL, server, dan deployment end-to-end siap pakai.' },
]

const devProcess = [
  { num: '01', title: 'Eksplorasi & Discovery', desc: 'Memahami kebutuhan, masalah, target pengguna, dan tujuan produk.' },
  { num: '02', title: 'Riset & Perencanaan', desc: 'Analisis kebutuhan, struktur sistem, prioritas fitur, dan pendekatan teknis.' },
  { num: '03', title: 'Desain UX / UI', desc: 'Merancang antarmuka dan pengalaman pengguna yang intuitif dan mudah dipakai.' },
  { num: '04', title: 'Pengembangan (Development)', desc: 'Implementasi frontend, backend, database, API, serta integrasi sistem.' },
  { num: '05', title: 'Quality Assurance (QA)', desc: 'Pengujian fungsi, responsivitas, kompatibilitas, keamanan dasar, dan performa.' },
  { num: '06', title: 'Deployment & Rilis', desc: 'Konfigurasi infrastruktur, domain, SSL, DNS, hingga monitoring.' },
  { num: '07', title: 'Dukungan & Pemeliharaan', desc: 'Perbaikan bug, pemeliharaan rutin, monitoring, dan pengembangan lanjutan.' },
]

const techStack = [
  { layer: 'Frontend', items: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { layer: 'Backend', items: ['Node.js', 'Python'] },
  { layer: 'Infrastruktur', items: ['Linux', 'Nginx', 'VPS', 'Cloudflare'] },
  { layer: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis'] },
]

const infraFlow = ['PENGGUNA / USER', 'CLOUDFLARE — DNS & KEAMANAN', 'NGINX / REVERSE PROXY', 'SERVER APLIKASI']
const infraLeaf = ['DATABASE', 'STORAGE', 'SERVICES', 'BACKUP']

const securityLayers = [
  {
    title: 'Keamanan Aplikasi',
    items: ['Validasi input', 'Sanitasi data', 'Autentikasi aman', 'Otorisasi ketat', 'Sesi aman'],
  },
  {
    title: 'Keamanan Infrastruktur',
    items: ['Enkripsi SSL/TLS', 'Firewall', 'Proteksi Cloudflare', 'Hardening server', 'Kontrol akses'],
  },
  {
    title: 'Perlindungan Data',
    items: ['Minimalisasi data', 'Akses terkontrol', 'Penyimpanan aman', 'Backup berkala'],
  },
  {
    title: 'Keamanan Operasional',
    items: ['Pembaruan dependensi', 'Pencatatan log', 'Monitoring aktif', 'Respons insiden'],
  },
]

const quality = [
  { title: 'Cepat & Ringan', desc: 'Resource yang tidak diperlukan dipangkas secara optimal.', bg: 'bg-accent-cyan' },
  { title: 'Responsif', desc: 'Tampilan optimal di perangkat mobile, tablet, dan desktop.', bg: 'bg-white' },
  { title: 'Aksesibel', desc: 'Antarmuka mudah dipahami dan nyaman digunakan siapa saja.', bg: 'bg-white' },
  { title: 'Siap SEO', desc: 'Struktur HTML semantik, metadata lengkap, dan performa cepat.', bg: 'bg-accent-green' },
  { title: 'Teruji', desc: 'Pengujian fungsi dan stabilitas menyeluruh sebelum rilis.', bg: 'bg-white' },
]

const partnerships = [
  { title: 'Kemitraan Teknologi', desc: 'Kolaborasi integrasi dan pengembangan arsitektur teknologi.', bg: 'bg-white' },
  { title: 'Kemitraan Pengembangan', desc: 'Kolaborasi bersama dalam membangun produk digital inovatif.', bg: 'bg-white' },
  { title: 'Kemitraan White-label', desc: 'Penyediaan solusi siap pakai dengan branding mandiri mitra.', bg: 'bg-accent-purple' },
  { title: 'Kemitraan Agensi', desc: 'Kolaborasi teknis bersama agensi kreatif dan konsultan digital.', bg: 'bg-white' },
  { title: 'Kemitraan Bisnis', desc: 'Sinergi produk, distribusi, dan perluasan layanan bersama.', bg: 'bg-white' },
  { title: 'Kemitraan Institusi', desc: 'Dukungan digital untuk organisasi, institusi pendidikan, dan komunitas.', bg: 'bg-accent-pink' },
]

const roadmap = [
  { phase: 'Saat Ini', items: ['Solusi Web', 'Produk Digital', 'Tools Produktivitas'] },
  { phase: 'Berikutnya', items: ['Platform SaaS', 'Layanan Terstandarisasi', 'Otomasi Sistem'] },
  { phase: 'Ekspansi', items: ['Platform Bisnis', 'Teknologi Edukasi', 'Ekosistem Produk'] },
  { phase: 'Jangka Panjang', items: ['Ekosistem Digital Terintegrasi'] },
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
              Membangun Produk Digital untuk{' '}
              <span className="text-primary-indigo">Dunia yang Lebih Simpel.</span>
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
            eyebrow="Tentang Kami"
            title="Studio Produk Digital Modern"
            desc="TappDigital berfokus pada penghapusan kompleksitas teknis bagi pengguna akhir — individu, UMKM, mahasiswa, creator, profesional, dan organisasi dapat memanfaatkan ekosistem digital secara lebih mudah dan efisien."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Produk Digital', d: 'Produk digital yang dapat digunakan secara luas dan siap pakai.' },
              { t: 'Solusi Web', d: 'Website dan sistem web sesuai kebutuhan spesifik bisnis.' },
              { t: 'Tools Digital', d: 'Tools dan ekstensi praktis untuk mendongkrak produktivitas.' },
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
            eyebrow="Visi & Misi"
            title="Arah Jelas. Eksekusi Terukur."
          />
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <Eyebrow>Visi Kami</Eyebrow>
              <p className="text-lg leading-relaxed font-medium">
                Menjadi studio produk digital dan penyedia solusi web terdepan di
                Indonesia yang dikenal atas keandalan sistem, kebebasan dari
                arsitektur rumit (anti-bloatware), serta aksesibilitas harga yang
                mendukung inklusivitas digital nasional.
              </p>
              <p className="mt-8 text-sm italic border-l-4 border-primary-indigo pl-4 text-slate-600">
                "Teknologi hadir untuk menyelesaikan masalah, bukan menciptakan kerumitan baru."
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
            eyebrow="Ekosistem Digital Kami"
            title="Satu Studio. Beragam Pengalaman."
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
              Pengguna Digital — Individu · UMKM · Kreator · Mahasiswa · Profesional · Organisasi
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WEB SOLUTIONS ===== */}
      <section id="solusi" className="py-24 border-y-4 border-primary-dark bg-accent-cyan/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="04"
            eyebrow="Solusi Web"
            title="Web Kustom & Landing Page"
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
            eyebrow="Alur Kerja Kami"
            title="Sistem Pengembangan Produk"
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
              <Eyebrow>Teknologi & Infrastruktur</Eyebrow>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-5">
              Dibangun untuk Keandalan Maksimal.
            </h2>
            <p className="max-w-2xl text-lg text-slate-400">
              Teknologi harus melayani produk dan solusi, bukan menjadi beban kerumitan.
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
                Ketersediaan Tinggi (HA) · Komunikasi Terenkripsi · Monitoring · Backup · Kontrol Akses Ketat
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
            eyebrow="Keamanan & Privasi"
            title="Keamanan Sejak Awal Desain"
            desc="Keamanan bukan fitur tambahan. Dipertimbangkan sejak perancangan arsitektur, pengembangan, deployment, hingga pemeliharaan berkala."
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
            TappDigital berkomitmen membangun sistem dengan memprioritaskan
            keamanan, privasi data, dan keandalan operasional sebagai standar utama.
          </motion.p>
        </div>
      </section>

      {/* ===== QUALITY ===== */}
      <section className="py-24 border-y-4 border-primary-dark bg-accent-green/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="08"
            eyebrow="Kualitas & Performa"
            title="Dirancang untuk Berperforma Tinggi"
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
            "Tampilan yang menarik tidak ada artinya jika pengguna harus menunggu lama."
          </motion.p>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section id="roadmap" className="py-24 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            number="09"
            eyebrow="Peta Jalan (Roadmap)"
            title="Arah Pengembangan Kami"
            desc="Roadmap menggambarkan fokus dan arah bertumbuh, bukan sekadar janji target yang belum pasti."
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
              { t: 'Produk Terstandarisasi', d: 'Mentransformasi solusi kustom menjadi produk yang dapat digunakan lebih luas.' },
              { t: 'Otomasi Terpadu', d: 'Memangkas proses manual melalui integrasi otomasi sistem yang cerdas.' },
              { t: 'Ekspansi Platform', d: 'Mengembangkan platform digital yang memberi nilai berkelanjutan (recurring value).' },
              { t: 'Integrasi Ekosistem', d: 'Menghubungkan seluruh produk TappDigital dalam satu ekosistem terpadu.' },
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
            eyebrow="Kemitraan & Kolaborasi"
            title="Mari Berkembang Bersama"
            desc="TappDigital terbuka untuk berbagai bentuk kolaborasi dan sinergi digital."
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
            eyebrow="Hubungi Kami"
            title="Mulai Kolaborasi & Diskusi"
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
              Punya ide atau rencana<br />
              <span className="text-primary-indigo">produk digital impian?</span>
              <br />
              MARI WUJUDKAN BERSAMA.
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
