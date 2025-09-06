/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const [owner, repoName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserOrOrgPages = !!owner && !!repoName && repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

// For user/org pages (<owner>.github.io), site is served at root: no basePath
// For project pages (anything else), serve under /<repo>
const basePath = isCI && repoName ? (isUserOrOrgPages ? '' : `/${repoName}`) : '';

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
