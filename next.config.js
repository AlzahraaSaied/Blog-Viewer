/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ["picsum.photos"],
    },
  };
  
  module.exports = nextConfig;
  