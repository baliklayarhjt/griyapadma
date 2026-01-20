"use client";

import { useEffect } from "react";

export default function TikTokGallery() {
  useEffect(() => {
    // Load TikTok script on client only
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="galeri" className="py-24 bg-ivory scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest">
            Video Gallery
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brown">
            Galeri Kehidupan Premium
          </h2>
          <p className="mt-4 text-gray-600">
            Dokumentasi kawasan, fasilitas, dan lingkungan asri melalui video
            TikTok resmi kami.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "7575394030888963336",
            "7583134773078412562",
            "7596295866839780616",
          ].map((id) => (
            <div
              key={id}
              className="rounded-3xl overflow-hidden shadow-lg bg-white"
            >
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@clustergriyapadma_bdg/video/${id}`}
                data-video-id={id}
              >
                <section>
                  <a
                    href={`https://www.tiktok.com/@clustergriyapadma_bdg/video/${id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on TikTok
                  </a>
                </section>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
