/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WEBHOOK: process.env.WEBHOOK,
  },
  future: { webpack5: true },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig
