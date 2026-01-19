export default function Footer() {
  return (
    <footer className="bg-brown text-white border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-gold">
              Griya Padma Bandung
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Hunian elit dan premium di kawasan strategis Bandung
              dengan lingkungan asri, fasilitas lengkap, dan
              legalitas terpercaya.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>📞 +62 812-3456-7890</li>
              <li>✉️ marketing@griyapadma.com</li>
              <li>📍 Bandung, Jawa Barat</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><a href="#unit" className="hover:text-gold">Unit</a></li>
              <li><a href="#fasilitas" className="hover:text-gold">Fasilitas</a></li>
              <li><a href="#gallery" className="hover:text-gold">Galeri</a></li>
              <li><a href="#contact" className="hover:text-gold">Kontak</a></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-gold/20 pt-6 text-center text-xs text-white/50">
          © 2026 Griya Padma Bandung. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
