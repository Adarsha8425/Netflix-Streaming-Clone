import type { NextConfig } from "next";

const repoName = 'Netflix-Streaming-Clone';

const nextConfig: NextConfig = {
  // Export as a static site (for GitHub Pages)
  output: 'export',
  // When deploying to GitHub Pages, set these at build time by providing
  // the env var GITHUB_PAGES=true in the CI workflow so assets are served
  // under `/Netflix-Streaming-Clone`.
  basePath: process.env.GITHUB_PAGES ? `/${repoName}` : undefined,
  assetPrefix: process.env.GITHUB_PAGES ? `/${repoName}` : undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
