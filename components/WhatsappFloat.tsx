"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      aria-label="Chat WhatsApp"
   className="
  fixed bottom-6 right-6 z-50
  flex items-center gap-3
  bg-green-500 text-white
  px-5 py-3 rounded-full
  shadow-lg
  transition-all duration-500
  animate-fade-in
"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden md:block text-sm font-semibold">
        Konsultasi Gratis
      </span>
    </a>
  );
}
