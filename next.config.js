/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // You can add MDX options here if needed
  },
})

const isProd = process.env.NODE_ENV === "production";

module.exports = withMDX({
  output: "export",
  basePath: isProd ? "/2025_portfolio" : "",
  assetPrefix: isProd ? "/2025_portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/2025_portfolio" : "",
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
