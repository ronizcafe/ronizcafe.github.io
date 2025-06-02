import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  assetPrefix: isProd ? '/your-repo-name/' : '', // For GitHub Pages subpath
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
