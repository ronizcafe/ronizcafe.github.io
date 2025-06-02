import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // This replaces next export
  assetPrefix: isProd ? '/ronizcafe.github.io/' : '', // For GitHub Pages subpath
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Add basePath if deploying to project site (not user site)
  basePath: isProd ? '/ronizcafe.github.io' : '',
};

export default nextConfig;
