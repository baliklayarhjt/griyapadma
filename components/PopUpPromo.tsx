"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopUpPromoDoorprize() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = localStorage.getItem("seenPromo");
    if (!seen) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem("seenPromo", "true");
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      {/* POPUP */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl p-5 sm:p-8 text-center shadow-2xl animate-dropBounce mt-10 sm:mt-0">
        
        {/* IMAGE */}
        <div className="relative w-full h-24 sm:h-28 mx-auto mb-4">
          <Image
            src="/promo/mobil-merah.png"
            alt="Promo Doorprize Mobil Griya Padma"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 400px"
            priority={false}
          />
        </div>

        {/* TITLE */}
        <h2
          id="promo-title"
          className="text-xl sm:text-2xl font-bold text-green-700 mb-3"
        >
          🎉 Promo Doorprize Griya Padma
        </h2>

        {/* CONTENT */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Miliki rumah impian di <strong>Griya Padma</strong> dengan promo spesial:
          <br />
          <strong>DP Rp5 Juta All-In</strong>, cicilan mulai
          <strong> Rp2,7 Jutaan</strong>, bonus mobil tanpa diundi, serta
          <strong> gratis biaya KPR, pajak, asuransi jiwa & kebakaran</strong>.
          <br />
          Tersedia tipe <strong>40/60 hingga 120/80</strong>, lokasi strategis
          Bandung Selatan.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20promo%20Griya%20Padma"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Konsultasi Promo Griya Padma via WhatsApp"
        >
          Konsultasi Sekarang
        </a>

        {/* CLOSE */}
        <button
          onClick={closePopup}
          className="mt-4 block mx-auto text-sm text-gray-500 hover:text-gray-700"
          aria-label="Tutup popup promo"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
