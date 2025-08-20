/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // required for GitHub Pages
  basePath: isProd ? '/2025_portfolio' : '',
  assetPrefix: isProd ? '/2025_portfolio/' : '',
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
  staticPageGenerationTimeout: 300,
  trailingSlash: true,

  async exportPathMap(defaultPathMap) {
    // Remove /og from being exported
    delete defaultPathMap['/og'];
    return defaultPathMap;
  },
};

module.exports = nextConfig;