import { useState } from 'react'

const navLinks = [
  { label: 'Tour', href: '#tours' },
  { label: 'Điểm đến', href: '#destinations' },
  { label: 'Vì sao chọn chúng tôi', href: '#why' },
  { label: 'Liên hệ', href: '#contact' },
]

const tours = [
  {
    id: 1,
    title: 'Hạ Long – Sapa 5N4Đ',
    subtitle: 'Vịnh di sản & núi rừng Tây Bắc',
    price: '12.990.000',
    unit: 'đ/khách',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    tag: 'Bán chạy',
  },
  {
    id: 2,
    title: 'Miền Trung Di sản',
    subtitle: 'Huế – Đà Nẵng – Hội An 4N3Đ',
    price: '8.490.000',
    unit: 'đ/khách',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    tag: 'Mới',
  },
  {
    id: 3,
    title: 'Phú Quốc 3N2Đ',
    subtitle: 'Resort 5 sao & biển đảo',
    price: '6.990.000',
    unit: 'đ/khách',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    tag: 'Hot',
  },
]

const reasons = [
  {
    icon: '✈️',
    title: 'Tour chất lượng',
    desc: 'Lịch trình cân bằng, khách sạn tiêu chuẩn, không shopping ép.',
  },
  {
    icon: '🛡️',
    title: 'Bảo hiểm trọn gói',
    desc: 'Bảo hiểm du lịch toàn diện cho mọi hành trình.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'HDV tận tâm',
    desc: 'Hướng dẫn viên giàu kinh nghiệm, am hiểu văn hóa địa phương.',
  },
  {
    icon: '💰',
    title: 'Giá tốt nhất',
    desc: 'Cam kết giá minh bạch, ưu đãi sớm cho khách đặt trước.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="font-display text-xl sm:text-2xl font-bold text-teal-800 tracking-tight">
            Wanderlust
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-stone-600 hover:text-teal-600 font-medium transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/25"
          >
            Đặt tour ngay
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-200"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-stone-50 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-stone-600 hover:text-teal-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block py-2 text-teal-600 font-semibold" onClick={() => setMenuOpen(false)}>
              Đặt tour ngay
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(15, 118, 110, 0.75) 0%, rgba(15, 118, 110, 0.4) 50%, rgba(0,0,0,0.5) 100%), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="uppercase tracking-[0.3em] text-teal-200 text-sm font-semibold mb-4">Khám phá thế giới của bạn</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Hành trình đáng nhớ
            <br />
            <span className="text-amber-300">bắt đầu từ đây</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-10">
            Tour du lịch cao cấp, lịch trình tinh gọn và trải nghiệm địa phương chân thực. Đặt tour ngay để nhận ưu đãi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tours"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-400 text-stone-900 font-bold text-lg hover:bg-amber-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Xem tour nổi bật
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a href="#tours" className="text-white/80 hover:text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-teal-600 font-semibold text-sm mb-2">Chọn tour</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
              Tour nổi bật
            </h2>
            <p className="mt-4 text-stone-600 max-w-xl mx-auto">
              Các hành trình được thiết kế kỹ lưỡng, phù hợp mọi đối tượng và ngân sách.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tours.map((tour) => (
              <article
                key={tour.id}
                className="group relative rounded-2xl overflow-hidden bg-stone-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-stone-900 text-xs font-bold uppercase">
                      {tour.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                    {tour.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4">{tour.subtitle}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-teal-600 font-bold text-lg">
                      {tour.price}
                      <span className="text-stone-500 font-normal text-sm"> {tour.unit}</span>
                    </span>
                    <a
                      href="#contact"
                      className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1 group/link"
                    >
                      Chi tiết
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="py-20 sm:py-28 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-teal-600 font-semibold text-sm mb-2">Lý do chọn chúng tôi</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
              Trải nghiệm khác biệt
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, i) => (
              <div
                key={item.title}
                className="relative p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow border border-stone-200/60"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=60')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sẵn sàng khám phá?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Để lại thông tin, đội ngũ tư vấn sẽ liên hệ trong 24h với lịch trình và ưu đãi phù hợp.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-4 py-3 rounded-full text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-amber-400 text-stone-900 font-bold hover:bg-amber-300 transition-colors whitespace-nowrap"
            >
              Nhận tư vấn
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl font-bold text-white">Wanderlust</span>
          <p className="text-sm">© {new Date().getFullYear()} Wanderlust Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Zalo</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slowZoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}

export default App
