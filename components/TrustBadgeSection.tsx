"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Landmark, FileCheck, Building2 } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Keamanan 24 Jam", desc: "One Gate System & Security" },
  { icon: FileCheck, title: "Legalitas Lengkap", desc: "SHM • IMB • PBG" },
  { icon: Landmark, title: "Bank Rekanan", desc: "KPR Bank Nasional" },
  { icon: Building2, title: "Developer Terpercaya", desc: "Berpengalaman & Profesional" },
];

export default function TrustBadgeSection() {
  return (
    <section className="py-24 bg-brown">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
