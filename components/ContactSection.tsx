"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-brown scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-white text-sm font-semibold tracking-widest uppercase">
              Hubungi Kami
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Konsultasi Hunian Premium Anda
            </h2>
            <p className="mt-6 text-white-600 leading-relaxed">
              Dapatkan informasi lengkap mengenai unit, harga, promo, dan
              jadwal survei lokasi. Tim marketing resmi kami siap membantu Anda
              mewujudkan hunian eksklusif di kawasan strategis Bandung.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-gold" />
                <span className="text-white font-medium">
                  +62 812-3456-7890
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-gold" />
                <span className="text-white font-medium">
                  marketing@griyapadma.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-gold" />
                <span className="text-white">
                  Griya Padma, Bandung – Jawa Barat
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="bg-ivory rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-semibold text-brown">
              Jadwalkan Survey Lokasi
            </h3>
            <p className="mt-4 text-gray-600">
              Hubungi kami sekarang untuk mendapatkan brosur, daftar harga,
              dan penawaran eksklusif terbatas.
            </p>

            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20perumahan%20elit%20Griya%20Padma"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-gold px-8 py-4 text-white font-semibold hover:opacity-90 transition"
            >
              Hubungi via WhatsApp
            </a>

            <p className="mt-4 text-xs text-gray-500 text-center">
              Marketing Resmi • Respon Cepat • Data Aman
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
