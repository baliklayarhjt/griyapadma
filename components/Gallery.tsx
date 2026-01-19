import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="flex gap-3 mt-4 overflow-x-auto py-2">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Gallery ${i + 1}`}
          width={112}
          height={90}
          className="object-cover rounded-xl border cursor-pointer hover:opacity-80 transition"
        />
      ))}
    </div>
  );
}
