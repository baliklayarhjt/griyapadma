'use client';

import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function WhatsappFloat() {
  const [visibleWA, setVisibleWA] = useState(false);
  const [visibleTop, setVisibleTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisibleWA(window.scrollY > 300);
      setVisibleTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/6282240148900"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className={`
          fixed bottom-6 right-6 z-50
          flex items-center gap-3
          bg-green-500 text-white
          px-5 py-3 rounded-full
          shadow-lg
          transition-all duration-500 transform
          ${visibleWA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
          hover:scale-105 hover:shadow-2xl
        `}
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden md:block text-sm font-semibold">
          Konsultasi Gratis
        </span>
      </a>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          fixed bottom-20 right-6 z-50
          bg-gold text-white
          p-3 rounded-full shadow-lg
          transition-all duration-500 transform
          hover:scale-110 hover:shadow-2xl
          ${visibleTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
        `}
      >
        <FaArrowUp />
      </button>
    </>
  );
}
