import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Hunian Nyaman di Lokasi Strategis Bandung",
    excerpt:
      "Griya Padma hadir sebagai solusi hunian modern dengan lingkungan asri, akses mudah ke pusat kota, dan legalitas aman.",
    author: "Tim Marketing Griya Padma",
    slug: "hunian-nyaman-bandung",
  },
  {
    id: 2,
    title: "Beli Rumah Sekarang, Langsung Dapat Kendaraan",
    excerpt:
      "Tanpa undian dan tanpa ribet. Program promo Griya Padma memberikan nilai lebih bagi konsumen yang ingin investasi aman.",
    author: "Property Consultant",
    slug: "promo-rumah-dapat-kendaraan",
  },
  {
    id: 3,
    title: "Kenapa Griya Padma Cocok untuk Keluarga Muda",
    excerpt:
      "Desain modern, fasilitas lengkap, dan sistem KPR ringan menjadikan Griya Padma pilihan ideal untuk keluarga muda.",
    author: "Resident Review",
    slug: "hunian-ideal-keluarga-muda",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-brown">
            Cerita & Insight Hunian
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Alasan mengapa Griya Padma menjadi pilihan tepat untuk hunian dan investasi
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-brown mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {item.author}
                </span>

                <Link
                  href={`/artikel/${item.slug}`}
                  className="text-sm font-semibold text-gold hover:underline"
                >
                  Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
