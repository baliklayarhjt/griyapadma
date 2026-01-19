import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function UnitCard({ unit }: any) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition group">
      {/* IMAGE */}
      <div className="relative h-56">
        <Image
          src={unit.image}
          alt={unit.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brown/60 via-transparent to-gold/40" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-brown">
          {unit.name}
        </h3>

        <ul className="mt-3 space-y-1 text-sm text-gray-600">
          {unit.specs.map((spec: string, i: number) => (
            <li key={i}>• {spec}</li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/unit/${unit.slug}`}
            className="px-5 py-2 border border-gold text-gold rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition"
          >
            Detail
          </Link>

          <a
            href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20${unit.name}`}
            className="text-green-500 text-2xl hover:scale-110 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
