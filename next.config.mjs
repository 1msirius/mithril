/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  // This ensures that assets are correctly referenced
  assetPrefix: '.',
}