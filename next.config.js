/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || '';

const basePath = isCI && repoName ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  images: {
    // Allow next/image to work with static export (no Image Optimization on Pages)
    unoptimized: true,
  },
  trailingSlash: true, // safer for static hosts like GitHub Pages
  basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
