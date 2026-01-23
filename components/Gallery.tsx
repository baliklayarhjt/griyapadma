'use client';

import Image from "next/image";

interface GalleryProps {
  images: string[];
  onClickImage?: (img: string) => void; // callback ke parent
  activeImage?: string; // optional: untuk highlight gambar aktif
}

export default function Gallery({ images, onClickImage, activeImage }: GalleryProps) {
  return (
    <div className="flex gap-3 mt-4 overflow-x-auto py-2">
      {images.map((img, i) => {
        const isActive = img === activeImage;

        return (
          <div
            key={i}
            className={`relative cursor-pointer rounded-xl border-2 transition ${
              isActive ? "border-green-500" : "border-transparent"
            }`}
            onClick={() => onClickImage && onClickImage(img)}
          >
            <Image
              src={img}
              alt={`Gallery ${i + 1}`}
              width={112}
              height={90}
              className="object-cover rounded-xl hover:opacity-80 transition"
            />
            {isActive && (
              <div className="absolute inset-0 rounded-xl border-2 border-green-500 pointer-events-none"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
