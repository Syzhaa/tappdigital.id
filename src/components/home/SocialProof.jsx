export default function SocialProof() {
  const categories = ['UMKM & BISNIS', 'KREATOR KONTEN', 'CALON PENGANTIN', 'MAHASISWA', 'TOKO ONLINE', 'PROFESIONAL']

  return (
    <section className="bg-primary-yellow border-y-4 border-primary-dark overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8 animate-marquee">
          <span className="font-black uppercase text-lg whitespace-nowrap bg-primary-dark text-white px-3 py-1">DIPERCAYA OLEH</span>
          {[...categories, ...categories].map((cat, i) => (
            <div
              key={i}
              className="font-black uppercase text-lg whitespace-nowrap opacity-90"
            >
              ✦ {cat}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
