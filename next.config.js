/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? 'dkbj/dkbj.github.io/' : '',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
