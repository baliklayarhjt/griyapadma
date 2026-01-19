import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaBed,
  FaBath,
  FaCar,
  FaTree,
  FaBuilding,
  FaStore,
  FaDoorOpen,
} from "react-icons/fa";

// ===== ICON HELPER =====
const getSpecIcon = (spec: string) => {
  const text = spec.toLowerCase();

  if (text.includes("kamar tidur")) return <FaBed />;
  if (text.includes("kamar mandi")) return <FaBath />;
  if (text.includes("carport") || text.includes("parkir")) return <FaCar />;
  if (text.includes("taman")) return <FaTree />;
  if (text.includes("cluster")) return <FaDoorOpen />;
  if (text.includes("komersial") || text.includes("ruko")) return <FaStore />;

  return <FaBuilding />; // default
};

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

        {/* SPECS */}
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          {unit.specs?.map((spec: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-gold text-sm">
                {getSpecIcon(spec)}
              </span>
              <span>{spec}</span>
            </li>
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
            href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20unit%20${encodeURIComponent(
              unit.name
            )}`}
            className="text-green-500 text-2xl hover:scale-110 transition"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
