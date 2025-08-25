/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/royal-mushrooms-frontend' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/royal-mushrooms-frontend' : '',
  
  // Ensure all pages are statically generated
  experimental: {
    // Remove server-side features for static export
  },
}

module.exports = nextConfig
