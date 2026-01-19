"use client";

import { useEffect, useState } from "react";

export default function FloatingFormButton() {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Button Floating */}
      <button
        onClick={() => setOpenModal(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3
                   bg-gold text-brown px-6 py-4 rounded-full shadow-2xl
                   hover:scale-105 transition"
      >
        📝 <span className="font-semibold">Isi Form Minat</span>
      </button>

      {/* Modal Form */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-brown text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-brown mb-4">Form Minat Pembelian</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                const unit = (form.elements.namedItem("unit") as HTMLInputElement).value;

                // Kirim ke WhatsApp
                const waUrl = `https://wa.me/628123456789?text=Halo,%20nama%20${encodeURIComponent(
                  name
                )},%20No.%20HP%20${encodeURIComponent(phone)},%20minat%20unit%20${encodeURIComponent(unit)}`;
                window.open(waUrl, "_blank");

                // Reset form
                form.reset();
                setOpenModal(false);
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                name="phone"
                placeholder="No. HP"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="text"
                name="unit"
                placeholder="Unit Minat"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold text-brown font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
