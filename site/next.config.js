/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Dark Iron Repo',
    description: 'Dark Iron Docker Repo Images.',
    icon: '/img/logo.svg',
    listUrl: 'https://darkiron71.github.io/kasm/1.0/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
