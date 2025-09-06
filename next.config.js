/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');
const isCI = process.env.GITHUB_ACTIONS === 'true';
const [owner, repoName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserOrOrgPages = !!owner && !!repoName && repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

// If a CNAME exists, we're deploying to a custom domain => serve from root
const hasCNAME = fs.existsSync(path.join(process.cwd(), 'public', 'CNAME'));

// For user/org pages or custom domain, no basePath. For project pages otherwise, serve under /<repo>
const basePath = hasCNAME ? '' : (isCI && repoName ? (isUserOrOrgPages ? '' : `/${repoName}`) : '');

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
