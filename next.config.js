/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Allow next/image to work with static export (no Image Optimization on Pages)
    unoptimized: true,
  },
  trailingSlash: true, // safer for static hosts like GitHub Pages
};

module.exports = nextConfig;
