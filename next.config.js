/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.wixstatic.com'],
    unoptimized: true,
  },
  // Allow external images without optimization
  experimental: {},
}

module.exports = nextConfig
