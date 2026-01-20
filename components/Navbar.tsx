"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashScroll = (hash: string) => {
    if (pathname === "/") {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // ✅ ONE SOURCE OF TRUTH (page + hash)
  const menuItems = [

    { label: "Tipe Unit", hash: "unit", type: "hash" },
    { label: "Fasilitas", hash: "fasilitas", type: "hash" },
    { label: "Akses", hash: "akses", type: "hash" },
    { label: "Lokasi", hash: "lokasi", type: "hash" },
    { label: "Galeri", hash: "galeri", type: "hash" },
    { label: "Kontak", hash: "kontak", type: "hash" },
        { label: "Tentang Kami", href: "/about", type: "page" },
  ] as const;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/icon.png"
            alt="Logo Griya Padma"
            width={36}
            height={36}
            priority
          />
          <Link href="/" className="text-lg sm:text-xl font-bold text-brown">
            GRIYA <span className="text-gold">PADMA</span>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item) =>
            item.type === "page" ? (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:text-gold ${
                  pathname === item.href
                    ? "text-gold font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.hash}
                href={`/#${item.hash}`}
                className="hover:text-gold"
                onClick={() => handleHashScroll(item.hash)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* DESKTOP CTA */}
        <Link
          href="/promo"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-gold text-white text-sm font-semibold"
        >
          🔥 PROMO TANPA UNDIAN
        </Link>

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
          {menuItems.map((item) =>
            item.type === "page" ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.hash}
                href={`/#${item.hash}`}
                className="text-sm"
                onClick={() => handleHashScroll(item.hash)}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href="/promo"
            className="mt-2 px-6 py-3 rounded-full bg-gold text-white text-sm font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            🔥 PROMO TANPA UNDIAN
          </Link>
        </div>
      )}
    </header>
  );
}
