/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },

  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"],
  },
};

module.exports = nextConfig;
