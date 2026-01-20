export default function Footer() {
  return (
    <footer className="bg-brown text-white border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gold">
              Griya Padma Bandung
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
              Hunian elit dan premium di kawasan strategis Bandung dengan
              lingkungan asri, fasilitas lengkap, dan legalitas terpercaya.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-widest">
              Kontak
            </h4>
            <ul className="mt-3 space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
              <li>📞 +62 822-4014-8900</li>
              <li>✉️ marketing@griyapadma.com</li>
              <li>📍 Bandung, Jawa Barat</li>
              <li>
                <a
                  href="https://www.instagram.com/gpa_theluxurybandung?igsh=YnFmMzBzc2F1MmU4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition"
                  aria-label="Instagram Griya Padma Bandung"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-widest">
              Navigasi
            </h4>
            <ul className="mt-3 space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#unit" className="hover:text-gold">
                  Unit
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-gold">
                  Fasilitas
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 sm:mt-12 border-t border-gold/20 pt-4 sm:pt-6 text-center text-[10px] sm:text-xs text-white/50">
          © 2026 Griya Padma Bandung. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
