import Link from "next/link";

export default function ArticleCTA() {
  return (
    <div className="mt-12 bg-gradient-to-br from-gold/20 to-white border border-gold/30 rounded-2xl p-6 sm:p-8 text-center">
      <h3 className="text-lg sm:text-xl font-bold text-brown mb-3">
        Tertarik Punya Hunian di Griya Padma?
      </h3>

      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Konsultasi gratis, tanpa komitmen. Dapatkan info unit, promo,
        dan simulasi KPR langsung dari tim kami.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/promo"
          className="px-6 py-3 rounded-full bg-gold text-white font-semibold text-sm text-center hover:opacity-90 transition"
        >
          🔥 Lihat Promo
        </Link>

        <Link
          href="https://wa.me/6282240148900"
          className="px-6 py-3 rounded-full border border-gold text-gold font-semibold text-sm text-center hover:bg-gold hover:text-white transition"
        >
          Konsultasi WhatsApp
        </Link>
      </div>
    </div>
  );
}
