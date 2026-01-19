import { units } from "@/datax/unit";
import dynamic from "next/dynamic";
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* HEADER */}
        <h1 className="text-xl sm:text-xl md:text-xl font-bold text-brown mb-8">
          {unit.name}
        </h1>

        {/* GRID UTAMA */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* IMAGE / GALLERY */}
          <div className="flex-1">
            {/* IMAGE utama */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={unit.image}
                alt={unit.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Gallery Thumbnail */}
           {unit.gallery?.length > 0 && <Gallery images={unit.gallery} />}
          </div>

          {/* INFO */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Spesifikasi Singkat */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {unit.specs.map((spec) => (
                <div
                  key={spec}
                  className="bg-gray-50 rounded-xl p-4 text-center text-sm font-medium shadow-sm"
                >
                  {spec}
                </div>
              ))}
            </div>

            {/* Spesifikasi Detail */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Spesifikasi Bangunan
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Lantai", "Granit"],
                  ["Dinding", "Bata Merah"],
                  ["Rangka & Plafond", "Hollow & PVC"],
                  ["Kusen", "Aluminium"],
                  ["Pintu", "Panel Kayu"],
                  ["Jendela", "Aluminium"],
                  ["Listrik", "1300 Watt"],
                  ["Sanitair", "Kran Shower & Kloset Duduk"],
                  ["Sumber Air", "Submersible Pump"],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex justify-between bg-white border rounded-xl px-4 py-3 shadow-sm"
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
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎉 Promo KPR
          </h2>

          <ul className="space-y-2 text-sm sm:text-base">
            <li>✔ Free biaya KPR</li>
            <li>✔ Free notaris, asuransi & surat-surat</li>
            <li>✔ Free BPHTB</li>
            <li>✔ Tanpa DP</li>
            <li className="font-bold text-green-700">
              ALL IN hanya Rp 1.000.000 sampai akad kredit
            </li>
          </ul>

          <a
            href="https://wa.me/628xxxxxxxxxx"
            className="inline-block mt-6 sm:mt-8 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
        {/* BANK PARTNER */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 border border-gray-200 rounded-3xl bg-white shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-brown mb-4">
            Bank Partner
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Demi kemudahan Anda, pihak pengembang perumahan{" "}
            <span className="font-semibold">
              PT. Keramat Jaya Citra Perdana
            </span>{" "}
            bermitra dengan beberapa bank berikut:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center">
            {[
              { name: "Bank Mandiri", logo: "/images/bank/logo-mandiri.png" },
              { name: "BJB", logo: "/images/bank/logo-bjb.png" },
              { name: "BSI", logo: "/images/bank/logo-bsi.png" },
              { name: "BRI", logo: "/images/bank/logo-bri.png" },
              { name: "BTN", logo: "/images/bank/logo-BTN.png" },
              {
                name: "BTN Syariah",
                logo: "/images/bank/logo-btn-syariah.png",
              },
            ].map((bank) => (
              <div
                key={bank.name}
                className="flex flex-col items-center p-2 sm:p-3 bg-gray-50 rounded-xl shadow hover:scale-105 transition-transform"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-20 sm:w-24 h-12 object-contain"
                />
                {/* <span className="text-xs sm:text-sm text-gray-600 mt-1 text-center">
                {bank.name}
              </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
