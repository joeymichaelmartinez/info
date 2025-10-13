/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/info',
  images: { unoptimized: true },
  assetPrefix: '/info/',
};

module.exports = nextConfig;
