import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

import type { Metadata } from "next";
import PopUpPromoDorprize from "@/components/PopUpPromo";
export const metadata: Metadata = {
  title: {
    default: "Griya Padma | Hunian Premium di Bandung",
    template: "%s | Griya Padma",
  },
  description:
    "Griya Padma adalah hunian premium modern di Bandung dengan fasilitas lengkap dan lokasi strategis.",
  keywords: [
    "griya padma",
    "hunian premium bandung",
    "rumah elit bandung",
    "perumahan bandung",
  ],
  openGraph: {
    title: "Griya Padma | Hunian Premium di Bandung",
    description:
      "Hunian premium modern di Bandung. Lihat tipe unit, fasilitas, galeri, dan lokasi.",
    url: "https://griyapadmasample.netlify.app",
    siteName: "Griya Padma",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Griya Padma Bandung",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-ivory text-brown antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <PopUpPromoDorprize />
        <WhatsappFloat />
     
      </body>
    </html>
  );
}
