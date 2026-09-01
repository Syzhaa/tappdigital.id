export default function SocialProof() {
  const categories = ['BUSINESS', 'CREATOR', 'EDUCATION', 'RETAIL', 'STARTUP', 'DIGITAL AGENCY']

  return (
    <section className="bg-primary-yellow border-y-4 border-primary-dark overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8 animate-marquee">
          <span className="font-black uppercase text-lg whitespace-nowrap">DIPERCAYA OLEH</span>
          {[...categories, ...categories].map((cat, i) => (
            <div
              key={i}
              className="font-black uppercase text-lg whitespace-nowrap opacity-80"
            >
              {cat}
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
