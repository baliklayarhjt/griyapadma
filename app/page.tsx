"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import HeroImageSlider from "@/components/HeroImageSlider";
import UnitCard from "@/components/UnitCard";
import TrustBadgeSection from "@/components/TrustBadgeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ArticleCTA from "@/components/ArticleCTA";
import ContactSection from "@/components/ContactSection";
import { units } from "@/datax/unit";
import { motion } from "framer-motion";

const TikTokGallery = dynamic(() => import("@/components/TikTokGallery"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Perumahan Elit Premium Bandung Selatan",
            geo: {
              "@type": "GeoCoordinates",
              latitude: -7.001472887859018,
              longitude: 107.61343362821327,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bandung",
              addressRegion: "Jawa Barat",
              addressCountry: "ID",
            },
          }),
        }}
      />

      <main className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 font-sans scroll-smooth overflow-x-hidden">

        {/* ================= HERO ================= */}
        <section className="flex items-center bg-ivory font-serif min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown leading-snug">
                Hunian Premium Bandung
                <span className="block text-gold text-2xl sm:text-3xl md:text-4xl font-semibold mt-1">
                  Udara Segar & Alam Pegunungan
                </span>
              </h1>
              <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0 font-sans">
                Rumah modern bernuansa alam dengan udara sejuk, lingkungan hijau, dan suasana tenang khas pegunungan Bandung.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/6282240148900"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold/90 transition-all duration-500 ease-in-out"
                >
                  Hubungi Marketing
                </a>
                <a
                  href="#unit"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-gold text-gold rounded-full font-semibold hover:bg-gold/10 transition-all duration-500 ease-in-out"
                >
                  Lihat Unit
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <HeroImageSlider />
            </div>
          </div>
        </section>

        {/* ================= FASILITAS ================= */}
        <section id="fasilitas" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase">Fasilitas Eksklusif</p>
              <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brown font-serif">Fasilitas & Lingkungan Premium</h2>
              <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg font-sans">
                Fasilitas dirancang khusus untuk penghuni — kombinasi kenyamanan, estetika, dan gaya hidup sehat.
              </p>
            </div>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Automatic Gate System", image: "images/onegate.webp" },
                { title: "Jogging Track", image: "images/jogging.webp" },
                { title: "Children Playground", image: "images/playground.webp" },
                { title: "Restro Makanan", image: "images/ruko.webp" },
                { title: "Danau & Taman Premium", image: "images/danau.webp" },
                { title: "24 Hour Security", image: "images/security.webp" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative rounded-3xl overflow-hidden shadow-md group transition-transform duration-500 ease-in-out hover:scale-105"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Exclusive</span>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-brown text-white text-center py-4 text-md font-semibold font-sans">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= UNIT ================= */}
        <section id="unit" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown font-serif">Tipe Unit <span className="text-gold">Eksklusif</span></h2>
              <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg font-sans">Pilihan hunian premium sesuai kebutuhan Anda</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {units.map((unit) => (
                <UnitCard key={unit.slug} unit={unit} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= AKSES FASILITAS ================= */}
        <section id="akses" className="py-16 sm:py-20 lg:py-24 bg-ivory scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase">Akses & Lokasi Strategis</p>
              <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brown font-serif">Akses Fasilitas Sekitar</h2>
              <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg font-sans">
                Hunian asri dengan lingkungan hijau, udara segar, dan akses mudah ke fasilitas modern.
              </p>
            </div>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: "🌿", title: "Lingkungan Hijau & Udara Segar", description: "Berada di kawasan asri dengan sirkulasi udara alami, jauh dari hiruk pikuk kota." },
                { icon: "🏞️", title: "Dekat Wisata Alam Bandung", description: "Akses mudah ke kawasan wisata alam dan area terbuka hijau di Bandung Selatan." },
                { icon: "💧", title: "Danau Eksklusif Dalam Kawasan", description: "Danau alami sebagai pusat ketenangan dan estetika kawasan." },
                { icon: "🚗", title: "Akses Tol Cepat & Mudah", description: "±15 menit menuju Tol Moch. Toha & Buah Batu untuk mobilitas tanpa hambatan." },
                { icon: "🎓", title: "Dekat Telkom University", description: "Lokasi ideal untuk keluarga dan investor dengan akses ke kampus ternama." },
                { icon: "🛒", title: "Fasilitas Perkotaan Lengkap", description: "Dekat pusat belanja, kuliner, sekolah, dan fasilitas kesehatan." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start hover:shadow-md transition-all duration-500 ease-in-out">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brown mb-2 font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base font-sans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LOKASI ================= */}
        <section id="lokasi" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase">Lokasi Strategis</p>
              <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brown font-serif">Hunian di Lokasi Premium Bandung Selatan</h2>
              <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg font-sans">
                Hunian mudah diakses dari Tol Moch. Toha & Buah Batu, dekat Telkom University, kawasan wisata alam, dan pusat belanja. Strategis untuk keluarga dan investasi.
              </p>
            </div>
            <div className="mt-6 md:mt-0 w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d107.61343362821327!3d-7.001472887859018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8b2b1234567%3A0x123456789abcdef!2sGriya%20Pad!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </section>

        {/* ================= CTA, TRUST, TIKTOK, CONTACT, TESTIMONIALS ================= */}
        <ArticleCTA />
        <TrustBadgeSection />
        <TikTokGallery />
        <ContactSection />
        <TestimonialsSection />

      </main>
    </>
  );
}
