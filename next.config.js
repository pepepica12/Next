/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
