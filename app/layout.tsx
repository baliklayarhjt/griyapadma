import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clustergriyapadma.com"),

  title: {
    default: "Cluster Griya Padma | Hunian Premium di Bandung",
    template: "%s | Griya Padma",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "google46746bacbd82cc84",
  },

  description:
    "GPA The Luxury – Cluster Griya Padma adalah hunian premium modern di Bandung dengan desain elegan, fasilitas lengkap, dan lingkungan eksklusif. Berlokasi strategis dengan akses mudah ke pusat kota serta didukung sertifikat SHM, menjadikannya pilihan ideal untuk hunian dan investasi.",

  keywords: [
    // brand
    "griya padma",
    "gpa the luxury",
    "cluster griya padma",

    // lokasi utama
    "rumah bandung selatan",
    "perumahan bandung selatan",
    "hunian bandung selatan",
    "cluster rumah bandung selatan",

    // properti umum
    "hunian rumah bandung",
    "perumahan bandung",
    "cluster rumah bandung",
    "rumah dijual bandung",
    "rumah baru bandung",

    // premium & value
    "rumah premium bandung",
    "rumah premium bandung selatan",
    "perumahan premium bandung",
    "rumah mewah bandung harga terjangkau",
    "rumah premium murah bandung",

    // promo & marketing
    "rumah bandung berhadiah",
    "promo rumah bandung",
    "rumah baru bandung berhadiah",
    "perumahan bandung promo",
    "rumah bandung harga promo",

    // target market
    "rumah untuk keluarga di bandung",
    "investasi rumah bandung",
    "rumah siap huni bandung",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "GPA The Luxury – Cluster Griya Padma | Hunian Premium di Bandung Selatan",
    description:
      "GPA The Luxury – Cluster Griya Padma menghadirkan hunian premium modern di Bandung Selatan dengan desain elegan, fasilitas lengkap, lokasi strategis, dan sertifikat SHM. Ideal untuk hunian keluarga dan investasi.",
    url: "https://www.clustergriyapadma.com",
    siteName: "GPA The Luxury – Griya Padma",
    images: [
      {
        url: "/house-3.webp",
        width: 1200,
        height: 630,
        alt: "GPA The Luxury – Cluster Griya Padma Bandung Selatan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GPA The Luxury – Hunian Premium di Bandung Selatan",
    description:
      "Hunian premium modern di Bandung Selatan dengan fasilitas lengkap, lokasi strategis, sertifikat SHM, dan promo menarik.",
    images: ["/house-3.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-ivory text-brown antialiased">
        {/* ✅ JSON-LD SCHEMA */}
        <Script
          id="griya-padma-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["RealEstateListing", "HousingProject"],
              name: "Cluster Griya Padma",
              description:
                "Cluster Griya Padma adalah hunian rumah premium di Bandung dengan desain modern, lokasi strategis, fasilitas lengkap, dan sertifikat SHM.",
              url: "https://www.clustergriyapadma.com/",
              image: ["https://www.clustergriyapadma.com/house-3.webp"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bandung",
                addressRegion: "Jawa Barat",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.95,
                longitude: 107.6,
              },
              numberOfAvailableAccommodationUnits: "Multiple",
              floorSize: {
                "@type": "QuantitativeValue",
                minValue: 40,
                maxValue: 120,
                unitCode: "MTK",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "One Gate System",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Keamanan 24 Jam",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "CCTV",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Area Hijau",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Jalan Lebar",
                  value: true,
                },
              ],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "IDR",
                lowPrice: "500000000",
                highPrice: "2000000000",
                availability: "https://schema.org/InStock",
                url: "https://www.clustergriyapadma.com/unit",
              },
              seller: {
                "@type": "RealEstateAgent",
                name: "Marketing Resmi Griya Padma",
                url: "https://www.clustergriyapadma.com/",
                telephone: "+62-812-3456-7890",
              },
            }),
          }}
        />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
