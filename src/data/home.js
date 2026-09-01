export const navigation = [
  { name: 'Produk', href: '/toko' },
  { name: 'Fitur', href: '#fitur' },
  { name: 'Harga', href: '#harga' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Tentang Kami', href: '/profil' },
]

export const useCases = [
  {
    id: 'umkm',
    title: 'UNTUK UMKM',
    headline: 'Website profesional tanpa ribet.',
    description: 'Punya website toko, katalog, atau company profile dengan harga terjangkau. Revisi unlimited + konsultasi gratis.',
    visual: 'business'
  },
  {
    id: 'wedding',
    title: 'UNTUK CALON PENGANTIN',
    headline: 'Undangan digital yang berkesan.',
    description: 'Buat undangan pernikahan modern, responsif, dan mudah dibagikan. Design custom sesuai tema acara kamu.',
    visual: 'campaign'
  },
  {
    id: 'personal',
    title: 'UNTUK PERSONAL',
    headline: 'Akses premium dengan budget hemat.',
    description: 'Nikmati Netflix, Spotify, Canva, YouTube Premium dan layanan lainnya dengan harga jauh lebih terjangkau.',
    visual: 'code'
  },
  {
    id: 'student',
    title: 'UNTUK MAHASISWA & PEKERJA',
    headline: 'Produktivitas tanpa bobol kantong.',
    description: 'Tools dan akun premium yang kamu butuhkan untuk belajar dan bekerja, dengan harga ramah kantong.',
    visual: 'research'
  }
]

export const products = [
  {
    badge: 'POPULAR',
    title: 'Undangan Digital Custom',
    description: 'Website undangan pernikahan/acara yang modern, responsif, dan mudah dibagikan. Design sesuai keinginan kamu.',
    features: ['Design custom sesuai tema', 'Responsive mobile & desktop', 'Fitur RSVP & Gallery', 'Google Maps terintegrasi', 'Revisi unlimited', 'Konsultasi & pendampingan gratis'],
    cta: 'LIHAT DEMO & HARGA',
    href: '/toko'
  },
  {
    badge: 'BEST DEAL',
    title: 'Akun Premium Sharing',
    description: 'Akses berbagai platform premium dengan harga jauh lebih terjangkau. Akun stabil, aman, dan support responsif.',
    features: ['Netflix, Spotify, YouTube Premium', 'Canva Pro, ChatGPT Plus', 'Akun stabil & berkualitas', 'Harga hemat dari official', 'Garansi & support 24/7', 'Aktivasi cepat'],
    cta: 'CEK KETERSEDIAAN',
    href: '/toko'
  }
]

export const features = [
  {
    title: 'Konsultasi & Pendampingan Gratis',
    description: 'Bingung mau design atau fitur apa? Kami bantu dari awal sampai jadi.',
    bg: 'bg-accent-purple',
    size: 'large'
  },
  {
    title: 'Revisi Unlimited',
    description: 'Ubah, tambah, kurangi sesuka hati sampai 100% sesuai keinginan.',
    bg: 'bg-white',
    size: 'medium'
  },
  {
    title: 'Harga Terjangkau',
    description: 'Kualitas profesional dengan budget UMKM-friendly.',
    bg: 'bg-white',
    size: 'small'
  },
  {
    title: 'Support Responsif',
    description: 'Ada masalah? Chat langsung, fast response.',
    bg: 'bg-white',
    size: 'small'
  }
]

export const steps = [
  {
    number: '01',
    title: 'PILIH PRODUK',
    description: 'Browse katalog kami, pilih produk yang sesuai kebutuhan. Ada demo untuk produk undangan.',
    bg: 'bg-accent-pink'
  },
  {
    number: '02',
    title: 'KONSULTASI & ORDER',
    description: 'Chat dengan kami, diskusikan detail kebutuhan. Order & bayar sesuai paket yang dipilih.',
    bg: 'bg-accent-cyan'
  },
  {
    number: '03',
    title: 'TERIMA & GUNAKAN',
    description: 'Produk selesai? Langsung bisa digunakan. Butuh revisi? Gratis unlimited sampai puas.',
    bg: 'bg-primary-yellow'
  }
]

export const whyChoose = [
  {
    title: 'Harga Transparan & Terjangkau',
    description: 'Tidak ada biaya tersembunyi. Harga jelas dari awal, ramah kantong UMKM dan personal.'
  },
  {
    title: 'Revisi Unlimited + Konsultasi Gratis',
    description: 'Bukan cuma bikin terus ditinggal. Kami dampingi sampai produk benar-benar sesuai keinginan kamu.'
  },
  {
    title: 'Kualitas Profesional',
    description: 'Budget friendly bukan berarti asal-asalan. Semua produk dibuat dengan standar profesional.'
  },
  {
    title: 'Support Responsif',
    description: 'Ada kendala atau pertanyaan? Chat langsung, kami fast response dan siap bantu.'
  }
]

export const testimonials = [
  {
    rating: 5,
    text: 'Undangan digitalnya keren banget! Tamu-tamu pada bilang tampilannya modern dan gampang dibuka. Harga juga masuk akal.',
    author: 'Dian & Rizky',
    role: 'Pengantin'
  },
  {
    rating: 5,
    text: 'Akhirnya nemu tempat jual akun Netflix yang stabil dan harga oke. Support-nya responsif banget, langsung bales.',
    author: 'Andi',
    role: 'Mahasiswa'
  },
  {
    rating: 5,
    text: 'Bikin website toko buat UMKM gue, dibantu dari awal sampai jadi. Revisi berkali-kali juga sabaran. Recommended!',
    author: 'Sarah',
    role: 'Pemilik UMKM'
  }
]

export const pricing = [
  {
    name: 'UNDANGAN DIGITAL',
    price: 'Mulai Rp 150.000',
    features: [
      'Design custom',
      'Responsive',
      'RSVP & Gallery',
      'Revisi unlimited',
      'Konsultasi gratis'
    ],
    cta: 'LIHAT PAKET',
    highlighted: false
  },
  {
    name: 'AKUN PREMIUM',
    badge: 'HEMAT',
    price: 'Mulai Rp 15.000/bulan',
    features: [
      'Netflix, Spotify, dll',
      'Akun stabil & aman',
      'Harga jauh lebih murah',
      'Support 24/7',
      'Garansi'
    ],
    cta: 'CEK HARGA',
    highlighted: true
  }
]

export const faq = [
  {
    question: 'Berapa lama proses pembuatan undangan digital?',
    answer: 'Untuk undangan digital, biasanya 3-7 hari kerja tergantung kompleksitas design dan antrian. Revisi unlimited sampai selesai sesuai keinginan kamu.'
  },
  {
    question: 'Apakah akun premium yang dijual aman dan legal?',
    answer: 'Kami menyediakan akun sharing yang sesuai dengan terms of service masing-masing platform. Akun stabil, ada garansi, dan support responsif jika ada kendala.'
  },
  {
    question: 'Bagaimana cara order?',
    answer: 'Kunjungi halaman Toko, pilih produk yang kamu butuhkan, lalu hubungi kami via WhatsApp/contact yang tersedia untuk konsultasi dan proses order.'
  },
  {
    question: 'Apakah bisa request fitur khusus untuk undangan/website?',
    answer: 'Tentu! Konsultasikan kebutuhan kamu dengan kami. Kami akan bantu wujudkan dengan harga yang sesuai budget.'
  },
  {
    question: 'Apakah ada garansi untuk produk yang dibeli?',
    answer: 'Ya. Untuk undangan digital ada revisi unlimited sampai puas. Untuk akun premium ada garansi replace jika akun bermasalah.'
  }
]

export const footerLinks = {
  product: [
    { name: 'Toko', href: '/toko' },
    { name: 'Fitur', href: '#fitur' },
    { name: 'Harga', href: '#harga' },
    { name: 'FAQ', href: '#faq' }
  ],
  contact: [
    { name: 'Email', href: 'mailto:hello@tappdigital.id' },
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ]
}
