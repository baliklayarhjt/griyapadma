/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // supaya bisa static export

  images: {
    unoptimized: true, // semua Image tidak optimasi
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kantorpemasarangriyapadma.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "lingkup.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bankbjb.co.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.hondabypass.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
