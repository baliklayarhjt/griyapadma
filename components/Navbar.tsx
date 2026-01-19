"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll smooth untuk link hash di halaman homepage
  const handleHashScroll = (hash: string) => {
    // Jika kita sudah di homepage
    if (pathname === "/") {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    // Tutup menu mobile
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-brown">
          GRIYA <span className="text-gold">PADMA</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { label: "Tipe Unit", hash: "unit" },
            { label: "Fasilitas", hash: "fasilitas" },
            { label: "Akses", hash: "akses" },
            { label: "Lokasi", hash: "lokasi" },
            { label: "Galeri", hash: "galeri" },
            { label: "Kontak", hash: "kontak" },
          ].map((item) => (
            <Link
              key={item.hash}
              href={`/#${item.hash}`}
              className="hover:text-gold"
              onClick={() => handleHashScroll(item.hash)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="https://wa.me/6281234567890"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-gold text-white text-sm font-semibold hover:opacity-90 transition"
        >
          Konsultasi
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl font-bold text-brown"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-lg px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Tipe Unit", hash: "unit" },
            { label: "Fasilitas", hash: "fasilitas" },
            { label: "Akses", hash: "akses" },
            { label: "Lokasi", hash: "lokasi" },
            { label: "Galeri", hash: "galeri" },
            { label: "Kontak", hash: "kontak" },
          ].map((item) => (
            <Link
              key={item.hash}
              href={`/#${item.hash}`}
              className="hover:text-gold"
              onClick={() => handleHashScroll(item.hash)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            className="px-6 py-2 rounded-full bg-gold text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Konsultasi
          </a>
        </div>
      )}
    </header>
  );
}
