"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PromoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 sm:pt-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-brown mb-4 leading-tight"
          >
            BELI RUMAH, LANGSUNG DAPAT{" "}
            <span className="text-gold block sm:inline">
              NMAX / BRIO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 mb-10"
          >
            ❌ Tanpa Undian • ❌ Tanpa Diundi • ✅ Langsung Serah Terima
          </motion.p>

          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            {/* NMAX */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-64 sm:w-72 md:w-80"
            >
              <Image
                src="/images/nmax.jpg"
                alt="Bonus Motor Yamaha NMAX"
                width={400}
                height={250}
                className="w-full h-auto drop-shadow-xl"
                priority
              />
              <p className="mt-3 font-semibold text-sm text-gray-700">
                Bonus Motor Yamaha NMAX
              </p>
            </motion.div>

            {/* PLUS ICON */}
            <div className="text-3xl font-bold text-gold">+</div>

            {/* BRIO */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-64 sm:w-72 md:w-96"
            >
              <Image
                src="/images/brio.jpg"
                alt="Bonus Mobil Honda Brio"
                width={450}
                height={250}
                className="w-full h-auto drop-shadow-xl"
              />
              <p className="mt-3 font-semibold text-sm text-gray-700">
                Bonus Mobil Honda Brio
              </p>
            </motion.div>
          </motion.div>

          {/* BADGES */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {[
              "BONUS MOTOR / MOBIL",
              "FREE KITCHEN SET",
              "FREE KOMPOR",
            ].map((item) => (
              <span
                key={item}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold rounded-full text-xs sm:text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>

          {/* PROMO CONTENT */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 text-left">
            {[
              {
                title: "🎁 Bonus Kendaraan",
                desc: "Motor Yamaha NMAX atau Mobil Honda Brio tanpa undian.",
              },
              {
                title: "🍳 Interior Siap Pakai",
                desc: "FREE Kitchen Set & Kompor. Rumah siap huni.",
              },
              {
                title: "⏰ Unit Terbatas",
                desc: "Promo hanya untuk unit tertentu. Siapa cepat dia dapat.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                className="border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm bg-white"
              >
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="https://wa.me/6282240148900"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gold text-white text-base sm:text-lg font-bold hover:opacity-90 transition"
            >
              Klaim Promo Sekarang
            </a>

            <p className="text-[11px] sm:text-xs text-gray-400 mt-4 mb-5">
              *Syarat & ketentuan berlaku. Promo tidak dapat digabungkan.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
