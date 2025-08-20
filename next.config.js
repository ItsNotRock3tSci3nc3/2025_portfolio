const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/2025_portfolio' : '',
  assetPrefix: isProd ? '/2025_portfolio/' : '',
  images: {
    unoptimized: true,
  },
};
