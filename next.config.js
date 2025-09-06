/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || '';
const isUserOrOrgPages = repoName.toLowerCase().endsWith('.github.io');

// For user/org pages (<user>.github.io), site is served at root: no basePath
// For project pages, serve under /<repo>
const basePath = isCI && repoName && !isUserOrOrgPages ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  images: {
    // Allow next/image to work with static export (no Image Optimization on Pages)
    unoptimized: true,
  },
  trailingSlash: true, // safer for static hosts like GitHub Pages
  basePath,
  assetPrefix: basePath || undefined,
};

module.exports = nextConfig;
