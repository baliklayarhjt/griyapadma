import { articles } from "@/datax/articles";
import Link from "next/link";
import Script from "next/script";

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return <div>Artikel tidak ditemukan</div>;

  return (
    <main className="pt-24">
      {/* SEO SCHEMA */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            author: {
              "@type": "Person",
              name: article.author,
            },
            datePublished: article.date,
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-brown mb-4">
          {article.title}
        </h1>

        <div className="text-sm text-gray-400 mb-6">
          {article.author} • {article.date}
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </p>

        {/* CTA */}
        <div className="mt-10 bg-gold/10 border border-gold/30 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-brown mb-3">
            Tertarik dengan Hunian Griya Padma?
          </h3>

          <Link
            href="https://wa.me/6282240148900"
            className="inline-block mt-2 px-8 py-3 bg-gold text-white rounded-full font-semibold hover:opacity-90 transition"
          >
            Konsultasi Sekarang
          </Link>
        </div>

        {/* BACK */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            ← Kembali ke Beranda
          </Link>
        </div>
      </article>
    </main>
  );
}
