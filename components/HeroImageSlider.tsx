"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/house.webp",
  "/images/house-2.webp",
  "/images/house-3.webp",
];

export default function HeroImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // ganti tiap 4 detik

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl overflow-hidden aspect-[4/3]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hunian Asri di Pegunungan Bandung"
          fill
          priority={i === 0} // cuma image pertama
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown/60 to-gold/30 pointer-events-none" />
    </div>
  );
}
