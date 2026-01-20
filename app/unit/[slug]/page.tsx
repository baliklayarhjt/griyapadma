import { units } from "@/datax/unit";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });

export async function generateStaticParams() {
  return units.map((unit) => ({
    slug: unit.slug,
  }));
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const unit = units.find((u) => u.slug === params.slug);
  if (!unit) return <div>Unit tidak ditemukan</div>;

  return (
    <main className="pt-24">
      {/* SEO */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: unit.name,
            image: unit.image,
            brand: { "@type": "Brand", name: "Griya Padma" },
            offers: {
              "@type": "Offer",
              priceCurrency: "IDR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* TITLE */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-brown mb-6">
          {unit.name}
        </h1>

        {/* GRID */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* IMAGE */}
          <div className="flex-1">
            <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={unit.image}
                alt={unit.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {unit.gallery?.length > 0 && (
              <div className="mt-4">
                <Gallery images={unit.gallery} />
              </div>
            )}
          </div>

          {/* INFO */}
          <div className="flex-1 space-y-8">
            {/* SPECS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {unit.specs.map((spec) => (
                <div
                  key={spec}
                  className="bg-gray-50 rounded-xl p-3 text-center text-xs sm:text-sm font-medium shadow-sm"
                >
                  {spec}
                </div>
              ))}
            </div>

            {/* DETAIL */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Spesifikasi Bangunan
              </h2>

              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Lantai", "Granit"],
                  ["Dinding", "Bata Merah"],
                  ["Plafond", "PVC"],
                  ["Kusen", "Aluminium"],
                  ["Pintu", "Panel Kayu"],
                  ["Listrik", "1300 Watt"],
                  ["Sanitair", "Kloset Duduk"],
                  ["Air", "Submersible Pump"],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex justify-between border rounded-xl px-4 py-3 bg-white shadow-sm"
                  >
                    <span className="text-gray-500">{label}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PROMO */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-3xl p-6 sm:p-8 shadow">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
            🎉 Promo KPR
          </h2>

          <ul className="space-y-2 text-sm sm:text-base">
            <li>✔ Free biaya KPR</li>
            <li>✔ Free notaris & BPHTB</li>
            <li>✔ Tanpa DP</li>
            <li className="font-bold text-green-700">
              ALL IN hanya Rp 1.000.000 sampai akad
            </li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/promo"
              className="px-6 py-3 rounded-full bg-gold text-white text-sm font-semibold text-center"
            >
              🔥 PROMO TANPA UNDIAN
            </Link>

            <a
              href="https://wa.me/6282240148900"
              className="px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold text-center hover:bg-green-600 transition"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
