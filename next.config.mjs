/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Necessary for static exports in GitHub Pages
  },
  trailingSlash: true,  // Ensure directories end with a trailing slash
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      '/404': { page: '/not-found' },  // Define the custom 404 page
    };
  },
};

export default nextConfig;
