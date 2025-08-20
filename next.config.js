/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/2025_portfolio" : "",
  assetPrefix: isProd ? "/2025_portfolio/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
