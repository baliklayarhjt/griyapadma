"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopUpPromoDorprize() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seenPromo");
    if (!seen) {
      const timer = setTimeout(() => setShow(true), 1000); // delay 1 detik
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem("seenPromo", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-hidden">
      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bisa tambahkan canvas confetti di sini nanti */}
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center shadow-2xl animate-dropBounce mt-10">
        {/* Icon Mobil */}
        <div className="relative w-48 h-20 mx-auto mb-4">
          <Image
            src="https://www.hondabypass.com/wp-content/uploads/2018/05/padang-honda-brio-satya-merah-500.png"
            alt="Mobil  Merah"
            fill
            className="object-contain"
          />
        </div>

        {/* Judul */}
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          🎉 Promo Dorprize Griya Padma!
        </h2>

        {/* Isi Promo */}
        <p className="text-sm sm:text-base mb-6 text-gray-700">
          Griya Padma menawarkan promo menarik seperti DP hanya Rp5 juta all-in, cicilan mulai Rp2,7 jutaan, bonus mobil tanpa diundi, serta gratis biaya KPR, pajak, asuransi jiwa, dan kebakaran untuk rumah 2 lantai, dengan pilihan tipe mulai 40/60 hingga 120/80, berlokasi di Griya Prima Asri, Bandung Selatan.
        </p>

        {/* Tombol CTA */}
        <a
          href="https://wa.me/6281234567890"
          className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
        >
          Konsultasi Sekarang
        </a>

        {/* Tombol Tutup */}
        <button
          onClick={closePopup}
          className="mt-4 block mx-auto text-gray-500 hover:text-gray-700 text-sm"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
