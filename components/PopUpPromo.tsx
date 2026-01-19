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
            src="data:image/jpeg;base64,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nnJLm9i7HVVvvCiw8NBJ2cw1fZux6lU2VSZ0vsr7LXezVhlXx/KdR2J2Ww2FAyIC37xA+nKTk0NiE2N2WwuGACUxccSAZNgREAREQBERAEREAREQBPGFxaexAOXdr/Z/VqsXpHNfW3Gcy2v2SxVInNTa3kZ9PS3VoK2jKD5gGAfIVfAMuhUzDqYYjhPrPGdlcHV+KinoAJBY32YYB9ylfK0A+Ymoy2aU+gMd7HKZ/wBOp1EhMX7Ga4+F0PrAOMGnKck6rX9j2OG4KfUSMr+yvaS/sSfKxgGi0cUV0Zcw+vWVviUPykdJstf2f7QTfh6nQzH/APCsb/6ep90wZyzW2qr4wtdb7ptmG9n2Ofdh6nST2z/Y5janxIEHNmt9IMHMqje9cGTWx+12LwotRr1aYO9UayniTlNxfxtedi2P7C8KLHE1Wb+VDlH3pvOxuwGy8JY0sJSzDc7r3j35hnuQfKbZBw7sv2G2lth1q1s9KgbXrVSxZqd75aKtv9AFH0n0PsHY1HBUEw9BctNBYcyeLMeLE6k+MzwJ7MNgRETAEREAREQBERAEREAREQBERAEREAREQBERAEREA8Ii09iALREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP//Z"
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
