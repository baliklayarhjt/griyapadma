import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami | PT Kramat Jaya Cipta Perdana",
  description:
    "Profil resmi PT Kramat Jaya Cipta Perdana, developer perumahan terpercaya di Bandung. Pengembang GPA – The Luxury Cluster Griya Padma.",
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      {/* SCHEMA ORGANIZATION */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PT Kramat Jaya Cipta Perdana",
            url: "https://www.clustergriyapadma.com",
            logo: "https://www.clustergriyapadma.com/images/icon.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-822-4014-8900",
              contactType: "customer service",
              areaServed: "ID",
              availableLanguage: ["Indonesian"],
            },
            founder: {
              "@type": "Person",
              name: "Haji Iwan Komara",
            },
            sameAs: [
              "https://www.instagram.com/gpa_theluxurybandung",
            ],
          }),
        }}
      />

      {/* HERO ABOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold">
              Tentang Perusahaan
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-brown mb-6">
              PT Kramat Jaya Cipta Perdana
            </h1>

            <p className="text-gray-600 leading-relaxed mb-4">
              PT Kramat Jaya Cipta Perdana merupakan perusahaan pengembang
              properti yang telah berpengalaman mengembangkan berbagai kawasan
              perumahan di Bandung dan sekitarnya.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Salah satu proyek unggulan kami adalah{" "}
              <b>GPA – The Luxury Cluster Griya Padma</b>, hunian elit dengan
              konsep cluster premium yang mengutamakan kenyamanan, keamanan,
              serta nilai investasi jangka panjang.
            </p>

            <Link
              href="https://wa.me/6282240148900"
              className="inline-block px-8 py-4 rounded-full bg-gold text-white font-semibold hover:opacity-90 transition"
            >
              Hubungi Developer
            </Link>
          </div>

          <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/pkj.jpg"
              alt="PT Kramat Jaya Cipta Perdana"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* VISI MISI */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold text-brown mb-3">Visi</h2>
            <p className="text-gray-600 leading-relaxed">
              Menjadi pengembang properti terpercaya yang menghadirkan hunian
              berkualitas tinggi dengan legalitas jelas dan nilai investasi
              berkelanjutan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold text-brown mb-3">Misi</h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔ Mengembangkan hunian berkualitas dan modern</li>
              <li>✔ Menjaga legalitas dan transparansi kepada konsumen</li>
              <li>✔ Memberikan pelayanan profesional dan terpercaya</li>
              <li>✔ Menciptakan nilai investasi jangka panjang</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OWNER / DIRECT CONTACT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-brown mb-4">
            Kontak Langsung Developer
          </h2>

          <p className="text-gray-600 mb-8">
            Untuk informasi resmi, kunjungan lokasi, dan konsultasi langsung,
            silakan hubungi:
          </p>

          <div className="bg-white border rounded-3xl p-8 shadow-sm inline-block">
            <h3 className="text-xl font-semibold text-brown mb-2">
              H. Iwan Komara (Ende)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Owner & Founder – PT Kramat Jaya Cipta Perdana
            </p>

            <a
              href="https://wa.me/6282240148900"
              className="inline-block px-8 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Langsung
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
