/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    topLevelAwait: true,
  },

  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"],
  },

  experiments: {
    topLevelAwait: true,
  },

  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },

  webpack(config) {
    config.experimental = { ...config.experimental, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;
