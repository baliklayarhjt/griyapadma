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
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/3] min-h-[260px] sm:min-h-[320px]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hunian Asri di Pegunungan Bandung"
          fill
          priority={i === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        />
      ))}

      {/* overlay ringan (Safari friendly) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none" />
    </div>
  );
}
